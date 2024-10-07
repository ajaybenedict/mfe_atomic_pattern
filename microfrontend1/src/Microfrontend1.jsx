import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import TaskPage from './pages/TaskPage';

const Microfrontend1 = () => {
  return(
    <React.StrictMode>
      <Provider store={store}>
        <TaskPage />
      </Provider>
  </React.StrictMode>
  )
}
export default Microfrontend1;