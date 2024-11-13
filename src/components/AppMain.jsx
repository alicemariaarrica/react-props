import Posts from '../data/Array.js'

import CreateCard from "./Card/Card.jsx";



export default function AppMain() {
    // logica
    const Published_Posts = Posts.filter(post => post.published === true);

    // markup
    return (
        <main>
            <div className="container">
                <div className="row">
                    {Published_Posts.map(post => <CreateCard key={post.id} post={post} />)}
                </div>
            </div>
        </main>
    )
}