import React from 'react';

const UI = (props) => {
  return (
    <div>
      <ul>
        {
          props.products.map(item => {
            return (
              <li key={item.id}>
                <p>{ item.name } <span>￥{ item.price }</span></p>
                <button onClick={props.jian.bind(this, item)}>-</button>
                <button onClick={props.add.bind(this, item)}>+</button>
              </li>
            )
          })
        }
      </ul>

      以下是购物车
      <ol>
        {
          props.carts.map(item => {
            return (
              <li key={item.id}>
                <p>{ item.name }</p>
                <p>{ item.num }</p>
                <p>{ item.price }</p>
                <p>{ item.total }</p>
              </li>
            )
          })
        }
      </ol>
    </div>
  )
}

export default UI;
