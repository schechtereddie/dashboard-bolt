import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  DollarSign, 
  BarChart2, 
  Calendar, 
  Settings,
  LogOut
} from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '#' },
  { icon: Users, label: 'Team', href: '#' },
  { icon: DollarSign, label: 'Finance', href: '#' },
  { icon: BarChart2, label: 'Analytics', href: '#' },
  { icon: Calendar, label: 'Schedule', href: '#' },
  { icon: Settings, label: 'Settings', href: '#' },
];

export default function Sidebar() {
  return (
    <div className="h-screen w-64 bg-gray-900 text-white p-4 fixed left-0 top-0">
      <div className="flex items-center gap-2 mb-8 px-2">
        <BarChart2 className="h-8 w-8 text-blue-400" />
        <span className="text-xl font-bold">CompanyDash</span>
      </div>
      
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </a>
        ))}
      </nav>

      <div className="absolute bottom-4 left-4 right-4">
        <a
          href="#"
          className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-gray-800 transition-colors text-gray-400"
        >
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </a>
      </div>
    </div>
  );
}