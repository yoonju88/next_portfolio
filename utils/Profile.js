import SM from '@/public/sm.jpg'
import OC from '@/public/OpenClassrooms.png'
import LF from '@/public/Lignes-formation.png'
import IF from '@/public/ifalpes.png'

export const profileData = [
    {
        type: "experience",
        jobTitle: "title1",
        companyName: "Creation Fusalp",
        address: 'office1',
        description: "des1",
        duration: {
            start: "02-2021",
            end: "06-2023"
        },
    },
    {
        type: "experience",
        jobTitle: "title2",
        companyName: "Creation fusalp",
        address: 'office2',
        description: "des2",
        duration: {
            start: "10-2020",
            end: "02-2021"
        },
    },
    {
        type: "experience",
        jobTitle: "title3",
        companyName: "Planet payment in Bonmarché",
        address: 'office3',
        description: "des3",
        duration: {
            start: "06-2016",
            end: "11-2021"
        },
    },
    {
        type: "experience",
        jobTitle: "title4",
        companyName: "Michael International",
        address: 'office4',
        description: "des4",
        duration: {
            start: "11-2012",
            end: "11-2014"
        },
    },
    {
        type: "education",
        name: "title1",
        schoolName: "name1",
        address: 'location1',
        degree: "degree1",
        duration: {
            start: "12-2023",
            end: "09-2024",
        },
        image: OC,
        link: "https://openclassrooms.com/fr/",

    },
    {
        type: "education",
        name: "title2",
        schoolName: "name2",
        address: 'location2',
        degree: "degree2",
        duration: {
            start: "08-2018",
            end: "07-2020",
        },
        image: LF,
        link: "https://www.lignes-formations.com/"
    },
    {
        type: "education",
        name: "title3",
        schoolName: "name3",
        address: 'location3',
        degree: "degree3",
        duration: {
            start: "12-2024",
            end: "09-2015",
        },
        image: IF,
        link: "https://ifalpes.com/fr/",

    },
    {
        type: "education",
        name: "title4",
        schoolName: "name4",
        address: 'location4',
        degree: "degree4",
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
        name: "all",
        id: 14,
    },
    {
        type: "web",
        name: "webtool",
        id: 15,

    },
    {
        type: "design",
        name: "designtool",
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
import Fb from '@/public/firebase-logo.png'
import St from '@/public/stripe.png'
import Sh from '@/public/shadcn.png'
import Cv from '@/public/canva.png'

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
        type: "web",
        id: 459,
    },
    {
        title: "TailwindCss",
        icon: Tw,
        type: "web",
        id: 460,
    },
    {
        title: "Firebase",
        icon: Fb,
        type: "web",
        id: 455,
    },
    {
        title: "Stripe",
        icon: St,
        type: "web",
        id: 454,
    },
    {
        title: "Shadcn/ui",
        icon: Sh,
        type: "web",
        id: 453,
    },
    {
        title: "Figma",
        icon: Figma,
        type: "design",
        id: 461,
    },
    {
        title: "Canva",
        icon: Cv,
        type: "design",
        id: 465,
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

import {
    VscCode,
    VscEditorLayout,
    VscSmiley,
    VscDebugRestart,
    VscRocket
} from "react-icons/vsc";


export const serviceData = [
    {
        title: "web",
        description: "webdes",
        icon: (<VscCode className="size-6 text-white add-transition" />),
    },
    {
        title: "optimization",
        description: "optdes",
        icon: (<VscSmiley className="size-6 text-white add-transition" />),
    },
    {
        title: "ui",
        description: "uides",
        icon: (<VscEditorLayout className="size-6 text-white  add-transition" />),
    },
    {
        title: "maintenance",
        description: "maindes",
        icon: (<VscDebugRestart className="size-6 text-white add-transition" />),
    },
    {
        title: "deploying",
        description: "deployingdes",
        icon: (<VscRocket className="size-6 text-white  add-transition" />),
    },
]
