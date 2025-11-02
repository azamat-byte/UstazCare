# UstazCare - Database & Name Change Guide

## Part 1: Where to Change Website Names

### 1. **Main Platform Name** (Most Important)
**File:** `src/contexts/LanguageContext.tsx`

**Lines to change:**
- Line with `'hero.title': 'UstazCare'` in Kazakh section
- Line with `'hero.title': 'UstazCare'` in Russian section
- Line with `'hero.title': 'UstazCare'` in English section

**Example:**
```typescript
'hero.title': 'YourNewName',  // Change from 'UstazCare' to your name
```

### 2. **Navigation Bar & Header**
**File:** `src/components/Layout.tsx`

**Lines to change:**
- Line 55: `<span className="text-2xl font-bold">UstazCare</span>` (Header logo)
- Line 147: `<span className="text-2xl font-bold">UstazCare</span>` (Footer logo)

### 3. **Footer Copyright**
**File:** `src/components/Layout.tsx`

**Line 206:**
```typescript
<p className="text-gray-400 text-sm">&copy; 2025 UstazCare. Барлық құқықтар қорғалған.</p>
```
Change `UstazCare` to your new name

**Line 207:**
```typescript
<p className="text-gray-500 text-sm">Назарбаев Университеті</p>
```
Change university name if needed

### 4. **Other References**
Search for `UstazCare` in these files:
- `src/components/AboutPage.tsx` - Description text
- `src/components/HomePage.tsx` - Testimonials
- `src/components/ResourcesPage.tsx` - Author credits
- `src/components/ContactPage.tsx` - FAQ questions
- `src/components/ResearchPage.tsx` - Research group name

---

## Part 2: Database Structure

### Tables Created:

#### 1. **profiles**
Stores user information for teachers and psychologists
- `id` - Unique identifier
- `user_id` - Link to Supabase auth
- `full_name` - User's name
- `email` - Email address
- `role` - 'teacher' or 'psychologist'
- `points` - Gamification points
- `language_preference` - User's language (kk, ru, en)

#### 2. **psychologists**
Professional psychologist information
- `profile_id` - Link to profiles table
- `specialization` - Array of specialties
- `license_number` - License ID
- `license_verified` - Verification status
- `languages` - Supported languages
- `hourly_rate` - Consultation fee
- `rating` - Average rating (0.0-5.0)

#### 3. **bookings**
Appointment bookings
- `teacher_id` - Teacher's profile
- `psychologist_id` - Psychologist's profile
- `scheduled_at` - Appointment time
- `status` - pending/confirmed/completed/cancelled
- `meeting_link` - Video call link
- `rating` - Session rating

#### 4. **community_posts**
Forum discussion posts
- `author_id` - Post author
- `title` - Post title
- `content` - Post content
- `category` - Post category
- `is_anonymous` - Anonymous posting flag
- `views` - View count
- `likes` - Like count

#### 5. **post_comments**
Comments on community posts
- `post_id` - Parent post
- `author_id` - Comment author
- `content` - Comment text
- `is_anonymous` - Anonymous flag
- `helpful_votes` - Helpful vote count

#### 6. **resources**
Educational content library
- `title_kk`, `title_ru`, `title_en` - Titles in three languages
- `description_kk`, `description_ru`, `description_en` - Descriptions
- `type` - article/guide/video/podcast/tool
- `category` - Content category
- `video_url` - Video link if applicable
- `rating` - Content rating

#### 7. **webinars**
Training and webinar sessions
- `title_kk`, `title_ru`, `title_en` - Webinar titles
- `host_name` - Presenter name
- `scheduled_at` - Event time
- `meeting_link` - Webinar link
- `status` - upcoming/live/completed/cancelled
- `recording_url` - Video recording link

#### 8. **webinar_registrations**
Track teacher registrations for webinars
- `webinar_id` - Webinar reference
- `teacher_id` - Teacher reference
- `attended` - Attendance status
- `feedback` - Attendee feedback

---

## Part 3: Security Features

### Row Level Security (RLS) Policies
All tables have RLS enabled to ensure data privacy:

**Key Policies:**
- ✅ Users can only view/edit their own profiles
- ✅ Teachers can only see verified psychologists
- ✅ Psychologists can only see their own bookings
- ✅ Community posts and resources are viewable to all authenticated users
- ✅ Users can only create registrations for themselves

---

## Part 4: Database Credentials

Your Supabase credentials are in: `.env`

```
VITE_SUPABASE_URL=https://bdcggoosngbrwamshnsz.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Keep these secret!** Never commit them to public repositories.

---

## Part 5: How to Use the Database in Your App

### Example: Connect to Supabase

```typescript
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
)

// Get current user
const { data: { user } } = await supabase.auth.getUser()

// Query profiles
const { data: profiles } = await supabase
  .from('profiles')
  .select('*')
  .eq('role', 'teacher')

// Insert new booking
const { data: booking } = await supabase
  .from('bookings')
  .insert([{
    teacher_id: userId,
    psychologist_id: psychId,
    scheduled_at: new Date(),
    status: 'pending'
  }])
```

---

## Part 6: Quick Reference - All Tables

| Table | Purpose | Main Fields |
|-------|---------|------------|
| profiles | User accounts | id, user_id, full_name, role, points |
| psychologists | Psychologist profiles | profile_id, license_number, rating, languages |
| bookings | Appointment scheduling | teacher_id, psychologist_id, scheduled_at, status |
| community_posts | Discussion forum | author_id, title, content, category, likes |
| post_comments | Forum comments | post_id, author_id, content, helpful_votes |
| resources | Educational content | title_*, description_*, type, category |
| webinars | Training sessions | title_*, host_name, scheduled_at, recording_url |
| webinar_registrations | Webinar signups | webinar_id, teacher_id, attended |

---

## Next Steps:

1. **Change website name:** Update translation files and component files
2. **Add authentication:** Implement login/signup with Supabase Auth
3. **Connect frontend:** Use Supabase client library to fetch/update data
4. **Create admin panel:** Manage psychologists, resources, webinars
5. **Add features:** Booking system, community features, payment integration

---

For questions or issues, contact: support@ustazcare.kz
