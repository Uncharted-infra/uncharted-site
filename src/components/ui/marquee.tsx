import { cn } from "@/lib/utils"

export default function Marquee({
  items,
  className,
  itemClassName,
  trackClassName,
}: {
  items: React.ReactNode[]
  className?: string
  itemClassName?: string
  trackClassName?: string
}) {
  return (
    <div
      className={cn(
        "relative flex w-full overflow-x-hidden border-b-2 border-t-2 border-border bg-secondary-background text-foreground font-base",
        className,
      )}
    >
      <div className={cn("animate-marquee whitespace-nowrap py-12", trackClassName)}>
        {items.map((item, i) => {
          return (
            <span key={i} className={cn("mx-4 text-4xl", itemClassName)}>
              {item}
            </span>
          )
        })}
      </div>

      <div className={cn("absolute top-0 animate-marquee2 whitespace-nowrap py-12", trackClassName)}>
        {items.map((item, i) => {
          return (
            <span key={i} className={cn("mx-4 text-4xl", itemClassName)}>
              {item}
            </span>
          )
        })}
      </div>

      {/* must have both of these in order to work */}
    </div>
  )
}
