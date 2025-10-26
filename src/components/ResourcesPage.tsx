import { useState } from 'react';
import { BookOpen, Video, FileText, Headphones, Eye, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function ResourcesPage() {
  const { t } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filters = [
    { key: 'all', label: t('resources.filter.all') },
    { key: 'articles', label: t('resources.filter.articles') },
    { key: 'guides', label: t('resources.filter.guides') },
    { key: 'videos', label: t('resources.filter.videos') },
  ];

  const resources = [
    {
      type: 'article',
      title: 'Understanding Teacher Burnout: Signs and Solutions',
      description: 'Learn to recognize early warning signs of burnout and practical strategies to prevent it',
      author: 'Dr. Sarah Johnson',
      views: 2456,
      rating: 4.8,
      icon: FileText,
      category: 'Stress Management',
      duration: '8 min read',
    },
    {
      type: 'video',
      title: 'Mindfulness Techniques for Busy Teachers',
      description: 'Quick and effective mindfulness exercises you can do between classes',
      author: 'Michael Chen',
      views: 3891,
      rating: 4.9,
      icon: Video,
      category: 'Self-Care',
      duration: '15 min',
    },
    {
      type: 'guide',
      title: 'Complete Guide to Classroom Management',
      description: 'Proven strategies for maintaining a positive and productive classroom environment',
      author: 'UstazCare Team',
      views: 1876,
      rating: 4.7,
      icon: BookOpen,
      category: 'Teaching Skills',
      duration: '25 min read',
    },
    {
      type: 'article',
      title: 'Work-Life Balance: A Teacher\'s Perspective',
      description: 'Real stories and advice from teachers who successfully balance work and personal life',
      author: 'Anonymous Teachers',
      views: 1654,
      rating: 4.6,
      icon: FileText,
      category: 'Lifestyle',
      duration: '10 min read',
    },
    {
      type: 'video',
      title: 'Dealing with Difficult Students: Expert Tips',
      description: 'Professional psychologists share strategies for handling challenging classroom situations',
      author: 'Dr. Aida Nurgalieva',
      views: 2983,
      rating: 4.9,
      icon: Video,
      category: 'Student Relations',
      duration: '20 min',
    },
    {
      type: 'guide',
      title: 'Mental Health First Aid for Educators',
      description: 'Essential guide for recognizing and responding to mental health issues in schools',
      author: 'Mental Health Team',
      views: 2145,
      rating: 4.8,
      icon: BookOpen,
      category: 'Mental Health',
      duration: '30 min read',
    },
  ];

  const filteredResources = selectedFilter === 'all'
    ? resources
    : resources.filter(r => r.type === selectedFilter.slice(0, -1));

  const featuredResources = [
    {
      title: 'Teacher Well-being Toolkit',
      description: 'Complete resource package with worksheets, templates, and guides',
      icon: BookOpen,
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Stress Assessment Tool',
      description: 'AI-powered self-assessment to understand your stress levels',
      icon: Star,
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Weekly Webinar Series',
      description: 'Live sessions every Thursday on mental health topics',
      icon: Video,
      color: 'from-green-500 to-green-600',
    },
  ];

  return (
    <div id="resources" className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            {t('resources.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('resources.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {featuredResources.map((resource, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${resource.color} text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer`}
            >
              <resource.icon className="h-12 w-12 mb-4" />
              <h3 className="text-2xl font-bold mb-3">{resource.title}</h3>
              <p className="text-white/90">{resource.description}</p>
            </div>
          ))}
        </div>

        <div className="mb-8 flex justify-center">
          <div className="inline-flex bg-white rounded-full p-2 shadow-lg">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setSelectedFilter(filter.key)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedFilter === filter.key
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map((resource, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden cursor-pointer"
            >
              <div className="h-48 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                <resource.icon className="h-20 w-20 text-blue-600" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">
                    {resource.category}
                  </span>
                  <span className="text-sm text-gray-500">{resource.duration}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{resource.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{resource.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="font-medium">{resource.author}</span>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span>{resource.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span>{resource.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-10 rounded-3xl shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Download Our Mobile App</h2>
              <p className="text-gray-600 mb-6 text-lg">
                Access all resources on the go. Get instant notifications for new content, webinars, and community updates.
              </p>
              <div className="flex space-x-4">
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                  Coming Soon
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-100 to-green-100 rounded-3xl flex items-center justify-center">
                <Headphones className="h-32 w-32 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
