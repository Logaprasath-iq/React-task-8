export const currentUser = {
  name: "Easin Arafat",
  role: "Free Account",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
  email: "easin.arafat@base.io"
};

export const dashboardStats = [
  {
    id: "save-products",
    title: "Save Products",
    value: "178+",
    type: "heart",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    id: "stock-products",
    title: "Stock Products",
    value: "20+",
    type: "box",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-500",
  },
  {
    id: "sales-products",
    title: "Sales Products",
    value: "190+",
    type: "bag",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
  },
  {
    id: "job-application",
    title: "Job Application",
    value: "12+",
    type: "briefcase",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
  },
];

export const hourlySalesData = [
  { time: "10am", sales: 54, amount: "1,840" },
  { time: "11am", sales: 32, amount: "1,220" },
  { time: "12am", sales: 58, amount: "2,150" },
  { time: "01am", sales: 36, amount: "1,450" },
  { time: "02am", sales: 24, amount: "980" },
  { time: "03am", sales: 50, amount: "2,678", highlighted: true },
  { time: "04am", sales: 18, amount: "890" },
  { time: "05am", sales: 38, amount: "1,720" },
  { time: "06am", sales: 68, amount: "2,940" },
  { time: "07am", sales: 72, amount: "3,110" },
];

export const analyticsTransactions = {
  percentage: 80,
  label: "Transactions",
  breakdown: [
    { name: "Sale", value: 55, color: "#3B82F6" },
    { name: "Distribute", value: 25, color: "#FBBF24" },
    { name: "Return", value: 20, color: "#FB7185" },
  ],
};

export const recentOrdersData = [
  {
    id: 1,
    trackingNo: "#876364",
    productName: "Camera Lens",
    category: "Optics",
    price: 178,
    totalOrder: 325,
    totalAmount: "$1,46,660",
    image: "https://images.unsplash.com/photo-1617005082133-548c4dd27f35?w=100&h=100&fit=crop&crop=center",
    bgTint: "bg-pink-100",
  },
  {
    id: 2,
    trackingNo: "#876368",
    productName: "Black Sleep Dress",
    category: "Apparel",
    price: 14,
    totalOrder: 53,
    totalAmount: "$46,660",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=100&h=100&fit=crop&crop=center",
    bgTint: "bg-gray-100",
  },
  {
    id: 3,
    trackingNo: "#876412",
    productName: "Argan Oil",
    category: "Cosmetics",
    price: 21,
    totalOrder: 78,
    totalAmount: "$3,46,676",
    image: "https://images.unsplash.com/photo-1608248597359-46702e5c8db9?w=100&h=100&fit=crop&crop=center",
    bgTint: "bg-amber-100",
  },
  {
    id: 4,
    trackingNo: "#876621",
    productName: "EAU DE Parfum",
    category: "Fragrance",
    price: 32,
    totalOrder: 98,
    totalAmount: "$3,46,981",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=100&h=100&fit=crop&crop=center",
    bgTint: "bg-yellow-100",
  },
];

export const topSellingProductsData = [
  {
    id: 1,
    name: "NIKE Shoes Black Pattern",
    rating: 5,
    price: 87,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=160&h=160&fit=crop&crop=center",
    badge: "Hot",
  },
  {
    id: 2,
    name: "iPhone 12",
    rating: 4,
    price: 987,
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=160&h=160&fit=crop&crop=center",
    badge: "Popular",
  },
];

