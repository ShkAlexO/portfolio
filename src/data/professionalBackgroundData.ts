import certificate from '../assets/images/certificate.jpg'

export  type ProfessionalBackgroundPropsType = {
    id: number
    title: string
    subtitle: string
    course?: boolean
    mode?: string
    start: string
    end: string
    certificate?: string;
};

export const educationData: ProfessionalBackgroundPropsType[] = [
    {
        id: 1,
        title: 'TechNova Academy',
        subtitle: 'HTML CSS',
        course: true,
        start: 'dec. 2020',
        end: 'jan. 2021',
        certificate: certificate
    },
    {
        id: 2,
        title: 'CodeCraft School',
        subtitle: 'JavaScript',
        course: true,
        start: 'jun. 2021',
        end: 'oct. 2021',
        certificate: certificate
    },
    {
        id: 3,
        title: 'Bootcamp',
        subtitle: 'React',
        course: true,
        start: 'aug. 2023',
        end: 'oct. 2023',
        certificate: certificate
    },
    {
        id: 4,
        title: 'ByteMasters',
        course: true,
        subtitle: 'React Native',
        start: 'jan. 2024',
        end: 'mar. 2024',
        certificate: certificate
    }
];

export const workData: ProfessionalBackgroundPropsType[] = [
    {
        id: 1,
        title: 'Wordpress Developer',
        subtitle: 'TechNova Solutions',
        mode: 'full-time',
        start: 'feb. 2023',
        end: 'present',
    },
    {
        id: 2,
        title: 'Wordpress Developer',
        subtitle: 'InnoByte Technologies',
        mode: 'full-time',
        start: 'dec. 2021',
        end: 'jan. 2023',
    }
];
