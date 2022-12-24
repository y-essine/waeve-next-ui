import { useState } from 'react';
import SidebarItem from '@/components/layouts/sidebar/SidebarItem';
import Icon from '@/components/ui/icons/Icon';
import clsx from 'clsx';

const items = [
    {
        name: 'Home',
        icon: 'home',
        path: '/',
        active: true
    },
    {
        name: 'Explore',
        icon: 'compass2',
        path: '/explore'
    },
    {
        name: 'Settings',
        icon: 'wrench',
        path: '/settings',
        size: 26
    }
];

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className={clsx('pr-8', !isOpen && 'w-10')}>
            <div className="w-full space-y-6">
                {/* <div
                    className="absolute -right-10"
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}>
                    <Icon icon="pushpin" button />
                </div> */}
                {items.map((item, index) => (
                    <SidebarItem
                        key={index}
                        item={item}
                        isSidebarOpen={isOpen}
                        isActive={item.active}
                        tooltip
                    />
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
