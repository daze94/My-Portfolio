import aboutpic from "./components/Access/mePhoto.jpg"

const header = {
  homepage: 'https://github.com/daze94/React-Portfolio',
}

const about = {
  photo:aboutpic,
  name: 'Gurwinder Sandhu',
  role: 'Full Stack Web Developer',
  description:
    'As I transition into the tech industry, I bring with me a track record of delivering exceptional results and fostering strong client relationships. I am excited about the possibility of leveraging technology to solve complex problems and create value. I am open to roles that challenge me and offer the opportunity to be at the forefront of technological advancements. I would love to connect and explore how we can collaborate to drive success in your organization.',
  social: {
    linkedin: 'https://www.linkedin.com/in/gurwinder-s-sandhu/',
    github: 'https://github.com/daze94/',
  },
}

const projects = [
  {
    name: 'Job Junction',
    description:
      'JobJunction is an advanced online platform designed to seamlessly connect job seekers with employers, facilitating the application process with the help of modern technologies such as React.js, GraphQL, and Material UI. It streamlines the job search and recruitment process through a user-friendly interface, offering a dynamic space for professional opportunities and career growth',
    stack: ['Javascript', 'React', 'GraphQL', 'HTML', 'JSON'],
    sourceCode: 'https://github.com/FaustCelaj/JobJunction',
  },
  {
    name: 'Mr. Commodus',
    description:
      'This project helps users find local concerts by city and province or state, displaying venues on a map for easy event selection. It the ability to filter concerts by genre, and integrates the Ticketmaster and Mapbox APIs for concert searching and mapping. The application enhances user experience by providing a visual and interactive way to discover and attend concerts.',
    stack: ['Javascript', 'HTML', 'CSS'],
    sourceCode: 'https://github.com/RecceRaven/ConcertFinder',
  },
  {
    name: 'Budgetor',
    description:
      'Budgetor is a budgeting application that tracks personal finances, allowing users to monitor spontaneous spending, income, and expenses, and displays a net income summary for informed financial decisions. It features a savings section where users can set goals, track progress, and access saving tips. Additionally, it includes a compound interest calculator for forecasting savings growth.',
    stack: ['MySQL', 'Javascript', 'Handlebars.js', 'JSON', 'HTML'],
    sourceCode: 'https://github.com/Mikkal1/BUDGETOR',
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
