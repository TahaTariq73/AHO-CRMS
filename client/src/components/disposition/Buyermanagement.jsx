import React from 'react'
import { Coins, Plus, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
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
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import buyers from "./Buyerdata"

const Buyermanagement = () => {
  return (
    <div className='w-full'>
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between gap-4 items-start mb-4">
            <h1 className="text-lg font-semibold md:text-2xl"> Send SMS To Buyers </h1>

            <div className="flex w-full sm:w-auto gap-4">
                <Input placeholder="Search ..." />

                <Button variant="pink">
                    <Plus /> <span className="ml-2"> Add </span>
                </Button>
            </div>
        </div>
          
        <div
            className="flex flex-col items-center rounded-lg border border-dashed w-full"
        > 
        <div
            className="flex flex-col max-w-[92vw] items-center rounded-lg border w-full"
        > 
            <Table className="">
                <TableHeader> 
                    <TableRow>
                        <TableHead> Select </TableHead>
                        <TableHead> Name </TableHead>
                        <TableHead> Phone </TableHead>
                        <TableHead> Email </TableHead>
                        <TableHead> City </TableHead>
                        <TableHead> Status </TableHead>
                        <TableHead> ZIP </TableHead>
                        <TableHead> Price </TableHead>
                        <TableHead> Property Type </TableHead>
                        <TableHead> Investment strategy </TableHead>
                    </TableRow> 
                </TableHeader>
                                
                <TableBody>
                    {buyers.map(buyer => (
                        <TableRow >
                            <TableCell> <Checkbox />
                            </TableCell>

                            <TableCell> {buyer.name} </TableCell>
                            <TableCell className="font-semibold text-pink-700"> {buyer.phone} </TableCell>
                            <TableCell> {buyer.email} </TableCell>
                            <TableCell> {buyer.city} </TableCell>
                            <TableCell> {buyer.status} </TableCell>
                            <TableCell> {buyer.ZIPS} </TableCell>
                            <TableCell> {buyer.price} </TableCell>
                            <TableCell className="font-semibold text-violet-700"> {buyer.propertyType} </TableCell>
                            <TableCell className="font-semibold text-violet-700"> {buyer.investmentStrategy} </TableCell>
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
    </div>
  )
}

export default Buyermanagement