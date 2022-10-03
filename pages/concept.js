import Head from 'next/head';
import Layout from '../components/Layout';
import LayoutWrapper from '../components/LayoutWrapper';
import LayoutVisual from '../components/LayoutVisual';
import Image from 'next/image';
import BaseButton from '../components/BaseButton';

export default function Concept({}) {
    return (
        <>
            <Head>
                <title>コンセプト | Anml-cafe</title>
                <meta name="description" content="Anml Cafeは、打ち合わせやリモートワークができるちょっとした空間を提供します。" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <LayoutWrapper>
                <LayoutVisual title={'Concept'} height={'40vh'} visual="visual-concept" />
                <div className="md:container w-full mx-auto pt-20 pb-20 px-6 md:px-0">
                    <h3 className="text-2xl text-red-800 font-extrabold mb-5 text-left md:text-center">打ち合わせやリモートワークができるちょっとした空間</h3>
                    <div className="clearfix p-4 mb-10">
                        <div className="float-right mb-2 h-56 relative w-[300px] md:ml-4 ">
                            <Image src="/concept.jpg" alt="商品名" layout="responsive" objectFit="cover" width="1080" height="720" />
                        </div>
                        <div>
                            <p className="mb-5">
                                Anml Cafeでは、リモートワークや会社の打ち合わせなどが快適に行える空間を提供するカフェです。
                                <br />
                                リモートワークや打ち合わせを快適にするため席は完全個室にしています。
                                <br />
                                オンラインでの作業ができるようにWifi環境も完備しています。
                                <br />
                                また、週末は勉強会の場所としても提供しています。
                            </p>
                            <p>
                                お食事は天然素材を使ったドーナツ・パンケーキを開発しています。
                                <br />
                                シンプルな素材と調理方法で食材本来の味を引き立てる自慢のドーナツ・パンケーキをご提供しています。
                                <br />
                                コーヒーはブラジル産の豆を使用して、酸味とスッキリとして苦味があるコーヒーになります。
                            </p>
                        </div>
                    </div>
                    <BaseButton name="トップへ戻る" link="/" />
                </div>
            </LayoutWrapper>
        </>
    );
}
Concept.getLayout = function getLayout(page) {
    const layoutProps = 'Concept';
    return <Layout>{page}</Layout>;
};
