import React from 'react';
import { User } from 'lucide-react';

const activities = [
  {
    user: 'Sarah Johnson',
    action: 'Closed a deal with',
    target: 'Acme Corp',
    time: '2 hours ago',
  },
  {
    user: 'Mike Peters',
    action: 'Added new client',
    target: 'TechStart Inc',
    time: '4 hours ago',
  },
  {
    user: 'Anna Smith',
    action: 'Completed project for',
    target: 'Global Systems',
    time: '6 hours ago',
  },
];

export default function RecentActivity() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="bg-gray-100 p-2 rounded-full">
              <User className="h-5 w-5 text-gray-600" />
            </div>
            <div>
              <p className="text-sm">
                <span className="font-medium">{activity.user}</span>{' '}
                {activity.action}{' '}
                <span className="font-medium">{activity.target}</span>
              </p>
              <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}