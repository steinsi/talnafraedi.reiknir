import React, { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import { NumberInfo } from "@/components/NumberInfo";
import { calculateTimeOnPlanet } from "@/utils/dateCalculations";

const translations = {
  en: {
    title: "Celestial Numerology",
    subtitle: "Discover your cosmic numbers",
    fullName: "Your Full Name",
    birthDate: "Birth Date",
    calculate: "Calculate Your Numbers",
    nameNumber: "Name Number",
    birthNumber: "Birth Number",
    readingTitle: "Your Numerology Reading",
    readingText: (nameNumber, birthNumber) => `Your name number (${nameNumber}) represents your expression and how others perceive you. Your birth number (${birthNumber}) reveals your life path and inherent characteristics. Together, these numbers create a unique vibrational pattern that influences your journey.`,
    footer: "✨ Align yourself with the cosmic vibrations ✨",
    placeholder: "Enter your full name",
    missingInfo: "Missing Information",
    missingInfoDesc: "Please enter both your name and birth date.",
    calculationComplete: "Calculation Complete",
    calculationCompleteDesc: "Your numerology numbers have been calculated!",
    timeOnPlanet: "Time on Planet Earth",
    years: "Years",
    months: "Months",
    days: "Days",
    totalDays: "Total Days",
  },
  is: {
    title: "Himnesk Talnaspeki",
    subtitle: "Uppgötvaðu þína kosmísku tölu",
    fullName: "Fullt nafn",
    birthDate: "Fæðingardagur",
    calculate: "Reikna þínar tölur",
    nameNumber: "Nafntala",
    birthNumber: "Fæðingartala",
    readingTitle: "Þín talnaspekitúlkun",
    readingText: (nameNumber, birthNumber) => `Nafntalan þín (${nameNumber}) táknar tjáningu þína og hvernig aðrir skynja þig. Fæðingartalan þín (${birthNumber}) sýnir lífsleið þína og meðfædda eiginleika. Saman mynda þessar tölur einstakt titringamynstur sem hefur áhrif á ferðalag þitt.`,
    footer: "✨ Samstilltu þig við kosmíska titringinn ✨",
    placeholder: "Sláðu inn fullt nafn",
    missingInfo: "Upplýsingar vantar",
    missingInfoDesc: "Vinsamlegast sláðu inn bæði nafn og fæðingardag.",
    calculationComplete: "Útreikningi lokið",
    calculationCompleteDesc: "Tölurnar þínar hafa verið reiknaðar!",
    timeOnPlanet: "Tími á jörðinni",
    years: "Ár",
    months: "Mánuðir",
    days: "Dagar",
    totalDays: "Heildar dagar",
  }
};

const calculateNameNumber = (name) => {
  const numerologyValues = {
    'a': 1, 'j': 1, 's': 1,
    'b': 2, 'k': 2, 't': 2,
    'c': 3, 'l': 3, 'u': 3,
    'd': 4, 'm': 4, 'v': 4,
    'e': 5, 'n': 5, 'w': 5,
    'f': 6, 'o': 6, 'x': 6,
    'g': 7, 'p': 7, 'y': 7,
    'h': 8, 'q': 8, 'z': 8,
    'i': 9, 'r': 9,
    'á': 1, 'é': 5, 'í': 9, 'ó': 6, 'ú': 3, 'ý': 7,
    'þ': 2, 'æ': 5, 'ö': 6, 'ð': 4
  };

  const cleanName = name.toLowerCase().replace(/[^a-záéíóúýþæöð]/g, '');
  let sum = 0;
  
  for (let char of cleanName) {
    sum += numerologyValues[char] || 0;
  }

  while (sum > 9 && sum !== 11 && sum !== 22) {
    sum = String(sum).split('').reduce((a, b) => a + parseInt(b), 0);
  }

  return sum;
};

const calculateBirthNumber = (date) => {
  const dateSum = date.split('-').join('').split('').reduce((a, b) => a + parseInt(b), 0);
  let sum = dateSum;
  
  while (sum > 9 && sum !== 11 && sum !== 22) {
    sum = String(sum).split('').reduce((a, b) => a + parseInt(b), 0);
  }

  return sum;
};

function App() {
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [nameNumber, setNameNumber] = useState(null);
  const [birthNumber, setBirthNumber] = useState(null);
  const [timeOnPlanet, setTimeOnPlanet] = useState(null);
  const [language, setLanguage] = useState("en");
  const { toast } = useToast();
  const t = translations[language];

  const handleCalculate = () => {
    if (!name || !birthDate) {
      toast({
        title: t.missingInfo,
        description: t.missingInfoDesc,
        variant: "destructive",
      });
      return;
    }

    const calculatedNameNumber = calculateNameNumber(name);
    const calculatedBirthNumber = calculateBirthNumber(birthDate);
    const calculatedTime = calculateTimeOnPlanet(birthDate);

    setNameNumber(calculatedNameNumber);
    setBirthNumber(calculatedBirthNumber);
    setTimeOnPlanet(calculatedTime);

    toast({
      title: t.calculationComplete,
      description: t.calculationCompleteDesc,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white p-8">
      <div className="absolute top-4 right-4">
        <Button
          onClick={() => setLanguage(language === "en" ? "is" : "en")}
          className="bg-white/10 hover:bg-white/20 transition-all duration-300"
        >
          {language === "en" ? "🇮🇸" : "🇬🇧"}
        </Button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{t.title}</h1>
          <p className="text-lg opacity-80">{t.subtitle}</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-2xl">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">{t.fullName}</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 focus:border-white/40 focus:outline-none transition"
                placeholder={t.placeholder}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">{t.birthDate}</label>
              <input
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 focus:border-white/40 focus:outline-none transition"
              />
            </div>

            <Button
              onClick={handleCalculate}
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
            >
              {t.calculate}
            </Button>
          </div>

          {(nameNumber !== null && birthNumber !== null && timeOnPlanet !== null) && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-8 space-y-6"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-lg p-6 text-center">
                  <div className="flex items-center justify-center">
                    <h3 className="text-lg font-medium mb-2">{t.nameNumber}</h3>
                    <NumberInfo number={nameNumber} language={language} />
                  </div>
                  <p className="text-4xl font-bold text-purple-300">{nameNumber}</p>
                </div>
                <div className="bg-white/5 rounded-lg p-6 text-center">
                  <div className="flex items-center justify-center">
                    <h3 className="text-lg font-medium mb-2">{t.birthNumber}</h3>
                    <NumberInfo number={birthNumber} language={language} />
                  </div>
                  <p className="text-4xl font-bold text-blue-300">{birthNumber}</p>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-4">{t.timeOnPlanet}</h3>
                <div className="grid grid-cols-4 gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-300">{timeOnPlanet.years}</p>
                    <p className="text-sm opacity-80">{t.years}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-yellow-300">{timeOnPlanet.months}</p>
                    <p className="text-sm opacity-80">{t.months}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-red-300">{timeOnPlanet.days % 30}</p>
                    <p className="text-sm opacity-80">{t.days}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-purple-300">{timeOnPlanet.days}</p>
                    <p className="text-sm opacity-80">{t.totalDays}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-4">{t.readingTitle}</h3>
                <p className="text-sm leading-relaxed opacity-80">
                  {t.readingText(nameNumber, birthNumber)}
                </p>
              </div>
            </motion.div>
          )}
        </div>

        <div className="mt-8 text-center text-sm opacity-60">
          <p>{t.footer}</p>
        </div>
      </motion.div>
      <Toaster />
    </div>
  );
}

export default App;