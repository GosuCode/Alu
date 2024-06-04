'use client'
import React, { useState } from 'react'
import PostCard from './PostCard'
import SearchBar from './SearchBar'

export default function SearchView(props) {
    const { postMetadata } = props
    const [searchValue, setSearchValue] = useState('')

    return (
        <>
            <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
            <div className="postsContainer">
                {postMetadata.filter(val => {
                    return val.title.toLowerCase().includes(searchValue.toLowerCase())
                }).map((post, postIndex) => {
                    return (
                        <PostCard key={postIndex} post={post} />
                    )
                })}
            </div>
        </>
    )
}
