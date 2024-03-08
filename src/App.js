import './App.css';
import { Provider } from 'react-redux';
import { store } from './store/Store';
import Counter from './components/Counter';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <h1>hiii</h1>
      <Counter />
    </div>
    </Provider>
  );
}

export default App;
