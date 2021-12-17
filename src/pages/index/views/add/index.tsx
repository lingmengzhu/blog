/* eslint-disable react/no-danger */
import React, { useState } from 'react';
import { Button, message, Input } from 'antd';
// 引入编辑器组件
import BraftEditor, { ControlType } from 'braft-editor';

import { addArticle } from '@/api/article';
// 引入编辑器样式
import 'braft-editor/dist/index.css';
import './index.scss';

const Index = () => {
    console.log('Index');
    const [title, setTitle] = useState('');
    const [editorState, setEditorState] = useState(BraftEditor.createEditorState(null));
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

    const onSubmit = () => {
        const htmlContent = editorState.toHTML();
        addArticle({ title, content: htmlContent })
            .then(() => {
                message.success('保存成功');
            })
            .catch(() => {
                message.error('服务器错误');
            });
    };

    const handleEditorChange = (value: any) => {
        setEditorState(value);
    };

    return (
        <div className="page-add">
            <div className="layout">
                <div className="header">
                    <div className="title-input">
                        <Input
                            size="large"
                            placeholder="输入文章标题"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <Button type="primary" onClick={onSubmit}>
                        保存
                    </Button>
                </div>
                <div className="content">
                    <BraftEditor
                        className="editor"
                        controls={controls}
                        value={editorState}
                        onChange={handleEditorChange}
                    />

                    <div
                        className="preview braft-output-content"
                        dangerouslySetInnerHTML={{ __html: editorState.toHTML() }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Index;
