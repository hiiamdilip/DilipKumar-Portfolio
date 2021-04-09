import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Dilip Kumar - Software Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Dilip Kumar',
  subtitle: 'and I am a Software Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile1.jpg',
  paragraphOne: "Hey, I'm Dilip Kumar. I am Full Stack Developer working as a Senior Member Of Technical Staff at Oracle having total of more than 5.5 years of experience under my belt.",
  paragraphTwo: "I am based out of Bangalore, India 🇮🇳.",
  paragraphThree: "I am experienced in building Java and JavaScript based webapps. I am comfortable working with web technologies like Oracle Jet, Node.js, Express.js & React.",
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Cisco Commerce Workplace',
    info: 'Cisco Systems',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Enterprise Manager & Cloud Control',
    info: 'Oracle',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'memory-game.jpg',
    title: 'Memory Game',
    info: 'Side Project',
    info2: '',
    url: 'https://dilip-memorygame.netlify.app/',
    repo: 'https://github.com/hiiamdilip/memoryGame', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

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
      name: 'code',
      url: 'https://leetcode.com/Dilip35kum/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
