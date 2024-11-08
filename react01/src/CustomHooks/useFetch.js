import { useEffect, useState } from 'react'
// (Lesson 20 Making Custom Hook)This useFetch js file is a custom made hook for fetching data from any endpoint. Here, there are some lines of codes for basic fetch data. We have the data, loading message and the error message
const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const abortCont = new AbortController();
        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if (!res.ok) {
                        throw Error('could not fetch the data for that resource')
                        // here, we wrote a line of code to throw a error message if the link to the data is insufficient. Lesson 19: Handling Fetch errors     
                    }
                    return res.json()
                })
                .then(data => {
                    setData(data)
                    setLoading(false)
                    setError(null)
                })
                .catch(err => {
                    if (err.name === 'AbortError') {
                        console.log('fetch aborted');
                    } else {
                        setLoading(false)
                        setError(err.message)   
                    }

                })
        })
        return () => {
            abortCont.abort()
        };
    }, [url])
    //  in the square bracket, there is a value named url. This dependenct controls when this useEffect hook runs.
    return { data, isLoading, error }
}
export default useFetch