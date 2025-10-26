import { ReactNode, useState } from 'react';
import { Menu, X, Heart, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <nav className="bg-white/80 backdrop-blur-md shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                UstazCare
              </span>
            </div>

            <div className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                >
                  {t(`nav.${link.key}`)}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1 bg-gray-100 rounded-full p-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                      language === lang.code
                        ? 'bg-blue-500 text-white'
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
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
          <div className="lg:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  className="block text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(`nav.${link.key}`)}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="pt-16">{children}</main>

      <footer className="bg-gray-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">UstazCare</span>
              </div>
              <p className="text-gray-400 mb-4">{t('footer.slogan')}</p>
              <div className="flex space-x-4">
                <Globe className="h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">{t('footer.quick_links')}</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                    {t('nav.about')}
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                    {t('nav.services')}
                  </a>
                </li>
                <li>
                  <a href="#experts" className="text-gray-400 hover:text-white transition-colors">
                    {t('nav.experts')}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">{t('footer.support')}</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                    {t('nav.contact')}
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                    {t('contact.faq.title')}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 UstazCare. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
