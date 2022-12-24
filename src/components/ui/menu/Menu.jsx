import clsx from 'clsx';
import Card from '@/components/ui/card/Card';

const Menu = ({
    className,
    children,
    template,
    top,
    right,
    bottom,
    left,
    onclicked,
    onhovered,
    title
}) => {
    return (
        <div className="dropdown dropdown-bottom dropdown-end">
            <label tabIndex={0}>{template}</label>
            <ul
                tabIndex={0}
                className={clsx(
                    'dropdown-content menu shadow-xl bg-primary rounded-box w-52',
                    className
                )}>
                <Card title={title} px py className="shadow-xl">
                    {children}
                </Card>
            </ul>
        </div>
    );
};

export default Menu;
