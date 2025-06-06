import React from 'react'
import { Calendar, Check, CrossIcon, User, UserRoundCheck, XIcon } from "lucide-react";
import { UpdatePosts } from './UpdatePosts';
import DeletePosts from './DeleteCard';


export type Post = {
    id: string,
    title: string,
    content: string | null,
    published: boolean,
    author: {
        name: string | null
    } | null,
    authorId: string | null
}

interface PostCardProps {
    post: Post
}

const PostCard = ({ post }: PostCardProps) => {
    return (
        <div className="relative pb-12 last:pb-0">

            {/* Content */}
            <div className="space-y-3">
                <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 h-9 w-9 bg-accent rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <span className="text-base sm:text-lg font-semibold">
                        {post?.author?.name}
                    </span>
                </div>
                <div>
                    <h3 className="text-lg sm:text-xl font-medium">{post?.title}</h3>
                    <div className="flex items-center gap-2 mt-1 text-sm">
                        {
                            post?.published ? <Check className="h-4 w-4" /> : <XIcon className="h-4 w-4" />
                        }
                        <span>{post?.published ? "Published" : "Not published"}</span>
                    </div>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground">
                    {post?.content}
                </p>
            </div>
            <div className='flex mt-2 space-x-4'>
                <UpdatePosts post={post} postId={post.id} />
                <DeletePosts postId={post.id} />
            </div>

        </div>
    )
}

export default PostCard