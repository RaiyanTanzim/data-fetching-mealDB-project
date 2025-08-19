export default function Card({ meal }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div>
        <img
          src={meal.strMealThumb}
          alt="meal img"
          className="w-full object-cover h-48 md:h-56 cursor-pointer hover:scale-105 transition-all duration-200"
        />
        <div>
          <h2 className="font-semibold text-lg m-2">{meal.strMeal}</h2>
          <p className="text-gray-600 px-2">
            {meal.strInstructions.slice(0, 100)} ....
          </p>
        </div>
        <div>
          <button className="px-2 py-1 font-semibold text-blue-400 hover:underline cursor-pointer">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
