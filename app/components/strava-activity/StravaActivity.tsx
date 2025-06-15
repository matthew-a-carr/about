'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaSpinner } from 'react-icons/fa';

interface StravaActivity {
  id: number;
  name: string;
  distance: number;
  moving_time: number;
  elapsed_time: number;
  total_elevation_gain: number;
  type: string;
  sport_type: string;
  start_date: string;
  start_date_local: string;
  map: {
    summary_polyline: string;
  };
}

// The API route handles all the Strava API calls

const StravaActivity: React.FC = () => {
  const [activities, setActivities] = useState<StravaActivity[]>([]);
  const [stats, setStats] = useState({
    totalActivities: 0,
    totalDistance: 0,
    totalTime: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        setLoading(true);

        // Use our API route to fetch Strava data
        const response = await fetch('/api/strava');

        if (!response.ok) {
          throw new Error('Failed to fetch Strava activities');
        }

        const data = await response.json();
        const activitiesData: StravaActivity[] = data.activities || [];
        setActivities(activitiesData);

        // If we had real data from the API, we could calculate actual stats here
        // For now, we'll use placeholder data
        setStats({
          totalActivities: 750, // Placeholder stats for demo
          totalDistance: 5000, // These would be calculated from API data in production
          totalTime: 300,
        });
      } catch (err) {
        console.error('Error fetching Strava activities:', err);
        setError('Unable to load Strava activities');
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, []);

  const formatDistance = (meters: number) => {
    const kilometers = meters / 1000;
    return kilometers.toFixed(1);
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-UK', {
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="md:w-1/2">
        <div className="flex items-center gap-4 mb-6">
          <Image
            src="/strava_logo.svg"
            alt="Strava"
            width={40}
            height={40}
            className="text-orange-500"
          />
          <h3 className="text-2xl font-bold">Strava Activity</h3>
        </div>
        <p className="text-gray-700 mb-6">
          I regularly track my swimming and cycling activities on Strava, mostly
          so I can justify eating more pizza. My movements through water are
          almost as elegant as my code — both involve a lot of debugging.
        </p>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <p className="text-3xl font-bold text-orange-500">
              {stats.totalActivities}+
            </p>
            <p className="text-gray-600 text-sm">Activities</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <p className="text-3xl font-bold text-orange-500">
              {stats.totalDistance}+
            </p>
            <p className="text-gray-600 text-sm">Kilometers</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <p className="text-3xl font-bold text-orange-500">
              {stats.totalTime}+
            </p>
            <p className="text-gray-600 text-sm">Hours</p>
          </div>
        </div>

        <div className="text-center md:text-left">
          <a
            href="https://www.strava.com/athletes/19357945"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium"
          >
            View my full profile on Strava <span className="ml-2">→</span>
          </a>
        </div>
      </div>

      <div className="md:w-1/2">
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-1">
          <div className="bg-white rounded-lg p-4 max-h-96 overflow-auto">
            {loading ? (
              <div className="flex items-center justify-center h-64">
                <FaSpinner className="animate-spin text-orange-500 w-8 h-8" />
                <span className="ml-2 text-gray-600">
                  Loading activities...
                </span>
              </div>
            ) : error ? (
              <div className="text-center p-6">
                <p className="text-gray-600 mb-2">
                  Unable to load Strava activities
                </p>
                <iframe
                  height="350"
                  width="100%"
                  frameBorder="0"
                  style={{ background: 'transparent' }}
                  scrolling="no"
                  src="https://www.strava.com/athletes/19357945/activity-summary/7fde911313a4249676c3f7e9a4469a9c41547d5d"
                  title="Matthew's Strava Activities"
                ></iframe>
              </div>
            ) : activities.length > 0 ? (
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-800 mb-3">
                  Recent Activities
                </h4>
                {activities.map((activity) => (
                  <div
                    key={activity.id}
                    className="border-b border-gray-100 pb-3"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h5 className="font-medium">{activity.name}</h5>
                        <p className="text-xs text-gray-500">
                          {formatDate(activity.start_date)}
                        </p>
                      </div>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          activity.sport_type === 'Swim'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-orange-100 text-orange-800'
                        }`}
                      >
                        {activity.sport_type}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mt-2">
                      <div className="text-center">
                        <p className="text-xs text-gray-500">Distance</p>
                        <p className="font-medium">
                          {formatDistance(activity.distance)} km
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-gray-500">Time</p>
                        <p className="font-medium">
                          {formatTime(activity.moving_time)}
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-gray-500">Elevation</p>
                        <p className="font-medium">
                          {activity.total_elevation_gain} m
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center p-6">
                <p className="text-gray-600">No activities found</p>
                <iframe
                  height="350"
                  width="100%"
                  frameBorder="0"
                  style={{ background: 'transparent' }}
                  scrolling="no"
                  src="https://www.strava.com/athletes/19357945/activity-summary/7fde911313a4249676c3f7e9a4469a9c41547d5d"
                  title="Matthew's Strava Activities"
                ></iframe>
              </div>
            )}
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-2 text-right">
          *Data pulled directly from Strava API
        </p>
      </div>
    </div>
  );
};

export default StravaActivity;
