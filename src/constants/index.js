import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  jobit,
  Moodify,
  DBI,
  Synthesis,
  Next
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  // {
  //   id: "contact",
  //   title: "Contact",
  // },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend(Node js) Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: Next,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Synthesis Systems",
    icon: Synthesis,
    iconBg: "#383E56",
    date: "August 2022 - January 2023",
    points: [
      "Experienced software developer with expertise in front-end development using React and back-end development using Node.",
      "Hosted an end user Integrated website using Node.js, React, and SQL with features including user authentication, payment capture, and payment posting functionality for Zuora using the Zuora API's",
      "Developed and implemented an E-Sign integration tool using Adobe e-Sign and HelloSign within Salesforce to streamline and automate the document signing process for sales and customer success teams.",
      "Worked on the Frontend development of the data migration tool using React.js, which had various data migration funtionalities.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Front End Developer",
    company_name: "DBI360",
    icon: DBI,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Developed and maintained Buyer's Flow which was a automated email sending (with AI features) website with multiple other modules and it had sequence whixh was like a workflow were you can control the email flow",
      "Developed and maintaining Supplier's Discovery were we can Buy and sell products based on the preference we give and has permissions for different modules in buyer ans supplier accounts and it maintains the whole process from quote creation, purchase Order to Invoice and shipping with an Admin panel who has access to all the feature",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "MOODIFY",
    description:
      "Moodify is a responsive React-based web application that helps users alleviate insomnia by playing soothing ambient sounds using Audio Web API. I designed and developed the UI, integrated the audio playback, and added save and shuffle play functionalities.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript,",
        color: "green-text-gradient",
      },
      {
        name: "Material UI",
        color: "pink-text-gradient",
      },
    ],
    image: Moodify,
    source_code_link: "https://github.com/Bharathkm37/Moodify",
    // onclick: () => {
    //   window.open("https://moodify.pages.dev/");
    // },
  },
  {
    name: "MOVIEFLEX",
    description:
      "Developed a responsive movie application using React and MovieDB API. Features include trending movies and series, detailed descriptions, YouTube trailers, and search functionality. Enhanced the movie experience for users with a user-friendly and seamless application.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript,",
        color: "green-text-gradient",
      },
      {
        name: "Material UI",
        color: "pink-text-gradient",
      },
    ],
    // image: jobit,
    source_code_link: "https://github.com/Bharathkm37/MovieFlex",
    // onclick: () => {
    //   window.open("https://flexmovie.netlify.app/");
    // },
  },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { 
  services,
  technologies, 
  experiences, 
  // testimonials,
  projects 
};
