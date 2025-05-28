import { cn } from '@/lib/utils'
import { Card } from '@/components/ui/card'
import { ArrowDown, ArrowUp } from 'lucide-react'

interface StatCardProps {
  title: string
  value: string
  icon: React.ReactNode
  trend: {
    value: string
    isPositive: boolean
  }
  className?: string
}

export function StatCard({
  title,
  value,
  icon,
  trend,
  className,
}: StatCardProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <div className="flex items-start justify-between p-6">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <h3 className="mt-1 text-2xl font-semibold">{value}</h3>
          <div className="mt-2 flex items-center gap-1">
            <span
              className={cn(
                "flex items-center text-xs font-medium",
                trend.isPositive 
                  ? "text-emerald-600 dark:text-emerald-500" 
                  : "text-rose-600 dark:text-rose-500"
              )}
            >
              {trend.isPositive ? (
                <ArrowUp className="mr-1 h-3 w-3" />
              ) : (
                <ArrowDown className="mr-1 h-3 w-3" />
              )}
              {trend.value}
            </span>
            <span className="text-xs text-muted-foreground">since last month</span>
          </div>
        </div>
        <div className={cn(
          "flex h-12 w-12 items-center justify-center rounded-full",
          "bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400"
        )}>
          {icon}
        </div>
      </div>
    </Card>
  )
}