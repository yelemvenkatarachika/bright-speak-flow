import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Play, Pause, Square, Volume2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const TextToSpeech = () => {
  const [text, setText] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);
  const { toast } = useToast();

  const handleSpeak = () => {
    if (!text.trim()) {
      toast({
        title: "Please enter some text",
        description: "Add text to convert to speech",
        variant: "destructive",
      });
      return;
    }

    if (isPaused) {
      speechSynthesis.resume();
      setIsPaused(false);
      setIsPlaying(true);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.8; // Slower pace for dyslexic learners
    utterance.pitch = 1;
    utterance.volume = 1;

    utterance.onstart = () => {
      setIsPlaying(true);
      setIsPaused(false);
    };

    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
    };

    utterance.onerror = () => {
      setIsPlaying(false);
      setIsPaused(false);
      toast({
        title: "Speech error",
        description: "There was an error with text-to-speech",
        variant: "destructive",
      });
    };

    speechRef.current = utterance;
    speechSynthesis.speak(utterance);
  };

  const handlePause = () => {
    speechSynthesis.pause();
    setIsPlaying(false);
    setIsPaused(true);
  };

  const handleStop = () => {
    speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
  };

  return (
    <Card className="p-6 shadow-card hover:shadow-soft transition-shadow duration-300">
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <Volume2 className="h-6 w-6 text-primary" />
          <h3 className="text-xl font-bold text-card-foreground">Text to Speech</h3>
        </div>
        
        <Textarea
          placeholder="Enter text here to convert to speech..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="min-h-32 text-base leading-relaxed focus-learning text-dyslexic"
          aria-label="Text to convert to speech"
        />
        
        <div className="flex gap-3">
          <Button
            onClick={handleSpeak}
            disabled={isPlaying && !isPaused}
            className="btn-learning focus-learning"
            size="lg"
          >
            <Play className="h-4 w-4 mr-2" />
            {isPaused ? "Resume" : "Play"}
          </Button>
          
          <Button
            onClick={handlePause}
            disabled={!isPlaying}
            variant="outline"
            className="focus-learning"
            size="lg"
          >
            <Pause className="h-4 w-4 mr-2" />
            Pause
          </Button>
          
          <Button
            onClick={handleStop}
            disabled={!isPlaying && !isPaused}
            variant="outline"
            className="focus-learning"
            size="lg"
          >
            <Square className="h-4 w-4 mr-2" />
            Stop
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default TextToSpeech;