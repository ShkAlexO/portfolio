import {BASE_URL} from "@/constants/config";
import {LINKEDIN, GITHUB, FACEBOOK, TELEGRAM, INSTAGRAM} from '@/constants/socials'

export type SocialItemPropsType = {
    name: string
    url: string
};

export type TechAndLanguagesType = {
    name: string
    percentages: number
    level?: string | undefined
};

export type ExtraSkillItemPropsType = string[]

export  type UserPropsType = {
    avatar: string
    name: string
    position: string
    email: string
    phone: string
    age: number | string
    address: string
    socials: SocialItemPropsType[]
    skills: TechAndLanguagesType[]
    extraSkills: ExtraSkillItemPropsType[]
    languages: TechAndLanguagesType[]
};

export const userData: UserPropsType = {
    avatar: `${BASE_URL}assets/images/avatar.webp`,
    name: 'Alexander',
    position: 'Front-end Developer',
    age: 33,
    email: 'shk.alex.o@gmail.com',
    phone: '+38 (050) 080 49 91',
    address: 'Odessa, Ukraine',
    socials: [
        {
            name: GITHUB,
            url: 'https://github.com/ShkAlexO',
        },
        {
            name: LINKEDIN,
            url: 'https://www.linkedin.com/in/sano-shk',
        },
        {
            name: FACEBOOK,
            url: 'https://www.facebook.com/sanya.s.a.o',
        },
        {
            name: INSTAGRAM,
            url: 'https://www.instagram.com/shk.a.o/',
        },
        {
            name: TELEGRAM,
            url: 'https://t.me/Sano_shk',
        }
    ],
    skills: [
        {
            name: 'Html',
            percentages: 92,
        },
        {
            name: 'CSS',
            percentages: 95,
        },
        {
            name: 'JS',
            percentages: 71,
        },
        {
            name: 'PHP',
            percentages: 68,
        },
        {
            name: 'WordPress',
            percentages: 72,
        },
        {
            name: 'React',
            percentages: 74,
        }
    ],
    extraSkills: [
        ['Redux', 'React Router', 'TypeScript'],
        ['Sass', 'BEM', 'Styled-components'],
        ['Gulp', 'Webpack', 'Vite']
    ],
    languages: [
        {
            name: 'Ukrainian',
            percentages: 100,
            level: 'Native',
        },
        {
            name: 'Russian',
            percentages: 95,
            level: 'C2',
        },
        {
            name: 'English',
            percentages: 40,
            level: 'A2',
        }
    ]
}

