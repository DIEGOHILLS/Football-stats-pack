import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Trophy, Target, RefreshCw } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Barcelona = () => {
  const navigate = useNavigate();
  const [currentFact, setCurrentFact] = useState<string>("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [quizScore, setQuizScore] = useState(0);
  const [showQuizResult, setShowQuizResult] = useState(false);

  const facts = [
    "Barcelona has won the Champions League 5 times, with memorable victories in 2009, 2011, and 2015.",
    "Camp Nou is the largest stadium in Europe with a capacity of 99,354.",
    "Lionel Messi scored 672 goals in 778 appearances for Barcelona.",
    "Barcelona has won 26 La Liga titles in their history.",
    "The famous tiki-taka playing style was perfected under Pep Guardiola.",
    "Barcelona's academy, La Masia, has produced players like Messi, Xavi, and Iniesta.",
    "The club motto is 'Més que un club' (More than a club).",
    "Barcelona won 6 trophies in 2009, achieving the historic sextuple.",
    "Xavi Hernández made 767 appearances for Barcelona, the most in club history.",
    "The El Clásico rivalry with Real Madrid is one of the biggest in world football."
  ];

  const quizQuestions = [
    {
      question: "What is the capacity of Camp Nou?",
      options: ["95,000", "97,000", "99,354", "101,000"],
      correct: 2
    },
    {
      question: "How many goals did Lionel Messi score for Barcelona?",
      options: ["650", "672", "685", "700"],
      correct: 1
    },
    {
      question: "How many Champions League titles has Barcelona won?",
      options: ["4", "5", "6", "7"],
      correct: 1
    },
    {
      question: "What is Barcelona's club motto?",
      options: ["Més que un club", "Visca el Barça", "Força Barça", "Barça DNA"],
      correct: 0
    },
    {
      question: "Who holds the record for most appearances for Barcelona?",
      options: ["Lionel Messi", "Xavi Hernández", "Andrés Iniesta", "Carles Puyol"],
      correct: 1
    },
    {
      question: "In which year did Barcelona achieve the sextuple?",
      options: ["2008", "2009", "2010", "2011"],
      correct: 1
    },
    {
      question: "What is Barcelona's famous academy called?",
      options: ["La Fábrica", "La Masia", "La Cantera", "La Academia"],
      correct: 1
    },
    {
      question: "Under which manager was tiki-taka perfected?",
      options: ["Frank Rijkaard", "Pep Guardiola", "Luis Enrique", "Ronald Koeman"],
      correct: 1
    },
    {
      question: "How many La Liga titles has Barcelona won?",
      options: ["24", "25", "26", "27"],
      correct: 2
    },
    {
      question: "What is the name of Barcelona's biggest rivalry?",
      options: ["El Derbi", "El Clásico", "El Superclásico", "La Rivalidad"],
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
            <h1 className="text-4xl font-bold text-blue-600 mb-2">
              Barcelona
            </h1>
            <p className="text-xl text-muted-foreground">Barça</p>
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
                <CardTitle className="text-blue-600">Barcelona Facts</CardTitle>
                <CardDescription>
                  Discover amazing facts about Barça's incredible history and tiki-taka legacy
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  onClick={generateRandomFact}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Generate Random Fact
                </Button>
                
                {currentFact && (
                  <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
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
                    <CardTitle className="text-blue-600">Barcelona Quiz</CardTitle>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Question</p>
                      <p className="text-xl font-bold text-blue-600">
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
                    Score: <span className="text-blue-600 font-semibold">{quizScore}</span>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-card/90 backdrop-blur-sm border-border text-center">
                <CardHeader>
                  <CardTitle className="text-blue-600 text-3xl mb-4">
                    Quiz Complete!
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-6xl mb-4">
                    {quizScore >= 8 ? "🏆" : quizScore >= 6 ? "⭐" : quizScore >= 4 ? "👍" : "📚"}
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-blue-600 mb-2">
                      {quizScore} / {quizQuestions.length}
                    </p>
                    <p className="text-xl text-muted-foreground">
                      {Math.round((quizScore / quizQuestions.length) * 100)}% correct
                    </p>
                  </div>
                  <Button 
                    onClick={resetQuiz}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
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

export default Barcelona;