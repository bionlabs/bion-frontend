import { IoDocumentText, IoHelpCircle, IoRocket , IoGlobeOutline } from "react-icons/io5";
import { RiAppsFill } from "react-icons/ri";

export const userMenu = [
    {
        title: "Dashboard",
        href: "/dashboard",
        icon: RiAppsFill,
        disabled: false
    },
    {
        title: "Governance",
        href: "/governance",
        disabled: false
    },
    {
        title: "Support",
        href: "/support",
        icon: IoHelpCircle,
        disabled: false
    }
];

export const publicMenu = [
  {
    title: "Explore",
    href: "/",
  },
  {
    title: "Launchpad",
    href: "/launchpad",
    icon: IoRocket
  },
  {
    title: "BUIDLs",
    href: "/buidls",
    disabled: true
  },
  {
    title: "Power Pools",
    href: "/power-pools",
    disabled: true
  },
  {
    title: "Grants",
    href: "/grants",
    disabled: true
  },
  {
    title: "DAOs",
    href: "/daos",
    disabled: true
  },
  {
    title: "News",
    href: "/news",
    disabled: true
  }
];
