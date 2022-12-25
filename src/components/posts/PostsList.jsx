import Post from './Post';
import { postStore } from '@/store';

const PostsList = () => {
    const { posts } = postStore();

    return (
        <div className="space-y-4">
            {posts.map((p) => (
                <Post key={p.id} post={p} />
            ))}
        </div>
    );
};

export default PostsList;
