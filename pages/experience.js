import Head from 'next/head'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
import computer from '../public/images/computer.jpg';

export default function Projects() {
  
return (
<>
    <Head>
        <title>Projects</title>
    </Head>

<VerticalTimeline id="experiencesDiv">
<VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="08/2022 - present"
    iconStyle={{ background: 'rgb(82, 38, 98)', color: '#fff' }}
    icon={<img src={computer} alt='computer' />}
  >
    <a href="https://drive.google.com/file/d/1ROyRrEUMvQY-71VVg5FEhonUmAzd38un/view?usp=sharing" target='_blank'>
    <h3 className="vertical-timeline-element-title">Frontend Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">Lampros Labs</h4>
    <p>User Experience, Visual Design</p>
    </a>

  </VerticalTimelineElement>
  
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="08/2021 - present"
    iconStyle={{ background: 'rgb(82, 38, 98)', color: '#fff' }}
    icon=''
  >
    <a href="https://drive.google.com/file/d/1ROyRrEUMvQY-71VVg5FEhonUmAzd38un/view?usp=sharing" target='_blank'>
    <h3 className="vertical-timeline-element-title">Teaching Assistant</h3>
    <h4 className="vertical-timeline-element-subtitle">EdX</h4>
    </a>
    <p>Full Stack Web Developmnt Cirriculum</p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="08/2021 - 05/2022"
    iconStyle={{ background: 'rgb(82, 38, 98)', color: '#fff' }}
    icon='/images/Vantage.png'
  >
    <a href="https://drive.google.com/file/d/1ROyRrEUMvQY-71VVg5FEhonUmAzd38un/view?usp=sharing" target='_blank'>
    <h3 className="vertical-timeline-element-title">Teacher</h3>
    <h4 className="vertical-timeline-element-subtitle">Webber Middle School</h4>
    </a>
    <p>
      Web Design and Computer Animation
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="12/2020 - 04/2021"
    iconStyle={{ background: 'rgb(82, 38, 98)', color: '#fff' }}
    icon='/images/Vantage.png'
  >
    <a href="https://drive.google.com/file/d/1ROyRrEUMvQY-71VVg5FEhonUmAzd38un/view?usp=sharing" target='_blank'>
    <h3 className="vertical-timeline-element-title">Frontend Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle">Vantage, Ltd</h4>
    </a>
    <p>User Experience, Visual Design</p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="08/2019 - 12/2020"
    iconStyle={{ background: 'rgb(82, 38, 98)', color: '#fff' }}
    icon='/images/Vantage.png'
  >
    <a href="https://drive.google.com/file/d/1ROyRrEUMvQY-71VVg5FEhonUmAzd38un/view?usp=sharing" target='_blank'>
    <h3 className="vertical-timeline-element-title">Junior Web Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">First Turn Media</h4>
    </a>
    <p>Custom React site</p>
  </VerticalTimelineElement>

</VerticalTimeline>
        
    </>
    )
}