import React, { useState } from 'react';

// Menu Page
const MenuPage = ({ menuItems }) => {
  return (
    <div>
      <h2>Menu</h2>
      {menuItems.map(item => (
        <div key={item.id}>
          <img src={""} alt={item.name} />
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};


// Service Page
const ServicePage = ({ specialServices }) => {
  return (
    <div>
      <h2>Services</h2>
      <p>{specialServices.description}</p>
      {/* Add sections for reservations, delivery, etc. */}
    </div>
  );
};

// Feedback Form
const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    rating: 0,
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Feedback</h2>
      <form>
        <label>Name:</label>
        <input type="text" name="name" onChange={handleChange} />

        <label>Email:</label>
        <input type="email" name="email" onChange={handleChange} />

        <label>Message:</label>
        <textarea name="message" onChange={handleChange} />

        <label>Rating:</label>
        <input type="number" name="rating" min="1" max="5" onChange={handleChange} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

// Reservation Page (Optional)
const ReservationPage = () => {
  const [reservationData, setReservationData] = useState({
    date: '',
    time: '',
    guests: 0,
  });

  const handleChange = e => {
    setReservationData({ ...reservationData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Reservation</h2>
      <form>
        <label>Date:</label>
        <input type="date" name="date" onChange={handleChange} />

        <label>Time:</label>
        <input type="time" name="time" onChange={handleChange} />

        <label>Number of Guests:</label>
        <input type="number" name="guests" onChange={handleChange} />

        <button type="submit">Book Table</button>
      </form>
    </div>
  );
};

// Main App
const RestaurantApp = () => {
  const menuItems = []; // Populate with actual data
  const specialServices = {}; // Populate with actual data

  return (
    <div>
      <MenuPage menuItems={menuItems} />
      <ServicePage specialServices={specialServices} />
      <FeedbackForm />
      {/* <ReservationPage /> (Optional) */}
    </div>
  );
};

export default RestaurantApp;