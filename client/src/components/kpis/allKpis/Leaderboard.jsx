import React, { useState } from 'react'
import { Trophy } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { capitalizeFirstLetter } from "./AllKpis"
import data from './Leaderboarddata';

const Stats = ({ onBasis }) => {
  if (onBasis == "daily") {
    return (
      <>
        {data["dailyBasis"].map((place, index) => (
          <div className={`flex items-center justify-between ${place.place == "1st" ? "text-pink-700" : ""} `}>
            <span> {place.place} Place: {place.agent.agentName} </span>
            <span> Agent #{place.agent.agentNo} </span>
          </div>
        ))}
      </>
    )
  } else if (onBasis == "weekly") {
    return (
      <>
        {data["weeklyBasis"].map((place, index) => (
          <div className={`flex items-center justify-between ${place.place == "1st" ? "text-pink-700" : ""} `}>            
            <span> {place.place} Place: {place.agent.agentName} </span>
            <span> Agent #{place.agent.agentNo} </span>
          </div>
        ))}
      </>
    )
  } else if (onBasis == "monthly") {
    return (
      <>
        {data["monthlyBasis"].map((place, index) => (
          <div className={`flex items-center justify-between ${place.place == "1st" ? "text-pink-700" : ""} `}>
            <span> {place.place} Place: {place.agent.agentName} </span>
            <span> Agent #{place.agent.agentNo} </span>
          </div>
        ))}
      </>
    )
  }
}

const Leaderboard = () => {
  const [onBasis, setOnBasis] = useState("weekly");

  return (
    <div> 
      <div className="flex  justify-between items-center mb-4">
          <h1 className="flex items-center gap-2 text-lg font-semibold md:text-2xl"> 
            <Trophy color='#c2185b' /> Leaderboard 
          </h1>

          <Select onValueChange={(val) => setOnBasis(val)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder={capitalizeFirstLetter(onBasis)} />
            </SelectTrigger>

            <SelectContent>
              <SelectGroup>
                <SelectItem value="daily" > Daily </SelectItem>
                <SelectItem value="weekly"> Weekly </SelectItem>
                <SelectItem value="monthly"> Monthly </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
      </div>
        
      <div
          className="flex items-center rounded-lg border border-dashed w-full bg-gray-200"
      >
        <div className="w-full flex flex-col text-lg font-semibold py-6 px-4 gap-3">
          <Stats onBasis={onBasis} />

          {/* <div className="flex items-center justify-between text-pink-700">
            <span> 1st Place: Taha </span>
            <span> Agent #2 </span>
          </div>

          <div className="flex items-center justify-between">
            <span> 2nd Place: Mari </span>
            <span> Agent #3 </span>
          </div>

          <div className="flex items-center justify-between">
            <span> 3rd Place: Jackson </span>
            <span> Agent #1 </span>
          </div>

          <div className="flex items-center justify-between">
            <span> 4th Place: William </span>
            <span> Agent 4 </span>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Leaderboard