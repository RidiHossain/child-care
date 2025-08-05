# Simple Form Submission Setup

This is the simplest possible solution for collecting form submissions.

## How It Works

1. **User fills out the modal form**
2. **Form data is saved to a JSON file** (`data/submissions.json`)
3. **Admin views submissions** at `/admin/submissions`

## What You Get

### For Users:

- ✅ **Simple form** - Fill out and submit
- ✅ **Success message** - "Thank you! Your visit request has been submitted successfully. We'll contact you within 3-5 business days to schedule your visit."
- ✅ **Auto-close** - Modal closes after 4 seconds

### For Admin:

- ✅ **View all submissions** at `/admin/submissions`
- ✅ **Complete data** - All form fields included
- ✅ **Timestamps** - Know when each request was submitted
- ✅ **Reply links** - Click to email the parent directly
- ✅ **Organized display** - Clean, professional layout

## File Structure

```
your-project/
├── data/
│   └── submissions.json    # Form submissions stored here
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── submit-form/
│   │   │       └── route.js    # API endpoint
│   │   └── admin/
│   │       └── submissions/
│   │           └── page.jsx    # Admin view page
│   └── components/
│       └── ScheduleVisitModal.js    # Form modal
```

## How to Access Submissions

1. **Start your development server:**

   ```bash
   npm run dev
   ```

2. **Go to:** `http://localhost:3000/admin/submissions`

3. **View all submissions** in a clean, organized format

## Security

- ✅ **Server-side storage** - Data stored on your server
- ✅ **No external dependencies** - Everything local
- ✅ **Simple and secure** - No complex email setup needed

## Data Format

Each submission is stored as:

```json
{
  "id": "1703123456789",
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "555-123-4567",
  "relationship": "parent",
  "childFirstName": "Jane",
  "childLastName": "Doe",
  "childDOB": "2020-01-15",
  "requestedStartDate": "2024-01-15",
  "message": "Interested in your program",
  "submittedAt": "2024-01-15T10:30:45.123Z"
}
```

## Backup

The `data/submissions.json` file contains all your submissions. You can:

- **Copy this file** to backup your data
- **Edit it manually** if needed
- **Import to other systems** easily

## Production Deployment

When deploying:

1. **Ensure the `data` folder** is included in your deployment
2. **Set proper permissions** for the server to write to the file
3. **Consider backing up** the submissions.json file regularly

## That's It!

This is the simplest possible solution:

- No email setup required
- No external services needed
- No complex configuration
- Just view submissions at `/admin/submissions`

The system is ready to use immediately!
