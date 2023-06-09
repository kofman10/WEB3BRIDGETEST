import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Meal from "./components/Meal";

function App() {
  const [url,setUrl]=useState("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
  const [item,setItem]=useState("");
  const [search,setSearch]=useState();
  const [show, setShow] = useState(false)


useEffect(() => {
 
  const getMeals = async () => {
    try {
      const response = await axios.get(url);
      console.log(response.data.meals)
      setShow(true);
      setItem(response.data.meals)
    } catch (error) {
      console.log(error)
    }
  
 } 
 getMeals();
}, [url]);

const searchRecipe = () => {
  
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
  
}
  
  return (
    <>
      <div className="bg-yellow-300 h-full">
        <h1 className="bg-red-600 text-center text-4xl text-white p-6">
          MY RECIPE APP
        </h1>
        <p className="text-center white pt-7 text-2xl text-white">Search for any food that you want</p>
        <div className="flex justify-center mb-10 mt-10">
          <div className="flex justify-between w-1/3 items-center border border-black rounded-full px-4 py-1 mb-10">
            <input
              required
              className="bg-transparent outline-none pr-4 text-black placeholder-black"
              type="text"
              placeholder="Search..."
              onChange={e=> setSearch(e.target.value)}
              onKeyDown={searchRecipe}
            />
          </div>
        </div>
        <div className="flex justify-center">
        <div className="flex justify-center">
                {
                    show ?  <div className="flex flex-row"><Meal data={item} /> </div>  : "Not Found"
                
                }
            </div>
        </div>
      </div>
    </>
  );
}

export default App;
