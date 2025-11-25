import {
    mobile,
    backend,
    creator,
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
    docker,
    solidity,
    threejs,
    pokemon,
    crowdfunding,
    employee,
    travelBlog,
    matricula,
    iqapex,
    bigData,
    Coursera,
    IBM,
    doubleSlash,
    internship,
    urekon,
    frenzy,
    joneast,
    healthcare
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
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack (MERN) Web Developer",
      icon: web,
    },
    {
      title: "Web3 Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Frontend Developer",
      icon: creator,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "React Native",
      icon: reactjs,
    },
    {
      name: "solidity",
      icon: solidity,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "Next JS",
      icon: reactjs,
    },
  ];
  
  const experiences = [
    {
      title: "Full Stack Developer",
      company_name: "Matricula",
      icon: matricula,
      iconBg: "#383E56",
      date: "August 2022 - Octoper 2022",
      points: [
        "Developing and maintaining web applications using mern stack and other related technologies.",
        "Creating platform for students to apply for exams.",
        "HR management tool to track activities for employees.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "IQapex Labs",
      icon: iqapex,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - March 2023",
      points: [
        "Developing and maintaining web applications using mern stack and other related technologies.",
        "Creating new features for a lawyer client website interaction.",
        "Working on backend , creating rest apis for the main website",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "Frenzy Games Private Ltd (Gameduels)",
      icon: frenzy,
      iconBg: "black",
      date: "Jan 2024 - June 2024",
      points: [
        "Developed a gaming app in React Native and Node.js with GraphQL Apollo Server, boosting user engagement",
        "Created 10+ screens for multiplayer and single-player tournaments, enhancing user retention by 25% and play with friends flow using stylesheet and best practices of React Native and its libraries",
        "Implemented 10+ backend APIs using Node.js, GraphQL, and PostgreSQL for game data management and user login flow",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Software Developer (MERN Stack)",
      company_name: "Jon East Digital Media",
      icon: joneast, // You'll need to add this image to your assets
      iconBg: "#383E56",
      date: "September 2024 - Current",
      points: [
        "Building interactive, responsive web services using Next.js and React.js with emphasis on dynamic UI/UX development.",
        "Developed and maintained CMS and admin panels using Next.js, Redux, Tailwind CSS, and MUI with WebSocket integration for real-time updates.",
        "Contributed to microfrontend architecture for modular development and deployment, improving scalability and maintainability.",
        "Created full-stack applications using React, MongoDB, Node.js, Express, and Docker to analyze GitHub data.",
        "Implemented unit testing using Jest and React Testing Library to ensure performance and reliability.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      ],
    },

  ];
  
  const certificates = [
    {
      certificate:
        "Cerificate for coding competition in recognition of Mobilewalla Big Data Challenge Round-1(Coding)",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: bigData,
    },
    {
      certificate:
        "Internship completion Certificate on full stack mainly using mern stack .",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: internship,
    },
    {
      certificate:
        "Course certificate from IBM for Introduction to Cloud Development with HTML, CSS, and JavaScript.",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: IBM,
    },
    {
      certificate:
        "Coursera certificate for Object Oriented Programming in Python.",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: Coursera,
    },
    {
      certificate:
        "IEEE Double Slash competition certificate qualifing to the final round.",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: doubleSlash,
    },
    {
      certificate:
        "Ureckon certificate competition. Project submitted using mern stack of crowdfunding.",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: urekon,
    },
  ];
  
  const projects = [
    {
      name: "Health Tracker Web App",
      description:
        "Developed a comprehensive health platform for logging and visualizing blood sugar levels with Google sign-in authentication. Features an ML model using scikit-learn that predicts diabetes risk, automating tracking and monitoring for users.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "flask",
          color: "green-text-gradient",
        },
        {
          name: "python",
          color: "pink-text-gradient",
        },
        {
          name: "mongodb",
          color: "blue-text-gradient",
        },
        {
          name: "ml",
          color: "green-text-gradient",
        },
      ],
      image: healthcare, // Replace with health tracker image
      source_code_link: "https://github.com/diksha1627/heath-tracker-backend",
      live_site_link: "https://health-tracker-frontend-tau.vercel.app/",
    },
    {
      name: "Employee Managemnt App",
      description:
        "Web-based platform that allows users to track activities for employees it is a technology designed to streamline core HR services and improve workforce productivity. It accomplishes these goals largely by automating labor-intensive, administrative tasks and using analytics to drive business decisions.",

      tags: [
        {
          name: "open in desktop",
          color: "white-text-gradient",
        },
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: employee,
      source_code_link: "https://github.com/diksha1627/Employee-Management-Frontend",
      live_site_link:"https://employee-management-diksha.netlify.app/",
    },
    {
      name: "CrowdFunding App",
      description:
        "Crowdfunding is a way for bringing capital up in little sums from an expansive gathering of individuals utilizing the Internet and online networking. This app enable users and investors to do that.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "solidity",
          color: "green-text-gradient",
        },
        {
          name: "web3",
          color: "blue-text-gradient",
        },
      ],
      image: crowdfunding,
      source_code_link: "https://github.com/diksha1627/CrowdFunding-client-side",
      live_site_link:"https://crowdfunding-dapp-diksha.netlify.app/",
    },
    {
      name: "Travel Blog",
      description:
        "Travel Blog App from travel enthusiats to post about their experience using images and can update their posts. People write and post on their websites, blogs and social media platforms in a concerted effort to brand themselves as travel specialists. ",
      tags: [
        {
          name: "open in desktop",
          color: "white-text-gradient",
        },
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: travelBlog,
      source_code_link: "https://github.com/diksha1627/TravelBlog-frontend",
      live_site_link:"https://travel-blog-diksha.netlify.app/",
    },
     {
       name: "Pokemon Game",
       description:
         "The game has simple setup ,typically the main character has to save himself from the enemies by running and jumping over them or just getting to the next level in certain amount of time .The game usually feature simple plots and attractive theme .The objective of this game is keeping the main character out of the enemy. On your way you will run into a turtle creature. All of these characters try to slow you down and keep you from reaching your goal.",
       tags: [
        {
          name: "open in desktop",
          color: "white-text-gradient",
        },
         {
           name: "HTML",
           color: "blue-text-gradient",
         },
         {
           name: "JavaScript",
           color: "green-text-gradient",
         },
         {
           name: "css",
           color: "pink-text-gradient",
         },
       ],
       image: pokemon,
       source_code_link: "https://github.com/diksha1627/project.github.io",
       live_site_link:"https://pokemon-game-diksha1627.netlify.app/",
     },
    
  ];
  
  export { services, technologies, experiences, certificates, projects };