import { useState } from 'react';
import './App.css';
import './nyan_cat.scrollbar.css';
import Terminal from './components/terminal/Terminal';

const startMessage = `
    ██╗     ██████╗ ███████╗ ██████╗  ██████╗ ██╗
    ██║     ╚════██╗╚════██║██╔═████╗██╔═████╗██║
    ██║      █████╔╝    ██╔╝██║██╔██║██║██╔██║██║
    ██║     ██╔═══╝    ██╔╝ ████╔╝██║████╔╝██║██║
    ███████╗███████╗   ██║  ╚██████╔╝╚██████╔╝███████╗
    ╚══════╝╚══════╝   ╚═╝   ╚═════╝  ╚═════╝ ╚══════╝
    
████████╗███████╗██████╗ ███╗   ███╗██╗███╗   ██╗ █████╗ ██╗
╚══██╔══╝██╔════╝██╔══██╗████╗ ████║██║████╗  ██║██╔══██╗██║
   ██║   █████╗  ██████╔╝██╔████╔██║██║██╔██╗ ██║███████║██║
   ██║   ██╔══╝  ██╔══██╗██║╚██╔╝██║██║██║╚██╗██║██╔══██║██║
   ██║   ███████╗██║  ██║██║ ╚═╝ ██║██║██║ ╚████║██║  ██║███████╗
   ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝
   
`;
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div
        style={{
          width: '90vw',
          marginLeft: 'auto',
          marginRight: 'auto',
          height: '1000px',
        }}
      >
        <Terminal
          startMessage={startMessage}
          user={'l2700l'}
          name={'fullstack-dev'}
        />
      </div>
    </div>
  );
}

export default App;
