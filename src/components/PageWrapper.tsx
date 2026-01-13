import React from "react"

interface PageWrapperProps {
  children: React.ReactNode
  className?: string
}

export function PageWrapper({ children, className = "" }: PageWrapperProps) {
  return (
    <main className={`relative mx-auto flex flex-col px-4 xl:px-0 ${className}`}>
      <div className="pt-32 pb-16 max-w-6xl mx-auto w-full">{children}</div>
    </main>
  )
}
