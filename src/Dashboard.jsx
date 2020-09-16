import React from 'react';
import TextWidget from './widgets/TextWidget';
import JSONWidget from './widgets/JSONWidget';
import ChartsWidget from './widgets/ChartsWidget';
import StyledDashboard from './StyledDashboard';

const Dashboard = () => {
  return (
    <>
      <h1>Dashboard with widgets</h1>
      <StyledDashboard>
        <TextWidget />
        <JSONWidget />
        <ChartsWidget />
      </StyledDashboard>
    </>
  )
};

export default Dashboard;