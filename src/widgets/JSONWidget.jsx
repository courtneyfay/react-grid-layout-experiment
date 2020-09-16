import React from 'react';
import WidgetStyle from './StyledWidget';
import displayJSON from './jsonData';

const JSONWidget = () => {
  return (
    <WidgetStyle>
      <h1>JSON Widget example</h1>
      <pre>
        <code>
          {JSON.stringify(displayJSON, null, 2)}
        </code>
      </pre>
    </WidgetStyle>
  );
};

export default JSONWidget;