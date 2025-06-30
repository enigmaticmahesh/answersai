import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { useRef } from "react"
import DemandDD from "./demand-dropdown"

export const description = "A linear area chart"

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    // color: "var(--chart-1)",
    color: "var(--pr-green)",
  },
} satisfies ChartConfig

const customDotProps = { fill: 'black', stroke: 'var(--color-desktop)', strokeWidth: 3, r: 5 }
const CustomActiveDot = (props: any) => {
  const { cx, cy, stroke, r, fill, payload, strokeWidth, containerRef } = props;
  const path = containerRef.current?.querySelector('.recharts-area-area') as SVGPathElement
  const pathBox = path.getBBox()
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} stroke={stroke} fill={fill} strokeWidth={strokeWidth} />
      <line x1={cx} y1={cy + 10} x2={cx} y2={pathBox.height + 15} stroke={stroke} strokeWidth={2} strokeDasharray="5,5" /> {/* Line to x-axis (example) */}
    </g>
  );
};

export function ChartAreaLinear() {
    const containerRef = useRef<HTMLDivElement | null>(null)

    const activeDotProps = {...customDotProps, containerRef }
    return (
            <Card>
                <CardHeader>
                    <CardTitle className="ml-auto">
                        <DemandDD />
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div ref={containerRef}>
                        <ChartContainer config={chartConfig}>
                            <AreaChart
                                accessibilityLayer
                                data={chartData}
                                // data={data}
                                margin={{
                                    left: 12,
                                    right: 12,
                                }}
                            >
                                <CartesianGrid />
                                <XAxis
                                    dataKey="month"
                                    tickLine={false}
                                    // axisLine={false}
                                    tickMargin={8}
                                    tickFormatter={(value) => value.slice(0, 3)}
                                />
                                <YAxis tickLine={false} />
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent indicator="dot" hideLabel />}
                                />
                                <Area
                                    dataKey="desktop"
                                    type="linear"
                                    fill="var(--color-desktop)"
                                    fillOpacity={0}
                                    stroke="var(--color-desktop)"
                                    strokeWidth={3}
                                    activeDot={<CustomActiveDot {...activeDotProps} />}
                                    // onMouseEnter={handleMouseEnter}
                                />
                            </AreaChart>
                        </ChartContainer>
                    </div>
                </CardContent>
                {/* <CardFooter>
                    <div className="flex w-full items-start gap-2 text-sm">
                        <div className="grid gap-2">
                            <div className="flex items-center gap-2 leading-none font-medium">
                            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                            </div>
                            <div className="text-muted-foreground flex items-center gap-2 leading-none">
                            January - June 2024
                            </div>
                        </div>
                    </div>
                </CardFooter> */}
            </Card>
    )
}