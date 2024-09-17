import React from 'react'
import styles from './Button.module.css'


const Button = ({isOutLine, icon, text , ...rest}) => {
  return (
    <button {...rest} className={isOutLine ? styles.outLine_btn : styles.primary_btn}>
      {text}
      {icon}
    </button>
  )
}

export default Button
