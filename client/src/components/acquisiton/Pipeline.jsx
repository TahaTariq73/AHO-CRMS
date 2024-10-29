import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    TableFooter
} from "@/components/ui/table"
import acquisitons from "./Acquisitiondata"
import { Button } from "@/components/ui/button"
import { Headset, ChevronLeft, ChevronRight } from "lucide-react"

const Pipeline = () => {
  return (
    <div className=''>
        <div className="flex justify-between items-center mb-4">
            <h1 className="text-lg font-semibold md:text-2xl"> Acquisition Pipeline </h1>

            <Button variant="violet">
                <Headset /> <span className="ml-2"> Start Calling Now </span>
            </Button>
        </div>
          
        <div
            className="flex flex-col max-w-[92vw] items-center rounded-lg border w-full"
        > 
            <Table className="">
                <TableHeader className="cursor-pointer"> 
                    <TableRow>
                        <TableHead className="hover:bg-violet-100"> New Leads </TableHead>
                        <TableHead className="hover:bg-violet-100"> Call Back </TableHead>
                        <TableHead className="hover:bg-violet-100"> Offer Made </TableHead>
                        <TableHead className="hover:bg-violet-100"> Negotiating Offer </TableHead>
                        <TableHead className="hover:bg-violet-100"> Contracts Out </TableHead>
                        <TableHead className="text-right hover:bg-violet-100"> Follow Ups </TableHead>
                        <TableHead className="text-right hover:bg-violet-100"> Not Interested </TableHead>
                        <TableHead className="text-right hover:bg-violet-100"> DNC </TableHead>
                    </TableRow> 
                </TableHeader>
                                
                <TableBody>
                    {acquisitons.map(acquisiton => (
                        <TableRow >
                            <TableCell className="font-medium text-violet-700"> {acquisiton.newLeads} </TableCell>
                            <TableCell> {acquisiton.callBacks} </TableCell>
                            <TableCell> {acquisiton.offersMade} </TableCell>
                            <TableCell> {acquisiton.negotiatingOffers} </TableCell>
                            <TableCell className="font-medium text-[#BE185D]"> {acquisiton.contractsOut} </TableCell>
                            <TableCell> {acquisiton.followUps} </TableCell>
                            <TableCell> {acquisiton.notInterested} </TableCell>
                            <TableCell> {acquisiton.DNC} </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>

        <div className="flex items-center gap-4 w-full my-4">
            <div className="flex gap-2">
                <Button variant="secondary" size="sm" className="flex gap-1"> 
                    <ChevronLeft />    
                </Button> 

                <Button variant="secondary" size="sm" className="flex gap-1"> 
                    <ChevronRight />    
                </Button> 
            </div>

            <span className="font-semibold">
                1-6 of 6
            </span>
        </div>
    </div>
  )
}

export default Pipeline