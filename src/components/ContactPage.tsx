import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, HelpCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const faqs = [
    {
      question: 'How much does it cost to use UstazCare?',
      answer: 'We offer a free plan with basic features, and premium plans starting from 12,900₸/month. Check our Commercialization page for detailed pricing.',
    },
    {
      question: 'Are the sessions confidential?',
      answer: 'Absolutely. All sessions are completely confidential and conducted by licensed professionals. We also offer anonymous chat options.',
    },
    {
      question: 'What languages are supported?',
      answer: 'Our psychologists speak Kazakh, Russian, and English. The platform interface is available in all three languages.',
    },
    {
      question: 'How do I book a session with a psychologist?',
      answer: 'Visit the Experts page, browse our psychologists, and click "Book Session" on your preferred expert. You can schedule according to their availability.',
    },
    {
      question: 'Can my school become a partner?',
      answer: 'Yes! We offer special institutional packages. Contact us at partnerships@ustazcare.kz for more information.',
    },
    {
      question: 'Is there a mobile app?',
      answer: 'Our mobile app is currently in development and will be available soon on iOS and Android platforms.',
    },
    {
      question: 'How is my data protected?',
      answer: 'We use industry-standard encryption and comply with international data protection regulations. Your privacy is our top priority.',
    },
    {
      question: 'Can I participate in research studies?',
      answer: 'Yes! Visit our Research page to learn about ongoing studies and how to participate. Your contribution helps improve teacher support systems.',
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'support@ustazcare.kz',
      link: 'mailto:support@ustazcare.kz',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+7 (777) 123-4567',
      link: 'tel:+77771234567',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'Nazarbayev University, Astana, Kazakhstan',
      link: null,
    },
  ];

  return (
    <div id="contact" className="py-20 bg-gradient-to-br from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text text-transparent">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('contact.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <div className="bg-white p-10 rounded-3xl shadow-xl">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>{t('contact.form.submit')}</span>
                </button>
              </form>
            </div>

            <div className="mt-8 space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-4"
                >
                  <div className="bg-gradient-to-br from-teal-50 to-teal-100 w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500">{info.label}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-lg font-bold text-gray-900 hover:text-teal-600 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-lg font-bold text-gray-900">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-gradient-to-br from-teal-600 to-teal-700 text-white p-10 rounded-3xl shadow-xl mb-8">
              <MessageCircle className="h-12 w-12 mb-6" />
              <h2 className="text-3xl font-bold mb-4">Need Immediate Help?</h2>
              <p className="text-blue-100 mb-6">
                Our 24/7 anonymous chat is available for urgent support and immediate assistance.
              </p>
              <button className="w-full py-4 bg-white text-teal-600 rounded-xl font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                Start Anonymous Chat
              </button>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-10 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Office Hours</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between">
                  <span className="font-semibold">Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded-xl">
                <p className="text-sm text-gray-600">
                  <strong className="text-teal-600">Note:</strong> Anonymous chat support is available 24/7 for urgent matters.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 rounded-3xl shadow-xl">
          <div className="flex items-center justify-center mb-8">
            <HelpCircle className="h-12 w-12 text-teal-600 mr-4" />
            <h2 className="text-4xl font-bold text-gray-900">{t('contact.faq.title')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-bold mb-3 text-gray-900">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
