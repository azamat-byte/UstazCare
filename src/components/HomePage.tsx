import { Heart, Users, Video, BookOpen, Star, TrendingUp, Award, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function HomePage() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Heart,
      titleKey: 'features.counseling.title',
      descKey: 'features.counseling.desc',
      color: 'text-blue-500',
      bgColor: 'bg-blue-100',
    },
    {
      icon: Users,
      titleKey: 'features.community.title',
      descKey: 'features.community.desc',
      color: 'text-green-500',
      bgColor: 'bg-green-100',
    },
    {
      icon: Video,
      titleKey: 'features.webinars.title',
      descKey: 'features.webinars.desc',
      color: 'text-purple-500',
      bgColor: 'bg-purple-100',
    },
    {
      icon: BookOpen,
      titleKey: 'features.resources.title',
      descKey: 'features.resources.desc',
      color: 'text-orange-500',
      bgColor: 'bg-orange-100',
    },
  ];

  const stats = [
    { value: '1,200+', labelKey: 'stats.teachers', icon: Users },
    { value: '50+', labelKey: 'stats.psychologists', icon: Heart },
    { value: '3,500+', labelKey: 'stats.sessions', icon: Video },
    { value: '98%', labelKey: 'stats.satisfaction', icon: Star },
  ];

  const testimonials = [
    {
      name: 'Айгүл Қ.',
      role: 'Бастауыш сынып мұғалімі',
      text: 'UstazCare маған қиын кезеңде үлкен көмек болды. Психологпен сөйлесу өте пайдалы болды.',
      rating: 5,
    },
    {
      name: 'Олег В.',
      role: 'Математика мұғалімі',
      text: 'Қауымдастықта басқа мұғалімдермен тәжірибе алмасу мүмкіндігі өте маңызды. Рақмет!',
      rating: 5,
    },
    {
      name: 'Динара С.',
      role: 'Ағылшын тілі мұғалімі',
      text: 'Вебинарлар мен ресурстар менің кәсіби дамуыма үлкен ықпал етті.',
      rating: 5,
    },
  ];

  return (
    <div id="home">
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-green-100 opacity-50"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

        <div className="relative max-w-7xl mx-auto text-center z-10">
          <div className="mb-8 inline-block p-4 bg-white/80 backdrop-blur-sm rounded-full shadow-lg">
            <Heart className="h-16 w-16 text-blue-500" />
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-blue-500 to-green-600 bg-clip-text text-transparent">
            {t('hero.title')}
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
            {t('hero.subtitle')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#experts"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              {t('hero.cta.psychologist')}
            </a>
            <a
              href="#community"
              className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-blue-500"
            >
              {t('hero.cta.community')}
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">{t('features.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
              >
                <div className={`${feature.bgColor} ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{t(feature.titleKey)}</h3>
                <p className="text-gray-600 leading-relaxed">{t(feature.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-12 w-12 text-blue-200" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-100 text-lg">{t(stat.labelKey)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">{t('testimonials.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-500 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <TrendingUp className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Innovation</h3>
              <p className="text-gray-600">AI-powered stress assessment and personalized recommendations</p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <Award className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Excellence</h3>
              <p className="text-gray-600">Licensed professionals and evidence-based approaches</p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <Shield className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Privacy</h3>
              <p className="text-gray-600">Anonymous support and confidential consultations</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
