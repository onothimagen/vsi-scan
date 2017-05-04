var titleSelect;
var titleList = makeTitleList();
var IDList = makeIDList();


function doVSI() {
  /* Populates the titleSelect select box on page load */
  titleSelect = document.getElementById("titleSelect");
  var min = 0,
    max = titleList.length;
  for (var i = min; i < max; i++) {
    var opt = document.createElement('option');
    opt.value = IDList[i];
    opt.innerHTML = titleList[i];
    titleSelect.appendChild(opt);
  }
  titleSelect.selectedIndex = Math.random() * max + 1;
  updatePage();
}

function updatePage() {
  var coverImage = document.getElementById("coverImage");
  var coverImageLink = document.getElementById("coverImageLink");
  var qrImage = document.getElementById("qrImage");
  var qrImageLink = document.getElementById("qrImageLink");
  var itemTitle = document.getElementById("itemTitle");

  var coverRoot = 'http://www.veryshortintroductions.com/view/covers/';
  var coverURL = coverRoot.concat(titleSelect.value, ".png")
  coverImage.src = coverURL;

  var mobileRoot = "http://www.veryshortintroductions.com/mobile/view/10.1093/actrade/";
  var mobileURL = mobileRoot.concat(titleSelect.value, ".001.0001/actrade-", titleSelect.value);

  qrImageLink.href = mobileURL;
  coverImageLink.href = mobileURL;

  var qrRoot = 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=';
  var qrURL = qrRoot.concat(mobileURL, " class='qr'");
  qrImage.src = qrURL;
  itemTitle.innerHTML = titleSelect.options[titleSelect.selectedIndex].innerHTML;
}

/* vsi-scan Google API key: AIzaSyCp1PWhV5JyNpqd7cpCzhV73lAGwIETrsw */

