import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronLeft, Calendar } from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Addnote from './Addnote'
import "./calender.css"

export function getDayFromDate(dateString) {
  const date = new Date(dateString); // Parses the date string
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return daysOfWeek[date.getDay()];  // Maps day number to day name
}

const calender = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState({
    humanReadableDate: null,
    machineReadableDate: null
  })

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const simplySelectDate = (DD, MM, YYYY) => {
    const dayOfWeek = getDayFromDate(`${DD} ${MM} ${YYYY}`);
    
    const humanReadableDate = `${DD} ${MM} ${YYYY}, ${dayOfWeek}`;
    const machineReadableDate = new Date(`${YYYY}-${MM}-${DD}`).getTime();

    setSelectedDate({
      humanReadableDate: humanReadableDate,
      machineReadableDate: machineReadableDate
    });
  }

  const openDialog = () => setIsDialogOpen(true);

  const closeDialog = () => setIsDialogOpen(false);
  
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  }

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  }

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  }

  const generateCalendarDays = (mon) => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = getDaysInMonth(year, month);    

    let days = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="py-6 border relative"></div>);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(
      <div key={i} className="border cursor-pointer hover:bg-violet-100" onClick={() => simplySelectDate(i, mon, year)}> 
        {i == 2 || i == 19 ? (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="py-4 pl-2">
                  <h1 className="font-semibold w-6 text-center rounded-full bg-violet-700 text-white"> {i} </h1> 
                  <h3 className="text-xs mt-1"> Hover To See </h3>
                </div>
              </TooltipTrigger>
            
              <TooltipContent>
                <div className="p-2 flex flex-col gap-2">
                  <h4 className="text-green-700"> 2 PM Closing </h4>
                  <h4 className="text-violet-700"> 1 AM Contact Out </h4>
                  <h4 className="text-pink-700"> 4 PM  Inspection Ends </h4>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ) : (
          <div className="py-4 pl-2">
            <span className="font-semibold"> {i} </span> 
          </div>
        )}
      </div>
      )
    }

    return days;
  }

  useEffect(() => {
    if (selectedDate.humanReadableDate != null && selectedDate.machineReadableDate != null) {
      openDialog();
    }
  }, [selectedDate])

  return (
    <div>
        <Addnote open={isDialogOpen} selectedDate={selectedDate} closeDialog={closeDialog} setIsDialogOpe={setIsDialogOpen} /> 
        {/* This dialog will only trigger when user will select a particular date */}

        <div className="flex justify-between items-center mb-4">
            <h1 className="flex items-center gap-2 text-lg font-semibold md:text-2xl"> 
              <Calendar color='#c2185b' />
              Schedule Your Tasks 
            </h1>
        </div>

        <div className="flex flex-col items-center my-8 w-full">
          <div className="flex justify-between items-center w-full text-lg font-semibold">
            <Button onClick={handlePrevMonth} size="sm"> 
              <ChevronLeft size={"20px"} />
            </Button>
            
            <div className="text-pink-700">
              <h2> {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()} </h2>
            </div>

            <Button onClick={handleNextMonth} size="sm">
              <ChevronRight size={"20px"} />
            </Button>
          </div>

          <div className="grid grid-cols-7 w-full mt-6">
            {daysOfWeek.map(day => (
              <div key={day} className="flex justify-center items-center text-md font-semibold border py-4"> {day} </div>
            ))}
          </div>

          <div className="grid grid-cols-7 w-full mb-6">
            {generateCalendarDays(currentDate.toLocaleString('default', { month: 'long' }))}
          </div>
        </div>
    </div>
  )
}

export default calender