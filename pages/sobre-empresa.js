import Head from 'next/head';

import Menu from '../components/Menu';

import { Container, Jumbotron } from 'reactstrap';

function Home() {
    return (
        <>
            <Head>
                <title>Sobre Empresa - Celke</title>
                <meta name="description" content="Sobre a empresa ..." />
                <meta name="author" content="Celke" />
            </Head>

            <Menu />

            <Jumbotron fluid className="descr-top">
                <style>
                    {`.descr-top{
                        background-color: #000;
                        color: #fed136;
                        padding-top: 100px;
                        padding-bottom: 50;
                        margin-bottom: 0rem !important;
                    }`}
                </style>
                <Container className="text-center">
                    <h1 className="display-4">Sobre Empresa</h1>
                </Container>
            </Jumbotron>
        </>
    );
};

export default Home;