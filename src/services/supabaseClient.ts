import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Profile = {
  id: string;
  user_id: string;
  full_name: string;
  email: string;
  role: 'teacher' | 'psychologist' | 'admin';
  avatar_url?: string;
  bio?: string;
  phone?: string;
  location?: string;
  language_preference: 'kk' | 'ru' | 'en';
  points: number;
  created_at: string;
};

export type Psychologist = {
  id: string;
  profile_id: string;
  specialization: string[];
  license_number: string;
  license_verified: boolean;
  years_experience: number;
  education?: string;
  languages: string[];
  hourly_rate?: number;
  rating: number;
  total_sessions: number;
  is_accepting_clients: boolean;
};

export type Booking = {
  id: string;
  teacher_id: string;
  psychologist_id: string;
  scheduled_at: string;
  duration_minutes: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  meeting_link?: string;
  session_notes?: string;
  rating?: number;
};

export type CommunityPost = {
  id: string;
  author_id: string;
  title: string;
  content: string;
  category: string;
  is_anonymous: boolean;
  tags: string[];
  views: number;
  likes: number;
  created_at: string;
};

export type Webinar = {
  id: string;
  title_kk: string;
  title_ru: string;
  title_en?: string;
  host_name: string;
  scheduled_at: string;
  meeting_link?: string;
  recording_url?: string;
  status: 'upcoming' | 'live' | 'completed' | 'cancelled';
  is_free: boolean;
  price: number;
};

// Authentication Functions
export const authFunctions = {
  // Sign up new user
  async signUp(email: string, password: string, fullName: string, role: 'teacher' | 'psychologist' = 'teacher') {
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (authError) throw authError;

    if (authData.user) {
      const { error: profileError } = await supabase.from('profiles').insert({
        user_id: authData.user.id,
        full_name: fullName,
        email,
        role,
        language_preference: 'kk',
      });

      if (profileError) throw profileError;
    }

    return authData;
  },

  // Sign in
  async signIn(email: string, password: string) {
    return await supabase.auth.signInWithPassword({
      email,
      password,
    });
  },

  // Sign out
  async signOut() {
    return await supabase.auth.signOut();
  },

  // Get current user
  async getCurrentUser() {
    const { data: { user } } = await supabase.auth.getUser();
    return user;
  },
};

// Profile Functions
export const profileFunctions = {
  // Get user profile
  async getProfile(userId: string) {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('user_id', userId)
      .maybeSingle();

    if (error) throw error;
    return data as Profile | null;
  },

  // Update profile
  async updateProfile(userId: string, updates: Partial<Profile>) {
    const { data, error } = await supabase
      .from('profiles')
      .update(updates)
      .eq('user_id', userId)
      .select()
      .maybeSingle();

    if (error) throw error;
    return data as Profile;
  },

  // Get all teachers
  async getTeachers() {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('role', 'teacher');

    if (error) throw error;
    return data as Profile[];
  },
};

// Psychologist Functions
export const psychologistFunctions = {
  // Get all verified psychologists
  async getVerifiedPsychologists() {
    const { data, error } = await supabase
      .from('psychologists')
      .select(`
        *,
        profile_id:profiles(full_name, email, bio)
      `)
      .eq('license_verified', true)
      .eq('is_accepting_clients', true);

    if (error) throw error;
    return data;
  },

  // Get psychologist by profile ID
  async getPsychologistByProfileId(profileId: string) {
    const { data, error } = await supabase
      .from('psychologists')
      .select('*')
      .eq('profile_id', profileId)
      .maybeSingle();

    if (error) throw error;
    return data as Psychologist | null;
  },
};

// Booking Functions
export const bookingFunctions = {
  // Create booking
  async createBooking(teacherId: string, psychologistId: string, scheduledAt: string) {
    const { data, error } = await supabase
      .from('bookings')
      .insert({
        teacher_id: teacherId,
        psychologist_id: psychologistId,
        scheduled_at: scheduledAt,
        status: 'pending',
      })
      .select()
      .maybeSingle();

    if (error) throw error;
    return data as Booking;
  },

  // Get teacher's bookings
  async getTeacherBookings(teacherId: string) {
    const { data, error } = await supabase
      .from('bookings')
      .select('*')
      .eq('teacher_id', teacherId);

    if (error) throw error;
    return data as Booking[];
  },

  // Update booking status
  async updateBookingStatus(bookingId: string, status: string) {
    const { data, error } = await supabase
      .from('bookings')
      .update({ status })
      .eq('id', bookingId)
      .select()
      .maybeSingle();

    if (error) throw error;
    return data as Booking;
  },
};

// Community Functions
export const communityFunctions = {
  // Get all posts
  async getAllPosts(limit = 10, offset = 0) {
    const { data, error } = await supabase
      .from('community_posts')
      .select('*')
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1);

    if (error) throw error;
    return data as CommunityPost[];
  },

  // Create post
  async createPost(authorId: string, title: string, content: string, category: string, isAnonymous = false) {
    const { data, error } = await supabase
      .from('community_posts')
      .insert({
        author_id: authorId,
        title,
        content,
        category,
        is_anonymous: isAnonymous,
      })
      .select()
      .maybeSingle();

    if (error) throw error;
    return data as CommunityPost;
  },

  // Like post
  async likePost(postId: string) {
    const { data, error } = await supabase
      .from('community_posts')
      .update({ likes: supabase.rpc('increment', { x: 1 }) })
      .eq('id', postId)
      .select()
      .maybeSingle();

    if (error) throw error;
    return data as CommunityPost;
  },
};

// Webinar Functions
export const webinarFunctions = {
  // Get upcoming webinars
  async getUpcomingWebinars() {
    const { data, error } = await supabase
      .from('webinars')
      .select('*')
      .eq('status', 'upcoming')
      .order('scheduled_at', { ascending: true });

    if (error) throw error;
    return data as Webinar[];
  },

  // Register for webinar
  async registerForWebinar(webinarId: string, teacherId: string) {
    const { data, error } = await supabase
      .from('webinar_registrations')
      .insert({
        webinar_id: webinarId,
        teacher_id: teacherId,
      })
      .select()
      .maybeSingle();

    if (error) throw error;
    return data;
  },
};

// Resources Functions
export const resourceFunctions = {
  // Get resources by type
  async getResourcesByType(type: string, language: 'kk' | 'ru' | 'en' = 'kk') {
    const { data, error } = await supabase
      .from('resources')
      .select('*')
      .eq('type', type)
      .order('published_at', { ascending: false });

    if (error) throw error;
    return data as any[];
  },

  // Get featured resources
  async getFeaturedResources() {
    const { data, error } = await supabase
      .from('resources')
      .select('*')
      .eq('is_featured', true)
      .limit(6);

    if (error) throw error;
    return data as any[];
  },
};
