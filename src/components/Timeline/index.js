import React, { useState } from 'react';
import './styles.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Timeline() {
  return (
    <div className="timeline-container">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Dezembro/2020"
          iconStyle={{ background: '#F0E714', color: '#fff' }}
          //icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">270% de crescimento</h3>
          <p>
          Mesmo com todas as dificuldades e incertezas que este ano nos apresentou, conseguimos nos reerguer e alcançar nossa meta de crescimento humano e de faturamento. Fechamos 2020 com 120 funcionários e um crescimento de 270% a.a. em receita. 
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Novembro/2020"
          iconStyle={{ background: '#F0E714', color: '#fff' }}
          //icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Prêmio Top of Mind</h3>
          <p>
          Indicados como agência da Pirelli, recebemos o Prêmio Top of Mind de 2020 nas categorias Top Masculino e no segmento Pneus. Esse é mais um resultado positivo de uma parceria de sucesso que vem há dois anos sendo trabalhada com excelência.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Setembro/2020 e Outubro/2020"
          iconStyle={{ background: '#F0E714', color: '#fff' }}
          //icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Participação em eventos</h3>
          <p>
          Ao lado de nomes importantes no mercado do marketing digital, participamos de eventos do Facebook (Ads for Equality) e da All-In (Estratégia de captação de clientes para a Black Friday com mídias pagas) em setembro e outubro, compartilhando conhecimento e aprendendo ainda mais.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Junho/2020"
          iconStyle={{ background: '#F0E714', color: '#fff' }}
          //icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Novas persona</h3>
          <p>
          Com um trabalho desenvolvido pelas as áreas de Conteúdo e Social Media, apresentamos uma nova forma de enxergar a tradicional Persona do Marketing Digital. Trabalhando com dados de sessões, conversões, afinidades e segmento de mercado, conseguimos chegar a perfis que sejam mais vantajosos para os clientes e explorar suas oportunidades, sem achismos.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Abril/2020"
          iconStyle={{ background: '#F0E714', color: '#fff' }}
          //icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Ajuda a Associação Comercial de Sorocaba</h3>
          <p>
          No começo da pandemia, nos juntamos à Associação Comercial de Sorocaba (ACSO) para ajudar pequenas empresas locais a começarem suas digitalizações e conseguirem continuar com seus negócios pela internet. Trabalhamos com as frentes de Social Media e Design na divulgação dessas empresas.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Abril/2020"
          iconStyle={{ background: '#F0E714', color: '#fff' }}
          //icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Certificações do Google e Facebook</h3>
          <p>
          Recebemos o selo de Google Partners Premier e do Facebook Marketing Partners em todas as categorias. Estes selos reconhecem a ROCKY como especialista em anúncios pagos de Google e Facebook Ads, tanto por performance em campanhas, quanto no desempenho geral da agência.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Março/2020"
          iconStyle={{ background: '#F0E714', color: '#fff' }}
          //icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Novo escritório</h3>
          <p>
          Uma de nossas maiores conquistas de 2020 foi a mudança para um novo escritório. Esse novo prédio representa o quanto já crescemos e o quanto ainda desejamos crescer, pois foi escolhido especialmente para termos espaço para futuras expansões.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Março/2020"
          iconStyle={{ background: '#F0E714', color: '#fff' }}
          //icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Premiação no Structure for Scale o</h3>
          <p>
          No workshop realizado pelo Facebook, ficamos em 1º lugar entre as 34 agências participantes. A partir de diversos desafios, conseguimos atingir os melhores resultados para nossos clientes, criando aprendizados e cases que foram replicados em outras contas.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Dezembro/2019"
          iconStyle={{ background: '#F0E714', color: '#fff' }}
          //icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">300% de crescimento</h3>
          <p>
          Fechamos 2019 com um crescimento de 300% ano a ano, conquistando duas das nossas maiores contas. Também temos um crescimento em capital humano, terminando o ano com 35 funcionários.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Outubro/2019"
          iconStyle={{ background: '#F0E714', color: '#fff' }}
          //icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Início das operações na frente de SEO</h3>
          <p>
          Em uma nova fase de expansão de serviços em Full Digital, iniciamos as operações na frente de SEO.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Julho/2019"
          iconStyle={{ background: '#F0E714', color: '#fff' }}
          //icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Início das operações na frente de TI</h3>
          <p>
          Chegada do nosso Diretor de Operações e início das operações com TI
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Fevereiro/2019"
          iconStyle={{ background: '#F0E714', color: '#fff' }}
          //icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Início das operações de Design e Social Media</h3>
          <p>
          Como parte de uma estratégia em Full Digital, iniciamos as operações nas áreas de Design e Social Media, complementando nossos serviços iniciais em Mídias.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Outubro/2018"
          iconStyle={{ background: '#F0E714', color: '#fff' }}
          //icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Início das operações</h3>
          <p>
          A ROCKY abre as portas como a terceira agência de Marketing Digital do Grupo Raccoon com a frente de Mídia de Performance Digital. 
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: '#F0E714', color: '#fff' }}
          //icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
