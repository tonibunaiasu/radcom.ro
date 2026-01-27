import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const currentLanguage = i18n.language.toUpperCase();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="gap-2 text-primary-foreground hover:bg-primary-foreground/10"
        >
          <Globe className="h-4 w-4" />
          <span className="font-medium">{currentLanguage}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem 
          onClick={() => changeLanguage('en')}
          className="cursor-pointer"
        >
          <span className="font-medium">EN</span>
          <span className="ml-2 text-muted-foreground">English</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => changeLanguage('ro')}
          className="cursor-pointer"
        >
          <span className="font-medium">RO</span>
          <span className="ml-2 text-muted-foreground">Română</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
