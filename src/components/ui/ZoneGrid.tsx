import { RiAlertLine, RiVirusLine } from "@remixicon/react"

type CellStatus = "healthy-far" | "healthy-close" | "caution" | "infected"

interface ZoneCell {
    row: number
    col: number
    status: CellStatus
}

// Generate a full 16x16 heatmap representing pathogen testing across a field
// Pattern shows clusters of infection spreading from hotspots
const generateHeatmap = (): ZoneCell[] => {
    const cells: ZoneCell[] = []
    const gridSize = 16

    // Define infection hotspots that will influence surrounding cells
    const hotspots = [
        { row: 11, col: 12, intensity: 1 },
        { row: 4, col: 4, intensity: 0.8 },
    ]

    for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
            // Calculate distance to nearest hotspot
            let minDistance = Infinity
            let maxIntensity = 0

            hotspots.forEach(hotspot => {
                const distance = Math.sqrt(
                    Math.pow(row - hotspot.row, 2) + Math.pow(col - hotspot.col, 2)
                )
                if (distance < minDistance) {
                    minDistance = distance
                    maxIntensity = hotspot.intensity
                }
            })

            // Determine status based on distance from hotspots
            let status: CellStatus
            const risk = (maxIntensity * 4) / (minDistance + 1)

            if (risk > 2.5) {
                status = "infected"
            } else if (risk > 1.2) {
                status = "caution"
            } else if (risk > 0.6) {
                status = "healthy-close"
            } else {
                status = "healthy-far"
            }

            cells.push({ row, col, status })
        }
    }

    return cells
}

const heatmapCells = generateHeatmap()

function getCellColor(status: CellStatus): string {
    switch (status) {
        case "healthy-far":
            return "bg-lime-600"
        case "healthy-close":
            return "bg-lime-400"
        case "caution":
            return "bg-amber-500"
        case "infected":
            return "bg-rose-500"
    }
}

function getCellIcon(status: CellStatus) {
    switch (status) {
        case "caution":
            return <RiAlertLine className="size-3 text-amber-900/40" />
        case "infected":
            return <RiVirusLine className="size-3 text-rose-900/40" />
        default:
            return null
    }
}

export function ZoneGrid() {
    const gridSize = 16
    const columnLabels = "ABCDEFGHIJKLMNOP".split("")
    const rowLabels = Array.from({ length: gridSize }, (_, i) => (i + 1).toString())

    return (
        <div className="relative flex items-center justify-center w-full max-w-[480px]">
            {/* Container with axis labels */}
            <div className="relative w-full">
                {/* Top axis labels */}
                <div className="flex items-center pb-1">
                    {/* Empty corner space */}
                    <div className="w-6 shrink-0" />
                    {/* Column labels */}
                    <div className="flex-1 grid grid-cols-16 gap-0">
                        {columnLabels.map((label) => (
                            <div
                                key={label}
                                className="text-center text-xs font-medium text-sage-600"
                            >
                                {label}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Main grid with left axis */}
                <div className="flex items-start">
                    {/* Left axis labels */}
                    <div className="flex flex-col gap-0 w-6 shrink-0 pr-1">
                        {rowLabels.map((label) => (
                            <div
                                key={label}
                                className="flex items-center justify-end text-xs font-medium text-sage-600"
                                style={{ height: `${100 / gridSize}%`, minHeight: '28px' }}
                            >
                                {label}
                            </div>
                        ))}
                    </div>

                    {/* Heatmap grid container */}
                    <div className="relative flex-1 aspect-square rounded-lg overflow-hidden shadow-lg border border-sage-300">
                        <div className="relative w-full h-full grid grid-cols-16 grid-rows-16 gap-0">
                            {/* Render all cells in the heatmap */}
                            {heatmapCells.map((cell, index) => (
                                <div
                                    key={index}
                                    className={`${getCellColor(cell.status)} relative transition-colors duration-300 flex items-center justify-center`}
                                >
                                    {/* Subtle grid texture overlay */}
                                    <div className="absolute inset-0 border-r border-b border-sage-300/20" />
                                    {/* Icon overlay */}
                                    {getCellIcon(cell.status)}
                                </div>
                            ))}

                            {/* Grid lines overlay for map-like appearance */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 432 432"
                                className="absolute inset-0 w-full h-full pointer-events-none"
                                preserveAspectRatio="none"
                            >
                                <path
                                    className="stroke-sage-400/30"
                                    strokeWidth="1"
                                    d="M27 0v432M54 0v432M81 0v432M108 0v432M135 0v432M162 0v432M189 0v432M216 0v432M243 0v432M270 0v432M297 0v432M324 0v432M351 0v432M378 0v432M405 0v432M0 27h432M0 54h432M0 81h432M0 108h432M0 135h432M0 162h432M0 189h432M0 216h432M0 243h432M0 270h432M0 297h432M0 324h432M0 351h432M0 378h432M0 405h432"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