// Product Analytics Data (from Figma Screenshot 5: Product)
export const productAnalyticsData = {
  totalProduct: "5,00,874",
  newAdded: "+1400 New Added",
  totalSales: "2,34,888",
  salesToday: "+1000 Sales Today",
  productAddByMonth: [
    { month: "Jan", count: 23400, color: "#FF7A59" },
    { month: "Feb", count: 15000, color: "#3B82F6" },
    { month: "Mar", count: 30000, color: "#FF7A59" },
    { month: "Apr", count: 22000, color: "#3B82F6" },
    { month: "May", count: 10000, color: "#3B82F6" },
    { month: "Jun", count: 23400, color: "#FF7A59" },
    { month: "Jul", count: 5000, color: "#3B82F6" },
  ],
  salesAnalyticsBreakdown: [
    { name: "Total Sales", value: 50, color: "#3B82F6" },
    { name: "Total Order", value: 30, color: "#FBBF24" },
    { name: "Order Cancel", value: 20, color: "#FB7185" },
  ],
  topSellingProducts: [
    {
      sn: 1,
      name: "Blutooth Devices",
      price: "$10",
      totalOrder: "34,666 Piece",
      totalSales: "$3,46,660",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop",
      isMedal: true,
    },
    {
      sn: 2,
      name: "Airdot",
      price: "$15",
      totalOrder: "20,000 Piece",
      totalSales: "$3,00,000",
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=100&h=100&fit=crop",
      isMedal: true,
    },
    {
      sn: 3,
      name: "Shoes",
      price: "$10",
      totalOrder: "15,000 Piece",
      totalSales: "$1,50,000",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&h=100&fit=crop",
      isMedal: true,
    },
    {
      sn: 4,
      name: "Kids T-Shirt",
      price: "$12",
      totalOrder: "10,000 Piece",
      totalSales: "$1,20,000",
      image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=100&h=100&fit=crop",
      isMedal: false,
    },
    {
      sn: 5,
      name: "Smart Watch",
      price: "$12",
      totalOrder: "10,000 Piece",
      totalSales: "$1,20,000",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop",
      isMedal: false,
    },
    {
      sn: 6,
      name: "Girls Top",
      price: "$12",
      totalOrder: "10,000 Piece",
      totalSales: "$1,20,000",
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=100&h=100&fit=crop",
      isMedal: false,
    },
  ]
};

