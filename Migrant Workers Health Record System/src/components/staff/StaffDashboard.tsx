import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Badge } from '../ui/badge';
import { 
  Users, 
  UserPlus, 
  FileText, 
  Calendar, 
  BarChart3, 
  Settings,
  Plus,
  Search
} from 'lucide-react';

interface StaffDashboardProps {
  onNavigate: (screen: string) => void;
}

export function StaffDashboard({ onNavigate }: StaffDashboardProps) {
  const stats = [
    { label: 'Assigned Workers', value: '47', icon: Users, color: 'text-blue-600' },
    { label: 'Today\'s Appointments', value: '8', icon: Calendar, color: 'text-green-600' },
    { label: 'Pending Records', value: '5', icon: FileText, color: 'text-orange-600' }
  ];

  const recentWorkers = [
    { name: 'Rajesh Kumar', id: 'MG001', status: 'Active', lastVisit: '2024-09-10' },
    { name: 'Priya Sharma', id: 'MG002', status: 'Active', lastVisit: '2024-09-08' },
    { name: 'Mohammed Ali', id: 'MG003', status: 'Inactive', lastVisit: '2024-08-25' }
  ];

  const quickActions = [
    { title: 'Register New Worker', desc: 'Add a new migrant worker', icon: UserPlus, action: 'register_worker' },
    { title: 'Update Health Records', desc: 'Update worker health data', icon: FileText, action: 'update_records' },
    { title: 'Schedule Appointment', desc: 'Book health check-ups', icon: Calendar, action: 'schedule' },
    { title: 'View Reports', desc: 'Analytics and insights', icon: BarChart3, action: 'reports' }
  ];

  return (
    <div className="min-h-screen bg-secondary/30">
      {/* Header */}
      <div className="bg-white border-b p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src="/api/placeholder/40/40" />
              <AvatarFallback>NS</AvatarFallback>
            </Avatar>
            <div>
              <h2>Nurse Sarah</h2>
              <p className="text-sm text-muted-foreground">Healthcare Staff</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={() => onNavigate('settings')}>
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-4 text-center">
                <stat.icon className={`h-6 w-6 mx-auto mb-2 ${stat.color}`} />
                <p className="text-2xl font-semibold">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3>Quick Actions</h3>
            <Button size="sm" onClick={() => onNavigate('register_worker')}>
              <Plus className="h-4 w-4 mr-2" />
              Add Worker
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {quickActions.map((action, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent 
                  className="p-4 text-center space-y-2"
                  onClick={() => onNavigate(action.action)}
                >
                  <div className="bg-primary/10 p-3 rounded-lg w-fit mx-auto">
                    <action.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-medium text-sm">{action.title}</h4>
                  <p className="text-xs text-muted-foreground">{action.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Workers */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3>Recent Workers</h3>
            <Button variant="outline" size="sm">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
          
          {recentWorkers.map((worker, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback>{worker.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium">{worker.name}</h4>
                      <p className="text-sm text-muted-foreground">ID: {worker.id}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant={worker.status === 'Active' ? 'default' : 'secondary'}>
                      {worker.status}
                    </Badge>
                    <p className="text-xs text-muted-foreground mt-1">
                      Last: {worker.lastVisit}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Today's Schedule */}
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-primary" />
              <CardTitle className="text-lg">Today's Schedule</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Health Check-up</p>
                  <p className="text-sm text-muted-foreground">Rajesh Kumar • 10:00 AM</p>
                </div>
                <Badge className="bg-blue-100 text-blue-800">Upcoming</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Vaccination</p>
                  <p className="text-sm text-muted-foreground">Priya Sharma • 2:00 PM</p>
                </div>
                <Badge className="bg-green-100 text-green-800">Confirmed</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}