import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard-body">
        <Sidebar />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
