import { Suspense } from 'react';
import './App.css';
import HomePage from './pages/home-page/HomePage';

function App() {
  return (
    <Suspense fallback="Loading...">
      <HomePage/>
    </Suspense>
  );
}

export default App;
