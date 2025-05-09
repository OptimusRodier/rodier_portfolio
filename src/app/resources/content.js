import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Rodier Eyas",
  lastName: "Sangibala",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "System, Data and Integration Analst",
  avatar: "/images/ro.jpg",
  email: "rodier.sangibala@chezyo.com",
  location: "Europe/Warsaw", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "French", "Lingala","Kikongo"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally talk about DR Congo Politics outside of my work and innovative ideas.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts

  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/rodier-eyas-sangibala-5b3026b1/",
  },
  {
    name: "",
    icon: "x",
    link: "https://x.com/rodiersangibala?s=21",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
  {
    name: "Download PDF version",
    icon: "document",
    link: "/Rodier_Resume_Final.pdf", // Place resume.pdf inside /public folder
    download: true, // Optional, some components might use this
  },
  
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Hello! Rodier here...</>,
  /*featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Chezyo</strong></>,
    href: "https://chezyo.com", // You can link to a case study or external site
  },*/
  subline: (
    <>
      Founder of <a href="https://chezyo.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">chezyo.com</a>, Integration Analyst at <strong className="text-lg font-bold">Awin</strong>, and strategist helping brands connect data, platforms, and people through scalable systems — with clarity and precision.
    </>
  ),
};


const about = {
  path: "/about",
  label: "About me",
  title: `Explore my full resume`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/rsangibala",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I’m a systems, data, and integration analyst with a passion for making technology work seamlessly. At Awin Global, I specialize in brand integration, personally developing prebuilt tracking codes and plugins for e-commerce platforms and Google Tag Manager (GTM). I work directly with brands to ensure smooth transaction tracking, leveraging SQL to monitor performance and optimize implementations. My time at Awin has deepened my expertise in e-commerce tracking, cloud-server tracking, and API integrations, forming the backbone of my understanding of digital commerce and data-driven optimization.
Beyond corporate experience, I’m also the Founder & CEO of Chezyo.com, an e-commerce platform in DR Congo, where I oversee tech operations, website management, and business strategy. Additionally, as a Co-founder and Board Member of LIFE TIME GROUP ENTERPRISE, I help turn ideas into businesses—either by launching them ourselves or crafting strategies for others to scale.
I thrive at the crossroads of technology, strategy, and problem-solving. Whether it’s optimizing tracking setups, making data-driven decisions, or brainstorming new business models, I bring an analytical mind with a creative edge. Oh, and if there’s ever a tracking puzzle to solve, chances are, I’ve already built the solution.

      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Awin Global",
        timeframe: "August 2022 - Present",
        role: "Global Technical Integrations Analyst",
        achievements: [
          <>
Led technical onboarding for 300+ brands, boosting implementation sign-offs by 537%.
Implemented tracking via GTM, API, and plugins; used SQL for monitoring and reporting.

          </>,
          <>
          Improved team efficiency through training, documentation, and dashboard optimization.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          //{
           // src: "/images/projects/project-01/cover-01.jpg",
            //alt: "Once UI Project",
            //width: 16,
            //height: 9,
         // },-->
        ],
      },
      {
        company: "ChezYo Coo/chezyo.com",
        timeframe: "March 2023 - Present",
        role: "Founder & CEO",
        achievements: [
          <>
Founder & CEO of <a href="https://chezyo.com" target="_blank" rel="noopener noreferrer">chezyo.com</a>, an e-commerce platform in DR Congo. 
I built and financed the business, overseeing website development, tech operations, invoicing, and digital marketing. 

With warehouses in Kinshasa and Lubumbashi, I manage logistics remotely while my team handles fulfillment and customer engagement
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          //{
           // src: "/images/projects/project-01/cover-01.jpg",
            //alt: "Once UI Project",
            //width: 16,
            //height: 9,
         // },-->
        ],
      },
      {
        company: "Diebold Nixdorf",
        timeframe: "February 2022 - July 2022",
        role: "Technical Support Specialist with French",
        achievements: [
          <>
Provided remote support for POS systems, payment terminals, digital safes, and gas pumps across retail environments.         </>,
          <>
Used diagnostic tools to troubleshoot, reboot, and resolve system issues, ensuring minimal downtime and smooth client operations.
          </>,
        ],
        images: [],
      },
      {
        company: "Capgemini",
        timeframe: "September 2020 - January 2022",
        role: "Desktop Analyst with French",
        achievements: [
          <>
Provided remote IT support via calls, chat, and email, resolving 95% of tickets within SLA. 
          </>,
          <>
Managed incidents using ServiceNow, handled troubleshooting across Windows and network tools.
          </>,
           <>
Maintained documentation, mentored new joiners, and improved internal support processes
           </>,
        ],
        images: [],
      },
      {
        company: "JLL",
        timeframe: "2021 - 2021",
        role: "Helpdesk Data Analyst",
        achievements: [
          <>
Worked within a fast-paced corporate IT environment to support data-driven service operations. Collected and cleaned ticketing data from SQL Server, Oracle, and AWS data warehouses to identify inefficiencies across support workflows.
Used Alteryx and Excel for preprocessing and automation, enabling clearer reporting and better decision-making.
Assisted in root cause analysis of recurring issues and collaborated with internal teams to propose actionable solutions.
Delivered insights through data visualization tools like Tableau and Amazon QuickSight to improve quality monitoring, streamline service delivery, and enhance the end-user experience.         </>,
          
          
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Czestochowa University of Technology",
        description: <>Master's degree, Computational Intelligence and Data Mining</>,
      },
      {
        name: "Sharda University",
        description: <>Bachelor’s Degree, Computer Application - Software Engineering</>,
      },
      {
        name: "EDX Online",
        description: <>Projects management</>,
      },
      {
        name: " National Degree",
        description: <>Mathematics & Physics</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Skills",
    skills: [
      {
        title: "Technical & Programming:",
        description: <>Python, SQL, C++, JavaScript, PHP, API Integrations.</>,
        images: [],
        /*// optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],*/
      },
      {
        title: "Data & Analytics:",
        description: <>Google Tag Manager (GTM), GA4, Server-side tracking, Cloud systems</>,
        images: [],
        /*// optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],*/
      },
      {
      title: "Networking & Systems:",
        description: <>DNS, SSL, VPN, POS systems, Citrix</>,
        images: [],
      
      },
      {
        title: "Business & Strategy:",
          description: <>Negotiations, Project management, CRM</>,
          images: [],
        
        },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "The views expressed here are my own and should not be associated with my professional work.",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [/*
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },*/
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
