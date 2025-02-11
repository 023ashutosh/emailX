"use client"

import { useEffect } from "react"
import { useSession } from "next-auth/react"
import Link from "next/link"
import useSWR from "swr"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Skeleton } from "@/components/ui/skeleton"
import { toast } from "sonner"
import { Mail, Plus, MoreVertical, Pencil, Copy, Trash } from "lucide-react"

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function DashboardPage() {
  const { data: session } = useSession()
  const { data: signatures, error, mutate } = useSWR("/api/signatures", fetcher)

  useEffect(() => {
    if (error) {
      toast.error("Failed to load signatures")
    }
  }, [error])

  const handleCopy = async (html: string) => {
    try {
      await navigator.clipboard.writeText(html)
      toast.success("Signature copied to clipboard")
    } catch (error) {
      toast.error("Failed to copy signature")
    }
  }

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/signatures/${id}`, {
        method: "DELETE",
      })

      if (!response.ok) throw new Error("Failed to delete signature")

      mutate()
      toast.success("Signature deleted successfully")
    } catch (error) {
      toast.error("Failed to delete signature")
    }
  }

  if (!signatures) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">My Signatures</h1>
          <Button disabled>
            <Plus className="h-4 w-4 mr-2" />
            New Signature
          </Button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardHeader>
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-24 w-full" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">My Signatures</h1>
        <Link href="/dashboard/new">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Signature
          </Button>
        </Link>
      </div>

      {signatures.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12 text-center">
            <Mail className="h-12 w-12 text-muted-foreground mb-4" />
            <h2 className="text-xl font-semibold mb-2">No signatures yet</h2>
            <p className="text-muted-foreground mb-4">
              Create your first email signature to get started
            </p>
            <Link href="/dashboard/new">
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Create Signature
              </Button>
            </Link>
          </CardContent>
        </Card>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {signatures.map((signature: any) => (
            <Card key={signature.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>{signature.name}</CardTitle>
                    <CardDescription>
                      Created {new Date(signature.createdAt).toLocaleDateString()}
                    </CardDescription>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem asChild>
                        <Link href={`/dashboard/edit/${signature.id}`}>
                          <Pencil className="h-4 w-4 mr-2" />
                          Edit
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleCopy(signature.content)}
                      >
                        <Copy className="h-4 w-4 mr-2" />
                        Copy HTML
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="text-destructive focus:text-destructive"
                        onClick={() => handleDelete(signature.id)}
                      >
                        <Trash className="h-4 w-4 mr-2" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent>
                <div
                  className="prose prose-sm dark:prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: signature.content }}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}