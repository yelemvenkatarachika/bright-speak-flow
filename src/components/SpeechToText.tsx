import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Mic, MicOff, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SpeechToText = () => {
  const [transcript, setTranscript] = useState("");
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const { toast } = useToast();

  const startListening = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      toast({
        title: "Speech recognition not supported",
        description: "Your browser doesn't support speech recognition",
        variant: "destructive",
      });
      return;
    }

    const SpeechRecognitionAPI = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognitionAPI();
    
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event: any) => {
      let finalTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i];
        if (result.isFinal) {
          finalTranscript += result[0].transcript;
        }
      }
      
      if (finalTranscript) {
        setTranscript(prev => prev + ' ' + finalTranscript);
      }
    };

    recognition.onerror = () => {
      setIsListening(false);
      toast({
        title: "Speech recognition error",
        description: "There was an error with speech recognition",
        variant: "destructive",
      });
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;
    recognition.start();
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    setIsListening(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(transcript);
    toast({
      title: "Copied to clipboard",
      description: "Your speech has been copied successfully",
    });
  };

  const clearTranscript = () => {
    setTranscript("");
  };

  return (
    <Card className="p-6 shadow-card hover:shadow-soft transition-shadow duration-300">
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <Mic className="h-6 w-6 text-primary" />
          <h3 className="text-xl font-bold text-card-foreground">Speech to Text</h3>
        </div>
        
        <Textarea
          placeholder="Your speech will appear here..."
          value={transcript}
          onChange={(e) => setTranscript(e.target.value)}
          className="min-h-32 text-base leading-relaxed focus-learning text-dyslexic"
          aria-label="Speech to text output"
        />
        
        <div className="flex gap-3 flex-wrap">
          <Button
            onClick={isListening ? stopListening : startListening}
            className={isListening ? "btn-success" : "btn-learning"}
            size="lg"
          >
            {isListening ? (
              <>
                <MicOff className="h-4 w-4 mr-2" />
                Stop Listening
              </>
            ) : (
              <>
                <Mic className="h-4 w-4 mr-2" />
                Start Speaking
              </>
            )}
          </Button>
          
          <Button
            onClick={copyToClipboard}
            disabled={!transcript}
            variant="outline"
            className="focus-learning"
            size="lg"
          >
            <Copy className="h-4 w-4 mr-2" />
            Copy Text
          </Button>
          
          <Button
            onClick={clearTranscript}
            disabled={!transcript}
            variant="outline"
            className="focus-learning"
            size="lg"
          >
            Clear
          </Button>
        </div>
        
        {isListening && (
          <div className="flex items-center gap-2 text-success">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span className="text-sm">Listening... Speak clearly into your microphone</span>
          </div>
        )}
      </div>
    </Card>
  );
};

export default SpeechToText;