import { useEffect, useState } from "react";

export const useDebounce = <T,>(param: T, delay: number): T => {
  const [debounceParam, setDebounceParam] = useState<T>(param);

  useEffect(() => {
    const timer = setTimeout(() => setDebounceParam(param), delay);
    return () => clearTimeout(timer);
  }, [param, delay]);

  return debounceParam;
};
