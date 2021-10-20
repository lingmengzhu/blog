import React from 'react';
import _ from 'lodash';
import './index.css';

function Child() {
    const [count, setCount] = React.useState(0);

    return (
        <div className="index">
            child
            {count}
            <button type="button" onClick={() => setCount(count + 2)}>
                +
            </button>
        </div>
    );
}

export default Child;
