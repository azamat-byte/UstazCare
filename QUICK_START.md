# UstazCare - Quick Start Guide

## What Was Created

✅ **Beautiful, modern website** with Teal color scheme
✅ **Fully bilingual** - Kazakh (default), Russian, English
✅ **Database structure** - 8 tables ready for production
✅ **Security policies** - Row Level Security enabled
✅ **Reusable functions** - Easy database integration

---

## Step 1: Change Website Name

### Option A - Quick Replace (Simple)
1. Open `src/contexts/LanguageContext.tsx`
2. Find: `'hero.title': 'UstazCare'`
3. Replace all 3 instances with your new name

### Option B - Complete Rebrand (Thorough)
Use the guide: `DATABASE_AND_NAMES_GUIDE.md` for all locations

---

## Step 2: Database Setup (Already Done!)

✅ All 8 tables created
✅ Security policies enabled
✅ Indexes added for performance
✅ Ready to use!

---

## Step 3: Connect Your App to Database

### Example 1: Get Current User Profile

```typescript
import { authFunctions, profileFunctions } from './services/supabaseClient'

// Get logged-in user
const user = await authFunctions.getCurrentUser()

// Get their profile
if (user) {
  const profile = await profileFunctions.getProfile(user.id)
  console.log(profile)
}
```

### Example 2: Display Psychologists

```typescript
import { psychologistFunctions } from './services/supabaseClient'

// Get all verified psychologists
const psychologists = await psychologistFunctions.getVerifiedPsychologists()
console.log(psychologists)
```

### Example 3: Create Booking

```typescript
import { bookingFunctions } from './services/supabaseClient'

// Book an appointment
const booking = await bookingFunctions.createBooking(
  teacherId,
  psychologistId,
  '2025-01-15T10:00:00'
)
```

### Example 4: Community Posts

```typescript
import { communityFunctions } from './services/supabaseClient'

// Get all posts
const posts = await communityFunctions.getAllPosts(10, 0)

// Create new post
const newPost = await communityFunctions.createPost(
  userId,
  'How to manage stress?',
  'I find it hard to relax after work...',
  'Stress Management',
  false
)
```

---

## Database Structure Overview

```
profiles
├── id, user_id, full_name, email, role
├── points, language_preference, badges

psychologists
├── profile_id, license_number, specialization
├── languages, hourly_rate, rating, availability

bookings
├── teacher_id, psychologist_id, scheduled_at
├── status, meeting_link, rating

community_posts
├── author_id, title, content, category
├── is_anonymous, views, likes, tags

post_comments
├── post_id, author_id, content
├── helpful_votes, is_anonymous

resources
├── title_kk, title_ru, title_en
├── description, content, type, category
├── views, rating, is_featured

webinars
├── title_kk, title_ru, title_en
├── host_name, scheduled_at, status
├── meeting_link, recording_url, is_free

webinar_registrations
├── webinar_id, teacher_id
├── attended, feedback, rating
```

---

## Common Tasks

### Add New User
```typescript
import { authFunctions } from './services/supabaseClient'

await authFunctions.signUp(
  'teacher@example.com',
  'securePassword123',
  'Айгүл Қабиева',
  'teacher'
)
```

### Update User Profile
```typescript
import { profileFunctions } from './services/supabaseClient'

await profileFunctions.updateProfile(userId, {
  bio: 'Biology teacher with 10 years experience',
  location: 'Astana, Kazakhstan',
  language_preference: 'kk'
})
```

### Get User's Bookings
```typescript
import { bookingFunctions } from './services/supabaseClient'

const bookings = await bookingFunctions.getTeacherBookings(teacherId)
```

### Get Featured Resources
```typescript
import { resourceFunctions } from './services/supabaseClient'

const featuredResources = await resourceFunctions.getFeaturedResources()
```

### Get Upcoming Webinars
```typescript
import { webinarFunctions } from './services/supabaseClient'

const webinars = await webinarFunctions.getUpcomingWebinars()
```

---

## Security

### All Data is Protected with RLS

✅ Teachers can only see their own bookings
✅ Psychologists can only see their approved sessions
✅ Users can only edit their own profiles
✅ Community content is viewable by all authenticated users
✅ Webinars and resources are public

---

## Files You Might Want to Edit

| File | Purpose |
|------|---------|
| `src/contexts/LanguageContext.tsx` | Change website name & translations |
| `src/components/Layout.tsx` | Header, footer, navigation |
| `src/components/HomePage.tsx` | Hero section, testimonials |
| `src/services/supabaseClient.ts` | Database functions |
| `.env` | Database credentials (keep secret!) |

---

## Next Steps

1. **Replace website name** in LanguageContext.tsx
2. **Add authentication forms** (login, signup)
3. **Create admin dashboard** to manage psychologists
4. **Build booking interface** for teacher appointments
5. **Set up payment system** (optional)
6. **Deploy to production**

---

## Useful Links

- **Supabase Dashboard:** https://app.supabase.com
- **Supabase Docs:** https://supabase.com/docs
- **React Docs:** https://react.dev
- **Tailwind CSS:** https://tailwindcss.com

---

## Support

For issues or questions:
- Check the database guide: `DATABASE_AND_NAMES_GUIDE.md`
- Review the service file: `src/services/supabaseClient.ts`
- Contact: support@ustazcare.kz

Good luck! 🎉
