
const courseVideos = [
  {
    keyword: "web",
    videoId: "dX8396ZmSPk",
    source: "freeCodeCamp.org",
    lessons: [
      { title: "Introduction to Web Development", start: 0 },
      { title: "HTML and CSS Basics", start: 34 },
      { title: "Advanced HTML and CSS", start: 8055 },
      { title: "Design Mockup Assignment", start: 16944 },
      { title: "Version Control and Deployment", start: 24479 },
      { title: "Responsive Web Design", start: 32382 },
      { title: "Mobile-First Design", start: 41544 },
      { title: "Bootstrap Framework", start: 45103 },
      { title: "Scientific Calculator Project", start: 53811 },
      { title: "Express Framework", start: 59674 },
      { title: "Portfolio Project", start: 66621 },
    ],
  },
  {
    keyword: "design",
    videoId: "mT_Jjn8RJdo",
    source: "freeCodeCamp.org",
    lessons: [
      { title: "Complete Figma UI/UX Design Course", start: 0 },
    ],
  },
  {
    keyword: "python",
    videoId: "eWRfhZUzrAc",
    source: "freeCodeCamp.org",
    lessons: [
      { title: "Python Programming Full Course", start: 0 },
    ],
  },
  {
    keyword: "data",
    videoId: "ua-CiDNNj30",
    source: "freeCodeCamp.org",
    lessons: [
      { title: "Introduction to Data Science", start: 0 },
      { title: "Data Sourcing", start: 5986 },
      { title: "Coding for Data Science", start: 9162 },
      { title: "Mathematics for Data Science", start: 14469 },
      { title: "Statistics for Data Science", start: 17043 },
    ],
  },
  {
    keyword: "marketing",
    videoId: "01Imoibt4as",
    source: "Marketing Fundas",
    lessons: [
      { title: "Digital Marketing Full Course", start: 0 },
    ],
  },
];

// NAMED EXPORT - required by CourseCard.jsx and CourseDetails.jsx
export function getCourseVideo(course) {
  if (!course) return null;

  const title = (course.title || "").toLowerCase();
  const category = (course.category || "").toLowerCase();
  const searchText = `${title} ${category}`;

  return (
    courseVideos.find((video) =>
      searchText.includes(video.keyword)
    ) || null
  );
}

// DEFAULT EXPORT
export default courseVideos;
