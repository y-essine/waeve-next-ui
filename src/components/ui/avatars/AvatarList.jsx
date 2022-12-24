import Avatar from './Avatar';

const AvatarList = ({ users, size, limit }) => {
    return (
        <div className="flex">
            <div className="flex items-center -space-x-2">
                {users.slice(0, limit).map((user, index) => (
                    <div key={index} className="relative ">
                        <Avatar
                            src={user.avatar}
                            size={size}
                            className="cursor-pointer group-hover:outline-zinc-800 outline-zinc-900 outline outline-2"
                        />
                    </div>
                ))}
            </div>
            <div>
                {users.length > limit && (
                    <div className="text-zinc-600 text-xs">+{users.length - limit}</div>
                )}
            </div>
        </div>
    );
};

export default AvatarList;