// Customer List Data (from Figma Screenshot 2 & 3: Customer List)
export const initialCustomers = [
  {
    id: "cust-1",
    name: "John Deo",
    role: "UI/UX Designer",
    email: "johndoe2211@gmail.com",
    contactEmail: "kajope5182@ummoh.com",
    phone: "+33757005467",
    gender: "Male",
    address: "2239 Hog Camp Road Schaumburg",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    performance: [
      { month: "Jan", val: 1.8 },
      { month: "Feb", val: 2.33, highlighted: true },
      { month: "Mar", val: 1.9 },
      { month: "Apr", val: 2.1 },
      { month: "May", val: 2.6 },
      { month: "Jun", val: 2.8 },
    ],
    ring1: 70,
    ring2: 60,
  },
  {
    id: "cust-2",
    name: "Shelby Goode",
    role: "Visual Artist",
    email: "shelbygoode481@gmail.com",
    contactEmail: "shelbygoode@ummoh.com",
    phone: "+33757005467",
    gender: "Female",
    address: "1484 Horizon St Denver",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    performance: [
      { month: "Jan", val: 1.2 },
      { month: "Feb", val: 1.8 },
      { month: "Mar", val: 2.2 },
      { month: "Apr", val: 2.0 },
      { month: "May", val: 2.4 },
      { month: "Jun", val: 2.5 },
    ],
    ring1: 85,
    ring2: 50,
  },
  {
    id: "cust-3",
    name: "Robert Bacins",
    role: "Front-end Dev",
    email: "robertbacins4182@.com",
    contactEmail: "robertbacins@ummoh.com",
    phone: "+33757005467",
    gender: "Male",
    address: "782 Orchard Way Austin",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    performance: [
      { month: "Jan", val: 2.0 },
      { month: "Feb", val: 2.1 },
      { month: "Mar", val: 2.4 },
      { month: "Apr", val: 2.5 },
      { month: "May", val: 2.8 },
      { month: "Jun", val: 3.0 },
    ],
    ring1: 65,
    ring2: 75,
  },
  {
    id: "cust-4",
    name: "John Carilo",
    role: "Product Owner",
    email: "john carilo182@.com",
    contactEmail: "johncarilo@ummoh.com",
    phone: "+33757805467",
    gender: "Male",
    address: "312 Sunset Blvd LA",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    performance: [
      { month: "Jan", val: 1.5 },
      { month: "Feb", val: 1.9 },
      { month: "Mar", val: 2.3 },
      { month: "Apr", val: 2.2 },
      { month: "May", val: 2.7 },
      { month: "Jun", val: 2.9 },
    ],
    ring1: 72,
    ring2: 64,
  },
  {
    id: "cust-5",
    name: "Adriene Watson",
    role: "Project Manager",
    email: "adrienewatson82@.com",
    contactEmail: "adrienewatson@ummoh.com",
    phone: "+83757305467",
    gender: "Female",
    address: "902 Broadway St NYC",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    performance: [
      { month: "Jan", val: 1.7 },
      { month: "Feb", val: 2.0 },
      { month: "Mar", val: 2.5 },
      { month: "Apr", val: 2.6 },
      { month: "May", val: 2.8 },
      { month: "Jun", val: 3.1 },
    ],
    ring1: 90,
    ring2: 80,
  },
  {
    id: "cust-6",
    name: "Jhon Deo",
    role: "Fullstack Eng",
    email: "jhondeo24823@.com",
    contactEmail: "jhondeo@ummoh.com",
    phone: "+63475700546",
    gender: "Male",
    address: "410 Pine St Seattle",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&h=100&fit=crop&crop=face",
    performance: [
      { month: "Jan", val: 1.6 },
      { month: "Feb", val: 2.2 },
      { month: "Mar", val: 2.1 },
      { month: "Apr", val: 2.4 },
      { month: "May", val: 2.5 },
      { month: "Jun", val: 2.7 },
    ],
    ring1: 68,
    ring2: 55,
  },
  {
    id: "cust-7",
    name: "Mark Ruffalo",
    role: "QA Lead",
    email: "markruffalo3735@.com",
    contactEmail: "markruffalo@ummoh.com",
    phone: "+33757005467",
    gender: "Male",
    address: "550 Market St SF",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
    performance: [
      { month: "Jan", val: 1.4 },
      { month: "Feb", val: 1.9 },
      { month: "Mar", val: 2.0 },
      { month: "Apr", val: 2.3 },
      { month: "May", val: 2.6 },
      { month: "Jun", val: 2.8 },
    ],
    ring1: 74,
    ring2: 62,
  },
  {
    id: "cust-8",
    name: "Bethany Jackson",
    role: "Copywriter",
    email: "bethanyjackson5@.com",
    contactEmail: "bethanyjackson@ummoh.com",
    phone: "+33757005467",
    gender: "Female",
    address: "123 Elm St Boston",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    performance: [
      { month: "Jan", val: 1.5 },
      { month: "Feb", val: 2.1 },
      { month: "Mar", val: 2.3 },
      { month: "Apr", val: 2.5 },
      { month: "May", val: 2.7 },
      { month: "Jun", val: 2.9 },
    ],
    ring1: 80,
    ring2: 70,
  },
  {
    id: "cust-9",
    name: "Christine Huston",
    role: "Brand Strategist",
    email: "christinehuston4@.com",
    contactEmail: "christine@ummoh.com",
    phone: "+33757005467",
    gender: "Male",
    address: "880 Lakeview Chicago",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face",
    performance: [
      { month: "Jan", val: 1.9 },
      { month: "Feb", val: 2.4 },
      { month: "Mar", val: 2.6 },
      { month: "Apr", val: 2.7 },
      { month: "May", val: 2.9 },
      { month: "Jun", val: 3.2 },
    ],
    ring1: 88,
    ring2: 72,
  },
  {
    id: "cust-10",
    name: "Anne Jacob",
    role: "Operations",
    email: "annejacob2@ummoh.com",
    contactEmail: "annejacob@ummoh.com",
    phone: "+33757005467",
    gender: "Male",
    address: "650 Maple St Miami",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    performance: [
      { month: "Jan", val: 1.3 },
      { month: "Feb", val: 1.8 },
      { month: "Mar", val: 2.0 },
      { month: "Apr", val: 2.2 },
      { month: "May", val: 2.5 },
      { month: "Jun", val: 2.7 },
    ],
    ring1: 62,
    ring2: 58,
  },
  {
    id: "cust-11",
    name: "James Mullican",
    role: "Growth Hacker",
    email: "jamesmullican5346@.com",
    contactEmail: "jamesmullican@ummoh.com",
    phone: "+33757005467",
    gender: "Male",
    address: "220 Cedar Dr Atlanta",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
    performance: [
      { month: "Jan", val: 2.1 },
      { month: "Feb", val: 2.5 },
      { month: "Mar", val: 2.7 },
      { month: "Apr", val: 2.8 },
      { month: "May", val: 3.1 },
      { month: "Jun", val: 3.4 },
    ],
    ring1: 76,
    ring2: 68,
  },
];

