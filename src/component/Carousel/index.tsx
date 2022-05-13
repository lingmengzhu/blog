import React from 'react';
import classNames from 'classnames';
import './index.scss';

export interface Props {
    style?: React.CSSProperties;
    className?: String;
    iconClass?: String;
}

const Carousel: React.FC<Props> = (props: Props) => {
    const { className, iconClass, style } = props;

    return (
        <svg className={classNames('svgIcon', className && className)} style={style} aria-hidden>
            <use xlinkHref={`#icon-${iconClass}`} />
        </svg>
    );
};

export default Carousel;
