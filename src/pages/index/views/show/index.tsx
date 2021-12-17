/* eslint-disable react/no-danger */
import React, { useState, useEffect } from 'react';
import { Button, message, Input } from 'antd';
// 引入编辑器组件
import BraftEditor, { ControlType } from 'braft-editor';
import { useParams } from 'react-router-dom';
import { getArticle } from '@/api/article';
// 引入编辑器样式
import 'braft-editor/dist/index.css';
import './index.scss';

const Index = () => {
    console.log('Index');
    let { id } = useParams();
    const [title, setTitle] = useState('');
    const [editorState, setEditorState] = useState(BraftEditor.createEditorState(null));
    useEffect(() => {
        getArticle(id).then((res) => {
            setTitle(res.data.title);
            setEditorState(BraftEditor.createEditorState(res.data.content));
        });
    }, []);

    return (
        <div className="page-show">
            <div className="layout">
                <div className="content">
                    <div className="title">{title}</div>
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
