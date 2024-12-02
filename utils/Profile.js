import SM from '@/public/sm.jpg'
import OC from '@/public/OpenClassrooms.png'
import LF from '@/public/Lignes-formation.png'
import IF from '@/public/ifalpes.png'

export const profileData = [
    {
        type: "experience",
        jobTitle: "Freelance graphic designer",
        companyName: "Creation Fusalp",
        address: 'Annecy le vieux, 74',
        description: "Création de contenus variés pour le marketing suivi des produits graphiques.",
        duration: {
            start: "02-2021",
            end: "06-2023"
        },
    },
    {
        type: "experience",
        jobTitle: "Graphic designer intern",
        companyName: "Creation fusalp",
        address: 'Annecy le vieux, 74',
        description: "Création de contenus variés pour le marketing suivi des produits graphiques.",
        duration: {
            start: "10-2020",
            end: "02-2021"
        },
    },
    {
        type: "experience",
        jobTitle: "Trilingual Customer Service",
        companyName: "Planet payment in Bonmarché",
        address: 'Paris 7E',
        description: "Customer reception, creation and management of customer files, daily summary.",
        duration: {
            start: "06-2016",
            end: "11-2021"
        },
    },
    {
        type: "experience",
        jobTitle: "Clothing Vendor",
        companyName: "Michael International",
        address: 'Seoul, Republic of Korea',
        description: "Ordering of raw materials, quality control of products, monitoring and verification of manufacturing processes.",
        duration: {
            start: "11-2012",
            end: "11-2014"
        },
    },
    {
        type: "education",
        name: "Intergration web",
        schoolName: "OpenClassRooms",
        address: 'Paris, 75',
        degree: "RNCP, Niveau 5",
        duration: {
            start: "12-2023",
            end: "09-2024",
        },
        image: OC,
        link: "https://openclassrooms.com/fr/",

    },
    {
        type: "education",
        name: "Graphist",
        schoolName: "Lignes et formation",
        address: 'Montrouge, 92',
        degree: "bac+2",
        duration: {
            start: "08-2018",
            end: "07-2020",
        },
        image: LF,
        link: "https://www.lignes-formations.com/"
    },
    {
        type: "education",
        name: "Learning of the French language",
        schoolName: "Ifalpes",
        address: 'Annecy, 74',
        degree: "Niveau B+2",
        duration: {
            start: "12-2024",
            end: "09-2015",
        },
        image: IF,
        link: "https://ifalpes.com/fr/",

    },
    {
        type: "education",
        name: "Fashion & Textiles",
        schoolName: "Sangmyoung University",
        address: 'Seoul, Republic of Korea',
        degree: "Bachelor of Science, Licence",
        duration: {
            start: "03-2008",
            end: "08-2012",
        },
        image: SM,
        link: "https://www.smu.ac.kr/",
    },
]

import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobeaftereffects } from "react-icons/si";

export const mySkillsData = [
    {
        title: "JavaScript",
        percentage: "70%",
        icon: (<SiJavascript className="size-10 rounded-sm " />),
        color: "hover:text-yellow-400",
        category: "web",
    },
    {
        title: "React",
        percentage: "75%",
        icon: (<SiReact className="size-10 " />),
        color: "hover:text-cyan-500",
        category: "web",
    },
    {
        title: "NextJs",
        percentage: "60%",
        icon: (<SiNextdotjs className="size-10" />),
        color: "hover:text-foreground",
        category: "web",
    },
    {
        title: "TypeScript",
        percentage: "60%",
        icon: (<SiTypescript className="size-10 rounded-sm" />),
        color: "hover:text-blue-600",
        category: "web",
    },
    {
        title: "TailwindCss",
        percentage: "75%",
        icon: (<SiTailwindcss className="size-10" />),
        color: "hover:text-cyan-500",
        category: "web",
    },
    {
        title: "Figma",
        percentage: "70%",
        icon: (<SiFigma className="size-10" />),
        color: "hover:text-fuchsia-500",
        category: "design",
    },
    {
        title: "Photoshop",
        percentage: "80%",
        icon: (<SiAdobephotoshop className="size-10" />),
        color: "hover:text-blue-900",
        category: "design",
    },
    {
        title: "Illustrator",
        percentage: "85%",
        icon: (<SiAdobeillustrator className="size-10" />),
        color: "hover:text-orange-300",
        category: "design",
    },
    {
        title: "AfterEffect",
        percentage: "60%",
        icon: (<SiAdobeaftereffects className="size-10" />),
        color: "hover:text-purple-600",
        category: "design",
    },
]