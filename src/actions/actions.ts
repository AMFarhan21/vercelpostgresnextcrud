"use server"
import { revalidatePath } from 'next/cache';
import { Prisma } from './../generated/prisma/index.d';
import prisma from "@/lib/prisma"


export async function getPosts() {
    try {
        const response = await prisma.post.findMany({
            // where: {
            //     published: true
            // },
            include: {
                author: {
                    select: {
                        name: true
                    }
                }
            }
        })
        return response
    } catch (error) {
        console.error("Error getting the posts", error)
    }
}

export async function createPosts(postData: Prisma.PostCreateInput) {
    try {
        const response = await prisma.post.create({
            data: {
                ...postData,
                author: {
                    create: {
                        name: 'Ammfff'
                    }
                }
            }
        })
        revalidatePath("/")
        return response
    } catch (error) {
        console.error("Error creating posts: ", error)
    }
}


export async function updatePost(postData: Prisma.PostUpdateInput, id: string) {
    try {
        const response = await prisma.post.update({
            where: {
                id
            },
            data: {
                ...postData,
            }
        })

        revalidatePath("/")
        return response
    } catch (error) {
        console.error("Error updating post: ", error)
    }
}


export async function deletePost(id: string) {
    try {
        await prisma.post.delete({
            where: {
                id
            }
        })

        revalidatePath("/")
    } catch (error) {
        console.error("Error deleting post: ", error)
    }
}