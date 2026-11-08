/* ZENTRALE INHALTSDATEI – hier alle Texte, Daten und Quizfragen ändern.
   Gelb markierte Stellen auf der Website sind Text in eckigen Klammern: [HIER ...] oder [BEISPIEL ...].
   Eigene Texte einfach dort einsetzen (Klammern entfernen). Das Design bleibt unverändert. */
const PH="[HIER UNSEREN EIGENEN TEXT EINFÜGEN]";
window.INHALT={
site:{kicker:"Europa-Projekt · Klasse 10",titel:"Erneuerbare Energien in der EU",
 untertitel:"Wie entsteht unsere Energie? Wie kommt sie zu uns? Und wie sieht die Energieversorgung der Zukunft aus?",
 fuss:"Schulprojekt · Geschwister-Scholl-Gymnasium Pulheim · Europa-Projekt Klasse 10",
 entwurf:"Entwurf: Alle Texte sind vorläufige Beispieltexte. Gelb markierte Stellen werden durch eigene, recherchierte Inhalte ersetzt. Keine Angabe hier ist eine echte Statistik."},
nav:[["index.html","Startseite","start"],["energieablauf.html","Der Energieablauf","energie"],["eu-vergleich.html","Die EU im Vergleich","eu"],["probleme.html","Probleme und Lösungen","probleme"],["klima.html","Klima und Umwelt","klima"],["quiz.html","Quiz","quiz"],["ueber-uns.html","Über uns","ueber"]],
start:{titel:"Worum geht es?",einleitung:"[BEISPIEL] Strom kommt aus der Steckdose – aber wo kommt er eigentlich her? Auf dieser Website verfolgen wir den Weg erneuerbarer Energie von Sonne, Wind und Wasser bis zu uns nach Hause und fragen, wie die Energiewende in Europa gelingen kann."},
themen:[
 {datei:"energieablauf.html",titel:"Der Energieablauf",text:"[BEISPIEL] Von der Energiequelle bis zur Steckdose in sechs Stationen."},
 {datei:"eu-vergleich.html",titel:"Die EU im Vergleich",text:"[BEISPIEL] Wie weit sind Deutschland und seine Nachbarn?"},
 {datei:"probleme.html",titel:"Probleme und Lösungen",text:"[BEISPIEL] Wo hakt es – und was könnte helfen?"},
 {datei:"klima.html",titel:"Klima und Umwelt",text:"[BEISPIEL] Was bringen erneuerbare Energien für Klima und Natur?"},
 {datei:"quiz.html",titel:"Quiz",text:"[BEISPIEL] Teste dein Wissen in acht Fragen."},
 {datei:"ueber-uns.html",titel:"Über uns",text:"[BEISPIEL] Wer wir sind und warum wir das Thema gewählt haben."}],
energie:{titel:"Der Energieablauf",intro:"[BEISPIEL] Klicke auf die Stationen und verfolge den Weg des Stroms.",
 quellen:["Sonne","Wind","Wasser"],
 stationen:[
 {titel:"Energiequelle",text:"Sonne, Wind und Wasser liefern die Energie. [HIER UNSEREN EIGENEN TEXT EINFÜGEN]"},
 {titel:"Stromerzeugung",text:"Solarzellen wandeln Sonnenlicht in elektrische Energie um. Windräder nutzen die Bewegungsenergie des Windes. Wasserkraftwerke nutzen die Energie des fließenden Wassers. [HIER UNSEREN EIGENEN TEXT EINFÜGEN]"},
 {titel:"Generator",text:"Bei Windkraftanlagen wird die Drehbewegung des Rotors über den Antriebsstrang auf einen Generator übertragen, der elektrische Energie erzeugt. [HIER UNSEREN EIGENEN TEXT EINFÜGEN]"},
 {titel:"Transformator",text:"Im Transformator bzw. Umspannwerk wird die Spannung angepasst, damit Strom effizient transportiert und anschließend verteilt werden kann. [HIER UNSEREN EIGENEN TEXT EINFÜGEN]"},
 {titel:"Stromnetz",text:"Über Leitungen und verschiedene Netzebenen gelangt der Strom in die Regionen und zu den Verbrauchern. [HIER UNSEREN EIGENEN TEXT EINFÜGEN]"},
 {titel:"Nutzung",text:"Strom wird nicht nur im Haushalt benötigt, sondern zum Beispiel auch hier:",
  liste:["Industrie und Produktion","Schulen und öffentliche Gebäude","Krankenhäuser","Verkehr und Elektromobilität","Landwirtschaft","Kommunikation und Technik"]}]},
eu:{titel:"Die EU im Vergleich",intro:"[BEISPIEL] Wähle ein Land und vergleiche es mit Deutschland.",
 hinweis:"Platzhalterdaten: Hier stehen später unsere recherchierten Werte. Die Karte ist stilisiert (jedes Feld = ein Land, nicht maßstabsgetreu). Weitere Länder: einfach unten ergänzen.",
 platzhalter:"[BEISPIEL: Wert folgt]",
 felder:["Anteil erneuerbarer Energien","Wichtigste erneuerbare Quelle","Ausbauziele","Besonderheit"],
 /* Eigene Werte pro Land: werte:["Anteil","Quelle","Ziele","Besonderheit"] hinzufügen */
 laender:[{id:"SE",name:"Schweden",x:3,y:0},{id:"FI",name:"Finnland",x:4,y:0},{id:"DK",name:"Dänemark",x:2,y:1},{id:"IE",name:"Irland",x:0,y:2},{id:"NL",name:"Niederlande",x:1,y:2},{id:"DE",name:"Deutschland",x:2,y:2},{id:"PL",name:"Polen",x:3,y:2},{id:"FR",name:"Frankreich",x:1,y:3},{id:"CZ",name:"Tschechien",x:2,y:3},{id:"AT",name:"Österreich",x:3,y:3},{id:"PT",name:"Portugal",x:0,y:4},{id:"ES",name:"Spanien",x:1,y:4},{id:"IT",name:"Italien",x:2,y:4},{id:"GR",name:"Griechenland",x:4,y:4}]},
probleme:{titel:"Probleme und Lösungen",intro:"[BEISPIEL] Erneuerbare Energien sind kein Selbstläufer. Klicke auf ein Thema für Lösungsansätze.",
 paare:[["Wetterabhängigkeit","Wind und Sonne liefern nicht immer gleich viel Strom.","Mögliche Lösung: Speicher, Netzausbau, Kombination verschiedener Quellen. "+PH],
 ["Speicherung von Strom","Überschüsse müssen für windstille und dunkle Zeiten aufbewahrt werden.","Mögliche Lösung: z. B. Batterien, Pumpspeicher. "+PH],
 ["Ausbau der Stromnetze","Der Strom entsteht oft nicht dort, wo er gebraucht wird.","Mögliche Lösung: neue Leitungen, intelligente Netze. "+PH],
 ["Kosten und Investitionen","Anlagen und Netze kosten viel Geld.",PH],
 ["Flächenbedarf","Solar- und Windparks brauchen Platz.",PH],
 ["Natur und Landschaft","Anlagen verändern Landschaften und können Tiere beeinflussen.",PH],
 ["Versorgungssicherheit","Strom muss jederzeit zuverlässig verfügbar sein.",PH]]},
klima:{titel:"Klima und Umwelt",intro:"[BEISPIEL] Was ändert sich für Klima und Natur, wenn wir auf erneuerbare Energien setzen?",
 zahlen:[{label:"CO₂-Einsparung",wert:"[BEISPIEL: __ Mio. t]",breite:70},{label:"Anteil Erneuerbare am Strom",wert:"[BEISPIEL: __ %]",breite:45},{label:"Entwicklung seit 2000",wert:"[BEISPIEL: __ %]",breite:85}],
 themen:[["Klimaschutz",PH],["Luftverschmutzung",PH],["Tiere und Pflanzen",PH],["Nachhaltigkeit",PH],["Langfristige Veränderungen",PH]]},
quiz:{titel:"Quiz",intro:"[BEISPIEL] Acht Fragen, jeweils eine richtige Antwort.",
 ende:["Noch ausbaufähig – stöbere nochmal durch die Seiten!","Solide! Du kennst dich schon gut aus.","Stark! Du bist ein Energiewende-Profi."],
 /* richtig = Nummer der richtigen Antwort (0 = A, 1 = B, 2 = C, 3 = D) */
 fragen:[
 {frage:"Was wandeln Solarzellen in elektrische Energie um?",antworten:["Windkraft","Sonnenlicht","Erdwärme","Wasserdampf"],richtig:1,erklaerung:"Solarzellen (Photovoltaik) wandeln Sonnenlicht direkt in elektrische Energie um."},
 {frage:"Welches Bauteil erzeugt im Windrad den Strom?",antworten:["Generator","Turmfundament","Rotorblatt","Blitzableiter"],richtig:0,erklaerung:"Der Rotor dreht den Generator über den Antriebsstrang – der Generator erzeugt den Strom."},
 {frage:"Welcher Energieträger ist NICHT erneuerbar?",antworten:["Wasserkraft","Biomasse","Erdgas","Windenergie"],richtig:2,erklaerung:"Erdgas ist ein fossiler Brennstoff und verbraucht sich. Die anderen Quellen erneuern sich."},
 {frage:"Wozu dient ein Transformator im Umspannwerk?",antworten:["Strom speichern","Strom erzeugen","Spannung anpassen","Strom zählen"],richtig:2,erklaerung:"Transformatoren passen die Spannung an, damit Strom effizient transportiert und verteilt werden kann."},
 {frage:"Warum sind Stromspeicher für Wind- und Solarenergie wichtig?",antworten:["Weil Wind und Sonne schwanken","Weil Strom sonst verdirbt","Weil Windräder sonst rosten","Weil Leitungen sonst zu kalt werden"],richtig:0,erklaerung:"Wind und Sonne liefern nicht immer gleich viel. Speicher gleichen Schwankungen aus."},
 {frage:"Welche Energie nutzt ein Wasserkraftwerk?",antworten:["Die Energie von Kohle","Die Wärme der Luft","Die Energie von Atomkernen","Die Energie von fließendem Wasser"],richtig:3,erklaerung:"Fließendes oder herabstürzendes Wasser treibt eine Turbine an, die einen Generator dreht."},
 {frage:"Warum gelten erneuerbare Energien als gut fürs Klima?",antworten:["Sie brauchen keine Anlagen","Beim Betrieb entstehen kaum CO₂-Emissionen","Sie sind immer günstig","Sie funktionieren nur im Sommer"],richtig:1,erklaerung:"Im Betrieb entstehen kaum direkte CO₂-Emissionen. Bau und Herstellung verursachen aber etwas Ausstoß."},
 {frage:"Wie funktioniert ein Pumpspeicherkraftwerk?",antworten:["Es verbrennt Wasser","Es filtert Wasser","Es friert Wasser ein","Es pumpt Wasser bergauf und lässt es später wieder herab"],richtig:3,erklaerung:"Mit Überschussstrom wird Wasser in ein höheres Becken gepumpt. Bei Bedarf treibt es wieder Turbinen an."}]},
ueber:{titel:"Über uns",intro:"Diese Website ist im Rahmen des Europa-Projekts der 10. Klasse am Geschwister-Scholl-Gymnasium Pulheim entstanden. Wir beschäftigen uns mit erneuerbaren Energien in der Europäischen Union und möchten zeigen, wie unsere Energieversorgung funktioniert und welche Herausforderungen die Energiewende mit sich bringt.",
 abschnitte:[["Unser Projekt",PH],["Unsere Motivation",PH],["Geschwister-Scholl-Gymnasium Pulheim",PH],["Klasse 10",PH]],
 team:[["[HIER NAME EINFÜGEN]","Projektmitglied 1"],["[HIER NAME EINFÜGEN]","Projektmitglied 2"]]}
};
