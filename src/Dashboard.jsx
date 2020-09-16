import React from 'react';
import TextWidget from './widgets/TextWidget';
import JSONWidget from './widgets/JSONWidget';
import ChartsWidget from './widgets/ChartsWidget';
import WidgetStyle from './widgets/StyledWidget';
import styled from 'styled-components';
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";

const ReactGridLayout = WidthProvider(RGL);


const PageHeader = styled.h1`
  text-align: center;
`;

const items = 3;

// const generateLayout = () => {
//   console.log('hitting generate');
//   const p = this.props;
//   console.log('p', p);
//   return _.map(new Array(items), function(item, i) {
//     console.log('inside array')
//     const y = _.result(p, "y") || Math.ceil(Math.random() * 4) + 1;
//     return {
//       x: (i * 2) % 12,
//       y: Math.floor(i / 6) * y,
//       w: 2,
//       h: y,
//       i: i.toString()
//     };
//   });
// }

const layout = [
  {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
  {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
  {i: 'c', x: 4, y: 0, w: 1, h: 2}
];

const handleLayoutChange = newLayout => {
  console.log('everythings changing', newLayout);
};

const generateWidgets = () => {
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

const Dashboard = () => {
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