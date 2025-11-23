
/* Banner Data */
// export const wordsData = [
//     {text: 'Ideas', imgPath:'images/ideas.svg' },
//     {text: 'Concepts', imgPath:'images/concepts.svg' },
//     {text: 'Designs', imgPath:'images/designs.svg' },
//     {text: 'Code', imgPath:'images/code.svg' }
// ]

const navLinks = [
    {
      name: "Work",
      link: "#work",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "Testimonials",
      link: "#testimonials",
    },
  ];
  
  const wordsData = [
    { text: "Designs", imgPath: "/images/ideas.svg" },
    { text: "Ideas", imgPath: "/images/concepts.svg" },
    { text: "Code", imgPath: "/images/designs.svg" },
    { text: "Concept", imgPath: "/images/designs.svg" },
  ];
  
  const counterItems = [
    { value: 6, suffix: "+", label: "Years of Experience" },
    { value: 90, suffix: "+", label: "Satisfied Clients" },
    { value: 100, suffix: "+", label: "Completed Projects" },
    { value: 90, suffix: "%", label: "Client Retention Rate" },
  ];
  
  const logoIconsList = [
    {
      imgPath: "/images/logos/client-logo-01.png",
    },
    {
      imgPath: "/images/logos/client-logo-06.png",
    },
    {
      imgPath: "/images/logos/client-logo-07.png",
    },
    {
      imgPath: "/images/logos/client-logo-08.png",
    },
    {
      imgPath: "/images/logos/client-logo-02.png",
    },
    {
      imgPath: "/images/logos/client-logo-05.png",
    },
    {
      imgPath: "/images/logos/client-logo-04.png",
    },
    {
      imgPath: "/images/logos/client-logo-03.png",
    },
    {
      imgPath: "/images/logos/client-logo-09.png",
    },
    {
      imgPath: "/images/logos/client-logo-07.png",
    },
    {
      imgPath: "/images/logos/client-logo-05.png",
    },
  ];
  
  const abilities = [
    {
      imgPath: "/images/seo.png",
      title: "Quality Focus",
      desc: "Delivering pixel-perfect, high-quality results with a strong focus on detail, creativity, and performance ensuring every project exceeds expectations.",
    },
    {
      imgPath: "/images/chat.png",
      title: "Reliable Communication",
      desc: "Building trust through clear, consistent communication keeping you informed at every stage for full transparency and smooth collaboration.",
    },
    {
      imgPath: "/images/time.png",
      title: "On-Time Delivery",
      desc: "Committed to meeting deadlines without compromising quality, ensuring your project is delivered on time, optimized, and ready to impress.",
    },
  ];
  
  const techStackImgs = [
    {
      name: "React Developer",
      imgPath: "/images/logos/react.png",
    },
    {
      name: "Next.Js Developer",
      imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "UI/UX Developer",
      imgPath: "/images/logos/node.png",
    },
    {
      name: "WordPress Developer",
      imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
    },
    {
      name: "Webflow Developer",
      imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webflow/webflow-original.svg~!",
    },
  ];

  const techs = [
    { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "JavaScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "GSAP", url: "/images/gsap.jpg" },
    { name: "Three.js", url: "/images/3d-modeling.png" },
    { name: "WordPress", url: "/images/wordpress.png" },
    { name: "Webflow", url: "/images/webflow.png" },
    { name: "Figma", url: "/images/figma.png" },
    { name: "HTML", url: "/images/html.png" },
    { name: "CSS", url: "/images/css.png" },
    { name: "SASS & LESS", url: "/images/sass.png" },
    { name: "Tailwind", url: "/images/tailwind.png" },
    { name: "Bootstrap", url: "/images/bootstrap.png" },
    { name: "Git", url: "/images/git.png" },
  ];
  
  const techStackIcons = [
    {
      name: "React Developer",
      modelPath: "/models/react_logo-transformed.glb",
      scale: 1,
      rotation: [0, 0, 0],
    },
    {
      name: "Python Developer",
      modelPath: "/models/python-transformed.glb",
      scale: 0.8,
      rotation: [0, 0, 0],
    },
    {
      name: "Backend Developer",
      modelPath: "/models/node-transformed.glb",
      scale: 5,
      rotation: [0, -Math.PI / 2, 0],
    },
    {
      name: "Interactive Developer",
      modelPath: "/models/three.js-transformed.glb",
      scale: 0.05,
      rotation: [0, 0, 0],
    },
    {
      name: "Project Manager",
      modelPath: "/models/git-svg-transformed.glb",
      scale: 0.05,
      rotation: [0, -Math.PI / 4, 0],
    },
  ];
  
  const expCards = [
    {
      review:
        "Naeem brings creativity, discipline, and deep technical understanding to every project. His clean code, animations, and user-centric approach make him one of the most dependable frontend developers I’ve worked with",
      imgPath: "/images/self-emplyoed.png",
      logoPath: "/images/self-emplyoed.png",
      title: "Frontend Developer (Self-Employed)",
      date: "January 2025 - Present",
      responsibilities: [
        "Designed, developed, and deployed responsive websites and web applications using React.js, Next.js, Three.js, WordPress, Shopify, Webflow, GSAP and Laravel UI",
        "Created pixel-perfect UI components ensuring cross-browser compatibility and mobile-first design.",
        "Collaborated with designers and clients to translate UI/UX wireframes into functional, high-performance interfaces",
        "Built and managed eCommerce, educational, and portfolio projects, showcasing real-world use cases.",
        "Continuously learning and improving technical and design skills to stay current with industry trends.",
        "Collaborated closely with clients to refine UI flow, improve UX metrics, and enhance usability.",
      ],
    },
    {
      review:
        "As a UI Lead, Naeem also trained interns and junior developers, sharing his knowledge of design systems, component structures, and performance optimization. He not only delivered a visually stunning and responsive website but also led the UI direction of the project with precision. His expertise in React, Next.js, GSAP, and Three.js brought our vision to life with dynamic animations and smooth interactions.",
      imgPath: "/images/wb-sm.png",
      logoPath: "/images/wb-sm.png",
      title: "Lead UI & Frontend Developer",
      date: "July 2023 - December 2024",
      responsibilities: [
        "Led UI/UX strategy and frontend development for multiple web projects (React, Next.js, Webflow & UI Animated Templates",
        "Integrated animations using GSAP and Three.js to enhance user engagement and interactivity.",
        "Mentored interns and junior developers on frontend best practices, clean architecture, and animation integration",
        "Collaborated with design and backend teams to ensure seamless functionality and performance.",
      ],
    },
    {
      review:
        "As a Lead UI/UX Developer, I specialize in building interactive, responsive, and pixel-perfect websites that blend creativity with performance. I’ve led multiple projects using modern technologies including  Next.js, Shopify UI, WordPress,  and standard HTML templates all developed with clean, W3C-validated, and scalable code.",
      imgPath: "/images/logos/client-logo-04.png",
      logoPath: "/images/logos/sm-mt.png",
      title: "Lead UI/UX Developer | Frontend Specialist",
      date: "Jul 2021 - June 2023",
      responsibilities: [
        "Led end-to-end frontend and UI/UX development for high-traffic websites and eCommerce platforms.",
        "Designed custom Shopify themes and optimized storefront performance with Liquid, HTML, and JavaScript.",
        "Mentored interns and junior developers on clean coding practices, UI patterns, and design frameworks.",
        "Maintained W3C-validated, semantic, and scalable front-end code aligned with accessibility and SEO standards.",
        "Translated Figma and Adobe XD designs into responsive, mobile-first web experiences."
      ],
    },
    {
      review:
        "His expertise in ThemeForest development, responsive layouts, and WordPress customization. Beyond development, Naeem’s team collaboration, mentoring attitude, and problem-solving mindset make him a valuable asset to any organization or freelance team. He approaches each task with professionalism, precision, and a commitment to delivering exceptional results.",
      imgPath: "/images/logos/client-logo-03.png",
      logoPath: "/images/logos/sm-mindblock.png",
      title: "Frontend Developer",
      date: "Jan 2018 - June 2020",
      responsibilities: [
        "Developed and customized Beaver Builder modules to enhance WordPress functionality.",
        "Experienced in ThemeForest design and development, delivering premium-quality templates.",
        "Skilled in creating fully responsive HTML templates and custom WordPress themes.",
        "Expert in converting PSD/Figma designs to clean, semantic HTML/CSS code.",
        "Specialized in website animations, creative transitions, and modern UI effects using GSAP and CSS."
      ],
    },
  ];
  
  const expLogos = [
    {
      name: "logo1",
      imgPath: "/images/logo1.png",
    },
    {
      name: "logo2",
      imgPath: "/images/logo2.png",
    },
    {
      name: "logo3",
      imgPath: "/images/logo3.png",
    },
  ];
  
  const testimonials = [
    {
      name: "Adeel",
      mentions: "@adeell32",
      role: "Webflow Project Client",
      review:
     "Working with Naeem was an excellent experience. I hired him for a Webflow website project, and he delivered beyond expectations. His attention to detail, creative approach to animations, and responsiveness throughout the process made everything smooth. The final result was pixel-perfect, fast, and exactly what I had envisioned.",
      imgPath: "/images/testimonial-client-01.png",
    },
    {
      name: "ItsKing Zii",
      mentions: "@ItsKing",
      role: "UI/UX Designer, Freelance Partner",
      review:
        "Naeem is not just a developer, he’s a design thinker. He perfectly understands user flow and translates designs into seamless interfaces. His collaboration made every project efficient and enjoyable.",
      imgPath: "/images/client-02.jpg",
    },
    {
      name: "Baraa",
      mentions: "@baraa.codes",
      role: "Freelancer",
      review:
        "I was impressed by Naeem’s technical skills in React and GSAP animations. He’s a quick problem solver and very professional in communication exactly the kind of person you want on your dev team.",
      imgPath: "/images/client-03.jpg",
    },
    {
      name: "Azhar",
      mentions: "@azhar",
      role: "Marketing Manager, Edutainment",
      review:
        "Naeem was instrumental in developing our Edutainment WordPress website. His expertise in UI/UX design, responsiveness, and functionality helped us achieve a modern and engaging online presence. He perfectly understood our marketing goals and turned them into a professional website that performs smoothly. I highly appreciate his dedication, communication, and ability to deliver on time.",
      imgPath: "/images/client4.png",
    },
    {
      name: "Williamson",
      mentions: "@cameronwill",
      role: "Team Lead, Creative Minds Agency",
      review:
        "We’ve collaborated on multiple projects. Naeem always brings innovation to the table from smooth animations to responsive layouts. He’s consistent, reliable, and always learning new things.",
      imgPath: "/images/client5.png",
    },
    {
      name: "Dianne",
      mentions: "@dianne82",
      role: "Client from Upwork",
      review:
        "Naeem’s professionalism and communication stood out. He understood my non-technical requirements and built a landing page that not only looked great but also performed beautifully.",
      imgPath: "/images/client6.png",
    },
   
  ];
  
  
  const socialImgs = [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/m-naeemakhtar/",
      imgPath: "/images/linkedin.png",
    },
    {
      name: "github",
      url: "https://github.com/NaeemAkhtarDev",
      imgPath: "/images/github-updated.png",
    },
    {
      name: "email",
      url: "mailto:talkwithnaeem@gmail.com",
      imgPath: "/images/email.png",
    },
    {
      name: "x",
      url: "https://www.x.com/",
      imgPath: "/images/x.png",
    },
    
  ];
  
  export {
    wordsData,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
    techs
  };