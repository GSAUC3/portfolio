import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import AppleWatch from '../AppleWatch'

const About = () => {
  const letterClass = 'text-animate'

  return (
    <div className='ABOUT'>
      <div className="about-container1 main glass">
        <div className="text-zone " >
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          
          <p>
            As a recent graduate with a passion for web app development ad AI, I
            bring a unique blend of technical skills and creativity to the
            table. Currently, I am exploring the domain of web development and
            learning new frameworks and libraries such as react.js, next.js,
            tailwindcss etc.
          </p>
          <p align="LEFT">
            My interest in AI, specifically in computer vision has led me to
            explore libraries like PyTorch, OpenCV, NumPy, etc. I gained
            valuable hands-on experience while interning as a machine learning
            intern at C-DAC and a project intern at ISI, where I got the
            opportunity to solve real-world problems.
          </p>
          <p>
            My enthusiasm for web development and AI drives me to keep learning
            and improving in these fields. Always eager to explore new ideas and
            collaborate with others to develop innovative solutions that address
            real-world problems. I am passionate about using my technical
            expertise to make a positive impact. If you share these interests
            and would like to connect, please don't hesitate to reach out. I
            look forward to exploring potential opportunities and working
            together towards common goals.
          </p>

          


        </div>
        <div className="apple-outer-div ">
          <div className="spline">
            <AppleWatch  className='apel'/>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </div>
  )
}

export default About
