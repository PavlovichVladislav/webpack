import { useState } from "react";
import "./App.scss";

export const App = () => {
   const [count, setCount] = useState(0);

   return (
      <>
         <div>Hello wolrd!</div>
         <button onClick={() => setCount((count) => count + 1)} className="btn">
            Click me
         </button>
         <div>Counter value {count}</div>
      </>
   );
};
