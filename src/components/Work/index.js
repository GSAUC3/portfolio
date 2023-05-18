import { ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./Experience";
import './index.scss'
function Work() {  

  // const { play, end } = usePlay();

  return (
    <div className="work-section">

      <Canvas>
        <color attach="background" args={["#ececec"]} />
        <ScrollControls
          pages={10}
          // damping={1}
          style={{
            top: "10px",
            left: "0px",
            bottom: "10px",
            right: "10px",
            width: "auto",
            height: "auto",
            animation: "fadeIn 2.4s ease-in-out 1.2s forwards",
            opacity: 0,
          }}
        >
          <Experience />
        </ScrollControls>
      </Canvas>

    </div>
  );
}

export default Work;