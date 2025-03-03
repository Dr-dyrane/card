"use client"

import { Share2, Download, Printer, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

interface ControlsProps {
  onPrint: () => void
  onDownload: () => void
  onShare: () => void
}

export function Controls({ onPrint, onDownload, onShare }: ControlsProps) {
  const { theme, setTheme } = useTheme()

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="fixed top-4 right-4 flex gap-2 z-10"
    >
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="bg-white/10 backdrop-blur-xl hover:bg-white/20 text-white rounded-full"
        aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      >
        <Sun className="h-4 w-4 dark:hidden" />
        <Moon className="h-4 w-4 hidden dark:block" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={onPrint}
        className="bg-white/10 backdrop-blur-xl hover:bg-white/20 text-white rounded-full"
        aria-label="Print business card"
      >
        <Printer className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={onDownload}
        className="bg-white/10 backdrop-blur-xl hover:bg-white/20 text-white rounded-full"
        aria-label="Download business card"
      >
        <Download className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={onShare}
        className="bg-white/10 backdrop-blur-xl hover:bg-white/20 text-white rounded-full"
        aria-label="Share business card"
      >
        <Share2 className="h-4 w-4" />
      </Button>
    </motion.div>
  )
}
