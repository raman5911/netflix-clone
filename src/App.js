import { Routes, Route } from 'react-router';
import MainApp from './MainApp';
import LandingPage from './LandingPage';
import FAQ from './FAQ';
import Privacy from './Privacy';
import LegalNotices from './LegalNotices';
import TermsOfUse from './TermsOfUse';
// import './App.css';

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/explore" element={<MainApp />} />
          <Route path="/help" element={<FAQ />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/legal-notices" element={<LegalNotices />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />

       </Routes>
    </>
  );
}

export default App;
