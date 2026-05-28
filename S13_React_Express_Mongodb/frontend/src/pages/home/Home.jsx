import React from "react";

import {
  HouseDoorFill,
  PersonFill,
  BarChartFill,
  GearFill,
  BellFill,
  BoxArrowRight,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Home = () => {
  const cards = [
    {
      title: "Dashboard",
      text: "View analytics and reports",
      icon: <BarChartFill size={32} />,
      color: "primary",
    },
    {
      title: "Profile",
      text: "Manage your account details",
      icon: <PersonFill size={32} />,
      color: "success",
    },
    {
      title: "Notifications",
      text: "Check latest updates",
      icon: <BellFill size={32} />,
      color: "warning",
    },
    {
      title: "Settings",
      text: "Customize your preferences",
      icon: <GearFill size={32} />,
      color: "danger",
    },
  ];

  return (
    <div className="bg-light min-vh-100">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div className="container">
          {/* Logo */}
          <a
            className="navbar-brand fw-bold d-flex align-items-center"
            href="/"
          >
            <HouseDoorFill className="me-2" />
            Modern Home
          </a>

          {/* Logout Button */}
          <Link to="/">
            <button className="btn btn-outline-light d-flex align-items-center">
              <BoxArrowRight className="me-2" />
              Logout
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container py-5">
        <div className="text-center mb-5">
          <h1 className="fw-bold display-5">Welcome Back 👋</h1>

          <p className="text-muted fs-5">
            Explore your dashboard with a modern Bootstrap UI
          </p>
        </div>

        {/* Cards */}
        <div className="row g-4">
          {cards.map((card, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div
                className="card border-0 shadow-sm h-100 text-center p-4"
                style={{
                  borderRadius: "18px",
                  transition: "0.3s",
                  cursor: "pointer",
                }}
              >
                {/* Icon */}
                <div
                  className={`bg-${card.color} bg-opacity-10 text-${card.color} rounded-circle d-inline-flex align-items-center justify-content-center mx-auto mb-3`}
                  style={{
                    width: "70px",
                    height: "70px",
                  }}
                >
                  {card.icon}
                </div>

                {/* Content */}
                <h5 className="fw-bold">{card.title}</h5>
                <p className="text-muted mb-0">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
