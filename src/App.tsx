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
      <Layout>
        <HomePage />
        <AboutPage />
        <ServicesPage />
        <CommunityPage />
        <ResourcesPage />
        <ExpertsPage />
        <ResearchPage />
        <CommercializationPage />
        <ContactPage />
      </Layout>
    </LanguageProvider>
  );
}

export default App;
