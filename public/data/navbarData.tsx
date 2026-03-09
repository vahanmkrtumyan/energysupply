import home1 from "@/public/images/home-1.png";
import home2 from "@/public/images/home-2.png";
import home3 from "@/public/images/home-3.png";
import home4 from "@/public/images/home-4.png";
import home5 from "@/public/images/home-5.png";
import home6 from "@/public/images/home-6.png";
const navbarData = [
  {
    id: 1,
    title: "Home",
    submenus: [
      {
        id: 1.1,
        title: "Solar Solution",
        link: "/",
        img: home1,
      },
      {
        id: 1.2,
        title: "Solar Company",
        link: "/home-two/",
        img: home2,
      },
      {
        id: 1.3,
        title: "Wind Energy",
        link: "/home-three/",
        img: home3,
      },
      {
        id: 1.4,
        title: "Hydropower",
        link: "/home-four/",
        img: home4,
      },
      {
        id: 1.5,
        title: "Online Shop",
        link: "/home-five/",
        img: home5,
      },
      {
        id: 1.6,
        title: "Video Background",
        link: "/home-six/",
        img: home6,
      },
    ],
    type: "megamenu",
  },
  {
    id: 2,
    title: "About",
    link: "/about-us/",
  },
  {
    id: 3,
    title: "Service",
    submenus: [
      {
        id: 3.1,
        title: "Services",
        link: "/services/",
      },
      {
        id: 3.2,
        title: "Service Details",
        link: "/services/1/",
      },
    ],
  },
  {
    id: 4,
    title: "Blog",
    submenus: [
      {
        id: 4.1,
        title: "Blog Standard",
        link: "/blogs/",
      },
      {
        id: 4.2,
        title: "Blog Grid",
        link: "/blog-grid/",
      },
      {
        id: 4.3,
        title: "Blog List",
        link: "/blog-list/",
      },
      {
        id: 4.4,
        title: "Blog Details",
        link: "/blogs/1/",
      },
    ],
  },
  {
    id: 5,
    title: "Shop",
    submenus: [
      {
        id: 5.1,
        title: "Products",
        link: "/products/",
      },
      {
        id: 5.2,
        title: "Product Details",
        link: "/products/1/",
      },
      {
        id: 5.3,
        title: "Cart",
        link: "/cart/",
      },
      {
        id: 5.4,
        title: "Billing",
        link: "/billing/",
      },
      {
        id: 5.5,
        title: "Payment",
        link: "/payment/",
      },
    ],
  },
  {
    id: 6,
    title: "Pages",
    submenus: [
      {
        id: 6.1,
        title: "Projects",
        link: "/projects/",
      },
      {
        id: 6.2,
        title: "Project Details",
        link: "/projects/1/",
      },
      {
        id: 6.3,
        title: "Contact",
        link: "/contact/",
      },
      {
        id: 6.4,
        title: "Faq",
        link: "/faq/",
      },
      {
        id: 6.5,
        title: "Sign Up",
        link: "/sign-up/",
      },
      {
        id: 6.6,
        title: "Sign In",
        link: "/sign-in/",
      },
      {
        id: 6.7,
        title: "404",
        link: "/404/",
      },
    ],
  },
];

export default navbarData;
