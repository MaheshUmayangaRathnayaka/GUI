import React, { useState } from "react";
import "./SearchMenu.css";

const SearchMenu = () => {
  const [vehicleType, setVehicleType] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("");
  const [isFlexible, setIsFlexible] = useState(false);
  const [showNearby, setShowNearby] = useState(false);

  const handleSearch = () => {
    alert("Search initiated!");
    // Add search functionality here
  };

  return (
    <div className="search-menu">
      <div className="search-row">
        <div className="input-group">
          <label htmlFor="vehicleType">Vehicle Type *</label>
          <select
            id="vehicleType"
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
          >
            <option value="">Select Vehicle Type</option>
            <option value="car">Car</option>
            <option value="bike">Bike</option>
            <option value="van">Van</option>
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="location">Location *</label>
          <select
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">Select Location</option>
            <option value="city1">City 1</option>
            <option value="city2">City 2</option>
            <option value="city3">City 3</option>
          </select>
        </div>
      </div>
      <div className="search-row">
        <div className="input-group">
          <label>From</label>
          <div className="date-time">
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
          </div>
        </div>
        <div className="input-group">
          <label>To</label>
          <div className="date-time">
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
            <input
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="search-row">
        <div className="checkbox-group">
          <input
            type="checkbox"
            id="flexibleDates"
            checked={isFlexible}
            onChange={(e) => setIsFlexible(e.target.checked)}
          />
          <label htmlFor="flexibleDates">My dates are flexible</label>
        </div>
        <div className="checkbox-group">
          <input
            type="checkbox"
            id="nearbyVehicles"
            checked={showNearby}
            onChange={(e) => setShowNearby(e.target.checked)}
          />
          <label htmlFor="nearbyVehicles">Show nearby vehicles</label>
        </div>
      </div>
      <div className="search-button-container">
        <button className="search-button" onClick={handleSearch}>
          🔍 Search
        </button>
      </div>
    </div>
  );
};

export default SearchMenu;
