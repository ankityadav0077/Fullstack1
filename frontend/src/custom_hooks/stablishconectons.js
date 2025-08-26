import { useState, useEffect } from "react";

function useFetch(url,method,headers,body) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
    // console.log("url is ",url);
  useEffect(() => {
    async function fetchData() {
      try {
          const res = await fetch(url,{
            method: method || 'GET',
            body: body ? JSON.stringify(body) : null,
            headers: headers || { 'Content-Type': 'application/json' },
          });
          const json = await res.json();
          setData(json);
          setLoading(false);
          console.log("fetched data is ",json);

      } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false); 
      }
    }
    fetchData();
  }, [url]); // re-run if URL changes

  return { data, loading };
}

export default useFetch;
