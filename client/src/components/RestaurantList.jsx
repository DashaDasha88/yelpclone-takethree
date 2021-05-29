import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import RestaurantFinder from "../apis/RestaurantFinder";

const RestaurantList = (props) => {

  const {restaurants, setRestaurants} = useContext(RestaurantContext);

  let history = useHistory();

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get("/");
        setRestaurants(response.data.data.restaurants) //sets our state and store our restaurants within that state
      } catch (err) {
  
      }

      fetchData();

    }

  }, []);

  const handleDelete = async {id} => {
    try {
      const response = await RestaurantFinder.delete(`/${id}`);
      setRestaurants(restaurants.filter(restaurant => {
          return restaurant.id !== id
        })
      )
    } catch (err) {

    }
  };

  const handleUpdate = {id} => {
    history.push(`/restaurants/${id}/update`);
  }

  return (
    <div className="list-group">
      <table className="table table-hover table-dark">
        <thead>
          <tr className="bg-primary">
            <th scope="col">Restaurant</th>
            <th scope="col">Location</th>
            <th scope="col">Price Range</th>
            <th scope="col">Rating</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {restaurants.map((restaurant) => {
            return (
              <tr key={restaurant.id}>
                <td>{restaurant.name}</td>
                <td>{restaurant.location}</td>
                <td>{"$".repeat(restaurant.price_range)}</td>
                <td>reviews</td>
                <td>
                <td>
                  <button
                  onClick={() => handleUpdate(restaurant.id)}
                  className="btn btn-danger"
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button 
                    onClick={() => handleDelete(restaurant.id)}
                    className="btn btn-warning"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
};

export default RestaurantList;
