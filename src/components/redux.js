import { Provider } from 'react-redux';
import { store } from './../store/Store';
import Counter from './Counter'

function Redux() {
  return (
    <Provider store={store}>
    <div className="App">
      <h1>hiii</h1>
      <Counter />
    </div>
    </Provider>
  );
}

export default Redux;