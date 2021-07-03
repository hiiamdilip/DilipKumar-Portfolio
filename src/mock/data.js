import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Dilip Kumar | Software Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, I’m',
  name: 'Dilip Kumar',
  subtitle: 'A passionate learner and A Full Stack Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile1.jpg',
  paragraphOne: "Hey, I'm Dilip Kumar. I am from Bangalore, India. I am Full Stack Developer working as a Senior Member Of Technical Staff at Oracle having total of more than 6 years of experience under my belt.",
  paragraphTwo: "I am experienced in building Java and JavaScript based webapps. I am comfortable working with web technologies like Oracle Jet, Node.js, Express.js & React.",
  paragraphThree: "My hobby is reading interesting and knowledgeable books in my free time. I read non-fiction and self-development books.",
  resume: 'Dilip_Kumar.docx', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'em.jpg',
    title: 'Enterprise Manager & Cloud Control',
    info: 'Oracle - Project',
    info2: 'A complete cloud lifecycle management solution enabling customers to quickly set up, manage, and support enterprise clouds and traditional Oracle IT environments from applications to disk',
    tech: 'Oracle Jet',
    url: 'https://www.oracle.com/in/enterprise-manager/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ccw.jpg',
    title: 'Cisco Commerce Workplace',
    info: 'Cisco - Project',
    info2: 'CCW is responsible for quote to order process, used by Cisco partners and end customers for buying Cisco Products, Services and Solutions.',
    tech: 'Java, RestApi',
    url: 'https://apps.cisco.com/Commerce/guest',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'memory-game.jpg',
    title: 'Memory Game',
    info: 'Fun - Project',
    info2: 'A classical memory game. There is a set of cards. The cards have a pictures on one side and each picture appears on two cards. The winner is the person when all the cards have been taken.',
    tech: 'HTML, CSS, Javascript',
    url: 'https://dilip-memorygame.netlify.app/',
    repo: 'https://github.com/hiiamdilip/memoryGame', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ecom.jpg',
    title: 'Course E-commerce',
    info: 'Side - Project',
    info2: 'Course e-commerce webapp with Snipcart, Contentful, Formspree integration and many more fetaures. This project is in progress',
    tech: 'React, Gatsby',
    url: 'https://dilip-ecom.netlify.app/',
    repo: 'https://github.com/hiiamdilip/react-gatsby-ecom', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ipl2.jpg',
    title: 'IPL Dashboard',
    info: 'Side - Project',
    info2: 'This shows comprehensive view of all IPL matches played for different team between year 2008-2020. There is team page which shows team level details and match page which shows all matches for a team in different year.',
    tech: 'Spring Batch, CSS, React',
    url: 'http://ipldashboard-env-1.eba-rxt2tc2t.us-east-2.elasticbeanstalk.com/',
    repo: 'https://github.com/hiiamdilip/ipl-dashboard', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'corona.jpg',
    title: 'Coronavirus Tracker',
    info: 'Side - Project',
    info2: 'This is a SPA to track daily and total coronavirus cases across different countries. This gets updated daily with latest data.',
    tech: 'Java, SpringBoot',
    url: 'http://coronavirustracker-env.eba-e5ws2ynk.us-east-2.elasticbeanstalk.com/',
    repo: 'https://github.com/hiiamdilip/coronavirus-tracker', // if no repo, the button will not show up
  },
];

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/dilip-kumar-38904a92/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/hiiamdilip',
    },
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/hiiamdilip/',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/hiiamdilip/',
    },
    {
      id: nanoid(),
      name: '',
      url: 'https://leetcode.com/Dilip35kum/',
    },
  ],
};