// Exact Board List / Task Preview from Figma Screenshot 1
export const initialBoardTasks = {
  todo: [
    {
      id: "task-1",
      title: "Dashboard Design",
      checked: false,
      priority: "Low",
      status: "On Track",
      description: "Discussion for management dashboard ui design",
      comments: 112,
      likes: "1.2k",
      assignees: [
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&h=60&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face"
      ]
    },
    {
      id: "task-2",
      title: "Landing page Design",
      checked: false,
      priority: "Medium",
      status: "At risk",
      description: "Discussion for management dashboard ui design",
      comments: 112,
      likes: "1.2k",
      assignees: [
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=60&h=60&fit=crop&crop=face"
      ]
    },
    {
      id: "task-3",
      title: "E-Shop Mobile App",
      checked: false,
      priority: "High",
      status: null,
      description: "Discussion for management dashboard ui design",
      comments: 112,
      likes: "1.2k",
      assignees: [
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=60&h=60&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=60&h=60&fit=crop&crop=face"
      ]
    },
    {
      id: "task-4",
      title: "Dashboard Design",
      checked: false,
      priority: "Low",
      status: "On Track",
      description: "Discussion for management dashboard ui design",
      comments: 112,
      likes: "1.2k",
      assignees: [
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&h=60&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
      ]
    }
  ],
  inProgress: [
    {
      id: "task-5",
      title: "Dashboard Design",
      checked: true,
      priority: "High",
      status: "On Track",
      description: "Discussion for management dashboard ui design",
      comments: 112,
      likes: "1.2k",
      assignees: [
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&h=60&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
      ]
    },
    {
      id: "task-6",
      title: "Landing page Design",
      checked: true,
      priority: "Low",
      status: null,
      description: "Discussion for management dashboard ui design",
      comments: 112,
      likes: "1.2k",
      attachments: [
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=220&h=140&fit=crop",
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=220&h=140&fit=crop"
      ],
      assignees: [
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=60&h=60&fit=crop&crop=face"
      ]
    },
    {
      id: "task-7",
      title: "E-Shop Mobile App",
      checked: false,
      priority: "Low",
      status: "On Track",
      description: "Discussion for management dashboard ui design",
      comments: 112,
      likes: "1.2k",
      assignees: [
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&h=60&fit=crop&crop=face"
      ]
    }
  ],
  inReview: [
    {
      id: "task-8",
      title: "Dashboard Design",
      checked: true,
      priority: "Medium",
      status: null,
      description: "Discussion for management dashboard ui design",
      comments: 112,
      likes: "1.2k",
      previewGraphic: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=240&fit=crop",
      assignees: [
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&h=60&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
      ]
    },
    {
      id: "task-9",
      title: "E-Shop Mobile App",
      checked: true,
      priority: "Low",
      status: null,
      description: "Discussion for management dashboard ui design",
      comments: 112,
      likes: "1.2k",
      attachments: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=220&h=140&fit=crop",
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=220&h=140&fit=crop"
      ],
      assignees: [
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
      ]
    }
  ],
  done: [
    {
      id: "task-10",
      title: "Dashboard Design",
      checked: true,
      priority: "High",
      status: "On Track",
      description: "Discussion for management dashboard ui design",
      comments: 112,
      likes: "1.2k",
      attachments: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=220&h=140&fit=crop",
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=220&h=140&fit=crop"
      ],
      assignees: [
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&h=60&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face"
      ]
    }
  ]
};

export const initialScheduleList = [
  {
    id: "sch-1",
    date: "12 Dec, 2021",
    time: "10.15AM",
    location: "Office Meeting",
    checked: false,
  },
  {
    id: "sch-2",
    date: "10 Dec, 2021",
    time: "11.20AM",
    location: "Home",
    checked: false,
  },
  {
    id: "sch-3",
    date: "09 Dec, 2021",
    time: "11.45AM",
    location: "Friends Zone",
    checked: false,
  },
  {
    id: "sch-4",
    date: "08 Dec, 2021",
    time: "12.15PM",
    location: "Office Meeting",
    checked: false,
  },
  {
    id: "sch-5",
    date: "07 Dec, 2021",
    time: "01.20PM",
    location: "Home",
    checked: false,
  },
  {
    id: "sch-6",
    date: "05 Dec, 2021",
    time: "10.15AM",
    location: "Meeting Outside",
    checked: false,
  },
  {
    id: "sch-7",
    date: "04 Dec, 2021",
    time: "11.15AM",
    location: "Office Meeting",
    checked: false,
  },
  {
    id: "sch-8",
    date: "04 Dec, 2021",
    time: "01.25PM",
    location: "Home",
    checked: false,
  },
  {
    id: "sch-9",
    date: "02 Dec, 2021",
    time: "10.15AM",
    location: "Friends",
    checked: false,
  },
  {
    id: "sch-10",
    date: "01 Dec, 2021",
    time: "04.30PM",
    location: "Meeting Outside",
    checked: false,
  },
];

