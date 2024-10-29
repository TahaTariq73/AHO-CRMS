import React, { Fragment } from 'react'
import { Link } from "react-router-dom"
import MenuOptions, { AdminMenu } from './Menuoptions'
import { Package2 } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";

export const MenuOption = ({ title, redirectTo, icon, setCurrentPage, belongsTo }) => {
    const location = useLocation();

    return (
        <Link
            onClick={() => setCurrentPage({
                pageType: belongsTo,
                category: title,
                currentUrl: redirectTo
            })}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 ${location.pathname == redirectTo ? "bg-muted" : "text-muted-foreground"} transition-all hover:text-primary`}
        >
            {icon}
            {title}
        </Link>
    )
}

const Sidebar = ({ currentPage, setCurrentPage }) => {
    const { data, status, error, isAuthenticated } = useSelector(state => state.user);

    return (
        <div className="hidden border-r-2 bg-muted/40 md:block">
            <div className="flex h-full overflow-y-scroll mb-4 max-h-screen flex-col gap-2">
                <div className="flex min-h-16 items-center border-b px-4 lg:h-[60px] lg:px-6">
                    <Link to="/" className="flex items-center gap-2 font-semibold">
                        <Package2 color={"#BE185D"} className="h-6 w-6 mr-2" />
                        <span className="text-lg font-bold text-violet-700"> AHO CRMS </span>
                    </Link>
                </div>

                <div className="flex-1">
                    {data.success && data.user && data.user.role == "admin" && (
                        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                            <h1 className="px-3 py-2 my-2 text-lg font-bold"> {AdminMenu.menuTitle} </h1>
                        
                            {AdminMenu.menu.map((option, index) => (
                                <MenuOption 
                                    title={option.title}
                                    redirectTo={option.redirectTo}
                                    icon={option.icon}
                                    belongsTo={AdminMenu.menuTitle}
                                    setCurrentPage={setCurrentPage}
                                    key={index}
                                />
                            ))}
                        </nav>
                    )}

                    {MenuOptions.map((menu, index) => (
                        <nav className="grid items-start px-2 text-sm font-medium lg:px-4" key={index}>
                            <h1 className="px-3 py-2 my-2 text-lg font-bold"> {menu.menuTitle} </h1>
                            {menu.menu.map((option, index) => {
                                return (
                                    <MenuOption 
                                        title={option.title}
                                        redirectTo={option.redirectTo}
                                        icon={option.icon}
                                        belongsTo={menu.menuTitle}
                                        setCurrentPage={setCurrentPage}
                                        key={index}
                                    />
                                )
                            })}
                        </nav>
                    ))}
                </div>
            </div>
        </div>   
    )
}

export default Sidebar