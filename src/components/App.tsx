import { useState } from 'react'

export const App = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>Hello wolrd!</div>
            <button onClick={() => setCount(count => count +1)}>Click me</button>
            <div>Counter value {count}</div>
        </>
    )
}