import clsx from 'clsx';

const Tooltip = ({ children, className, position }) => {
    return (
        <div
            className={clsx(
                'tooltip absolute left-0 opacity-0 group-hover:opacity-80 bg-black px-3 py-2 rounded-lg duration-200 z-10',
                className
            )}>
            {children}
        </div>
    );
};

export default Tooltip;
