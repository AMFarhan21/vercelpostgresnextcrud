'use client'

import { createPosts } from "@/actions/actions"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { NotebookPen } from "lucide-react"
import { useState } from "react"

export function CreatePosts() {
  // const [open, setOpen] = useState(false)
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [published, setPublished] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const postData = { title, content, published }
      await createPosts(postData)
      console.log("Successfully create post")
      setTitle("")
      setContent("")
      setPublished(false)
    } catch (error) {
      console.error("Failed to create Post", error)
    }
  }

  return (
    <Dialog >
      <form id="createForm" onSubmit={handleSubmit}>
        <DialogTrigger asChild>
          <Button variant="default" className="fixed bottom-8 right-8 h-12 text-xl inset z-50" >
            <NotebookPen />
            Create Posts
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create Posts</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="title">Title</Label>
              <Input value={title} onChange={(e) => setTitle(e.target.value)} id="title" name="title" placeholder="Title" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="content">Content</Label>
              <Input value={content} onChange={(e) => setContent(e.target.value)} id="content" name="content" placeholder="Content" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="published">Published</Label>
              <Button
                onClick={() => setPublished(published === false)}
                className="max-w-30"
                type="button"
              >
                {published ? "Published" : "Not Published"}
              </Button>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button  variant="outline" type="button">Cancel</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button form="createForm" type="submit">Save changes</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
