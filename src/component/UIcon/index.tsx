import React from 'react';
import classNames from 'classnames'
import styleModule from './index.module.less';

// 定义一个加载目录的函数
const requireAll = (requireContext: any) => {
    requireContext.keys().forEach(requireContext);
};
const req = require.context('@/assets/icons', false, /\.svg$/);

// 加载目录下的所有 svg 文件
requireAll(req);

export interface SvgProps {
    style?: React.CSSProperties;
    className?: String;
    iconClass?: String;
    onClick?: React.MouseEventHandler<SVGSVGElement> | (() => {});
}

const UIcon: React.FC<SvgProps> = (props: SvgProps) => {
    const { className, iconClass, style, onClick } = props;

    return (
        <svg className={classNames(styleModule.svgIcon, className && className)} onClick={onClick} style={style} aria-hidden>
            <use xlinkHref={`#icon-${iconClass}`} />
        </svg>
    );
};

export default UIcon;
