import { Heart, Users, Activity, MessageCircle, Video, BookOpen, Award, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function ServicesPage() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Heart,
      titleKey: 'services.counseling.title',
      descKey: 'services.counseling.desc',
      color: 'text-blue-500',
      bgColor: 'bg-blue-100',
      features: ['One-on-one sessions', 'Group therapy', 'Crisis support', 'Follow-up care'],
    },
    {
      icon: Users,
      titleKey: 'services.mentorship.title',
      descKey: 'services.mentorship.desc',
      color: 'text-green-500',
      bgColor: 'bg-green-100',
      features: ['Experienced mentors', 'Career guidance', 'Skill development', 'Peer networking'],
    },
    {
      icon: Activity,
      titleKey: 'services.stress.title',
      descKey: 'services.stress.desc',
      color: 'text-purple-500',
      bgColor: 'bg-purple-100',
      features: ['AI-powered analysis', 'Personalized insights', 'Progress tracking', 'Wellness tips'],
    },
    {
      icon: MessageCircle,
      titleKey: 'services.anonymous.title',
      descKey: 'services.anonymous.desc',
      color: 'text-orange-500',
      bgColor: 'bg-orange-100',
      features: ['24/7 availability', 'Complete anonymity', 'Instant support', 'Secure platform'],
    },
  ];

  const additionalServices = [
    {
      icon: Video,
      title: 'Live Webinars',
      description: 'Interactive sessions on stress management, classroom techniques, and self-care',
    },
    {
      icon: BookOpen,
      title: 'Resource Library',
      description: 'Access to articles, guides, and videos on mental health and professional development',
    },
    {
      icon: Award,
      title: 'Certification Programs',
      description: 'Professional development courses with certificates recognized by education authorities',
    },
    {
      icon: Zap,
      title: 'Quick Support',
      description: 'Immediate access to mental health resources and crisis intervention',
    },
  ];

  return (
    <div id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            {t('nav.services')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive support services designed specifically for teachers in Kazakhstan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className={`${service.bgColor} ${service.color} w-20 h-20 rounded-3xl flex items-center justify-center mb-6 shadow-lg`}>
                <service.icon className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{t(service.titleKey)}</h3>
              <p className="text-gray-600 mb-6 text-lg">{t(service.descKey)}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className={`w-2 h-2 ${service.bgColor} rounded-full mr-3`}></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-8 w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                Learn More
              </button>
            </div>
          ))}
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Additional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="bg-gradient-to-br from-blue-100 to-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-green-600 text-white p-12 rounded-3xl shadow-2xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div>
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Sign Up</h3>
                <p className="text-blue-100">Create your free account in minutes</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">Choose Service</h3>
                <p className="text-blue-100">Select the support you need</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Get Support</h3>
                <p className="text-blue-100">Connect with experts and community</p>
              </div>
            </div>
            <button className="mt-10 px-10 py-4 bg-white text-blue-600 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
