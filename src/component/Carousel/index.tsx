import React from 'react';
import classNames from 'classnames';
import { Carousel } from 'antd';
import styleModule from './index.module.less';

export interface Props {
    style?: React.CSSProperties;
    className?: String;
}
const contentStyle = {
    height: '400px',
};

const UCarousel: React.FC<Props> = (props: Props) => {
    const { className, style } = props;

    return (
        <div className={classNames(styleModule.carousel, className && className)} style={style}>
            <Carousel autoplay>
                <div>
                    <div style={contentStyle} className={styleModule.carousel01}></div>
                </div>
                <div>
                    <div style={contentStyle} className={styleModule.carousel02}></div>
                </div>
                <div>
                    <div style={contentStyle} className={styleModule.carousel03}></div>
                </div>
                <div>
                    <div style={contentStyle} className={styleModule.carousel04}></div>
                </div>
            </Carousel>
        </div>
    );
};

export default UCarousel;
