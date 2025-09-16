import { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Badge } from '../ui/badge';
import { Smartphone, Shield } from 'lucide-react';

interface LoginScreenProps {
  onLogin: (role: string, mobile: string) => void;
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  const [mobile, setMobile] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState('');

  const roles = [
    { value: 'migrant_worker', label: 'Migrant Worker', color: 'bg-blue-100 text-blue-800' },
    { value: 'healthcare_staff', label: 'Healthcare Staff', color: 'bg-green-100 text-green-800' },
    { value: 'doctor', label: 'Doctor', color: 'bg-purple-100 text-purple-800' },
    { value: 'admin', label: 'Admin', color: 'bg-orange-100 text-orange-800' }
  ];

  const handleSendOTP = () => {
    if (mobile && selectedRole) {
      setShowOTP(true);
    }
  };

  const handleVerifyOTP = () => {
    if (otp.length === 6) {
      onLogin(selectedRole, mobile);
    }
  };

  return (
    <div className="min-h-screen bg-secondary/50 flex items-center justify-center p-6">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 bg-primary/10 p-3 rounded-full w-fit">
            <Smartphone className="h-8 w-8 text-primary" />
          </div>
          <CardTitle>Welcome Back</CardTitle>
          <p className="text-muted-foreground">Sign in to your account</p>
        </CardHeader>
        <CardContent className="space-y-4">
          {!showOTP ? (
            <>
              <div className="space-y-2">
                <Label>Select Role</Label>
                <Select value={selectedRole} onValueChange={setSelectedRole}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose your role..." />
                  </SelectTrigger>
                  <SelectContent>
                    {roles.map((role) => (
                      <SelectItem key={role.value} value={role.value}>
                        <div className="flex items-center space-x-2">
                          <Badge variant="secondary" className={role.color}>
                            {role.label}
                          </Badge>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="mobile">Mobile Number</Label>
                <Input
                  id="mobile"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>

              <Button 
                className="w-full" 
                onClick={handleSendOTP}
                disabled={!mobile || !selectedRole}
              >
                Send OTP
              </Button>
            </>
          ) : (
            <>
              <div className="text-center mb-4">
                <Shield className="h-12 w-12 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">
                  Enter the 6-digit OTP sent to {mobile}
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="otp">OTP</Label>
                <Input
                  id="otp"
                  type="text"
                  placeholder="123456"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  maxLength={6}
                  className="text-center text-lg tracking-widest"
                />
              </div>

              <Button 
                className="w-full" 
                onClick={handleVerifyOTP}
                disabled={otp.length !== 6}
              >
                Verify & Continue
              </Button>

              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => setShowOTP(false)}
              >
                Change Number
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}