import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Wand2, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const TextSimplifier = () => {
  const [inputText, setInputText] = useState("");
  const [simplifiedText, setSimplifiedText] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  // Simple text simplification rules for MVP
  const simplifyText = (text: string): string => {
    let simplified = text;
    
    // Replace complex words with simpler alternatives
    const replacements = [
      { complex: /utilize|utilise/gi, simple: "use" },
      { complex: /demonstrate/gi, simple: "show" },
      { complex: /approximately/gi, simple: "about" },
      { complex: /consequently/gi, simple: "so" },
      { complex: /therefore/gi, simple: "so" },
      { complex: /furthermore/gi, simple: "also" },
      { complex: /nevertheless/gi, simple: "but" },
      { complex: /subsequent/gi, simple: "next" },
      { complex: /endeavor|endeavour/gi, simple: "try" },
      { complex: /facilitate/gi, simple: "help" },
      { complex: /commence/gi, simple: "start" },
      { complex: /terminate/gi, simple: "end" },
      { complex: /purchase/gi, simple: "buy" },
      { complex: /assistance/gi, simple: "help" },
      { complex: /magnificent/gi, simple: "great" },
    ];

    replacements.forEach(({ complex, simple }) => {
      simplified = simplified.replace(complex, simple);
    });

    // Break long sentences into shorter ones
    simplified = simplified.replace(/([.!?])\s+/g, "$1\n\n");
    
    // Remove excessive punctuation
    simplified = simplified.replace(/[,;:]\s+/g, ". ");
    
    return simplified.trim();
  };

  const handleSimplify = async () => {
    if (!inputText.trim()) {
      toast({
        title: "Please enter some text",
        description: "Add text to simplify",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    
    // Simulate processing time for realistic feel
    setTimeout(() => {
      const result = simplifyText(inputText);
      setSimplifiedText(result);
      setIsProcessing(false);
      
      toast({
        title: "Text simplified successfully!",
        description: "Your text is now easier to read",
      });
    }, 1000);
  };

  const copySimplified = () => {
    navigator.clipboard.writeText(simplifiedText);
    toast({
      title: "Copied to clipboard",
      description: "Simplified text copied successfully",
    });
  };

  return (
    <Card className="p-6 shadow-card hover:shadow-soft transition-shadow duration-300">
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <Wand2 className="h-6 w-6 text-primary" />
          <h3 className="text-xl font-bold text-card-foreground">Text Simplifier</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">
              Original Text
            </label>
            <Textarea
              placeholder="Enter complex text here to simplify..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="min-h-32 text-base leading-relaxed focus-learning text-dyslexic"
              aria-label="Original text to simplify"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">
              Simplified Text
            </label>
            <Textarea
              placeholder="Simplified text will appear here..."
              value={simplifiedText}
              readOnly
              className="min-h-32 text-base leading-relaxed bg-secondary/50 text-dyslexic"
              aria-label="Simplified text output"
            />
          </div>
        </div>
        
        <div className="flex gap-3">
          <Button
            onClick={handleSimplify}
            disabled={isProcessing || !inputText.trim()}
            className="btn-learning focus-learning"
            size="lg"
          >
            <Wand2 className="h-4 w-4 mr-2" />
            {isProcessing ? "Simplifying..." : "Simplify Text"}
          </Button>
          
          <Button
            onClick={copySimplified}
            disabled={!simplifiedText}
            variant="outline"
            className="focus-learning"
            size="lg"
          >
            <Copy className="h-4 w-4 mr-2" />
            Copy Result
          </Button>
        </div>
        
        {simplifiedText && (
          <div className="p-4 bg-success-soft/20 rounded-lg border-l-4 border-success">
            <p className="text-sm text-success-foreground font-medium">
              ✓ Text simplified! Easier words and shorter sentences for better reading.
            </p>
          </div>
        )}
      </div>
    </Card>
  );
};

export default TextSimplifier;