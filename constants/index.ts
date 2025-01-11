
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  herobg,
  

} from "@/assets";
import hasob from "../assets/hasob.png";
import   taisolarin from "../assets/taisolarin.png";
import   corenotes from "../assets/corenotes.png";
import   iterum from "../assets/iterum.png";
import   myeverydeal from "../assets/my-everydeal.png";
import   zelfarms from "../assets/zelfarms-img.png";
import   DNest from "../assets/DNest-img.png";
import   dlplus from "../assets/dlplus.png";
import   Zeltech from "../assets/Zeltech.jpg"
import   MyeverydealLogo from "../assets/myeverydeal-website-logo.webp"
import shops from "../assets/shops.jpg"
import tetfund from "../assets/tetfund.png"
import sanmtos from "../assets/sanmtos.png"
import itranxit from "../assets/iTranxit.png"
import itranxit2 from "../assets/iTransxit2.png"

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Node js Developer",
    icon: backend,
  },
  {
    title: "Laravel Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "hero",
    icon: herobg,
  },
];

const experiences = [
  {
    title: "Frontend Engineer",
    company_name: "Zeltech",
    icon: Zeltech,
    iconBg: "#E6DEDD",
    date: "Oct 2024 - Jan 2024",
    points: [
      "Built Zelfarms and DNest web application using React, Zustand and Tanstack query, reducing page load time by 30% and enhancing user retention.",
      "Developed and maintained 2+ client-facing web applications, enhancing user engagement and satisfaction by 20%.",
      "Enhanced cross-browser compatibility and SEO, leading to a 15% boost in organic search traffic.",
      "Implemented responsive designs for multiple platforms, resulting in a 40% increase in mobile traffic.",
      "Conducted code reviews and mentoring, improving code quality and reducing production bugs by 15%.",
    ],
  },
  {
    title: "Frontend Engineer",
    company_name: "Hasob Integrated Service",
    icon: hasob,
    iconBg: "#383E56",
    date: "Dec 2021 - Dec 2024",
    points: [
      "Developed and maintained 3+ client-facing web applications, enhancing user engagement and satisfaction by 25%.",
      "Collaborated with designers and product managers to deliver intuitive and visually appealing interfaces.",
      "Optimized web performance and ensured accessibility compliance, leading to a 20% improvement in user experience metrics.",
      "Developed and maintained 2 websites templates so that customers and select the one that meets their requirements thereby increasing clients satisfactions",
      "Led a team of 3 developers to integrate complex UI components, increasing project delivery speed by 20%",
    ],
  },
  {
    title: "Frontend Engineer",
    company_name: "Myeverydeal",
    icon: MyeverydealLogo,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Built a dynamic e-commerce platform using React and Rtk query, resulting in a 35% increase in user transactions.",
      "Integrated third-party APIs for real-time product updates and payments (Paystack), improving operational efficiency.",
      "Enhanced cross-browser compatibility and SEO, leading to a 15% boost in organic search traffic.",
      "Collaborated with stakeholders to gather requirements and deliver tailored solutions, achieving a 95% client satisfaction rate.",
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Scola LMS Portal",
    description:
      "Scola is an innovative, multi-tenant and comprehensive Learning Management System (LMS) designed to streamline administrative and operational tasks within a school environment.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap5",
        color: "pink-text-gradient",
      },
      {
        name: "jquery",
        color: "orange-text-gradient",
      },
    ],
    image: iterum,
    source_code_link: "https://platform.scola.ng/",
  },
  {
    name: "Zelfarms",
    description:
      "Zelfarms is an ecommerce platform that focus on delivering products that meet the highest standards of quality and taste.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Tanstack query",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
        {
          name: "zustand",
          color: "orange-text-gradient",
        },
      ],
    image: zelfarms,
    source_code_link: "https://zelfarms.com",
  },
  {
    name: "DNest Rentals",
    description:
      "DNest helps Facilitate property rentals, bookings, and hospitality management.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tanstack query",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "zustand",
        color: "orange-text-gradient",
      },
    ],
    image: DNest,
    source_code_link: "https://dnest.ng",
  },
  {
    name: "MyEverydeal",
    description:
      "A multi vendor ecommerce marketplace that helps small and large businesses grow and reach new consumers. It offers a platform where customers in any part of the world can find and shop for all they need.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "redux/rtkquery",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap5",
        color: "orange-text-gradient",
      },
    ],
    image: myeverydeal,
    source_code_link: "https://marketplace.myeverydeal.com",
  },
  {
    name: "iTranxit Logistics",
    description:
      "iTranxit enables individuals and businesses to order or schedule a pickup and track frieght deliveries seamlessly.",
    tags: [
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap5",
        color: "orange-text-gradient",
      },
    ],
    image: itranxit,
    source_code_link: "https://itranxit.com/",
  },
  {
    name: "iTranxit Mobile",
    description:
      "iTranxit enables individuals and businesses to order or schedule a pickup and track frieght deliveries seamlessly.",
    tags: [
      {
        name: "Flutter",
        color: "pink-text-gradient",
      },
      {
        name: "google-map",
        color: "orange-text-gradient",
      },
    ],
    image: itranxit2,
    source_code_link: "https://itranxit.com/",
  },

  {
    name: "Core Notes",
    description:
      "An Hospital Management platform that manages the daily activities of staff and track their progress on task accomplished.",
    tags: [
      {
        name: "Express",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "orange-text-gradient",
      },
    ],
    image: corenotes,
    source_code_link: "https://corenotes.net",
  },
  {
    name: "Dlplus",
    description:
      " is a prominent trading and B2B IT service provider, which provides custom IT services and solutions for businesses of various needs.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "Elementor",
        color: "green-text-gradient",
      },
    ],
    image: dlplus,
    source_code_link: "https://www.dlplus.com.ng/",
  },
  {
    name: "Shops",
    description:
      "Shops is THE professional, full-featured and high performance e-commerce mobile application!.It connects buyer to shop for their favorite product",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "blue-text-gradient",
      },
      {
        name: "laravel",
        color: "green-text-gradient",
      },
    ],
    image: shops,
    source_code_link: "https://github.com/samcesa45/shops/",
  },
  {
    name: "Tetfund Website",
    description:
      "Tetfund landing Page for enhanced user experience and enables users to learn about recent developments ongoing in governments institutions",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "Elementor",
        color: "green-text-gradient",
      },
    ],
    image: tetfund,
    source_code_link: "https://tetfund.gov.ng/",
  },
  {
    name: "Sanmtos Farm",
    description:
      "A multi vendor ecommerce marketplace that helps small and large businesses grow and reach new consumers. It offers a platform where customers in any part of the world can find and shop for all they need.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rtk query",
        color: "pink-text-gradient",
      },
      {
        name: "laravel",
        color: "green-text-gradient",
      },
    ],
    image: sanmtos,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
