import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import { useRef } from 'react';
import sendForm from 'emailjs-com/es/';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) =>{
        e.preventDefault();

        sendForm('service_qnj7f9r','template_w9fntt9', form.current, 'T8rTKS-ZG7McDq57O')
            .then((result)=>{
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

            e.target.reset();
    };

    return (
        <section id='contact'>
            <h5>Obten mi Contacto</h5>
            <h2>Contact Me</h2>

            <div className='container contact__container'>
                <div className='contact_options'>
                    <article className='contact__option'>
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Correo</h4>
                        <h5>wilsonweenoo2013@gmail.com</h5>
                        <a href='mailto:wilsonweenoo2013@gmail.com' target='_BLANK'>Enviar un Mensaje</a>
                    </article>

                    <article className='contact__option'>
                        <RiMessengerLine className='contact__option-icon' />
                        <h4>Messenger</h4>
                        <h5>wilsonweenoo2013@gmail.com</h5>
                        <a href='https://m.me/wilsonweeno.escalona' target='_BLANK'>Enviar un Mensaje</a>
                    </article>

                    <article className='contact__option'>
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>Whatsapp</h4>
                        <h5>+573225914281</h5>
                        <a href='https://api.whatsapp.com/send?phone=+573225914281' target='_BLANK'>Enviar un Mensaje</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='name' placeholder='Nombre Completo' required/>
                    <input type='email' name='email' placeholder='Su Correo' require />
                    <textarea name='message' rows='7' placeholder='Su Mensaje' required></textarea>
                    <button type='submit' className='btn btn-primary'>Enviar Mensaje</button>
                </form>
            </div>
        </section>
    );
};
export default Contact;