import React from 'react';
import TextWidget from './widgets/TextWidget';
import JSONWidget from './widgets/JSONWidget';
import ChartsWidget from './widgets/ChartsWidget';
import WidgetStyle from './widgets/StyledWidget';
import styled from 'styled-components';
import RGL, { WidthProvider } from "react-grid-layout";

const PageHeader = styled.h1`
  text-align: center;
`;

const Dashboard = () => {
  const ReactGridLayout = WidthProvider(RGL);

  const handleLayoutChange = newLayout => {
    console.log('everythings changing', newLayout);
    //todo: this should update local storage
  };

  return (
    <>
      <PageHeader>Dashboard with widgets</PageHeader>
      <ReactGridLayout
        className="layout"
        cols={12}
        rowHeight={30}
        width={1200}
        onLayoutChange={handleLayoutChange}
      >
        {/* todo: these data-grid values should be an array fetched from local storage */}
        <WidgetStyle key="a" data-grid={{x: 0, y: 0, w: 6, h: 13}}>
          <TextWidget />
        </WidgetStyle>
        <WidgetStyle key="b" data-grid={{x: 6, y: 0, w: 6, h: 13}}>
          <ChartsWidget />
        </WidgetStyle>
        <WidgetStyle key="c" data-grid={{x: 3, y: 15, w: 6, h: 30}}>
          <JSONWidget />
        </WidgetStyle>
      </ReactGridLayout>
    </>
  )
};

export default Dashboard;
