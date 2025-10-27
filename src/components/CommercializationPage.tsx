import { Check, Star, Building, Users, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function CommercializationPage() {
  const { t } = useLanguage();

  const plans = [
    {
      name: t('commercialization.free'),
      price: 0,
      period: '/month',
      description: 'Perfect for getting started',
      icon: Users,
      color: 'from-gray-600 to-gray-700',
      features: [
        'Access to community forum',
        'Basic resources library',
        'Monthly group webinars',
        'Self-assessment tools',
        'Email support',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: t('commercialization.premium'),
      price: 12900,
      period: '/month',
      description: 'Complete support package',
      icon: Star,
      color: 'from-teal-500 to-teal-600',
      features: [
        'Everything in Free plan',
        '2 individual counseling sessions/month',
        'Unlimited community access',
        'Premium resources & tools',
        'All webinars & workshops',
        'AI stress assessment',
        'Priority booking',
        '24/7 anonymous chat',
        'Personal progress tracking',
      ],
      cta: 'Start Premium',
      popular: true,
    },
    {
      name: t('commercialization.institution'),
      price: 'Custom',
      period: '',
      description: 'For schools & organizations',
      icon: Building,
      color: 'from-green-500 to-green-600',
      features: [
        'Everything in Premium plan',
        'Unlimited staff members',
        'Dedicated account manager',
        'Custom training programs',
        'On-site workshops available',
        'Organization analytics',
        'Bulk session packages',
        'Priority support',
        'Custom integration',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  const partnerships = [
    {
      type: 'Schools',
      description: 'Partner schools receive discounted rates and dedicated support',
      benefit: 'Up to 40% discount',
    },
    {
      type: 'Universities',
      description: 'Collaboration on research and training programs',
      benefit: 'Research partnerships',
    },
    {
      type: 'NGOs',
      description: 'Joint initiatives for teacher welfare programs',
      benefit: 'Special packages',
    },
    {
      type: 'Government',
      description: 'Large-scale implementation for public education sector',
      benefit: 'Enterprise solutions',
    },
  ];

  const revenueStreams = [
    {
      title: 'Subscription Model',
      description: 'Individual and institutional subscriptions',
      icon: Zap,
    },
    {
      title: 'Corporate Partnerships',
      description: 'B2B deals with educational institutions',
      icon: Building,
    },
    {
      title: 'Training & Workshops',
      description: 'Professional development programs',
      icon: Users,
    },
    {
      title: 'Licensing',
      description: 'Technology and content licensing',
      icon: Star,
    },
  ];

  return (
    <div id="commercialization" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text text-transparent">
            {t('commercialization.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('commercialization.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-300 ${
                plan.popular ? 'scale-105 border-4 border-teal-500' : 'hover:scale-105'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-2 text-sm font-bold rounded-bl-2xl">
                  Most Popular
                </div>
              )}
              <div className={`bg-gradient-to-br ${plan.color} text-white p-8`}>
                <plan.icon className="h-12 w-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-white/80 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline">
                  {typeof plan.price === 'number' ? (
                    <>
                      <span className="text-5xl font-bold">{plan.price.toLocaleString()}</span>
                      <span className="text-xl ml-2">₸</span>
                      <span className="text-white/80 ml-1">{plan.period}</span>
                    </>
                  ) : (
                    <span className="text-4xl font-bold">{plan.price}</span>
                  )}
                </div>
              </div>
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-teal-500 to-teal-600 text-white hover:shadow-xl hover:scale-105'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">Partnership Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerships.map((partnership, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-3 text-gray-900">{partnership.type}</h3>
                <p className="text-gray-600 text-sm mb-4">{partnership.description}</p>
                <div className="px-3 py-2 bg-teal-100 text-teal-600 rounded-lg text-sm font-semibold text-center">
                  {partnership.benefit}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">Revenue Model</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {revenueStreams.map((stream, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-teal-50 to-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stream.icon className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{stream.title}</h3>
                <p className="text-gray-600 text-sm">{stream.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-teal-600 to-teal-700 text-white p-12 rounded-3xl shadow-2xl mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Market Opportunity</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div>
                <div className="text-4xl font-bold mb-2">180,000+</div>
                <p className="text-blue-100">Teachers in Kazakhstan</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">7,500+</div>
                <p className="text-blue-100">Schools nationwide</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">Growing</div>
                <p className="text-blue-100">Mental health awareness</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 rounded-3xl shadow-xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Support Our Mission</h2>
            <p className="text-lg text-gray-600 mb-8">
              Help us provide free mental health support to teachers who need it most. Your donation makes quality psychological care accessible to all educators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                Make a Donation
              </button>
              <button className="px-8 py-4 bg-gray-100 text-gray-800 rounded-full font-bold text-lg hover:bg-gray-200 transition-all duration-300">
                Become a Partner
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
