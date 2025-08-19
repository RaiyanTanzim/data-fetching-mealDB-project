//https://www.themealdb.com/api/json/v1/1/search.php?s=
import { useEffect, useState } from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((response) => response.json())
      .then((data) => {
        setMeals(data.meals);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <div className="min-h-screen bg-grey-100">
        <div className="bg-blue-500 py-10 text-center mb-4">
          <h1 className="text-2xl font-bold text-blue-50">
            Data Fetching from the food DB API
          </h1>
        </div>
        <div className="text-center">
          {
            loading && <p className="font-semibold text-lg">Loading... Please Wait.</p>
          }
                {
            error && <p className="text-sm text-red-500">Something Went Wrong!</p>
          }
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-6">
          {meals.map((meal, index) => {
            return <Card key={index} meal={meal} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
