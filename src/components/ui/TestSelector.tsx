"use client"

import { testServices, type TestService } from "@/app/siteConfig"
import { useEffect, useState } from "react"

interface TestSelectorProps {
    onSelect?: (test: TestService) => void
}

export function TestSelector({ onSelect }: TestSelectorProps) {
    const defaultTest = testServices.find((t) => t.isDefault) || testServices[0]
    const [selectedTest, setSelectedTest] = useState<TestService>(defaultTest)

    useEffect(() => {
        if (onSelect) {
            onSelect(selectedTest)
        }
    }, [selectedTest, onSelect])

    return (
        <div className="relative z-10 max-w-2xl mx-auto mb-12">
            <label
                htmlFor="test-selector"
                className="block text-sm font-medium text-sage-900 mb-2"
            >
                Select Test Type
            </label>
            <select
                id="test-selector"
                value={selectedTest.id}
                onChange={(e) => {
                    const test = testServices.find((t) => t.id === e.target.value)
                    if (test) setSelectedTest(test)
                }}
                className="w-full rounded-lg border border-sage-300 bg-white px-4 py-3 text-sage-900 shadow-sm focus:border-lime-500 focus:outline-none focus:ring-2 focus:ring-lime-500/20"
            >
                {testServices.map((test) => (
                    <option key={test.id} value={test.id} disabled={!test.available}>
                        {test.title}
                        {!test.available && " (Coming Soon)"}
                    </option>
                ))}
            </select>

            {/* Display selected test info (no price) */}
            <div className="mt-6 rounded-lg border border-sage-200 bg-cream-50 p-6">
                <div className="flex items-start gap-4">
                    <div className="rounded-full bg-lime-100 p-3">
                        <selectedTest.icon className="size-6 text-lime-600" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-lg font-semibold text-sage-900 mb-2">
                            {selectedTest.title}
                        </h3>
                        <p className="text-sage-700 text-sm">
                            {selectedTest.description}
                        </p>
                        {!selectedTest.available && (
                            <div className="mt-3 inline-block rounded-full bg-sage-100 px-3 py-1 text-xs font-medium text-sage-700">
                                Coming Soon
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
