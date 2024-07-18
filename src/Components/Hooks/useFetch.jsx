import React, { useEffect, useState } from "react";

const UseFetch = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchdata = async () => {

            setLoading(true)
            try {

                const res = await fetch(url)
                if(!res.ok){
                    setError("Failed to Fetch data")
                }
                const result =await res.json();
                setData(result);
                setLoading(false);

            } catch (error) {
                setError(error.message);
                setLoading(false)

            }

        }
        fetchdata();
    },[url])
    return {
        data,
        loading,
        error
    }
  

      


}
export default  UseFetch;