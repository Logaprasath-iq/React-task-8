export const currentUser = {
  name: "Easin Arafat",
  role: "Free Account",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
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

export const initialBoardTasks = {
  todo: [
    {
      id: "task-1",
      title: "Dashboard Design",
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
      priority: "Medium",
      status: "At risk",
      description: "Discussion for management dashboard ui design",
      comments: 84,
      likes: "890",
      assignees: [
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
      ]
    },
    {
      id: "task-3",
      title: "E-Shop Mobile App",
      priority: "High",
      status: "On Track",
      description: "Discussion for management dashboard ui design",
      comments: 65,
      likes: "450",
      assignees: [
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=60&h=60&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=60&h=60&fit=crop&crop=face"
      ]
    }
  ],
  inProgress: [
    {
      id: "task-4",
      title: "Dashboard Design",
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
      id: "task-5",
      title: "Landing page Design",
      priority: "Low",
      status: "On Track",
      description: "Discussion for management dashboard ui design",
      comments: 112,
      likes: "1.2k",
      attachments: [
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=200&h=120&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=120&fit=crop"
      ],
      assignees: [
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=60&h=60&fit=crop&crop=face"
      ]
    },
    {
      id: "task-6",
      title: "E-Shop Mobile App",
      priority: "Low",
      status: "On Track",
      description: "Discussion for management dashboard ui design",
      comments: 42,
      likes: "630",
      assignees: [
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
      ]
    }
  ],
  inReview: [
    {
      id: "task-7",
      title: "Dashboard Design",
      priority: "Medium",
      status: "On Track",
      description: "Discussion for management dashboard ui design",
      comments: 112,
      likes: "1.2k",
      previewGraphic: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=350&h=200&fit=crop",
      assignees: [
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&h=60&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
      ]
    },
    {
      id: "task-8",
      title: "E-Shop Mobile App",
      priority: "Low",
      status: "On Track",
      description: "Discussion for management dashboard ui design",
      comments: 112,
      likes: "1.2k",
      attachments: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=120&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=120&fit=crop"
      ],
      assignees: [
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
      ]
    }
  ],
  done: [
    {
      id: "task-9",
      title: "Dashboard Design",
      priority: "High",
      status: "On Track",
      description: "Discussion for management dashboard ui design",
      comments: 112,
      likes: "1.2k",
      attachments: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=120&fit=crop",
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=200&h=120&fit=crop"
      ],
      assignees: [
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&h=60&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face"
      ]
    }
  ]
};

export const calendarMonthEvents = [
  { id: 1, day: 4, title: "Design Sprint", category: "Design", color: "#6366F1" },
  { id: 2, day: 8, title: "Client Sync", category: "Meeting", color: "#3B82F6" },
  { id: 3, day: 14, title: "Release v2.4", category: "Product", color: "#10B981" },
  { id: 4, day: 19, title: "Investor Review", category: "Meeting", color: "#F59E0B" },
  { id: 5, day: 24, title: "Marketing Campaign", category: "Marketing", color: "#EC4899" },
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

export const analyticsExtendedData = {
  monthlyRevenue: [
    { month: "Jan", revenue: 42000, expenses: 18000, profit: 24000 },
    { month: "Feb", revenue: 56000, expenses: 22000, profit: 34000 },
    { month: "Mar", revenue: 68000, expenses: 25000, profit: 43000 },
    { month: "Apr", revenue: 61000, expenses: 21000, profit: 40000 },
    { month: "May", revenue: 79000, expenses: 28000, profit: 51000 },
    { month: "Jun", revenue: 95000, expenses: 31000, profit: 64000 },
    { month: "Jul", revenue: 110000, expenses: 35000, profit: 75000 },
  ],
  trafficSources: [
    { name: "Direct Search", visitors: 45000, percentage: 42, color: "#6366F1" },
    { name: "Social Media", visitors: 28000, percentage: 26, color: "#3B82F6" },
    { name: "Referral Sites", visitors: 19000, percentage: 18, color: "#10B981" },
    { name: "Email Campaigns", visitors: 15000, percentage: 14, color: "#F59E0B" },
  ]
};
