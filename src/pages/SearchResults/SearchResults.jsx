import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';
import FoodItem from '../../components/FoodItem/FoodItem';
import './SearchResults.css';

export const SearchResults = () => {
  const { food_list } = useContext(StoreContext);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query') || '';

  const filteredItems = food_list.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container-fuild bg-search">
      <div className="row">
        <div className="col-md-12">
          <div className="search-results-page">
            <h4 className='d-flex justify-content-center align-items-center text-center'>Search Results for "{query}"</h4>
            <div className="search-results-list mt-5 pt-4">
              {filteredItems.length > 0 ? (
                filteredItems.map(item => (
                  <FoodItem
                    key={item._id}
                    id={item._id}
                    name={item.name}
                    price={item.price}
                    description={item.description}
                    image={item.image}
                  />
                ))
              ) : (
                <p className='text-white fs-4 text-center'>No results found.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchResults;
