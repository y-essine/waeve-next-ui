import clsx from 'clsx';
import { css } from '@emotion/react';
import Image from 'next/image';

const Avatar = ({ src, size, className, border }) => {
    return (
        <div
            className={clsx(`relative rounded-full`, className, border && `border border-primary`)}
            css={css`
                width: ${size * 4}px;
                height: ${size * 4}px;
            `}>
            <Image
                className={`rounded-full h-full w-full object-cover`}
                src={src}
                alt=""
                width="50"
                height="50"
                priority
            />
        </div>
    );
};

export default Avatar;
