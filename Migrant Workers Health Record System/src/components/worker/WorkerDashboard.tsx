import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Badge } from '../ui/badge';
import { 
  FileText, 
  Calendar, 
  Bell, 
  Settings, 
  Heart,
  Shield,
  Download,
  Plus
} from 'lucide-react';

interface WorkerDashboardProps {
  onNavigate: (screen: string) => void;
}

export function WorkerDashboard({ onNavigate }: WorkerDashboardProps) {
  const stats = [
    { label: 'Health Records', value: '12', icon: FileText, color: 'text-blue-600' },
    { label: 'Appointments', value: '3', icon: Calendar, color: 'text-green-600' },
    { label: 'Alerts', value: '2', icon: Bell, color: 'text-red-600' }
  ];

  const quickActions = [
    { title: 'View Health Records', desc: 'Access your medical history', icon: FileText, action: 'health_records' },
    { title: 'Book Appointment', desc: 'Schedule a consultation', icon: Calendar, action: 'appointments' },
    { title: 'Download Records', desc: 'Get PDF of your records', icon: Download, action: 'download' },
    { title: 'Manage Consent', desc: 'Control data sharing', icon: Shield, action: 'consent' }
  ];

  return (
    <div className="min-h-screen bg-secondary/30">
      {/* Header */}
      <div className="bg-white border-b p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src="/api/placeholder/40/40" />
              <AvatarFallback>RK</AvatarFallback>
            </Avatar>
            <div>
              <h2>Rajesh Kumar</h2>
              <p className="text-sm text-muted-foreground">Worker ID: MG001</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={() => onNavigate('settings')}>
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Health Status */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <Heart className="h-5 w-5 text-red-500" />
              <CardTitle className="text-lg">Health Status</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Last Check-up</p>
                <p>Sept 10, 2024</p>
              </div>
              <Badge className="bg-green-100 text-green-800">
                Good Health
              </Badge>
            </div>
          </CardContent>
        </Card>

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
          <h3>Quick Actions</h3>
          {quickActions.map((action, index) => (
            <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent 
                className="p-4 flex items-center space-x-4"
                onClick={() => onNavigate(action.action)}
              >
                <div className="bg-primary/10 p-3 rounded-lg">
                  <action.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">{action.title}</h4>
                  <p className="text-sm text-muted-foreground">{action.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Emergency Button */}
        <Card className="bg-red-50 border-red-200">
          <CardContent className="p-4">
            <Button className="w-full bg-red-600 hover:bg-red-700">
              <Plus className="h-5 w-5 mr-2" />
              Emergency Contact
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
        <div className="flex justify-around">
          <Button variant="ghost" className="flex flex-col space-y-1">
            <FileText className="h-5 w-5" />
            <span className="text-xs">Records</span>
          </Button>
          <Button variant="ghost" className="flex flex-col space-y-1">
            <Calendar className="h-5 w-5" />
            <span className="text-xs">Appointments</span>
          </Button>
          <Button variant="ghost" className="flex flex-col space-y-1">
            <Bell className="h-5 w-5" />
            <span className="text-xs">Alerts</span>
          </Button>
          <Button variant="ghost" className="flex flex-col space-y-1">
            <Settings className="h-5 w-5" />
            <span className="text-xs">Settings</span>
          </Button>
        </div>
      </div>
    </div>
  );
}