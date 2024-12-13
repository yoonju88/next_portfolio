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
            startDate: "2024-07-22",
            endDate: "2024-08-20"
        },
        image: ArgentBank,
        description: "I created a responsive dashboard and managed the application’s global state using React and Redux, integrating the back-end through REST API calls. I defined the API endpoints with Swagger and used Node.js to handle the server."
    },
    {
        id: "a14",
        type: "web",
        title: "724 events",
        tags: ["React", "Nodejs", "SEO", "Test unit", "Debug",],
        link: "https://github.com/yoonju88/Projet10-724events",
        duration: {
            startDate: "2024-06-15",
            endDate: "2024-07-20"
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
            startDate: "2024-05-08",
            endDate: "2024-06-01"
        },
        image: Kasa,
        description: "I developed a responsive web application using React. I set up navigation between different pages of the application with React Router and built the web interface elements using React components."
    },
    {
        id: "a12",
        type: "web",
        title: "Architecture",
        tags: ["JavaScript", "CSS", "Nodejs", "API", "Fimga"],
        link: "https://github.com/yoonju88/Architecte-sophie-bluel",
        duration: {
            startDate: "2024-04-08",
            endDate: "2024-05-05"
        },
        image: Sophie,
        description: "I created a dynamic webpage with JavaScript, which includes a login page and a modal for media uploads. I integrated an API for the backend and used Figma to design and implement the layout. Additionally, I utilized Kanban to manage and organize the development process, ensuring efficient task tracking and collaboration."
    },
]

export const typeDesigns = [
    {
        id: 30,
        type: "communication",
    },
    {
        id: 31,
        type: "production",
    },
    {
        id: 32,
        type: "infographic",
    },

    {
        id: 33,
        type: "print",
    },
    {
        id: 34,
        type: "logo",
    },
    {
        id: 35,
        type: "personal project",
    },
]

import Invitation from '@/public/design/invitation.png'
import Invitation2 from '@/public/design/invitation-2.png'
import Lookbook from '@/public/design/lookbook.png'
import Magazine from '@/public/design/magazine.png'
import Press from '@/public/design/press.png'
import Goodie1 from '@/public/design/card.png'
import Goodie2 from '@/public/design/bt.png'
import Goodie3 from '@/public/design/choco.png'
import Goodie4 from '@/public/design/gb.png'
import dessin1 from '@/public/design/pd.png'
import dessin2 from '@/public/design/gant.gif'
import dessin3 from '@/public/design/hat.gif'
import dessin4 from '@/public/design/sac.png'
import print from '@/public/design/print.png'
import technic from '@/public/design/technic.png'
import dada from '@/public/design/picto.png'
import dadagif from '@/public/design/picto-gif.gif'
import picto from '@/public/design/picto-2.png'
import mur from '@/public/design/mur.png'
import metro from '@/public/design/metro.png'
import store1 from '@/public/design/vitro-1.png'
import store2 from '@/public/design/vitro-2.png'
import coverEnfant from '@/public/design/cover-enfant.png'
import enfant from '@/public/design/efant.png'
import mushroom from '@/public/design/mushroom.png'
import film from '@/public/design/film.png'
import see from '@/public/design/see.png'
import iu from '@/public/design/iu.png'
import yoonjung from '@/public/design/goyoon.png'
import moon from '@/public/design/moon.png'
import fox from '@/public/design/fox.png'
import seoul from '@/public/design/soul.png'
import basket from '@/public/design/basket.png'
import seoulNight from '@/public/design/seoulnight.gif'
import elec from '@/public/design/elec.png'
import tasty from '@/public/design/tasty.png'
import resto from '@/public/design/isomnia.png'

