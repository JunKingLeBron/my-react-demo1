import React from 'react';

const UI = (props) => {
  return (
    <ul>
      {
        props.todos.map((item, index) => {
          return (
            <li
              style={{ textDecoration: item.isOk ? 'line-through' : '' }}
              key={index}
              onClick={props.handleOk.bind(this, index)}
              >
              { item.text }
            </li>
          )
        })
      }
    </ul>
  )
}

export default UI;
