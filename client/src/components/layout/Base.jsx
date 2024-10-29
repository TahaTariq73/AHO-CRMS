import React, { useEffect, useState } from "react"
import Sidebar from "../Sidebar/Sidebar"
import Header from "./Header"
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Panel from "../Panel";

function Base() {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState({ 
    pageType: null,
    category: null,
    currentUrl: "/"
  })

  useEffect(() => {
    navigate(currentPage.currentUrl);
  }, [currentPage.currentUrl])

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <div className="flex flex-col">
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
        
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <Panel />
        </main>
      </div>
    </div>
  )
}

export default Base;