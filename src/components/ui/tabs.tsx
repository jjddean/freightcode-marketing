"use client";

import * as React from "react"

const Tabs = ({ children, defaultValue, className }: { children: React.ReactNode, defaultValue: string, className?: string }) => {
    const [activeTab, setActiveTab] = React.useState(defaultValue)

    return (
        <div className={className}>
            {React.Children.map(children, child => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child as React.ReactElement<any>, { activeTab, setActiveTab })
                }
                return child
            })}
        </div>
    )
}

const TabsList = ({ children, className, activeTab, setActiveTab }: { children: React.ReactNode, className?: string, activeTab?: string, setActiveTab?: (v: string) => void }) => (
    <div className={className}>
        {React.Children.map(children, child => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child as React.ReactElement<any>, { activeTab, setActiveTab })
            }
            return child
        })}
    </div>
)

const TabsTrigger = ({ value, children, className, activeTab, setActiveTab }: { value: string, children: React.ReactNode, className?: string, activeTab?: string, setActiveTab?: (v: string) => void }) => {
    const isActive = activeTab === value
    return (
        <button
            onClick={() => setActiveTab?.(value)}
            className={`${className}`}
            data-state={isActive ? "active" : "inactive"}
        >
            {children}
        </button>
    )
}

const TabsContent = ({ value, children, className, activeTab }: { value: string, children: React.ReactNode, className?: string, activeTab?: string }) => {
    if (activeTab !== value) return null
    return <div className={className}>{children}</div>
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
