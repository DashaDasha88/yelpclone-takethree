import React, { useContext, useEffect } from 'react';
import RestaurantFinder from "../apis/RestaurantFinder";

const RestaurantList = (props) => {

  const {restaurants, setRestaurants} = useContext(RestaurantContext)

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
          <tr>
            <td>Saigon Lotus</td>
            <td>Toronto</td>
            <td>$$</td>
            <td>Rating</td>
            <td><button className="btn btn-warning">Update</button></td>
            <td><button className="btn btn-danger">Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
};

export default RestaurantList;
