import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace with your actual API endpoint
    fetch("http://localhost:3002/allOrders")
      .then((response) => response.json())
      .then((data) => {
        setOrders(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading orders...</p>;
  }

  return (
    <div className="orders">
      {orders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to="/" className="btn">
            Get started
          </Link>
        </div>
      ) : (
        <div className="order-list">
          <h2>Your Orders</h2>
          <ul>
            {orders.map((order) => (
              <li key={order.id}>
                <p><strong>Item:</strong> {order.name}</p>
                <p><strong>Quantity:</strong> {order.qty}</p>
                <p><strong>Price:</strong> ₹{order.price}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Orders;