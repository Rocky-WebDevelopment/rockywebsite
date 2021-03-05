import React from 'react'
import ServicesBanner from '../../components/ServicesBanner/ServicesBanner'
import { Link } from 'react-router-dom'
import './PageTech.css'


function Tecnologias() {
    return (
        <div>
            <ServicesBanner
                img="ImgTI"
            />

            <div className="container">
                
                <h3>Uma parceria Full Digital estratégica em Branding e Performance para sua empresa!</h3>
                <p>O sucesso de estratégias de Marketing Digital é guiado e medido por dados. Sendo assim, para uma tomada de decisão assertiva e eficaz, é preciso confiar e atuar em cima da quantidade e qualidade das informações disponíveis.</p>
                <p>Utilizando-se das mais variadas tecnologias atuais, o time de TI da ROCKY é responsável pela coleta e tratamento de dados dos clientes, oferecendo todo o suporte que sua empresa possa precisar na hora de colocar em prática sua estratégia digital.</p>
                <p>Além disso, confiamos aos nossos especialistas o papel de desenvolver soluções que visam otimizar e facilitar o trabalho interno da empresa.</p>
                <p>Dividido entre Web Analytics e Web Development, o time de TI está preparado para auxiliar no crescimento e sucesso da sua marca. Conheça mais sobre cada uma dessas áreas:</p>
            
                <section className="btn-container">

                    <Link to={"/services/tecnologias/webanalytics"}>Web Analytics</Link>
                    <Link to={"/services/tecnologias/webdev"}>Web Development</Link>
                            
                </section>
            </div>
        </div>
    )
}

export default Tecnologias
