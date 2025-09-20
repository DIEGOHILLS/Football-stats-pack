import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Trophy, Target, RefreshCw, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Ronaldo = () => {
  const navigate = useNavigate();
  const [currentFact, setCurrentFact] = useState<string>("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [quizScore, setQuizScore] = useState(0);
  const [showQuizResult, setShowQuizResult] = useState(false);

  const facts = [
    "Cristiano Ronaldo has scored over 900 career goals for club and country.",
    "He is the all-time leading scorer in Champions League history with 140 goals.",
    "Ronaldo has won 5 Ballon d'Or awards (2008, 2013, 2014, 2016, 2017).",
    "He has won league titles in England, Spain, and Italy.",
    "Ronaldo is Portugal's all-time leading scorer with 128+ international goals.",
    "He scored 451 goals in 438 appearances for Real Madrid.",
    "Ronaldo became the first player to score in 5 different World Cups (2006-2022).",
    "He has won the Champions League 5 times with Manchester United and Real Madrid.",
    "Ronaldo is the most followed person on Instagram with over 600 million followers.",
    "He was the first footballer to earn over $1 billion in career earnings."
  ];

  const quizQuestions = [
    {
      question: "How many Ballon d'Or awards has Cristiano Ronaldo won?",
      options: ["4", "5", "6", "7"],
      correct: 1
    },
    {
      question: "How many goals did Ronaldo score for Real Madrid?",
      options: ["432", "445", "451", "467"],
      correct: 2
    },
    {
      question: "In how many different World Cups has Ronaldo scored?",
      options: ["4", "5", "6", "7"],
      correct: 1
    },
    {
      question: "How many Champions League titles has Ronaldo won?",
      options: ["4", "5", "6", "7"],
      correct: 1
    },
    {
      question: "Ronaldo is the all-time leading scorer for which national team?",
      options: ["Spain", "Brazil", "Portugal", "Argentina"],
      correct: 2
    },
    {
      question: "In which year did Ronaldo win his first Ballon d'Or?",
      options: ["2007", "2008", "2009", "2010"],
      correct: 1
    },
    {
      question: "How many league titles has Ronaldo won in different countries?",
      options: ["2", "3", "4", "5"],
      correct: 1
    },
    {
      question: "Ronaldo became the first footballer to earn over how much in career earnings?",
      options: ["$500 million", "$750 million", "$1 billion", "$1.5 billion"],
      correct: 2
    },
    {
      question: "How many goals has Ronaldo scored in Champions League history?",
      options: ["130", "135", "140", "145"],
      correct: 2
    },
    {
      question: "Ronaldo's famous celebration is called?",
      options: ["Siu", "Calma", "Vamos", "Siiiiii"],
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
              Cristiano Ronaldo
              <Star className="h-10 w-10 text-football-gold" />
            </h1>
            <p className="text-xl text-muted-foreground">The Goat</p>
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
                <CardTitle className="text-football-gold">Cristiano Ronaldo Facts</CardTitle>
                <CardDescription>
                  Discover incredible facts about one of football's greatest legends
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
                    <CardTitle className="text-football-gold">Cristiano Ronaldo Quiz</CardTitle>
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

export default Ronaldo;