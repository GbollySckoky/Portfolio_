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
    Hi, I’m Gbolahan a Frontend Developer passionate about turning ideas into intuitive,
    high-performing digital experiences. I focus on building interfaces that feel natural to use,
    while remaining accessible, scalable, and easy to maintain.
  </p>

  <p className="md:text-[18px] font-medium font">
    I specialize in building modern web and mobile products using React, Next.js, TypeScript,
    and React Native. My work spans dashboards, e-commerce platforms, booking systems,
    and payment-enabled applications for startups and growing businesses.
  </p>

  <p className="md:text-[18px] font-medium font">
    Beyond visuals, I care deeply about performance, clean architecture, and long-term scalability.
    At Shaare, improving the booking flow led to a 25% increase in sales and 30% growth in active users.
  </p>

  <p className="md:text-[18px] font-medium font">
    When I’m not coding, I enjoy playing games, seeing movies and listening to music.
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
