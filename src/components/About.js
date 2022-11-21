import React from 'react'
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';



export const About = () => {
    return (
        <Container>
         <h1>My experience.</h1>

         <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header><b>Educational Background.</b></Accordion.Header>
        <Accordion.Body>
          <p>
            Bachelor of Engineering in electronic engineering from the 
            National University of Science and Technology.
          </p>

          <p>
            Certificate from Udemy on Real Time Operating Systems using the STM32F407.
          </p>
          <p>
            Advanced level and Ordinary level at Loreto high school.
          </p>

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><b>Projects Worked On.</b></Accordion.Header>
        <Accordion.Body>
         <p>
            I have worked on a multitude of projects. The most intense in terms of software 
            engineering are as follows:
         </p>
         <p>
            <ol>
            <li>
                Worked on a genetic algorithm and integrated it in a web application for 
                the company. Its application was on matching Locomotives and wagons of 
                different power levels.
            </li>
            <li>
                Worked on a web application which was set to choose the most ill Covid-19 patient from
                a list of them. Using spO2 and Heatrate data which would assist in triaging patients if Covid-19
                had continued. 
            </li>
            <li>
                SpO2, Heartrate and temperature sensing. On this module my task was to do Polyplethysmography using a sensor.
                I developed the program using C++. Application of IIR filter, Fourier transforms, maximum detection and minimum detection
                algorithms as well as moving averages were applied. 
            </li>
            <li>
                I have worked on many more interesting projects.
            </li>
            </ol>
         </p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
       </Container>
       
    )
}