/* eslint-disable react/no-danger */
import React, { useState, useEffect } from 'react';
import { Button, message, Input } from 'antd';
// 引入编辑器组件
import BraftEditor, { ControlType } from 'braft-editor';
import { useParams } from 'react-router-dom';
import { getArticle } from '@/api/article';
// 引入编辑器样式
import 'braft-editor/dist/index.css';
import styleModule from './index.module.less';
import Tags from '../index/UPart/Tags';

const Index = () => {
    console.log('Index');
    let { id } = useParams();
    const [editorState, setEditorState] = useState(BraftEditor.createEditorState(null));
    useEffect(() => {
        getArticle(id).then((res) => {
            setEditorState(BraftEditor.createEditorState(res.data.content));
        });
    }, []);

    return (
        <div className={styleModule.pageContent}>
            <div className={styleModule.content}>
                <div className={styleModule.cardLeft}>
                    <div className={styleModule.pageShow}>
                        <div className={styleModule.layout}>
                            <div className={styleModule.breadCrumb}>
                                <span>文章教程</span>
                                <span>{' > '}</span>
                                <span>文章详情</span>
                            </div>
                            <div className={styleModule.braftContent}>
                                <div
                                    className="preview braft-output-content"
                                    dangerouslySetInnerHTML={{ __html: editorState.toHTML() }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styleModule.cardRight}>
                    <div className={styleModule.sideTags}>
                        <Tags url="" title="关于作者" type="writer" more={false}></Tags>
                    </div>
                    <div className={styleModule.sideTags}>
                        <Tags url="" title="热门标签" type="tags"></Tags>
                    </div>
                    <div className={styleModule.sideGroup}>
                        <Tags url="" title="推荐作者" type="author"></Tags>
                    </div>
                    <div className={styleModule.sideFriendship}>
                        <Tags url="" title="友情链接" type="link"></Tags>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
