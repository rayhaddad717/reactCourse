import axios from 'axios';
import Link from 'next/link';
const Index = ({ posts }) => (
    <div>
        <h1>Index page</h1>
        <ul>
            {posts.map(post => (
                <li key={post.id}>
                    <Link href={`/post?id=${post.id}`}>
                        <a>{post.title}</a>

                    </Link>
                </li>
            ))}
        </ul>
    </div>
)
export default Index;
export async function getStaticProps() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return {
        props: {
            posts: res.data
        },
    }
}
