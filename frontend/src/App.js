import { Route } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import ChatPage from './Pages/ChatPage';

function App() {
  return (
    <div className="App">
      <Route path="/" component={HomePage} exact />
      <Route path= "/chatpage" component={ChatPage} />
    </div>
  );
}

export default App;
