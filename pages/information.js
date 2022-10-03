import Head from 'next/head';
import Layout from '../components/Layout';
import LayoutWrapper from '../components/LayoutWrapper';
import LayoutVisual from '../components/LayoutVisual';
import BaseButton from '../components/BaseButton';
import LayoutInformationList from '../components/LayoutInformationList';
import { client } from '../libs/client';

export default function Information({ information }) {
    return (
        <>
            <Head>
                <title>お知らせ | Anml-cafe</title>
                <meta name="description" content="Anml Cafeは、打ち合わせやリモートワークができるちょっとした空間を提供します。" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <LayoutWrapper>
                <LayoutVisual title={'Information'} height={40} visual="visual-information" />
                <div className="w-full md:max-w-3xl mx-auto pt-20 px-6 md:px-6 md:px-0">
                    <div className="mb-20">
                        <div className="mb-16">
                            {information.map((information) => {
                                return <LayoutInformationList key={information.id} id={information.id} title={information.title} date={information.date} />;
                            })}
                        </div>
                        <BaseButton name="トップへ戻る" link="/" />
                    </div>
                </div>
            </LayoutWrapper>
        </>
    );
}

Information.getLayout = function getLayout(page) {
    const layoutProps = 'Information';
    return <Layout>{page}</Layout>;
};
export const getStaticProps = async () => {
    const data = await client.get({ endpoint: 'information' });
    return {
        props: {
            information: data.contents,
        },
    };
};
