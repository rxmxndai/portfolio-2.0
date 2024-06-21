import EcommerceAdmindash from "../images/ecommerce/admindash.svg"
import EcommerceHomePage from "../images/ecommerce/homepage.svg"
import EcommerceFilters from "../images/ecommerce/filters.svg"
import EcommerceManagement from "../images/ecommerce/management.svg"
import EcommerceProductPage from "../images/ecommerce/singleproduct.svg"

import PortfolioHome from "../images/portfolio/home.svg"
import PortfolioSkills from "../images/portfolio/skills.svg"

import GameHome from "../images/gamedesign/home.svg"
import GameRecommendation from "../images/gamedesign/recommendation.svg"

import ChatLogin from "../images/chat-app/login.svg"
import ChatChat from "../images/chat-app/chat.svg"


export const projectsData = [
  {
    id: 1,
    title: "Bech-Cha: E-commerce Platform",
    description: "An online platform for buying and selling products with a variety of options like: sorting, filtering, tracking, Dashboard, Stock Management, and many more.",
    images: [
      EcommerceHomePage, EcommerceAdmindash, EcommerceFilters, EcommerceManagement, EcommerceProductPage
    ],
    alt: "Screenshot of the E-commerce Platform",
    github: "https://github.com/rxmxndai/Ecommerce-BechCha-Client",
    live: "https://ecommerce-bech-cha-client.vercel.app/",
    techStacks: ["ReactJS", "ReduxToolkit", "ExpressJS", "MongoDB", "MaterialUI", "StyledComponents"],
    featured: true,
    xs: 12
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase projects and skills.",
    images: [
      PortfolioHome, PortfolioSkills
    ],
    alt: "Screenshot of the Portfolio Website",
    github: "",
    live: "",
    techStacks: ["ReactJS", "MaterialUI"],
    featured: false,
    xs: 4
  },
  {
    id: 4,
    title: "Chat Application",
    description: "A very basic real-time chat application built with Node.js and Socket.io.",
    images: [ChatChat, ChatLogin],
    alt: "Screenshot of the Chat Application",
    github: "https://github.com/rxmxndai/chat-app-nodev3",
    live: "https://chatapp.example.com",
    techStacks: ["Node.js", "Express", "Socket.io", "React"],
    featured: true,
    xs: 4
  },
  {
    id: 4,
    title: "Game Sallah - Game Recommendation Website",
    description: "UI design for game recommendation website. ",
    images: [
      GameRecommendation, GameHome,
    ],
    alt: "Screenshot of the Figma Design",
    github: "",
    live: "",
    techStacks: ["Figma", "BalsamiQ"],
    featured: false,
    xs: 4
  }
];
