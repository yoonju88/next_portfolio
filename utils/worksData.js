import Sophie from '@/public/sophie-v2.png'
import Kasa from '@/public/kasa_v2.png'
import ArgentBank from '@/public/argentbank-v2.png'
import Event from '@/public/724events-v2.png'

export const worksBase = [
    {
        id: "a15",
        type: "web",
        title: "ArgentBank",
        link: "https://github.com/yoonju88/ArgentBank-website",
        duration: {
            startDate: "2024-07-22",
            endDate: "2024-08-20"
        },
        image: ArgentBank
    },
    {
        id: "a14",
        type: "web",
        title: "724 events",
        link: "https://github.com/yoonju88/Projet10-724events",
        duration: {
            startDate: "2024-06-15",
            endDate: "2024-07-20"
        },
        image: Event,
    },
    {
        id: "a13",
        type: "web",
        title: "Kasa",
        link: "https://github.com/yoonju88/projet_8_Kasa",
        duration: {
            startDate: "2024-05-08",
            endDate: "2024-06-01"
        },
        image: Kasa
    },
    {
        id: "a12",
        type: "web",
        title: "Architecture",
        link: "https://github.com/yoonju88/Architecte-sophie-bluel",
        duration: {
            startDate: "2024-04-08",
            endDate: "2024-05-05"
        },
        image: Sophie,
    },
]

export const typeDesigns = [
    {
        id: 29,
        key: "selection.s0",
        value: "all"
    },
    {
        id: 30,
        key: "selection.s1",
        value: "communication"
    },
    {
        id: 31,
        key: "selection.s2",
        value: "production"
    },
    {
        id: 32,
        key: "selection.s3",
        value: "infographic"
    },

    {
        id: 33,
        key: "selection.s4",
        value: "print"
    },
    {
        id: 34,
        key: "selection.s5",
        value: "logo"
    },
    {
        id: 35,
        key: "selection.s6",
        value: "personal project"
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

export const graphicBase = [
    {
        id: "b20",
        type: "communication",
        cover: Invitation,
        images: [Invitation, Invitation2],
        companyName: "Creation Fusalp",
    },
    {
        id: "b21",
        type: "communication",
        cover: Lookbook,
        images: [Lookbook],
        companyName: "Creation Fusalp",
    },
    {
        id: "b19",
        type: "communication",
        cover: Magazine,
        images: [Magazine],
        companyName: "Creation Fusalp",
    },
    {
        id: "b22",
        type: "communication",
        cover: Press,
        images: [Press],
        companyName: "Creation Fusalp",
    },
    {
        id: "b23",
        type: "production",
        cover: Goodie1,
        images: [Goodie1, Goodie2, Goodie3, Goodie4],
        companyName: "Creation Fusalp",
    },
    {
        id: "b24",
        type: "production",
        cover: dessin3,
        images: [dessin3, dessin1, dessin2, dessin4],
        companyName: "Creation Fusalp",
    },
    {
        id: "b25",
        type: "production",
        cover: print,
        images: [print],
        companyName: "Creation Fusalp",
    },
    {
        id: "b26",
        type: "production",
        cover: technic,
        images: [technic],
        companyName: "Creation Fusalp",
    },
    {
        id: "b27",
        type: "infographic",
        cover: dada,
        images: [dada, dadagif],
        companyName: "Dada Sport",
    },
    {
        id: "b28",
        type: "infographic",
        cover: picto,
        images: [picto],
        companyName: "Creation Fusalp",
    },
    {
        id: "b29",
        type: "print",
        cover: mur,
        images: [mur],
        companyName: "Creation Fusalp",
    },
    {
        id: "b30",
        type: "print",
        cover: metro,
        images: [metro],
        companyName: "Creation Fusalp",
    },
    {
        id: "b31",
        type: "print",
        cover: store1,
        images: [store1, store2],
        companyName: "Creation Fusalp",
    },
    {
        id: "b32",
        type: "personal project",
        cover: coverEnfant,
        images: [enfant, see, mushroom, film],
    },
    {
        id: "b33",
        type: "personal project",
        cover: basket,
        images: [basket, seoul, yoonjung, moon, fox],
    },
    {
        id: "b34",
        type: "personal project",
        cover: seoulNight,
        images: [seoulNight],
    },
    {
        id: "b35",
        type: "logo",
        cover: elec,
        images: [elec],
        companyName: "Zucher Electricité",
    },
    {
        id: "b36",
        type: "logo",
        cover: tasty,
        images: [tasty],
        companyName: "Tasty",
    },
];