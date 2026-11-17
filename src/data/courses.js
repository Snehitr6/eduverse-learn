
const courses = [
  {
    id: "1",
    title: "Complete Web Development Bootcamp",
    category: "Development",
    instructor: "Alex Morgan",
    role: "Senior Web Developer",
    price: 2499,
    originalPrice: 4999,
    rating: 4.9,
    students: "12.5k",
    duration: "32 hours",
    lessons: 48,
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900",
    description: "Master HTML, CSS, JavaScript and React by building real-world projects. Learn to create modern responsive websites from scratch.",
    outcomes: [
      "Build responsive websites using HTML and CSS",
      "Master modern JavaScript and React",
      "Create real-world frontend projects",
      "Deploy websites professionally"
    ],
    syllabus: [
      { title: "Introduction to Web Development", lessons: ["How the web works", "Developer tools", "HTML fundamentals"] },
      { title: "CSS & Responsive Design", lessons: ["CSS styling", "Flexbox and Grid", "Responsive layouts"] },
      { title: "JavaScript Mastery", lessons: ["JavaScript basics", "DOM manipulation", "ES6+ concepts"] },
      { title: "React Development", lessons: ["React components", "Hooks and state", "React Router", "Final project"] }
    ]
  },
  {
    id: "2",
    title: "UI/UX Design Masterclass",
    category: "Design",
    instructor: "Sarah Williams",
    role: "Product Designer",
    price: 1999,
    originalPrice: 3999,
    rating: 4.8,
    students: "8.2k",
    duration: "24 hours",
    lessons: 36,
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900",
    description: "Learn professional UI/UX design, wireframing, prototyping and user research to create beautiful digital experiences.",
    outcomes: ["Understand design principles", "Create wireframes and prototypes", "Master Figma", "Build a professional portfolio"],
    syllabus: [
      { title: "Design Fundamentals", lessons: ["Color theory", "Typography", "Visual hierarchy"] },
      { title: "UX Research", lessons: ["User research", "Personas", "User journeys"] },
      { title: "Figma & Prototyping", lessons: ["Figma basics", "Wireframing", "Interactive prototypes"] }
    ]
  },
  {
    id: "3",
    title: "Python Programming from Zero",
    category: "Development",
    instructor: "David Miller",
    role: "Python Engineer",
    price: 1799,
    originalPrice: 3499,
    rating: 4.9,
    students: "15.3k",
    duration: "28 hours",
    lessons: 42,
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=900",
    description: "Start programming with Python and learn practical coding, automation, data handling and application development.",
    outcomes: ["Understand Python fundamentals", "Write reusable programs", "Work with data", "Build Python projects"],
    syllabus: [
      { title: "Python Basics", lessons: ["Variables and data types", "Operators", "Conditional statements"] },
      { title: "Programming Concepts", lessons: ["Loops", "Functions", "Object-oriented programming"] },
      { title: "Practical Projects", lessons: ["File handling", "Automation", "Final project"] }
    ]
  },
  {
    id: "4",
    title: "Digital Marketing & SEO",
    category: "Marketing",
    instructor: "Emma Johnson",
    role: "Digital Marketing Strategist",
    price: 1499,
    originalPrice: 2999,
    rating: 4.7,
    students: "6.4k",
    duration: "18 hours",
    lessons: 30,
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900",
    description: "Learn SEO, social media marketing, content strategy and paid advertising to grow successful digital brands.",
    outcomes: ["Understand SEO", "Build marketing strategies", "Manage social campaigns", "Analyze marketing performance"],
    syllabus: [
      { title: "Marketing Fundamentals", lessons: ["Digital marketing basics", "Marketing funnels"] },
      { title: "SEO & Content", lessons: ["Keyword research", "On-page SEO", "Content strategy"] },
      { title: "Social Media & Analytics", lessons: ["Social campaigns", "Paid ads", "Performance analytics"] }
    ]
  },
  {
    id: "5",
    title: "Data Science & Analytics",
    category: "Data Science",
    instructor: "Michael Brown",
    role: "Data Scientist",
    price: 2799,
    originalPrice: 5499,
    rating: 4.9,
    students: "9.8k",
    duration: "40 hours",
    lessons: 56,
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900",
    description: "Explore data science with Python, data visualization, statistics and practical machine learning concepts.",
    outcomes: ["Analyze datasets", "Use Python for data science", "Visualize data", "Understand machine learning"],
    syllabus: [
      { title: "Data Science Foundations", lessons: ["Statistics", "Data types", "Python libraries"] },
      { title: "Data Analysis", lessons: ["Pandas", "Data cleaning", "Visualization"] },
      { title: "Machine Learning", lessons: ["ML fundamentals", "Model training", "Project"] }
    ]
  },
  {
    id: "6",
    title: "Business & Entrepreneurship",
    category: "Business",
    instructor: "James Wilson",
    role: "Business Consultant",
    price: 1899,
    originalPrice: 3699,
    rating: 4.8,
    students: "5.6k",
    duration: "20 hours",
    lessons: 32,
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900",
    description: "Discover business strategy, entrepreneurship, leadership and the essentials of building a successful business.",
    outcomes: ["Develop business ideas", "Understand business models", "Learn leadership", "Build business plans"],
    syllabus: [
      { title: "Business Fundamentals", lessons: ["Business models", "Market research"] },
      { title: "Entrepreneurship", lessons: ["Startup planning", "Business strategy"] },
      { title: "Leadership", lessons: ["Team building", "Financial basics", "Business plan"] }
    ]
  },
  {
    id: "7",
    title: "Graphic Design Essentials",
    category: "Design",
    instructor: "Olivia Smith",
    role: "Creative Director",
    price: 1599,
    originalPrice: 3199,
    rating: 4.7,
    students: "7.1k",
    duration: "22 hours",
    lessons: 34,
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=900",
    description: "Develop creative skills in branding, layout, typography, color and professional graphic design.",
    outcomes: ["Understand design principles", "Create brand identities", "Design social media graphics", "Build a portfolio"],
    syllabus: [
      { title: "Design Principles", lessons: ["Composition", "Color", "Typography"] },
      { title: "Creative Tools", lessons: ["Design software", "Digital illustration"] },
      { title: "Portfolio Projects", lessons: ["Brand identity", "Poster design", "Portfolio"] }
    ]
  },
  {
    id: "8",
    title: "Financial Literacy & Investing",
    category: "Business",
    instructor: "Robert Taylor",
    role: "Financial Educator",
    price: 1299,
    originalPrice: 2599,
    rating: 4.8,
    students: "4.9k",
    duration: "16 hours",
    lessons: 26,
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900",
    description: "Understand personal finance, budgeting, financial planning and the fundamentals of investing.",
    outcomes: ["Create a budget", "Understand financial planning", "Learn investment fundamentals", "Manage financial goals"],
    syllabus: [
      { title: "Personal Finance", lessons: ["Budgeting", "Saving", "Financial goals"] },
      { title: "Investment Basics", lessons: ["Investment types", "Risk and return"] },
      { title: "Financial Planning", lessons: ["Planning strategies", "Practical exercises"] }
    ]
  }
];

export default courses;
