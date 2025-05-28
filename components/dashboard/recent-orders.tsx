'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

type OrderStatus = 'completed' | 'pending' | 'cancelled' | 'processing'

interface Order {
  id: string
  customer: string
  date: string
  total: number
  status: OrderStatus
}

const orders: Order[] = [
  {
    id: 'ORD-71234',
    customer: 'John Smith',
    date: '2023-05-15',
    total: 128.99,
    status: 'completed',
  },
  {
    id: 'ORD-51423',
    customer: 'Sarah Johnson',
    date: '2023-05-14',
    total: 89.95,
    status: 'processing',
  },
  {
    id: 'ORD-43567',
    customer: 'Michael Brown',
    date: '2023-05-14',
    total: 249.99,
    status: 'pending',
  },
  {
    id: 'ORD-95412',
    customer: 'Emily Wilson',
    date: '2023-05-13',
    total: 47.50,
    status: 'cancelled',
  },
  {
    id: 'ORD-23456',
    customer: 'David Taylor',
    date: '2023-05-13',
    total: 124.00,
    status: 'completed',
  }
]

export function RecentOrders() {
  return (
    <Card className="col-span-12 lg:col-span-5">
      <CardHeader className="pb-2">
        <CardTitle>Recent Orders</CardTitle>
        <CardDescription>
          Latest customer orders and their status
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader className="bg-muted/50">
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{formatDate(order.date)}</TableCell>
                <TableCell>
                  <OrderStatusBadge status={order.status} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

function OrderStatusBadge({ status }: { status: OrderStatus }) {
  return (
    <Badge
      className={cn(
        "uppercase text-xs font-semibold",
        status === 'completed' && "bg-emerald-100 text-emerald-700 hover:bg-emerald-100 dark:bg-emerald-950 dark:text-emerald-400 dark:hover:bg-emerald-950",
        status === 'processing' && "bg-blue-100 text-blue-700 hover:bg-blue-100 dark:bg-blue-950 dark:text-blue-400 dark:hover:bg-blue-950",
        status === 'pending' && "bg-amber-100 text-amber-700 hover:bg-amber-100 dark:bg-amber-950 dark:text-amber-400 dark:hover:bg-amber-950",
        status === 'cancelled' && "bg-rose-100 text-rose-700 hover:bg-rose-100 dark:bg-rose-950 dark:text-rose-400 dark:hover:bg-rose-950"
      )}
    >
      {status}
    </Badge>
  )
}