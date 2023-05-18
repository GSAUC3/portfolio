import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import Canvas from '../Parrticle'
import './index.scss'

const Home = () => {
  const jobArray = 'Web Developer'.split('').map((c) => c)
  const nameArray = 'Rajarshi Banerjee'.split('').map((char) => char)
  const letterClass = 'text-animate'


  return (
    <div className="HOME">
      <div className="container home-page glass">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,&nbsp;&nbsp;</span>
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <br />
            <br />

            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={32}
            />
          </h1>
          <Link to="/contact" className="flat-button">
            Contact Me
          </Link>
        </div>

        <div className="particle-container">
          <Canvas id="canvas-ass"/>
        </div>
      </div>

      <Loader type="pacman" />
   

  </div>

  )
}

export default Home
