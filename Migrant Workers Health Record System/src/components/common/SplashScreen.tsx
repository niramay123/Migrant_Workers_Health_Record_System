import { useEffect } from 'react';
import { Heart, Users } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="min-h-screen bg-primary flex flex-col items-center justify-center p-6">
      <div className="flex items-center justify-center mb-8">
        <div className="bg-white/10 p-4 rounded-2xl">
          <div className="flex items-center space-x-2">
            <Heart className="h-12 w-12 text-white" />
            <Users className="h-12 w-12 text-white" />
          </div>
        </div>
      </div>
      
      <h1 className="text-white text-3xl mb-4 text-center">
        HealthRecord
      </h1>
      
      <p className="text-white/80 text-center text-lg mb-8">
        Health Records for All
      </p>
      
      <div className="flex space-x-1">
        <div className="w-2 h-2 bg-white/50 rounded-full animate-pulse"></div>
        <div className="w-2 h-2 bg-white/50 rounded-full animate-pulse delay-75"></div>
        <div className="w-2 h-2 bg-white/50 rounded-full animate-pulse delay-150"></div>
      </div>
    </div>
  );
}