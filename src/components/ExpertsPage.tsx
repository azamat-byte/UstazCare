import { Heart, Star, Calendar, Award, MessageCircle, Video } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function ExpertsPage() {
  const { t } = useLanguage();

  const experts = [
    {
      name: 'Dr. Aida Nurgalieva',
      title: 'Clinical Psychologist',
      specialization: ['Stress Management', 'Burnout Prevention', 'Career Counseling'],
      languages: ['Kazakh', 'Russian', 'English'],
      experience: 12,
      rating: 4.9,
      sessions: 340,
      rate: 8000,
      available: true,
      bio: 'Specialized in teacher mental health with over 10 years of experience working with educators.',
    },
    {
      name: 'Dr. Marat Kuanyshev',
      title: 'Educational Psychologist',
      specialization: ['Work-Life Balance', 'Anxiety Management', 'Mindfulness'],
      languages: ['Kazakh', 'Russian'],
      experience: 8,
      rating: 4.8,
      sessions: 256,
      rate: 7000,
      available: true,
      bio: 'Focuses on helping teachers develop sustainable work practices and emotional resilience.',
    },
    {
      name: 'Dr. Sarah Thompson',
      title: 'Counseling Psychologist',
      specialization: ['Depression', 'Relationship Issues', 'Self-Esteem'],
      languages: ['English', 'Russian'],
      experience: 15,
      rating: 4.9,
      sessions: 412,
      rate: 9000,
      available: false,
      bio: 'International expert in teacher well-being with publications in leading psychology journals.',
    },
    {
      name: 'Dr. Dinara Sultanova',
      title: 'Clinical Psychologist',
      specialization: ['Trauma', 'PTSD', 'Crisis Intervention'],
      languages: ['Kazakh', 'Russian', 'Turkish'],
      experience: 10,
      rating: 4.7,
      sessions: 298,
      rate: 7500,
      available: true,
      bio: 'Expert in crisis management and supporting teachers through difficult situations.',
    },
    {
      name: 'Dr. Igor Petrov',
      title: 'Organizational Psychologist',
      specialization: ['Team Dynamics', 'Conflict Resolution', 'Leadership'],
      languages: ['Russian', 'English'],
      experience: 14,
      rating: 4.8,
      sessions: 367,
      rate: 8500,
      available: true,
      bio: 'Helps teachers navigate workplace challenges and build stronger professional relationships.',
    },
    {
      name: 'Dr. Zhanna Bekova',
      title: 'Health Psychologist',
      specialization: ['Stress Reduction', 'Healthy Habits', 'Sleep Issues'],
      languages: ['Kazakh', 'Russian'],
      experience: 7,
      rating: 4.9,
      sessions: 189,
      rate: 6500,
      available: true,
      bio: 'Combines psychological support with practical health strategies for busy teachers.',
    },
  ];

  const sessionTypes = [
    {
      icon: Video,
      title: 'Online Session',
      description: 'Secure video consultation from anywhere',
      duration: '50 minutes',
    },
    {
      icon: MessageCircle,
      title: 'Chat Session',
      description: 'Text-based counseling for flexibility',
      duration: '45 minutes',
    },
    {
      icon: Calendar,
      title: 'Group Session',
      description: 'Small group therapy with peers',
      duration: '90 minutes',
    },
  ];

  return (
    <div id="experts" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text text-transparent">
            {t('experts.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('experts.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {sessionTypes.map((type, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <type.icon className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">{type.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{type.description}</p>
              <p className="text-teal-600 font-semibold text-sm">{type.duration}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experts.map((expert, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="h-32 bg-gradient-to-br from-blue-500 to-green-500 relative">
                {expert.available && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-green-500 text-white rounded-full text-xs font-semibold">
                    Available
                  </div>
                )}
              </div>
              <div className="p-6 -mt-16">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-green-400 rounded-full flex items-center justify-center text-white font-bold text-3xl mx-auto mb-4 border-4 border-white shadow-lg">
                  {expert.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{expert.name}</h3>
                  <p className="text-teal-600 font-semibold">{expert.title}</p>
                  <p className="text-sm text-gray-500">{expert.experience} years experience</p>
                </div>

                <div className="flex justify-center space-x-6 mb-4 text-sm">
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1 text-yellow-500 mb-1">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="font-bold">{expert.rating}</span>
                    </div>
                    <p className="text-gray-500 text-xs">{t('experts.rating')}</p>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-gray-900 mb-1">{expert.sessions}</div>
                    <p className="text-gray-500 text-xs">{t('experts.sessions')}</p>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-gray-900 mb-1">{expert.rate}₸</div>
                    <p className="text-gray-500 text-xs">per hour</p>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{expert.bio}</p>

                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-700 mb-2">Specialization:</p>
                  <div className="flex flex-wrap gap-2">
                    {expert.specialization.map((spec, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-teal-100 text-teal-600 rounded-full text-xs"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-700 mb-2">Languages:</p>
                  <p className="text-sm text-gray-600">{expert.languages.join(', ')}</p>
                </div>

                <button
                  disabled={!expert.available}
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                    expert.available
                      ? 'bg-gradient-to-r from-teal-500 to-teal-600 text-white hover:shadow-lg hover:scale-105'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {expert.available ? t('experts.book') : 'Currently Unavailable'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-teal-600 to-teal-700 text-white p-12 rounded-3xl shadow-2xl">
          <div className="max-w-3xl mx-auto text-center">
            <Heart className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">All Our Psychologists Are:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <Award className="h-10 w-10 mx-auto mb-3" />
                <h3 className="text-xl font-bold mb-2">Licensed & Verified</h3>
                <p className="text-blue-100 text-sm">All credentials thoroughly checked and verified</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <Heart className="h-10 w-10 mx-auto mb-3" />
                <h3 className="text-xl font-bold mb-2">Specialized in Education</h3>
                <p className="text-blue-100 text-sm">Experience working specifically with teachers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
