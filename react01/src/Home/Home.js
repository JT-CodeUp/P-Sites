import BlogList from '../Components/BlogList';
import useFetch from '../CustomHooks/useFetch';

const Home = () => {    
    const { data, isLoading, error } = useFetch('http://localhost:5000/blogs')
    //(Lesson20: Making a Custom Hook) here, we imported the useFetch (custom hook) and wrote our unique endpoint(the link)


    return (
        <div className="home">
            <div className="blogs">
                {error && <div> {error}</div>}
                {isLoading && <div>Loading......</div>}
                {data && <BlogList blogs={data} />}
            </div>
        </div>
    );
}

export default Home;