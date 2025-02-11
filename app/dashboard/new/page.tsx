"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { toast } from "sonner"
import { ArrowLeft } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  content: z.string().min(1, "Content is required"),
})

export default function NewSignaturePage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      content: `<div style="font-family: Arial, sans-serif; max-width: 500px;">
  <p style="margin: 0; font-size: 16px; font-weight: bold;">John Doe</p>
  <p style="margin: 0; color: #666; font-size: 14px;">Software Engineer</p>
  <p style="margin: 8px 0; font-size: 14px;">
    <a href="tel:+1234567890" style="color: #0066cc; text-decoration: none;">+1 (234) 567-890</a>
  </p>
  <p style="margin: 0; font-size: 14px;">
    <a href="mailto:john@example.com" style="color: #0066cc; text-decoration: none;">john@example.com</a>
  </p>
</div>`,
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true)
      const response = await fetch("/api/signatures", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })

      if (!response.ok) {
        throw new Error("Failed to create signature")
      }

      toast.success("Signature created successfully")
      router.push("/dashboard")
      router.refresh()
    } catch (error) {
      toast.error("Failed to create signature")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/dashboard">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">Create New Signature</h1>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="My Work Signature" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>HTML Content</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter your HTML signature content"
                    className="font-mono"
                    rows={10}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex gap-4">
            <Button type="submit" disabled={loading}>
              {loading ? "Creating..." : "Create Signature"}
            </Button>
            <Link href="/dashboard">
              <Button variant="outline">Cancel</Button>
            </Link>
          </div>
        </form>
      </Form>

      <div className="border rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Preview</h2>
        <div
          className="prose prose-sm dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: form.watch("content") }}
        />
      </div>
    </div>
  )
}