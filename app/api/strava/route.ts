import { NextResponse } from 'next/server';

const CLIENT_ID = process.env.NEXT_PUBLIC_STRAVA_CLIENT_ID;
const CLIENT_SECRET = process.env.STRAVA_CLIENT_SECRET;
const TOKEN_ENDPOINT = 'https://www.strava.com/oauth/token';
const ACTIVITIES_ENDPOINT = 'https://www.strava.com/api/v3/athlete/activities';
const REFRESH_TOKEN = process.env.STRAVA_REFRESH_TOKEN;

// Fallback mock data for when the Strava API fails
function getMockActivities() {
  const now = new Date();
  return [
    {
      id: 1,
      name: 'Morning Swim',
      distance: 2000,
      moving_time: 3600,
      elapsed_time: 3800,
      total_elevation_gain: 0,
      type: 'Swim',
      sport_type: 'Swim',
      start_date: new Date(
        now.getTime() - 2 * 24 * 60 * 60 * 1000,
      ).toISOString(),
      start_date_local: new Date(
        now.getTime() - 2 * 24 * 60 * 60 * 1000,
      ).toISOString(),
      map: { summary_polyline: '' },
    },
    {
      id: 2,
      name: 'Lunch Cycle',
      distance: 15000,
      moving_time: 3000,
      elapsed_time: 3100,
      total_elevation_gain: 120,
      type: 'Ride',
      sport_type: 'Ride',
      start_date: new Date(
        now.getTime() - 5 * 24 * 60 * 60 * 1000,
      ).toISOString(),
      start_date_local: new Date(
        now.getTime() - 5 * 24 * 60 * 60 * 1000,
      ).toISOString(),
      map: { summary_polyline: '' },
    },
    {
      id: 3,
      name: 'Weekend Long Ride',
      distance: 45000,
      moving_time: 9000,
      elapsed_time: 9500,
      total_elevation_gain: 450,
      type: 'Ride',
      sport_type: 'Ride',
      start_date: new Date(
        now.getTime() - 10 * 24 * 60 * 60 * 1000,
      ).toISOString(),
      start_date_local: new Date(
        now.getTime() - 10 * 24 * 60 * 60 * 1000,
      ).toISOString(),
      map: { summary_polyline: '' },
    },
  ];
}

export async function GET() {
  try {
    // Debug logging to see the values being used
    console.log('CLIENT_ID:', CLIENT_ID);
    console.log('CLIENT_SECRET:', CLIENT_SECRET?.substring(0, 5) + '...');
    console.log('REFRESH_TOKEN:', REFRESH_TOKEN?.substring(0, 5) + '...');

    // For Strava API, we need to use refresh_token grant type for ongoing access
    const tokenResponse = await fetch(TOKEN_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: CLIENT_ID || '',
        client_secret: CLIENT_SECRET || '',
        grant_type: 'refresh_token',
        refresh_token: REFRESH_TOKEN || '',
      }),
    });

    if (!tokenResponse.ok) {
      console.error('Failed to get access token:', await tokenResponse.text());
      // Use mock data instead of failing
      return NextResponse.json({
        activities: getMockActivities(),
      });
    }

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    // Fetch activities with the access token
    const activitiesResponse = await fetch(
      `${ACTIVITIES_ENDPOINT}?per_page=10`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    if (!activitiesResponse.ok) {
      console.error(
        'Failed to fetch activities:',
        await activitiesResponse.text(),
      );
      return NextResponse.json({
        activities: getMockActivities(),
      });
    }

    const activities = await activitiesResponse.json();
    return NextResponse.json({ activities });
  } catch (error) {
    console.error('Error fetching Strava data:', error);
    // Return mock data instead of error
    return NextResponse.json({
      activities: getMockActivities(),
    });
  }
}
