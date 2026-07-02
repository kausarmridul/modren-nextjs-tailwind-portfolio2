import {
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const b1 = "/b1.jpg";
const b2 = "/b2.jpg";
const b3 = "/b3.jpg";
const c1 = "/c1.png";
const c2 = "/c2.png";
const c3 = "/c3.png";
const c4 = "/c4.png";
const c5 = "/c5.png";
const c6 = "/c6.jpg";
const p1 = "/p1.jpg";
const p2 = "/p2.jpg";
const p3 = "/p3.jpg";
const p4 = "/p4.jpg";
const s1 = "/s1.png";
const s2 = "/s2.png";
const s3 = "/s3.png";
const s4 = "/s4.png";

export const assets = {
  b1,
  b2,
  b3,
  c1,
  c2,
  c3,
  c4,
  c5,
  c6,
  p1,
  p2,
  p3,
  p4,
  s1,
  s2,
  s3,
  s4,
};

export const Navlinks = [
  {
    id: 1,
    url: "#home",
    label: "Home",
  },
  {
    id: 2,
    url: "#services",
    label: "Services",
  },
  {
    id: 3,
    url: "#resume",
    label: "Resume",
  },
  {
    id: 4,
    url: "#works",
    label: "Works",
  },
  {
    id: 5,
    url: "#skills",
    label: "Skills",
  },
  {
    id: 6,
    url: "#testimonials",
    label: "Testimonials",
  },
  {
    id: 7,
    url: "#contact",
    label: "Contact",
  },
];

export const serviceCard = [
  {
    id: 1,
    icon: assets.s1,
    title: "UI and UX",
    description:
      "Designing interfaces that are intuitive, efficient, and enjoyable to use.",
  },
  {
    id: 2,
    icon: assets.s2,
    title: "Web and Mobile App",
    description:
      "Designing interfaces that are intuitive, efficient, and enjoyable to use.",
  },
  {
    id: 3,
    icon: assets.s3,
    title: "Design & Creative",
    description:
      "Designing interfaces that are intuitive, efficient, and enjoyable to use.",
  },
  {
    id: 4,
    icon: assets.s4,
    title: "Development",
    description:
      "Designing interfaces that are intuitive, efficient, and enjoyable to use.",
  },
];

export const projectCard = [
  {
    id: 1,
    image: assets.p1,
    title: "Modern Finance Dashboard UI",
    description: "Apps , UI/UX",
  },
  {
    id: 2,
    image: assets.p2,
    title: "Portfolio Website for Creatives",
    description: "Bradning , Motion",
  },
  {
    id: 3,
    image: assets.p3,
    title: "Brand Identity for Startups",
    description: "Branding , UI/UX",
  },
  {
    id: 4,
    image: assets.p4,
    title: "SaaS Dashboard Development",
    description: "Apps , UI/UX",
  },
];

export const skills = [
  {
    id: 1,
    name: "JavaScript",
    icon: <SiJavascript />,
    percentage: "89%",
  },
  {
    id: 2,
    name: "React.js",
    icon: <SiReact />,
    percentage: "92%",
  },
  {
    id: 3,
    name: "Next.js",
    icon: <SiNextdotjs />,
    percentage: "90%",
  },
  {
    id: 4,
    name: "Node.js",
    icon: <SiNodedotjs />,
    percentage: "88%",
  },
  {
    id: 5,
    name: "Tailwind",
    icon: <SiTailwindcss />,
    percentage: "94%",
  },
  {
    id: 6,
    name: "Typescript",
    icon: <SiTypescript />,
    percentage: "86%",
  },
];

export const reviewCard = [
  {
    id: 1,
    image: assets.c1,
    name: "Janny Doe",
    role: "CEO , Landscape",
  },
  {
    id: 2,
    image: assets.c2,
    name: "John Doe",
    role: "UI UX Designer",
  },
  {
    id: 3,
    image: assets.c3,
    name: "Jassica Doe",
    role: "CEO , Tech Company",
  },
  {
    id: 4,
    image: assets.c4,
    name: "Jara Doe",
    role: "Web Developer",
  },
  {
    id: 5,
    image: assets.c5,
    name: "Jara Doe",
    role: "CEO , Design Studio",
  },
];

export const blogCard = [
  {
    id: 1,
    image: assets.b1,
    date: "5 July 2025",
    title: "Learn how to build an amazing portfolio website using next js",
    tag: ["React", "Next JS", "Tailwind"],
  },
  {
    id: 2,
    image: assets.b2,
    date: "5 July 2025",
    title: "Learn how to build an amazing portfolio website using next js",
    tag: ["React", "Next JS", "Tailwind"],
  },
  {
    id: 3,
    image: assets.b3,
    date: "5 July 2025",
    title: "Learn how to build an amazing portfolio website using next js",
    tag: ["React", "Next JS", "Tailwind"],
  },
];
