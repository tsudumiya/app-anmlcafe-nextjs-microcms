import Head from 'next/head';
import Layout from '../../components/Layout';
import LayoutWrapper from '../../components/LayoutWrapper';
import LayoutVisual from '../../components/LayoutVisual';
import BaseButton from '../../components/BaseButton';
import { client } from '../../libs/client';
import { dateFormat } from '../../utils/functions';

export default function Detail({ information }) {
    const valueDate = dateFormat(information.date);
    return (
        <>
            <Head>
                <title>お知らせ詳細 | Anml-cafe</title>
                <meta name="description" content="Anml Cafeは、打ち合わせやリモートワークができるちょっとした空間を提供します。" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <LayoutWrapper>
                <LayoutVisual title={'Menu'} height={40} visual="visual-information" />
                <div className="w-full md:max-w-3xl mx-auto pt-20 mb-20 px-6 md:px-6 md:px-0">
                    <h2 className="text-xl pb-5 border-b border-gray-500 border-solid font-bold">{information.title}</h2>
                    <div className="pt-4 mb-4">
                        <time className="text-gray-700 text-base">{valueDate}</time>
                    </div>
                    <div className="mb-16">
                        <div
                            dangerouslySetInnerHTML={{
                                __html: `${information.body}`,
                            }}
                        />
                    </div>
                    <BaseButton name="お知らせへ戻る" link="/information" />
                </div>
            </LayoutWrapper>
        </>
    );
}
Detail.getLayout = function getLayout(page) {
    const layoutProps = 'Detail';
    return <Layout>{page}</Layout>;
};

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
    const data = await client.get({ endpoint: 'information' });
    const paths = data.contents.map((content) => `/information/${content.id}`);
    return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
    const id = context.params.id;
    const data = await client.get({ endpoint: 'information', contentId: id });

    return {
        props: {
            information: data,
        },
    };
};
