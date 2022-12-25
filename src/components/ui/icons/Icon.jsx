import PropTypes from 'prop-types';
// import '@/assets/icons/style.css';
import { css } from '@emotion/react';
import clsx from 'clsx';

const Icon = ({
    icon,
    size,
    color,
    hoverColor,
    button,
    disabled,
    end,
    className,
    group,
    round,
    circle,
    box,
    children,
    isActive,
    darker,
    stacked
}) => {
    return (
        <div className="relative">
            <span
                className={clsx(
                    `icon-${icon} flex justify-center items-center duration-200 transition-colors relative outline outline-0 rounded-md`,
                    button && 'cursor-pointer',
                    className,
                    !color && 'text-secondary-t',
                    !hoverColor && !disabled && 'hover:text-primary-t',
                    group && !disabled && 'group-hover:text-primary-t',
                    disabled && '!text-tertiary-t !cursor-default',
                    round && !circle && 'rounded-full hover:bg-white/10',
                    isActive && '!text-primary-t !outline-2 outline-[#e47373] ',
                    darker && 'opacity-50',
                    end && '!justify-end',
                    stacked && '!outline-1 outline-primary'
                )}
                css={css`
                    color: ${color};
                    ${button &&
                    !disabled &&
                    `
                        &:hover {
                            color: ${hoverColor};
                        }
                    `}
                    font-size: ${size}px;
                    ${(size || box) &&
                    `
                        width: ${box || size}px;
                        height: ${box || size}px;
                        `}
                    transform-style: preserve-3d;
                `}>
                {children}

                <div
                    className={clsx('box absolute outline-1 outline-primary')}
                    css={css`
                        ${circle &&
                        !round &&
                        (box || size) &&
                        `
                        border-radius: 50%;
                        background: ${circle};
                        z-index: -1;
                        width: ${box || size}px;
                        height: ${box || size}px;
                        transform: translate(-50%, -50%);
                        top: 50%;
                        left: 50%;)`}
                    `}></div>
            </span>
            <div className="hidden text-secondary-t outline-2 outline-primary"></div>
            <div className="hidden outline-2 outline-[#e47373]"></div>
        </div>
    );
};

Icon.defaultProps = {
    size: 16,
    disabled: false
};

Icon.propTypes = {
    icon: PropTypes.string.isRequired,
    className: PropTypes.string
};

export default Icon;
