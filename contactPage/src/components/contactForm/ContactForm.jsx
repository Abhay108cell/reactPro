import React from 'react'
import styles from './ContactForm.module.css'
import Button from '../button/Button'
import { MdMessage } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";


const ContactForm = () => {
  return <section className={styles.container}>
    <div className={styles.contact_form}>
      <div className={styles.top_btn}>
      < Button text='VIA SUPPORT CHAT' icon={<MdMessage fontSize='24px'/>}/>
      < Button text='VIA CALL' icon={<FaPhone fontSize='24px'/>}/>
      </div>
    </div>
    <div className={styles.contact_image}></div>
  </section>
}

export default ContactForm
