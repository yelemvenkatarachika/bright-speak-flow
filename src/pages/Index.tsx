import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, BookOpen, Mic, Volume2, Wand2, TrendingUp, Lightbulb, Target, Award } from "lucide-react";
import TextToSpeech from "@/components/TextToSpeech";
import SpeechToText from "@/components/SpeechToText";
import TextSimplifier from "@/components/TextSimplifier";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-dyslexic">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary-soft/20 to-success-soft/20">
        <div className="container mx-auto px-4">
          <div className="content-safe text-center">
            <div className="mb-8">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mx-auto mb-6 animate-gentle">
                <Brain className="h-8 w-8 text-primary-foreground" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-readable">
                Learning Made Easy with AI
              </h2>
              <p className="text-xl text-secondary-foreground mb-8 text-readable leading-relaxed">
                Overcome reading and writing challenges with our AI-powered tools designed specifically for dyslexic learners. 
                Convert text to speech, speak your thoughts, and simplify complex content.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
              <div className="card-dyslexic text-center hover:shadow-soft transition-shadow">
                <Volume2 className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold mb-2">Text to Speech</h3>
                <p className="text-sm text-muted-foreground text-readable">
                  Listen to any text with natural, clear pronunciation
                </p>
              </div>
              <div className="card-dyslexic text-center hover:shadow-soft transition-shadow">
                <Mic className="h-8 w-8 text-success mx-auto mb-3" />
                <h3 className="font-bold mb-2">Speech to Text</h3>
                <p className="text-sm text-muted-foreground text-readable">
                  Speak your thoughts and convert them to written text
                </p>
              </div>
              <div className="card-dyslexic text-center hover:shadow-soft transition-shadow">
                <Wand2 className="h-8 w-8 text-accent mx-auto mb-3" />
                <h3 className="font-bold mb-2">Text Simplifier</h3>
                <p className="text-sm text-muted-foreground text-readable">
                  Simplify complex text for easier understanding
                </p>
              </div>
            </div>

            <Button className="btn-primary text-lg" size="lg">
              Start Learning Now
            </Button>
          </div>
        </div>
      </section>

      {/* Learning Style Quiz Section */}
      <section id="quiz" className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="content-safe text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Discover Your Learning Style
            </h3>
            <p className="text-lg text-muted-foreground text-readable">
              Take our quick assessment to personalize your learning experience
            </p>
          </div>

          <div className="card-dyslexic max-w-2xl mx-auto text-center">
            <div className="mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-success rounded-xl mx-auto mb-4">
                <Lightbulb className="h-6 w-6 text-success-foreground" />
              </div>
              <h4 className="text-xl font-bold mb-3">Personalized Learning Assessment</h4>
              <p className="text-muted-foreground text-readable mb-6">
                Answer a few simple questions to help us understand how you learn best. 
                This will customize your experience with our AI tools.
              </p>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2 justify-center">
                  <Target className="h-4 w-4 text-primary" />
                  <span>Visual Learning</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <Volume2 className="h-4 w-4 text-primary" />
                  <span>Auditory Learning</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <Award className="h-4 w-4 text-primary" />
                  <span>Kinesthetic Learning</span>
                </div>
              </div>
            </div>

            <Button className="btn-success text-lg" size="lg">
              Take Learning Quiz
            </Button>
          </div>
        </div>
      </section>

      {/* AI Tools Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              AI Tools for Better Learning
            </h3>
            <p className="text-lg text-muted-foreground content-safe text-readable">
              Our accessible tools are designed to support your learning journey with dyslexia-friendly features.
            </p>
          </div>

          <div className="grid gap-8 max-w-6xl mx-auto">
            <TextToSpeech />
            <SpeechToText />
            <TextSimplifier />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Why Choose DysLearner AI?
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="card-dyslexic text-center hover:shadow-soft transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-6 w-6 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-bold mb-3">Accessible Design</h4>
              <p className="text-muted-foreground text-readable">
                Clean, high-contrast interface with dyslexia-friendly typography and spacing for comfortable reading.
              </p>
            </Card>
            
            <Card className="card-dyslexic text-center hover:shadow-soft transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-success rounded-xl flex items-center justify-center mx-auto mb-4">
                <Brain className="h-6 w-6 text-success-foreground" />
              </div>
              <h4 className="text-xl font-bold mb-3">AI-Powered</h4>
              <p className="text-muted-foreground text-readable">
                Smart text simplification and speech recognition designed specifically for learning support.
              </p>
            </Card>
            
            <Card className="card-dyslexic text-center hover:shadow-soft transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-bold mb-3">Progress Tracking</h4>
              <p className="text-muted-foreground text-readable">
                Monitor your learning progress and celebrate improvements with detailed insights.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t bg-card/50">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Brain className="h-5 w-5 text-primary" />
            <span className="font-bold text-foreground">DysLearner AI</span>
          </div>
          <p className="text-sm text-muted-foreground text-readable">
            Empowering dyslexic learners with accessible AI technology
          </p>
          <div className="mt-4 space-x-4">
            <Button variant="ghost" size="sm" className="focus-dyslexic">
              Privacy Policy
            </Button>
            <Button variant="ghost" size="sm" className="focus-dyslexic">
              Terms of Service
            </Button>
            <Button variant="ghost" size="sm" className="focus-dyslexic">
              Contact Us
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;