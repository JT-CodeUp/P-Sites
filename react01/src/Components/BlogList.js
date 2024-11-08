import { useEffect } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const BlogList = ({ blogs }) => {
    useEffect(() =>{
        console.log(blogs);
    },)
    // here, I added new value for the function in the button.
    return (
        <div className="blog-list">
            {blogs.map((blog) => (
                <div className="nav" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h1>{blog.title}</h1>
                        <p> {blog.context}</p>
                        <p>written by {blog.author}</p>
                    </Link>
                    {/* <button onClick={() => handleDelete(blog.id)}>delete blog</button> */}
                    {/* Lesson 13:=> As you can see, I created a button for handleDelete function in the child file.  */}
                </div>
            ))}
        </div>
    );
}

export default BlogList;