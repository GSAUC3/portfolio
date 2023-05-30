import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const letterClass = 'text-animate'

  return (
    <>
      <div className="ABOUT">
        <div className="container contact-page glass2 ">
          <div className="text-zone ">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                idx={15}
              />
            </h1>

            <div className="contact-form">
              <form  action='https://formspree.io/f/myyozzza' method='POST'>
                <ul>
                  <li className="half">
                    <input
                      placeholder="Name"
                      type="text"
                      name="name"
                      required
                    />
                  </li>
                  <li className="half">
                    <input
                      placeholder="Email"
                      type="email"
                      id='email'
                      name="_replyto"
                      required
                    />
                  </li>
                  <li>
                    <input
                      placeholder="Subject"
                      type="text"
                      name="subject"
                      required
                    />
                  </li>
                  <li>
                    <textarea
                      placeholder="Message"
                      name="message"
                      required
                    ></textarea>
                  </li>
                  <li>
                    <button type="submit" className="btn btn-neon" value="SEND">
                      <span className="span"></span>
                      <span className="span"></span>
                      <span className="span"></span>
                      <span className="span"></span>
                      SEND
                    </button>
                  </li>
                </ul>
              </form>
            </div>
          </div>
          
        </div>
        <Loader type="pacman" />
      </div>
    </>
  )
}

export default Contact
