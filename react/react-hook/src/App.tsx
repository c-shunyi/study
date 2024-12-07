import useMount from "./hook/useMount.tsx";
import { useDebounce } from "./hook/useDounce.tsx";
import { useState } from "react";
import { useTestData } from "./context/test_context.tsx";
import "./App.css";

function App() {
  const [count, setCount] = useState<number>(1);
  const { data, add, remove } = useTestData();
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

        <div>context:{data}</div>
        <button onClick={() => add()}>context add</button>
        <button onClick={() => remove()}>context remove</button>
      </div>
    </>
  );
}

export default App;
