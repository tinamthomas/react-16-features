import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    return <React.Fragment>
        <span id="counter">Current Count = {count}</span>
        <div>
            <button onClick={() => setCount(count+1)}>Plus Plus</button>
        </div>
    </React.Fragment>;
};

export default Counter;