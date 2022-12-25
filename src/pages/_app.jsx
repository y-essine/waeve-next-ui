import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Inter } from '@next/font/google';
import '@/globals.css';

import Home from '@/pages/_home';
import Navbar from '@/components/layouts/navbar/Navbar';
import Sidebar from '@/components/layouts/sidebar/Sidebar';

import { pageStore } from '@/store';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
    const router = useRouter();

    const { setPage, isHome } = pageStore();

    useEffect(() => {
        setPage(router.pathname);
    }, [router.pathname, setPage]);

    return (
        <div className={'flex justify-center ' + inter.className}>
            <div className="w-[1280px] h-full">
                {/* navbar */}
                <Navbar className="py-5 px-5 sm:px-8" />
                <div className="flex py-5 px-5 sm:px-8">
                    {/* sidebar */}
                    <Sidebar />
                    {/* content */}
                    <div className="w-full">{isHome ? <Home /> : <Component {...pageProps} />}</div>
                </div>
            </div>
        </div>
    );
}
