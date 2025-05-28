'use client'

import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis,
} from 'recharts'
import { formatCurrency } from '@/lib/utils'

const data = [
  {
    name: 'Jan',
    revenue: 18000,
    profit: 5400,
  },
  {
    name: 'Feb',
    revenue: 24500,
    profit: 8200,
  },
  {
    name: 'Mar',
    revenue: 28000,
    profit: 9100,
  },
  {
    name: 'Apr',
    revenue: 32000,
    profit: 11200,
  },
  {
    name: 'May',
    revenue: 36500,
    profit: 14300,
  },
  {
    name: 'Jun',
    revenue: 42000,
    profit: 16800,
  },
  {
    name: 'Jul',
    revenue: 45000,
    profit: 17900,
  },
  {
    name: 'Aug',
    revenue: 48500,
    profit: 19400,
  },
  {
    name: 'Sep',
    revenue: 52000,
    profit: 21500,
  },
  {
    name: 'Oct',
    revenue: 56000,
    profit: 24000,
  },
  {
    name: 'Nov',
    revenue: 58500,
    profit: 25800,
  },
  {
    name: 'Dec',
    revenue: 65000,
    profit: 28500,
  },
]

const yearlyData = data.map(item => ({
  ...item,
  revenue: item.revenue * 1.5,
  profit: item.profit * 1.5,
}))

export function SalesChart() {
  return (
    <Card className="col-span-12">
      <Tabs defaultValue="monthly" className="h-full">
        <div className="flex items-center justify-between p-6">
          <h3 className="text-lg font-semibold">Sales Revenue</h3>
          <TabsList>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="yearly">Yearly</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="monthly" className="px-4 pb-4 pt-1">
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="name" 
                tick={{ fontSize: 12 }}
                axisLine={{ stroke: '#E2E8F0' }}
                tickLine={false}
              />
              <YAxis 
                tickFormatter={(value) => `$${value / 1000}k`}
                tick={{ fontSize: 12 }}
                axisLine={{ stroke: '#E2E8F0' }}
                tickLine={false}
              />
              <CartesianGrid 
                vertical={false}
                stroke="#E2E8F0" 
                strokeDasharray="3 3" 
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                iconType="circle" 
                layout="horizontal" 
                verticalAlign="bottom"
                align="center"
                wrapperStyle={{ paddingTop: '20px' }}
              />
              <Area
                type="monotone"
                dataKey="revenue"
                name="Revenue"
                stroke="hsl(var(--chart-1))"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorRevenue)"
                activeDot={{ r: 6 }}
              />
              <Area
                type="monotone"
                dataKey="profit"
                name="Profit"
                stroke="hsl(var(--chart-2))"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorProfit)"
                activeDot={{ r: 6 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </TabsContent>
        
        <TabsContent value="yearly" className="px-4 pb-4 pt-1">
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={yearlyData}>
              <defs>
                <linearGradient id="colorRevenueYearly" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorProfitYearly" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="name" 
                tick={{ fontSize: 12 }}
                axisLine={{ stroke: '#E2E8F0' }}
                tickLine={false}
              />
              <YAxis 
                tickFormatter={(value) => `$${value / 1000}k`}
                tick={{ fontSize: 12 }}
                axisLine={{ stroke: '#E2E8F0' }}
                tickLine={false}
              />
              <CartesianGrid 
                vertical={false}
                stroke="#E2E8F0" 
                strokeDasharray="3 3" 
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                iconType="circle" 
                layout="horizontal" 
                verticalAlign="bottom" 
                align="center"
                wrapperStyle={{ paddingTop: '20px' }}
              />
              <Area
                type="monotone"
                dataKey="revenue"
                name="Revenue"
                stroke="hsl(var(--chart-1))"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorRevenueYearly)"
                activeDot={{ r: 6 }}
              />
              <Area
                type="monotone"
                dataKey="profit"
                name="Profit"
                stroke="hsl(var(--chart-2))"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorProfitYearly)"
                activeDot={{ r: 6 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </TabsContent>
      </Tabs>
    </Card>
  )
}

const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-slate-800 p-3 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg">
        <p className="text-sm font-medium mb-2">{label}</p>
        {payload.map((entry, index) => (
          <div key={`item-${index}`} className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-sm font-medium">
              {entry.name}: {formatCurrency(entry.value as number)}
            </span>
          </div>
        ))}
      </div>
    )
  }

  return null
}