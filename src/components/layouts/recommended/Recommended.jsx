import Card from '@/components/ui/card/Card';
import Avatar from '@/components/ui/avatars/Avatar';

const Recommended = () => {
    const people = [
        {
            name: 'Ballacks Sohn',
            avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/872.jpg',
            username: 'bizarreballz'
        },
        {
            name: 'Yoda der Große',
            avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/584.jpg',
            username: 'yodagross'
        },
        {
            name: 'Pop Smoke',
            avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/487.jpg',
            username: 'popsmoke'
        }
    ];

    return (
        <Card className="w-[14rem] lg:w-[20rem]" title="✨ Recommended">
            <div className="flex flex-col items-center w-full">
                {people.map((p, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between py-3 px-4 hover:bg-secondary duration-200 cursor-pointer w-full">
                        <div className="flex items-center">
                            <Avatar src={p.avatar} size={12} className="mr-4" />
                            <span>
                                <div className="text-sm font-medium">{p.name}</div>
                                <div className="text-xs opacity-50">@{p.username}</div>
                            </span>
                        </div>
                        <button className="bg-slate-300 hover:bg-slate-400  duration-200 text-primary font-semibold text-xs rounded-full py-2 px-5 ml-3 hidden lg:block">
                            Follow
                        </button>
                    </div>
                ))}
            </div>
        </Card>
    );
};

export default Recommended;
