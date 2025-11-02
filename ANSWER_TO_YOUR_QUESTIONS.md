# Answer to Your Questions

## Question 1: Where Can I Change the Website Names?

### Main Platform Name (UstazCare)
**File:** `src/contexts/LanguageContext.tsx`

This is the MOST IMPORTANT file. Here's exactly where to change it:

```typescript
// Line with Kazakh name (around line with 'hero.title')
'hero.title': 'UstazCare',    ← CHANGE THIS to your new name

// Line with Russian name
'hero.title': 'UstazCare',    ← CHANGE THIS to your new name

// Line with English name
'hero.title': 'UstazCare',    ← CHANGE THIS to your new name
```

**Change all 3 to your desired platform name.**

### Header Logo
**File:** `src/components/Layout.tsx`
**Line 55:**
```typescript
<span className="text-2xl font-bold">UstazCare</span>  ← CHANGE THIS
```

### Footer Logo
**File:** `src/components/Layout.tsx`
**Line 147:**
```typescript
<span className="text-2xl font-bold">UstazCare</span>  ← CHANGE THIS
```

### Footer Copyright Text
**File:** `src/components/Layout.tsx`
**Line 206:**
```typescript
<p className="text-gray-400 text-sm">&copy; 2025 UstazCare. Барлық құқықтар қорғалған.</p>
                                              ↑ CHANGE THIS
```

### Footer Organization Name
**File:** `src/components/Layout.tsx`
**Line 207:**
```typescript
<p className="text-gray-500 text-sm">Назарбаев Университеті</p>
                                      ↑ CHANGE THIS if needed
```

### Other References
Search for "UstazCare" in these files and update as needed:
- `src/components/AboutPage.tsx` - Description text
- `src/components/HomePage.tsx` - Testimonial content
- `src/components/ResourcesPage.tsx` - Author references
- `src/components/ContactPage.tsx` - FAQ questions
- `src/components/ResearchPage.tsx` - Research group name

---

## Question 2: Database - Already Created!

### ✅ What's Been Set Up

I've created a complete production-ready database with:

**8 Tables:**
1. **profiles** - User accounts (teachers & psychologists)
2. **psychologists** - Professional therapist information
3. **bookings** - Appointment scheduling system
4. **community_posts** - Discussion forum posts
5. **post_comments** - Comments on forum posts
6. **resources** - Educational content (articles, guides, videos)
7. **webinars** - Training sessions and events
8. **webinar_registrations** - Webinar attendance tracking

**Security Features:**
- Row Level Security (RLS) enabled on all tables
- User privacy policies
- Data encryption
- Access control

### Database Credentials (in `.env`)
```
VITE_SUPABASE_URL=https://bdcggoosngbrwamshnsz.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

⚠️ **KEEP THESE SECRET!** Never commit `.env` to public repositories.

---

## How to Use the Database

### Ready-to-Use Functions

I've created a complete service file with functions: `src/services/supabaseClient.ts`

**Authentication:**
```typescript
import { authFunctions } from './services/supabaseClient'

// Sign up new user
await authFunctions.signUp(email, password, fullName, 'teacher')

// Sign in
await authFunctions.signIn(email, password)

// Get current user
const user = await authFunctions.getCurrentUser()
```

**Get Profiles:**
```typescript
import { profileFunctions } from './services/supabaseClient'

// Get user's profile
const profile = await profileFunctions.getProfile(userId)

// Update profile
await profileFunctions.updateProfile(userId, {
  bio: 'My bio here',
  location: 'Astana, Kazakhstan'
})
```

**Get Psychologists:**
```typescript
import { psychologistFunctions } from './services/supabaseClient'

// Get all verified psychologists
const psychologists = await psychologistFunctions.getVerifiedPsychologists()
```

**Create Bookings:**
```typescript
import { bookingFunctions } from './services/supabaseClient'

// Book appointment
const booking = await bookingFunctions.createBooking(
  teacherId,
  psychologistId,
  '2025-01-15T10:00:00'
)
```

**Community Posts:**
```typescript
import { communityFunctions } from './services/supabaseClient'

// Get all posts
const posts = await communityFunctions.getAllPosts(10, 0)

// Create post
await communityFunctions.createPost(
  userId,
  'Post Title',
  'Post content here',
  'Stress Management',
  false  // isAnonymous
)
```

**Webinars:**
```typescript
import { webinarFunctions } from './services/supabaseClient'

// Get upcoming webinars
const webinars = await webinarFunctions.getUpcomingWebinars()

