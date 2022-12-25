import create from 'zustand';
import { devtools, combine } from 'zustand/middleware';
import useRouter from 'next/router';

const pageStore = create(
    devtools(
        combine(
            {
                isHome: false,
                isExplore: false,
                isSettings: false
            },
            (set) => ({
                setPage: (page) => {
                    switch (page) {
                        case '/':
                            set({ isHome: true, isExplore: false, isSettings: false });
                            break;
                        case '/home':
                            set({ isHome: true, isExplore: false, isSettings: false });
                            break;
                        case '/explore':
                            set({ isHome: false, isExplore: true, isSettings: false });
                            break;
                        case '/settings':
                            set({ isHome: false, isExplore: false, isSettings: true });
                            break;
                        default:
                            set({ isHome: false, isExplore: false, isSettings: false });
                            break;
                    }
                }
            })
        )
    )
);

export default pageStore;
