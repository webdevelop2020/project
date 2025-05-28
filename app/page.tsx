import { ShoppingCart, CreditCard, Package, Users } from 'lucide-react'
import { StatCard } from '@/components/dashboard/stat-card'
import { SalesChart } from '@/components/dashboard/sales-chart'
import { ProductsTable } from '@/components/dashboard/products-table'
import { RecentOrders } from '@/components/dashboard/recent-orders'

export default function Home() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Revenue"
          value="$45,231.89"
          icon={<CreditCard className="h-6 w-6" />}
          trend={{ value: "12.5%", isPositive: true }}
        />
        <StatCard
          title="Total Orders"
          value="4,320"
          icon={<ShoppingCart className="h-6 w-6" />}
          trend={{ value: "8.2%", isPositive: true }}
        />
        <StatCard
          title="Total Products"
          value="892"
          icon={<Package className="h-6 w-6" />}
          trend={{ value: "1.2%", isPositive: false }}
        />
        <StatCard
          title="Total Users"
          value="12,340"
          icon={<Users className="h-6 w-6" />}
          trend={{ value: "4.6%", isPositive: true }}
        />
      </div>
      
      <div className="grid grid-cols-12 gap-6">
        <SalesChart />
      </div>
      
      <div className="grid grid-cols-12 gap-6">
        <ProductsTable />
        <RecentOrders />
      </div>
    </div>
  )
}