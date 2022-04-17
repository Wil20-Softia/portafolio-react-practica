import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
    return (
        <section id='about'>
            <h5>Conoceme</h5>
            <h2>Acerca de mi</h2>

            <div className='container about__container'>
                <div className='about__me'>
                    <div className='about__me-img'>
                        <img src={ME} alt='Yo'/>
                    </div>
                </div>

                <div className='about__content'>
                    <div className='about__cards'>
                        <article className='about__card'>
                            <FaAward className='about__icon'/>
                            <h5>Experince</h5>
                            <small>3+ Year Working</small>
                        </article>

                        <article className='about__card'>
                            <FiUsers className='about__icon'/>
                            <h5>Clients</h5>
                            <small>200+ Worldwide</small>
                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon'/>
                            <h5>Projects</h5>
                            <small>80+ Completed</small>
                        </article>
                    </div>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis doloremque corporis, optio animi neque tempore aperiam corrupti ab atque eligendi.
                    </p>

                    <a href='#contact' className='btn btn-primary'>Hablame</a>
                </div>
            </div>
        </section>
    );
};

export default About;