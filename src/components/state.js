export const information = {
  name: 'Julien TEXIER',
  title: 'Full Stack Engineer & Master\'s in Management',
  catch_phrase: 'Ready to tackle a new challenge',
  address: { street: 'Merikasarminkatu 9B 27', city: '00160 Helsinki, FINLAND', country: 'Finland' },
  contacts: [{ name: 'julien.texier@ieseg.fr', href: 'mailto:julien.texier@ieseg.fr', icon: 'fas fa-at fa-sm' }, { name: '+33 6 22 45 69 47', href: 'tel:33622456947', icon: 'fas fa-phone fa-sm' },
    { name: 'Julien.texier12', href: 'skype:Julien.texier12?call', icon: 'fab fa-skype' },
    {
      name: 'JulienTexier', href: 'https://github.com/JulienTexier', icon: 'fab fa-github', link: true,
    },
    {
      name: 'texierjulien', href: 'https://www.linkedin.com/in/texierjulien/', icon: 'fab fa-linkedin', link: true,
    },
  ],
};

export const presentation = 'I graduated with a Master\'s in Management before specializing in Web development. Curious, open-minded and proactive, I can relate to a wide range of people and complement this with good attention to detail, enjoyment of learning new things and working well under pressure. I strive to write the cleanest and most transparent code to enable the easiest peer-reviewing process.';

export const experiencesList = [
  {
    company: 'Quanturi Oy',
    logo: 'q-logo.jpg',
    location: 'Espoo, FI',
    duration: 'January 2021 - Now',
    title: 'Full Stack Engineer (MERN) & Project Manager',
    description: 'In charge of designing full-stack web experiences for customers using the MERN Stack & AWS. Implementation of CI/CD procedures, handling of server and app migrations', //  & managed an international expansion multi-departmental project
  },
  {
    company: 'papernest',
    logo: 'papernest.png',
    location: 'Barcelona, SP',
    duration: 'January 2020 - July 2020',
    title: 'Digital Project Manager Assistant (SEO)',
    description:
'Management of 150K+ pages, content marketing, A/B testing, E-A-T improvement and implementation of new SEO campaign strategies, monitorisation of results: 30 improvements in traffic, + 3.89 PProspects implementation',
  },
  {
    company: 'TEDxIÉSEGLille',
    logo: 'tedx-logo.png',
    location: 'Lille, FR',
    duration: 'September 2017 - June 2019',
    title: 'Head of Speakers ',
    description:
  'Management of a team and organization of a TEDx conference with the mission of taking care of the speakers, from the first contacts to the final conference, through the coaching sessions and the writing of the talk: 11 international speakers, 500 spectators and 8.7 / 10 of speakers’ satisfaction.',
  },
  {
    company: 'Chronotruck',
    logo: 'chronotruck.png',
    location: 'Paris, FR',
    duration: 'April 2018 - September 2018',
    title: 'Project Manager',
    description:
  'In a logistics start-up, implementation and standardization of new IT tools, piloting an organizational restructuring: -56% customer response time average, -271% of first response time, increased customer satisfaction and volume of business (+ 3.8%)',
  },
  // {
  //   company: 'Charp.co',
  //   logo: 'charp.png',
  //   location: 'Online',
  //   duration: 'December 2015 - December 2017',
  //   title: 'Digital Analyst',
  //   description:
  // 'in a Digital B2B Agency providing prospecting support: Sourcing of potential customers, scrubbing of these leads to assess their potential, enriching to supplement information about prospects: 25+ supported companies, including Google, Facebook, Waze, Microsoft.',
  // },
  // {
  //   company: 'Bureau des Arts ‘Tex’Art’',
  //   logo: 'texart.jpg',
  //   location: 'Lille, FR',
  //   duration: 'From February to June 2015',
  //   title: 'Event director',
  //   description:
  // 'of the Student Union “Tex’Art”: Management of a team and a budget to ensure the organization of a cultural event that attracted 300 people.',
  // },
];

