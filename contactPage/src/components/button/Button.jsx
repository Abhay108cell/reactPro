import React from 'react'
import styles from './Button.module.css'


const Button = (props) => {
  return (
    <button className={props.isOutLine ? styles.outLine_btn : styles.primary_btn}>
      {props.text}
      {props.icon}
    </button>
  )
}

export default Button
