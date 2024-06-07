import { Share_Tech_Mono, Tinos, Yatra_One } from "next/font/google";
import Link from "next/link";

const opensans = Tinos({
  weight: '700',
  subsets: ["latin"],
});

const yatra_one = Yatra_One({
  subsets: ['latin'],
  weight:'400'
})

const share_tech_mono = Share_Tech_Mono({
  subsets:["latin"],
  weight:'400'
})

export default function PostCard(props) {
  const { post } = props;

  return (
    <Link href={`/blog/${post.slug}`} className="unstyled">
      <div className="postCard">
        <h1 className={`${yatra_one.className} text-3xl text-blue-700`}> {post.title} </h1>
        <p>{post.date}</p>
        <p className={share_tech_mono.className}>{post.sub_title}</p>
        <div className="statsContainer">
          <div>
            <p className="font-bold">{post.minutes_to_read}</p>
          </div>
          <div>
            <h5 className={opensans.className}>By Alember Shreesh</h5>
          </div>
        </div>
      </div>
    </Link>
  );
}