export const educationList = [
  {
    company: 'Udemy',
    logo: 'udemy-logo.png',
    location: 'Online',
    duration: '2021',
    title: 'Certificates',
    info: 'Online courses followed and completed',
    description: 'React - The Complete Guide, Ultimate AWS Certified Developer Associate',
  },
  {
    company: 'The Hacking Project',
    logo: 'thp.png',
    location: 'Rennes, FR',
    duration: '2019', // 'July 2019 - September 2019',
    title: 'Peer-programming intensive Bootcamp',
    info: 'Fullstack developer training in peer-learning',
    description: 'Languages learned: Ruby, Ruby on Rails, Javascript, jQuery, HTML, CSS, Bootstrap, Database & SQL, command-line & git, Github flow, Heroku',
  },
  {
    company: 'IÉSEG School of Management',
    logo: 'IESEG.png',
    location: 'Lille, FR',
    duration: '2015 - 2020',
    title: 'Master\'s Degree in Management, specialized in Management of Information Systems',
    info: '17th on the Financial Times ranking for its MSc in Management',
    description:
'Courses followed: Change Management, SAP & ERP management, Database Systems, Human-Computer Interaction, Digital Transformation, Consulting Skills, Decision Making for Managers...',
  },
  // {
  //   company: 'High School René Descartes',
  //   logo: 'baccalaureat.jpg',
  //   location: 'Rennes, FR',
  //   duration: 'June 2015',
  //   title: 'Baccalauréat Scientific (French high school diploma)',
  //   info: 'Specialized in Mathematics, with European Mention.',
  // },
];

export const languagesList = [
  {
    locale: 'en',
    name: 'English',
    level: 'Professional Proficiency (C1)',
    details: ['2-month woofing in Dublin, Ireland (2015)',
      '5-year courses all in English',
      'Scored 980 on the TOEIC© ',
    ],
    score: 97,
  },
  {
    locale: 'fr',
    name: 'French',
    level: 'Native Language (C2)',
    score: 100,
  },
  {
    locale: 'es',
    name: 'Spanish',
    level: 'Fluent (C1)',
    details: [
      'Academic year in Santiago, Chile (2016-2017)',
      'Travelled in South America & Spain',
      '6-month internship in Barcelona, Spain in 2020',
    ],
    score: 90,
  },
  {
    locale: 'fi',
    name: 'Finnish',
    level: 'Beginner (A1)',
    // details: [
    //   'Living in Helsinki',
    // ],
    score: 20,
  },
  // {
  //   locale: 'po',
  //   name: 'Portuguese (B1)',
  //   level: 'Beginner',
  //   details: [
  //     'Academic semester in Porto, Portugal (2019)',
  //   ],
  //   score: 45,
  // },
];

export const skillsList = [
  {
    name: 'Full Stack Web Development',
    details: [
      'HTML5',
      'CSS3',
      'SCSS',
      'Tailwind.css',
      'Material UI',
      'Bootstrap',
      // 'LESS',
      'Javascript',
      'ES6',
      'ES7',
      'Typescript',
      'Node.js',
      'JSX',
      'React',
      'React-Router',
      // 'Gatsby.js',
      'Next.js',
      'Redux',
      'Styled Components',
      // 'Vue',
      'Express.js',
      // 'NoSQL',
      'MongoDB',
      'MERN',
      'Ruby',
      'Ruby on Rails',
      'PostgreSQL',
      'Functional Programming',
    ],
  },
  {
    name: 'DevOps',
    details: [
      'Docker',
      // 'Docker-Compose',
      'AWS',
      'CI/CD',
      'Postman',
      'Git',
      'Version Control',
      'Heroku',
      'Firebase',
      'BitBucket Pipelines',
      'Github Actions',
      // 'SVN',
      // 'Travis CI',
      // 'CircleCI',
      // 'Jenkins',
      // 'Google Cloud',
      // 'Platform-as-a-Service',
      // 'Vercel',
      // 'Netlify',
      // 'Linux',
    ],
  },
];

export const hobbiesList = [
  {
    locale: 'sports',
    name: 'Sports',
    icon: 'fas fa-basketball-ball',
    details: ['- Squash, ice-swimming -', '- 7 years of Football -', '- 6 Years of Basketball -', 'Bronze Medal at the French Cup 2014', 'Basketball coach for 1 year'],
  },
  {
    locale: 'travel',
    name: 'Travelling',
    icon: 'fas fa-hiking',
    details: ['Europe (13 countries),', 'including a 1-month hitchhike (3 countries)', 'South America (5 countries),', 'including a 4-month road-trip', 'Asia & Africa (2 countries)'],
  },
  {
    locale: 'music',
    name: 'Music',
    icon: 'fas fa-music',
    details: ['- DJ keen of House & Tech House Music -', '- Playing Guitar & Ukulele -', '- Played in a Rock band for 2 years -'],
  },
  {
    locale: 'other',
    name: 'Other Skills',
    icon: 'fas fa-award',
    details: ['Fundamentals of Digital Marketing Google Certification (2020)', 'PSC1: Diploma for First Rescuing Degree', 'PMM (Préparation Militaire Marine) : Navy Military Preparation diploma in 2015.'],
  },
];
