import create from 'zustand';
import { devtools, combine } from 'zustand/middleware';

const postStore = create(
    devtools(
        combine(
            {
                posts: [],
                isLoading: false,
                isLoaded: false,
                error: null
            },
            (set) => ({
                setPosts: (posts) => set({ posts }),
                setIsLoading: (isLoading) => set({ isLoading }),
                setIsLoaded: (isLoaded) => set({ isLoaded }),
                setError: (error) => set({ error }),
                fetchPosts: async () => {
                    set({ isLoading: true });
                    try {
                        const response = await fetch(
                            'https://63a654b9f8f3f6d4ab0a2899.mockapi.io/api/posts'
                        );
                        const posts = await response.json();
                        set({ posts, isLoading: false, isLoaded: true });
                    } catch (error) {
                        set({ error, isLoading: false, isLoaded: false });
                    }
                }
            })
        )
    )
);

export default postStore;
