import Head from 'next/head';
import Layout from '../components/Layout';
import LayoutWrapper from '../components/LayoutWrapper';
import LayoutVisual from '../components/LayoutVisual';
import LayoutMenuList from '../components/LayoutMenuList';
import BaseHeading from '../components/BaseHeading';
import BaseButton from '../components/BaseButton';
import LayoutInformationList from '../components/LayoutInformationList';
import { client } from '../libs/client';

export default function Home({ menu, information }) {
    return (
        <>
            <Head>
                <title>Anml-cafe</title>
                <meta name="description" content="Anml Cafeは、打ち合わせやリモートワークができるちょっとした空間を提供します。" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <LayoutWrapper>
                <LayoutVisual title={'Next.js SAMPLE SITE DEMO'} message={'お知らせやメニューにmicroCMSを\n導入したDEMOサイトになります。'} />

                <div className="w-full md:max-w-3xl mx-auto pt-20 px-6 md:px-0">
                    <div className="mb-20">
                        <BaseHeading>Anml Cafeのおすすめメニュー</BaseHeading>

                        <div className="md:flex md:flex-wrap md:justify-between mb-16">
                            {menu.map((menu) => {
                                return (
                                    <LayoutMenuList
                                        key={menu.id}
                                        image={menu.image}
                                        imageUrl={menu.image.url}
                                        imageWidth={menu.image.width}
                                        imageHeight={menu.image.height}
                                        name={menu.name}
                                        body={menu.body}
                                        price={menu.price}
                                        flagBody={false}
                                        itemClass={'mb-10 md:mb-0 md:w-56 shadow-lg bg-white'}
                                        blockClass={'max-w relative'}
                                        imageClass={'w-full'}
                                        dataClass={'px-6 py-4'}
                                    />
                                );
                            })}
                        </div>
                        <BaseButton name="メニューの一覧" link="/menu/" />
                    </div>

                    <div className="mb-20">
                        <BaseHeading>Anml Cafeのお知らせ</BaseHeading>
                        <div className="mb-16">
                            {information.map((information) => {
                                return <LayoutInformationList key={information.id} id={information.id} title={information.title} date={information.date} />;
                            })}
                        </div>
                        <BaseButton name="お知らせの一覧" link="/information/" />
                    </div>
                </div>
            </LayoutWrapper>
        </>
    );
}
Home.getLayout = function getLayout(page) {
    const layoutProps = 'home';
    return <Layout>{page}</Layout>;
};

export const getStaticProps = async () => {
    const menu = await client.get({ endpoint: 'menu', queries: { filters: `flag[equals]true`, offset: 0, limit: 3 } });

    const information = await client.get({ endpoint: 'information', queries: { offset: 0, limit: 3 } });

    return {
        props: {
            menu: menu.contents,
            information: information.contents,
        },
    };
};
