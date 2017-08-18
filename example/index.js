import React from 'react';
import ReactDOM from 'react-dom';
import Collapsible from '../src/Collapsible';

const App = () => {
  return (
    <Collapsible
      trigger="This is a trigger"
      onOpen={() => console.log('I opened!')}
      onOpening={() => console.log('Im opening!')}
      onClose={() => console.log('I closed!')}
      onClosing={() => console.log('Im closing!')}
    >
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus et arcu id efficitur. Curabitur ut odio scelerisque nisi rutrum commodo eget eget magna. Maecenas mattis gravida vehicula. Donec posuere eu odio eget porta. Maecenas sodales ligula eget lobortis mattis. Pellentesque gravida felis arcu, ac mattis velit semper non. Nunc.
      </div>
    </Collapsible>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));