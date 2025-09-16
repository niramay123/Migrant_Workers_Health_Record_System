import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Badge } from '../ui/badge';
import { 
  Search, 
  Users, 
  Calendar, 
  FileText, 
  Settings,
  Stethoscope,
  Clock,
  UserCheck
} from 'lucide-react';

interface DoctorDashboardProps {
  onNavigate: (screen: string) => void;
}

export function DoctorDashboard({ onNavigate }: DoctorDashboardProps) {
  const stats = [
    { label: 'Patients Today', value: '12', icon: Users, color: 'text-blue-600' },
    { label: 'Appointments', value: '8', icon: Calendar, color: 'text-green-600' },
    { label: 'Records Updated', value: '15', icon: FileText, color: 'text-purple-600' }
  ];

  const recentPatients = [
    { name: 'Rajesh Kumar', id: 'MG001', condition: 'Routine Check-up', status: 'Waiting', time: '10:00 AM' },
    { name: 'Priya Sharma', id: 'MG002', condition: 'Follow-up', status: 'In Progress', time: '10:30 AM' },
    { name: 'Mohammed Ali', id: 'MG003', condition: 'Consultation', status: 'Completed', time: '11:00 AM' }
  ];

  return (
    <div className="min-h-screen bg-secondary/30">
      {/* Header */}
      <div className="bg-white border-b p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src="/api/placeholder/40/40" />
              <AvatarFallback>DS</AvatarFallback>
            </Avatar>
            <div>
              <h2>Dr. Sharma</h2>
              <p className="text-sm text-muted-foreground">General Physician</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={() => onNavigate('settings')}>
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Search */}
        <Card>
          <CardContent className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search patient by name or ID..."
                className="pl-10"
                onClick={() => onNavigate('patient_search')}
              />
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
        <div className="grid grid-cols-2 gap-4">
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent 
              className="p-4 text-center space-y-2"
              onClick={() => onNavigate('patient_search')}
            >
              <div className="bg-blue-100 p-3 rounded-lg w-fit mx-auto">
                <Search className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-medium">Search Patient</h4>
              <p className="text-xs text-muted-foreground">Find patient records</p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent 
              className="p-4 text-center space-y-2"
              onClick={() => onNavigate('add_prescription')}
            >
              <div className="bg-green-100 p-3 rounded-lg w-fit mx-auto">
                <FileText className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-medium">Add Prescription</h4>
              <p className="text-xs text-muted-foreground">Create new prescription</p>
            </CardContent>
          </Card>
        </div>

        {/* Today's Appointments */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">Today's Appointments</CardTitle>
              </div>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentPatients.map((patient, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <UserCheck className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">{patient.name}</h4>
                    <p className="text-sm text-muted-foreground">{patient.condition}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-1 mb-1">
                    <Clock className="h-3 w-3 text-muted-foreground" />
                    <span className="text-sm">{patient.time}</span>
                  </div>
                  <Badge 
                    variant={
                      patient.status === 'Completed' ? 'default' : 
                      patient.status === 'In Progress' ? 'destructive' : 'secondary'
                    }
                    className="text-xs"
                  >
                    {patient.status}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Stethoscope className="h-5 w-5 text-primary" />
              <CardTitle className="text-lg">Recent Activity</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <p className="text-sm">Prescribed medication for Rajesh Kumar</p>
                <span className="text-xs text-muted-foreground ml-auto">2 min ago</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <p className="text-sm">Updated health record for Priya Sharma</p>
                <span className="text-xs text-muted-foreground ml-auto">15 min ago</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <p className="text-sm">Completed check-up for Mohammed Ali</p>
                <span className="text-xs text-muted-foreground ml-auto">1 hour ago</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}