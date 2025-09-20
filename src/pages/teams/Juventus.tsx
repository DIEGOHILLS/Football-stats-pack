import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Trophy, Target, RefreshCw } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Juventus = () => {
  const navigate = useNavigate();
  const [currentFact, setCurrentFact] = useState<string>("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [quizScore, setQuizScore] = useState(0);
  const [showQuizResult, setShowQuizResult] = useState(false);

  const facts = [
    "Juventus has won Serie A 36 times, more than any other Italian club.",
    "The club is known as 'The Old Lady' (La Vecchia Signora) and 'Juve'.",
    "Juventus has won the Champions League twice, in 1985 and 1996.",
    "Alessandro Del Piero scored 290 goals in 705 appearances for Juventus.",
    "The Allianz Stadium has a capacity of 41,507 and opened in 2011.",
    "Juventus dominated Serie A in the 2010s, winning 9 consecutive titles.",
    "Gianluigi Buffon is considered one of the greatest goalkeepers of all time.",
    "The club was founded in 1897 by a group of students in Turin.",
    "Juventus is the most successful club in Italian football history.",
    "Cristiano Ronaldo played for Juventus from 2018 to 2021, scoring 101 goals."
  ];

  const quizQuestions = [
    {
      question: "How many Serie A titles has Juventus won?",
      options: ["34", "35", "36", "37"],
      correct: 2
    },
    {
      question: "What is Juventus commonly known as?",
      options: ["The Old Lady", "The Black and Whites", "The Turin Giants", "The Italian Kings"],
      correct: 0
    },
    {
      question: "How many Champions League titles has Juventus won?",
      options: ["1", "2", "3", "4"],
      correct: 1
    },
    {
      question: "Who scored the most goals for Juventus?",
      options: ["Roberto Baggio", "Alessandro Del Piero", "Michel Platini", "Gianluca Vialli"],
      correct: 1
    },
    {
      question: "What is the capacity of Allianz Stadium?",
      options: ["40,000", "41,507", "42,500", "43,000"],
      correct: 1
    },
    {
      question: "How many consecutive Serie A titles did Juventus win in the 2010s?",
      options: ["7", "8", "9", "10"],
      correct: 2
    },
    {
      question: "In which year was Juventus founded?",
      options: ["1895", "1896", "1897", "1898"],
      correct: 2
    },
    {
      question: "How many goals did Cristiano Ronaldo score for Juventus?",
      options: ["95", "98", "101", "105"],
      correct: 2
    },
    {
      question: "Which goalkeeper is considered a Juventus legend?",
      options: ["Gianluigi Buffon", "Wojciech Szczęsny", "Mattia Perin", "Stefano Tacconi"],
      correct: 0
    },
    {
      question: "Juventus is based in which Italian city?",
      options: ["Milan", "Rome", "Turin", "Naples"],
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
              Juventus
            </h1>
            <p className="text-xl text-muted-foreground">The Old Lady</p>
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
                <CardTitle className="text-white">Juventus Facts</CardTitle>
                <CardDescription>
                  Discover amazing facts about The Old Lady's legendary history in Italian football
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
                    <CardTitle className="text-white">Juventus Quiz</CardTitle>
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

export default Juventus;