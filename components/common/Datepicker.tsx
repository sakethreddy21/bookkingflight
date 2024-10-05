"use client"

import * as React from "react"
import { format, isBefore } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"

export function DatePicker({ text, selectedDate, setSelectedDate, departureDate }: any) {
  // Initialize date with 'undefined' to comply with the selected prop type
  const [date, setDate] = React.useState<Date | undefined>(selectedDate)
  const [popoverOpen, setPopoverOpen] = React.useState(false)  // Control popover open state

  const today = new Date()

  // When the date changes, pass it to the parent component
  React.useEffect(() => {
    setSelectedDate(date)
  }, [date, setSelectedDate])

  // Disable dates before today
  const isDisabled = (date: Date) => {
    // For "Return" date: disable dates before departure and today
    if (text === 'Return' && departureDate) {
      return isBefore(date, today) || isBefore(date, departureDate)
    }

    // For "Departure" date: disable dates before today
    return isBefore(date, today)
  }

  // Handle date selection and close popover
  const handleSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate)
    setPopoverOpen(false)  // Close popover on date select
  }

  return (
    <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[210px] h-[60px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
          onClick={() => setPopoverOpen(true)}  // Open the popover on click
        >
          <CalendarIcon color="#C9CACC" className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>{text}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}  // Now it accepts 'undefined' without errors
          onSelect={handleSelect}  // Close popover on date selection
          initialFocus
          disabled={isDisabled} // Disable past dates and illogical return dates
        />
      </PopoverContent>
    </Popover>
  )
}
