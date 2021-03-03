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
          date="2011 - present"
          iconStyle={{ background: '#F0E714', color: '#fff' }}
          //icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">2001</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Criação do time
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          iconStyle={{ background: '#F0E714', color: '#fff' }}
          //icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Elídio</h3>
          <h4 className="vertical-timeline-element-subtitle">São José dos Campos</h4>
          <p>
            Elídio contratado
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2008 - 2010"
          iconStyle={{ background: '#F0E714', color: '#fff' }}
          //icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Design</h3>
          <h4 className="vertical-timeline-element-subtitle">Sorocaba, SP</h4>
          <p>
            Design: Jow e Carol.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2006 - 2008"
          iconStyle={{ background: '#F0E714', color: '#fff' }}
          //icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Midias</h3>
          <h4 className="vertical-timeline-element-subtitle">Riberão Preto, SP</h4>
          <p>
            Entra Xuxa
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="April 2013"
          iconStyle={{ background: '#F0E714', color: '#fff' }}
          //icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Conteudo</h3>
          <h4 className="vertical-timeline-element-subtitle">Riberão Preto, SP</h4>
          <p>
            Entra Ana
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="November 2012"
          iconStyle={{ background: '#F0E714', color: '#fff' }}
          //icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">SEO</h3>
          <h4 className="vertical-timeline-element-subtitle">Riberão Preto, SP</h4>
          <p>
            Entra Squirtle
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2002 - 2006"
          iconStyle={{ background: '#F0E714', color: '#fff' }}
          //icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">SEO</h3>
          <h4 className="vertical-timeline-element-subtitle">Riberão Preto, SP</h4>
          <p>
            Entra Luiz
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
