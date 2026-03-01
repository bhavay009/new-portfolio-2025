// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';

// Experience Section Logo's
// import webverseLogo from './assets/company_logo/webverse_logo.png';

// Project Section Logo's
import eventease from './assets/work_logo/eventease.png';
import ai from './assets/work_logo/virtualAI.png';
import water from './assets/work_logo/hydration.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      // { name: 'Material UI', logo: materialuiLogo }, 
      // { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      // { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo }
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      // { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      // { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },

    ],
  },
];

export const experiences = [
  {
    id: 0,
    role: "Founder",
    company: "Nexora",
    date: "Full Time",
    desc: "Nexora is a digital solutions platform focused on helping businesses and individuals establish a strong and effective online presence. It delivers clean, responsive, and high-performance web experiences, including modern landing pages, business websites, and custom digital products.",
    skills: [
      "React",
      "Node JS",
      "Next JS",
      "UI/UX Design",
      "Web Development"
    ],
  },
];

export const education = [

  {
    id: 0,
    school: "S.H. S.N. Sidheshwar SR. Sec. School, Gurgaon",
    // date: "Apr 2017 - March 2018",
    grade: "91.4%",
    desc: "I completed my class 12 education from Sidheshwar Public School, Gurgaon, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) ",
    degree: "CBSE(XII) - PCM",
  },
  {
    id: 1,
    school: "S.H. S.N. Sidheshwar SR. Sec. School, Gurgaon",
    // date: "Apr 2015 - March 2016",
    grade: "95%",
    desc: "I completed my class 10 education from VatSidheshwar Public School, Gurgaon, under the CBSE board, where I studied Science with Computer.",
    degree: "CBSE(X), Science with Computer Application",
  },
];

export const projects = [
  {
    id: 0,
    title: "EventEase",
    description: "A dynamic event management web application that allows users to create, manage, and participate in events seamlessly. Built with React.js for the frontend and Node.js for the backend, it features user authentication, event creation, RSVP functionality, and real-time notifications.",
    image: eventease,
    tags: ["HTML", "CSS", "JavaScript", "MYSQL", "React JS", "Node JS"],
    github: "https://github.com/bhavay009/eventEase.git",
    webapp: "https://event-ease-eta-lovat.vercel.app/",
  },
  {
    id: 1,
    title: "Virtual AI",
    description:
      "Built a responsive virtual assistant with voice recognition, text-to-speech, AI responses via Google Gemini, and basic math solving. Features include opening websites, telling time/date, and interactive animated prompts with a modern UI.",
    image: ai,
    tags: ["React JS", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/bhavay009/new-virtual-AI.git",
    webapp: "https://vercel.com/bhavay009s-projects/new-virtual-ai",
  },
  {
    id: 2,
    title: "Hydration-Tracker",
    description:
      "Developed a responsive hydration tracker web app using React.js to monitor daily water intake. The app features an intuitive UI for logging water consumption, real-time progress tracking, and visual indicators to help users stay on target with their hydration goals.",
    image: water,
    tags: ["React JS", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/bhavay009/hydration-Tracker-project-.git",
    webapp: "https://hydraration-tracker.netlify.app/",
  },
  // {
  //   id: 3,
  //   title: "Email Validator NPM Package",
  //   description:
  //     "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
  //   image: npmLogo,
  //   tags: ["React JS", "Node.js", "NPM", "Validation"],
  //   github: "https://github.com/bhavay009/cmtk-email-validator",
  //   webapp: "https://www.npmjs.com/package/cmtk-email-validator",
  // }
  // {
  //   id: 4,
  //   title: "Task Reminder Chrome Extension Tool",
  //   description:
  //     "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
  //   image: taskremLogo,
  //   tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
  //   github: "https://github.com/bhavay009/Task-Reminder-Tool",
  //   webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
  // }
  // {
  //   id: 5,
  //   title: "Webverse Digital",
  //   description:
  //     "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
  //   image: webverLogo,
  //   tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
  //   github: "https://github.com/bhavay009/Webverse-Digital",
  //   webapp: "https://webversedigital.com/",
  // }
];  
