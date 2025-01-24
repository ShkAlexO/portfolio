import certificate from '@/assets/images/certificate.jpg'

export  type ProfBgPropsType = {
    id: number
    title: string
    subtitle: string
    course?: boolean | undefined
    mode?: string | undefined
    start: string
    end: string
    certificate?: string | undefined
    headline?: string
    content?: string | undefined
};

export const educationData: ProfBgPropsType[] = [
    {
        id: 1,
        title: 'HTML CSS',
        subtitle: 'TechNova Academy',
        course: true,
        start: 'dec. 2020',
        end: 'jan. 2021',
        certificate: certificate,
        headline: 'Mastering Web Fundamentals with HTML & CSS',
        content: 'During this course, I gained a solid understanding of HTML structure, CSS styling, and responsive design principles. I learned to create web pages that adapt to different screen sizes and devices, using Flexbox and Grid layout systems. The hands-on projects helped me develop attention to detail and improved my ability to create visually appealing websites.'
    },
    {
        id: 2,
        title: 'JavaScript',
        subtitle: 'CodeCraft School',
        course: true,
        start: 'jun. 2021',
        end: 'oct. 2021',
        certificate: certificate,
        headline: 'Building Interactive Web Experiences with JavaScript',
        content: 'Through this course, I acquired a strong foundation in JavaScript, including working with variables, functions, loops, and arrays. I learned how to manipulate the DOM and create interactive elements on web pages. Additionally, I delved into asynchronous JavaScript (Promises, async/await) and began working with APIs, enabling me to build dynamic web applications.'
    },
    // {
    //     id: 3,
    //     title: 'React',
    //     subtitle: 'Bootcamp',
    //     course: true,
    //     start: 'aug. 2023',
    //     end: 'oct. 2023',
    //     certificate: certificate,
    //     headline: 'Creating Dynamic Interfaces with React',
    //     content: 'During the React course, I gained hands-on experience with building reusable components, managing state using React hooks (useState, useEffect), and routing with React Router. I also learned how to work with context for state management and understand the principles of component lifecycle. These skills allowed me to efficiently develop complex user interfaces.'
    // },
    // {
    //     id: 4,
    //     title: 'React Native',
    //     subtitle: 'ByteMasters',
    //     course: true,
    //     start: 'jan. 2024',
    //     end: 'mar. 2024',
    //     certificate: certificate,
    //     headline: 'Developing Cross-Platform Apps with React Native',
    //     content: 'In this course, I learned how to build cross-platform mobile applications using React Native. I acquired skills in integrating native device features, working with navigation libraries (React Navigation), and managing state with Redux. I also explored performance optimization techniques and the process of deploying apps to both the iOS and Android app stores.'
    // }
];

export const workData: ProfBgPropsType[] = [
    {
        id: 1,
        title: 'Wordpress Developer',
        subtitle: 'TechNova Solutions',
        mode: 'full-time',
        start: 'feb. 2023',
        end: 'present',
        headline: 'Customizing WordPress for Optimal Performance',
        content: 'As a WordPress Developer, I gained experience in creating custom themes and plugins, as well as integrating third-party APIs. I developed strong skills in optimizing website performance, enhancing user experience, and ensuring the security of WordPress sites. I also became proficient in troubleshooting and resolving common issues related to site functionality and design.'
    },
    {
        id: 2,
        title: 'Wordpress Developer',
        subtitle: 'InnoByte Technologies',
        mode: 'full-time',
        start: 'dec. 2021',
        end: 'jan. 2023',
        headline: 'Enhancing Website Functionality and SEO with WordPress',
        content: 'During my time at InnoByte Technologies, I worked extensively with custom theme development, plugin customization, and content management on WordPress. I became adept at handling complex backend configurations and ensuring smooth front-end functionality. Additionally, I gained a deeper understanding of SEO practices, helping to improve the visibility and performance of websites.'
    }
];