function makeTitleList() {
  titles = new Array("Accounting",
    "Adolescence",
    "Advertising",
    "African American Religion",
    "African History",
    "African religions",
    "Ageing",
    "Agnosticism",
    "Agriculture",
    "Alexander the Great",
    "Algebra",
    "American History",
    "American Immigration",
    "American legal history",
    "American Political History",
    "American Political Parties and Elections",
    "American Political Parties and Elections",
    "American Politics",
    "American Slavery",
    "American Women's History",
    "Anaesthesia",
    "Anarchism",
    "Ancient Assyria",
    "Ancient Egypt",
    "Ancient Egyptian Art and Architecture",
    "Ancient Greece",
    "Ancient Philosophy",
    "Ancient Warfare",
    "Angels",
    "Anglicanism",
    "Anglo-Saxon Age, The",
    "Animal rights",
    "Antisemitism",
    "Antisemitism",
    "Anxiety",
    "Apocryphal Gospels",
    "Archaeology",
    "Architecture",
    "Aristocracy",
    "Aristotle",
    "Art History",
    "Art theory",
    "Asian American History",
    "Astrobiology",
    "Astrophysics",
    "Atheism",
    "Augustine",
    "Australia",
    "Autism",
    "Babylonia",
    "Bacteria",
    "Banking",
    "Barthes",
    "Beauty",
    "Behavioural Economics",
    "Bestsellers",
    "Biblical Archaeology",
    "Biography",
    "Black Holes",
    "Blood",
    "Blues",
    "Book of Mormon",
    "Borders",
    "Brain",
    "British politics",
    "Buddha",
    "Buddhism",
    "Buddhist Ethics",
    "Byzantium",
    "Calvinism",
    "Cancer",
    "Capitalism",
    "Capitalism",
    "Catholicism",
    "Causation",
    "Chaos",
    "Chemistry",
    "Child Psychology",
    "Children's literature",
    "Chinese Literature",
    "Choice theory",
    "Christian Art",
    "Christian ethics",
    "Christianity",
    "Christianity",
    "Citizenship",
    "Civil engineering",
    "Classical literature",
    "Classical Mythology",
    "Classics",
    "Clausewitz",
    "Climate",
    "Climate Change (formerly Global Warming)",
    "Cognitive Neuroscience",
    "Cold War",
    "Colonial America",
    "Colonial Latin American Literature",
    "Combinatorics",
    "Comedy",
    "Communism",
    "Complexity",
    "Computer science",
    "Confucianism",
    "Conscience",
    "Consciousness",
    "Contemporary Art",
    "Contemporary fiction",
    "Continental Philosophy",
    "Copernicus",
    "Coral reefs",
    "Corporate Social Responsibility",
    "Corruption",
    "Cosmology",
    "Crime Fiction",
    "Criminal Justice",
    "Critical Theory",
    "Crusades",
    "Cryptography",
    "Crystallography",
    "Dada and Surrealism",
    "Dante",
    "Darwin",
    "Dead Sea Scrolls",
    "Decolonization",
    "Democracy",
    "Depression",
    "Derrida",
    "Descartes",
    "Deserts",
    "Design",
    "Developmental biology",
    "Diaspora",
    "Dictionaries",
    "Dinosaurs",
    "Diplomacy",
    "Documentary Film",
    "Dreaming",
    "Drugs",
    "Drugs",
    "Druids",
    "Early Music",
    "Earth System Science",
    "Economics",
    "Education",
    "Egyptian Myth",
    "Eighteenth-century Britain",
    "Elements",
    "Emotion",
    "Empire",
    "Engels",
    "Engineering",
    "English literature",
    "Entrepreneurship",
    "Environmental economics",
    "Environmental Politics",
    "Epicureanism",
    "Epidemiology",
    "Ethics",
    "Ethnomusicology",
    "Eugenics",
    "Evolution",
    "Existentialism",
    "Exploration",
    "Family law",
    "Fascism",
    "Fascism",
    "Fashion",
    "Feminism",
    "Film Music",
    "Film",
    "First World War",
    "Folk Music",
    "Food",
    "Forensic Psychology",
    "Forensic Science",
    "Forests",
    "Fossils",
    "Foucault",
    "Founding Fathers",
    "Fractals",
    "Free speech",
    "Free Will",
    "French Literature",
    "French Revolution",
    "Freud",
    "Fundamentalism",
    "Fungi",
    "Galaxies",
    "Galileo",
    "Game Theory",
    "Gandhi",
    "Genes",
    "Genius",
    "Geography",
    "Geopolitics",
    "Geopolitics",
    "German Literature",
    "German Philosophy",
    "Global Catastrophes",
    "Global economic history",
    "Global warming",
    "Globalization",
    "God",
    "Goethe",
    "Governance",
    "Great Depression & the New Deal",
    "Habermas",
    "Happiness",
    "Hegel",
    "Heidegger",
    "Hermeneutics",
    "Herodotus",
    "Hieroglyphs",
    "Hinduism",
    "Hinduism",
    "History of Astronomy",
    "History of Life",
    "History of Medicine",
    "History of Time",
    "History",
    "HIV and AIDS",
    "HIV/AIDS",
    "Hobbes",
    "Hollywood",
    "Home",
    "Hormones",
    "Human Anatomy",
    "Human Evolution",
    "Human Rights",
    "Human Rights",
    "Humanism",
    "Hume",
    "Humour",
    "Ideology",
    "Indian Cinema",
    "Indian philosophy",
    "Infectious Disease",
    "Information",
    "Innovation",
    "Intelligence",
    "International Law",
    "International Migration",
    "International Migration",
    "International Relations",
    "International security",
    "Iran",
    "Islam",
    "Islamic History",
    "Isotopes",
    "Italian literature",
    "Jesus",
    "Journalism",
    "Journalism",
    "Judaism",
    "Judaism",
    "Kabbalah",
    "Kafka",
    "Kant",
    "Keynes",
    "Kierkegaard",
    "Knowledge",
    "Landscape architecture",
    "Landscapes and geomorphology",
    "Languages",
    "Late antiquity",
    "Law",
    "Law",
    "Laws of Thermodynamics",
    "Leadership",
    "Learning",
    "Liberalism",
    "Light",
    "Lincoln",
    "Linguistics",
    "Literary theory",
    "Locke",
    "Logic",
    "Love",
    "Machiavelli",
    "Madness",
    "Magic",
    "Magna Carta",
    "Magnetism",
    "Malthus",
    "Management",
    "Mao",
    "Marine biology",
    "Marquis De Sade",
    "Martin Luther",
    "Martyrdom",
    "Marx",
    "Materials",
    "Mathematics",
    "Meaning of Life",
    "Measurement",
    "Medical Ethics",
    "Medical law",
    "Medieval Britain",
    "Medieval Literature",
    "Medieval Philosophy",
    "Memory",
    "Metaphysics",
    "Michael Faraday",
    "Microbiology",
    "Microeconomics",
    "Microscopy",
    "Military Justice",
    "Minerals",
    "Modern Art",
    "Modern China",
    "Modern China",
    "Modern Drama",
    "Modern France",
    "Modern Ireland",
    "Modern Italy",
    "Modern Japan",
    "Modern Latin American Literature",
    "Modern war",
    "Modernism",
    "Molecular Biology",
    "Molecules",
    "Moons",
    "Mormonism",
    "Mountains",
    "Muhammad",
    "Multiculturalism",
    "Music",
    "Myth",
    "Myth",
    "Nationalism",
    "Nelson Mandela",
    "Neoliberalism",
    "Networks",
    "New Testament As Literature",
    "Newton",
    "Nietzsche",
    "Nineteenth-century Britain",
    "Norman Conquest",
    "North American Indians",
    "Northern Ireland",
    "Nothing",
    "Nuclear Physics",
    "Nuclear power",
    "Nuclear Weapons",
    "Nuclear Weapons",
    "Numbers",
    "Nutrition",
    "Objectivity",
    "Old Testament",
    "Organizations",
    "Paganism",
    "Pandemics",
    "Particle Physics",
    "Paul",
    "Peace",
    "Pentecostalism",
    "Philosophy in the Islamic World",
    "Philosophy of Law",
    "Philosophy of Law",
    "Philosophy of science",
    "Philosophy of Science",
    "Philosophy",
    "Photography",
    "Physical Chemistry",
    "Pilgrimage",
    "Plague",
    "Planets",
    "Plants",
    "Plate Tectonics",
    "Plato",
    "Political Philosophy",
    "Politics",
    "Post-structuralism",
    "Postcolonialism",
    "Postmodernism",
    "Prehistory",
    "Presocratic Philosophy",
    "Privacy",
    "Privacy",
    "Probability",
    "Progressivism",
    "Protestantism",
    "Psychiatry",
    "Psychoanalysis",
    "Psychology",
    "Psychology",
    "Psychotherapy",
    "Public Administration",
    "Public Health",
    "Puritanism",
    "Quakers",
    "Quantum Theory",
    "Racism",
    "Radioactivity",
    "Rastafari",
    "Reagan Revolution",
    "Reality",
    "Reformation",
    "Relativity",
    "Religion in America",
    "Renaissance Art",
    "Renaissance",
    "Revolutions",
    "Rhetoric",
    "Risk",
    "Ritual",
    "Rivers",
    "Robotics",
    "Rocks",
    "Roman Britain",
    "Roman Britain",
    "Roman Empire",
    "Romanticism",
    "Rousseau",
    "Russell",
    "Russian history",
    "Russian Literature",
    "Russian Revolution",
    "Savannas",
    "Schizophrenia",
    "Schopenhauer",
    "Science and Religion",
    "Science fiction",
    "Scotland",
    "Sexuality",
    "Shakespeare's Comedies",
    "Sikhism",
    "Sikhism",
    "Slang",
    "Sleep",
    "Social and Cultural Anthropology",
    "Social Psychology",
    "Social Work",
    "Socialism",
    "Sociolinguistics",
    "Sociology",
    "Socrates",
    "Sound",
    "Soviet Union",
    "Spanish Civil War",
    "Spanish Literature",
    "Spinoza",
    "Spirituality",
    "Sport",
    "Stars",
    "Statistics",
    "Stem cells",
    "Structural Engineering",
    "Stuart Britain",
    "Superconductivity",
    "Symmetry",
    "Taxation",
    "Teeth",
    "Telescopes",
    "Terrorism",
    "The American presidency",
    "The American Presidency",
    "The American Revolution",
    "The American West",
    "The Ancient Near East",
    "The animal kingdom",
    "The Antarctic",
    "The avant-garde",
    "The Aztecs",
    "The Beats",
    "The Bible",
    "The Body",
    "The BRICS",
    "The British constitution",
    "The British Empire",
    "The cell",
    "The Celts",
    "The computer",
    "The Conquistadors",
    "The Cultural Revolution",
    "The devil",
    "The Earth",
    "The Enlightenment",
    "The Etruscans",
    "The European Union",
    "The eye",
    "The Gothic",
    "The Harlem Renaissance",
    "The Hebrew Bible as Literature",
    "The History of Chemistry",
    "The history of mathematics",
    "The Ice Age",
    "The Koran",
    "The Mexican Revolution",
    "The Middle Ages",
    "The Mongols",
    "The Napoleonic Wars",
    "The New Testament",
    "The Orchestra",
    "The Palestinian-Israeli conflict",
    "The periodic table",
    "The Roman Republic",
    "The scientific revolution",
    "The silk road",
    "The Trojan War",
    "The U.S. Congress",
    "The U.S. Supreme Court",
    "The United Nations",
    "The Welfare State",
    "Theatre",
    "Theology",
    "Thomas Aquinas",
    "Thought",
    "Tibetan Buddhism",
    "Tocqueville",
    "Tragedy",
    "Translation",
    "Trust",
    "Twentieth-century Britain",
    "U.S. Congress",
    "United Nations",
    "Utopianism",
    "Vikings",
    "Viruses",
    "War and Technology",
    "Water",
    "Weather",
    "William Shakespeare",
    "Witchcraft",
    "Wittgenstein",
    "Work",
    "World music",
    "World Trade Organization",
    "World War II",
    "Writing and Script",
    "Zionism"
  );
  return titles;
}

