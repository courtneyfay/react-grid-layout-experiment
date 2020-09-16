import React from 'react';
import TextWidget from './widgets/TextWidget';
import JSONWidget from './widgets/JSONWidget';
import ChartsWidget from './widgets/ChartsWidget';
import StyledDashboard from './StyledDashboard';
import styled from 'styled-components';

const PageHeader = styled.h1`
  text-align: center;
`;

const Dashboard = () => {
  return (
    <>
      <PageHeader>Dashboard with widgets</PageHeader>
      <StyledDashboard>
        <TextWidget />
        <JSONWidget />
        <ChartsWidget />
      </StyledDashboard>
    </>
  )
};

export default Dashboard;