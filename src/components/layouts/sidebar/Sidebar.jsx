import { useState } from 'react';
import SidebarItem from '@/components/layouts/sidebar/SidebarItem';
import Icon from '@/components/ui/icons/Icon';
import clsx from 'clsx';
import { pageStore } from '@/store';

const items = {
    home: {
        name: 'Home',
        icon: 'home',
        path: '/'
    },
    explore: {
        name: 'Explore',
        icon: 'compass2',
        path: '/explore'
    },
    settings: {
        name: 'Settings',
        icon: 'wrench',
        path: '/settings',
        size: 26
    }
};

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const { isHome, isExplore, isSettings } = pageStore();

    return (
        <div className={clsx('pr-8', !isOpen && 'w-10')}>
            <div className="space-y-6 w-12 smd:w-32 ">
                <SidebarItem item={items.home} isActive={isHome} tooltip />
                <SidebarItem item={items.explore} isActive={isExplore} tooltip />
                <SidebarItem item={items.settings} isActive={isSettings} tooltip />
            </div>
        </div>
    );
};

export default Sidebar;
