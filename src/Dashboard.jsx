import React, { useState } from 'react';
import TextWidget from './widgets/TextWidget';
import JSONWidget from './widgets/JSONWidget';
import ChartsWidget from './widgets/ChartsWidget';
import WidgetStyle from './widgets/StyledWidget';
import styled from 'styled-components';
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";

const PageHeader = styled.h1`
  text-align: center;
`;

const Dashboard = () => {
  const ReactGridLayout = WidthProvider(RGL);
  const [layout, setLayout] = useState([
    {i: '0', x: 0, y: 0, w: 1, h: 2},
    {i: '1', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
    {i: '2', x: 4, y: 0, w: 1, h: 2},
    {i: '3', x: 0, y: 0, w: 1, h: 2},
    {i: '4', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
    {i: '5', x: 4, y: 0, w: 1, h: 2},
    {i: '6', x: 0, y: 0, w: 1, h: 2},
    {i: '7', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
    {i: '8', x: 4, y: 0, w: 1, h: 2},
    {i: '9', x: 0, y: 0, w: 1, h: 2},
    {i: '10', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
    {i: '11', x: 4, y: 0, w: 1, h: 2},
    {i: '12', x: 0, y: 0, w: 1, h: 2},
    {i: '13', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
    {i: '14', x: 4, y: 0, w: 1, h: 2},
    {i: '15', x: 0, y: 0, w: 1, h: 2},
    {i: '16', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
    {i: '17', x: 4, y: 0, w: 1, h: 2},
    {i: '18', x: 0, y: 0, w: 1, h: 2},
    {i: '19', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
    {i: '20', x: 4, y: 0, w: 1, h: 2},
  ]);

  const items = 21;

  const generateLayout = () => {
    console.log('hitting generate');
    const p = this.props;
    console.log('p', p);
    return _.map(new Array(items), function(item, i) {
      console.log('inside array')
      const y = _.result(p, "y") || Math.ceil(Math.random() * 4) + 1;
      return {
        x: (i * 2) % 12,
        y: Math.floor(i / 6) * y,
        w: 2,
        h: y,
        i: i.toString()
      };
    });
  }

  const handleLayoutChange = newLayout => {
    console.log('everythings changing', newLayout);
    //should this call generateLayout?
  };
  
  const generateWidgets = () => {
    //todo: how does it know which type of widget to display?
    /**<ChartsWidget key="a" />
    <TextWidget key="b" />
    <JSONWidget key="c" /> */
    return _.map(_.range(items), function(i) {
      console.log('index', i);
      return (
        <WidgetStyle key={i}>
          <span className="text">{i}</span>
        </WidgetStyle>
      );
    });
  }

  return (
    <>
      <PageHeader>Dashboard with widgets</PageHeader>
      <ReactGridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={30}
        width={1200}
        onLayoutChange={handleLayoutChange}
      >
        {generateWidgets()}
      </ReactGridLayout>
    </>
  )
};

export default Dashboard;