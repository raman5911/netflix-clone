import { Routes, Route } from 'react-router';
import MainApp from './MainApp';
import LandingPage from './LandingPage';

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/explore" element={<MainApp />} />
       </Routes>
    </>
  );
}

export default App;
