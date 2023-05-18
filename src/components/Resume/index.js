import './index.scss'

import React from 'react'

const Resume = () => {
  return (
    <div className="resume-part">
      <div className="container ">
        <div className="top">
          <h1>RAJARSHI BANERJEE</h1>
          <div className="uls">
            <li>
                <a href="mailto:
                rajarshiban13@gmail.com
                ">email</a>
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
              <h3>University of Calcutta</h3>
              <p>
                B.Tech in Optics and Optoelectronics Engineering (2018-2022)
              </p>
              <p>GPA: 8.00/10.00</p>
            </div>
            <div className="certificates">
              <h2>MOOC CERTIFICATION</h2>
              <p>
                Data Structure with python by Sandeep Jain from GeeksforFeeks
              </p>
              <p>Elements of AI from the University of Helsinki </p>
              <p>Computer vision with Python from Udemy</p>
              <p>Computer vision from Kaggle</p>
              <p>Winter School of Deep Learning from ISI Kolkata</p>
            </div>
            <div className="skills">
              <h2>SKILLS</h2>
              <h3>PROGRAMMING LANGUAGES</h3>
              <p>Python | C++ | JavaScript | HTML | CSS | Latex | SQL</p>
              <h3>FRAMEWORKS AND TOOLS</h3>
              <p>
                PyTorch | Scikit-Learn | OpenCV | NumPy | Pandas | NLTK | Django
                | tkinter | keras
              </p>
            </div>
            <div className="publication">
              <h3>PUBLICATION</h3>
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
              </p>
              <p>
                As a team leader, I successfully developed a computer vision
                application utilizing OpenCV, Mediapipe, easyocr and tkinter to
                convert handwritten words created through hand gestures into
                machine-readable text format.
              </p>
              <p>
                Developed a computer vision application that enables hands-free
                control of mouse functionalities and keyboard shortcuts through
                gesture recognition. This was achieved through the utilization
                of OpenCV and mediapipe technologies.
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
                Sorting Algorithm Visualizer: Designed a GUI application using
                the Tkinter written in python to visualize various sorting
                algorithms.
              </p>
              <p>
                SnakeAI: Utilizing a combination of a neural network and genetic
                algorithm employed in PyTorch, the AI was trained to master the
                gameplay of Snake.
              </p>
              <p>
                Pytorch model summary library: Developed a python package to
                retrieve the model summary of models created in PyTorch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
