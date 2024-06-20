import EcommerceAdmindash from "../images/ecommerce/admindash.svg"
import EcommerceHomePage from "../images/ecommerce/homepage.svg"
import EcommerceFilters from "../images/ecommerce/filters.svg"
import EcommerceManagement from "../images/ecommerce/management.svg"
import EcommerceProductPage from "../images/ecommerce/singleproduct.svg"

import PortfolioHome from "../images/portfolio/home.svg"
import PortfolioSkills from "../images/portfolio/skills.svg"

import GameHome from "../images/gamedesign/home.svg"
import GameRecommendation from "../images/gamedesign/recommendation.svg"


export const projectsData = [
  {
    id: 1,
    title: "E-commerce Platform",
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
    xs: 6
  },
  {
    id: 3,
    title: "Game Sallah - Game Recommendation Website",
    description: "UI design for game recommendation website. ",
    images: [
      GameHome, GameRecommendation
    ],
    alt: "Screenshot of the Figma Design",
    github: "",
    live: "",
    techStacks: ["Figma", "BalsamiQ"],
    featured: false,
    xs: 6
  },
];
