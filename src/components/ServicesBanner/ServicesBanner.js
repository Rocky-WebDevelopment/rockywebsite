import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import './styles.css'
import gradiente from '../../assets/gradiente.png'

function ServicesBanner(props) {

    return (
        <div className={`banner ${props.img}`}>
            <div className="main-btns">
                <ul>
                    <li>
                        <Link 
                        to={'/services/midias/'} 
                        className={`link-ref ${isPageActive && "page-active"}`}
                        >
                            MIDIAS
                        </Link>
                    </li>
                    <li>
                        <Link 
                        to={'/services/inbound/'} 
                        className={`link-ref ${isPageActive && "page-active"}`}
                        >
                            INBOUND
                        </Link>
                    </li>
                    <li>
                        <Link 
                        to={'/services/tecnologias/'} 
                        className={`link-ref ${isPageActive && "page-active"}`}
                        >
                            TECNOLOGIAS
                        </Link>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default ServicesBanner
