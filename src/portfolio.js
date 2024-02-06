import aboutpic from "./components/Access/mePhoto.jpg"

const header = {
  homepage: 'https://github.com/daze94/React-Portfolio',
}

const about = {
  photo:aboutpic,
  name: 'Gurwinder Sandhu',
  role: 'Full stack developer',
  description:
    'New bootcamp grad student living in Toronto, ON. Highly interested in web development and coding in general.',
  social: {
    linkedin: 'https://www.linkedin.com/in/gurwinder-s-sandhu/',
    github: 'https://github.com/daze94/',
  },
}

const projects = [
  {
    name: 'Social Network API',
    description:
      'This project is an API for a social networking web application where users can share thoughts, react to friends thoughts, and create a friend list.',
    stack: ['Javascript', 'Express.js', 'MongoDB'],
    sourceCode: 'https://github.com/daze94/NoSQL---Social-Network-API.git',
  },
  {
    name: 'PWA Text Editor',
    description:
      'This project is a browser-based text editor that offers a seamless and efficient user experience, both online and offline. Built as a Progressive Web Application (PWA), the text editor ensures data persistence through IndexedDB, allowing users to reliably create and store notes or code snippets for later use.',
    stack: ['Javascript', 'PWA', 'indexedDB','Node.js'],
    sourceCode: 'https://github.com/daze94/PWA-TEXT-EDITOR.git',
  },
  {
    name: 'Employee Tracker',
    description:
      'This command-line application is a Content Management System (CMS) that manages a companys employee database. It allows non-developers to easily view and interact with information stored in databases. Built with Node.js, Inquirer, and MySQL, it enables the management of departments, roles, and employees to organize and plan business operations effectively.',
    stack: ['SQL', 'Javascript', 'Node.js'],
    sourceCode: 'https://github.com/daze94/SQL-Employee-Tracker.git',
  },
  {
    name: 'E-Commerce',
    description:
      'This project is an E-Commerce back-end application that uses Object-Relational Mapping (ORM) to interact with a MySQL database. It employs Sequelize as the ORM and Express.js for the server framework. The application allows for easy management of a retail database, including products, categories, and tags.',
    stack: ['SQL', 'Express.js', 'Sequelize'],
    sourceCode: 'https://github.com/daze94/ORM-Assignment-.git',
    
  },
  {
    name: 'Note Taker',
    description:
      'Note Taker is an application that allows users to write, save, and delete notes. This application utilizes an Express.js back end and saves note data to a JSON file, offering a simple and effective way to organize thoughts and tasks.',
    stack: ['Javascript', 'Node.js', 'JSON'],
    sourceCode: 'https://github.com/daze94/Express.js-Assignment-11.git',
  },
]

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Express',
  'MySQL',
  'MongoDB',
  'React',
  'Bootstrap',
  'Node.js',
  'Express.js',
  'MERN',
  'Heroku'
]

const contact = {
  email: 'Gurwindersandhu1109@gmail.com',
}

export { header, about, projects, skills, contact }
