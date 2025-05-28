'use client'

import { useState } from 'react'
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowDownUp, ChevronLeft, ChevronRight } from 'lucide-react'
import { formatCurrency } from '@/lib/utils'

interface Product {
  id: string
  name: string
  category: string
  stock: number
  price: number
  sales: number
}

const productsData: Product[] = [
  { id: 'PROD-1', name: 'Apple Watch Series 7', category: 'Electronics', stock: 345, price: 599, sales: 124 },
  { id: 'PROD-2', name: 'MacBook Pro M2', category: 'Electronics', stock: 87, price: 1999, sales: 49 },
  { id: 'PROD-3', name: 'iPhone 14 Pro Max', category: 'Electronics', stock: 128, price: 1299, sales: 98 },
  { id: 'PROD-4', name: 'AirPods Pro', category: 'Electronics', stock: 432, price: 249, sales: 156 },
  { id: 'PROD-5', name: 'iPad Air 5', category: 'Electronics', stock: 215, price: 599, sales: 67 },
  { id: 'PROD-6', name: 'Smart Home Hub', category: 'Smart Home', stock: 87, price: 199, sales: 42 },
  { id: 'PROD-7', name: 'Wireless Charging Pad', category: 'Accessories', stock: 562, price: 49, sales: 210 },
  { id: 'PROD-8', name: 'Bluetooth Speaker', category: 'Audio', stock: 154, price: 129, sales: 78 },
]

export function ProductsTable() {
  const [currentPage, setCurrentPage] = useState(1)
  const [sortField, setSortField] = useState<keyof Product>('sales')
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc')
  const [itemsPerPage, setItemsPerPage] = useState(5)

  // Sort the data
  const sortedData = [...productsData].sort((a, b) => {
    if (sortDirection === 'asc') {
      return a[sortField] > b[sortField] ? 1 : -1
    } else {
      return a[sortField] < b[sortField] ? 1 : -1
    }
  })

  // Calculate pagination
  const totalPages = Math.ceil(sortedData.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedData = sortedData.slice(startIndex, startIndex + itemsPerPage)

  // Function to toggle sort
  const toggleSort = (field: keyof Product) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortDirection('desc')
    }
  }

  return (
    <Card className="col-span-12 lg:col-span-7">
      <CardHeader className="pb-2">
        <CardTitle>Top Products</CardTitle>
        <CardDescription>
          Best selling products by sales volume
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader className="bg-muted/50">
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="-ml-3 h-8 data-[state=active]:bg-muted"
                  onClick={() => toggleSort('name')}
                >
                  Product Name
                  <ArrowDownUp className="ml-2 h-3.5 w-3.5 text-muted-foreground" />
                </Button>
              </TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-8 data-[state=active]:bg-muted"
                  onClick={() => toggleSort('price')}
                >
                  Price
                  <ArrowDownUp className="ml-2 h-3.5 w-3.5 text-muted-foreground" />
                </Button>
              </TableHead>
              <TableHead className="text-right">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-8 data-[state=active]:bg-muted"
                  onClick={() => toggleSort('sales')}
                >
                  Sales
                  <ArrowDownUp className="ml-2 h-3.5 w-3.5 text-muted-foreground" />
                </Button>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="font-medium">{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>
                  <Badge variant="secondary">{product.category}</Badge>
                </TableCell>
                <TableCell className="text-right">{formatCurrency(product.price)}</TableCell>
                <TableCell className="text-right">{product.sales}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-2">
            <p className="text-sm text-muted-foreground">
              Showing <span className="font-medium">{startIndex + 1}</span> to{" "}
              <span className="font-medium">
                {Math.min(startIndex + itemsPerPage, sortedData.length)}
              </span>{" "}
              of{" "}
              <span className="font-medium">{sortedData.length}</span> entries
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous Page</span>
            </Button>
            {Array.from({ length: Math.min(totalPages, 3) }, (_, i) => {
              let pageNumber = i + 1
              if (totalPages > 3 && currentPage > 2) {
                pageNumber = currentPage - 1 + i
              }
              if (pageNumber > totalPages) return null
              return (
                <Button
                  key={pageNumber}
                  variant={currentPage === pageNumber ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentPage(pageNumber)}
                >
                  {pageNumber}
                </Button>
              )
            })}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next Page</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}