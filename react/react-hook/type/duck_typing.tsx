// ts是鸭子类型
// 鸭子类型：只要有这个属性，就认为是鸭子
interface one {
  name: string
}
interface two extends one {
    id: number
}

function log(obj: one) {
  console.log(obj);
}
function log2(obj: two) {
    console.log(obj);
  }

// 传入one，不报错
const a: one = { name: 'jack' }
log(a)
// 传入two，不报错
const b: two = { name: 'tom', id: 1 }
log(b)
// 传入无限定，不报错dd
const c = { name: 'lucy' }  
log(c)
const d = { name: 'lucy', id: 2 }
log2(d)
