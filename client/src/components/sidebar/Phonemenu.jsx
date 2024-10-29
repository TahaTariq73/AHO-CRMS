import React from 'react';
import { Link } from "react-router-dom"
import {
  Menu,
  Package2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MenuOption } from './Sidebar';
import MenuOptions, { AdminMenu } from './Menuoptions'
import { useSelector } from "react-redux";

const Phonemenu = ({ currentPage, setCurrentPage }) => {
  const { data, status, error, isAuthenticated } = useSelector(state => state.user);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="shrink-0 md:hidden"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only"> Toggle navigation menu </span>
        </Button>  
      </SheetTrigger>
          
      <SheetContent side="left" className="flex flex-col overflow-scroll">
        <div className="flex items-center px-3 lg:h-[60px] lg:px-6">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <Package2 color="#BE185D" className="h-7 w-7" />
            <span className="text-lg font-bold text-violet-700"> AHO CRMS </span>
          </Link>
        </div>

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
          <nav className="grid items-start px- text-sm font-medium lg:px-4" key={index}>
            <h1 className="px-3 py-2 my-2 text-lg font-bold"> {menu.menuTitle} </h1>
            {menu.menu.map((option, index) => (
              <MenuOption 
                title={option.title}
                redirectTo={option.redirectTo}
                belongsTo={menu.menuTitle}
                setCurrentPage={setCurrentPage}
                icon={option.icon}
                key={index}
              />
            ))}
          </nav>
        ))}
      </SheetContent>
    </Sheet>
  )
}

export default Phonemenu;