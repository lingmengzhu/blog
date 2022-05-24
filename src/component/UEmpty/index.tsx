import React from 'react';
import styleModule from './index.module.less';
import UIcon from '@/component/UIcon';

export interface Props {
    height?: string | number;
    width?: string | number;
    text?: string;
}

const UEmpty: React.FC<Props> = (props: Props) => {
    const { height = '400px', width = 'auto', text = '暂无数据' } = props;

    return (
        <div className={styleModule.uEmpty} style={{ height, width }}>
            <div>
                <UIcon iconClass="commitEmpty" style={{ height: '120px', width: '120px', fill: '#777' }} />
            </div>
            <div className={styleModule.uText}>{text}</div>
        </div>
    );
};

export default UEmpty;
