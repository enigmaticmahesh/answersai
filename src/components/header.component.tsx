import { Button } from "@/components/ui/button"
import SearchInput from "./search-input"

const Header = () => {
    return (
        <div className="header p-4 flex justify-between">
            <div className="menu-container flex gap-4">
                <Button variant="outline">Charging Stations</Button>
                <Button variant="outline">Fleet Sizing</Button>
                <Button variant="outline">Parking</Button>
            </div>
            <div className="search-container">
                <SearchInput />
            </div>
        </div>
    )
}

export default Header