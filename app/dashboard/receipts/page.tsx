'use client'

import { useState } from 'react'
import { Search, Download, Trash2, PenLine } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface User {
  id: number
  name: string
  email: string
  position: string
  salary: number
  office: string
  status: 'Hired' | 'In Progress' | 'Pending'
}

const users: User[] = [
  {
    id: 1,
    name: 'Lindsey Curtis',
    email: 'demoemail@gmail.com',
    position: 'Sales Assistant',
    salary: 89500,
    office: 'Edinburgh',
    status: 'Hired'
  },
  {
    id: 2,
    name: 'Kaiya George',
    email: 'demoemail@gmail.com',
    position: 'Chief Executive Officer',
    salary: 105000,
    office: 'London',
    status: 'In Progress'
  },
  {
    id: 3,
    name: 'Zain Geidt',
    email: 'demoemail@gmail.com',
    position: 'Junior Technical Author',
    salary: 120000,
    office: 'San Francisco',
    status: 'In Progress'
  },
  {
    id: 4,
    name: 'Abram Schleifer',
    email: 'demoemail@gmail.com',
    position: 'Software Engineer',
    salary: 95000,
    office: 'New York',
    status: 'Hired'
  },
  {
    id: 5,
    name: 'Carla George',
    email: 'demoemail@gmail.com',
    position: 'Integration Specialist',
    salary: 80000,
    office: 'Chicago',
    status: 'Pending'
  }
]

export default function ReceiptsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [entriesPerPage, setEntriesPerPage] = useState('5')

  return (
    <div className="rounded-lg border border-[#2E3A4D] bg-[#0F1824]">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-6">Receipts</h3>
        <p className="text-sm font-light text-[#8A99AF] mb-6">All Entries are shows here...</p>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="text-sm text-[#8A99AF]">Show</span>
            <Select
              value={entriesPerPage}
              onValueChange={setEntriesPerPage}
            >
              <SelectTrigger className="w-[70px] bg-[#1C2434] border-[#2E3A4D] text-white rounded-lg">
                <SelectValue placeholder="5" />
              </SelectTrigger>
              <SelectContent className="bg-[#1C2434] border-[#2E3A4D] rounded-lg">
                <SelectItem value="5" className="text-white hover:bg-[#2E3A4D]">5</SelectItem>
                <SelectItem value="10" className="text-white hover:bg-[#2E3A4D]">10</SelectItem>
                <SelectItem value="20" className="text-white hover:bg-[#2E3A4D]">20</SelectItem>
              </SelectContent>
            </Select>
            <span className="text-sm text-[#8A99AF]">entries</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-[240px] pl-9 bg-[#1C2434] border-[#2E3A4D] text-white placeholder:text-[#8A99AF] rounded-lg"
              />
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-[#8A99AF]" />
            </div>

            <Button variant="outline" size="sm" className="border-[#2E3A4D] text-white hover:bg-[#2E3A4D] rounded-lg">
              <Download className="h-4 w-4" />
              <span className="sr-only">Download</span>
            </Button>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border border-[#2E3A4D]">
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="bg-[#1C2434]">
                  <th className="w-[30px] px-4 py-4 border-r border-[#2E3A4D] first:rounded-tl-lg">
                    <input type="checkbox" className="rounded border-[#2E3A4D]" />
                  </th>
                  <th className="px-4 py-4 text-left border-r border-[#2E3A4D]">
                    <button className="flex items-center gap-1 text-[12px] leading-[18px] font-medium text-[#8A99AF]">
                      User
                    </button>
                  </th>
                  <th className="px-4 py-4 text-left border-r border-[#2E3A4D]">
                    <button className="flex items-center gap-1 text-[12px] leading-[18px] font-medium text-[#8A99AF]">
                      Position
                    </button>
                  </th>
                  <th className="px-4 py-4 text-left border-r border-[#2E3A4D]">
                    <button className="flex items-center gap-1 text-[12px] leading-[18px] font-medium text-[#8A99AF]">
                      Salary
                    </button>
                  </th>
                  <th className="px-4 py-4 text-left border-r border-[#2E3A4D]">
                    <button className="flex items-center gap-1 text-[12px] leading-[18px] font-medium text-[#8A99AF]">
                      Office
                    </button>
                  </th>
                  <th className="px-4 py-4 text-left border-r border-[#2E3A4D]">
                    <button className="flex items-center gap-1 text-[12px] leading-[18px] font-medium text-[#8A99AF]">
                      Status
                    </button>
                  </th>
                  <th className="px-4 py-4 text-left last:rounded-tr-lg">
                    <button className="flex items-center gap-1 text-[12px] leading-[18px] font-medium text-[#8A99AF]">
                      Action
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user.id} className="border-b border-[#2E3A4D] last:border-b-0">
                    <td className="px-4 py-5 border-r border-[#2E3A4D]">
                      <input type="checkbox" className="rounded border-[#2E3A4D]" />
                    </td>
                    <td className="px-4 py-5 border-r border-[#2E3A4D]">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-[#3C50E0] flex items-center justify-center text-white font-medium">
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          <h5 className="text-[14px] leading-[20px] font-normal text-white">{user.name}</h5>
                          <p className="text-[14px] leading-[20px] font-normal text-[#8A99AF]">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-5 border-r border-[#2E3A4D]">
                      <p className="text-[14px] leading-[20px] font-normal text-white">{user.position}</p>
                    </td>
                    <td className="px-4 py-5 border-r border-[#2E3A4D]">
                      <p className="text-[14px] leading-[20px] font-normal text-white">${user.salary.toLocaleString()}</p>
                    </td>
                    <td className="px-4 py-5 border-r border-[#2E3A4D]">
                      <p className="text-[14px] leading-[20px] font-normal text-white">{user.office}</p>
                    </td>
                    <td className="px-4 py-5 border-r border-[#2E3A4D]">
                      <span className={`inline-block rounded-lg px-2.5 py-1 text-[14px] leading-[20px] font-normal ${
                        user.status === 'Hired' ? 'bg-[#02A24C]/10 text-[#02A24C]' :
                        user.status === 'In Progress' ? 'bg-[#F29339]/10 text-[#F29339]' :
                        'bg-[#DC3545]/10 text-[#DC3545]'
                      }`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-4 py-5">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-[#8A99AF] hover:text-white hover:bg-[#2E3A4D] rounded-lg"
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-[#8A99AF] hover:text-white hover:bg-[#2E3A4D] rounded-lg"
                        >
                          <PenLine className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mt-6">
          <p className="text-sm text-[#8A99AF]">
            Showing 1 to 5 of 10 entries
          </p>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              disabled
              className="border-[#2E3A4D] text-[#8A99AF] hover:bg-[#2E3A4D] disabled:opacity-50 rounded-lg"
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="min-w-[36px] border-[#2E3A4D] bg-[#3C50E0] text-white hover:bg-[#3C50E0]/90 rounded-lg"
            >
              1
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="min-w-[36px] border-[#2E3A4D] text-white hover:bg-[#2E3A4D] rounded-lg"
            >
              2
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-[#2E3A4D] text-white hover:bg-[#2E3A4D] rounded-lg"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 