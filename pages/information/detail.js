import Head from 'next/head';
import Layout from '../../components/Layout';
import LayoutWrapper from '../components/LayoutWrapper';
import LayoutVisual from '../../components/LayoutVisual';
import BaseButton from '../../components/BaseButton';

export default function Detail() {
    return (
        <>
            <Head>
                <title>お知らせ詳細 | Anml-cafe</title>
                <meta name="description" content="Anml Cafeは、打ち合わせやリモートワークができるちょっとした空間を提供します。" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <LayoutWrapper>
                <LayoutVisual title={'Menu'} height={40} visual="visual-information" />
                <div className="w-full md:max-w-3xl mx-auto pt-20">
                    <h2 className="text-xl pb-5 border-b border-gray-500 border-solid font-bold">お知らせ詳細</h2>
                    <div className="pt-4 mb-4">
                        <time className="text-gray-700 text-base">2022.09.15</time>
                    </div>
                    <div className="mb-20">
                        <h3>見出しが入ります見出しが入ります見出しが入ります</h3>
                        <p>テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります</p>
                        <ul>
                            <li>リストリストリスト</li>
                            <li>リストリストリスト</li>
                            <li>リストリストリスト</li>
                        </ul>
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
