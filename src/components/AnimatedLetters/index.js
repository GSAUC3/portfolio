import './index.scss'

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <div>

    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
    </div>
  )
}

export default AnimatedLetters