function makeIDList() {
  IDs = new Array("9780199684311",
    "9780199665563",
    "9780199568925",
    "9780195182897",
    "9780192802484",
    "9780199790586",
    "9780198725329",
    "9780199575268",
    "9780198725961",
    "9780198706151",
    "9780198732822",
    "9780195389142",
    "9780195331783",
    "9780199766000",
    "9780199340057",
    "9780190458164",
    "9780195301229",
    "9780195373851",
    "9780199922680",
    "9780199328338",
    "9780199584543",
    "9780192804778",
    "9780198715900",
    "9780192854193",
    "9780199682782",
    "9780199601349",
    "9780192853578",
    "9780192804709",
    "9780199547302",
    "9780192806932",
    "9780192854032",
    "9780192853608",
    "9780198724834",
    "9780192892775",
    "9780199567157",
    "9780199236947",
    "9780199657438",
    "9780192801791",
    "9780199206780",
    "9780192854087",
    "9780192801814",
    "9780192804631",
    "9780190219765",
    "9780199586455",
    "9780198752851",
    "9780192804242",
    "9780192854520",
    "9780199589937",
    "9780199207565",
    "9780198726470",
    "9780199578764",
    "9780199688920",
    "9780192801593",
    "9780199229758",
    "9780198754992",
    "9780199214891",
    "9780195342635",
    "9780199533541",
    "9780199602667",
    "9780199581450",
    "9780195398939",
    "9780195369311",
    "9780199731503",
    "9780192853929",
    "9780199661107",
    "9780192854537",
    "9780199663835",
    "9780192804570",
    "9780199236114",
    "9780198753711",
    "9780199560233",
    "9780198726074",
    "9780192802187",
    "9780199545919",
    "9780199684434",
    "9780192853783",
    "9780199683970",
    "9780199646593",
    "9780199560240",
    "9780195392067",
    "9780192803030",
    "9780192803283",
    "9780199568864",
    "9780199687749",
    "9780192803221",
    "9780192802538",
    "9780199578634",
    "9780199665457",
    "9780192804761",
    "9780192853851",
    "9780192802576",
    "9780199641130",
    "9780198719045",
    "9780198786221",
    "9780192801784",
    "9780199766239",
    "9780199755028",
    "9780198723493",
    "9780199601714",
    "9780199551545",
    "9780199662548",
    "9780198733461",
    "9780195398915",
    "9780199569694",
    "9780192805850",
    "9780192806468",
    "9780199609260",
    "9780192853592",
    "9780199330966",
    "9780199682775",
    "9780199671816",
    "9780199689699",
    "9780192854162",
    "9780199658787",
    "9780198716495",
    "9780199730070",
    "9780192806550",
    "9780192803153",
    "9780198717591",
    "9780192802545",
    "9780199684779",
    "9780192854544",
    "9780192806598",
    "9780199340491",
    "9780192802507",
    "9780199558650",
    "9780192803450",
    "9780192854094",
    "9780199564309",
    "9780192854469",
    "9780199601196",
    "9780199858583",
    "9780199573790",
    "9780192804198",
    "9780199588503",
    "9780195182705",
    "9780192802156",
    "9780192854315",
    "9780198745792",
    "9780199539406",
    "9780199730766",
    "9780198718871",
    "9780192853455",
    "9780199643264",
    "9780192803467",
    "9780192853998",
    "9780192840998",
    "9780192804617",
    "9780192802231",
    "9780192804662",
    "9780199578696",
    "9780199569267",
    "9780199670543",
    "9780199583584",
    "9780199665570",
    "9780199688326",
    "9780199543335",
    "9780192804426",
    "9780199794379",
    "9780199385904",
    "9780192802514",
    "9780192804280",
    "9780199946952",
    "9780199668526",
    "9780199685363",
    "9780192801555",
    "9780199547906",
    "9780192805102",
    "9780195370874",
    "9780192803535",
    "9780199205592",
    "9780195395020",
    "9780199661084",
    "9780199550203",
    "9780199558056",
    "9780198706175",
    "9780192805041",
    "9780192805577",
    "9780190273514",
    "9780199675982",
    "9780199232352",
    "9780192853585",
    "9780199568727",
    "9780192853967",
    "9780192854551",
    "9780199212705",
    "9780199688784",
    "9780199234349",
    "9780192854568",
    "9780199218462",
    "9780192854575",
    "9780199676507",
    "9780199594405",
    "9780199211289",
    "9780199676781",
    "9780199206582",
    "9780199206599",
    "9780199569250",
    "9780198715931",
    "9780199596652",
    "9780199548248",
    "9780199662661",
    "9780198708957",
    "9780199689255",
    "9780199606412",
    "9780195326345",
    "9780192840950",
    "9780199590605",
    "9780192801975",
    "9780192854100",
    "9780199685356",
    "9780199575992",
    "9780192805027",
    "9780192853875",
    "9780198745549",
    "9780192803061",
    "9780199226320",
    "9780199215430",
    "9780192804990",
    "9780192853523",
    "9780198727491",
    "9780192806925",
    "9780192802552",
    "9780199943548",
    "9780198747239",
    "9780199672875",
    "9780198707370",
    "9780192803603",
    "9780198706168",
    "9780199205523",
    "9780199553648",
    "9780192854063",
    "9780199552221",
    "9780192802811",
    "9780198723097",
    "9780192853745",
    "9780199688937",
    "9780199551378",
    "9780199568901",
    "9780192893215",
    "9780199239337",
    "9780198753773",
    "9780199298013",
    "9780192801579",
    "9780199668533",
    "9780199669349",
    "9780199642878",
    "9780199545728",
    "9780198723622",
    "9780199231799",
    "9780199575275",
    "9780199686872",
    "9780192806567",
    "9780192853905",
    "9780199687350",
    "9780195327052",
    "9780192804556",
    "9780192801999",
    "9780199591640",
    "9780192802569",
    "9780199661268",
    "9780199681204",
    "9780199565573",
    "9780199590599",
    "9780199546206",
    "9780199214969",
    "9780198745624",
    "9780199572199",
    "9780199569915",
    "9780199688364",
    "9780199670437",
    "9780199682690",
    "9780195367805",
    "9780192801487",
    "9780199691340",
    "9780192803948",
    "9780192893208",
    "9780199663842",
    "9780192854070",
    "9780199608034",
    "9780199588022",
    "9780199582877",
    "9780199601202",
    "9780199670413",
    "9780199656981",
    "9780199588664",
    "9780199695058",
    "9780192804693",
    "9780199574339",
    "9780199585236",
    "9780192854056",
    "9780199672677",
    "9780192853615",
    "9780199532179",
    "9780198779568",
    "9780192802828",
    "9780199660445",
    "9780192854025",
    "9780199668496",
    "9780199663224",
    "9780192806758",
    "9780199657124",
    "9780199574315",
    "9780199681686",
    "9780199689378",
    "9780198701262",
    "9780199303496",
    "9780199682843",
    "9780192803641",
    "9780198753704",
    "9780199228027",
    "9780199658770",
    "9780195389418",
    "9780192801678",
    "9780198726517",
    "9780199235698",
    "9780199754915",
    "9780199607891",
    "9780192804419",
    "9780198723882",
    "9780192854308",
    "9780198735274",
    "9780195310306",
    "9780199695881",
    "9780199559282",
    "9780199546039",
    "9780192853820",
    "9780198724704",
    "9780192803474",
    "9780192840981",
    "9780192803016",
    "9780199560516",
    "9780199588077",
    "9780195300208",
    "9780199298037",
    "9780192854148",
    "9780192853981",
    "9780192801616",
    "9780195307542",
    "9780192801562",
    "9780199225866",
    "9780198718635",
    "9780199584970",
    "9780198727231",
    "9780199229543",
    "9780199584055",
    "9780199681921",
    "9780199606696",
    "9780195305050",
    "9780199584536",
    "9780199235162",
    "9780199340071",
    "9780192804341",
    "9780192854513",
    "9780199656004",
    "9780199575152",
    "9780199683673",
    "9780192806918",
    "9780199687008",
    "9780192802835",
    "9780198745587",
    "9780192854216",
    "9780192801647",
    "9780199689095",
    "9780198718222",
    "9780199589548",
    "9780199573509",
    "9780199584062",
    "9780198728269",
    "9780192802163",
    "9780192803955",
    "9780192853882",
    "9780192801807",
    "9780192801821",
    "9780192802392",
    "9780192803436",
    "9780192840943",
    "9780198725947",
    "9780199556533",
    "9780199588480",
    "9780195311068",
    "9780199560974",
    "9780192807274",
    "9780199226818",
    "9780192853813",
    "9780199670420",
    "9780199689361",
    "9780198724230",
    "9780199688463",
    "9780195334555",
    "9780199206797",
    "9780192802521",
    "9780192805904",
    "9780199692422",
    "9780199584529",
    "9780195317107",
    "9780199594412",
    "9780199231317",
    "9780199236220",
    "9780195321074",
    "9780192803542",
    "9780192801630",
    "9780199858507",
    "9780199651368",
    "9780199576203",
    "9780199943524",
    "9780199588671",
    "9780199695980",
    "9780198725190",
    "9780192854049",
    "9780198712169",
    "9780192803917",
    "9780199568918",
    "9780192801982",
    "9780192802583",
    "9780199580989",
    "9780192801449",
    "9780192853950",
    "9780198717225",
    "9780192802217",
    "9780192802590",
    "9780199295517",
    "9780199557455",
    "9780199230792",
    "9780199298020",
    "9780198723356",
    "9780198745570",
    "9780192806017",
    "9780198729532",
    "9780199587858",
    "9780192853462",
    "9780198715511",
    "9780198708452",
    "9780192804310",
    "9780199858613",
    "9780192853806",
    "9780192854124",
    "9780198708445",
    "9780199238484",
    "9780192803771",
    "9780199208050",
    "9780192803160",
    "9780199588756",
    "9780199688340",
    "9780199602926",
    "9780199233564",
    "9780199603381",
    "9780199671939",
    "9780192854001",
    "9780199540907",
    "9780199651986",
    "9780199683697",
    "9780199670598",
    "9780198745860",
    "9780199603947",
    "9780195307016",
    "9780190458201",
    "9780190225063",
    "9780199858934",
    "9780195377996",
    "9780199593217",
    "9780199697687",
    "9780199582730",
    "9780195379389",
    "9780199796779",
    "9780192853431",
    "9780198739036",
    "9780198723394",
    "9780199697694",
    "9780199605415",
    "9780199578757",
    "9780192804181",
    "9780199586592",
    "9780195392296",
    "9780199740550",
    "9780199580996",
    "9780192803078",
    "9780199591787",
    "9780199547913",
    "9780199681693",
    "9780199680306",
    "9780199586790",
    "9780199335558",
    "9780195300079",
    "9780198716488",
    "9780199599684",
    "9780199580699",
    "9780192853448",
    "9780198745631",
    "9780199697298",
    "9780199840892",
    "9780199590964",
    "9780199735709",
    "9780199760282",
    "9780199603930",
    "9780199582495",
    "9780199595112",
    "9780199567416",
    "9780199782864",
    "9780199760275",
    "9780190280147",
    "9780199754540",
    "9780190222703",
    "9780199672660",
    "9780199669820",
    "9780199679973",
    "9780199556649",
    "9780199601721",
    "9780199735129",
    "9780195175394",
    "9780192802354",
    "9780198712114",
    "9780199697342",
    "9780192853974",
    "9780195338317",
    "9780195304374",
    "9780199573400",
    "9780192806079",
    "9780199574858",
    "9780190605384",
    "9780198708728",
    "9780199571314",
    "9780198718628",
    "9780199236954",
    "9780192854117",
    "9780199699360",
    "9780192854292",
    "9780192806086",
    "9780199688777",
    "9780199567782",
    "9780199766048"
  );
  return IDs;
}
