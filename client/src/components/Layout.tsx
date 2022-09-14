import Head from 'next/head';
import Navbar from './Navbar';

interface LayoutProps {
    title?: string;
    children?: React.ReactNode;
}

export default function Layout({ title = 'MBTI', children }: LayoutProps) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            </Head>
            <Navbar />
            {children}
        </>
    );
}
