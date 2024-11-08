import { useParams, useHistory } from "react-router-dom";
import useFetch from "../CustomHooks/useFetch";


const BlogDetails = () => {
    const {id} = useParams()
    const {data: blog, error, isLoading} = useFetch('http://localhost:5000/blogs/' + id)
    const history = useHistory()
    const handleDelete = () => {
        fetch('http://localhost:5000/blogs/' + blog.id, {
            method: "DELETE"
        }).then(()=> {
            history.push('/')
        })
    }
    return ( 
        <div className="blog-details">
            {isLoading && <div>Loading....</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2> {blog.title} </h2>
                    <p> written by {blog.author}</p>
                    <p>{blog.context}</p>
                    <button onClick={handleDelete}>delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;