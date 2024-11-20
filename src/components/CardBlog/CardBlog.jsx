
import Button from '../Button/Button'


export default function CardBlog({ post }) {
    return (
        <div className="card-blog">
            <img src={post.image} alt="" />
            <div className="diteils">
                <h3>{post.title}</h3>
                <p>{post.content}</p>
                <p>{post.tags}</p>
                <p>{post.published}</p>
                <Button />
            </div>
        </div>
    )
}