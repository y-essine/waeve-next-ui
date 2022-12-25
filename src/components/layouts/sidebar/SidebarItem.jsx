import React from 'react';

import clsx from 'clsx';
import Link from 'next/link';
import Icon from '@/components/ui/icons/Icon';
import Tooltip from '@/components/ui/tooltip/Tooltip';

const SidebarItem = ({ item, isSidebarOpen, isActive, tooltip }) => {
    return (
        <Link
            href={item.path}
            className="flex items-center cursor-pointer group rounded-lg relative">
            <Icon icon={item.icon} group size={item.size || 30} box={48} isActive={isActive} />
            {tooltip && <Tooltip className="ml-14 block smd:hidden">{item.name}</Tooltip>}
            {isSidebarOpen && (
                <span
                    className={clsx(
                        'ml-2 font-medium text-zinc-400 group-hover:text-zinc-300 duration-200 select-none hidden smd:block',
                        isActive && '!text-zinc-300'
                    )}>
                    {item.name}
                </span>
            )}
        </Link>
    );
};

export default SidebarItem;
