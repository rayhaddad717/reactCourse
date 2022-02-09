const Post = ({ id }) => (
    <h1>
        Post page
        {id}
    </h1>
);
export default Post;
export function getServerSideProps({ query }) {
    const { id } = query;
    return {
        props: {
            id
        },
    }
}