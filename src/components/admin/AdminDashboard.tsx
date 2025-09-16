import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Badge } from '../ui/badge';
import { 
  Users, 
  UserCheck, 
  Calendar, 
  Bell, 
  Settings,
  BarChart3,
  Shield,
  Database,
  Activity,
  TrendingUp,
  UserPlus,
  FileText
} from 'lucide-react';

interface AdminDashboardProps {
  onNavigate: (screen: string) => void;
}

export function AdminDashboard({ onNavigate }: AdminDashboardProps) {
  const stats = [
    { label: 'Total Workers', value: '1,247', icon: Users, color: 'text-blue-600', change: '+12%' },
    { label: 'Healthcare Staff', value: '89', icon: UserCheck, color: 'text-green-600', change: '+5%' },
    { label: 'Appointments', value: '342', icon: Calendar, color: 'text-purple-600', change: '+8%' },
    { label: 'Active Alerts', value: '23', icon: Bell, color: 'text-red-600', change: '-3%' }
  ];

  const recentActivities = [
    { type: 'user', message: 'New worker registered: Rajesh Kumar', time: '2 min ago', icon: UserPlus },
    { type: 'health', message: '15 health records updated', time: '10 min ago', icon: FileText },
    { type: 'appointment', message: '8 new appointments scheduled', time: '1 hour ago', icon: Calendar },
    { type: 'system', message: 'System backup completed', time: '2 hours ago', icon: Database }
  ];

  const quickActions = [
    { title: 'Manage Users', desc: 'Add, edit, or remove users', icon: Users, action: 'manage_users' },
    { title: 'Analytics', desc: 'View system analytics', icon: BarChart3, action: 'analytics' },
    { title: 'System Settings', desc: 'Configure system preferences', icon: Settings, action: 'settings' },
    { title: 'Security', desc: 'Security and permissions', icon: Shield, action: 'security' }
  ];

  return (
    <div className="min-h-screen bg-secondary/30">
      {/* Header */}
      <div className="bg-white border-b p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src="/api/placeholder/48/48" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
              <p className="text-muted-foreground">Welcome back, Administrator</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline">
              <Bell className="h-4 w-4 mr-2" />
              Alerts
            </Button>
            <Button variant="ghost" size="icon" onClick={() => onNavigate('settings')}>
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-3xl font-semibold mt-2">{stat.value}</p>
                    <div className="flex items-center mt-2">
                      <TrendingUp className="h-3 w-3 text-green-600 mr-1" />
                      <span className="text-sm text-green-600">{stat.change}</span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-lg bg-primary/10`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action, index) => (
            <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent 
                className="p-6 text-center space-y-4"
                onClick={() => onNavigate(action.action)}
              >
                <div className="bg-primary/10 p-4 rounded-lg w-fit mx-auto">
                  <action.icon className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{action.title}</h3>
                  <p className="text-sm text-muted-foreground">{action.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Activity className="h-5 w-5 text-primary" />
                <CardTitle>Recent Activity</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-secondary/50 rounded-lg">
                  <div className="bg-white p-2 rounded-full">
                    <activity.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.message}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* System Status */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Database className="h-5 w-5 text-primary" />
                <CardTitle>System Status</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Database</span>
                <Badge className="bg-green-100 text-green-800">Healthy</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">API Server</span>
                <Badge className="bg-green-100 text-green-800">Online</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Storage</span>
                <Badge className="bg-yellow-100 text-yellow-800">75% Used</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Last Backup</span>
                <span className="text-sm text-muted-foreground">2 hours ago</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Active Users</span>
                <span className="text-sm font-medium">147</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <p className="text-2xl font-semibold text-blue-600">98.5%</p>
                <p className="text-sm text-muted-foreground">System Uptime</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-semibold text-green-600">2.3s</p>
                <p className="text-sm text-muted-foreground">Avg Response</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-semibold text-purple-600">156</p>
                <p className="text-sm text-muted-foreground">Records Updated</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-semibold text-orange-600">42</p>
                <p className="text-sm text-muted-foreground">API Calls/min</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}