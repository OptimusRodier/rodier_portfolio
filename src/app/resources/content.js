import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Rodier Eyas",
  lastName: "Sangibala",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "System, Data and Integration Analyst",
  avatar: "/images/ro-square.jpg",
  email: "rodier.sangibala@chezyo.com",
  location: "Paris", // City shown in the header (top left)
  timeZone: "Europe/Paris", // IANA time zone used for the clock in the header
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
];

// Resume downloads: place both PDFs inside /public
const resumes = [
  { label: "ENG CV", link: "/New_Rodier_Resume_EN.pdf", fileName: "New_Rodier_Resume_EN.pdf" },
  { label: "FR CV", link: "/New_Rodier_Resume_FR.pdf", fileName: "New_Rodier_Resume_FR.pdf" },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Hello! Rodier here...</>,
  featured: {
    display: false,
    title: <>Projects: <strong className="ml-4">Academic Papers and reseach</strong></>,
    href: "/work", // You can link to a case study or external site*/
  },
  subline: (
    <>
      Global Integrations Analyst at <strong className="text-lg font-bold">Awin</strong>, based in Paris, and strategist helping brands connect data, platforms, and people through scalable systems — with clarity and precision. Former founder of chezyo.com (2023–2025), now exploring new ideas at a local level.
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
        <p>
          I’m a systems, data, and integration analyst with a passion for making technology work seamlessly. At Awin Global, I specialize in brand integration, personally developing prebuilt tracking codes and plugins for e-commerce platforms and Google Tag Manager (GTM). I work directly with brands to ensure smooth transaction tracking, leveraging SQL to monitor performance and optimize implementations. My time at Awin has deepened my expertise in e-commerce tracking, cloud-server tracking, and API integrations, forming the backbone of my understanding of digital commerce and data-driven optimization.
        </p>
        <p>
          Since September 2026 I’m based in Paris, France, continuing in the same team after an internal move. Beyond corporate experience, I founded and ran Chezyo.com, an e-commerce platform in DR Congo, from 2023 to 2025. I decommissioned it in 2025 to explore the ideas I had gathered and work on something new that fits the local level. I’m also a Co-founder and Board Member of LIFETIME GROUP ENTERPRISE, where I help turn ideas into businesses—either by launching them ourselves or crafting strategies for others to scale.
        </p>
        <p>
          I thrive at the crossroads of technology, strategy, and problem-solving. Whether it’s optimizing tracking setups, making data-driven decisions, or brainstorming new business models, I bring an analytical mind with a creative edge. Oh, and if there’s ever a tracking puzzle to solve, chances are, I’ve already built the solution.
        </p>
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
        role: "Global Integrations Analyst (formerly Global Technical Integrations Analyst)",
        achievements: [
          <>
            Led technical onboarding for 300+ brands, boosting implementation sign-offs by 537%.
            Implemented tracking via GTM, API, and plugins; used SQL for monitoring and reporting.
          </>,
          <>
            Improved team efficiency through training, documentation, and dashboard optimization.
          </>,
          <>
            Relocated to Paris, France in September 2026 through an internal move, with my tenure carried over and the same scope of work.
          </>,
        ],
        images: [],
      },
      {
        company: "ChezYo Coo/chezyo.com",
        timeframe: "March 2023 - 2025",
        role: "Founder & CEO",
        achievements: [
          <>
            Founded and ran chezyo.com, an e-commerce platform in DR Congo.
            I built and financed the business, overseeing website development, tech operations, invoicing, and digital marketing.
            With warehouses in Kinshasa and Lubumbashi, I managed logistics remotely while my team handled fulfillment and customer engagement.
          </>,
          <>
            Decommissioned the platform in 2025 to explore the ideas gathered along the way and work on something new that matches the local level.
          </>,
        ],
        images: [],
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
      {
        company: "LIFETIME GROUP ENTREPRISE",
        timeframe: "June 2018 - Present",
        role: "Co-Founder, Chairman & Former Project Manager",
        achievements: [
          <>
Co-founded and led strategic growth while also managing projects during the startup phase. Since 2021, I have focused solely on governance and board leadership.         </>,
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
  label: "Projects",
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

export { person, social, resumes, newsletter, home, about, blog, work, gallery };
