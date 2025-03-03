import { QRCodeSVG } from "qrcode.react"
import { ChevronRight, Cross, Mail, Globe, Phone, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CardFrontProps {
  onFlip: () => void
}

const contactItems = [
  {
    icon: Phone,
    text: "909-600-1561",
    href: "tel:909-600-1561",
  },
  {
    icon: Mail,
    text: "Bloodofjesusprayer@gmail.com",
    href: "mailto:Bloodofjesusprayer@gmail.com",
  },
  {
    icon: Globe,
    text: "bloodofjesuschurch.org",
    href: "https://bloodofjesuschurch.org",
  },
  {
    icon: MapPin,
    text: "San Bernardino, CA",
    href: "https://maps.google.com/?q=1354 North Mountain View Avenue, San Bernardino, CA 92405",
  },
]

export function CardFront({ onFlip }: CardFrontProps) {
  return (
    <div className="relative z-10">
      {/* Gold Accent Line */}
      <div
        className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#91712a] to-[#e7bd5f] shadow-[0_0_20px_rgba(145,113,42,0.5)]"
        aria-hidden="true"
      />

      {/* Cross Symbol */}
      <div className="absolute top-8 right-8 opacity-[0.03] dark:opacity-[0.07]" aria-hidden="true">
        <Cross className="w-48 h-48" />
      </div>

      {/* Content */}
      <div className="relative z-10 pl-8">
        {/* Header */}
        <div className="space-y-4 mb-12">
          <h2
            className={cn(
              "font-montserrat text-xs font-light tracking-[0.3em]",
              "text-[#91712a] dark:text-[#91712a]",
              "metallic-text",
            )}
          >
            BLOOD OF JESUS CHURCH
          </h2>
          <h1
            className={cn(
              "text-4xl sm:text-5xl font-bold tracking-tight",
              "bg-gradient-to-br from-[#91712a] to-[#e7bd5f]",
              "bg-clip-text text-transparent",
              "font-montserrat",
              "[text-shadow:0_2px_4px_rgba(145,113,42,0.3)]",
            )}
          >
            Pastor Enoch
            <br />
            Olajide J.
          </h1>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
          {contactItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target={item.icon === Globe || item.icon === MapPin ? "_blank" : undefined}
              rel="noopener noreferrer"
              className={cn(
                "group flex items-center space-x-4",
                "text-zinc-600 dark:text-zinc-400",
                "hover:text-[#91712a] dark:hover:text-[#e7bd5f]",
                "transition-colors duration-300",
                "font-montserrat",
              )}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-sm font-medium">{item.text}</span>
              <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-end">
          <div className="relative group">
            <div
              className="absolute inset-0 bg-gradient-to-br from-[#91712a] to-[#e7bd5f] rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"
              aria-hidden="true"
            />
            <div className="relative bg-white/5 backdrop-blur-xl rounded-lg p-4">
              <QRCodeSVG
                value="https://bloodofjesuschurch.org"
                size={80}
                bgColor={"transparent"}
                fgColor={"currentColor"}
                level={"L"}
                includeMargin={false}
                className="text-[#91712a] dark:text-[#e7bd5f]"
              />
            </div>
          </div>
          <Button
            variant="ghost"
            className={cn(
              "text-xs",
              "text-[#91712a] dark:text-[#e7bd5f]",
              "hover:text-[#e7bd5f] dark:hover:text-[#91712a]",
              "group transition-colors duration-300",
              "font-montserrat",
            )}
            onClick={onFlip}
          >
            View Scripture
            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </div>
  )
}
