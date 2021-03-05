import React from 'react'
import { Link } from 'react-router-dom'
import ServicesBanner from '../../components/ServicesBanner/ServicesBanner'

function Inbound() {
    return (
        <div>
            <ServicesBanner
                img="ImgInbound"
            />
            <div className="container">
                <h1>Inbound</h1>
                <h3>Uma parceria Full Digital estratégica em Branding e Performance para sua empresa!</h3>
                <p>
                    Aumentando seu reconhecimento de marca, consolidando sua reputação, fortalecendo seu relacionamento com clientes e entregando conversões orgânicas, uma boa estratégia de Inbound Marketing faz diferença nos resultados da sua empresa. 
                </p>
                <p>
                    Na ROCKY, oferecemos serviços de diversas áreas para que sua marca possa trabalhar com o Inbound Marketing de forma mais completa e cuidamos para que nossa parceria seja não só operacional, mas também estratégica para sua tomada de decisão.
                </p>
                <p>
                Conheça mais sobre cada um desses serviços e como eles podem contribuir para o sucesso da sua empresa:
                </p>
                <section className="btn-container">

                    <Link to={"/services/inbound/seo"}>SEO</Link>
                    <Link to={"/services/inbound/cro"}>CRO</Link>
                    <Link to={"/services/inbound/design"}>Design</Link>
                    <Link to={"/services/inbound/social"}>Social Media</Link>
                    <Link to={"/services/inbound/conteudo"}>Conteúdo</Link>
                    <Link to={"/services/inbound/ti"}>TI</Link> 
                </section>
            </div>
        </div>
    )
}

export default Inbound
