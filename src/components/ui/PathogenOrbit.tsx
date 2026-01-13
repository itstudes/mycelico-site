"use client"

import { Orbit } from "@/components/Orbit"
import {
    RiCheckLine,
    RiFlaskLine,
    RiLeafLine,
    RiLineChartLine,
    RiTestTubeLine,
} from "@remixicon/react"

/**
 * Pathogen testing visualization using the Orbit component
 * Shows the testing workflow: Sample → Test → Results → Insights
 */
export function PathogenOrbit() {
    return (
        <div className="pointer-events-none relative flex items-center justify-center select-none">
            <Orbit
                durationSeconds={40}
                radiusPx={130}
                keepUpright
                orbitingObjects={[
                    // Sample collection
                    <div
                        key="sample"
                        className="relative flex items-center justify-center"
                    >
                        <RiLeafLine className="z-10 size-5 text-sage-800" />
                        <div className="absolute size-10 rounded-full bg-white/50 ring-1 shadow-lg ring-black/5"></div>
                        <div className="absolute -top-5 left-4">
                            <div className="flex gap-0.5">
                                <div className="flex items-center justify-center rounded-l-full bg-lime-500 p-1 text-xs ring-1 ring-sage-200">
                                    <RiCheckLine className="size-3 shrink-0 text-white" />
                                </div>
                                <div className="rounded-r-full bg-white/80 py-0.5 pr-1.5 pl-1 text-xs whitespace-nowrap ring-1 ring-sage-200">
                                    Sample
                                </div>
                            </div>
                        </div>
                        <div
                            className="absolute size-10 animate-[ping_8s_ease_infinite] rounded-full ring-1 ring-lime-500/30"
                            style={{ animationDelay: "0s" }}
                        />
                    </div>,

                    // Lab testing
                    <div key="test" className="relative flex items-center justify-center">
                        <RiFlaskLine className="z-10 size-5 text-sage-800" />
                        <div className="absolute size-10 rounded-full bg-white/50 ring-1 shadow-lg ring-black/5"></div>
                        <div className="absolute -top-5 left-4">
                            <div className="flex gap-0.5">
                                <div className="flex items-center justify-center rounded-l-full bg-lavender-500 p-1 text-xs ring-1 ring-sage-200">
                                    <RiCheckLine className="size-3 shrink-0 text-white" />
                                </div>
                                <div className="rounded-r-full bg-white/80 py-0.5 pr-1.5 pl-1 text-xs whitespace-nowrap ring-1 ring-sage-200">
                                    Test
                                </div>
                            </div>
                        </div>
                        <div
                            className="absolute size-10 animate-[ping_8s_ease_infinite] rounded-full ring-1 ring-lime-500/30"
                            style={{ animationDelay: "2s" }}
                        />
                    </div>,

                    // Results
                    <div
                        key="results"
                        className="relative flex items-center justify-center"
                    >
                        <RiTestTubeLine className="z-10 size-5 text-sage-800" />
                        <div className="absolute size-10 rounded-full bg-white/50 ring-1 shadow-lg ring-black/5"></div>
                        <div className="absolute -top-5 left-4">
                            <div className="flex gap-0.5">
                                <div className="flex items-center justify-center rounded-l-full bg-sky-500 p-1 text-xs ring-1 ring-sage-200">
                                    <RiCheckLine className="size-3 shrink-0 text-white" />
                                </div>
                                <div className="rounded-r-full bg-white/80 py-0.5 pr-1.5 pl-1 text-xs whitespace-nowrap ring-1 ring-sage-200">
                                    Results
                                </div>
                            </div>
                        </div>
                        <div
                            className="absolute size-10 animate-[ping_8s_ease_infinite] rounded-full ring-1 ring-lime-500/30"
                            style={{ animationDelay: "4s" }}
                        />
                    </div>,

                    // Actionable insights
                    <div
                        key="insights"
                        className="relative flex items-center justify-center"
                    >
                        <RiLineChartLine className="z-10 size-5 text-sage-800" />
                        <div className="absolute size-10 rounded-full bg-white/50 ring-1 shadow-lg ring-black/5"></div>
                        <div className="absolute -top-5 left-4">
                            <div className="flex gap-0.5">
                                <div className="flex items-center justify-center rounded-l-full bg-sage-500 p-1 text-xs ring-1 ring-sage-200">
                                    <RiCheckLine className="size-3 shrink-0 text-white" />
                                </div>
                                <div className="rounded-r-full bg-white/80 py-0.5 pr-1.5 pl-1 text-xs whitespace-nowrap ring-1 ring-sage-200">
                                    Insights
                                </div>
                            </div>
                        </div>
                        <div
                            className="absolute size-10 animate-[ping_8s_ease_infinite] rounded-full ring-1 ring-lime-500/30"
                            style={{ animationDelay: "6s" }}
                        />
                    </div>,
                ]}
            >
                {/* Center element - Mycelico logo mark */}
                <div className="relative flex items-center justify-center">
                    <div className="absolute size-16 rounded-full bg-lime-100/80 ring-1 ring-lime-200"></div>
                    <svg
                        className="relative z-10 size-8 text-lime-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
                        />
                    </svg>
                </div>
            </Orbit>
        </div>
    )
}
