import Markdown from "markdown-to-jsx"
import getPostMetadata from "@/utils/getPostMetadata"
import React from 'react'
import fs from 'fs'
import matter from "gray-matter"
import { Courier_Prime, Inter } from "next/font/google"

const courier_prime = Courier_Prime({
    subsets: ["latin"],
    weight: '700'
})

const inter = Inter({
    subsets: ['latin']
})

function getPostContent(slug) {
    const folder = 'blogs/'
    const file = folder + `${slug}.md`
    const content = fs.readFileSync(file, 'utf8')

    const matterResult = matter(content)
    return matterResult
}

export const generateStaticParams = async () => {
    const posts = getPostMetadata('blogs')
    return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params}) {
    const id = params?.slug ? ' ⋅ ' + params?.slug : ''
    return {
        title: `Alu ${id.replaceAll('_', ' ')}`
    }
}

export default function RecipePage(props) {

    const slug = props.params.slug
    const post = getPostContent(slug)
    return (
        <main>
            <article className={inter.className}>
                <Markdown className="markdowncss">{post.content}</Markdown>
            </article>
        </main>
    )
}