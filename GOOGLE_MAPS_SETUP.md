# Google Maps Setup Guide

## How to Get Your Google Maps Embed URL

### Step 1: Go to Google Maps

1. Open [Google Maps](https://maps.google.com)
2. Search for your address: `958 McKinley Avenue Littleton, CO 80120`

### Step 2: Get the Embed Code

1. **Click on your location** on the map
2. **Click "Share"** button
3. **Click "Embed a map"** tab
4. **Copy the iframe code** that looks like this:

```html
<iframe
  src="https://www.google.com/maps/embed?pb=YOUR_ACTUAL_EMBED_CODE_HERE"
  width="600"
  height="450"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
></iframe>
```

### Step 3: Update Your Code

Replace the `src` URL in `src/components/ContactInformation.js`:

```javascript
// Replace this line:
const googleMapsUrl = createGoogleMapsUrl(contact.address)

// With this:
const googleMapsUrl = 'YOUR_ACTUAL_EMBED_URL_HERE'
```

## Example Update

In `src/components/ContactInformation.js`, change this:

```javascript
// Current (placeholder):
const googleMapsUrl = createGoogleMapsUrl(contact.address)

// To this (your actual embed URL):
const googleMapsUrl =
  'https://www.google.com/maps/embed?pb=YOUR_ACTUAL_CODE_HERE'
```

## Alternative: Simple Address Search

If you want to use a simple address search instead of a specific embed code, you can use this format:

```javascript
const googleMapsUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890123!2d-104.98765432109876!3d39.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDA3JzM0LjQiTiAxMDTCsNTknMTUuNiJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus`
```

## Your Current Address

Based on your contact data, your address is:
**958 McKinley Avenue Littleton, CO 80120**

## Quick Steps:

1. Go to Google Maps
2. Search for "958 McKinley Avenue Littleton, CO 80120"
3. Click Share → Embed a map
4. Copy the iframe src URL
5. Replace the URL in the ContactInformation.js file

That's it! The map will show your exact location.
