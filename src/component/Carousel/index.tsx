import React from 'react';
import classNames from 'classnames';
import { Carousel } from 'antd';
import './index.scss';
import styleModule from './index.module.less';

export interface Props {
    style?: React.CSSProperties;
    className?: String;
}
const contentStyle = {
    height: '400px',
};

// const UCarousel: React.FC<Props> = (props: Props) => {
//     const { className, style } = props;

//     return (
//         <div className={classNames('carousel', className && className)} style={style}>
//             <Carousel autoplay>
//                 <div>
//                     <div style={contentStyle} className="carousel-01"></div>
//                 </div>
//                 <div>
//                     <div style={contentStyle} className="carousel-02"></div>
//                 </div>
//                 <div>
//                     <div style={contentStyle} className="carousel-03"></div>
//                 </div>
//                 <div>
//                     <div style={contentStyle} className="carousel-04"></div>
//                 </div>
//             </Carousel>
//         </div>
//     );
// };
const UCarousel: React.FC<Props> = (props: Props) => {
    const { className, style } = props;

    return (
        <div className={classNames(styleModule.carousel, className && className)} style={style}>
            <Carousel autoplay>
                <div>
                    <div style={contentStyle} className={styleModule['carousel-01']}></div>
                </div>
                <div>
                    <div style={contentStyle} className={styleModule['carousel-02']}></div>
                </div>
                <div>
                    <div style={contentStyle} className={styleModule['carousel-03']}></div>
                </div>
                <div>
                    <div style={contentStyle} className={styleModule['carousel-04']}></div>
                </div>
            </Carousel>
        </div>
    );
};

export default UCarousel;
