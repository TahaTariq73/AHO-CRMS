import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogOverlay,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { capitalizeFirstLetter } from "../kpis/allKpis/AllKpis"
import { Input } from "@/components/ui/input"

const Addnote = ({ open, selectedDate, closeDialog, setIsDialogOpen}) => {
  const [taskType, setTaskType] = useState(null);

  useEffect(() => {
    if (taskType != null) {

    }
  }, [taskType])

  return (
    <Dialog open={open} onOpenChange={setIsDialogOpen} className="">
      <DialogTrigger asChild>
        <Button variant="outline" style={{ display: "none" }}> 
            Edit
        </Button>
      </DialogTrigger>
      
      <DialogContent className="max-w-[425px] w-[96vw] m-auto" onClick={() => closeDialog()}>
        <DialogHeader>
          <DialogTitle> What happened on {selectedDate.humanReadableDate} </DialogTitle>

          <DialogDescription>
            Please select the task from the options below. Time will be automatically selected
          </DialogDescription>
        </DialogHeader>

        <div className="flex gap-4 sm:py-4 py-2">
          <Select onValueChange={(value) => setTaskType(value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={capitalizeFirstLetter(taskType == null ? "Call Back" : taskType)} />
            </SelectTrigger>

            <SelectContent>
              <SelectGroup>
                <SelectItem className="text-blue-700" value="Call-Back" > Call Back </SelectItem>
                <SelectItem className="text-yellow-700" value="Offer-Made"> Offer Made </SelectItem>
                <SelectItem className="text-orange-700" value="Negotiate-Offer"> Negotiate Offer </SelectItem>
                <SelectItem className="text-violet-700" value="Contract-Out" > Contract Out </SelectItem>
                <SelectItem className="text-purple-700" value="Follow-Ups"> Follow Ups </SelectItem>
                <SelectItem className="text-red-700" value="Not-Interested"> Not Interested </SelectItem>
                <SelectItem className="text-pink-700" value="Inspection-Ends"> Inspection Ends </SelectItem>
                <SelectItem className="text-green-700" value="Closing"> Closing </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <DialogFooter>
          <Button type="submit"> Done </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>

  )
}

export default Addnote