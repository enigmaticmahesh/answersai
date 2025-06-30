import { formatCurrency } from "@/lib/utils"
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { CircleQuestionMark } from "lucide-react"

const PerformanceIndicator = () => {
    return (
      <Card className="@container/card">
        <CardHeader>
          <CardTitle className="text-base font-medium tabular-nums @[250px]/card:text-3xl">
            Infrastructure Units
          </CardTitle>
          <CardDescription>This describes variable two and what the shown data means</CardDescription>
          <CardAction>
            <CircleQuestionMark size={16} />
          </CardAction>
        </CardHeader>
        {/* <CardFooter className="flex-col items-start gap-1.5 text-sm"> */}
        <CardFooter className="ml-auto text-2xl font-semibold">
          {formatCurrency(421.07)}
        </CardFooter>
      </Card>
    )
}

export default PerformanceIndicator