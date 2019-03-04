// Product的 reducer
let initProducts = [
  {
    id: 1000,
    name: '猫粮',
    price: 10,
  },
  {
    id: 1001,
    name: '狗粮',
    price: 20,
  }
]

export default (prevState = initProducts, action) => {
  // 执行深拷贝
  let state = JSON.parse(JSON.stringify(prevState));

  // 最后不要忘了 return
  return state;
}
