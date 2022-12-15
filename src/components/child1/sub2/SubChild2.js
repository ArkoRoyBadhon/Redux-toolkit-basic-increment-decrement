import React from 'react';
import { useSelector } from 'react-redux';

const SubChild2 = () => {

    const data = useSelector(val => val.show.value)

    return (
        <div>
            <h2>This is sub child 2</h2>
            <p>value = {data}</p>
        </div>
    );
};

export default SubChild2;