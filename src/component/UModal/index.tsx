import React from 'react';
import styleModule from './index.module.less';
import { Modal } from 'antd';

export interface Props {
    title?: string;
    visible: boolean;
    handleOk?: Function;
    handleCancel?: Function;
    children?: React.ReactNode;
    modalRender?: (node: React.ReactNode) => React.ReactNode;
    wrapClassName?: string;
    width?: string | number;
}

const UModal: React.FC<Props> = (props: Props) => {
    const {
        title,
        visible,
        handleOk = () => {},
        handleCancel = () => {},
        children,
        modalRender,
        wrapClassName,
        width,
    } = props;

    return (
        <Modal
            title={title}
            visible={visible}
            onOk={() => handleOk()}
            onCancel={() => handleCancel()}
            modalRender={modalRender}
            wrapClassName={wrapClassName}
            width={width}
            cancelText="取消"
            okText="确认"
            centered
        >
            {children}
        </Modal>
    );
};

export default UModal;
