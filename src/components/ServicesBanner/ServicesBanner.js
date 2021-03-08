import React, {useEffect, useState} from 'react'
import { Link, NavLink } from 'react-router-dom';
import './styles.css'
import gradiente from '../../assets/gradiente.png'

function ServicesBanner(props) {

    return (
        <div className={`banner ${props.img}`}>
            <div className="main-btns">
                <ul className="main-btns-ul">
                    <li>
                        <NavLink 
                        to={'/services/midias/'} 
                        className={`link-ref`}
                        activeClassName="page-active"
                        >
                            MIDIAS
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                        to={'/services/inbound/'} 
                        className={`link-ref`}
                        activeClassName="page-active"
                        >
                            INBOUND
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                        to={'/services/tecnologias/'} 
                        className={`link-ref`}
                        activeClassName="page-active"
                        >
                            TECNOLOGIA
                        </NavLink>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default ServicesBanner
