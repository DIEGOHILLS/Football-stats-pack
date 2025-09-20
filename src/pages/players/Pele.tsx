import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Trophy, Target, RefreshCw, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Pele = () => {
  const navigate = useNavigate();
  const [currentFact, setCurrentFact] = useState<string>("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [quizScore, setQuizScore] = useState(0);
  const [showQuizResult, setShowQuizResult] = useState(false);

  const facts = [
    "Pelé won three World Cups with Brazil in 1958, 1962, and 1970 - a record that still stands.",
    "He scored 1,279 goals in 1,363 games throughout his career, though this includes friendlies.",
    "Pelé became the youngest player to win a World Cup at age 17 in 1958.",
    "He was named FIFA Player of the Century alongside Diego Maradona.",
    "Pelé spent most of his career at Santos FC, scoring 1,091 goals in 1,116 matches for the club.",
    "He came out of retirement to play for New York Cosmos, helping popularize soccer in America.",
    "Pelé scored 77 goals in 92 appearances for the Brazil national team.",
    "He was the only player to be part of three World Cup-winning teams.",
    "Pelé's real name is Edson Arantes do Nascimento, nicknamed after Thomas Edison.",
    "He was declared a national treasure by the Brazilian government in 1961 to prevent European clubs from signing him."
  ];

  const quizQuestions = [
    {
      question: "How many World Cups did Pelé win with Brazil?",
      options: ["2", "3", "4", "5"],
      correct: 1
    },
    {
      question: "At what age did Pelé win his first World Cup?",
      options: ["16", "17", "18", "19"],
      correct: 1
    },
    {
      question: "Which club did Pelé spend most of his career with?",
      options: ["Flamengo", "Corinthians", "Santos", "São Paulo"],
      correct: 2
    },
    {
      question: "In which years did Pelé win the World Cup?",
      options: ["1958, 1962, 1970", "1958, 1966, 1970", "1962, 1966, 1970", "1958, 1962, 1966"],
      correct: 0
    },
    {
      question: "How many goals did Pelé score for Brazil?",
      options: ["75", "77", "79", "81"],
      correct: 1
    },
    {
      question: "Which American club did Pelé play for?",
      options: ["LA Galaxy", "New York Cosmos", "Chicago Fire", "DC United"],
      correct: 1
    },
    {
      question: "What is Pelé's real name?",
      options: ["Edson Arantes do Nascimento", "Paulo Roberto Silva", "Carlos Eduardo Santos", "Ricardo Izecson dos Santos"],
      correct: 0
    },
    {
      question: "Who did FIFA name as joint Player of the 20th Century with Pelé?",
      options: ["Diego Maradona", "Johan Cruyff", "Franz Beckenbauer", "Alfredo Di Stéfano"],
      correct: 0
    },
    {
      question: "What did the Brazilian government declare Pelé in 1961?",
      options: ["National Hero", "National Treasure", "National Ambassador", "National Icon"],
      correct: 1
    },
    {
      question: "How many goals did Pelé score for Santos FC?",
      options: ["1,055", "1,078", "1,091", "1,112"],
      correct: 2
    }
  ];

  const generateRandomFact = () => {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    setCurrentFact(randomFact);
  };

  const handleQuizAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    
    setTimeout(() => {
      if (answerIndex === quizQuestions[currentQuestion].correct) {
        setQuizScore(quizScore + 1);
      }
      
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowQuizResult(true);
      }
    }, 1000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setQuizScore(0);
    setShowQuizResult(false);
    setSelectedAnswer(null);
  };

  return (
    <div className="min-h-screen bg-gradient-pitch p-4">
      <div className="container mx-auto max-w-4xl">
        <header className="mb-8">
          <Button 
            variant="outline" 
            onClick={() => navigate('/')}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          <div className="text-center">
            <h1 className="text-4xl font-bold bg-gradient-gold bg-clip-text text-transparent mb-2 flex items-center justify-center gap-3">
              <Star className="h-10 w-10 text-football-gold" />
              Pelé
              <Star className="h-10 w-10 text-football-gold" />
            </h1>
            <p className="text-xl text-muted-foreground">The King of Football</p>
          </div>
        </header>

        <Tabs defaultValue="facts" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="facts" className="flex items-center gap-2">
              <Trophy className="h-4 w-4" />
              Facts
            </TabsTrigger>
            <TabsTrigger value="quiz" className="flex items-center gap-2">
              <Target className="h-4 w-4" />
              Quiz
            </TabsTrigger>
          </TabsList>

          <TabsContent value="facts" className="space-y-6">
            <Card className="bg-card/90 backdrop-blur-sm border-border shadow-gold">
              <CardHeader>
                <CardTitle className="text-football-gold">Pelé Facts</CardTitle>
                <CardDescription>
                  Discover incredible facts about the King of Football
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  onClick={generateRandomFact}
                  className="w-full bg-gradient-gold text-black hover:shadow-gold font-semibold"
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Generate Random Fact
                </Button>
                
                {currentFact && (
                  <Card className="bg-gradient-gold/10 border-football-gold/30 shadow-gold">
                    <CardContent className="pt-6">
                      <p className="text-lg leading-relaxed text-football-gold font-medium">{currentFact}</p>
                    </CardContent>
                  </Card>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="quiz" className="space-y-6">
            {!showQuizResult ? (
              <Card className="bg-card/90 backdrop-blur-sm border-border">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-football-gold">Pelé Quiz</CardTitle>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Question</p>
                      <p className="text-xl font-bold text-football-gold">
                        {currentQuestion + 1} / {quizQuestions.length}
                      </p>
                    </div>
                  </div>
                  <CardDescription>
                    {quizQuestions[currentQuestion].question}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {quizQuestions[currentQuestion].options.map((option, index) => (
                    <Button
                      key={index}
                      variant={selectedAnswer === index ? "default" : "outline"}
                      className={`w-full justify-start text-left h-auto p-4 ${
                        selectedAnswer === index 
                          ? selectedAnswer === quizQuestions[currentQuestion].correct
                            ? "bg-green-600 hover:bg-green-700"
                            : "bg-red-600 hover:bg-red-700"
                          : "hover:bg-muted"
                      }`}
                      onClick={() => handleQuizAnswer(index)}
                      disabled={selectedAnswer !== null}
                    >
                      <span className="font-semibold mr-3">
                        {String.fromCharCode(65 + index)}.
                      </span>
                      {option}
                    </Button>
                  ))}
                  
                  <div className="text-sm text-muted-foreground mt-4">
                    Score: <span className="text-football-gold font-semibold">{quizScore}</span>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-card/90 backdrop-blur-sm border-border text-center shadow-gold">
                <CardHeader>
                  <CardTitle className="text-football-gold text-3xl mb-4">
                    Quiz Complete!
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-6xl mb-4">
                    {quizScore >= 8 ? "🏆" : quizScore >= 6 ? "⭐" : quizScore >= 4 ? "👍" : "📚"}
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-football-gold mb-2">
                      {quizScore} / {quizQuestions.length}
                    </p>
                    <p className="text-xl text-muted-foreground">
                      {Math.round((quizScore / quizQuestions.length) * 100)}% correct
                    </p>
                  </div>
                  <Button 
                    onClick={resetQuiz}
                    className="bg-gradient-gold text-black hover:shadow-gold font-semibold"
                  >
                    Try Again
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Pele;