import Navbar from "../Navbar"
import Img from "./Img"
import Interest from "./Interest"
import Skills from "./Skills"


const About = () => {
  return (
    <div className="">
      <div className='w-[90%] mx-auto py-30'>
        <h1 className='text-5xl  md:text-7xl font-bold leading-tight'>
            MEET GBOLAHAN 
        </h1>
        <div className="space-y-4 mt-5">
          <p className="md:text-[18px] font-medium font">
            Hi, I'm Gbolahan, a Software Developer passionate about
            turning ideas into functional, scalable, and user-friendly
            digital products. I enjoy solving real-world problems
            through code, from designing intuitive interfaces to
            building the systems that power them.
          </p>

          <p className="md:text-[18px] font-medium font">
            I specialize in building modern web and mobile applications
            using React, Next.js, TypeScript, React Native, Node.js,
            and NestJS. My experience spans frontend development,
            backend APIs, third-party integrations, and building
            end-to-end application workflows.
          </p>

          <p className="md:text-[18px] font-medium font">
            Beyond writing code, I care about performance, clean
            architecture, maintainability, and creating products
            that deliver real value. At Shaare, my contributions
            to improving the booking flow helped drive a 25%
            increase in sales and 30% growth in active users.
          </p>

          <p className="md:text-[18px] font-medium font">
            When I'm not coding, I enjoy playing games, watching
            movies, and listening to music.
          </p>
        </div>
        <Img />
        <Skills />
        <Interest />
      </div>
        <Navbar />
    </div>
  )
}

export default About