// Register for webinar
await webinarFunctions.registerForWebinar(webinarId, teacherId)
```

---

## Database Table Details

### profiles
Stores user information for both teachers and psychologists
```
- id                   UUID (unique identifier)
- user_id             UUID (links to Supabase auth)
- full_name           Text (user's name)
- email               Text (email address)
- role                Text ('teacher' or 'psychologist')
- language_preference Text ('kk', 'ru', or 'en')
- points              Number (gamification)
- created_at          Timestamp
- updated_at          Timestamp
```

### psychologists
Professional information for therapists
```
- id                  UUID
- profile_id          UUID (links to profiles)
- specialization      Array (e.g., ['Stress', 'Anxiety'])
- license_number      Text
- license_verified    Boolean
- years_experience    Number
- languages           Array ['kk', 'ru']
- hourly_rate         Number (in tenge)
- rating              Number (0.0-5.0)
- is_accepting_clients Boolean
```

### bookings
Appointment scheduling system
```
- id                  UUID
- teacher_id          UUID (links to profiles)
- psychologist_id     UUID (links to psychologists)
- scheduled_at        Timestamp (appointment time)
- status              Text ('pending', 'confirmed', 'completed', 'cancelled')
- meeting_link        Text (video call URL)
- rating              Number (1-5 for feedback)
- created_at          Timestamp
```

### community_posts
Discussion forum posts
```
- id                  UUID
- author_id           UUID (who posted)
- title               Text
- content             Text
- category            Text
- is_anonymous        Boolean
- views               Number
- likes               Number
- tags                Array
- created_at          Timestamp
```

### post_comments
Comments on forum posts
```
- id                  UUID
- post_id             UUID (which post)
- author_id           UUID (who commented)
- content             Text
- helpful_votes       Number
- is_anonymous        Boolean
- created_at          Timestamp
```

### resources
Educational content library
```
- id                  UUID
- title_kk            Text (Kazakh title)
- title_ru            Text (Russian title)
- title_en            Text (English title)
- description_kk      Text (Kazakh description)
- description_ru      Text (Russian description)
- description_en      Text (English description)
- type                Text ('article', 'guide', 'video', 'podcast', 'tool')
- category            Text
- video_url           Text (if video)
- views               Number
- rating              Number (0.0-5.0)
- is_featured         Boolean
- published_at        Timestamp
```

### webinars
Training sessions and events
```
- id                  UUID
- title_kk            Text (Kazakh title)
- title_ru            Text (Russian title)
- title_en            Text (English title)
- host_name           Text (presenter name)
- scheduled_at        Timestamp (event time)
- meeting_link        Text (webinar URL)
- recording_url       Text (after recording)
- status              Text ('upcoming', 'live', 'completed', 'cancelled')
- is_free             Boolean
- price               Number (if paid)
- max_participants    Number
```

### webinar_registrations
Tracks who registered for webinars
```
- id                  UUID
- webinar_id          UUID (which webinar)
- teacher_id          UUID (who registered)
- attended            Boolean
- feedback            Text
- rating              Number (1-5)
- registered_at       Timestamp
```

---

## Security & Access Control

All tables have Row Level Security (RLS) policies:

✅ **Teachers** can:
- View their own profile
- View verified psychologists
- Create bookings
- Post in community
- Register for webinars

✅ **Psychologists** can:
- View their own profile
- See their own bookings
- View community posts

✅ **Everyone** can:
- View community posts and comments
- View resources and webinars
- View other users' public profiles

❌ **Nobody** can:
- Access other users' private data
- Delete posts they don't own
- Modify booking status without permission

---

## Documentation Files Created

1. **DATABASE_AND_NAMES_GUIDE.md**
   - Complete guide to database schema
   - Where to change names (6 locations)
   - Security policies explained
   - Integration examples

2. **QUICK_START.md**
   - Fast reference guide
   - Code examples for common tasks
   - Quick copy-paste snippets

3. **PROJECT_STRUCTURE.txt**
   - File organization
   - Key files to edit
   - Build commands
   - Deployment checklist

4. **SETUP_COMPLETE.txt**
   - Summary of what's been done
   - Next steps
   - All features listed

5. **ANSWER_TO_YOUR_QUESTIONS.md** (this file)
   - Direct answers to your questions
   - How to change names
   - Database structure explained

---

## Next Steps

### Step 1: Change Website Name (5 minutes)
Edit `src/contexts/LanguageContext.tsx` and `src/components/Layout.tsx`

### Step 2: Add Authentication UI (1-2 hours)
Create login and signup forms using `authFunctions`

### Step 3: Build User Dashboard (2-3 hours)
Show user profile using `profileFunctions`

### Step 4: Connect Psychologist List (1-2 hours)
Display psychologists using `psychologistFunctions`

### Step 5: Build Booking System (2-3 hours)
Implement appointment booking using `bookingFunctions`

### Step 6: Deploy (30 minutes)
Run `npm run build` and deploy `dist/` folder

---

## Support

For issues or questions:
- Read: `DATABASE_AND_NAMES_GUIDE.md`
- Check: `QUICK_START.md`
- Review: `src/services/supabaseClient.ts`

Good luck! 🚀
