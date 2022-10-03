import Head from 'next/head';
import Layout from '../components/Layout';
import LayoutWrapper from '../components/LayoutWrapper';
import LayoutVisual from '../components/LayoutVisual';
import BaseButton from '../components/BaseButton';

export default function Shop({}) {
    return (
        <>
            <Head>
                <title>店舗情報 | Anml-cafe</title>
                <meta name="description" content="Anml Cafeは、打ち合わせやリモートワークができるちょっとした空間を提供します。" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <LayoutWrapper>
                <LayoutVisual title={'Shop'} height={40} visual="visual-shop" />
                <div className="container w-full mx-auto pt-20 pb-20 px-6 md:px-0">
                    <table className="table-auto w-full mb-10">
                        <tbody>
                            <tr>
                                <td className="border px-4 py-2">店舗名</td>
                                <td className="border px-4 py-2">Anmlカフェ</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">店舗住所</td>
                                <td className="border px-4 py-2">
                                    〒101-0051
                                    <br />
                                    東京都●●区●●0-00-00
                                    <br />
                                    Anmlビルディング22F
                                </td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">座席数</td>
                                <td className="border px-4 py-2">50席</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">アクセス</td>
                                <td className="border px-4 py-2">●●駅5番出口から徒歩1分</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="mb-10">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.2991058333905!2d139.7580929152592!3d35.69425648019131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c1049646ffb%3A0x7abe3f67bddf1a86!2z44CSMTAxLTAwNTEg5p2x5Lqs6YO95Y2D5Luj55Sw5Yy656We55Sw56We5L-d55S677yR5LiB55uu77yR77yQ77yV!5e0!3m2!1sja!2sjp!4v1593965393195!5m2!1sja!2sjp"
                            className="w-full h-64"
                            aria-hidden="false"
                        ></iframe>
                    </div>
                    <BaseButton name="トップへ戻る" link="/" />
                </div>
            </LayoutWrapper>
        </>
    );
}
Shop.getLayout = function getLayout(page) {
    const layoutProps = 'Shop';
    return <Layout>{page}</Layout>;
};
