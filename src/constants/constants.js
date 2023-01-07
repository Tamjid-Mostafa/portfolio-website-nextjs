import { DiBootstrap, DiFirebase, DiMongodb, DiNodejs, DiReact } from "react-icons/di";
import { FaCcStripe } from "react-icons/fa";

export const projectsData = [
  {
    title: "Your Moto",
    slug: "your-moto",
    description:
      "Using React, Node.js, Express & MongoDB, I build a Full Stack MERN Application - from start to finish. The App is called Your Moto and it is a simply used bike buy & sell an app that allows users to post products with information also can boost their product advertisement. Buyers can make purchase their desired bike with their meeting locations and phone numbers and also can book their product. I have used stripe to make purchases.",
    image: [
      "https://i.ibb.co/hL6VN19/yourmoto-1.png",
      "https://i.ibb.co/Z1VQX4M/yourmoto-2.png",
      "https://i.ibb.co/99wKzBM/yourmoto-3.png",
    ],
    tags: ["MongoDB", "Express", "React", "Node", "Stripe"],
    source: "https://github.com/Tamjid-Mostafa/Your-Moto",
    visit: "https://yourmoto-45ca1.web.app/",
    id: 0,
    features: [
      "Dark and light mode system.",
      "Google and Password based Authentication using jwt.",
      "Admin Dashboard.",
      "Admin can manage users like verified user, and delete.",
      "Seller Dashboard. Seller can add products and delete",
      "Buyer Dashboard. Buyer can only make purchase and book product. In buyer dashboard panel buyer can only see their booked items",
    ],
    technologies: [
      "React18 ",
      "React-router-dom",
      "React Context API",
      "Tailwind CSS",
      "Express JS",
      "MongoDB",
      "Node JS",
      "Json Web Token",
    ],
  },
  {
    title: "Edu Vibe",
    slug: "edu-vibe",
    description:
      "In this website I have displayed some web development technology courses. Using React, Node.js, Express & MongoDB, I build a Full Stack MERN Application - from start to finish. The App is called Edu Vibe and it is a simple E-Learning platform that allows users to learn and purchase new courses.",
    image: [
      "https://i.ibb.co/9ZF1PZP/eduvibe-1.png",
      "https://i.ibb.co/VjtHtSJ/eduvibe-2.png",
      "https://i.ibb.co/CH6QNW9/eduvibe-3.png",
    ],
    tags: ["MongoDB", "Express", "React", "Node", "Firebase"],
    source: "https://github.com/Tamjid-Mostafa/Edu-Vibe",
    visit: "https://edu-vibe.web.app/",
    id: 1,
    features: [
      "Dark and light mode system.",
      "Google and Password based Authentication using jwt.",
    ],
    technologies: [
      "React18 ",
      "React-router-dom",
      "React Context API",
      "Tailwind CSS",
      "Express JS",
      "MongoDB",
      "Node JS",
      "Json Web Token",
    ],
  },
  {
    title: "Photography Lux",
    slug: "photography-lux",
    description:
      "Here a service provider can show his/her services, and client can review the services .",
    image: [
      "https://i.ibb.co/2yPGcQG/photographylux-1.png",
      "https://i.ibb.co/BjnBSC2/photographylux-2.png",
      "https://i.ibb.co/xLF6Zp7/photographylux-3.png",
      "https://i.ibb.co/2nWGTRS/photographylux-4.png",
    ],
    tags: ["React", "Firebase", "Node", "Talwind CSS"],
    source: "https://github.com/Tamjid-Mostafa/PhotographyLux",
    visit: "https://photographylux-22fb4.web.app/",
    id: 2,
    features: [
      "Dark and light mode system.",
      "Google and Password based Authentication using jwt.",
      "Admin Dashboard. admin can manage product like added, delete.",
    ],
    technologies: [
      "React18 ",
      "React-router-dom",
      "React Context API",
      "Tailwind CSS",
      "Express JS",
      "MongoDB",
      "Node JS",
      "Json Web Token",
    ],
  },
  /* {
    title: "Unichat",
    description:
      "This is a code repository for the corresponding video tutorial. In this video, we will create a full Realtime Chat Application",
    image: "/images/4.jpg",
    tags: ["React", "ChatEngine", "Firebase"],
    source: "https://google.com",
    visit: "https://google.com",
    id: 3,
  }, */
];

export const TimeLineData = [
  { year: 2021, month: "January", text: "Started my journey" },
  { year: 2021, month: "July", text: "Lead Generation Specialist" },
  { year: 2022, month: "July", text: "Started Learning web Development" },
];

export const Data = [
  { number: 20, text: "Open Source Projects" },
  { number: 1000, text: "Students" },
  { number: 1900, text: "Github Followers" },
  { number: 5000, text: "Github Stars" },
];
export const Stacks = [
  {
    title: "MongoDB",
    icon: <DiMongodb size="3rem"/>,
  },
  {
    title: "Express",
    icon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    width="30" height="30"
    viewBox="0 0 50 50">
    <path d="M49.729 11h-.85c-1.051 0-2.041.49-2.68 1.324l-8.7 11.377-8.7-11.377C28.162 11.49 27.171 11 26.121 11h-.85l10.971 14.346L25.036 40h.85c1.051 0 2.041-.49 2.679-1.324L37.5 26.992l8.935 11.684C47.073 39.51 48.063 40 49.114 40h.85L38.758 25.346 49.729 11zM21.289 34.242c-2.554 3.881-7.582 5.87-12.389 4.116C4.671 36.815 2 32.611 2 28.109L2 27h12v0h11l0-4.134c0-6.505-4.818-12.2-11.295-12.809C6.273 9.358 0 15.21 0 22.5l0 5.573c0 5.371 3.215 10.364 8.269 12.183 6.603 2.376 13.548-1.17 15.896-7.256 0 0 0 0 0 0h-.638C22.616 33 21.789 33.481 21.289 34.242zM2 22.5C2 16.71 6.71 12 12.5 12S23 16.71 23 22.5V25H2V22.5z"></path>
    </svg>,
  },
  {
    title: "React",
    icon: <DiReact size="3rem"/>,
  },
  {
    title: "Node",
    icon: <DiNodejs size="3rem"/>,
  },
  
  {
    title: "Firebase",
    icon: <DiFirebase size="3rem"/>,
  },
  {
    title: "Bootstrap",
    icon: <DiBootstrap size="3rem"/>,
  },
  {
    title: "Stripe",
    icon: <FaCcStripe size="3rem"/>,
  },
];
