import { useState, useEffect } from "react";

export const useFetch = (searchQuery) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
   if(searchQuery) {
    const getData = async (searchQuery) => {
        try{
          setLoading(true);
          const res = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${searchQuery}`);
          if(!res.ok) throw new Error ('No reciepe Found');
          const data = await res.json();
          setData(data.recipes);
          setLoading(false);
        } catch (err) {
          setError(err.message)
        }
    };
    getData();
   };
  }, [searchQuery]);
  return {data, loading, error}
}