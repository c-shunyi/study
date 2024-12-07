import { useEffect } from 'react'

// 组件首次加载时执行一次
const useMount =(fn: () => void)=> {
  useEffect(() => {
    fn()
  }, [fn])
}

export default useMount