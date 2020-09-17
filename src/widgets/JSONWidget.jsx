import React from 'react';
import displayJSON from './jsonData';

const JSONWidget = () => {
  return (
    <>
      <h1>JSON Widget example</h1>
      <pre>
        <code>
          {JSON.stringify(displayJSON, null, 2)}
        </code>
      </pre>
    </>
  );
};

export default JSONWidget;