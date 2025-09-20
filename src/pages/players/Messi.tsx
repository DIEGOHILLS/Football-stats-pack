import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Trophy, Target, RefreshCw, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Messi = () => {
  const navigate = useNavigate();
  const [currentFact, setCurrentFact] = useState<string>("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [quizScore, setQuizScore] = useState(0);
  const [showQuizResult, setShowQuizResult] = useState(false);

  const facts = [
    "Lionel Messi has won 8 Ballon d'Or awards, more than any other player in history.",
    "He scored 672 goals in 778 appearances for Barcelona.",
    "Messi finally won the World Cup with Argentina in 2022 at age 35.",
    "He has won the Champions League 4 times, all with Barcelona.",
    "Messi is the all-time leading scorer in La Liga history with 474 goals.",
    "He joined Barcelona's academy La Masia at age 13 from Argentina.",
    "Messi has scored over 100 international goals for Argentina.",
    "He won the Copa América with Argentina in 2021, his first major international trophy.",
    "Messi has provided over 350 career assists for club and country.",
    "He was named FIFA World Player of the Year and The Best FIFA Men's Player multiple times."
  ];

  const quizQuestions = [
    {
      question: "How many Ballon d'Or awards has Lionel Messi won?",
      options: ["6", "7", "8", "9"],
      correct: 2
    },
    {
      question: "How many goals did Messi score for Barcelona?",
      options: ["650", "672", "685", "700"],
      correct: 1
    },
    {
      question: "In which year did Messi win his first World Cup?",
      options: ["2018", "2020", "2021", "2022"],
      correct: 3
    },
    {
      question: "At what age did Messi join Barcelona's La Masia academy?",
      options: ["11", "12", "13", "14"],
      correct: 2
    },
    {
      question: "How many Champions League titles has Messi won?",
      options: ["3", "4", "5", "6"],
      correct: 1
    },
    {
      question: "Messi is the all-time leading scorer in which league?",
      options: ["Premier League", "Serie A", "La Liga", "Ligue 1"],
      correct: 2
    },
    {
      question: "How many La Liga goals did Messi score?",
      options: ["460", "474", "485", "492"],
      correct: 1
    },
    {
      question: "In which year did Messi win his first Copa América?",
      options: ["2019", "2020", "2021", "2022"],
      correct: 2
    },
    {
      question: "Which country is Messi originally from?",
      options: ["Spain", "Argentina", "Brazil", "Uruguay"],
      correct: 1
    },
    {
      question: "Approximately how many career assists does Messi have?",
      options: ["300", "325", "350", "375"],
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
              Lionel Messi
              <Star className="h-10 w-10 text-football-gold" />
            </h1>
            <p className="text-xl text-muted-foreground">Ankara Messi , Ankara Messi</p>
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
                <CardTitle className="text-football-gold">Lionel Messi Facts</CardTitle>
                <CardDescription>
                  Discover incredible facts about the greatest footballer of all time
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
                    <CardTitle className="text-football-gold">Lionel Messi Quiz</CardTitle>
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

export default Messi;