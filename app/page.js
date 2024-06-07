import SearchView from "@/components/SearchView"
import getPostMetadata from "@/utils/getPostMetadata"

export default function Home() {
  const postMetadata = getPostMetadata('blogs')
  return (
    <main>
      <SearchView postMetadata={postMetadata}/>
    </main>
  )
}
