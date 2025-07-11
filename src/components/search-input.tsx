import { useId } from "react"
import { Search } from "lucide-react"

import { Input } from "@/components/ui/input"

export default function SearchInput() {
  const id = useId()
  return (
    <div className="*:not-first:mt-2">
      <div className="relative">
        <Input id={id} className="peer ps-9" placeholder="Search" type="text" />
        <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
          <Search size={16} aria-hidden="true" />
        </div>
      </div>
    </div>
  )
}
