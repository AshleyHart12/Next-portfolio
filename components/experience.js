import Head from 'next/head'
import Image from 'next/image';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import computer from '../public/images/computer.jpg';

export default function Projects() {
  console.log(computer)
  
return (
  <section id="experience">
      <Head>
          <title>Experience</title>
      </Head>
  <h2 className='text-center p-5 experience-section-header'>EXPERIENCE</h2>
  <VerticalTimeline id="experiencesDiv">
  <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentArrowStyle={{ borderRight: '7px solid  rgb(82, 38, 98)' }}
      date="08/2022 - present"
      iconStyle={{ background: 'rgb(82, 38, 98)', color: '#fff' }}
      icon={<Image src={computer} />}
    >
      <a href="https://drive.google.com/file/d/1ROyRrEUMvQY-71VVg5FEhonUmAzd38un/view?usp=sharing" target='_blank'>
      <h3 className="vertical-timeline-element-title mb-2">Frontend Developer</h3>
      <h5 className="vertical-timeline-element-subtitle">Lampros Labs</h5>
      </a>
      <p>User Experience, Visual Design</p>

    </VerticalTimelineElement>
    
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentArrowStyle={{ borderRight: '7px solid  rgb(82, 38, 98)' }}
      date="08/2021 - present"
      iconStyle={{ background: 'rgb(82, 38, 98)', color: '#fff' }}
      icon={<Image src={computer} />}
    >
      <a href="https://drive.google.com/file/d/1ROyRrEUMvQY-71VVg5FEhonUmAzd38un/view?usp=sharing" target='_blank'>
      <h3 className="vertical-timeline-element-title mb-2">Teaching Assistant</h3>
      <h5 className="vertical-timeline-element-subtitle">EdX</h5>
      </a>
      <p>Full Stack Web Development Cirriculum</p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentArrowStyle={{ borderRight: '7px solid  rgb(82, 38, 98)' }}
      date="08/2021 - 05/2022"
      iconStyle={{ background: 'rgb(82, 38, 98)', color: '#fff' }}
      icon={<Image src={computer} />}
    >
      <a href="https://drive.google.com/file/d/1ROyRrEUMvQY-71VVg5FEhonUmAzd38un/view?usp=sharing" target='_blank'>
      <h3 className="vertical-timeline-element-title mb-2">Teacher</h3>
      <h5 className="vertical-timeline-element-subtitle">Webber Middle School</h5>
      </a>
      <p>
        Web Design and Computer Animation
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentArrowStyle={{ borderRight: '7px solid  rgb(82, 38, 98)' }}
      date="12/2020 - 04/2021"
      iconStyle={{ background: 'rgb(82, 38, 98)', color: '#fff' }}
      icon={<Image src={computer} />}
    >
      <a href="https://drive.google.com/file/d/1ROyRrEUMvQY-71VVg5FEhonUmAzd38un/view?usp=sharing" target='_blank'>
      <h3 className="vertical-timeline-element-title mb-2">Frontend Engineer</h3>
      <h5 className="vertical-timeline-element-subtitle">Vantage, Ltd</h5>
      </a>
      <p>User Experience, Visual Design</p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--education"
      contentArrowStyle={{ borderRight: '7px solid  rgb(82, 38, 98)' }}
      date="08/2019 - 12/2020"
      iconStyle={{ background: 'rgb(82, 38, 98)', color: '#fff' }}
      icon={<Image src={computer} />}
    >
      <a href="https://drive.google.com/file/d/1ROyRrEUMvQY-71VVg5FEhonUmAzd38un/view?usp=sharing" target='_blank'>
      <h3 className="vertical-timeline-element-title mb-2">Junior Web Developer</h3>
      <h5 className="vertical-timeline-element-subtitle">First Turn Media</h5>
      </a>
      <p>Custom React site</p>
    </VerticalTimelineElement>

  </VerticalTimeline>
          
  </section>
    )
}