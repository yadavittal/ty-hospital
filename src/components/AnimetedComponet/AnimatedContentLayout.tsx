import { AnimatedBox } from "../Animation/Animation";

import Image from "../../assets/jpg/animetedDocter.png";

export default function AnimatedContentLayout() {
  return (
    <div style={{ width: "1000px", height: "700px", marginLeft: "200px" }}>
      <div className="relative w-full h-screen bg-white overflow-hidden">
        <img src={Image} className="absolute left-0 top-0 z-0" alt="Doctor" />

        <AnimatedBox
          centerX={200}
          centerY={300}
          radius={200}
          angle={-Math.PI / 2}
          delay={0.2}
        >
          <div className="bg-purple-600 text-white p-4 rounded-lg shadow-lg">
            Compassionate Approach
          </div>
        </AnimatedBox>

        <AnimatedBox
          centerX={200}
          centerY={300}
          radius={200}
          angle={-Math.PI / 6}
          delay={0.3}
        >
          <div className="bg-purple-600 text-white p-4 rounded-lg shadow-lg">
            Health
          </div>
        </AnimatedBox>

        <AnimatedBox
          centerX={100}
          centerY={300}
          radius={200}
          angle={7 * Math.PI / 6}
          delay={0.4}
        >
          <div className="bg-white text-black p-4 rounded-lg shadow-md border">
            Patient-Centered Care
          </div>
        </AnimatedBox>

        <AnimatedBox
          centerX={200}
          centerY={300}
          radius={200}
          angle={(3 * Math.PI) / 4}
          delay={0.5}
        >
          <div className="bg-white text-black p-4 rounded-lg shadow-md border">
            Life-Changing Treatments
          </div>
        </AnimatedBox>

      </div>
    </div>
  );
}
