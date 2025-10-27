import { Target, Eye, Heart, Users, Lightbulb, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Heart,
      title: 'Empathy',
      description: 'Understanding and supporting teachers with compassion',
      color: 'text-red-500',
      bgColor: 'bg-red-100',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building connections among educators',
      color: 'text-teal-500',
      bgColor: 'bg-teal-100',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Using technology to improve mental health support',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-100',
    },
    {
      icon: Shield,
      title: 'Privacy',
      description: 'Protecting confidentiality and personal information',
      color: 'text-green-500',
      bgColor: 'bg-green-100',
    },
  ];

  const team = [
    {
      name: 'Dr. Aida Nurgalieva',
      role: 'Founder & Research Lead',
      bio: "Master's student in Innovative Research Methods",
      image: 'AN',
    },
    {
      name: 'Psychologists Team',
      role: 'Licensed Professionals',
      bio: 'Expert psychologists specializing in teacher support',
      image: 'PT',
    },
    {
      name: 'Tech Team',
      role: 'Platform Development',
      bio: 'Building innovative mental health solutions',
      image: 'TT',
    },
  ];

  return (
    <div id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text text-transparent">
            {t('nav.about')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            UstazCare is part of a Master's degree research project focused on innovative methods to support teacher mental health and well-being in Kazakhstan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-10 rounded-3xl shadow-lg">
            <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md">
              <Target className="h-8 w-8 text-teal-600" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">{t('about.mission.title')}</h2>
            <p className="text-gray-700 text-lg leading-relaxed">{t('about.mission.desc')}</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 p-10 rounded-3xl shadow-lg">
            <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md">
              <Eye className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">{t('about.vision.title')}</h2>
            <p className="text-gray-700 text-lg leading-relaxed">{t('about.vision.desc')}</p>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">{t('about.values.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
              >
                <div className={`${value.bgColor} ${value.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-3xl mx-auto mb-6">
                  {member.image}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{member.name}</h3>
                <p className="text-teal-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-teal-600 to-teal-700 text-white p-12 rounded-3xl shadow-xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Research Focus</h2>
            <p className="text-xl text-blue-100 mb-6">
              This platform is developed as part of a Master's degree project in "Innovative Research Methods and Commercialization" at Nazarbayev University.
            </p>
            <p className="text-lg text-blue-100 leading-relaxed">
              Our research focuses on understanding teacher stress in Kazakhstan, developing innovative support mechanisms, and exploring sustainable commercialization models for mental health services in the education sector.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
