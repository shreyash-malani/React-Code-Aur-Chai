import { useState, useCallback } from "react";
import Child from "./Child";

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Child Button Clicked");
  }, []);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        Count {count}
      </button>

      <Child onClick={handleClick} />
    </>
  );
}

export default Parent;
