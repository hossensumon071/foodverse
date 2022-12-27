import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Favourites from "./components/Favourites";
import Recipe from "./components/Recipe";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import { useState, useRef } from "react";
import { useFetch } from "./hooks/useFetch";

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const inputFeildRef = useRef(null);
  const {data: recipes, loading, error} = useFetch(searchQuery);

  const searchHandler = (e) => {
    e.preventDefault();
    const searchValue = e.target.search.value;
    setSearchQuery(searchValue);

    // setSearchQuery("");
    // inputFeildRef.current.blur();
 }

  return (
    <div className="app min-h-screen bg-rose-50 text-gray-600 text-lg">
      <Navbar 
      searchHandler={searchHandler}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      inputFeildRef={inputFeildRef}
      />
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/favourites" element={<Favourites/>}/>
         
          <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
