/* eslint-disable react/no-danger */
import React, { useState, useEffect } from 'react';
import { Button, message, Input } from 'antd';
// 引入编辑器组件
import BraftEditor, { ControlType } from 'braft-editor';
import { useParams } from 'react-router-dom';
import { getArticle } from '@/api/article';
import UIcon from '@/component/UIcon';
// 引入编辑器样式
import 'braft-editor/dist/index.css';
import styleModule from './index.module.less';
import Tags from '../index/UPart/Tags';

const { TextArea } = Input;
const Index = () => {
    console.log('Index');
    const iconStyle = { height: '48px', width: '48px', fill: '#777' };
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
                            <div className={styleModule.addComments}>
                                <div className={styleModule.acHeader}>发布评论</div>
                                <div className={styleModule.acContent}>
                                    <div className={styleModule.acForm}>
                                        <div className={styleModule.acLabel}>
                                            <UIcon iconClass="weixin" style={iconStyle} />
                                        </div>
                                        <div className={styleModule.acWidget}>
                                            <TextArea rows={4} placeholder="想说点什么呢？" maxLength={6} />
                                        </div>
                                    </div>
                                    <div className={styleModule.acSubmit}>
                                        <Button type="primary">发布评论</Button>
                                    </div>
                                </div>
                            </div>
                            <div className={styleModule.commentSection}>
                                {[].length > 0 ? null : (
                                    <div className={styleModule.csEmpty}>
                                        <div>
                                            <UIcon
                                                iconClass="commitEmpty"
                                                style={{ height: '120px', width: '120px', fill: '#777' }}
                                            />
                                        </div>
                                        <div className={styleModule.csText}>目前还没有任何评论，快来抢沙发吧</div>
                                    </div>
                                )}
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
