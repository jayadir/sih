import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

function UserProfile() {
  const [activeTab, setActiveTab] = useState("purchased");

  const user = {
    avatar: "https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-Transparent-Free-PNG-Clip-Art.png", // Online avatar URL
    name: "Jayadir",
    email: "jayadir@example.com",
    citizenPoints: 1200,
  };

  const purchasedItems = [
    {
      name: "T-shirt",
      img:"/Designer.png",
      price: "500",
    },
    {
      name: "Notebook",
      img: "/book.png",
      price: "200",
    },
  ];

  const storeItems = [
    {
      name: "Coffee Mug",
      img: "https://example.com/mug.jpg",
      price: "300",
    },
    {
      name: "Backpack",
      img: "https://example.com/backpack.jpg",
      price: "1000",
    },
  ];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mt-4 user-profile-container">
      <div className="row profile-card">
        {/* Top-left section (User Avatar) */}
        <div className="col-md-4 d-flex justify-content-center align-items-center avatar-section">
          <img
            src={user.avatar}
            alt="User Avatar"
            className="rounded-circle img-fluid avatar-img"
          />
        </div>

        {/* Top-right section (User Details) */}
        <div className="col-md-8 d-flex flex-column justify-content-center profile-info">
          <h2 className="user-name">{user.name}</h2>
          <p>Email: <span>{user.email}</span></p>
          <p>Citizen Points: <span>{user.citizenPoints}</span></p>
        </div>
      </div>

      {/* Tabs for Purchased Items and Store */}
      <ul className="nav nav-tabs mt-4" role="tablist">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "purchased" ? "active" : ""}`}
            onClick={() => handleTabChange("purchased")}
          >
            Purchased Items
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "store" ? "active" : ""}`}
            onClick={() => handleTabChange("store")}
          >
            Store
          </button>
        </li>
      </ul>

      {/* Tab Content */}
      <div className="tab-content mt-3">
        {/* Purchased Items Tab */}
        {activeTab === "purchased" && (
          <div className="tab-pane fade show active">
            <h4>Purchased Items</h4>
            <div className="items-list">
              {purchasedItems.map((item, index) => (
                <div key={index} className="item-card">
                  <img src={item.img} alt={item.name} className="item-img" />
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Store Tab */}
        {activeTab === "store" && (
          <div className="tab-pane fade show active">
            <h4>Store</h4>
            <div className="items-list">
              {storeItems.map((item, index) => (
                <div key={index} className="item-card">
                  <img src={item.img} alt={item.name} className="item-img" />
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserProfile;
