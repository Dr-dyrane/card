"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Montserrat } from "next/font/google"
import { CardFront } from "@/components/business-card/card-front"
import { CardBack } from "@/components/business-card/card-back"
import { Controls } from "@/components/business-card/controls"
import { PrintVersion } from "@/components/business-card/print-version"
import { AnimatedBackground } from "@/components/business-card/animated-background"



const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-montserrat",
})

export default function BusinessCard() {
    const [isFlipped, setIsFlipped] = useState(false)
    const [isPrintMode, setIsPrintMode] = useState(false)
    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true), [])

    // Handle print functionality
    const handlePrint = () => {
        setIsPrintMode(true)
        setTimeout(() => {
            window.print()
            setTimeout(() => setIsPrintMode(false), 500)
        }, 100)
    }

    // Handle download as image
    const handleDownload = async () => {
        try {
            const element = document.getElementById("card-content")
            if (!element) return

            const html2canvas = (await import("html2canvas")).default
            const canvas = await html2canvas(element, {
                backgroundColor: null,
                scale: 2,
            })

            const link = document.createElement("a")
            link.download = "pastor-enoch-business-card.png"
            link.href = canvas.toDataURL("image/png")
            link.click()
        } catch (err) {
            console.error("Error generating image:", err)
        }
    }

    // Handle share functionality
    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: "Pastor Enoch Olajide J. - Digital Business Card",
                    url: window.location.href,
                })
            } catch (error) {
                console.error("Error sharing:", error)
            }
        } else {
            navigator.clipboard
                .writeText(window.location.href)
                .then(() => alert("Link copied to clipboard!"))
                .catch((err) => console.error("Failed to copy:", err))
        }
    }

    if (!mounted) return null

    return (
        <div
            className={cn(
                montserrat.variable,
                "min-h-screen text-zinc-900 dark:text-white",
                "flex flex-col items-center justify-center p-4 sm:p-8",
                "transition-colors duration-700 relative overflow-hidden",
            )}
        >
            {/* Animated Background */}
            <AnimatedBackground />

            {/* Controls */}
            {!isPrintMode && <Controls onPrint={handlePrint} onDownload={handleDownload} onShare={handleShare} />}

            {/* Card Container with enhanced shadow */}
            <div className={cn("relative w-full max-w-3xl perspective-1000", isPrintMode ? "print-card" : "")}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={isFlipped ? "back" : "front"}

                        exit={{ opacity: 0, rotateY: isFlipped ? 0 : 180 }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                        }}
                        style={{
                            transformStyle: "preserve-3d",
                        }}
                        className="relative"
                    >
                        <Card
                            className={cn(
                                "bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-2xl overflow-hidden",
                                "border border-[#91712a]/20 dark:border-[#91712a]/10",
                                "shadow-[0_8px_32px_rgba(145,113,42,0.2)]",
                                "transition-colors duration-700",
                                // Enhanced glow effect
                                "hover:shadow-[0_0_30px_rgba(145,113,42,0.3)]",
                                "dark:hover:shadow-[0_0_30px_rgba(231,189,95,0.2)]",
                                "transition-shadow duration-500",
                            )}
                        >
                            <div id="card-content" className="relative p-8 sm:p-12">
                                {!isFlipped ? (
                                    <CardFront onFlip={() => setIsFlipped(true)} />
                                ) : (
                                    <CardBack onFlip={() => setIsFlipped(false)} />
                                )}
                            </div>
                        </Card>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Print version */}
            {isPrintMode && <PrintVersion />}
        </div>
    )
}
