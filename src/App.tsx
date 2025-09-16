import { useState } from 'react';
import { SplashScreen } from './components/common/SplashScreen';
import { LanguageSelection } from './components/common/LanguageSelection';
import { LoginScreen } from './components/common/LoginScreen';
import { WorkerDashboard } from './components/worker/WorkerDashboard';
import { HealthRecords } from './components/worker/HealthRecords';
import { StaffDashboard } from './components/staff/StaffDashboard';
import { DoctorDashboard } from './components/doctor/DoctorDashboard';
import { AdminDashboard } from './components/admin/AdminDashboard';

type AppState = 'splash' | 'language' | 'login' | 'dashboard';
type UserRole = 'migrant_worker' | 'healthcare_staff' | 'doctor' | 'admin';
type Screen = string;

export default function App() {
  const [appState, setAppState] = useState<AppState>('splash');
  const [currentScreen, setCurrentScreen] = useState<Screen>('dashboard');
  const [userRole, setUserRole] = useState<UserRole>('migrant_worker');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en');
  const [userMobile, setUserMobile] = useState<string>('');

  const handleSplashComplete = () => {
    setAppState('language');
  };

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
    setAppState('login');
  };

  const handleLogin = (role: string, mobile: string) => {
    setUserRole(role as UserRole);
    setUserMobile(mobile);
    setAppState('dashboard');
    setCurrentScreen('dashboard');
  };

  const handleNavigate = (screen: string) => {
    setCurrentScreen(screen);
  };

  const handleBack = () => {
    setCurrentScreen('dashboard');
  };

  if (appState === 'splash') {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  if (appState === 'language') {
    return <LanguageSelection onLanguageSelect={handleLanguageSelect} />;
  }

  if (appState === 'login') {
    return <LoginScreen onLogin={handleLogin} />;
  }

  // Dashboard screens based on role and current screen
  if (appState === 'dashboard') {
    switch (userRole) {
      case 'migrant_worker':
        if (currentScreen === 'health_records') {
          return <HealthRecords onBack={handleBack} />;
        }
        return <WorkerDashboard onNavigate={handleNavigate} />;

      case 'healthcare_staff':
        return <StaffDashboard onNavigate={handleNavigate} />;

      case 'doctor':
        return <DoctorDashboard onNavigate={handleNavigate} />;

      case 'admin':
        return <AdminDashboard onNavigate={handleNavigate} />;

      default:
        return <WorkerDashboard onNavigate={handleNavigate} />;
    }
  }

  return <div>Loading...</div>;
}