export const graphicData = [
    {
        id: 20,
        type: "communication",
        title: "Invitation",
        cover: Invitation,
        images: [Invitation, Invitation2,],
        tags: ["Indesign"],
        creationYear: "I worked on the same type of tasks from 2021 to 2023.",
        companyName: "Creation Fusalp",
        description: "Creation of web and paper invitations for various events at Fusalp, utilizing images from each season to design the invitations."
    },
    {
        id: 21,
        type: "communication",
        title: "Lookbook",
        cover: Lookbook,
        images: [Lookbook,],
        tags: ["Indesign"],
        creationYear: "I worked on the same type of tasks from 2021 to 2023.",
        companyName: "Creation Fusalp",
        description: "Creation of lookbooks, contributing to the visual representation of the brand’s seasonal collections and helping to promote its launch."
    },
    {
        id: 19,
        type: "communication",
        title: "Magazine",
        cover: Magazine,
        images: [Magazine,],
        tags: ["Indesign"],
        creationYear: "I worked on the same type of tasks from 2021 to 2023.",
        companyName: "Creation Fusalp",
        description: "Creation of various fashion magazine pages that reflected the brand’s identity, designing visually appealing layouts to capture the readers’ attention."
    },
    {
        id: 22,
        type: "communication",
        title: "Communication",
        cover: Press,
        images: [Press],
        tags: ["Indesign"],
        creationYear: "I worked on the same type of tasks from 2021 to 2023.",
        companyName: "Creation Fusalp",
        description: "creation of visuals for communication press, designing compelling graphics and images to effectively convey the brand’s message to the media and enhance its public presence."
    },
    {
        id: 23,
        type: "production",
        title: "Goodies",
        cover: Goodie1,
        images: [Goodie1, Goodie2, Goodie3, Goodie4,],
        tags: ["Illustrator", "Photoshop"],
        creationYear: "I worked on the same type of tasks from 2021 to 2023.",
        companyName: "Creation Fusalp",
        description: "Design of various promotional and gift products, including a card game design utilizing seasonal images and lookbooks, sticker designs for collaboration with the British ski team, chocolate box designs, water bottle designs, and more. All designs were crafted to align with the brand’s identity while maintaining a sophisticated and stylish aesthetic."
    },
    {
        id: 24,
        type: "production",
        title: "Product",
        cover: dessin3,
        images: [dessin3, dessin1, dessin2, dessin4,],
        tags: ["Illustrator",],
        creationYear: "I worked on the same type of tasks from 2021 to 2023.",
        companyName: "Creation Fusalp",
        description: "vectorizing products for the new season using Illustrator and continuously updating design modifications throughout the product development process. Additionally, I contributed to the creation of a catalog that lists all the products once the product lineup was finalized."
    },
    {
        id: 25,
        type: "production",
        title: "Pattern",
        cover: print,
        images: [print],
        tags: ["Illustrator",],
        creationYear: "I worked on the same type of tasks from 2021 to 2023.",
        companyName: "Creation Fusalp",
        description: "Create pattern designs for fabrics that reflect the identity of each season."
    },
    {
        id: 26,
        type: "production",
        title: "Technical file",
        cover: technic,
        images: [technic],
        tags: ["Illustrator",],
        creationYear: "I worked on the same type of tasks from 2021 to 2023.",
        companyName: "Creation Fusalp",
        description: "Create technical files for the trims used in the products, providing accurate information necessary for the product development and production processes."
    },
    {
        id: 27,
        type: "infographic",
        title: "Pictogram",
        cover: dada,
        images: [dada, dadagif,],
        tags: ["Illustrator",],
        creationYear: "This project was created in 2022",
        companyName: "Dada Sport",
        description: "Create pictograms for clothing labels, designing icons that clearly communicate washing and care instructions."
    },
    {
        id: 28,
        type: "infographic",
        title: "Pictogram",
        cover: picto,
        images: [picto,],
        tags: ["Illustrator",],
        creationYear: "This project was created in 2021",
        companyName: "Creation Fusalp",
        description: "Create pictograms for Workbook, designing icons that clearly communicate washing and care instructions."
    },
    {
        id: 29,
        type: "print",
        title: "Portrait Frame",
        cover: mur,
        images: [mur],
        tags: ["Photoshop", "Indesign"],
        creationYear: "This project was created in 2023",
        companyName: "Creation Fusalp",
        description: "Carefully selected vintage images that aligned with the brand’s identity and carried out the design work of arranging photo frames on the wall."
    },
    {
        id: 30,
        type: "print",
        title: "Advertising",
        cover: metro,
        images: [metro,],
        tags: ["Indesign"],
        creationYear: "I worked on the same type of tasks from 2021 to 2023.",
        companyName: "Creation Fusalp",
        description: "Creation of advertising visuals for the Paris metro, designing striking graphics to effectively promote the brand and capture the attention of commuters."
    },
    {
        id: 31,
        type: "print",
        title: "Storefront",
        cover: store1,
        images: [store1, store2],
        tags: ["Indesign"],
        creationYear: "I worked on the same type of tasks from 2021 to 2023.",
        companyName: "Creation Fusalp",
        description: "Development of window graphics for boutiques, incorporating design elements that align with the brand’s seasonal identity and visual language."
    },
    {
        id: 32,
        type: "personal project",
        title: "Montage",
        cover: coverEnfant,
        images: [enfant, see, mushroom, film,],
        tags: ["Photoshop"],
        creationYear: "I worked on the same type of tasks from 2020 to 2023.",
        description: "I created my own unique visual montage by combining various images."
    },
    {
        id: 33,
        type: "personal project",
        title: "Illustration",
        cover: basket,
        images: [basket, seoul, yoonjung, moon, fox],
        tags: ["Illustrator"],
        creationYear: "I worked on the same type of tasks from 2020 to 2023.",
        description: "I enjoy drawing illustrations, so I created works based on images that inspired me using Illustrator."
    },
    {
        id: 34,
        type: "personal project",
        title: "Séoul",
        cover: seoulNight,
        images: [seoulNight],
        tags: ["After Effect"],
        creationYear: "This project was created in 2022",
        description: "I created an animation of the night view of Seoul."
    },
    {
        id: 35,
        type: "logo",
        title: "Electricité",
        cover: elec,
        images: [elec,],
        tags: ["Illustrator"],
        creationYear: "This project was created in 2023",
        companyName: "Zucher Electricité",
        description: "I created a logo for the establishment of an electrical company and also worked on vehicle sticker designs."
    },
    {
        id: 36,
        type: "logo",
        title: "Fruit",
        cover: tasty,
        images: [tasty],
        tags: ["Illustrator"],
        creationYear: "This project was created in 2022",
        companyName: "Tasty",
        description: "Creation of a logo and business card for a food trading company."
    },
    {
        id: 37,
        type: "logo",
        title: "Restaurant",
        cover: resto,
        images: [resto],
        tags: ["Illustrator"],
        creationYear: "This project was created in 2021",
        companyName: "Insomniac",
        description: "I re-styled the logo image of the restaurant"
    },
]
