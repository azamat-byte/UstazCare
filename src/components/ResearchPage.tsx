import { Microscope, Lightbulb, TrendingUp, Database, Brain, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function ResearchPage() {
  const { t } = useLanguage();

  const currentResearch = [
    {
      title: 'Teacher Stress Factors in Kazakhstan',
      description: 'Longitudinal study examining primary stress factors affecting educators across urban and rural schools',
      status: 'Ongoing',
      duration: '2024-2025',
      participants: 450,
      icon: Microscope,
    },
    {
      title: 'Digital Mental Health Interventions',
      description: 'Evaluating the effectiveness of online support platforms for teacher well-being',
      status: 'Data Analysis',
      duration: '2023-2024',
      participants: 280,
      icon: TrendingUp,
    },
    {
      title: 'Community Support Impact Study',
      description: 'Measuring the effects of peer support networks on teacher retention and satisfaction',
      status: 'Ongoing',
      duration: '2024-2026',
      participants: 320,
      icon: Database,
    },
  ];

  const innovations = [
    {
      title: 'AI Stress Assessment Tool',
      description: 'Machine learning model that analyzes patterns in teacher feedback to provide personalized stress management recommendations',
      status: 'Beta Testing',
      icon: Brain,
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Predictive Analytics Dashboard',
      description: 'Early warning system to identify teachers at risk of burnout before critical stages',
      status: 'Development',
      icon: TrendingUp,
      color: 'from-teal-500 to-teal-600',
    },
    {
      title: 'Gamified Wellness Platform',
      description: 'Interactive mobile app with rewards system to encourage daily self-care practices',
      status: 'Coming Soon',
      icon: Zap,
      color: 'from-green-500 to-green-600',
    },
  ];

  const publications = [
    {
      title: 'Mental Health Support Systems for Teachers: A Kazakhstan Perspective',
      journal: 'International Journal of Educational Psychology',
      year: 2024,
      authors: 'Nurgalieva, A., et al.',
    },
    {
      title: 'Digital Interventions in Teacher Stress Management',
      journal: 'Journal of Educational Technology',
      year: 2024,
      authors: 'Research Team',
    },
    {
      title: 'The Role of Community in Teacher Well-being',
      journal: 'Educational Research Review',
      year: 2023,
      authors: 'UstazCare Research Group',
    },
  ];

  return (
    <div id="research" className="py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text text-transparent">
            {t('research.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('research.desc')}
          </p>
        </div>

        <div className="bg-gradient-to-br from-teal-600 to-teal-700 text-white p-12 rounded-3xl shadow-2xl mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <Microscope className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Master's Research Project</h2>
            <p className="text-xl text-blue-100 mb-6">
              This platform is developed as part of a Master's degree thesis in "Innovative Research Methods and Commercialization" at Nazarbayev University.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <h3 className="text-2xl font-bold mb-2">Research</h3>
                <p className="text-blue-100">Evidence-based approaches</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <h3 className="text-2xl font-bold mb-2">Innovation</h3>
                <p className="text-blue-100">Cutting-edge technology</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <h3 className="text-2xl font-bold mb-2">Impact</h3>
                <p className="text-blue-100">Improving teacher lives</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">{t('research.current.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentResearch.map((research, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-teal-50 to-teal-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <research.icon className="h-8 w-8 text-teal-600" />
                </div>
                <div className="mb-4">
                  <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs font-semibold">
                    {research.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{research.title}</h3>
                <p className="text-gray-600 mb-4">{research.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Duration:</span>
                    <span className="font-semibold text-gray-700">{research.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Participants:</span>
                    <span className="font-semibold text-gray-700">{research.participants}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">{t('research.innovations.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {innovations.map((innovation, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${innovation.color} text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105`}
              >
                <innovation.icon className="h-12 w-12 mb-6" />
                <div className="mb-4">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-semibold">
                    {innovation.status}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{innovation.title}</h3>
                <p className="text-white/90">{innovation.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">Publications & Research Output</h2>
          <div className="bg-white p-10 rounded-2xl shadow-lg">
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <div
                  key={index}
                  className="border-l-4 border-teal-500 pl-6 py-4 hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{pub.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                    <span className="font-semibold text-teal-600">{pub.journal}</span>
                    <span>•</span>
                    <span>{pub.year}</span>
                    <span>•</span>
                    <span>{pub.authors}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-blue-50 p-10 rounded-3xl shadow-lg">
          <div className="max-w-3xl mx-auto text-center">
            <Lightbulb className="h-16 w-16 text-teal-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Contribute to Research</h2>
            <p className="text-lg text-gray-600 mb-8">
              Join our ongoing studies and help shape the future of teacher mental health support in Kazakhstan. Your participation makes a difference.
            </p>
            <button className="px-10 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Participate in Research
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
