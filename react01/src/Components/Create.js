import { useState } from "react";
import { useHistory } from "react-router-dom/";
const Create = () => {
  const [title, setTitle] = useState("");
  const [context, setContext] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isPending, setPending] = useState(false);
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, context, author };
    setPending(true);
    fetch("http://localhost:5000/blogs", {
      method: "Post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setPending(false);
      console.log("a new blog is added");
      history.push("/");
    });
  };

  return (
    <div className="create">
      <h2>Create a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog context:</label>
        <textarea
          required
          value={context}
          onChange={(e) => setContext(e.target.value)}
        ></textarea>
        <label required>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="luigi">luigi</option>
        </select>
        {isPending && <button disabled>Adding blog....</button>}
        {!isPending && <button>Add Blog</button>}
      </form>
    </div>
  );
};

export default Create;
