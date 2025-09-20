import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Target, Users, Star } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-pitch">
      <header className="py-8 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-gold bg-clip-text text-transparent mb-4">
          Football Facts & Quiz Hub
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Test your knowledge of Premier League, La Liga, Serie A, AFCON, and World Cup with amazing facts and challenging quizzes
        </p>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Main Actions */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="bg-card/90 backdrop-blur-sm border-border hover:shadow-glow transition-all duration-300 cursor-pointer" onClick={() => navigate('/facts')}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-football-gold">
                <Trophy className="h-8 w-8" />
                Random Facts
              </CardTitle>
              <CardDescription>
                Discover amazing statistics about goals, trophies, transfers, and legendary moments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">Explore Facts</Button>
            </CardContent>
          </Card>

          <Card className="bg-card/90 backdrop-blur-sm border-border hover:shadow-glow transition-all duration-300 cursor-pointer" onClick={() => navigate('/quiz')}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-football-gold">
                <Target className="h-8 w-8" />
                Football Quiz
              </CardTitle>
              <CardDescription>
                Challenge yourself with 10 questions about football history and statistics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">Start Quiz</Button>
            </CardContent>
          </Card>
        </div>

        {/* Teams Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-football-gold">Elite Teams</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-card/90 backdrop-blur-sm border-border hover:shadow-gold transition-all duration-300 cursor-pointer" onClick={() => navigate('/teams/manchester-united')}>
              <CardHeader className="text-center">
                <CardTitle className="text-red-500">Manchester United</CardTitle>
                <CardDescription>The Red Devils</CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card/90 backdrop-blur-sm border-border hover:shadow-gold transition-all duration-300 cursor-pointer" onClick={() => navigate('/teams/real-madrid')}>
              <CardHeader className="text-center">
                <CardTitle className="text-white">Real Madrid</CardTitle>
                <CardDescription>Los Blancos</CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card/90 backdrop-blur-sm border-border hover:shadow-gold transition-all duration-300 cursor-pointer" onClick={() => navigate('/teams/barcelona')}>
              <CardHeader className="text-center">
                <CardTitle className="text-blue-600">Barcelona</CardTitle>
                <CardDescription>Barça</CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card/90 backdrop-blur-sm border-border hover:shadow-gold transition-all duration-300 cursor-pointer" onClick={() => navigate('/teams/juventus')}>
              <CardHeader className="text-center">
                <CardTitle className="text-white">Juventus</CardTitle>
                <CardDescription>The Old Lady</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Legends Section */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-8 text-football-gold">Football Legends</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-card/90 backdrop-blur-sm border-border hover:shadow-gold transition-all duration-300 cursor-pointer" onClick={() => navigate('/players/ronaldo')}>
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-3 text-football-gold">
                  <Star className="h-6 w-6" />
                  Cristiano Ronaldo
                </CardTitle>
                <CardDescription>The Goat</CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card/90 backdrop-blur-sm border-border hover:shadow-gold transition-all duration-300 cursor-pointer" onClick={() => navigate('/players/messi')}>
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-3 text-football-gold">
                  <Star className="h-6 w-6" />
                  Lionel Messi
                </CardTitle>
                <CardDescription>Ankara Messi , Ankara Messi</CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card/90 backdrop-blur-sm border-border hover:shadow-gold transition-all duration-300 cursor-pointer" onClick={() => navigate('/players/maradona')}>
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-3 text-football-gold">
                  <Star className="h-6 w-6" />
                  Diego Maradona
                </CardTitle>
                <CardDescription>The Golden Boy</CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card/90 backdrop-blur-sm border-border hover:shadow-gold transition-all duration-300 cursor-pointer" onClick={() => navigate('/players/pele')}>
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-3 text-football-gold">
                  <Star className="h-6 w-6" />
                  Pelé
                </CardTitle>
                <CardDescription>The King of Football</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;