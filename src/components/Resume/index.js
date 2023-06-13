// import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Loader from 'react-loaders'
import data from '../../assets/json/data.json'
import './index.scss'
import './dark.scss'
import ON from '../../assets/images/bulb_on-removebg-preview.png'
import OFF from '../../assets/images/bulb_off-removebg-preview.png'
import lamp from '../../assets/images/pngegg (2) (1).png'
import html2pdf from 'html2pdf.js';


const Resume = () => {
  const [isDark, setIsDark] = useState(false)

  const toggleMode = () => {
    setIsDark(!isDark)
  }
  React.useEffect(() => {
    const moon = document.querySelector('#moon')
    const sun = document.querySelector('#sun')

 
    if (isDark === true) {
      moon.style.visibility = 'hidden'
      sun.style.visibility = 'visible'
      
    } else {
      moon.style.visibility = 'visible'
      sun.style.visibility = 'hidden'
    }
  }, [isDark])

  const generatePDF = () => {
    const element = document.getElementById('pdfElement'); 
    html2pdf()
      .set({ filename: 'RajarshiBanerjeeResume.pdf' }) 
      .from(element)
      .save();
  };
  
  
  return (
    <div className={isDark ? 'resume-part-light' : 'resume-dark'}  >
      <div onClick={toggleMode} id="toggle">

        {/* <FontAwesomeIcon icon={faMoon} id='moon' /> */}
        {/* <FontAwesomeIcon icon={faSun} id='sun'/> */}
        <img src={lamp} alt="lamp" id="lamp" />
        <img src={OFF} alt="moon" id='moon'/>
        <img src={ON} alt="sun" id='sun'/>
        
      </div>

      
        <FontAwesomeIcon
          icon={faDownload}
          color="black"
          onClick={generatePDF}
          className="anchor-icon float"
          id="download"
          size="1x"
        />
        
      <div className="container">
        <div id='pdfElement'>
        <div className="top" >
          <h1>{data['name'].toUpperCase()}</h1>
          <div className="online-presence">
            {Object.keys(data['online-presence']).map((item, i) => (
              // this is one liner if else in javascript (condition)? (true statement): (false statement)
              <a
                key={i}
                href={
                  item === 'Email'
                    ? 'mailto:' + data['online-presence'][item]
                    : data['online-presence'][item]
                }
              >
                {item}
              </a>
            ))}
          </div>
          <hr />
        </div>
        <div className="bottom">
          {/* ________left _----------- */}
          <div className="left">
            <div className="skills">
              <h2>SKILLS</h2>
              {Object.keys(data['skills']).map((item, i) => (
                <div key={i}>
                  {data['skills'][item] !== '' && (
                    <div>
                      <div style={{ fontWeight: 'bold' }}>
                        {item.toUpperCase()}
                      </div>

                      {data['skills'][item].split(', ').map((x, i) => (
                        <div id="skill" key={i}>
                          {x}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <hr />

            <div className="certificates">
              <h2>CERTIFICATES</h2>
              {data['certificates'].map((item, i) => (
                <div key={i}>
                  <a href={item['url']} target="_blank" rel="noreferrer">
                    {item['name']}
                  </a>
                </div>
              ))}
            </div>
            <hr />
            <div className="publication">
              <h2>PUBLICATION</h2>
              {data['publication'].map((x, i) => (
                <div className="justi">
                  {x['name']} |{' '}
                  <a href={x['link']} target="_blank" rel="noreferrer">
                    (abstract)
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* ____________________--right    */}

          <div className="right">
            <div className="experience">
              <h2>EXPERIENCE</h2>
              {data['experience'].map((item, i) => (
                <div className="exp-content" key={i}>
                  <div className="title">{item['company-name']} </div>
                  <div className="flex">
                    <> {item['role']}</>
                    <div className="text-sm">{item['duration']}</div>
                  </div>
                  <div className="exp-description">{item['description']}</div>
                </div>
              ))}
            </div>

            <div className="project">
              <h2>PROJECTS</h2>
              {data['projects'].map((item, i) => (
                <div key={i}>
                  <div>{item['title']}</div>

                  <div>{item['description']}</div>

                  <div>{item['tech-stack']}</div>
                </div>
              ))}
            </div>

            <div className="education">
              <h2>EDUCATION</h2>
              {data['education'].map((item, i) => (
                <>
                  <div className="flex space-b">
                    <div>{item['Institute']}</div>
                    <div>{item['duration']}</div>
                  </div>
                  <div>
                    {item['major']} | {item['degree']}
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>

      <Loader type="pacman" />
    </div>
  )
}

export default Resume
