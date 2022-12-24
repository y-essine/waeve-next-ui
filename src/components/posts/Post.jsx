import moment from 'moment';
import Card from '@/components/ui/card/Card';
import Icon from '@/components/ui/icons/Icon';
import Avatar from '@/components/ui/avatars/Avatar';
import AvatarList from '@/components/ui/avatars/AvatarList';
import Image from 'next/image';

const Post = ({ post }) => {
    // get created at and format with moment to ago
    const createdAt = moment(post.createdAt).fromNow();
    const formatter = new Intl.NumberFormat('en-US', {
        notation: 'compact',
        compactDisplay: 'short'
    });

    return (
        <Card px py className="group">
            <div className="post flex">
                <div className="mr-4">
                    <Avatar src={post.author.avatar} size={14} className="cursor-pointer" />
                </div>
                <div className="w-full h-full">
                    <div className="top-part">
                        <div className="flex flex-grow justify-between">
                            <div className="flex items-center">
                                <div className="font-bold capitalize hover:text-primary-t/80 text-primary-t cursor-pointer">
                                    {post.author.name}
                                </div>
                                {post.author.verified && (
                                    <div className="pl-3">
                                        <Icon icon="fire" color="#f5911e" size={18} />
                                    </div>
                                )}
                                <Icon icon="dot" size={16} box={30} disabled />
                                <div className="text-sm font-normal opacity-50 hover:opacity-75 cursor-pointer">
                                    @{post.author.username}
                                </div>
                            </div>
                            <div className="flex items-center">
                                <Icon icon="ellipsis" button round size={16} box={25} darker />
                            </div>
                        </div>
                        <div className="text-xs font-normal opacity-30">{createdAt}</div>
                    </div>
                    <div className="content-part mt-3 pr-3">
                        <div className="font-normal text-slate-300">{post.content}</div>
                    </div>
                    {post.images && (
                        <div className="images-part mt-3 pr-3">
                            <div className="flex-1 flex-wrap">
                                {post.images?.map((image, index) => (
                                    <div key={index} className="rounded-md">
                                        <Image
                                            src={image}
                                            alt=""
                                            className="w-full h-full min-h-[12rem] max-h-[20rem] rounded-md overflow-hidden object-cover"
                                            width={500}
                                            height={500}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    <div className="reactions-part mt-3">
                        <div className="flex items-center">
                            <Icon
                                icon="favorite"
                                size={10}
                                box={18}
                                color="white"
                                hoverColor="white"
                                circle="#d95353"
                                className="z-20 outline outline-3 outline-primary rounded-full"
                            />
                            <Icon
                                icon="comment"
                                size={10}
                                box={18}
                                color="white"
                                hoverColor="white"
                                circle="#74c48b"
                                className="z-10 outline outline-3 outline-primary rounded-full"
                            />
                            <Icon
                                icon="undo2"
                                size={10}
                                box={18}
                                color="white"
                                hoverColor="white"
                                circle="#784c9e"
                                className="z-0 outline outline-3 outline-primary rounded-full"
                            />
                            <div className="ml-2 text-xs font-semibold text-secondary-t opacity-60">
                                {formatter.format(post.reactions)}
                            </div>
                        </div>
                    </div>
                    <div className="buttons-part pt-4 pr-3">
                        <div className="flex justify-between">
                            <button className="flex items-center justify-center py-2 text-sm font-medium text-tertiary-t hover:text-primary-t duration-200 rounded-lg group">
                                <Icon
                                    icon="favorite"
                                    size={14}
                                    box={20}
                                    group
                                    hoverColor="#d95353"></Icon>
                                <span className="ml-2 text-xs font-semibold hidden xs:block">
                                    Like
                                </span>
                            </button>
                            <button className="flex items-center justify-center py-2 text-sm font-medium text-tertiary-t hover:text-primary-t duration-200 rounded-lg group">
                                <Icon icon="comment" size={16} box={20} group></Icon>
                                <span className="ml-2 text-xs font-semibold hidden xs:block">
                                    Comment
                                </span>
                            </button>
                            <button className="flex items-center justify-center py-2 text-sm font-medium text-tertiary-t hover:text-primary-t duration-200 rounded-lg group">
                                <Icon icon="undo2" size={16} box={20} group></Icon>
                                <span className="ml-2 text-xs font-semibold hidden xs:block">
                                    Repost
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default Post;
