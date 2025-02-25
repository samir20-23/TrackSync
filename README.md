# Telematics to Google Sheets Automation 🚀

## Overview
This project fetches real-time tracking data from the `platform.stgtelematics.com` API and automatically updates a Google Sheet.

## How It Works
1. Fetches track status (start, stop, zone entry, etc.) via API.
2. Updates Google Sheets using Google Apps Script.
3. Runs automatically on a schedule.

## Setup
1. Open **Google Sheets** > Extensions > Apps Script.
2. Copy the script from `scripts/updateData.gs`.
3. Replace `YOUR_API_KEY` with your actual API key.
4. Set up a trigger to run automatically.

## API Configuration
Ensure you have:
- API credentials (key, token).
- The correct API endpoint.

## Future Improvements
- Error handling & logging
- Data filtering & analysis
