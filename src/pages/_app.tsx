import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { Inter } from '@next/font/google';
import '@/globals.css';

import Home from '@/pages/_home';
import Navbar from '@/components/layouts/navbar/Navbar';
import Sidebar from '@/components/layouts/sidebar/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const isHome = router.pathname === '/';

    return (
        <div className={'flex justify-center ' + inter.className}>
            <div className="w-[1280px] h-full">
                {/* navbar */}
                <Navbar className="py-5 px-5 sm:px-8" />
                <div className="flex py-5 px-5 sm:px-8">
                    {/* sidebar */}
                    <Sidebar />
                    {/* content */}
                    {isHome ? <Home /> : <Component {...pageProps} />}
                </div>
            </div>
        </div>
    );
}
