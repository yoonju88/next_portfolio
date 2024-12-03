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

export const buttonTypes = [
    {
        type: "all",
        name: "All",
        id: 14,
    },
    {
        type: "web",
        name: "Web development",
        id: 15,

    },
    {
        type: "design",
        name: "Graphic design",
        id: 16,
    },
]

import Js from '@/public/js.png'
import React from '@/public/react.png'
import Next from '@/public/next.png'
import Ts from '@/public/ts.png'
import Tw from '@/public/tw.png'
import Ps from '@/public/ps.png'
import Ai from '@/public/ai.png'
import Ae from '@/public/ae.png'
import Figma from '@/public/figma.png'

export const mySkillsData = [
    {
        title: "JavaScript",
        icon: Js,
        type: "web",
        id: 456,
    },
    {
        title: "React",
        icon: React,
        type: "web",
        id: 457,
    },
    {
        title: "NextJs",
        icon: Next,
        type: "web",
        id: 458,
    },
    {
        title: "TypeScript",
        icon: Ts,
        category: "web",
        id: 459,
    },
    {
        title: "TailwindCss",
        icon: Tw,
        type: "web",
        id: 460,
    },
    {
        title: "Figma",
        icon: Figma,
        type: "design",
        id: 461,
    },
    {
        title: "Photoshop",
        icon: Ps,
        type: "design",
        id: 462,
    },
    {
        title: "Illustrator",
        icon: Ai,
        type: "design",
        id: 463,
    },
    {
        title: "AfterEffect",
        icon: Ae,
        type: "design",
        id: 464,
    },
]