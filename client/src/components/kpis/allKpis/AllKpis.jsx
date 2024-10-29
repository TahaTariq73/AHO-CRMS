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
import data from './Kpisdata'  

export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const AllKpis = () => {
  return (
    <div className='md:row-span-2'> 
        <div className="flex items-center mb-4">
            <h1 className="text-lg font-semibold md:text-2xl"> KPI'S All </h1>
        </div>
          
        <div
            className="flex max-w-[92vw] flex-col items-center rounded-lg border border-dashed w-full"
        >
            {data.map((table, index) => {
                if (table.tableType.toLowerCase() == "acquistions") {
                    return (
                        <div className="w-full">
                            <h1 className="py-2 text-violet-700 px-4 font-semibold"> {capitalizeFirstLetter(table.tableType)} </h1>

                            <Table>
                                <TableHeader> <TableRow>
                                    <TableHead> Agents </TableHead>
                                    <TableHead> Calls </TableHead>
                                    <TableHead> TalkTime </TableHead>
                                    <TableHead className="text-right"> Offers </TableHead>
                                    <TableHead className="text-right"> Deals </TableHead>
                                </TableRow> </TableHeader>
                                
                                <TableBody>
                                    {table.tableData.map((row, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="font-medium"> {row.agentName} </TableCell>
                                        <TableCell> {row.calls} </TableCell>
                                        <TableCell> {row.talkTime} </TableCell>
                                        <TableCell className="text-right"> {row.offers} </TableCell>
                                        <TableCell className="text-right font-medium"> {row.deals} </TableCell>
                                    </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    )
                } else if (table.tableType.toLowerCase() == "dispositions") {
                    return (
                        <div className="w-full">
                            <h1 className="py-2 text-violet-700 px-4 font-semibold"> {capitalizeFirstLetter(table.tableType)} </h1>

                            <Table>
                                <TableHeader> <TableRow>
                                    <TableHead> Agents </TableHead>
                                    <TableHead> Calls </TableHead>
                                    <TableHead> TalkTime </TableHead>
                                    <TableHead className="text-right"> Buyers Added </TableHead>
                                    <TableHead className="text-right"> Deals Sold </TableHead>
                                </TableRow> </TableHeader>
                                
                                <TableBody>
                                    {table.tableData.map((row, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="font-medium"> {row.agentName} </TableCell>
                                        <TableCell> {row.calls} </TableCell>
                                        <TableCell> {row.talkTime} </TableCell>
                                        <TableCell className="text-right"> {row.buyersAdded} </TableCell>
                                        <TableCell className="text-right font-medium"> {row.dealsSold} </TableCell>
                                    </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    )
                } else if (table.tableType.toLowerCase() == "lead manager") {
                    return (
                        <div className="w-full">
                            <h1 className="py-2 text-violet-700 px-4 font-semibold"> {capitalizeFirstLetter(table.tableType)} </h1>

                            <Table>
                                <TableHeader> <TableRow>
                                    <TableHead> Agents </TableHead>
                                    <TableHead> Calls </TableHead>
                                    <TableHead> TalkTime </TableHead>
                                    <TableHead className="text-right"> Leads Set </TableHead>
                                    <TableHead className="text-right"> Leads Transformed </TableHead>
                                </TableRow> </TableHeader>
                                
                                <TableBody>
                                    {table.tableData.map((row, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="font-medium"> {row.agentName} </TableCell>
                                        <TableCell> {row.calls} </TableCell>
                                        <TableCell> {row.talkTime} </TableCell>
                                        <TableCell className="text-right"> {row.leadsSet} </TableCell>
                                        <TableCell className="text-right font-medium"> {row.leadsTransformed} </TableCell>
                                    </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    )
                }
            })}
        </div>
    </div>
  )
}

export default AllKpis