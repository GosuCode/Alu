'use client'

export default function SearchBar(props) {
    const { searchValue, setSearchValue } = props
    return (
        <input 
        className="border border-black rounded-md px-4 py-2 outline-none mb-10"
            placeholder='Search blog posts...' 
            value={searchValue} 
            onChange={(e) => {
            setSearchValue(e.target.value)
            }} 
        />
    )
}
