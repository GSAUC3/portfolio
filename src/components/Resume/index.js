// import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faDownload,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Loader from 'react-loaders'
import data from '../../assets/json/data.json'
import externalCSS from './index.css'
import html2pdf from 'html2pdf.js'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Resume = () => {
  const generatePDF = () => {
    const element = document.querySelector('.resume')

    const htmlContent = element.innerHTML

    const finalHTML = `
      <html>
        <head>
          <style>
            ${externalCSS}
            .resume{
              width:1200px;
              padding:5px;
            }
            .gap5{
              gap:5px;
            }
          </style>
        </head>
        <body>
          ${htmlContent}
        </body>
      </html>
    `
    html2pdf()
      .set({ filename: 'RajarshiBanerjeeResume.pdf' })
      .from(finalHTML)
      .save()
  }

  return (
    <>
      <div className="HOME ">
        <FontAwesomeIcon
          icon={faDownload}
          color="black"
          onClick={generatePDF}
          className="anchor-icon float"
          id="download"
          size="1x"
        />
        <div className="dashboard">
          <div className="resume ">
            <div className="heading glass resume-card">
              <h1 className="text-center">{data['name'].toUpperCase()}</h1>
              <div className="socials">
                {Object.keys(data['online-presence']).map((item, i) => (
                  <div key={i} className="social-links">
                    <a
                      href={data['online-presence'][item]}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex bottom">
              <div className="flex flex-col left ">
                <div className="skills glass resume-card">
                  <h2 className=" yellow">SKILLS</h2>
                  {Object.keys(data['skills']).map((item, i) => (
                    <div key={i}>
                      <div className='h4 my'>{data['skills'][item] ? item.toUpperCase() : ''}</div>
                      <div className="flex flex-wrap">
                        {data['skills'][item]
                          ? data['skills'][item].split(', ').map((x, j) => (
                              <div key={j} className="skills-btn">
                                {x}
                              </div>
                            ))
                          : ''}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="education glass resume-card">
                  <h2 className="yellow">EDUCATION</h2>
                  {data['education'].map((item, i) => (
                    <div key={i} className="my">
                      <div className="flex space-between ">
                        <div className="bold">{item['Institute']}</div>
                        <div className="small">{item['duration']}</div>
                      </div>
                      <div className="flex space-between">
                        <div>{item['major']}</div>
                        <div>{item['degree']}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="certificates glass resume-card">
                  <h2 className="yellow">CERTIFICATES</h2>
                  {data['certificates'].map((x, i) => (
                    <div className="flex gap5 my" key={i}>
                      <div>{x['name']}</div>
                      <a
                        href={x['url']}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col  right">
                <div className="workx glass resume-card">
                  <h2 className="yellow">WORK EXPERIENCE</h2>
                  {data['experience'].map((item, i) => (
                    <div key={i}>
                      <div className='h3 my'>{item['company-name']}</div>
                      <div className="flex space-between my border-b">
                        <div>{item['role']}</div>
                        <div className="small">{item['duration']}</div>
                      </div>

                      <p className='justify'>{item['description']}</p>
                    </div>
                  ))}
                </div>

                {/* <div className="achievements glass resume-card"></div> */}

                <div className="projects glass resume-card">
                  <h2 className="yellow">PROJECTS</h2>
                  {data['projects'].map((x, i) => (
                    <div key={i}>
                      <div className='h4 bold my'>{x['title']}</div>

                      <div className="flex space-between my">
                        <div>{x['description']}</div>
                        <a
                          href={x['link']}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FontAwesomeIcon icon={faGithub} color="yellow" />
                        </a>
                      </div>
                      <div className="flex">
                        {x['tech-stack'].split(', ').map((x, j) => (
                          <div key={j} className="tech">
                            {x}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Resume
