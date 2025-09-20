import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Trophy, Target, RefreshCw } from "lucide-react";
import { useNavigate } from "react-router-dom";

const RealMadrid = () => {
  const navigate = useNavigate();
  const [currentFact, setCurrentFact] = useState<string>("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [quizScore, setQuizScore] = useState(0);
  const [showQuizResult, setShowQuizResult] = useState(false);

  const facts = [
    "Real Madrid has won the Champions League 14 times, more than any other club.",
    "The Santiago Bernabéu Stadium has a capacity of 81,044 after recent renovations.",
    "Real Madrid has won 35 La Liga titles, the most in Spanish football history.",
    "Los Galácticos era featured players like Zinedine Zidane, Ronaldinho, and David Beckham.",
    "Cristiano Ronaldo scored 451 goals in 438 appearances for Real Madrid.",
    "Real Madrid won 5 consecutive European Cups from 1956 to 1960.",
    "Alfredo Di Stéfano is considered one of Real Madrid's greatest players of all time.",
    "Real Madrid was named FIFA's Club of the 20th Century.",
    "The club was founded in 1902 as Madrid Football Club.",
    "Real Madrid has won the Club World Cup 5 times, a record."
  ];

  const quizQuestions = [
    {
      question: "How many Champions League titles has Real Madrid won?",
      options: ["12", "13", "14", "15"],
      correct: 2
    },
    {
      question: "What is the capacity of Santiago Bernabéu after renovations?",
      options: ["80,000", "81,044", "82,000", "85,000"],
      correct: 1
    },
    {
      question: "How many goals did Cristiano Ronaldo score for Real Madrid?",
      options: ["432", "445", "451", "467"],
      correct: 2
    },
    {
      question: "How many consecutive European Cups did Real Madrid win in the 1950s-60s?",
      options: ["4", "5", "6", "7"],
      correct: 1
    },
    {
      question: "In which year was Real Madrid founded?",
      options: ["1900", "1902", "1904", "1906"],
      correct: 1
    },
    {
      question: "Which player is considered Real Madrid's greatest of all time by many?",
      options: ["Alfredo Di Stéfano", "Francisco Gento", "Raúl", "Iker Casillas"],
      correct: 0
    },
    {
      question: "How many La Liga titles has Real Madrid won?",
      options: ["33", "34", "35", "36"],
      correct: 2
    },
    {
      question: "Real Madrid was named what by FIFA?",
      options: ["Club of the Century", "Club of the 20th Century", "Greatest Club", "Best Club Ever"],
      correct: 1
    },
    {
      question: "Which era featured Zidane, Ronaldinho, and Beckham?",
      options: ["Los Blancos", "Los Galácticos", "Los Merengues", "Los Vikingos"],
      correct: 1
    },
    {
      question: "How many Club World Cup titles has Real Madrid won?",
      options: ["3", "4", "5", "6"],
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
            <h1 className="text-4xl font-bold text-white mb-2">
              Real Madrid
            </h1>
            <p className="text-xl text-muted-foreground">Los Blancos</p>
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
            <Card className="bg-card/90 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="text-white">Real Madrid Facts</CardTitle>
                <CardDescription>
                  Discover amazing facts about Los Blancos' legendary history
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  onClick={generateRandomFact}
                  className="w-full bg-white text-black hover:bg-gray-100"
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Generate Random Fact
                </Button>
                
                {currentFact && (
                  <Card className="bg-white/10 border-white/20">
                    <CardContent className="pt-6">
                      <p className="text-lg leading-relaxed text-white">{currentFact}</p>
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
                    <CardTitle className="text-white">Real Madrid Quiz</CardTitle>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Question</p>
                      <p className="text-xl font-bold text-white">
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
                    Score: <span className="text-white font-semibold">{quizScore}</span>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-card/90 backdrop-blur-sm border-border text-center">
                <CardHeader>
                  <CardTitle className="text-white text-3xl mb-4">
                    Quiz Complete!
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-6xl mb-4">
                    {quizScore >= 8 ? "🏆" : quizScore >= 6 ? "⭐" : quizScore >= 4 ? "👍" : "📚"}
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white mb-2">
                      {quizScore} / {quizQuestions.length}
                    </p>
                    <p className="text-xl text-muted-foreground">
                      {Math.round((quizScore / quizQuestions.length) * 100)}% correct
                    </p>
                  </div>
                  <Button 
                    onClick={resetQuiz}
                    className="bg-white text-black hover:bg-gray-100"
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

export default RealMadrid;