import React from 'react'
import ServicesBanner from '../../components/ServicesBanner/ServicesBanner'
import HeaderDesktop from '../../components/HeaderDesktop/index';

function PageConteudo() {
    return (
        <div>
            <HeaderDesktop></HeaderDesktop>
            <ServicesBanner
                img="ImgInbound"
            />
            <div className="container">
                <h1>Conteúdo</h1>
                <p>
                Bons conteúdos podem trazer ótimos resultados para a sua empresa. São vários os estudos que confirmam que o marketing de conteúdo ajuda no crescimento do tráfego orgânico, na visibilidade e posicionamento da marca, no fortalecimento do relacionamento com clientes, assim como sua fidelização e também traz um aumento de conversões.
                </p>
                <p>
                Com a criação de materiais ricos e otimizados, em diversos formatos, nosso time de Conteúdo, formado por jornalistas especialistas em SEO, tem como propósito entregar performance em marketing de conteúdo a partir de estratégias personalizadas e baseadas em dados.
                </p>
                <h2>Conteúdo para blog</h2>
                <p>
                Fazemos a produção de conteúdos estratégicos e otimizados para gerar tráfego para o site do cliente e colocar a marca em destaque nas buscas orgânicas. Os conteúdos têm como objetivo construir uma relação com os usuários que podem se tornar clientes.
                </p>
                <p>
                A partir de estudos de palavras-chave, oportunidades no mercado, insights internos e análise de concorrência, desenvolvemos pautas estratégicas para um bom ranqueamento orgânico e aumento de tráfego.
                </p>
                <h2>
                Assessoria de conteúdo
                </h2>
                <p>
                Em nosso serviço de assessoria, nosso time de Conteúdo é responsável pela criação de estratégias de conteúdo a serem realizadas pela equipe interna do cliente.
                </p>
                <p>
                Utilizando os mesmo critérios para criação de pautas, trazemos uma relatoria completa e aprofundada sobre o desempenho do blog e assuntos relevantes a serem discutidos, de acordo com o objetivo do cliente.
                </p>
                <h2>Copywriting para sites</h2>
                <p>
                Trabalhando com critérios de ranqueamento, escaneabilidade de textos, experiência do usuário e palavras-chave relevantes para o segmento, nosso time de Conteúdo desenvolve textos para sites, como landing pages, meta descriptions, títulos, descrição de produtos e categorias.
                </p>
                <h2>
                    Persona
                </h2>
                <p>
                Entender quem realmente é o cliente da sua marca é de extrema importância para suas estratégias em digital. 
                </p>
                <p>
                Através de um estudo aprofundado sobre os usuários do seu site, cruzando dados sobre sessões, receita e conversão, conseguimos desenvolver personas reais e estratégicas para potencializar seus resultados, tanto em Conteúdo, quanto em outras áreas.
                </p>
                <p>
                Esse estudo é feito levantando os principais perfis de clientes da sua marca e analisando as oportunidades que podem ser exploradas para aumentar o tráfego e conversões dessas personas.
                </p>
            </div>
        </div>
    )
}

export default PageConteudo