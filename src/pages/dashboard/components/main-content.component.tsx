import { ChartAreaLinear } from "@/components/chart-area-linear"
import PerformanceIndicator from "@/components/performance-indicator"
// import { ChartLineLinear } from "@/components/chart-line-linear"
import { Button } from "@/components/ui/button"
import { ChevronUp, Ellipsis, History, Sparkles, Upload, Zap } from "lucide-react"

const MainContent = () => {
    return (
        <div className="main-content h-screen border-t border-l rounded-tl-sm p-4 border-gray-600">
            <div className="title-section flex justify-between">
                <div className="title flex gap-2 items-center">
                    <Zap />
                    <h3 className="text-2xl font-semibold">
                        Charging Station
                    </h3>
                </div>
                <div className="actions flex gap-2">
                    <Button variant="ghost"><History /></Button>
                    <Button variant="outline">Edit Variables</Button>
                    <Button variant="ghost"><Upload /></Button>
                </div>
            </div>
            <div className="sub-title-section flex flex-col gap-2 my-8" style={{color: 'var(--pr-green)'}}>
                <div className="title flex justify-between">
                    <div className="flex gap-2 items-center">
                        <Sparkles />
                        <h4 className="text-xl font-semibold">
                            Best Scenario Results
                        </h4>
                    </div>
                    <Button
                        className="rounded-full"
                        variant="outline"
                        size="icon"
                        aria-label="Collapse"
                    >
                        <ChevronUp size={16} aria-hidden="true" />
                    </Button>
                </div>
                <div className="content flex flex-col gap-2">
                    <div className="dark px-4 py-3 rounded-md border" style={{borderColor: 'var(--pr-green)'}}>
                        <div className="flex justify-between items-center text-sm">
                            <p>
                                The best found configuration based on profit is characterized by 11 zones (max) with charging stations and 48 total number of poles.
                            </p>
                            <Button
                                className="rounded-full"
                                variant="outline"
                                size="icon"
                                aria-label="Collapse"
                            >
                                <Ellipsis />
                            </Button>
                        </div>
                    </div>
                    <div className="dark px-4 py-3 rounded-md border" style={{borderColor: 'var(--pr-green)'}}>
                        <div className="flex justify-between items-center text-sm">
                            <p>
                                The best found configuration based on profit is characterized by 11 zones (max) with charging stations and 48 total number of poles.
                            </p>
                            <Button
                                className="rounded-full"
                                variant="outline"
                                size="icon"
                                aria-label="Collapse"
                            >
                                <Ellipsis />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dashboard-info-section">
                <div className="flex gap-8">
                    <div className="graph-section w-3/5">
                        <div className="title mb-4">
                            <h4 className="text-xl font-semibold">
                                Graphs
                            </h4>
                        </div>
                        <div className="content">
                            <ChartAreaLinear />
                            {/* <ChartLineLinear /> */}
                        </div>
                    </div>
                    <div className="performance-indicator-section flex-1">
                        <div className="title mb-4">
                            <h4 className="text-xl font-semibold">
                                Key Performance Indicators
                            </h4>
                        </div>
                        <div className="content grid grid-cols-2 gap-4">
                            <PerformanceIndicator />
                            <PerformanceIndicator />
                            <PerformanceIndicator />
                            <PerformanceIndicator />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainContent