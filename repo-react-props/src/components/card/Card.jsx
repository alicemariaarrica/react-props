export default function CreateCard({ post }) {
    return (
        <div className="card-post">
            <img src={post.image} alt="" />
            <div className="params">
                <h3>{post.title}</h3>
                <p>{post.content}</p>
                <p>{post.tags}</p>
                <p>{post.published}</p>

            </div>
        </div>
    )
}