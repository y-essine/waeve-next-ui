import { useState } from 'react';
import Post from '@/components/posts/Post';
import NewPost from '@/components/posts/NewPost';
import Posts from '@/assets/data/posts';
import Card from '@/components/ui/card/Card';
import Recommended from '@/components/layouts/recommended/Recommended';

function Home() {
    const [postsList, _] = useState(Posts);

    return (
        <>
            {/* <div className="flex justify-center">
                <div className="w-[34rem] px-6">
                    {postsList.map((p) => (
                        <Post key={p.id} post={p} />
                    ))}
                </div>
                <div className="font-extrabold select-none text-zinc-300/80">Recommended</div>
            </div> */}
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
        </>
    );
}

export default Home;
