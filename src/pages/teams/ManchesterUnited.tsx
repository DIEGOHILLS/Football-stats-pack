import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Trophy, Target, RefreshCw } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ManchesterUnited = () => {
  const navigate = useNavigate();
  const [currentFact, setCurrentFact] = useState<string>("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [quizScore, setQuizScore] = useState(0);
  const [showQuizResult, setShowQuizResult] = useState(false);

  const facts = [
    "Manchester United has won 20 Premier League titles, the most in English football history.",
    "Sir Alex Ferguson managed Manchester United for 26 years, winning 38 trophies.",
    "Old Trafford has a capacity of 74,140, making it the largest club stadium in the UK.",
    "The 'Class of '92' included David Beckham, Ryan Giggs, Paul Scholes, and Gary Neville.",
    "Manchester United's treble-winning season in 1998-99 included the Premier League, FA Cup, and Champions League.",
    "Wayne Rooney is Manchester United's all-time leading goalscorer with 253 goals.",
    "The Munich Air Disaster in 1958 killed 8 Manchester United players, including Duncan Edwards.",
    "Manchester United was the first English club to win the European Cup in 1968.",
    "The Red Devils nickname comes from their red home kit, adopted in 1902.",
    "Sir Matt Busby managed the club for 24 years and built the famous 'Busby Babes' team."
  ];

  const quizQuestions = [
    {
      question: "How many Premier League titles has Manchester United won?",
      options: ["19", "20", "21", "18"],
      correct: 1
    },
    {
      question: "Who is Manchester United's all-time leading goalscorer?",
      options: ["George Best", "Wayne Rooney", "Ryan Giggs", "Cristiano Ronaldo"],
      correct: 1
    },
    {
      question: "In which year did Manchester United win the treble?",
      options: ["1998", "1999", "2000", "2001"],
      correct: 1
    },
    {
      question: "What is the capacity of Old Trafford?",
      options: ["72,000", "74,140", "76,000", "70,000"],
      correct: 1
    },
    {
      question: "How many years did Sir Alex Ferguson manage Manchester United?",
      options: ["24", "25", "26", "27"],
      correct: 2
    },
    {
      question: "Which player was known as the 'King of Old Trafford'?",
      options: ["George Best", "Eric Cantona", "Ryan Giggs", "Paul Scholes"],
      correct: 1
    },
    {
      question: "In which year was the Munich Air Disaster?",
      options: ["1957", "1958", "1959", "1960"],
      correct: 1
    },
    {
      question: "Manchester United was the first English club to win which European competition?",
      options: ["UEFA Cup", "Cup Winners' Cup", "European Cup", "Super Cup"],
      correct: 2
    },
    {
      question: "What year was Manchester United founded?",
      options: ["1876", "1878", "1880", "1882"],
      correct: 1
    },
    {
      question: "Which manager built the famous 'Busby Babes' team?",
      options: ["Sir Alex Ferguson", "Sir Matt Busby", "Tommy Docherty", "Ron Atkinson"],
      correct: 1
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
            <h1 className="text-4xl font-bold text-red-500 mb-2">
              Manchester United
            </h1>
            <p className="text-xl text-muted-foreground">The Red Devils</p>
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
                <CardTitle className="text-red-500">Manchester United Facts</CardTitle>
                <CardDescription>
                  Discover amazing facts about the Red Devils' history and achievements
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  onClick={generateRandomFact}
                  className="w-full bg-red-600 hover:bg-red-700 text-white"
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Generate Random Fact
                </Button>
                
                {currentFact && (
                  <Card className="bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800">
                    <CardContent className="pt-6">
                      <p className="text-lg leading-relaxed">{currentFact}</p>
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
                    <CardTitle className="text-red-500">Manchester United Quiz</CardTitle>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Question</p>
                      <p className="text-xl font-bold text-red-500">
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
                    Score: <span className="text-red-500 font-semibold">{quizScore}</span>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-card/90 backdrop-blur-sm border-border text-center">
                <CardHeader>
                  <CardTitle className="text-red-500 text-3xl mb-4">
                    Quiz Complete!
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-6xl mb-4">
                    {quizScore >= 8 ? "🏆" : quizScore >= 6 ? "⭐" : quizScore >= 4 ? "👍" : "📚"}
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-red-500 mb-2">
                      {quizScore} / {quizQuestions.length}
                    </p>
                    <p className="text-xl text-muted-foreground">
                      {Math.round((quizScore / quizQuestions.length) * 100)}% correct
                    </p>
                  </div>
                  <Button 
                    onClick={resetQuiz}
                    className="bg-red-600 hover:bg-red-700 text-white"
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

export default ManchesterUnited;