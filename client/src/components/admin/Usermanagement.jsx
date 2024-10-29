import React from 'react'
import { Trash, Calendar, ChevronRight, ChevronLeft } from "lucide-react"
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
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import users from './Userdata'

const Usermanagement = () => {
  return (
    <div className="">
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center mb-4">
            <h1 className="text-lg font-semibold md:text-2xl"> User Management </h1>

            <div className="w-full sm:w-96">
                <Input placeholder="Search ..." />
            </div>
        </div>
          
        <div
            className="flex flex-col max-w-[92vw] items-center rounded-lg border w-full"
        > 
            <Table className="">
                <TableHeader> 
                    <TableRow>
                        <TableHead> Select </TableHead>
                        <TableHead> Agent </TableHead>
                        <TableHead> Phone </TableHead>
                        <TableHead> Email </TableHead>
                        <TableHead> Change Role </TableHead>
                        <TableHead> Delete </TableHead>
                        <TableHead> Access Schedule </TableHead>
                    </TableRow> 
                </TableHeader>
                                
                <TableBody>
                    {users.map(user => (
                            <TableRow >
                                <TableCell> <Checkbox /> </TableCell>
                                <TableCell> {user.name} </TableCell>
                                <TableCell className="font-semibold text-pink-700"> {user.phone} </TableCell>
                                <TableCell> {user.email} </TableCell>
                                
                                <TableCell> 
                                <Select onValueChange={(value) => console.log(value)}>
                                    <SelectTrigger className="w-[180px] h-8">
                                        <SelectValue placeholder={user.role} />
                                    </SelectTrigger>

                                    <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="Acquisition Agent" > Acquisition Agent </SelectItem>
                                        <SelectItem value="Disposition Agent"> Disposition Agent </SelectItem>
                                        <SelectItem value="Transaction Agent"> Transaction Agent </SelectItem>
                                    </SelectGroup>
                                    </SelectContent>
                                </Select> 
                                </TableCell>
                                
                                <TableCell> 
                                    <Button variant="destructive" size="xs" className="flex gap-1"> <Trash size="16px" /> Delete </Button> 
                                </TableCell>

                                <TableCell> 
                                    <Button variant="secondary" size="xs" className="flex gap-2"> <Calendar size="16px" /> Schedule </Button> 
                                </TableCell>
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

export default Usermanagement