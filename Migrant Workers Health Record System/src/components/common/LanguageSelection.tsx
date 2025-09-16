import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Globe } from 'lucide-react';

interface LanguageSelectionProps {
  onLanguageSelect: (language: string) => void;
}

export function LanguageSelection({ onLanguageSelect }: LanguageSelectionProps) {
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ml', name: 'മലയാളം (Malayalam)' },
    { code: 'hi', name: 'हिन्दी (Hindi)' }
  ];

  return (
    <div className="min-h-screen bg-secondary/50 flex items-center justify-center p-6">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 bg-primary/10 p-3 rounded-full w-fit">
            <Globe className="h-8 w-8 text-primary" />
          </div>
          <CardTitle>Select Language</CardTitle>
          <p className="text-muted-foreground">Choose your preferred language</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <Select onValueChange={onLanguageSelect}>
            <SelectTrigger>
              <SelectValue placeholder="Choose language..." />
            </SelectTrigger>
            <SelectContent>
              {languages.map((lang) => (
                <SelectItem key={lang.code} value={lang.code}>
                  {lang.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Button 
            className="w-full" 
            onClick={() => onLanguageSelect('en')}
          >
            Continue with English
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}