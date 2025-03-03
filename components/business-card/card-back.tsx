import { ChevronRight, Cross } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CardBackProps {
  onFlip: () => void
}

export function CardBack({ onFlip }: CardBackProps) {
  return (
    <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-8">
      <Cross className="w-12 h-12 mb-8 text-[#91712a] dark:text-[#e7bd5f]" aria-hidden="true" />
      <blockquote
        className={cn(
          "text-2xl font-light leading-relaxed mb-6",
          "text-zinc-800 dark:text-white",
          "font-montserrat",
          "[text-shadow:0_1px_2px_rgba(145,113,42,0.2)]",
        )}
      >
        "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have
        eternal life."
      </blockquote>
      <cite className={cn("text-sm", "text-[#91712a] dark:text-[#e7bd5f]", "font-montserrat font-medium mb-8")}>
        John 3:16
      </cite>
      <Button
        variant="ghost"
        className={cn(
          "text-xs",
          "text-[#91712a] dark:text-[#e7bd5f]",
          "hover:text-[#e7bd5f] dark:hover:text-[#91712a]",
          "group mt-4",
          "font-montserrat",
        )}
        onClick={onFlip}
      >
        Return to Front
        <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
      </Button>
    </div>
  )
}
