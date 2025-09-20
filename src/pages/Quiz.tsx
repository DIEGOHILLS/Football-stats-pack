import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Trophy, RotateCcw } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
  category: string;
}

const Quiz = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [quizStarted, setQuizStarted] = useState(false);

  const questions: QuizQuestion[] = [
    {
      question: "Which club has won the most Champions League titles?",
      options: ["AC Milan", "Real Madrid", "Liverpool", "Barcelona"],
      correct: 1,
      category: "UEFA Champions League"
    },
    {
      question: "How many World Cups has Brazil won?",
      options: ["3", "4", "5", "6"],
      correct: 2,
      category: "World Cup"
    },
    {
      question: "Which team holds the record for most Premier League titles?",
      options: ["Arsenal", "Chelsea", "Liverpool", "Manchester United"],
      correct: 3,
      category: "Premier League"
    },
    {
      question: "Who is the all-time top scorer in La Liga?",
      options: ["Cristiano Ronaldo", "Lionel Messi", "Raúl", "Telmo Zarra"],
      correct: 1,
      category: "La Liga"
    },
    {
      question: "Which African nation has won AFCON the most times?",
      options: ["Nigeria", "Cameroon", "Egypt", "Ghana"],
      correct: 2,
      category: "AFCON"
    },
    {
      question: "Which club has won the Europa League the most times?",
      options: ["Sevilla", "Inter Milan", "Chelsea", "Atlético Madrid"],
      correct: 0,
      category: "UEFA Europa League"
    },
    {
      question: "Which Italian club has won the most Serie A titles?",
      options: ["AC Milan", "Inter Milan", "Juventus", "AS Roma"],
      correct: 2,
      category: "Serie A"
    },
    {
      question: "Who scored the 'Hand of God' goal in the 1986 World Cup?",
      options: ["Pelé", "Diego Maradona", "Johan Cruyff", "Michel Platini"],
      correct: 1,
      category: "World Cup"
    },
    {
      question: "In which year did Leicester City win the Premier League?",
      options: ["2014", "2015", "2016", "2017"],
      correct: 2,
      category: "Premier League"
    },
    {
      question: "Which player has scored the most goals in Champions League history?",
      options: ["Lionel Messi", "Cristiano Ronaldo", "Robert Lewandowski", "Karim Benzema"],
      correct: 1,
      category: "UEFA Champions League"
    }
  ];

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setQuizStarted(false);
  };

  const startQuiz = () => {
    setQuizStarted(true);
    toast({
      title: "Quiz Started!",
      description: "Good luck with your football knowledge test!",
    });
  };

  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-gradient-pitch p-4 flex items-center justify-center">
        <div className="container mx-auto max-w-2xl">
          <Button 
            variant="outline" 
            onClick={() => navigate('/')}
            className="mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          
          <Card className="bg-card/90 backdrop-blur-sm border-border text-center">
            <CardHeader>
              <CardTitle className="text-4xl bg-gradient-gold bg-clip-text text-transparent mb-4">
                Football Knowledge Quiz
              </CardTitle>
              <CardDescription className="text-lg">
                Test your knowledge with 10 challenging questions about football history, statistics, and legendary moments
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-muted-foreground">
                <p>• 10 multiple choice questions</p>
                <p>• Covers Premier League, La Liga, Serie A, AFCON, World Cup, Champions League, and Europa League</p>
                <p>• Questions about goals, trophies, transfers, and legends</p>
              </div>
              <Button 
                onClick={startQuiz}
                className="bg-gradient-primary hover:shadow-glow text-lg px-8 py-3"
              >
                <Trophy className="h-5 w-5 mr-2" />
                Start Quiz
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (showResult) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="min-h-screen bg-gradient-pitch p-4 flex items-center justify-center">
        <div className="container mx-auto max-w-2xl">
          <Card className="bg-card/90 backdrop-blur-sm border-border text-center">
            <CardHeader>
              <CardTitle className="text-4xl bg-gradient-gold bg-clip-text text-transparent mb-4">
                Quiz Complete!
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-6xl mb-4">
                {percentage >= 80 ? "🏆" : percentage >= 60 ? "⭐" : percentage >= 40 ? "👍" : "📚"}
              </div>
              <div>
                <p className="text-3xl font-bold text-football-gold mb-2">
                  {score} / {questions.length}
                </p>
                <p className="text-xl text-muted-foreground">
                  {percentage}% correct
                </p>
              </div>
              <div className="text-lg">
                {percentage >= 80 && "Outstanding! You're a true football expert! 🌟"}
                {percentage >= 60 && percentage < 80 && "Great job! You know your football well! 👏"}
                {percentage >= 40 && percentage < 60 && "Not bad! Keep learning about football! 📖"}
                {percentage < 40 && "Keep studying! There's always more to learn about football! 💪"}
              </div>
              <div className="flex gap-4 justify-center">
                <Button 
                  onClick={resetQuiz}
                  className="bg-gradient-primary hover:shadow-glow"
                >
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Try Again
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => navigate('/')}
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

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
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold bg-gradient-gold bg-clip-text text-transparent">
              Football Quiz
            </h1>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Question</p>
              <p className="text-xl font-bold text-football-gold">
                {currentQuestion + 1} / {questions.length}
              </p>
            </div>
          </div>
        </header>

        <div className="space-y-6">
          <Card className="bg-card/90 backdrop-blur-sm border-border">
            <CardHeader>
              <div className="text-sm text-football-gold mb-2">
                {questions[currentQuestion].category}
              </div>
              <CardTitle className="text-xl">
                {questions[currentQuestion].question}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant={selectedAnswer === index ? "default" : "outline"}
                  className={`w-full justify-start text-left h-auto p-4 ${
                    selectedAnswer === index 
                      ? "bg-gradient-primary hover:shadow-glow" 
                      : "hover:bg-muted"
                  }`}
                  onClick={() => handleAnswerSelect(index)}
                >
                  <span className="font-semibold mr-3">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  {option}
                </Button>
              ))}
            </CardContent>
          </Card>

          <div className="flex justify-between items-center">
            <div className="text-sm text-muted-foreground">
              Score: <span className="text-football-gold font-semibold">{score}</span>
            </div>
            <Button
              onClick={handleNextQuestion}
              disabled={selectedAnswer === null}
              className="bg-gradient-primary hover:shadow-glow"
            >
              {currentQuestion < questions.length - 1 ? "Next Question" : "Finish Quiz"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;