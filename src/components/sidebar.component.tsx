import { Bell, CalendarClock, CircleUserRound, CloudUpload, House, Menu, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"

const Sidebar = () => {
    return (
        <div className="sidebar flex flex-col p-4 justify-between">
            <div className="upper-section flex flex-col gap-4">
                <Button variant="ghost"><Menu /></Button>
                <Button variant="ghost"><House /></Button>
                <Button variant="ghost"><Bell /></Button>
                <Button variant="ghost"><CalendarClock /></Button>
                <Button variant="ghost"><CloudUpload /></Button>
                <Button variant="ghost"><Settings /></Button>
            </div>
            <div className="lower-section">
                <Button variant="ghost"><CircleUserRound /></Button>
            </div>
        </div>
    )
}

export default Sidebar