import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi';
const Services = () => {
    return (
        <section id='services'>
            <h5>Que ofresco</h5>
            <h2>Servicios</h2>
            <div className='container services__container'>
                <article className='service'>
                    <div className='service__head'>
                        <h3>Diseñador UI/UX</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Lorem, ...</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Lorem, ...</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Lorem, ...</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Lorem, ...</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Lorem, ...</p>
                        </li>
                    </ul>
                </article>

                <article className='service'>
                    <div className='service__head'>
                        <h3>Progrmación de Automatización en Python</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Lorem, ...</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Lorem, ...</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Lorem, ...</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Lorem, ...</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Lorem, ...</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Lorem, ...</p>
                        </li>
                    </ul>
                </article>

                <article className='service'>
                    <div className='service__head'>
                        <h3>Desarrollador de Sistemas Administrativos</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Lorem, ...</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Lorem, ...</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Lorem, ...</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Lorem, ...</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Lorem, ...</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    );
};
export default Services;