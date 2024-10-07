import React from 'react';
import RemoteMicrofrontend1App from "microfrontend1/Microfrontend1App"; // Import the organism from microfrontend1

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <RemoteMicrofrontend1App /> {/* Render microfrontend1's CRUD operations */}
    </div>
  );
};

export default Dashboard;