// ES6 Component
// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

import Search from './components/search.component.jsx';
import Details from './components/details.component.jsx';
import Player from './components/player.component.jsx';
import Progress from './components/progress.component.jsx';
import Footer from './components/footer.component.jsx';

class App extends React.Component {
  // render method is most important
  // render method returns JSX template
  render() {
    return (
      <div>
        <Search />
        <Details title={"Edwin The Maniac"}/>
        <Player />
        <Progress
          position={'0.3'}
          elapsed={'00:00'}
          total={'0:40'}/>
        <Footer />
      </div>
    );
  }
}

// Render to ID content in the DOM
ReactDOM.render( <App /> ,
  document.getElementById('content')
);
