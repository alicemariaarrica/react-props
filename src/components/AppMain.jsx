import Posts from '../data/Posts.js';
import CreateCard from './CardBlog/CardBlog.jsx';

export default function AppMain() {

    const Published_Posts = Posts.filter(post => post.published === true);


    return (
        <main>
            <div className="container">
                <div className="row">
                    {Published_Posts.map(post => (
                        <CreateCard key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </main>
    );
}

