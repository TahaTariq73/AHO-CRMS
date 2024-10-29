import {
    UserRoundCog,
    Settings, 
    ClipboardCheck,
    Spline,
    Users,
    Calendar,
    MessageSquareReply,
    Coins 
} from "lucide-react"

export const AdminMenu = {
    menuTitle: "Admin", 
    menu: [
            {
                title: "User Management",
                redirectTo: "/admin/user-management",
                icon: <UserRoundCog className="h-5 w-5" />
            },
            {
                title: "System Settings",
                redirectTo: "/admin/setting",
                icon: <Settings className="h-5 w-5" />
            }, 
            {
                title: "Tasks",
                redirectTo: "/admin/tasks",
                icon: <ClipboardCheck className="h-5 w-5" />
            },
            {
                title: "Pipeline",
                redirectTo: "/admin/pipeline",
                icon: <Spline className="h-5 w-5" />
            }
        ]
}

const MenuOptions = [
    {
        menuTitle: "Acquistions",
        menu: [
            {
                title: "Leads",
                redirectTo: "/acquistions/leads",
                icon: <Users className="h-5 w-5" />
            },
            {
                title: "Acquistion Pipeline",
                redirectTo: "/acquistions/pipeline",
                icon: <Spline className="h-5 w-5" />
            }, 
            {
                title: "Calender",
                redirectTo: "/acquistions/calender",
                icon: <Calendar className="h-5 w-5" />
            },
            {
                title: "SMS Replies",
                redirectTo: "/acquistions/sms-replies",
                icon: <MessageSquareReply className="h-5 w-5" />
            },
            {
                title: "Tasks",
                redirectTo: "/acquistions/tasks",
                icon: <ClipboardCheck className="h-5 w-5" />
            }
        ]
    },
    {
        menuTitle: "Dispositions",
        menu: [
            {
                title: "Buyer Management",
                redirectTo: "/dispositions/buyer-management",
                icon: <Coins className="h-5 w-5" />
            },
            {
                title: "Disposition Pipeline",
                redirectTo: "/dispositions/pipeline",
                icon: <Spline className="h-5 w-5" />
            }, 
            {
                title: "Calender",
                redirectTo: "/dispositions/calender",
                icon: <Calendar className="h-5 w-5" />
            },
            {
                title: "SMS Replies",
                redirectTo: "/dispositions/sms-replies",
                icon: <MessageSquareReply className="h-5 w-5" />
            },
            {
                title: "Tasks",
                redirectTo: "/dispositions/tasks",
                icon: <ClipboardCheck className="h-5 w-5" />
            }
        ]
    },
    {
        menuTitle: "Transaction Pipeline",
        menu: [
            {
                title: "Transaction Pipeline",
                redirectTo: "/transaction/pipeline",
                icon: <Spline className="h-5 w-5" />
            }, 
            {
                title: "Calender",
                redirectTo: "/transaction/calender",
                icon: <Calendar className="h-5 w-5" />
            },
            {
                title: "SMS Replies",
                redirectTo: "/transaction/sms-replies",
                icon: <MessageSquareReply className="h-5 w-5" />
            },
            {
                title: "Tasks",
                redirectTo: "/transaction/tasks",
                icon: <ClipboardCheck className="h-5 w-5" />
            }
        ]
    },
    {
        menuTitle: "Reports",
        menu: [
            {
                title: "Scoreboard",
                redirectTo: "/reports/scoreboard",
                icon: <></>
            }, 
            {
                title: "Acquistion KPIS",
                redirectTo: "/reports/acquistion",
                icon: <></>
            },
            {
                title: "Disposition KPIS",
                redirectTo: "/reports/disposition",
                icon: <></>
            },
            {
                title: "Lead Manager KPIS",
                redirectTo: "/reports/leads",
                icon: <></>
            },
            {
                title: "Marketing KPIS",
                redirectTo: "/reports/marketing",
                icon: <></>
            },
            {
                title: "All KPIS",
                redirectTo: "/reports/all",
                icon: <></>
            }
        ]
    },
]

export default MenuOptions;