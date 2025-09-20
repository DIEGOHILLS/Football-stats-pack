import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Trophy, Target, RefreshCw, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Maradona = () => {
  const navigate = useNavigate();
  const [currentFact, setCurrentFact] = useState<string>("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [quizScore, setQuizScore] = useState(0);
  const [showQuizResult, setShowQuizResult] = useState(false);

  const facts = [
    "Diego Maradona led Argentina to World Cup victory in 1986, scoring 5 goals and 5 assists.",
    "He scored the famous 'Hand of God' goal and 'Goal of the Century' in the same match against England in 1986.",
    "Maradona played for Napoli from 1984-1991, leading them to their only two Serie A titles.",
    "He scored 34 goals in 91 appearances for the Argentina national team.",
    "Maradona was named FIFA Player of the 20th Century alongside Pelé.",
    "He wore the iconic number 10 jersey throughout most of his career.",
    "Maradona started his professional career at Argentinos Juniors at age 15.",
    "He transferred to Barcelona in 1982 for a then-world record fee of $7.6 million.",
    "Maradona's performance in the 1986 World Cup is considered one of the greatest individual tournaments ever.",
    "He coached Argentina national team from 2008-2010, leading them to the 2010 World Cup quarter-finals."
  ];

  const quizQuestions = [
    {
      question: "In which year did Maradona win the World Cup with Argentina?",
      options: ["1982", "1986", "1990", "1994"],
      correct: 1
    },
    {
      question: "Which Italian club did Maradona play for?",
      options: ["AC Milan", "Juventus", "Inter Milan", "Napoli"],
      correct: 3
    },
    {
      question: "How many goals did Maradona score in the 1986 World Cup?",
      options: ["4", "5", "6", "7"],
      correct: 1
    },
    {
      question: "What was Maradona's famous goal against England in 1986 called?",
      options: ["Goal of the Century", "Hand of God", "Both A and B", "The Divine Goal"],
      correct: 2
    },
    {
      question: "At what age did Maradona start his professional career?",
      options: ["14", "15", "16", "17"],
      correct: 1
    },
    {
      question: "Which club did Maradona join for a world record fee in 1982?",
      options: ["Real Madrid", "Barcelona", "Napoli", "Boca Juniors"],
      correct: 1
    },
    {
      question: "How many Serie A titles did Maradona win with Napoli?",
      options: ["1", "2", "3", "4"],
      correct: 1
    },
    {
      question: "What jersey number was Maradona most famous for wearing?",
      options: ["9", "10", "11", "7"],
      correct: 1
    },
    {
      question: "How many goals did Maradona score for Argentina?",
      options: ["30", "32", "34", "36"],
      correct: 2
    },
    {
      question: "Who did FIFA name as joint Player of the 20th Century with Maradona?",
      options: ["Pelé", "Johan Cruyff", "Franz Beckenbauer", "Alfredo Di Stéfano"],
      correct: 0
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
              Diego Maradona
              <Star className="h-10 w-10 text-football-gold" />
            </h1>
            <p className="text-xl text-muted-foreground">The Golden Boy</p>
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
                <CardTitle className="text-football-gold">Diego Maradona Facts</CardTitle>
                <CardDescription>
                  Discover incredible facts about Argentina's greatest football legend
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
                    <CardTitle className="text-football-gold">Diego Maradona Quiz</CardTitle>
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

export default Maradona;