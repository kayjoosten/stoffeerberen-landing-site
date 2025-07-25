import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoProps {
  size?: number
  className?: string
  priority?: boolean
}

const Logo = ({ size = 40, className, priority = false }: LogoProps) => {
  return (
    <div className={cn("relative", className)} style={{ width: size, height: size }}>
      <Image
        src="/logo.png"
        alt="Stoffeerberen Logo - Premium Vloerinstallatie"
        width={size}
        height={size}
        className="object-contain"
        priority={priority}
      />
    </div>
  )
}

export { Logo }