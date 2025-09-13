import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Brain, 
  Menu, 
  X, 
  User, 
  Settings, 
  LogOut,
  BookOpen,
  Mic,
  Volume2,
  Wand2,
  TrendingUp,
  Home,
  MessageCircle
} from "lucide-react";

interface NavigationProps {
  isAuthenticated?: boolean;
}

const Navigation = ({ isAuthenticated = false }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const navigationItems = [
    { name: "Home", icon: Home, href: "#home" },
    { name: "Learning Quiz", icon: BookOpen, href: "#quiz" },
    { name: "Text to Speech", icon: Volume2, href: "#tts" },
    { name: "Speech to Text", icon: Mic, href: "#stt" },
    { name: "Text Simplifier", icon: Wand2, href: "#simplifier" },
    { name: "AI Chatbot", icon: MessageCircle, href: "#chatbot" },
    { name: "Progress", icon: TrendingUp, href: "#progress" },
  ];

  return (
    <header className="border-b bg-card/80 backdrop-blur-sm sticky top-0 z-50 shadow-card">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-primary rounded-xl animate-gentle">
              <Brain className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground font-dyslexic">DysLearner AI</h1>
              <p className="text-sm text-muted-foreground">Empowering Dyslexic Learners</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {isAuthenticated && (
              <div className="flex items-center gap-1 mr-4">
                {navigationItems.slice(0, 4).map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="nav-item flex items-center gap-2 text-sm"
                  >
                    <item.icon className="h-4 w-4" />
                    <span className="hidden lg:inline">{item.name}</span>
                  </a>
                ))}
              </div>
            )}
          </nav>

          {/* Auth Buttons / Profile */}
          <div className="flex items-center gap-3">
            {isAuthenticated ? (
              <div className="relative">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center gap-2 hover:bg-muted focus-dyslexic"
                >
                  <User className="h-5 w-5" />
                  <span className="hidden sm:inline">Profile</span>
                </Button>
                
                {isProfileOpen && (
                  <Card className="absolute right-0 top-12 w-48 p-2 shadow-soft z-50">
                    <div className="space-y-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start gap-2 focus-dyslexic"
                      >
                        <Settings className="h-4 w-4" />
                        Settings
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start gap-2 focus-dyslexic"
                      >
                        <LogOut className="h-4 w-4" />
                        Logout
                      </Button>
                    </div>
                  </Card>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="btn-secondary focus-dyslexic"
                >
                  Login
                </Button>
                <Button 
                  size="sm"
                  className="btn-primary focus-dyslexic"
                >
                  Sign Up
                </Button>
              </div>
            )}

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden focus-dyslexic"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col gap-2 mt-4">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="nav-item flex items-center gap-3 text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;