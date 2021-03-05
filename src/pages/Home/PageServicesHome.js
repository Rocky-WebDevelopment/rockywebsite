import React from 'react'
import ServicesBanner from '../../components/ServicesBanner/ServicesBanner'
import imageHome from '../../assets/midia digital@2x.png'
import './HomeStyle.css'
import { Link } from 'react-router-dom'

function PageServicesHome() {
    return (
        <div>
            <ServicesBanner
                img="ImgHome"
            />

            <div class="container">
                <div class="content">
                    <div class="image">
                        <img src={imageHome} alt="Gráficos de Mídias"/>
                    </div>
                    <div class="text">
                        <h3>Uma parceria Full Digital estratégica em Branding e Performance para sua empresa!</h3>
                        <p>O investimento em mídias pagas de performance, quando bem gerenciado e sendo parte de uma estratégia de marketing digital completa e guiada por dados, traz resultados exponenciais para sua empresa.</p>
                        <p>Na ROCKY, nossos colaboradores especialistas em mídias têm perfil analítico, são certificados em Google e Microsoft Ads e sabem interpretar diferentes cenários e segmentos.</p>
                        <p>Trabalhamos em parceria com nossos clientes para o desenvolvimento de estratégias e entregamos resultados mensuráveis a partir de objetivos pré-estabelecidos e execução alinhada a isso. </p>
                        <p>Auxiliamos empresas que buscam mídias de performance para vendas, geração de leads ou fazer branding pelo digital.</p>
                    
                    </div>
                </div>

                <div class="more">
                    <Link to={'/services/midias'} className="link-ref">Entenda</Link>
                </div>
            </div>
            

        </div>
    )
}

export default PageServicesHome
