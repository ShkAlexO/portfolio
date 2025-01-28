import avatar from '@/assets/images/man.webp'
import {LINKEDIN, GITHUB, FACEBOOK, TELEGRAM, INSTAGRAM, YOUTUBE} from '@/constants/socials'


export type SocialItemPropsType = {
    name: string
    url: string
};

export type SkillLangItemPropsType = {
    name: string
    percentages: number
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
    skills: SkillLangItemPropsType[]
    extraSkills: ExtraSkillItemPropsType[]
    languages: SkillLangItemPropsType[]
};

export const userData: UserPropsType = {
    avatar: avatar,
    name: 'Rayan Adlrdard',
    position: 'Front-end Developer',
    age: 29,
    email: 'rayan.ad@example.com',
    phone: '+1 (555) 123-4567',
    address: 'Toronto, Canada',
    socials: [
        {
            name: GITHUB,
            url: 'https://github.com/',
        },
        {
            name: LINKEDIN,
            url: 'https://linkedin.com/',
        },
        {
            name: FACEBOOK,
            url: 'https://www.facebook.com/',
        },
        {
            name: INSTAGRAM,
            url: 'https://www.instagram.com/',
        },
        {
            name: YOUTUBE,
            url: 'https://www.youtube.com/',
        },
        {
            name: TELEGRAM,
            url: 'https://web.telegram.org/',
        }
    ],
    skills: [
        {
            name: 'Html',
            percentages: 95,
        },
        {
            name: 'CSS',
            percentages: 92,
        },
        {
            name: 'JS',
            percentages: 74,
        },
        {
            name: 'PHP',
            percentages: 68,
        },
        {
            name: 'WordPress',
            percentages: 72,
        }
    ],
    extraSkills: [
        ['Bootstrap', 'Materialize'],
        ['Stylus', 'Sass', 'Less'],
        ['Gulp', 'Webpack', 'Grunt']
    ],
    languages: [
        {
            name: 'Russian',
            percentages: 95,
        },
        {
            name: 'English',
            percentages: 48,
        },
        {
            name: 'German',
            percentages: 45,
        },
        {
            name: 'Spanish',
            percentages: 35,
        }
    ]
}

