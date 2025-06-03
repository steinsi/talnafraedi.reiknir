import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Info } from "lucide-react";

const numberMeanings = {
  en: {
    1: {
      title: "Number 1 - The Leader",
      description: "Number 1 represents independence, leadership, and new beginnings. People with this number are natural-born leaders, innovative, and ambitious. They have strong willpower and are highly creative in their endeavors."
    },
    2: {
      title: "Number 2 - The Mediator",
      description: "Number 2 symbolizes harmony, cooperation, and diplomacy. These individuals are natural peacemakers, sensitive to others' needs, and excel in partnerships. They bring balance and consideration to relationships."
    },
    3: {
      title: "Number 3 - The Creator",
      description: "Number 3 embodies creativity, self-expression, and joy. People with this number are naturally artistic, communicative, and optimistic. They bring enthusiasm and inspiration to others."
    },
    4: {
      title: "Number 4 - The Builder",
      description: "Number 4 represents stability, organization, and hard work. These individuals are practical, reliable, and excellent at creating solid foundations. They value security and traditional approaches."
    },
    5: {
      title: "Number 5 - The Freedom Seeker",
      description: "Number 5 symbolizes change, freedom, and adventure. These people are versatile, adaptable, and love exploring new experiences. They bring excitement and progressive thinking to life."
    },
    6: {
      title: "Number 6 - The Nurturer",
      description: "Number 6 represents responsibility, love, and harmony. These individuals are caring, supportive, and focused on family and community. They excel at creating beautiful and harmonious environments."
    },
    7: {
      title: "Number 7 - The Seeker",
      description: "Number 7 embodies wisdom, spirituality, and analysis. These people are introspective, philosophical, and drawn to life's mysteries. They excel in research and deep thinking."
    },
    8: {
      title: "Number 8 - The Achiever",
      description: "Number 8 represents power, abundance, and material success. These individuals are ambitious, business-minded, and excellent at managing resources. They have natural leadership abilities in practical matters."
    },
    9: {
      title: "Number 9 - The Humanitarian",
      description: "Number 9 symbolizes completion, compassion, and universal love. These people are philanthropic, idealistic, and focused on making a difference in the world. They often serve humanity in meaningful ways."
    },
    11: {
      title: "Master Number 11 - The Intuitive",
      description: "Number 11 is a master number representing spiritual insight, inspiration, and enlightenment. These individuals are highly intuitive, idealistic, and often serve as spiritual teachers or inspirational leaders."
    },
    22: {
      title: "Master Number 22 - The Master Builder",
      description: "Number 22 is a master number representing practical vision and the ability to turn dreams into reality. These individuals have extraordinary potential to achieve great things and create lasting structures in society."
    }
  },
  is: {
    1: {
      title: "Tala 1 - Leiðtoginn",
      description: "Tala 1 táknar sjálfstæði, forystu og ný upphöf. Fólk með þessa tölu eru náttúrulegir leiðtogar, nýskapandi og metnaðarfullt. Þau hafa sterkan viljastyrk og eru mjög skapandi í sínum verkefnum."
    },
    2: {
      title: "Tala 2 - Sáttasemjarinn",
      description: "Tala 2 táknar samhljóm, samvinnu og diplómatíu. Þessir einstaklingar eru náttúrulegir friðarsemjarar, næmir á þarfir annarra og skara fram úr í samstarfi. Þeir koma með jafnvægi og umhyggju í sambönd."
    },
    3: {
      title: "Tala 3 - Skaparinn",
      description: "Tala 3 táknar sköpunarkraft, sjálfsþekkingu og gleði. Fólk með þessa tölu er náttúrulega listrænt, tjáningarríkt og bjartsýnt. Þau koma með eldmóð og innblástur til annarra."
    },
    4: {
      title: "Tala 4 - Byggjandinn",
      description: "Tala 4 táknar stöðugleika, skipulag og vinnusemi. Þessir einstaklingar eru hagnýtir, áreiðanlegir og framúrskarandi í að byggja traustan grunn. Þeir meta öryggi og hefðbundnar nálganir."
    },
    5: {
      title: "Tala 5 - Frelsisleitandinn",
      description: "Tala 5 táknar breytingar, frelsi og ævintýri. Þetta fólk er fjölhæft, aðlögunarhæft og elskar að kanna nýjar upplifanir. Þau koma með spennu og framsækna hugsun í lífið."
    },
    6: {
      title: "Tala 6 - Umönnunaraðilinn",
      description: "Tala 6 táknar ábyrgð, ást og samhljóm. Þessir einstaklingar eru umhyggjusamir, styðjandi og einbeita sér að fjölskyldu og samfélagi. Þeir skara fram úr í að skapa fallegt og harmonískt umhverfi."
    },
    7: {
      title: "Tala 7 - Leitandinn",
      description: "Tala 7 táknar visku, andleika og greiningu. Þetta fólk er íhugult, heimspekilegt og dregst að leyndardómum lífsins. Þau skara fram úr í rannsóknum og djúpri hugsun."
    },
    8: {
      title: "Tala 8 - Árangurseinkunnin",
      description: "Tala 8 táknar kraft, gnægð og efnislegan árangur. Þessir einstaklingar eru metnaðarfullir, viðskiptasinnaðir og framúrskarandi í að stjórna auðlindum. Þeir hafa náttúrulega leiðtogahæfileika í hagnýtum málefnum."
    },
    9: {
      title: "Tala 9 - Mannvinurinn",
      description: "Tala 9 táknar fullkomnun, samúð og altæka ást. Þetta fólk er mannvinir, hugsjónamenn og einbeita sér að því að hafa áhrif á heiminn. Þau þjóna oft mannkyninu á merkingarbæran hátt."
    },
    11: {
      title: "Meistara Tala 11 - Innsæið",
      description: "Tala 11 er meistara tala sem táknar andlega innsýn, innblástur og upplýsingu. Þessir einstaklingar eru mjög innsæisríkir, hugsjónaríkir og þjóna oft sem andlegir kennarar eða innblástur leiðtogar."
    },
    22: {
      title: "Meistara Tala 22 - Meistara Byggjandinn",
      description: "Tala 22 er meistara tala sem táknar hagnýta sýn og getuna til að breyta draumum í veruleika. Þessir einstaklingar hafa óvenjulega möguleika á að ná miklum árangri og skapa varanlegar byggingar í samfélaginu."
    }
  }
};

export function NumberInfo({ number, language }) {
  const meaning = numberMeanings[language][number];
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="ml-2 p-1 rounded-full hover:bg-white/10 transition-colors">
          <Info className="w-4 h-4" />
        </button>
      </DialogTrigger>
      <DialogContent className="bg-gradient-to-br from-purple-900/95 via-blue-900/95 to-indigo-900/95 border-white/20 text-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">{meaning.title}</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <p className="text-sm leading-relaxed">{meaning.description}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}