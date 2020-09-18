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
  const defaultLayout = [
    {x: 0, y: 0, w: 6, h: 13, minW: 6, minH: 13, isResizable: true, isDraggable: true},
    {x: 6, y: 0, w: 6, h: 13, minW: 6, minH: 13, isResizable: true, isDraggable: true},
    {x: 3, y: 15, w: 6, h: 30, minW: 6, minH: 30, isResizable: true, isDraggable: true},
  ];
  const getFromLocalStorage = (key) => {
    let value;
    if (global.localStorage) {
      value = global.localStorage.getItem(key);
    }
    return JSON.parse(value);
  }
  const layout = getFromLocalStorage('layout') || defaultLayout;
  
  const saveToLocalStorage = (key, value) => {
    if (global.localStorage) {
      global.localStorage.setItem(key, JSON.stringify(value));
    }
  }

  const handleLayoutChange = newLayout => {
    saveToLocalStorage('layout', newLayout);
  };

  return (
    <>
      <PageHeader>Dashboard with widgets</PageHeader>
      <ReactGridLayout
        className="layout"
        cols={12}
        rowHeight={30}
        width={1200}
        verticalCompact={true}
        onLayoutChange={handleLayoutChange}
      >
        <WidgetStyle key="a" data-grid={layout[0]}>
          <TextWidget />
        </WidgetStyle>
        <WidgetStyle key="b" data-grid={layout[1]}>
          <ChartsWidget />
        </WidgetStyle>
        <WidgetStyle key="c" data-grid={layout[2]}>
          <JSONWidget />
        </WidgetStyle>
      </ReactGridLayout>
    </>
  )
};

export default Dashboard;
