import React from 'react'
import styles from './ContactForm.module.css'
import Button from '../button/Button'
import { MdMessage } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";



const ContactForm = () => {

  let name;
  let email;
  let text;

  const onSubmit=(event)=>{
    event.preventDefault()
    name = event.target[0].value;
    email = event.target[1].value;
    text = event.target[2].value;
    }


  return <section className={styles.container}>
    <div className={styles.contact_form}>
      <div className={styles.top_btn}>
      < Button text='VIA SUPPORT CHAT' icon={<MdMessage fontSize='24px'/>}/>
      < Button
       text='VIA CALL'
        icon={<FaPhone fontSize='24px'/>}/>
      </div>
      < Button isOutLine={true} text='VIA EMAIL FORM' icon={<MdEmail fontSize='24px'/>}/>
      
      <form
      onSubmit={onSubmit}
      >
        <div className={styles.form_cntrl}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" />
        </div>
        <div className={styles.form_cntrl}>
        <label htmlFor="email">email</label>
        <input type="email" name="email" />
        </div>
        <div className={styles.form_cntrl}>
        <label htmlFor="text">Text</label>
        <textarea  name="text" rows='8' />
        </div>
      <div style={{
        display: 'flex',
        justifyContent: 'end',

      }}>
        <Button text='SUBMIT' />
      </div>
      </form>


    </div>
    <div className={styles.contact_image}>
      <img src="/images/Service 24_7-pana 1.png" alt="contact image" />
    </div>
  </section>
}

export default ContactForm
