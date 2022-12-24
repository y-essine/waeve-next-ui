import { useState } from 'react';
import Post from '@/components/posts/Post';
import NewPost from '@/components/posts/NewPost';
import Posts from '@/assets/data/posts';
import Card from '@/components/ui/card/Card';
import Recommended from '@/components/layouts/recommended/Recommended';
import Head from 'next/head';

function Home() {
    const [postsList, _] = useState(Posts);

    return (
        <div className="Home">
            <Head>
                <title>🌊 Waeve - Home</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex flex-grow">
                <div className="w-full space-y-4">
                    <NewPost />
                    <div className="space-y-4">
                        {postsList.map((p) => (
                            <Post key={p.id} post={p} />
                        ))}
                    </div>
                </div>
                <div className="hidden md:block ml-4">
                    <Recommended />
                </div>
            </div>
        </div>
    );
}

export default Home;
