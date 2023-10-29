"use client"
import { usePathname } from "next/navigation"
import { useMemo } from "react"
import { HiHome } from "react-icons/hi"
import { BiSearch } from "react-icons/bi"

interface SidebarProps {
    children: React.ReactNode
}

const Siderbar: React.FC<SidebarProps> = ({ children }) => {

    const pathname = usePathname()

    const routes = useMemo(() => [
        {
            icon: HiHome,
            label: 'Home',
            active: pathname !== '/search',
            href: '/'
        },
        {
            icon: BiSearch,
            label: 'Search',
            active: pathname === '/search',
            href: '/search'
        }
    ], [])

    return (
        <div>
            Sidebar!
        </div>
    )
}

export default Siderbar
