/* eslint-disable react/no-danger */
import React, { useState } from 'react';
import { Button, message, Input, Select } from 'antd';
import UIcon from '@/component/UIcon';
import UModal from '@/component/UModal';
import Tags from './Tags';

// 引入编辑器组件
import BraftEditor, { ControlType } from 'braft-editor';
import { addArticle } from '@/api/article';
// 引入编辑器样式
import 'braft-editor/dist/index.css';
import styleModule from './index.module.less';
import './index.less';

const iconStyle = { height: '24px', width: '24px', fill: '#777' };
const Option = Select.Option;

// 编辑器组件
const controls: ControlType[] = [
    'undo',
    'redo',
    'separator',
    'font-size',
    'line-height',
    'letter-spacing',
    'separator',
    'text-color',
    'bold',
    'italic',
    'underline',
    'strike-through',
    'separator',
    'superscript',
    'subscript',
    'remove-styles',
    'emoji',
    'separator',
    'text-indent',
    'text-align',
    'separator',
    'headings',
    'list-ul',
    'list-ol',
    // 'blockquote',
    // 'code',
    // 'separator',
    'link',
    'separator',
    'hr',
    'separator',
    'media',
    'separator',
    // 'clear',
];
const Index = () => {
    console.log('Index');
    const [previewVisible, setPreviewVisible] = useState(false);
    const [submitVisible, setSubmitVisible] = useState(false);
    const [title, setTitle] = useState('');
    const [classify, setClassify] = useState('1');
    const [tags, setTags] = useState([]);
    const [editorState, setEditorState] = useState(BraftEditor.createEditorState(null));

    const onSubmit = () => {
        const htmlContent = editorState.toHTML();
        addArticle({ title, classify, tags, content: htmlContent })
            .then(() => {
                message.success('保存成功');
            })
            .catch(() => {
                message.error('服务器错误');
            });
    };
    //扩展插件
    const extendControls: any[] = [
        {
            key: 'preview-button',
            type: 'button',
            title: '预览文章',
            className: 'previewBtn',
            text: <UIcon iconClass="preview" style={iconStyle} onClick={() => setPreviewVisible(true)} />,
        },
        'separator',
        {
            key: 'submit-button',
            type: 'button',
            title: '文章提交后需要审核，请耐心等待',
            className: 'submitBtn',
            text: (
                <span>
                    <Button type="primary" onClick={() => setSubmitVisible(true)}>
                        提交审核
                    </Button>
                </span>
            ),
        },
    ];
    return (
        <div className={styleModule.pageAdd}>
            <div className={styleModule.layout}>
                <div className={styleModule.content}>
                    <BraftEditor
                        className={styleModule.editor}
                        controls={controls}
                        extendControls={extendControls}
                        value={editorState}
                        onChange={(v) => setEditorState(v)}
                    />
                </div>
            </div>
            <UModal
                visible={previewVisible}
                wrapClassName="editorModal"
                handleCancel={() => setPreviewVisible(false)}
                width="920px"
                modalRender={() => {
                    return (
                        <div
                            className={styleModule.preview}
                            dangerouslySetInnerHTML={{ __html: editorState.toHTML() }}
                        />
                    );
                }}
            ></UModal>
            <UModal
                title="提交审核"
                visible={submitVisible}
                handleCancel={() => setSubmitVisible(false)}
                handleOk={() => {
                    setSubmitVisible(false);
                    onSubmit();
                }}
            >
                <div className={styleModule.Form}>
                    <div className={styleModule.item}>
                        <div className={styleModule.label}>标题：</div>
                        <Input value={title} placeholder="请输入标题" onChange={(e: any) => setTitle(e.target.value)} />
                    </div>

                    <div className={styleModule.item}>
                        <div className={styleModule.label}>分类：</div>
                        <Select value={classify} style={{ width: 120 }} onChange={(v: any) => setClassify(v)}>
                            <Option value="1">文章教程</Option>
                            <Option value="2">资源分享</Option>
                        </Select>
                    </div>

                    <div className={styleModule.item}>
                        <div className={styleModule.label}>标签：</div>
                        <Tags value={tags} onChange={(v: any) => setTags(v)} />
                    </div>
                </div>
            </UModal>
        </div>
    );
};

export default Index;
