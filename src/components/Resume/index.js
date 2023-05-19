import './index.scss'
import { faGithub, } from '@fortawesome/free-brands-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Loader from 'react-loaders'


const Resume = () => {
  
  return (
    

      <div className="resume-part ">
        


        <a href="#" class="float">
        <FontAwesomeIcon
              icon={faDownload}
              color="white"
              className="anchor-icon"
              id="github"
              size="1x"
              />
          </a>
      <div className="container ">
        <div className="top">
          <h1>RAJARSHI BANERJEE</h1>
          <div className="uls">
            <li>
                <a href="mailto:
                rajarshiban13@gmail.com
                ">Email</a>
                </li>
            <li>
                <a href="https://github.com/GSAUC3">
                  
                GitHub
                </a>
                </li>
            <li>
                <a href="https://www.linkedin.com/in/rajarshi-banerz/">

                LinkedIn
                </a>
                </li>
            <li><a href="https://leetcode.com/rajarshiban13/">

                LeetCode
            </a>
                </li>
            <li>
                <a href="https://www.kaggle.com/banerz">

                Kaggle
                </a>
                </li>
            <li><a href="https://portfolio-gsauc3.vercel.app/">

                Website
            </a>
                </li>
            <li>
                <a href="tel:+91 9903358043">

                +91 9903358043
                </a>
                </li>
          </div>
          <hr />
        </div>
        <div className="bottom">
          <div className="left">
            <div className="education">
              <h2>EDUCATION</h2>
              <h3>
                <a href="https://www.caluniv-ucsta.net/">

                University of Calcutta
                </a>
                </h3>
              <p>
                B.Tech in Optics and Optoelectronics Engineering (2018-2022)
              </p>
              <p>GPA: 8.00/10.00</p>
            </div>
            <div className="certificates">
              <h2>MOOC CERTIFICATION</h2>
              <p>
                <a href="https://media.geeksforgeeks.org/courses/certificates/1d076508c24b08e764cb3b097821b6ba.pdf" target="_blank" rel="noopener noreferrer">

                Data Structure with python by Sandeep Jain from GeeksforFeeks
                </a>
              </p>
              <p>
                <a href="https://certificates.mooc.fi/validate/jo9bgejqks" target="_blank">
                Elements of AI from the University of Helsinki 
                </a>
                </p>
              <p>
                <a href="https://www.udemy.com/certificate/UC-d8e4bdfd-6c52-4422-beaa-1549cb9e7171/" target="_blank">

                Computer vision with Python from Udemy
                </a>
                </p>
              <p>
                <a href="https://www.kaggle.com/learn/certification/banerz/computer-vision" target="_blank" rel="noopener noreferrer">

                Computer vision from Kaggle
                </a>
              </p>
              <p>
                <a href="https://github.com/GSAUC3/GSAUC3/blob/main/RAJARSHI%20BANERJEE%20certificate.pdf" target="_blank" rel="noopener noreferrer">

                Winter School of Deep Learning from ISI Kolkata
                </a>
              </p>
            </div>
            <div className="skills">
              <h2>SKILLS</h2>
              <h3>PROGRAMMING LANGUAGES</h3>
              <p>Python | C++ | JavaScript | HTML | CSS | Latex | SQL</p>
              <h3>FRAMEWORKS AND TOOLS</h3>
              <p>
                PyTorch | Scikit-Learn | OpenCV | NumPy | Pandas | Django
                | tkinter | keras | React.js | tailwindcss | Sass
              </p>
            </div>
            <div className="publication">
              <h2>PUBLICATION</h2>
              <p>
                Presented a paper in the ICCET2022 conference, which was
                published in the International Journal of Science and Innovative
                Engineering & Technology (IJSIET). Topic: Human-computer
                interaction Controlling mouse functionalities using hand
                gestures.
              </p>
            </div>
            <div className="hobbies">
                <h2>HOBBIES</h2>
                <p>I tend to document my learning and share my knowledge in the form of videos on YouTube. Most of my learning revolves around mathematics, computer science, and artificial intelligence.</p>
            </div>
          </div>
          <div className="right">
            <div className="experience">
              <h2>EXPERIENCE</h2>
              <h3>
                Centre for Development of Advanced Computing | Machine Learning
                Research Intern
              </h3>
              <p>June 2022 – Dec 2022</p>
              <p>
                I collaborated with a team to develop AutoNN, A No-code
                Automated machine learning framework in python. This framework
                offers simplified model training tools for classification and
                regression that require no prior machine learning or coding
                knowledge. 
                <a
            href="https://github.com/AutoNN/AutoNN"
            target="_blank"
            rel="noreferrer"
            >
            <FontAwesomeIcon
              icon={faGithub}
              color="blue"
              className="anchor-icon"
              id="github"
              />
          </a>
              </p>
              <p>
                As a team leader, I successfully developed a computer vision
                application utilizing OpenCV, Mediapipe, easyocr and tkinter to
                convert handwritten words created through hand gestures into
                machine-readable text format.
              <a
                href="https://github.com/GSAUC3/AirPad"
                target="_blank"
                rel="noreferrer"
                >
            <FontAwesomeIcon
              icon={faGithub}
              color="blue"
              className="anchor-icon"
              id="github"
              />
          </a>
              </p>
              <p>
                Developed a computer vision application that enables hands-free
                control of mouse functionalities and keyboard shortcuts through
                gesture recognition. This was achieved through the utilization
                of OpenCV and mediapipe technologies.
              <a
              href="https://github.com/GSAUC3/human-computer-interaction-project"
              target="_blank"
              rel="noreferrer"
              >
            <FontAwesomeIcon
              icon={faGithub}
              color="blue"
              className="anchor-icon"
              id="github"
              />
          </a>
              </p>

              <h3>Indian Statistical Institute, ISI Kolkata |Project Intern</h3>
              <p>Sept 2021 – Jun 2022</p>
              <p>
                  Did my bachelor’s project focused on the classification of
                fundus images for diabetic retinopathy using deep learning. To
                accomplish this, I used state-of-the-art EfficientNet
                architecture built in PyTorch to train the model on the manually
                augmented Messidor dataset, which was able to attain 84.91%
                accuracy on the test set.
                <a
              href="https://github.com/GSAUC3/bachelors-project"
              target="_blank"
              rel="noreferrer"
              >
            <FontAwesomeIcon
              icon={faGithub}
              color="blue"
              className="anchor-icon"
              id="github"
              />
          </a>

              </p>

              <h3>GeeksforGeeks | Technical Content Writer</h3>
              <p>Sept 2021 – Feb 2022</p>
              <p>
                Wrote and published various articles on python projects,
                sorting, Graphical user interface using python, OpenCV with
                python and mathematics 
              </p>
            </div>

            <div className="projects">
              <h2>PROJECTS</h2>

              <p>
                <span className='project-title'>  Sorting Algorithm Visualizer:</span> Designed a GUI application using
                the Tkinter written in python to visualize various sorting
                algorithms.
                <a
              href="https://github.com/GSAUC3/Algorithm_visualizer"
              target="_blank"
              rel="noreferrer"
              >
            <FontAwesomeIcon
              icon={faGithub}
              color="blue"
              className="anchor-icon"
              id="github"
              />
          </a>
              </p>
              <p>
              <span  className='project-title'> SnakeAI:</span> Utilizing a combination of a neural network and genetic
                algorithm employed in PyTorch, the AI was trained to master the
                gameplay of Snake.
                <a
              href="https://github.com/GSAUC3/Snake-Ai"
              target="_blank"
              rel="noreferrer"
              >
            <FontAwesomeIcon
              icon={faGithub}
              color="blue"
              className="anchor-icon"
              id="github"
              />
          </a>
              </p>
              <p>
              <span  className='project-title'>  Pytorch model summary library:</span> Developed a python package to
                retrieve the model summary of models created in PyTorch.
                <a
              href="https://github.com/GSAUC3/pytorch-model-details"
              target="_blank"
              rel="noreferrer"
              >
            <FontAwesomeIcon
              icon={faGithub}
              color="blue"
              className="anchor-icon"
              id="github"
              />
          </a>
              </p>
            </div>
          </div>
        </div>
      </div>


      
      <Loader type="pacman" />
   

    </div>
  )
}

export default Resume
