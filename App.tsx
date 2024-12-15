import React from 'react';
import { Users, DollarSign, TrendingUp, Building } from 'lucide-react';
import Sidebar from './components/Sidebar';
import StatCard from './components/StatCard';
import Chart from './components/Chart';
import RecentActivity from './components/RecentActivity';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      
      <main className="ml-64 p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with your business today.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Customers"
            value="2,420"
            change="+12.5%"
            isPositive={true}
            Icon={Users}
          />
          <StatCard
            title="Revenue"
            value="$42,500"
            change="+8.2%"
            isPositive={true}
            Icon={DollarSign}
          />
          <StatCard
            title="Growth Rate"
            value="18.6%"
            change="-2.4%"
            isPositive={false}
            Icon={TrendingUp}
          />
          <StatCard
            title="Active Projects"
            value="32"
            change="+4"
            isPositive={true}
            Icon={Building}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Chart />
          </div>
          <div>
            <RecentActivity />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;