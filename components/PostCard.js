import Link from "next/link";

export default function PostCard(props) {
  const { post } = props;

  return (
    <Link href={""} className="unstyled">
      <div className="postCard">
        <h1> {post.title} </h1>
        <p>{post.sub_title}</p>
        <div className="statsContainer">
          <div>
            <p>{post.minutes_to_read}</p>
          </div>
          <div>
            <h5>By Alember Shreesh</h5>
          </div>
        </div>
      </div>
    </Link>
  );
}
