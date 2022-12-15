import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../features/counter/CounterSlice';
import SubChild1 from './sub1/SubChild1';
import SubChild2 from './sub2/SubChild2';


const Child1 = () => {

    const dispatch = useDispatch()
    // const data = useSelector(val => val.show.value)
    const data = useSelector(val => {
        // console.log(val);
        return val.show.value
    })

    console.log(data);

    return (
        <div>
            <h2>This is child 1</h2>
            <p>value = {data}</p>
            <SubChild1 />
            <SubChild2 />

            <button onClick={()=>dispatch(increment())} >Increase</button>
            <button onClick={()=>dispatch(decrement())} >Decrease</button>
        </div>
    );
};

export default Child1;