import useMount from "../hook/useMount.tsx";
import { useDebounce } from "../hook/useDounce.tsx";
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState<number>(1);
  // useMount
  useMount(() => {
    console.log("useMount:组件首次加载执行");
  });

  // useDebounce
  const debounceCount = useDebounce(count, 1000);
  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {debounceCount}
        </button>
      </div>
    </>
  );
}

export default App;
