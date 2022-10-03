import Head from 'next/head';
import Layout from '../components/Layout';
import LayoutWrapper from '../components/LayoutWrapper';
import LayoutVisual from '../components/LayoutVisual';
import BaseButton from '../components/BaseButton';

export default function error() {
    return (
        <>
            <Head>
                <title>Anml-cafe</title>
                <meta name="description" content="Anml Cafeは、打ち合わせやリモートワークができるちょっとした空間を提供します。" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <LayoutWrapper>
                <LayoutVisual title={'404'} height={40} visual="visual-error" />
                <div className="container w-full mx-auto pt-20 px-6 md:px-0">
                    <div className="mb-20">
                        <p className="text-center text-lg font-medium text-gray-900">お探しのページは存在しません。</p>
                    </div>
                    <BaseButton name="トップへ戻る" link="/" />
                </div>
            </LayoutWrapper>
        </>
    );
}
error.getLayout = function getLayout(page) {
    const layoutProps = 'error';
    return <Layout>{page}</Layout>;
};
