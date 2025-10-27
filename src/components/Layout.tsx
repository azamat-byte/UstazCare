import { ReactNode, useState, useEffect } from 'react';
import { Menu, X, Heart, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'services', href: '#services' },
    { key: 'community', href: '#community' },
    { key: 'resources', href: '#resources' },
    { key: 'experts', href: '#experts' },
    { key: 'research', href: '#research' },
    { key: 'commercialization', href: '#commercialization' },
    { key: 'contact', href: '#contact' },
  ];

  const languages = [
    { code: 'kk' as const, label: 'ҚАЗ' },
    { code: 'ru' as const, label: 'РУС' },
    { code: 'en' as const, label: 'ENG' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <a href="#home" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-600 rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative bg-gradient-to-r from-teal-500 to-teal-600 p-2 rounded-2xl">
                  <Heart className="h-7 w-7 text-white" fill="white" />
                </div>
              </div>
              <span className="text-2xl font-bold text-gray-800">
                UstazCare
              </span>
            </a>

            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  className="px-4 py-2 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all duration-200 font-medium"
                >
                  {t(`nav.${link.key}`)}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-3">
              <div className="hidden md:flex items-center bg-gray-100 rounded-xl p-1 shadow-inner">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                      language === lang.code
                        ? 'bg-teal-500 text-white shadow-md'
                        : 'text-gray-600 hover:text-teal-600'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-xl hover:bg-teal-50 transition-colors"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-gray-700" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  className="block px-4 py-3 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(`nav.${link.key}`)}
                </a>
              ))}
              <div className="pt-4 border-t">
                <div className="flex space-x-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                        language === lang.code
                          ? 'bg-teal-500 text-white'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      <main className="pt-20">{children}</main>

      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-teal-500 to-teal-600 p-2 rounded-2xl">
                  <Heart className="h-7 w-7 text-white" fill="white" />
                </div>
                <span className="text-2xl font-bold">UstazCare</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed max-w-md">{t('footer.slogan')}</p>
              <div className="flex items-center space-x-2 text-gray-400">
                <Globe className="h-5 w-5" />
                <span className="text-sm">support@ustazcare.kz</span>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-lg">{t('footer.quick_links')}</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-teal-400 transition-colors flex items-center">
                    {t('nav.about')}
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-teal-400 transition-colors">
                    {t('nav.services')}
                  </a>
                </li>
                <li>
                  <a href="#experts" className="text-gray-400 hover:text-teal-400 transition-colors">
                    {t('nav.experts')}
                  </a>
                </li>
                <li>
                  <a href="#community" className="text-gray-400 hover:text-teal-400 transition-colors">
                    {t('nav.community')}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-lg">{t('footer.support')}</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-teal-400 transition-colors">
                    {t('nav.contact')}
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-teal-400 transition-colors">
                    {t('contact.faq.title')}
                  </a>
                </li>
                <li>
                  <a href="#resources" className="text-gray-400 hover:text-teal-400 transition-colors">
                    {t('nav.resources')}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">&copy; 2025 UstazCare. Барлық құқықтар қорғалған.</p>
              <p className="text-gray-500 text-sm">Назарбаев Университеті</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
