import { IconBriefcase, IconMapPin, IconRecharging, IconSearch } from "@tabler/icons-react";

const searchFields=[
    { title: "Job Title", icon: IconSearch, options: ['Designer', 'Developer', 'Product Manager', 'Marketing Specialist', 'Data Analyst', 'Sales Executive', 'Content Writer', 'Customer Support'] },
    { title: "Location", icon: IconMapPin, options: ['Delhi', 'New York', 'San Francisco', 'London', 'Berlin', 'Tokyo', 'Sydney', 'Toronto'] },
    { title: "Skills", icon: IconRecharging, options: ["HTML","CSS","JavaScript","React","Angular","Node.js","Python","Java","Ruby","PHP","SQL","MongoDB","PostgreSQL","Git","API Development","Testing and Debugging","Agile Methodologies","DevOps","AWS","Azure","Google Cloud"] },
]
const talents = [
    {
      name: "Jarrod Wood",
      role: "Software Engineer",
      company: "Google",
      topSkills: ["React", "SpringBoot", "MongoDB"],
      about: "As a Software Engineer at Google, I specialize in building scalable and high-performance applications. My expertise lies in integrating front-end and back-end technologies to deliver seamless user experiences. With a strong foundation in React and SpringBoot, and a focus on MongoDB for database solutions, I am passionate about leveraging the latest technologies to solve complex problems and drive innovation. My goal is to create impactful software that enhances productivity and meets user needs effectively.",
      expectedCtc: "₹48 - 60LPA",
      location: "New York, United States",
      image:"avatar"
    },
    {
      name: "Alice Johnson",
      role: "Frontend Developer",
      company: "Facebook",
      topSkills: ["HTML", "CSS", "JavaScript"],
      about: "As a Frontend Developer at Facebook, I focus on creating visually appealing and highly interactive web applications. My expertise in HTML, CSS, and JavaScript allows me to build responsive and user-friendly interfaces that enhance user experience. I am dedicated to staying current with the latest trends and best practices in web development to ensure optimal performance and accessibility. I thrive in collaborative environments where I can contribute to innovative projects and deliver solutions that meet user expectations.",
      expectedCtc: "₹40 - 55LPA",
      location: "San Francisco, United States",
      image:"avatar1"
    },
    {
      name: "Bob Smith",
      role: "Backend Developer",
      company: "Amazon",
      topSkills: ["Node.js", "Express", "MySQL"],
      about: "As a Backend Developer at Amazon, I specialize in server-side development and database management. My skills in Node.js and Express allow me to build robust and scalable APIs, while my experience with MySQL ensures efficient data handling and storage. I am passionate about optimizing backend processes to support high-traffic applications and improve system performance. My approach to development emphasizes reliability, security, and the ability to adapt to evolving technological demands.",
      expectedCtc: "₹50 - 65LPA",
      location: "Seattle, United States",
      image:"avatar"
    },
    {
        name: "Diana Prince",
        role: "UX/UI Designer",
        company: "Adobe",
        topSkills: ["Figma", "Sketch", "InVision"],
        about: "As a UX/UI Designer at Adobe, I am dedicated to crafting visually compelling and user-centric designs. My expertise in Figma, Sketch, and InVision allows me to create intuitive interfaces that enhance user experience across digital platforms. I am passionate about translating complex ideas into clean and effective designs that align with user needs and business goals. My design process involves thorough research, user testing, and iterative design to ensure the highest quality and user satisfaction.",
        expectedCtc: "₹35 - 50LPA",
        location: "Los Angeles, United States",
        image:"avatar2"
      },
    {
      name: "Charlie Brown",
      role: "Full Stack Developer",
      company: "Microsoft",
      topSkills: ["Python", "Django", "React"],
      about: "As a Full Stack Developer at Microsoft, I work on developing end-to-end solutions for web applications. My expertise in Python and Django for backend development, combined with React for frontend, allows me to create cohesive and high-performing applications. I am adept at managing the entire development lifecycle, from designing intuitive user interfaces to implementing robust server-side logic. My goal is to deliver comprehensive solutions that meet both user needs and business objectives.",
      expectedCtc: "₹45 - 60LPA",
      location: "Redmond, United States",
      image:"avatar"
    },
    {
        name: "Fiona Gallagher",
        role: "DevOps Engineer",
        company: "Netflix",
        topSkills: ["Docker", "Kubernetes", "AWS"],
        about: "As a DevOps Engineer at Netflix, I focus on automating infrastructure and optimizing deployment processes to support scalable applications. My expertise in Docker, Kubernetes, and AWS enables me to manage and streamline complex cloud environments efficiently. I am dedicated to improving operational efficiency and reliability through continuous integration and delivery practices. My role involves collaborating with development teams to ensure seamless deployment and maintenance of applications, enhancing overall system performance and resilience.",
        expectedCtc: "₹50 - 65LPA",
        location: "Los Gatos, United States",
        image:"avatar1"
      },
    {
      name: "Ethan Hunt",
      role: "Data Scientist",
      company: "IBM",
      topSkills: ["Python", "R", "Machine Learning"],
      about: "As a Data Scientist at IBM, I leverage my skills in Python, R, and machine learning to analyze complex datasets and generate actionable insights. My work involves building predictive models and data-driven solutions to support strategic decision-making and business growth. I am committed to exploring innovative techniques and methodologies to enhance data analysis and drive meaningful outcomes. My goal is to turn data into valuable information that can help organizations solve problems and seize opportunities.",
      expectedCtc: "₹55 - 70LPA",
      location: "Austin, United States",
      image:"avatar"
    },    
    {
        name: "Helen Mirren",
        role: "Mobile App Developer",
        company: "Apple",
        topSkills: ["Swift", "iOS", "Xcode"],
        about: "As a Mobile App Developer at Apple, I specialize in creating intuitive and high-performance iOS applications. With expertise in Swift and Xcode, I design and develop apps that offer seamless user experiences and adhere to the highest standards of quality and performance. My role involves collaborating with cross-functional teams to deliver innovative features and ensure smooth integration with Apple's ecosystem. I am passionate about leveraging the latest technologies to build apps that delight users and drive engagement.",
        expectedCtc: "₹55 - 70LPA",
        location: "Cupertino, United States",
        image:"avatar2"
      },
      {
        name: "George Lucas",
        role: "Cybersecurity Analyst",
        company: "Cisco",
        topSkills: ["Penetration Testing", "Network Security"],
        about: "As a Cybersecurity Analyst at Cisco, I focus on safeguarding organizations from cyber threats through proactive security measures. My skills in penetration testing, network security, and ethical hacking enable me to identify vulnerabilities and implement effective countermeasures. I am dedicated to protecting sensitive data and ensuring compliance with security standards. My approach involves continuous monitoring, threat analysis, and incident response to maintain robust security posture and mitigate risks in an ever-evolving threat landscape.",
        expectedCtc: "₹60 - 75LPA",
        location: "San Jose, United States",
        image:"avatar"
      }
  ];
  const profile={
    name: "Jarrod Wood",
    role: "Software Engineer",
    company: "Google",
    location: "New York, United States",
    about: "As a Software Engineer at Google, I specialize in building scalable and high-performance applications. My expertise lies in integrating front-end and back-end technologies to deliver seamless user experiences. With a strong foundation in React and SpringBoot, and a focus on MongoDB for database solutions, I am passionate about leveraging the latest technologies to solve complex problems and drive innovation. My goal is to create impactful software that enhances productivity and meets user needs effectively.",
    skills: ["React", "SpringBoot", "MongoDB", "HTML", "CSS", "JavaScript", "Node.js", "Express", "MySQL", "Python", "Django", "Figma", "Sketch", "Docker", "AWS"],
    experience: [
      {
        title: "Software Engineer III",
        company: "Google",
        location: "New York, United States",
        startDate: "Apr 2022",
        endDate: "Present",
        description: "As a Software Engineer at Google, I am responsible for designing, developing, and maintaining scalable software solutions that enhance user experience and improve operational efficiency. My role involves collaborating with cross-functional teams to define project requirements, develop technical specifications, and implement robust applications using cutting-edge technologies. I actively participate in code reviews, ensuring adherence to best practices and coding standards, and contribute to the continuous improvement of the development process."
      },
      {
        title: "Software Engineer",
        company: "Microsoft",
        location: "Seattle, United States",
        startDate: "Jun 2018",
        endDate: "Mar 2022",
        description: "At Microsoft, I worked on developing and optimizing cloud-based applications, focusing on enhancing performance and scalability. I collaborated with product managers and designers to create innovative features that improved user engagement. My responsibilities included writing clean, maintainable code, performing code reviews, and mentoring junior developers. I played a key role in migrating legacy applications to modern cloud infrastructure, resulting in significant cost savings and improved efficiency."
      }
    ],
    certifications: [
      {
        name: "Google Professional Cloud Architect",
        issuer: "Google",
        issueDate: "Aug 2023",
        certificateId: "CB72982GG"
      },
      {
        name: "Microsoft Certified: Azure Solutions Architect Expert",
        issuer: "Microsoft",
        issueDate: "May 2022",
        certificateId: "MS12345AZ"
      }
    ]
  }
  
  
  
export {searchFields, talents, profile};