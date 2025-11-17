
import type { SurvivalItem } from './types';

export const ITEMS: SurvivalItem[] = [
  { id: 'vzigalice', name: 'Vžigalice', points: 3, icon: '🔥', description: 'Omogočajo prižiganje ognja, ki je ključen za pripravo hrane, prekuhavanje vode ter ogrevanje in zaščito pred divjimi živalmi.' },
  { id: 'noz', name: 'Nož', points: 3, icon: '🔪', description: 'Večnamensko orodje – za rezanje, pripravo hrane, gradnjo zavetja, obrambo in izdelavo drugih orodij.' },
  { id: 'vrv', name: 'Vrv (10 m)', points: 2, icon: '🪢', description: 'Uporabna za gradnjo zavetja, pasti, vezanje predmetov ali reševanje iz nevarnosti.' },
  { id: 'voda', name: 'Plastenka vode (1 L)', points: 3, icon: '💧', description: 'Nepogrešljiva za takojšnjo oskrbo z vodo, saj je hidracija glavna prioriteta pri preživetju.' },
  { id: 'hrana', name: 'Konzerva hrane', points: 3, icon: '🥫', description: 'Služi kot rezervna zaloga hrane; omogoča preživetje v prvih dneh ali v času, ko ni uspeha pri iskanju drugih virov hrane.' },
  { id: 'odeja', name: 'Odeja', points: 2, icon: '🛌', description: 'Zaščita pred mrazom ponoči ali uporabo kot improvizirana zaščita pred vetrom/soncem.' },
  { id: 'kompas', name: 'Kompas', points: 1, icon: '🧭', description: 'Koristen za orientacijo, če želiš najti izhod ali raziskovati otok načrtno (pomembno samo, če otok ni povsem izoliran in če obstaja možnost rešitve).' },
  { id: 'prva_pomoc', name: 'Prva pomoč', points: 3, icon: '🩹', description: 'Za zdravljenje poškodb, infekcij, ugrizov ali ran – lahko reši življenje ob nesreči.' },
  { id: 'ribiska_vrvica', name: 'Ribiška vrvica', points: 2, icon: '🎣', description: 'Omogoča lovljenje rib, kar je pomemben vir hrane na otoku.' },
  { id: 'svetilka', name: 'Svetilka', points: 1, icon: '🔦', description: 'Zagotavlja svetlobo ponoči oziroma v temnih območjih, povečuje varnost in omogoča razširjene dnevne dejavnosti.' },
  { id: 'piskalka', name: 'Signalna piščalka', points: 2, icon: '🚨', description: 'Za privabljanje pozornosti reševalcev – zvok se bolje sliši kot klicanje.' },
  { id: 'soncna_krema', name: 'Sončna krema', points: 1, icon: '🧴', description: 'Ščiti kožo pred opeklinami, ki so nevarne v tropskem oz. mediteranskem okolju.' },
  { id: 'posoda', name: 'Posoda za kuhanje', points: 1, icon: '🍲', description: 'Omogoča prekuhavanje vode, pripravo hrane in sterilizacijo predmetov.' },
  { id: 'skodelica', name: 'Kovinska skodelica', points: 1, icon: '☕', description: 'Za pitje, kuhanje manjših količin vode ali hrane – večnamenska uporabnost.' },
  { id: 'sotor', name: 'Šotor', points: 2, icon: '⛺', description: 'Zagotavlja najboljše zavetje pred neugodnimi vremenskimi pogoji, živalmi in insekti.' },
  { id: 'zemljevid', name: 'Zemljevid otoka', points: 1, icon: '🗺️', description: 'Če je na voljo – za orientacijo, odkrivanje vodnih virov, nevarnih območij ali poti do morebitnih reševalcev.' },
  { id: 'baterije', name: 'Baterije', points: 1, icon: '🔋', description: 'Nepogrešljive za elektronske pripomočke (če jih imaš s seboj, npr. svetilko ali radio).' },
  { id: 'krema_insekti', name: 'Krema proti insektom', points: 1, icon: '🦟', description: 'Ščiti pred ugrizi insektov, kar posledično preprečuje bolezni in izboljša udobje.' },
];
