import Sophie from '@/public/sophie-v2.png'
import Kasa from '@/public/kasa_v2.png'
import ArgentBank from '@/public/argentbank-v2.png'
import Event from '@/public/724events-v2.png'


export const worksData = [
    {
        id: "a15",
        type: "web",
        title: "ArgentBank",
        tags: ["React", "Nodejs", "Redux", "MongoDB", "API", "Swagger"],
        link: "https://github.com/yoonju88/ArgentBank-website",
        duration: {
            startDate: new Date("2024-07-22"),
            endDate: new Date("2024-08-20")
        },
        image: ArgentBank,
        description: "I created a responsive dashboard and managed the application’s global state using React and Redux, integrating the back-end through REST API calls. I defined the API endpoints with Swagger and used Node.js to handle the server."
    },
    {
        id: "a14",
        type: "web",
        title: "724events",
        tags: ["Debug", "React", "Nodejs", "Optimisation", "Test unit"],
        link: "https://github.com/yoonju88/Projet10-724events",
        duration: {
            startDate: new Date("2024-06-15"),
            endDate: new Date("2024-07-20")
        },
        image: Event,
        description: "I reviewed and fixed bugs using Chrome DevTools and React Developer Tools. I resolved issues with JavaScript and React, completed the test plan with unit and functional tests, and used Yarn and Node.js for dependency management and test execution."
    },
    {
        id: "a13",
        type: "web",
        title: "Kasa",
        tags: ["React", "Fimga"],
        link: "https://github.com/yoonju88/projet_8_Kasa",
        duration: {
            startDate: new Date("2024-05-08"),
            endDate: new Date("2024-06-01")
        },
        image: Kasa,
        description: "I developed a responsive web application using React. I set up navigation between different pages of the application with React Router and built the web interface elements using React components."
    },
    {
        id: "a12",
        type: "web",
        title: "Architecture Sophie",
        tags: ["JavaScript", "CSS", "Nodejs", "API", "Fimga"],
        link: "https://github.com/yoonju88/Architecte-sophie-bluel",
        duration: {
            startDate: new Date("2024-04-08"),
            endDate: new Date("2024-05-05")
        },
        image: Sophie,
        description: "I created a dynamic webpage with JavaScript, which includes a login page and a modal for media uploads. I integrated an API for the backend and used Figma to design and implement the layout. Additionally, I utilized Kanban to manage and organize the development process, ensuring efficient task tracking and collaboration."
    },
]