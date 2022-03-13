import {
  faHouse,
  faChalkboard,
  faUserGroup,
  faBriefcase,
  faReceipt,
  faList,
  faGear,
  faKey,
  faWallet,
  faCartShopping,
  faBoxArchive,
  faBell,
} from "@fortawesome/free-solid-svg-icons";

export const currentUser = {
  id: 1,
  name: "Cristina Lester",
  role: "Front-End Developer",
};

export const menu1 = [
  {
    item: "Dashboard",
    link: "http://localhost:3000/#",
    icon: faHouse,
    sub: [
      {
        item: "Link 1",
        link: "http://localhost:3000/#",
      },
      {
        item: "Link 2",
        link: "http://localhost:3000/#",
      },
      {
        item: "Link 3",
        link: "http://localhost:3000/#",
      },
    ],
  },
  {
    item: "Project",
    link: "http://localhost:3000/#",
    icon: faChalkboard,
    badge: 12,
  },
  {
    item: "Team Member",
    link: "http://localhost:3000/#",
    icon: faUserGroup,
  },
  {
    item: "Job Board",
    link: "http://localhost:3000/#",
    icon: faBriefcase,
  },
  {
    item: "Order",
    link: "http://localhost:3000/#",
    icon: faReceipt,
  },
  {
    item: "CRM",
    link: "http://localhost:3000/#",
    icon: faList,
    sub: [
      {
        item: "Link 4",
        link: "http://localhost:3000/#",
      },
      {
        item: "Link 5",
        link: "http://localhost:3000/#",
      },
      {
        item: "Link 6",
        link: "http://localhost:3000/#",
      },
    ],
  },
];

export const menu2 = [
  {
    item: "Utilities",
    link: "http://localhost:3000/#",
    icon: faGear,
    sub: [
      {
        item: "Link 7",
        link: "http://localhost:3000/#",
      },
      {
        item: "Link 8",
        link: "http://localhost:3000/#",
      },
      {
        item: "Link 9",
        link: "http://localhost:3000/#",
      },
    ],
  },
  {
    item: "Authentication",
    link: "http://localhost:3000/#",
    icon: faKey,
    sub: [
      {
        item: "Link 10",
        link: "http://localhost:3000/#",
      },
      {
        item: "Link 11",
        link: "http://localhost:3000/#",
      },
    ],
  },
];

export const lastShipped = [
  {
    id: 1,
    name: "Jared Vasquez",
    destination: "Elgin St., Daleware 1027",
    date: "8/21/21",
  },
  {
    id: 2,
    name: "Patrick Star",
    destination: "Preston Rd., Maine 9831",
    date: "8/27/21",
  },
  {
    id: 3,
    name: "Erlink Halland",
    destination: "Prestone Rd., Maine 8541",
    date: "8/30/21",
  },
];

export const topSales = [
  {
    id: 1,
    name: "Mick Vujivic",
    revenue: "$3.891",
    percent: "+12.8%",
  },
  {
    id: 2,
    name: "Uchia Itachi",
    revenue: "$3.891",
    percent: "+12.8%",
  },
  {
    id: 3,
    name: "Darlene Smith",
    revenue: "$3.891",
    percent: "+12.8%",
  },
  {
    id: 4,
    name: "Peter Roberts",
    revenue: "$3.891",
    percent: "+12.8%",
  },
  {
    id: 5,
    name: "Marlo Loco",
    revenue: "$3.891",
    percent: "+12.8%",
  },
];

export const totals = [
  {
    amount: "$72,257.49",
    type: "balance",
    percentage: "+42%",
    icon: faWallet,
  },
  {
    amount: "$92,152.79",
    type: "sales",
    percentage: "+17%",
    icon: faCartShopping,
  },
  {
    amount: "$22,139.09",
    type: "expense",
    percentage: "-16%",
    icon: faBoxArchive,
  },
  {
    amount: "40.257.491",
    type: "visitors",
    percentage: "+21%",
    icon: faBell,
  },
];

export const chartData = [
  {
    name: "Oct 21",
    "Total Earnings": 24525.09,
    "Total Visitors": 34234,
    "Total Expenses": 5463.12,
  },
  {
    name: "Oct 22",
    "Total Earnings": 67433.09,
    "Total Visitors": 123,
    "Total Expenses": 1234.12,
  },
  {
    name: "Oct 23",
    "Total Earnings": 56366.09,
    "Total Visitors": 4232,
    "Total Expenses": 23456.12,
  },
  {
    name: "Oct 24",
    "Total Earnings": 12345.09,
    "Total Visitors": 653,
    "Total Expenses": 5432.12,
  },
  {
    name: "Oct 25",
    "Total Earnings": 34123.09,
    "Total Visitors": 14565,
    "Total Expenses": 1234.12,
  },
  {
    name: "Oct 26",
    "Total Earnings": 56532.09,
    "Total Visitors": 2341,
    "Total Expenses": 4566.12,
  },
  {
    name: "Oct 27",
    "Total Earnings": 12345.09,
    "Total Visitors": 12565,
    "Total Expenses": 5675.12,
  },
];
