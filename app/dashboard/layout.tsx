"use client"

import { useState } from "react"
import { useSession, signOut } from "next-auth/react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import {
  Mail,
  Sun,
  Moon,
  Menu,
  LayoutDashboard,
  Settings,
  Users,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string
    title: string
    icon: React.ReactNode
    variant: "default" | "ghost"
  }[]
  isCollapsed: boolean
}

function SidebarNav({ className, items, isCollapsed, ...props }: SidebarNavProps) {
  const pathname = usePathname()

  return (
    <TooltipProvider delayDuration={0}>
      <nav className={cn("flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1", className)} {...props}>
        {items.map((item) => (
          <Tooltip key={item.href} delayDuration={0}>
            <TooltipTrigger asChild>
              <Link
                href={item.href}
                className={cn(
                  "flex items-center justify-start rounded-md p-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  pathname === item.href ? "bg-accent text-accent-foreground" : "transparent",
                  item.variant === "default" ? "text-foreground" : "text-muted-foreground",
                  isCollapsed ? "w-10 h-10 justify-center" : "w-full px-3"
                )}
              >
                {item.icon}
                {!isCollapsed && <span className="ml-2">{item.title}</span>}
              </Link>
            </TooltipTrigger>
            {isCollapsed && (
              <TooltipContent side="right" className="flex items-center gap-4">
                {item.title}
              </TooltipContent>
            )}
          </Tooltip>
        ))}
        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>
            <button
              onClick={() => signOut()}
              className={cn(
                "flex items-center rounded-md p-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground text-muted-foreground",
                isCollapsed ? "w-10 h-10 justify-center" : "w-full px-3"
              )}
            >
              <LogOut className="h-4 w-4" />
              {!isCollapsed && <span className="ml-2">Sign out</span>}
            </button>
          </TooltipTrigger>
          {isCollapsed && (
            <TooltipContent side="right">Sign out</TooltipContent>
          )}
        </Tooltip>
      </nav>
    </TooltipProvider>
  )
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { data: session } = useSession()
  const { setTheme } = useTheme()
  const [isCollapsed, setIsCollapsed] = useState(false)

  const navItems = [
    {
      href: "/dashboard",
      title: "Dashboard",
      icon: <LayoutDashboard className="h-4 w-4" />,
      variant: "default" as const,
    },
    {
      href: "/dashboard/#",
      title: "Signatures",
      icon: <Mail className="h-4 w-4" />,
      variant: "ghost" as const,
    },
    {
      href: "/dashboard/#",
      title: "Settings",
      icon: <Settings className="h-4 w-4" />,
      variant: "ghost" as const,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4">
          <div className="h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-64">
                  <SheetHeader className="border-b pb-4 mb-4">
                    <SheetTitle className="flex items-center gap-2">
                      <Mail className="h-5 w-5" />
                      SignatureCraft
                    </SheetTitle>
                  </SheetHeader>
                  <SidebarNav items={navItems} isCollapsed={false} />
                </SheetContent>
              </Sheet>
              <Link href="/dashboard" className="flex items-center gap-2 font-semibold text-xl">
                <Mail className="h-6 w-6" />
                <span>SignatureCraft</span>
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4">
        <div className="flex gap-8">
          {/* Sidebar - Hidden on mobile */}
          <aside className={cn(
            "hidden lg:flex flex-col gap-6 pt-8 border-r transition-all duration-300",
            isCollapsed ? "w-[68px]" : "w-64"
          )}>
            <div className="px-3 py-2">
              <Button
                variant="ghost"
                className="w-full justify-start"
                size="sm"
                onClick={() => setIsCollapsed(!isCollapsed)}
              >
                {isCollapsed ? (
                  <ChevronRight className="h-4 w-4" />
                ) : (
                  <div className="flex w-full items-center justify-between">
                    <span className="text-sm">Collapse</span>
                    <ChevronLeft className="h-4 w-4" />
                  </div>
                )}
              </Button>
            </div>
            <SidebarNav items={navItems} isCollapsed={isCollapsed} />
          </aside>

          {/* Main Content */}
          <main className="flex-1 py-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}