import React, { useState, useEffect } from 'react';
import StarShipCard from './components/Services/StarShipCard';
import card from './components/Services/Card';


const App = () => {
  const [starships, setStarships] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchStarships(currentPage);
  }, [currentPage]);

  const fetchStarships = async (page) => {
    const response = await fetch(`https://swapi.dev/api/starships/?page=${page}`);
    const data = await response.json();
    setStarships([...starships, ...data.results]);
  };

  const handleLoadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      {starships.map((starship) => (
        <StarShipCard 
          key={starship.name} 
          name={starship.name} 
          model={starship.model}
          manufacturer={starship.manufacturer}
          costInCredits={starship.cost_in_credits}
          length={starship.length}
        />
      ))}
      <button onClick={handleLoadMore}>Load More</button>
    </div>
  );
};

export default App;
