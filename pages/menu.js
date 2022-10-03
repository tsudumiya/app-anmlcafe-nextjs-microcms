import Head from 'next/head';
import Layout from '../components/Layout';
import LayoutWrapper from '../components/LayoutWrapper';
import LayoutVisual from '../components/LayoutVisual';
import LayoutMenuList from '../components/LayoutMenuList';
import BaseButton from '../components/BaseButton';
import { client } from '../libs/client';

export default function Menu({ menu }) {
    return (
        <>
            <Head>
                <title>メニュー | Anml-cafe</title>
                <meta name="description" content="Anml Cafeは、打ち合わせやリモートワークができるちょっとした空間を提供します。" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <LayoutWrapper>
                <LayoutVisual title={'Menu'} height={40} visual="visual-menu" />
                <div className="container w-full mx-auto pt-20 pb-20 px-6 md:px-6 md:px-0">
                    <div className="mb-16">
                        {menu.map((menu) => {
                            return <LayoutMenuList key={menu.id} image={menu.image} imageUrl={menu.image.url} imageWidth={menu.image.width} imageHeight={menu.image.height} name={menu.name} body={menu.body} price={menu.price} flagBody={true} />;
                        })}
                    </div>
                    <BaseButton name="トップへ戻る" link="/" />
                </div>
            </LayoutWrapper>
        </>
    );
}
Menu.getLayout = function getLayout(page) {
    const layoutProps = 'Menu';
    return <Layout>{page}</Layout>;
};
export const getStaticProps = async () => {
    const data = await client.get({ endpoint: 'menu' });
    return {
        props: {
            menu: data.contents,
        },
    };
};
