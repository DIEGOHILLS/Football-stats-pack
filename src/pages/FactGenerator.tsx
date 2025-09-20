import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, RefreshCw } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FactGenerator = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [currentFact, setCurrentFact] = useState<string>("");

  const categories = [
    "Premier League",
    "La Liga", 
    "Serie A",
    "AFCON",
    "World Cup",
    "UEFA Champions League",
    "UEFA Europa League"
  ];

  const facts = {
    "Premier League": [
      "Manchester City scored 100 goals in the 2017-18 season, breaking the Premier League record.",
      "Alan Shearer is the all-time Premier League top scorer with 260 goals.",
      "Arsenal went unbeaten for 49 consecutive Premier League matches from 2003-2004.",
      "Leicester City won the Premier League in 2015-16 with odds of 5000/1.",
      "Ryan Giggs holds the record for most Premier League appearances with 632 games.",
      "Thierry Henry scored 175 Premier League goals for Arsenal.",
      "Manchester United won 13 Premier League titles under Sir Alex Ferguson.",
      "Sergio Agüero's last-minute goal in 2012 won Manchester City their first Premier League title in 44 years."
    ],
    "La Liga": [
      "Real Madrid has won La Liga 35 times, more than any other club.",
      "Lionel Messi scored 474 goals in La Liga for Barcelona.",
      "Barcelona's tiki-taka style dominated La Liga in the 2000s and 2010s.",
      "Athletic Bilbao has never been relegated from La Liga since its inception.",
      "Cristiano Ronaldo scored 311 goals in 292 La Liga appearances for Real Madrid.",
      "Real Madrid and Barcelona have won 62 of the 92 La Liga titles combined.",
      "Pep Guardiola won 14 trophies in 4 years as Barcelona manager.",
      "Real Madrid's Galácticos era featured Zinedine Zidane, Ronaldinho, and David Beckham."
    ],
    "Serie A": [
      "Juventus has won Serie A 36 times, the most in Italian football history.",
      "AC Milan has won the Champions League 7 times, more than any Italian club.",
      "Francesco Totti played his entire career at AS Roma, scoring 250 goals.",
      "Inter Milan won the treble (Serie A, Coppa Italia, Champions League) in 2009-10.",
      "Silvio Piola is Serie A's all-time top scorer with 274 goals.",
      "Juventus dominated Serie A in the 2010s, winning 9 consecutive titles.",
      "Paolo Maldini played 902 matches for AC Milan across 25 seasons.",
      "Napoli won their first Serie A title in 1987 with Diego Maradona."
    ],
    "AFCON": [
      "Egypt has won AFCON 7 times, more than any other nation.",
      "Samuel Eto'o is AFCON's all-time top scorer with 18 goals.",
      "Cameroon won AFCON in 2000 and 2002 back-to-back.",
      "The tournament was first held in 1957 with only 3 teams participating.",
      "Nigeria's Super Eagles have won AFCON 3 times (1980, 1994, 2013).",
      "Morocco became the first African team to reach a World Cup semi-final in 2022.",
      "Senegal won their first AFCON title in 2021, defeating Egypt on penalties.",
      "Ghana reached 3 consecutive AFCON finals from 2008-2012."
    ],
    "World Cup": [
      "Brazil has won the World Cup 5 times, more than any other nation.",
      "Miroslav Klose is the World Cup's all-time top scorer with 16 goals.",
      "The 2018 World Cup in Russia had the highest attendance in World Cup history.",
      "Uruguay hosted and won the first World Cup in 1930.",
      "Germany has reached the World Cup final 8 times.",
      "France won the World Cup in 1998 and 2018, both times as hosts and away.",
      "Argentina's Lionel Messi finally won his first World Cup in 2022 at age 35.",
      "The fastest World Cup goal was scored by Hakan Şükür in 2002 after 11 seconds."
    ],
    "UEFA Champions League": [
      "Real Madrid has won the Champions League 14 times, more than any other club.",
      "Cristiano Ronaldo is the all-time Champions League top scorer with 140 goals.",
      "AC Milan has won the Champions League 7 times, the most by an Italian club.",
      "The Champions League was rebranded from the European Cup in 1992.",
      "Barcelona completed the first treble in Spanish football history in 2008-09.",
      "Liverpool's comeback against AC Milan in 2005 is considered the greatest final ever.",
      "Manchester United won the treble in 1998-99 under Sir Alex Ferguson.",
      "Bayern Munich has won the Champions League 6 times, including back-to-back in 1974-76."
    ],
    "UEFA Europa League": [
      "Sevilla has won the Europa League 6 times, more than any other club.",
      "The Europa League was previously known as the UEFA Cup until 2009.",
      "Inter Milan won the UEFA Cup 3 times in the 1990s.",
      "Chelsea won the Europa League in 2013 and 2019.",
      "Atlético Madrid has won the Europa League 3 times under Diego Simeone.",
      "Liverpool won the UEFA Cup in 2001 as part of their treble season.",
      "Manchester United won the Europa League in 2017 under José Mourinho.",
      "The Europa League winner automatically qualifies for the Champions League."
    ]
  };

  const generateRandomFact = () => {
    if (!selectedCategory) return;
    
    const categoryFacts = facts[selectedCategory as keyof typeof facts];
    const randomFact = categoryFacts[Math.floor(Math.random() * categoryFacts.length)];
    setCurrentFact(randomFact);
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
          <h1 className="text-4xl font-bold text-center bg-gradient-gold bg-clip-text text-transparent">
            Football Facts Generator
          </h1>
          <p className="text-center text-muted-foreground mt-2">
            Discover amazing statistics and facts about football's greatest competitions
          </p>
        </header>

        <div className="grid gap-6">
          <Card className="bg-card/90 backdrop-blur-sm border-border">
            <CardHeader>
              <CardTitle className="text-football-gold">Select Competition</CardTitle>
              <CardDescription>Choose a football competition to explore facts about</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a competition..." />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button 
                onClick={generateRandomFact}
                disabled={!selectedCategory}
                className="w-full bg-gradient-primary hover:shadow-glow"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Generate Fact
              </Button>
            </CardContent>
          </Card>

          {currentFact && (
            <Card className="bg-card/90 backdrop-blur-sm border-border shadow-gold">
              <CardHeader>
                <CardTitle className="text-football-gold">{selectedCategory} Fact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed">{currentFact}</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default FactGenerator;