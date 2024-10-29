import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import {
  CircleUser,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
import Phonemenu from "../sidebar/Phonemenu"
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../../redux/slices/userSlice';
import { useEffect, useState } from "react"

const Header = ({ currentPage, setCurrentPage }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, status, error, isAuthenticated } = useSelector(state => state.user);

  return (
    <header className="flex justify-between min-h-16 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
        <Phonemenu currentPage={currentPage} setCurrentPage={setCurrentPage} />
            
            {(currentPage.pageType != null && currentPage.category != null) ? ( 
                <div className="w-full flex-1">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink className="hidden sm:inline"> 
                                    <Link onClick={() => setCurrentPage({
                                        pageType: null,
                                        category: null,
                                        currentUrl: "/"
                                    })} className="text-sm sm:text-md font-bold"> Dashboard </Link> 
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />

                            <BreadcrumbItem>
                                <BreadcrumbLink> 
                                    <Link className="text-sm sm:text-md font-bold"> {currentPage.pageType} </Link> 
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            
                            <BreadcrumbItem>
                                <BreadcrumbLink> 
                                    <Link className="text-sm sm:text-md font-bold"> {currentPage.category} </Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>            
                </div> 
                ) : (
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink> <Link to="" className="text-md font-bold"> Dashboard </Link> </BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                )
            }

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="secondary" size="icon" className="rounded-full outline-none">
                        <CircleUser color={"#BE185D"} className="h-6 w-6" />
                        <span className="sr-only">Toggle user menu</span>
                    </Button>
                </DropdownMenuTrigger>
            
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel> My Account </DropdownMenuLabel>
                    <DropdownMenuSeparator />

                    <DropdownMenuItem> Settings </DropdownMenuItem>
                    <DropdownMenuItem> Support </DropdownMenuItem>
                    <DropdownMenuSeparator />

                    <DropdownMenuItem onClick={() => dispatch(logout())}> Logout </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </header>
    )
}

export default Header