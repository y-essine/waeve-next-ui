import clsx from 'clsx';

const Badge = () => (
    <div className={clsx('absolute top-0 right-0 -mt-1 -mr-1 w-3 h-3')}>
        <span className="absolute inline-flex animate-ping h-3 w-3 rounded-full bg-red-400 opacity-75"></span>
        <span className="absolute inline-flex rounded-full h-3 w-3 bg-red-500"></span>
    </div>
);

export default Badge;
