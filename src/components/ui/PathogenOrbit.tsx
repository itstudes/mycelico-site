"use client"

import { Orbit } from "@/components/Orbit"

/**
 * Pathogen testing visualization using the Orbit component
 * Shows microscopy/testing equipment orbiting a central element
 */
export function PathogenOrbit() {
    return (
        <div className="pointer-events-none relative flex items-center justify-center select-none">
            <Orbit
                durationSeconds={45}
                radiusPx={120}
                keepUpright
                orbitingObjects={[
                    // Microscope icon
                    <div
                        key="microscope"
                        className="relative flex items-center justify-center"
                    >
                        <svg
                            className="z-10 size-5 text-sage-800"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.5}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                            />
                        </svg>
                        <div className="absolute size-10 rounded-full bg-white/50 ring-1 shadow-lg ring-black/5"></div>
                        <div
                            className="absolute size-10 animate-[ping_8s_ease_infinite] rounded-full ring-1 ring-lime-500/30"
                            style={{ animationDelay: "0s" }}
                        />
                    </div>,

                    // Petri dish / sample icon
                    <div
                        key="sample"
                        className="relative flex items-center justify-center"
                    >
                        <svg
                            className="z-10 size-5 text-sage-800"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.5}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <div className="absolute size-10 rounded-full bg-white/50 ring-1 shadow-lg ring-black/5"></div>
                        <div
                            className="absolute size-10 animate-[ping_8s_ease_infinite] rounded-full ring-1 ring-lime-500/30"
                            style={{ animationDelay: "2s" }}
                        />
                    </div>,

                    // Leaf / plant sample icon
                    <div key="leaf" className="relative flex items-center justify-center">
                        <svg
                            className="z-10 size-5 text-sage-800"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.5}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                            />
                        </svg>
                        <div className="absolute size-10 rounded-full bg-white/50 ring-1 shadow-lg ring-black/5"></div>
                        <div
                            className="absolute size-10 animate-[ping_8s_ease_infinite] rounded-full ring-1 ring-lime-500/30"
                            style={{ animationDelay: "4s" }}
                        />
                    </div>,

                    // Test tube icon
                    <div
                        key="tube"
                        className="relative flex items-center justify-center"
                    >
                        <svg
                            className="z-10 size-5 text-sage-800"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.5}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3"
                            />
                        </svg>
                        <div className="absolute size-10 rounded-full bg-white/50 ring-1 shadow-lg ring-black/5"></div>
                        <div
                            className="absolute size-10 animate-[ping_8s_ease_infinite] rounded-full ring-1 ring-lime-500/30"
                            style={{ animationDelay: "6s" }}
                        />
                    </div>,
                ]}
            >
                {/* Center element - Logo mark */}
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
