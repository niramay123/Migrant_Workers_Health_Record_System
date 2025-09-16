import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Badge } from '../ui/badge';
import { 
  ArrowLeft, 
  Download, 
  Eye, 
  Syringe, 
  Pill, 
  Activity,
  Calendar
} from 'lucide-react';

interface HealthRecordsProps {
  onBack: () => void;
}

export function HealthRecords({ onBack }: HealthRecordsProps) {
  const observations = [
    {
      date: '2024-09-10',
      type: 'Blood Pressure',
      value: '120/80 mmHg',
      status: 'Normal',
      doctor: 'Dr. Sharma'
    },
    {
      date: '2024-09-05',
      type: 'Blood Sugar',
      value: '95 mg/dL',
      status: 'Normal',
      doctor: 'Dr. Patel'
    },
    {
      date: '2024-08-28',
      type: 'BMI',
      value: '23.5',
      status: 'Normal',
      doctor: 'Dr. Kumar'
    }
  ];

  const immunizations = [
    {
      date: '2024-07-15',
      vaccine: 'COVID-19 Booster',
      status: 'Completed',
      nextDue: null
    },
    {
      date: '2024-03-20',
      vaccine: 'Hepatitis B',
      status: 'Completed',
      nextDue: '2025-03-20'
    },
    {
      date: '2023-12-10',
      vaccine: 'Typhoid',
      status: 'Completed',
      nextDue: '2026-12-10'
    }
  ];

  const prescriptions = [
    {
      date: '2024-09-10',
      medication: 'Paracetamol',
      dosage: '500mg',
      frequency: 'Twice daily',
      duration: '5 days',
      doctor: 'Dr. Sharma'
    },
    {
      date: '2024-08-25',
      medication: 'Vitamin D3',
      dosage: '1000 IU',
      frequency: 'Once daily',
      duration: '30 days',
      doctor: 'Dr. Kumar'
    }
  ];

  return (
    <div className="min-h-screen bg-secondary/30">
      {/* Header */}
      <div className="bg-white border-b p-4">
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" onClick={onBack}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex-1">
            <h2>Health Records</h2>
            <p className="text-sm text-muted-foreground">Your complete medical history</p>
          </div>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            PDF
          </Button>
        </div>
      </div>

      <div className="p-4">
        <Tabs defaultValue="observations" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="observations">
              <Activity className="h-4 w-4 mr-2" />
              Observations
            </TabsTrigger>
            <TabsTrigger value="immunizations">
              <Syringe className="h-4 w-4 mr-2" />
              Vaccines
            </TabsTrigger>
            <TabsTrigger value="prescriptions">
              <Pill className="h-4 w-4 mr-2" />
              Medicines
            </TabsTrigger>
          </TabsList>

          <TabsContent value="observations" className="space-y-3">
            {observations.map((obs, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="font-medium">{obs.type}</h4>
                        <Badge variant={obs.status === 'Normal' ? 'default' : 'destructive'}>
                          {obs.status}
                        </Badge>
                      </div>
                      <p className="text-lg font-semibold text-primary">{obs.value}</p>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                        <span>📅 {obs.date}</span>
                        <span>👨‍⚕️ {obs.doctor}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="immunizations" className="space-y-3">
            {immunizations.map((imm, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium">{imm.vaccine}</h4>
                      <div className="flex items-center space-x-2 mt-2">
                        <Badge className="bg-green-100 text-green-800">
                          {imm.status}
                        </Badge>
                      </div>
                      <div className="mt-2 text-sm text-muted-foreground">
                        <p>📅 Given: {imm.date}</p>
                        {imm.nextDue && (
                          <p>🔄 Next Due: {imm.nextDue}</p>
                        )}
                      </div>
                    </div>
                    <Syringe className="h-5 w-5 text-green-600" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="prescriptions" className="space-y-3">
            {prescriptions.map((presc, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium">{presc.medication}</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {presc.dosage} • {presc.frequency} • {presc.duration}
                      </p>
                      <div className="mt-2 text-sm text-muted-foreground">
                        <p>📅 {presc.date}</p>
                        <p>👨‍⚕️ {presc.doctor}</p>
                      </div>
                    </div>
                    <Pill className="h-5 w-5 text-blue-600" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}