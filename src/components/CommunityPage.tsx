import { MessageSquare, Heart, Eye, TrendingUp, Award, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function CommunityPage() {
  const { t } = useLanguage();

  const categories = [
    { name: 'Stress Management', count: 156, color: 'bg-teal-500' },
    { name: 'Classroom Tips', count: 203, color: 'bg-green-500' },
    { name: 'Work-Life Balance', count: 98, color: 'bg-purple-500' },
    { name: 'Career Development', count: 142, color: 'bg-orange-500' },
    { name: 'Student Relations', count: 187, color: 'bg-pink-500' },
    { name: 'Self-Care', count: 124, color: 'bg-teal-500' },
  ];

  const trendingPosts = [
    {
      title: 'How I manage stress during exam season',
      author: 'Anonymous Teacher',
      category: 'Stress Management',
      views: 1248,
      likes: 89,
      comments: 23,
      timeAgo: '2 hours ago',
    },
    {
      title: 'Effective techniques for engaging difficult students',
      author: 'Marat K.',
      category: 'Classroom Tips',
      views: 892,
      likes: 67,
      comments: 18,
      timeAgo: '5 hours ago',
    },
    {
      title: 'Finding time for family while teaching full-time',
      author: 'Saule T.',
      category: 'Work-Life Balance',
      views: 756,
      likes: 54,
      comments: 15,
      timeAgo: '1 day ago',
    },
    {
      title: 'Professional development opportunities in Kazakhstan',
      author: 'Anonymous',
      category: 'Career Development',
      views: 623,
      likes: 41,
      comments: 12,
      timeAgo: '2 days ago',
    },
  ];

  const gamification = [
    { icon: Award, label: 'Helpful Contributor', points: 250, description: 'Help 50 teachers' },
    { icon: TrendingUp, label: 'Rising Star', points: 150, description: 'Get 100 likes on posts' },
    { icon: Users, label: 'Community Builder', points: 200, description: 'Start 25 discussions' },
  ];

  return (
    <div id="community" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text text-transparent">
            {t('community.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {t('community.desc')}
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            {t('community.create')}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Trending Discussions</h2>
            <div className="space-y-6">
              {trendingPosts.map((post, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-teal-600 transition-colors">
                        {post.title}
                      </h3>
                      <div className="flex items-center space-x-3 text-sm text-gray-500">
                        <span className="font-medium">{post.author}</span>
                        <span>•</span>
                        <span>{post.timeAgo}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-teal-100 text-teal-600 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center space-x-4 text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span className="text-sm">{post.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="h-4 w-4" />
                        <span className="text-sm">{post.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageSquare className="h-4 w-4" />
                        <span className="text-sm">{post.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Categories</h3>
              <div className="space-y-3">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 ${category.color} rounded-full`}></div>
                      <span className="font-medium text-gray-700">{category.name}</span>
                    </div>
                    <span className="text-sm text-gray-500">{category.count}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-600 to-teal-700 text-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-4">Your Progress</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-blue-100">Level 3</span>
                    <span className="text-blue-100">650/1000 pts</span>
                  </div>
                  <div className="w-full bg-blue-900/50 rounded-full h-3">
                    <div className="bg-blue-300 h-3 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
                <div className="border-t border-teal-500 pt-4 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-100">Posts Created</span>
                    <span className="font-bold">12</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-100">Helpful Answers</span>
                    <span className="font-bold">28</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-100">Total Likes</span>
                    <span className="font-bold">156</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 rounded-3xl shadow-xl">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Achievements & Badges</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {gamification.map((achievement, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-blue-500 to-green-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <achievement.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{achievement.label}</h3>
                <p className="text-gray-600 text-sm mb-3">{achievement.description}</p>
                <div className="text-teal-600 font-bold">{achievement.points} points</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
