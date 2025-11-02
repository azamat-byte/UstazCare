import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import CommunityPage from './components/CommunityPage';
import ResourcesPage from './components/ResourcesPage';
import ExpertsPage from './components/ExpertsPage';
import ResearchPage from './components/ResearchPage';
import CommercializationPage from './components/CommercializationPage';
import ContactPage from './components/ContactPage';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/experts" element={<ExpertsPage />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/commercialization" element={<CommercializationPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Layout>
      </Router>
    </LanguageProvider>
  );
}

export default App;