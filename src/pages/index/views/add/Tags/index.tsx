import React, { useState } from 'react';
import classNames from 'classnames';
import UIcon from '@/component/UIcon';
import { PlusSquareOutlined } from '@ant-design/icons';
import { Input, Tag } from 'antd';
import styleModule from './index.module.less';

interface tagProps {
    value: string[];
    onChange: Function;
}

const Tags = (props: tagProps) => {
    const { value, onChange } = props;
    const [tagInput, setTagInput] = useState('');
    const [status, setStatus] = useState(false);
    //移除标签
    const removeItem = (item: any) => {
        const arr = value.filter((v) => item !== v);
        onChange(arr);
    };
    //添加标签
    const addTags = () => {
        if (!tagInput) {
            return;
        }
        onChange([...value, tagInput]);
        setTagInput('');
        setStatus(false);
    };
    //取消添加
    const cancel = () => {
        setTagInput('');
        setStatus(false);
    };
    return (
        <div className={styleModule.tags}>
            {value.map((item, index) => (
                <Tag
                    key={index}
                    closable
                    onClose={() => {
                        removeItem(item);
                    }}
                >
                    {item}
                </Tag>
            ))}
            {status ? (
                <div className={styleModule.addTags}>
                    <Input
                        size="small"
                        style={{ width: '100px', marginBottom: '10px' }}
                        value={tagInput}
                        onChange={(e) => {
                            setTagInput(e.target.value);
                        }}
                        suffix={
                            <>
                                <UIcon iconClass="success" className={styleModule.success} onClick={() => addTags()} />
                                <UIcon iconClass="mistake" className={styleModule.cancel} onClick={() => cancel()} />
                            </>
                        }
                    />
                </div>
            ) : (
                value.length < 5 && <PlusSquareOutlined className={styleModule.icon} onClick={() => setStatus(true)} />
            )}
        </div>
    );
};
export default Tags;
