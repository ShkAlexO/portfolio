export  type ProfBgPropsType = {
    id: number
    title: string
    certificate?: string | undefined
    subtitle: string
    mode?: string | undefined
    start: string
    end: string
    headline?: string
    content?: string | undefined
};

export const educationData: ProfBgPropsType[] = [
    {
        id: 1,
        title: 'HTML CSS',
        certificate: '',
        subtitle: 'Udemy',
        start: 'dec. 2020',
        end: 'jan. 2021',
        headline: 'Web Fundamentals with HTML & CSS',
        content: 'In this course, I became familiar with HTML structure, CSS styling, and principles of responsive design. I learned to create websites that adapt to different devices, using Flexbox and Grid. The practical exercises helped me enhance my attention to detail and improved my skills in creating visually engaging websites.',
    },
    {
        id: 2,
        title: 'JavaScript',
        certificate: '',
        subtitle: 'Udemy',
        start: 'jun. 2021',
        end: 'oct. 2021',
        headline: 'Diving into JavaScript: From Basics to Interactivity',
        content: 'In this course, I mastered the basics of JavaScript, including working with variables, functions, loops, and arrays. I learned how to manipulate the DOM to create interactive elements. I also studied asynchronous operations using async/await, which allowed me to work with dynamic data on web pages.',
    },
    {
        id: 3,
        title: 'React',
        certificate: 'https://certificate.ithillel.ua/view/43422150',
        subtitle: 'Hillel School',
        start: 'aug. 2023',
        end: 'oct. 2023',
        headline: 'Development of Dynamic Interfaces with React',
        content: 'In the React course, I learned to develop components, manage state with React hooks, use React Router for navigation, and implement Redux for state management in larger applications.',
    },
    {
        id: 4,
        title: 'React Native',
        certificate: 'https://certificate.ithillel.ua/view/10911403',
        subtitle: 'Hillel School',
        start: 'jan. 2024',
        end: 'mar. 2024',
        headline: 'Developing Cross-Platform Apps with React Native',
        content: 'In the React Native course, I familiarized myself with the basics of mobile app development for iOS and Android. I explored the use of shared components and navigation tools, gaining a foundational understanding of cross-platform mobile development.',
    }
];

export const workData: ProfBgPropsType[] = [
    {
        id: 1,
        title: '<span>Middle</span> Wordpress Developer',
        subtitle: 'White Label Agency',
        mode: 'full-time',
        start: 'feb. 2023',
        end: 'present',
        headline: 'Mastering WordPress Development with Modern Tools and Techniques',
        content: 'As a WordPress Developer at White Label Agency, I have been actively involved in developing WordPress websites. To date, I have successfully delivered approximately 23 websites, utilizing tools such as Flexible Blocks, Gutenberg Blocks, Elementor, PHP, and jQuery. I also integrated custom features with AJAX to enhance functionality. My focus has been on building responsive, user-friendly websites while working from the office in a collaborative environment.'
    },
    {
        id: 2,
        title: '<span>Junior</span> Wordpress Developer',
        subtitle: 'Cyborg Studio',
        mode: 'full-time',
        start: 'dec. 2021',
        end: 'jan. 2023',
        headline: 'Developing WordPress Websites and Landing Pages',
        content: 'At Cyborg Studio, I was responsible for developing websites and landing pages using WordPress and JavaScript. Over the course of my time at the company, I successfully created 8 websites and 4 landing pages, focusing on delivering functional, user-friendly sites with an emphasis on front-end performance and intuitive user experience.'
    }
];
