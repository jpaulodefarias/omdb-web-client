import { StoreProvider } from './store/StoreProvider';
import Router from './components/Router';

const App = () => (
  <StoreProvider>
    <Router />
  </StoreProvider>
);

export default App;