export const schedulePeople = [
  {
    id: 1,
    name: "Eddie Lobanovskiy",
    email: "lobanovskiy@gmail.com",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Alexey Stave",
    email: "alexeyst@gmail.com",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Anton Tkachev",
    email: "tkachevanton@gmail.com",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
];

// Exact Invoices from Image 3 & 4
export const initialInvoices = [
  {
    id: "876364",
    name: "Arrora gaur",
    email: "arroragaur@gmail.com",
    date: "12 Dec, 2020",
    status: "Complete",
    starred: true,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    amount: "$2,450.00",
  },
  {
    id: "876123",
    name: "James Mullican",
    email: "jamesmullican@gmail.com",
    date: "10 Dec, 2020",
    status: "Pending",
    starred: true,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    amount: "$1,120.50",
  },
  {
    id: "876213",
    name: "Robert Bacins",
    email: "robertbacins@gmail.com",
    date: "09 Dec, 2020",
    status: "Complete",
    starred: false,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    amount: "$3,800.00",
  },
  {
    id: "876987",
    name: "Bethany Jackson",
    email: "bethanyjackson@gmail.com",
    date: "09 Dec, 2020",
    status: "Cancel",
    starred: false,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    amount: "$640.00",
  },
  {
    id: "871345",
    name: "Anne Jacob",
    email: "annejacob@gmail.com",
    date: "10 Dec, 2020",
    status: "Complete",
    starred: false,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    amount: "$980.25",
  },
  {
    id: "872345",
    name: "Bethany jackson",
    email: "bethanyjackson@gmail.com",
    date: "10 Dec, 2020",
    status: "Pending",
    starred: true,
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face",
    amount: "$1,540.00",
  },
  {
    id: "872346",
    name: "James Mullican",
    email: "jamesmullican@gmail.com",
    date: "10 Dec, 2020",
    status: "Complete",
    starred: false,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    amount: "$4,200.00",
  },
  {
    id: "873245",
    name: "Jhon Deo",
    email: "jhondeo32@gmail.com",
    date: "08 Dec, 2020",
    status: "Complete",
    starred: true,
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&h=100&fit=crop&crop=face",
    amount: "$750.00",
  },
  {
    id: "876365",
    name: "Bethany jackson",
    email: "bethanyjackson@gmail.com",
    date: "02 Dec, 2020",
    status: "Cancel",
    starred: true,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    amount: "$320.00",
  },
  {
    id: "878769",
    name: "James Mullican",
    email: "jamesmullican@gmail.com",
    date: "01 Dec, 2020",
    status: "Pending",
    starred: false,
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
    amount: "$2,890.00",
  },
];

export const calendarMonthEvents = [
  { id: 1, day: 2, title: "Free day", category: "Holiday", color: "#00D2D3" },
  { id: 2, day: 2, title: "Party Time", category: "Social", color: "#EC4899" },
  { id: 3, day: 16, title: "Victory day", category: "Celebration", color: "#FF7A59" },
  { id: 4, day: 25, title: "Christmas Day", category: "Holiday", color: "#00D2D3" },
];

export const chatConversations = [
  {
    id: "conv-1",
    name: "Alex Morgan",
    role: "Product Designer",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    online: true,
    unread: 2,
    lastTime: "10:45 AM",
    lastMessage: "The new dashboard mockups are ready for review!",
    messages: [
      { id: 1, sender: "them", text: "Hey Easin, did you get a chance to check the updated specs?", time: "10:30 AM" },
      { id: 2, sender: "me", text: "Yes! Looking over the metrics and invoice tables now.", time: "10:38 AM" },
      { id: 3, sender: "them", text: "Awesome! The new dashboard mockups are ready for review!", time: "10:45 AM" }
    ]
  },
  {
    id: "conv-2",
    name: "David Kim",
    role: "Lead Engineer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    online: false,
    unread: 0,
    lastTime: "Yesterday",
    lastMessage: "API endpoints deployed to staging environment.",
    messages: [
      { id: 1, sender: "them", text: "API endpoints deployed to staging environment.", time: "Yesterday" }
    ]
  },
  {
    id: "conv-3",
    name: "Sarah Jenkins",
    role: "Marketing Manager",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    online: true,
    unread: 0,
    lastTime: "Nov 1",
    lastMessage: "Q4 conversion numbers surpassed our projections!",
    messages: [
      { id: 1, sender: "them", text: "Q4 conversion numbers surpassed our projections!", time: "Nov 1" }
    ]
  }
];
