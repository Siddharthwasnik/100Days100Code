import project1 from '../assets/wheather app.jpg'
import project2 from '../assets/chatbot.jpg'

export const HERO_CONTENT = `I am a passionate frontend developer skilled in building responsive 
and interactive user interfaces using modern web technologies. With a strong foundation in HTML, 
CSS, JavaScript, and React.js, I specialize in delivering engaging digital experiences. I focus 
on performance, accessibility, and clean design, aiming to bring ideas to life with well-crafted 
code and thoughtful user-centric design.`;

export const ABOUT_TEXT = `I'm Siddharth Wasnik, a detail-oriented frontend
 developer with hands-on experience in building responsive web applications. 
 I have worked with tools like React.js, Tailwind CSS, Bootstrap, and JavaScript 
 to create sleek user interfaces. My curiosity and love for web technologies led 
 me to develop projects like a Weather Forecast App and an AI Chatbot. 
 I enjoy collaborating in team environments and solving real-world problems 
 through code. I am currently seeking opportunities to apply and grow my frontend development skills in a professional setting.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Frontend Developer",
    company: "Debugshala",
    description: `Created responsive and user-friendly interfaces using HTML, CSS, and 
    JavaScript. Collaborated with cross-functional teams to develop new features and
     improve UI performance. Participated in code reviews, optimized performance, and implemented user feedback.`,
    tech : ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"],
  },
];

export const PROJECTS = [
  {
    title: "Weather Forecast App",
    image: project1,
    description:
      "A real-time weather app built using React.js and Tailwind CSS. It  fetches weather data using the OpenWeather API and provides geolocation-based updates, dynamic clock, and responsive design.",
    technologies: ["React.js", "Tailwind CSS", "OpenWeather API", "Geolocation API"],
  },
  {
    title: "AI Chatbot UI",
    image: project2,

    description:
      "An interactive chatbot frontend using HTML, CSS, and JavaScript. Integrated with Groq Cloud API for real-time chat responses, featuring a responsive and intuitive chat UI.",
    technologies: ["HTML", "CSS", "JavaScript", "API Integration"],
  },
];

export const CONTACT = {
  address: "Indore, Madhya Pradesh, India",
  phoneNo: "+91 9981012671",
  email: "iamsiddharthwasnik@gmail.com",
};
