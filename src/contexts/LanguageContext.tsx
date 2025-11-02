import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'kk' | 'ru' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  kk: {
    'nav.home': 'Басты бет',
    'nav.about': 'Біз туралы',
    'nav.services': 'Қызметтер',
    'nav.community': 'Қауымдастық',
    'nav.resources': 'Ресурстар',
    'nav.experts': 'Мамандар',
    'nav.research': 'Зерттеулер',
    'nav.commercialization': 'Коммерциализация',
    'nav.contact': 'Байланыс',

    'hero.title': 'UstazCare',
    'hero.subtitle': 'Мұғалімдерге арналған психологиялық қолдау',
    'hero.description': 'Қазақстандағы жас мұғалімдерге стрессті басқаруға, психологтармен байланысуға және кәсіби кеңес алуға көмектесетін платформа',
    'hero.cta.psychologist': 'Психологпен сөйлесу',
    'hero.cta.community': 'Қауымдастыққа қосылу',

    'features.title': 'Біздің қызметтер',
    'features.counseling.title': 'Психологиялық кеңес',
    'features.counseling.desc': 'Лицензияланған психологтардан жеке кеңес алыңыз',
    'features.community.title': 'Қолдау қауымдастығы',
    'features.community.desc': 'Басқа мұғалімдермен тәжірибе алмасыңыз',
    'features.webinars.title': 'Вебинарлар және тренингтер',
    'features.webinars.desc': 'Кәсіби дамуға арналған оқу сессиялары',
    'features.resources.title': 'Білім ресурстары',
    'features.resources.desc': 'Психикалық денсаулық және стресс басқару бойынша мақалалар мен нұсқаулықтар',

    'stats.teachers': 'Мұғалімдер',
    'stats.psychologists': 'Психологтар',
    'stats.sessions': 'Сессиялар',
    'stats.satisfaction': 'Қанағаттану',

    'testimonials.title': 'Мұғалімдер не айтады',

    'footer.slogan': 'Мұғалімдерді қолдау арқылы білім беруді жақсартамыз',
    'footer.quick_links': 'Жылдам сілтемелер',
    'footer.support': 'Қолдау',
    'footer.legal': 'Құқықтық ақпарат',

    'about.mission.title': 'Біздің миссиямыз',
    'about.mission.desc': 'Қазақстандағы мұғалімдерге психологиялық қолдау, кәсіби дамыту және қауымдастық арқылы өмір сүру сапасын жақсарту',
    'about.vision.title': 'Біздің көзқарасымыз',
    'about.vision.desc': 'Әрбір мұғалімнің психикалық денсаулығы мен әл-ауқатына қол жетімді болатын білім беру жүйесі',
    'about.values.title': 'Біздің құндылықтарымыз',

    'services.counseling.title': 'Психологиялық кеңес беру',
    'services.counseling.desc': 'Лицензияланған психологтармен жеке және топтық сессиялар',
    'services.mentorship.title': 'Менторлық бағдарламалар',
    'services.mentorship.desc': 'Тәжірибелі мұғалімдермен жұптасу',
    'services.stress.title': 'Стресс бағалау',
    'services.stress.desc': 'AI негізіндегі өздік бағалау құралдары',
    'services.anonymous.title': 'Анонимді чат',
    'services.anonymous.desc': 'Құпия кеңес және қолдау',

    'community.title': 'Мұғалімдер қауымдастығы',
    'community.desc': 'Тәжірибе алмасыңыз, сұрақтар қойыңыз және қолдау табыңыз',
    'community.create': 'Жаңа пост жасау',

    'experts.title': 'Біздің психологтар',
    'experts.desc': 'Мұғалімдерге арналған лицензияланған мамандар',
    'experts.book': 'Кездесу жазу',
    'experts.rating': 'Рейтинг',
    'experts.sessions': 'Сессиялар',

    'resources.title': 'Білім ресурстары',
    'resources.desc': 'Психикалық денсаулық және кәсіби дамуға арналған мақалалар, нұсқаулықтар және құралдар',
    'resources.filter.all': 'Барлығы',
    'resources.filter.articles': 'Мақалалар',
    'resources.filter.guides': 'Нұсқаулықтар',
    'resources.filter.videos': 'Бейнелер',

    'research.title': 'Зерттеу және инновациялар',
    'research.desc': 'Академиялық зерттеулер және дамып келе жатқан технологиялар',
    'research.current.title': 'Ағымдағы зерттеулер',
    'research.innovations.title': 'Инновациялық құралдар',

    'commercialization.title': 'Жоспарлар және бағалар',
    'commercialization.desc': 'Сіздің қажеттіліктеріңізге сәйкес жоспарды таңдаңыз',
    'commercialization.free': 'Тегін',
    'commercialization.premium': 'Премиум',
    'commercialization.institution': 'Мекемелерге',

    'contact.title': 'Байланыс',
    'contact.desc': 'Біз көмектесуге дайынбыз',
    'contact.form.name': 'Аты-жөні',
    'contact.form.email': 'Электрондық пошта',
    'contact.form.message': 'Хабарлама',
    'contact.form.submit': 'Жіберу',
    'contact.faq.title': 'Жиі қойылатын сұрақтар',
    
    'testimonials.teacher1.name': 'Айгүл Қ.',
    'testimonials.teacher1.role': 'Бастауыш сынып мұғалімі',
    'testimonials.teacher1.text': 'UstazCare маған қиын кезеңде үлкен көмек болды. Психологпен сөйлесу өте пайдалы болды.',
    'testimonials.teacher2.name': 'Олег В.',
    'testimonials.teacher2.role': 'Математика мұғалімі',
    'testimonials.teacher2.text': 'Қауымдастықта басқа мұғалімдермен тәжірибе алмасу мүмкіндігі өте маңызды. Рақмет!',
    'testimonials.teacher3.name': 'Динара С.',
    'testimonials.teacher3.role': 'Ағылшын тілі мұғалімі',
    'testimonials.teacher3.text': 'Вебинарлар мен ресурстар менің кәсіби дамуыма үлкен ықпал етті.',

    'values.innovation.title': 'Инновация',
    'values.innovation.desc': 'AI негізіндегі стресс бағалау және жекелендірілген ұсыныстар',
    'values.excellence.title': 'Кәсібилік',
    'values.excellence.desc': 'Лицензияланған мамандар және дәлелді тәсілдер',
    'values.privacy.title': 'Құпиялылық',
    'values.privacy.desc': 'Анонимді қолдау және құпия кеңестер',
  },
  ru: {
    'nav.home': 'Главная',
    'nav.about': 'О нас',
    'nav.services': 'Услуги',
    'nav.community': 'Сообщество',
    'nav.resources': 'Ресурсы',
    'nav.experts': 'Эксперты',
    'nav.research': 'Исследования',
    'nav.commercialization': 'Коммерциализация',
    'nav.contact': 'Контакты',

    'hero.title': 'UstazCare',
    'hero.subtitle': 'Психологическая поддержка для учителей',
    'hero.description': 'Платформа для молодых учителей Казахстана, помогающая управлять стрессом, связываться с психологами и получать профессиональные советы',
    'hero.cta.psychologist': 'Поговорить с психологом',
    'hero.cta.community': 'Присоединиться к сообществу',

    'features.title': 'Наши услуги',
    'features.counseling.title': 'Психологическое консультирование',
    'features.counseling.desc': 'Индивидуальные консультации с лицензированными психологами',
    'features.community.title': 'Сообщество поддержки',
    'features.community.desc': 'Обменивайтесь опытом с другими учителями',
    'features.webinars.title': 'Вебинары и тренинги',
    'features.webinars.desc': 'Учебные сессии для профессионального развития',
    'features.resources.title': 'Образовательные ресурсы',
    'features.resources.desc': 'Статьи и руководства по психическому здоровью и управлению стрессом',

    'stats.teachers': 'Учителей',
    'stats.psychologists': 'Психологов',
    'stats.sessions': 'Сессий',
    'stats.satisfaction': 'Удовлетворенность',

    'testimonials.title': 'Что говорят учителя',

    'footer.slogan': 'Улучшаем образование через поддержку учителей',
    'footer.quick_links': 'Быстрые ссылки',
    'footer.support': 'Поддержка',
    'footer.legal': 'Правовая информация',

    'about.mission.title': 'Наша миссия',
    'about.mission.desc': 'Улучшить качество жизни учителей в Казахстане через психологическую поддержку, профессиональное развитие и сообщество',
    'about.vision.title': 'Наше видение',
    'about.vision.desc': 'Система образования, где психическое здоровье и благополучие каждого учителя является приоритетом',
    'about.values.title': 'Наши ценности',

    'services.counseling.title': 'Психологическое консультирование',
    'services.counseling.desc': 'Индивидуальные и групповые сессии с лицензированными психологами',
    'services.mentorship.title': 'Программы менторства',
    'services.mentorship.desc': 'Партнерство с опытными учителями',
    'services.stress.title': 'Оценка стресса',
    'services.stress.desc': 'Инструменты самооценки на основе AI',
    'services.anonymous.title': 'Анонимный чат',
    'services.anonymous.desc': 'Конфиденциальные консультации и поддержка',

    'community.title': 'Сообщество учителей',
    'community.desc': 'Обменивайтесь опытом, задавайте вопросы и находите поддержку',
    'community.create': 'Создать новый пост',

    'experts.title': 'Наши психологи',
    'experts.desc': 'Лицензированные специалисты для учителей',
    'experts.book': 'Записаться',
    'experts.rating': 'Рейтинг',
    'experts.sessions': 'Сессий',

    'resources.title': 'Образовательные ресурсы',
    'resources.desc': 'Статьи, руководства и инструменты для психического здоровья и профессионального развития',
    'resources.filter.all': 'Все',
    'resources.filter.articles': 'Статьи',
    'resources.filter.guides': 'Руководства',
    'resources.filter.videos': 'Видео',

    'research.title': 'Исследования и инновации',
    'research.desc': 'Академические исследования и развивающиеся технологии',
    'research.current.title': 'Текущие исследования',
    'research.innovations.title': 'Инновационные инструменты',

    'commercialization.title': 'Планы и цены',
    'commercialization.desc': 'Выберите план, соответствующий вашим потребностям',
    'commercialization.free': 'Бесплатно',
    'commercialization.premium': 'Премиум',
    'commercialization.institution': 'Для организаций',

    'contact.title': 'Контакты',
    'contact.desc': 'Мы готовы помочь',
    'contact.form.name': 'Имя',
    'contact.form.email': 'Электронная почта',
    'contact.form.message': 'Сообщение',
    'contact.form.submit': 'Отправить',
    'contact.faq.title': 'Часто задаваемые вопросы',
    
    'testimonials.teacher1.name': 'Айгуль К.',
    'testimonials.teacher1.role': 'Учитель начальных классов',
    'testimonials.teacher1.text': 'UstazCare очень помог мне в трудный период. Разговор с психологом был очень полезным.',
    'testimonials.teacher2.name': 'Олег В.',
    'testimonials.teacher2.role': 'Учитель математики',
    'testimonials.teacher2.text': 'Возможность обмениваться опытом с другими учителями в сообществе очень важна. Спасибо!',
    'testimonials.teacher3.name': 'Динара С.',
    'testimonials.teacher3.role': 'Учитель английского языка',
    'testimonials.teacher3.text': 'Вебинары и ресурсы оказали большое влияние на мое профессиональное развитие.',

    'values.innovation.title': 'Инновации',
    'values.innovation.desc': 'Оценка стресса на основе AI и персонализированные рекомендации',
    'values.excellence.title': 'Профессионализм',
    'values.excellence.desc': 'Лицензированные специалисты и научно обоснованные подходы',
    'values.privacy.title': 'Конфиденциальность',
    'values.privacy.desc': 'Анонимная поддержка и конфиденциальные консультации',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.community': 'Community',
    'nav.resources': 'Resources',
    'nav.experts': 'Experts',
    'nav.research': 'Research',
    'nav.commercialization': 'Commercialization',
    'nav.contact': 'Contact',

    'hero.title': 'UstazCare',
    'hero.subtitle': 'Psychological Support for Teachers',
    'hero.description': 'A platform helping young teachers in Kazakhstan manage stress, connect with psychologists, and get professional advice',
    'hero.cta.psychologist': 'Talk to a Psychologist',
    'hero.cta.community': 'Join the Community',

    'features.title': 'Our Services',
    'features.counseling.title': 'Psychological Counseling',
    'features.counseling.desc': 'One-on-one sessions with licensed psychologists',
    'features.community.title': 'Support Community',
    'features.community.desc': 'Share experiences with fellow teachers',
    'features.webinars.title': 'Webinars & Training',
    'features.webinars.desc': 'Educational sessions for professional development',
    'features.resources.title': 'Educational Resources',
    'features.resources.desc': 'Articles and guides on mental health and stress management',

    'stats.teachers': 'Teachers',
    'stats.psychologists': 'Psychologists',
    'stats.sessions': 'Sessions',
    'stats.satisfaction': 'Satisfaction',

    'testimonials.title': 'What Teachers Say',

    'footer.slogan': 'Improving education through teacher support',
    'footer.quick_links': 'Quick Links',
    'footer.support': 'Support',
    'footer.legal': 'Legal',

    'about.mission.title': 'Our Mission',
    'about.mission.desc': 'To improve the quality of life for teachers in Kazakhstan through psychological support, professional development, and community',
    'about.vision.title': 'Our Vision',
    'about.vision.desc': 'An education system where every teacher\'s mental health and well-being is a priority',
    'about.values.title': 'Our Values',

    'services.counseling.title': 'Psychological Counseling',
    'services.counseling.desc': 'Individual and group sessions with licensed psychologists',
    'services.mentorship.title': 'Mentorship Programs',
    'services.mentorship.desc': 'Partnering with experienced teachers',
    'services.stress.title': 'Stress Assessment',
    'services.stress.desc': 'AI-based self-assessment tools',
    'services.anonymous.title': 'Anonymous Chat',
    'services.anonymous.desc': 'Confidential advice and support',

    'community.title': 'Teacher Community',
    'community.desc': 'Share experiences, ask questions, and find support',
    'community.create': 'Create New Post',

    'experts.title': 'Our Psychologists',
    'experts.desc': 'Licensed professionals for teachers',
    'experts.book': 'Book Session',
    'experts.rating': 'Rating',
    'experts.sessions': 'Sessions',

    'resources.title': 'Educational Resources',
    'resources.desc': 'Articles, guides, and tools for mental health and professional development',
    'resources.filter.all': 'All',
    'resources.filter.articles': 'Articles',
    'resources.filter.guides': 'Guides',
    'resources.filter.videos': 'Videos',

    'research.title': 'Research & Innovation',
    'research.desc': 'Academic research and emerging technologies',
    'research.current.title': 'Current Research',
    'research.innovations.title': 'Innovative Tools',

    'commercialization.title': 'Plans & Pricing',
    'commercialization.desc': 'Choose a plan that fits your needs',
    'commercialization.free': 'Free',
    'commercialization.premium': 'Premium',
    'commercialization.institution': 'For Institutions',

    'contact.title': 'Contact Us',
    'contact.desc': 'We\'re here to help',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send',
    'contact.faq.title': 'Frequently Asked Questions',
    
    'testimonials.teacher1.name': 'Aigul K.',
    'testimonials.teacher1.role': 'Primary School Teacher',
    'testimonials.teacher1.text': 'UstazCare was a great help to me during a difficult period. Talking to a psychologist was very beneficial.',
    'testimonials.teacher2.name': 'Oleg V.',
    'testimonials.teacher2.role': 'Math Teacher',
    'testimonials.teacher2.text': 'The opportunity to exchange experiences with other teachers in the community is very important. Thank you!',
    'testimonials.teacher3.name': 'Dinara S.',
    'testimonials.teacher3.role': 'English Teacher',
    'testimonials.teacher3.text': 'The webinars and resources have had a big impact on my professional development.',

    'values.innovation.title': 'Innovation',
    'values.innovation.desc': 'AI-powered stress assessment and personalized recommendations',
    'values.excellence.title': 'Excellence',
    'values.excellence.desc': 'Licensed professionals and evidence-based approaches',
    'values.privacy.title': 'Privacy',
    'values.privacy.desc': 'Anonymous support and confidential consultations',
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('kk');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
