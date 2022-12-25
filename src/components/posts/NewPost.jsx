import Card from '@/components/ui/card/Card';
import Avatar from '@/components/ui/avatars/Avatar';
import TextArea from 'react-textarea-autosize';
import Icon from '@/components/ui/icons/Icon';

const NewPost = () => {
    return (
        <div className="flex">
            <Avatar
                src={
                    'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1103.jpg'
                }
                size={12}
            />
            <div className="flex-1 pl-5">
                <TextArea
                    className="w-full h-12 px-4 py-3"
                    placeholder="What's on your mind?"
                    maxRows={6}></TextArea>

                <div className="flex justify-between pt-2">
                    <label
                        className="flex items-center justify-center w-[30%] py-2 text-sm font-medium text-tertiary-t hover:bg-primary rounded-lg outline outline-2 outline-primary cursor-pointer"
                        htmlFor="photo">
                        <Icon
                            icon="camera"
                            size={16}
                            box={20}
                            color="#d95353"
                            className="-mt-[1px]"></Icon>
                        <span className="ml-2 text-xs font-semibold hidden xs:block">Photo</span>
                    </label>
                    <label
                        className="flex items-center justify-center w-[30%] py-2 text-sm font-medium text-tertiary-t hover:bg-primary rounded-lg outline outline-2 outline-primary cursor-pointer"
                        htmlFor="video">
                        <Icon icon="dice" size={16} box={20} color="#69be7b"></Icon>
                        <span className="ml-2 text-xs font-semibold hidden xs:block">Video</span>
                    </label>
                    <label className="flex items-center justify-center w-[30%] py-2 text-sm font-medium text-tertiary-t hover:bg-primary rounded-lg outline outline-2 outline-primary cursor-pointer">
                        <Icon icon="equalizer2" size={16} box={20} color="#5e99b9"></Icon>
                        <span className="ml-2 text-xs font-semibold hidden xs:block">Poll</span>
                    </label>
                </div>
            </div>

            <input
                id="photo"
                name="photo"
                type="file"
                className="hidden"
                accept=".png,.jpg,.jpeg"></input>
            <input
                id="video"
                name="video"
                type="file"
                className="hidden"
                accept=".mp4,.mov,.mpeg"></input>
        </div>
    );
};

export default NewPost;
