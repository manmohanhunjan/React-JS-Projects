import React, { useReducer }  from "react";

type CounterState = {       // type CounterState is an object with a property count of type number
    count: number;
};

type CounterAction = { type: 'increment' } | { type: 'decrement' };     // type CounterAction is an object with a property type of type string with value 'increment' or 'decrement'

const counterReducer = (state: CounterState, action: CounterAction) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }; 
        case 'decrement':
            return { count: state.count - 1 };
        default:
            return state;
    }
};

const ReducerCounter = () => {
    const [state, dispatch] = useReducer(counterReducer, { count: 0 });

    return (
        <div>
            <h2>Counter: {state.count}</h2>
            <button onClick={() => dispatch({ type: 'increment'})}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement'})}>Decrement</button>
        </div>
    );
};

export default ReducerCounter;