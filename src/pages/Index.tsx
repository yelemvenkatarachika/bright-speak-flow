import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, BookOpen, Mic, Volume2, Wand2, TrendingUp } from "lucide-react";
import TextToSpeech from "@/components/TextToSpeech";
import SpeechToText from "@/components/SpeechToText";
import TextSimplifier from "@/components/TextSimplifier";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-primary rounded-xl">
              <Brain className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">DysLearner AI</h1>
              <p className="text-sm text-muted-foreground">Empowering Dyslexic Learners</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-primary-soft/10 to-success-soft/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-dyslexic">
              Learning Made Easy with AI
            </h2>
            <p className="text-xl text-muted-foreground mb-8 text-dyslexic leading-relaxed">
              Overcome reading and writing challenges with our AI-powered tools designed specifically for dyslexic learners. 
              Convert text to speech, speak your thoughts, and simplify complex content.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg shadow-card">
                <Volume2 className="h-5 w-5 text-primary" />
                <span className="font-medium">Text to Speech</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg shadow-card">
                <Mic className="h-5 w-5 text-primary" />
                <span className="font-medium">Speech to Text</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg shadow-card">
                <Wand2 className="h-5 w-5 text-primary" />
                <span className="font-medium">Text Simplifier</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              AI Tools for Better Learning
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-dyslexic">
              Our accessible tools are designed to support your learning journey with dyslexia-friendly features.
            </p>
          </div>

          <div className="grid gap-8 max-w-6xl mx-auto">
            {/* Text to Speech */}
            <TextToSpeech />
            
            {/* Speech to Text */}
            <SpeechToText />
            
            {/* Text Simplifier */}
            <TextSimplifier />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Why Choose DysLearner AI?
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-6 text-center shadow-card hover:shadow-soft transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-6 w-6 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-bold mb-3">Accessible Design</h4>
              <p className="text-muted-foreground text-dyslexic">
                Clean, high-contrast interface with dyslexia-friendly typography and spacing.
              </p>
            </Card>
            
            <Card className="p-6 text-center shadow-card hover:shadow-soft transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-success rounded-xl flex items-center justify-center mx-auto mb-4">
                <Brain className="h-6 w-6 text-success-foreground" />
              </div>
              <h4 className="text-xl font-bold mb-3">AI-Powered</h4>
              <p className="text-muted-foreground text-dyslexic">
                Smart text simplification and speech recognition designed for learning support.
              </p>
            </Card>
            
            <Card className="p-6 text-center shadow-card hover:shadow-soft transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-bold mb-3">Progress Tracking</h4>
              <p className="text-muted-foreground text-dyslexic">
                Monitor your learning progress and celebrate improvements over time.
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
          <p className="text-sm text-muted-foreground">
            Empowering dyslexic learners with accessible AI technology
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;