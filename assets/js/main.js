const supportedLang = {
  ro: true,
  en: true,
  fr: true,
}

let currentSection = '#home';

const menu = {
  ro: {
    home: "Acasă",
    exhibitions: "Expoziții",
    books: "Cărți",
    gallery: "Galerie",
  },
  en: {
    home: "Home",
    exhibitions: "Exhibitions",
    books: "Books",
    gallery: "Gallery",
  },
  fr: {
    home: "Accueil",
    exhibitions: "Expositions",
    books: "Livres",
    gallery: "Galerie",
  },
}
const expozitii = {
  "ro": {
    "titlu": "Expoziții",
    "events": [
      {
        "year": "1969",
        "event": "Expoziție personală, sala Ateneul tineretului, București"
      },
      {
        "year": "1974",
        "event": "Expoziție personală, Galeriile Victoria, Brașov"
      },
      {
        "year": "1974",
        "event": "Expoziție personală, Galeria Amfora, București"
      },
      {
        "year": "1978",
        "event": "Expoziție personală, Galeriile Victoria, Brașov și Sala Eforie, București"
      },
      {
        "year": "1982",
        "event": "Expoziție personală \"Impresii de la Budapesta\", Galeriile Brassoi Lapok, Brașov"
      },
      {
        "year": "1984",
        "event": "Expoziție personală, Sala Arta, Brașov"
      },
      {
        "year": "1990",
        "event": "Expoziție personală, Galeriile Victoria, Brașov"
      },
      {
        "year": "1992",
        "event": "Expoziție personală \"Brașovul în acuarelă și guașă\", Muzeul de Artă Brașov"
      },
      {
        "year": "1996",
        "event": "Expoziție personală, Casa Americii Latine, București"
      },
      {
        "year": "1998",
        "event": "Expoziție personală \"Nouă zile la Ierusalim\", Muzeul de Artă, Brașov"
      },
      {
        "year": "2000",
        "event": "Expoziție retrospectivă de pictură, Muzeul de Artă, Brașov"
      },
      {
        "year": "2000",
        "event": "Expoziție personală \"De la Brașov la Rishon Lezion\", Rishon LeZion, Israel"
      },
      {
        "year": "2000",
        "event": "Expoziție personală \"Ierusalim, în viziunea unui artist român\", Palatul Suțu, Muzeul Municipiului București"
      },
      {
        "year": "2002",
        "event": "Expoziție personală, Institutul Cultural Român și de Cercetare Umanistică, Veneția, Italia"
      },
      {
        "year": "2003",
        "event": "Expoziție personală de acuarelă, Institutul Cultural Român Berlin, Germania; Expoziție personală, institutul Francez București"
      },
      {
        "year": "2003",
        "event": "Expoziție personală \"Note de călătorie – Veneția\", Institutul Italian de Cultură, București"
      },
      {
        "year": "2003",
        "event": "Expoziție personală \"Note de călătorie – Paris, Ierusalim, Veneția\", Muzeul de artă, Brașov"
      },
      {
        "year": "2004",
        "event": "Expoziție personală, Galeriile Victoria, Brașov"
      },
      {
        "year": "2004",
        "event": "Expoziție personală, Institutul Cultural Român, Madrid, Spania"
      },
      {
        "year": "2004",
        "event": "Expoziție personală de acuarelă \"Salvați Vama Veche\", Muzeul de Artă Brașov"
      },
      {
        "year": "2004 - 2005",
        "event": "Expoziție personală \"Trei capitale europene în lumina acuarelei – Berlin, Madrid, Viena\", Muzeul de Artă; Brașov"
      },
      {
        "year": "2005",
        "event": "Expoziție personală de acuarelă, Institutul Cultural Roman, Viena, Austria"
      },
      {
        "year": "2006",
        "event": "Expoziție personală \"Cipru, Creta, Santorini\", Muzeul de Artă Brașov"
      },
      {
        "year": "2007",
        "event": "Expoziție personală \"Eternul Ierusalim\", Muzeul de Artă Brașov"
      },
      {
        "year": "2007",
        "event": "Expoziție de grafică și sculptură împreună cu sculptorul Charalampou Christodolou, Nicosia, Cipru"
      },
      {
        "year": "2008",
        "event": "Expoziție personală \"Jurnal pictat în China\", Muzeul de Artă, Brașov"
      },
      {
        "year": "2008",
        "event": "Expoziție personală de grafică \"Halou eminescian\", Universitatea Transilvania, Brașov"
      },
      {
        "year": "2010",
        "event": "Expoziție ex-libris \"Aventurile lui Don Quijote\", Biblioteca Județeană George Barițiu, Brașov"
      },
      {
        "year": "2011",
        "event": "Expoziție personală \"Călătoria. Clipe americane\", Muzeul Național al Satului „Dimitrie Gusti”, București"
      },
      {
        "year": "2011",
        "event": "Expoziție personală \"Ierusalim, Lumină și culoare\", Muzeul Unirii, Iași"
      },
      {
        "year": "2012",
        "event": "Expoziție personală de acuarelă, pictură, grafică \"Ierusalim\", Palatul Parlamentului, București"
      },
      {
        "year": "2012",
        "event": "Expoziție personală \"Capul Nord – schițe de călătorie\", Galeriile Europe, Brașov"
      },
      {
        "year": "2013",
        "event": "Expoziție personală \"Spania, impresii de călătorie\", Galeriile Europe, Brașov"
      },
      {
        "year": "2014",
        "event": "Expoziție personală \"In grădina lui Moshe\", Galeriile Europe, Brașov"
      },
      {
        "year": "2015",
        "event": "Expoziție personală de pictură și grafică \"Retro 75\", Galeriile Europe, Brașov"
      },
      {
        "year": "2017",
        "event": "Expoziție personală \"Schițe de călătorie: Coasta de Azur, Sicilia, Ierusalim, Corfu, Portugalia, Dubai\", Galeriile Europe, Brașov"
      },
      {
        "year": "2018",
        "event": "Expoziție personală de desene în peniță și tuș, Galeriile Europe, Brașov"
      },
      {
        "year": "2019",
        "event": "Expoziție personală \"Mică retrospectivă – Plaja de la 2Mai spre Vama Veche\", Galeriile Europe, Brașov"
      },
      {
        "year": "2019",
        "event": "Expoziție personală \"Clipe americane\", Muzeul Național al Satului „Dimitrie Gusti”, București"
      },
      {
        "year": "2023",
        "event": "Expoziție personală \"Marea la 2Mai și Vama Veche\", Căminul Cultural 2Mai"
      },
      {
        "year": "2024",
        "event": "Expoziție personală \"Clipe americane\", la Galeriile Europe, Brașov"
      },
      {
        "year": "2025",
        "event": "Expoziție personală \"Cascade și ghetari in tarile nordice\", Galeriile Europe, Brașov"
      }
    ]
  },
  "fr": {
    "titlu": "Expositions",
    "events": [
      {
        "year": "1969",
        "event": "Exposition personnelle, salle Ateneul tineretului, Bucarest"
      },
      {
        "year": "1974",
        "event": "Exposition personnelle, Galeries Victoria, Brașov"
      },
      {
        "year": "1974",
        "event": "Exposition personnelle, Galerie Amfora, Bucarest"
      },
      {
        "year": "1978",
        "event": "Exposition personnelle, Galeries Victoria, Brașov et Salle Eforie, Bucarest"
      },
      {
        "year": "1982",
        "event": "Exposition personnelle \"Impressions de Budapest\", Galeries Brassoi Lapok, Brașov"
      },
      {
        "year": "1984",
        "event": "Exposition personnelle, Salle Arta, Brașov"
      },
      {
        "year": "1990",
        "event": "Exposition personnelle, Galeries Victoria, Brașov"
      },
      {
        "year": "1992",
        "event": "Exposition personnelle \"Brașov en aquarelle et gouache\", Musée d'Art de Brașov"
      },
      {
        "year": "1996",
        "event": "Exposition personnelle, Maison de l'Amérique Latine, Bucarest"
      },
      {
        "year": "1998",
        "event": "Exposition personnelle \"Neuf jours à Jérusalem\", Musée d'Art, Brașov"
      },
      {
        "year": "2000",
        "event": "Exposition rétrospective de peinture, Musée d'Art, Brașov"
      },
      {
        "year": "2000",
        "event": "Exposition personnelle \"De Brașov à Rishon Lezion\", Rishon LeZion, Israël"
      },
      {
        "year": "2000",
        "event": "Exposition personnelle \"Jérusalem, selon la vision d'un artiste roumain\", Palais Suțu, Musée de la ville de Bucarest"
      },
      {
        "year": "2002",
        "event": "Exposition personnelle, Institut Culturel Roumain et de Recherche Humaniste, Venise, Italie"
      },
      {
        "year": "2003",
        "event": "Exposition personnelle d'aquarelles, Institut Culturel Roumain Berlin, Allemagne; Exposition personnelle, Institut Français Bucarest"
      },
      {
        "year": "2003",
        "event": "Exposition personnelle \"Notes de voyage – Venise\", Institut Italien de Culture, Bucarest"
      },
      {
        "year": "2003",
        "event": "Exposition personnelle \"Notes de voyage – Paris, Jérusalem, Venise\", Musée d'Art, Brașov"
      },
      {
        "year": "2004",
        "event": "Exposition personnelle, Galeries Victoria, Brașov"
      },
      {
        "year": "2004",
        "event": "Exposition personnelle, Institut Culturel Roumain, Madrid, Espagne"
      },
      {
        "year": "2004",
        "event": "Exposition personnelle d'aquarelles \"Sauvez Vama Veche\", Musée d'Art Brașov"
      },
      {
        "year": "2004 - 2005",
        "event": "Exposition personnelle \"Trois capitales européennes à la lumière de l'aquarelle – Berlin, Madrid, Vienne\", Musée d'Art, Brașov"
      },
      {
        "year": "2005",
        "event": "Exposition personnelle d'aquarelles, Institut Culturel Roumain, Vienne, Autriche"
      },
      {
        "year": "2006",
        "event": "Exposition personnelle \"Chypre, Crète, Santorin\", Musée d'Art Brașov"
      },
      {
        "year": "2007",
        "event": "Exposition personnelle \"Jérusalem éternelle\", Musée d'Art Brașov"
      },
      {
        "year": "2007",
        "event": "Exposition de graphisme et sculpture avec le sculpteur Charalampou Christodolou, Nicosie, Chypre"
      },
      {
        "year": "2008",
        "event": "Exposition personnelle \"Journal peint en Chine\", Musée d'Art, Brașov"
      },
      {
        "year": "2008",
        "event": "Exposition personnelle de graphisme \"Halo eminescien\", Université Transilvania, Brașov"
      },
      {
        "year": "2010",
        "event": "Exposition ex-libris \"Les aventures de Don Quichotte\", Bibliothèque départementale George Barițiu, Brașov"
      },
      {
        "year": "2011",
        "event": "Exposition personnelle \"Le voyage. Moments américains\", Musée National du Village « Dimitrie Gusti », Bucarest"
      },
      {
        "year": "2011",
        "event": "Exposition personnelle \"Jérusalem, Lumière et Couleur\", Musée de l'Union, Iași"
      },
      {
        "year": "2012",
        "event": "Exposition personnelle d'aquarelles, peinture, graphisme \"Jérusalem\", Palais du Parlement, Bucarest"
      },
      {
        "year": "2012",
        "event": "Exposition personnelle \"Cap Nord – croquis de voyage\", Galeries Europe, Brașov"
      },
      {
        "year": "2013",
        "event": "Exposition personnelle \"Espagne, impressions de voyage\", Galeries Europe, Brașov"
      },
      {
        "year": "2014",
        "event": "Exposition personnelle \"Dans le jardin de Moshe\", Galeries Europe, Brașov"
      },
      {
        "year": "2015",
        "event": "Exposition personnelle de peinture et graphisme \"Retro 75\", Galeries Europe, Brașov"
      },
      {
        "year": "2017",
        "event": "Exposition personnelle \"Croquis de voyage: Côte d'Azur, Sicile, Jérusalem, Corfou, Portugal, Dubaï\", Galeries Europe, Brașov"
      },
      {
        "year": "2018",
        "event": "Exposition personnelle de dessins à l'encre et plume, Galeries Europe, Brașov"
      },
      {
        "year": "2019",
        "event": "Exposition personnelle \"Petite rétrospective – Plage de 2Mai vers Vama Veche\", Galeries Europe, Brașov"
      },
      {
        "year": "2019",
        "event": "Exposition personnelle \"Moments américains\", Musée National du Village « Dimitrie Gusti », Bucarest"
      },
      {
        "year": "2023",
        "event": "Exposition personnelle \"La mer à 2Mai et Vama Veche\", Centre Culturel 2Mai"
      },
      {
        "year": "2024",
        "event": "Exposition personnelle \"Moments américains\", Galeries Europe, Brașov"
      },
      {
        "year": "2025",
        "event": "Exposition personnelle \"Cascades et glaciers dans les pays nordiques\", Galeries Europe, Brașov"
      }
    ]
  },

  "en": {
    "titlu": "Exhibitions",
    "events": [
      {
        "year": "1969",
        "event": "Solo exhibition, Ateneul Tineretului Hall, Bucharest"
      },
      {
        "year": "1974",
        "event": "Solo exhibition, Victoria Galleries, Brașov"
      },
      {
        "year": "1974",
        "event": "Solo exhibition, Amfora Gallery, Bucharest"
      },
      {
        "year": "1978",
        "event": "Solo exhibition, Victoria Galleries, Brașov and Eforie Hall, Bucharest"
      },
      {
        "year": "1982",
        "event": "Solo exhibition \"Impressions from Budapest\", Brassoi Lapok Galleries, Brașov"
      },
      {
        "year": "1984",
        "event": "Solo exhibition, Arta Hall, Brașov"
      },
      {
        "year": "1990",
        "event": "Solo exhibition, Victoria Galleries, Brașov"
      },
      {
        "year": "1992",
        "event": "Solo exhibition \"Brașov in Watercolor and Gouache\", Brașov Art Museum"
      },
      {
        "year": "1996",
        "event": "Solo exhibition, House of Latin America, Bucharest"
      },
      {
        "year": "1998",
        "event": "Solo exhibition \"Nine Days in Jerusalem\", Art Museum, Brașov"
      },
      {
        "year": "2000",
        "event": "Retrospective painting exhibition, Art Museum, Brașov"
      },
      {
        "year": "2000",
        "event": "Solo exhibition \"From Brașov to Rishon LeZion\", Rishon LeZion, Israel"
      },
      {
        "year": "2000",
        "event": "Solo exhibition \"Jerusalem, in the Vision of a Romanian Artist\", Suțu Palace, Bucharest Municipality Museum"
      },
      {
        "year": "2002",
        "event": "Solo exhibition, Romanian Cultural Institute and Humanistic Research, Venice, Italy"
      },
      {
        "year": "2003",
        "event": "Solo watercolor exhibition, Romanian Cultural Institute Berlin, Germany; Solo exhibition, French Institute Bucharest"
      },
      {
        "year": "2003",
        "event": "Solo exhibition \"Travel Notes – Venice\", Italian Cultural Institute, Bucharest"
      },
      {
        "year": "2003",
        "event": "Solo exhibition \"Travel Notes – Paris, Jerusalem, Venice\", Art Museum, Brașov"
      },
      {
        "year": "2004",
        "event": "Solo exhibition, Victoria Galleries, Brașov"
      },
      {
        "year": "2004",
        "event": "Solo exhibition, Romanian Cultural Institute, Madrid, Spain"
      },
      {
        "year": "2004",
        "event": "Solo watercolor exhibition \"Save Vama Veche\", Brașov Art Museum"
      },
      {
        "year": "2004 - 2005",
        "event": "Solo exhibition \"Three European Capitals in the Light of Watercolor – Berlin, Madrid, Vienna\", Art Museum, Brașov"
      },
      {
        "year": "2005",
        "event": "Solo watercolor exhibition, Romanian Cultural Institute, Vienna, Austria"
      },
      {
        "year": "2006",
        "event": "Solo exhibition \"Cyprus, Crete, Santorini\", Brașov Art Museum"
      },
      {
        "year": "2007",
        "event": "Solo exhibition \"Eternal Jerusalem\", Brașov Art Museum"
      },
      {
        "year": "2007",
        "event": "Graphic art and sculpture exhibition together with sculptor Charalampou Christodolou, Nicosia, Cyprus"
      },
      {
        "year": "2008",
        "event": "Solo exhibition \"Painted Journal in China\", Art Museum, Brașov"
      },
      {
        "year": "2008",
        "event": "Solo graphic exhibition \"Eminescu’s Halo\", Transilvania University, Brașov"
      },
      {
        "year": "2010",
        "event": "Ex-libris exhibition \"The Adventures of Don Quixote\", George Barițiu County Library, Brașov"
      },
      {
        "year": "2011",
        "event": "Solo exhibition \"The Journey. American Moments\", National Village Museum \"Dimitrie Gusti\", Bucharest"
      },
      {
        "year": "2011",
        "event": "Solo exhibition \"Jerusalem, Light and Color\", Union Museum, Iași"
      },
      {
        "year": "2012",
        "event": "Solo exhibition of watercolor, painting, and graphic art \"Jerusalem\", Palace of Parliament, Bucharest"
      },
      {
        "year": "2012",
        "event": "Solo exhibition \"North Cape – Travel Sketches\", Europe Galleries, Brașov"
      },
      {
        "year": "2013",
        "event": "Solo exhibition \"Spain, Travel Impressions\", Europe Galleries, Brașov"
      },
      {
        "year": "2014",
        "event": "Solo exhibition \"In Moshe’s Garden\", Europe Galleries, Brașov"
      },
      {
        "year": "2015",
        "event": "Solo painting and graphic exhibition \"Retro 75\", Europe Galleries, Brașov"
      },
      {
        "year": "2017",
        "event": "Solo exhibition \"Travel Sketches: Côte d’Azur, Sicily, Jerusalem, Corfu, Portugal, Dubai\", Europe Galleries, Brașov"
      },
      {
        "year": "2018",
        "event": "Solo exhibition of pen and ink drawings, Europe Galleries, Brașov"
      },
      {
        "year": "2019",
        "event": "Solo exhibition \"Small Retrospective – The Beach from 2Mai to Vama Veche\", Europe Galleries, Brașov"
      },
      {
        "year": "2019",
        "event": "Solo exhibition \"American Moments\", National Village Museum \"Dimitrie Gusti\", Bucharest"
      },
      {
        "year": "2023",
        "event": "Solo exhibition \"The Sea at 2Mai and Vama Veche\", Cultural Center 2Mai"
      },
      {
        "year": "2024",
        "event": "Solo exhibition \"American Moments\", Europe Galleries, Brașov"
      },
      {
        "year": "2025",
        "event": "Solo exhibition \"Waterfalls and Glaciers in the Northern Countries\", Europe Galleries, Brașov"
      }
    ]
  }
}
  ;
const books = {
  "ro": {
    "titlu": "Cărți, Album de artă",
    "items": [
      {
        "titlu": "Brașovul",
        "detaliu": "(album de artă), Editura Duminică, 1993, Brașov"
      },
      {
        "titlu": "Semn de aer",
        "detaliu": "(poezie), Editura Transilvania Expres, 2015"
      },
      {
        "titlu": "Șcheii Brașovului",
        "detaliu": "(desene în peniță, album documentar), Editura Transilvania Expres, 2015"
      },
      {
        "titlu": "Zicale - Ziceri - Zicători",
        "detaliu": "Editura Transilvania Expres, 2016"
      },
      {
        "titlu": "Trăsături și expresii",
        "detaliu": "(galerie de portrete - pictură, pastel, creioane colorate, tuș), Editura Transilvania Expres, 2016"
      },
      {
        "titlu": "Ierusalim - lumină și culoare",
        "detaliu": "(album de artă), Editura Transilvania Expres, 2016"
      },
      {
        "titlu": "Clipe americane",
        "detaliu": "(album de artă), Editura Transilvania Expres, 2017"
      },
      {
        "titlu": "Cipru - Insula Afroditei",
        "detaliu": "(album de artă), Editura Libris Editorial, 2017"
      },
      {
        "titlu": "Itinerarii din China",
        "detaliu": "(album de artă), Editura Libris Editorial, 2017"
      },
      {
        "titlu": "Peisaje din Brașov",
        "detaliu": "(album de artă), Editura Libris Editorial, 2018"
      },
      {
        "titlu": "Venetia, Creta, Santorini",
        "detaliu": "(album de artă), Editura Libris Editorial, 2018"
      },
      {
        "titlu": "Marea la 2 Mai și Vama Veche",
        "detaliu": "(album de artă), Editura Libris Editorial, 2019 (Ref: Curierul Național, Anca Filoteanu, 17 iulie 2019)"
      },
      {
        "titlu": "Spre Nord",
        "detaliu": "(album de artă), Editura Libris Editorial, 2020"
      },
      {
        "titlu": "Paris",
        "detaliu": "(album de artă), Editura Creator, 2020"
      },
      {
        "titlu": "Culorile Spaniei",
        "detaliu": "(album de artă), Editura Creator, 2020"
      },
      {
        "titlu": "Ierusalim. Tel Aviv. Betleem.",
        "detaliu": "Schite în acuarelă (album de artă), Editura Libris Editorial, 2021"
      },
      {
        "titlu": "Scotia. Portugalia. Sicilia.",
        "detaliu": "Schite în acuarelă (album de artă), Editura Libris Editorial, 2021"
      },
      {
        "titlu": "Elada. Budapesta. Istanbul.",
        "detaliu": "Desen și acuarelă (album de artă), Editura Libris Editorial, 2021"
      },
      {
        "titlu": "Coasta de Azur. Corfu. Dubai",
        "detaliu": "(album de artă), Editura Creator, 2021"
      },
      {
        "titlu": "Viena",
        "detaliu": "(album de artă), Editura Creator, 2022"
      },
      {
        "titlu": "Berlin",
        "detaliu": "(album de artă), Editura Creator, 2022"
      },
      {
        "titlu": "Copacul creație divină",
        "detaliu": "(album de artă), Editura Creator, Brașov, 2022"
      },
      {
        "titlu": "La malul apei",
        "detaliu": "(album de artă), volumul 1 și 2, Editura Creator, Brașov, 2023"
      },
      {
        "titlu": "Flori în anotimpuri. Trandafiri",
        "detaliu": "(album de artă), Editura Creator, Brașov, 2024"
      },
      {
        "titlu": "Ilustrația, arta interpretării",
        "detaliu": "(album de artă), Editura Creator, Brașov, 2024"
      },
      {
        "titlu": "Flori în anotimpuri. Primăvara",
        "detaliu": "(album de artă), Editura Creator, Brașov, 2025"
      },
      {
        "titlu": "Flori în anotimpuri. Formă și culoare",
        "detaliu": "(album de artă), Editura Creator, Brașov, 2025"
      }
    ]
  },
  "en": {
    "titlu": "Books, Art Album",
    "items": [
      { "titlu": "Brașov", "detaliu": "(art album), Duminică Publishing, 1993, Brașov" },
      { "titlu": "Sign of Air", "detaliu": "(poetry), Transilvania Expres Publishing, 2015" },
      { "titlu": "Șcheii Brașovului", "detaliu": "(pen drawings, documentary album), Transilvania Expres Publishing, 2015" },
      { "titlu": "Sayings - Proverbs - Expressions", "detaliu": "Transilvania Expres Publishing, 2016" },
      { "titlu": "Features and Expressions", "detaliu": "(portrait gallery - painting, pastel, colored pencils, ink), Transilvania Expres Publishing, 2016" },
      { "titlu": "Jerusalem - Light and Color", "detaliu": "(art album), Transilvania Expres Publishing, 2016" },
      { "titlu": "American Moments", "detaliu": "(art album), Transilvania Expres Publishing, 2017" },
      { "titlu": "Cyprus - Island of Aphrodite", "detaliu": "(art album), Libris Editorial, 2017" },
      { "titlu": "Itineraries from China", "detaliu": "(art album), Libris Editorial, 2017" },
      { "titlu": "Landscapes from Brașov", "detaliu": "(art album), Libris Editorial, 2018" },
      { "titlu": "Venice, Crete, Santorini", "detaliu": "(art album), Libris Editorial, 2018" },
      { "titlu": "The Sea at 2 Mai and Vama Veche", "detaliu": "(art album), Libris Editorial, 2019 (Ref: Curierul Național, Anca Filoteanu, July 17, 2019)" },
      { "titlu": "Northwards", "detaliu": "(art album), Libris Editorial, 2020" },
      { "titlu": "Paris", "detaliu": "(art album), Creator Publishing, 2020" },
      { "titlu": "Colors of Spain", "detaliu": "(art album), Creator Publishing, 2020" },
      { "titlu": "Jerusalem. Tel Aviv. Bethlehem.", "detaliu": "Watercolor sketches (art album), Libris Editorial, 2021" },
      { "titlu": "Scotland. Portugal. Sicily.", "detaliu": "Watercolor sketches (art album), Libris Editorial, 2021" },
      { "titlu": "Greece. Budapest. Istanbul.", "detaliu": "Drawing and watercolor (art album), Libris Editorial, 2021" },
      { "titlu": "Côte d'Azur. Corfu. Dubai", "detaliu": "(art album), Creator Publishing, 2021" },
      { "titlu": "Vienna", "detaliu": "(art album), Creator Publishing, 2022" },
      { "titlu": "Berlin", "detaliu": "(art album), Creator Publishing, 2022" },
      { "titlu": "The Tree of Divine Creation", "detaliu": "(art album), Creator Publishing, Brașov, 2022" },
      { "titlu": "By the Water", "detaliu": "(art album), volumes 1 and 2, Creator Publishing, Brașov, 2023" },
      { "titlu": "Flowers in Seasons. Roses", "detaliu": "(art album), Creator Publishing, Brașov, 2024" },
      { "titlu": "Illustration, the Art of Interpretation", "detaliu": "(art album), Creator Publishing, Brașov, 2024" },
      { "titlu": "Flowers in Seasons. Spring", "detaliu": "(art album), Creator Publishing, Brașov, 2025" },
      { "titlu": "Flowers in Seasons. Form and Color", "detaliu": "(art album), Creator Publishing, Brașov, 2025" }
    ]
  },
  "fr": {
    "titlu": "Livres, Album d'art",
    "items": [
      { "titlu": "Brașov", "detaliu": "(album d'art), Éditions Duminică, 1993, Brașov" },
      { "titlu": "Signe d'air", "detaliu": "(poésie), Éditions Transilvania Expres, 2015" },
      { "titlu": "Șcheii Brașovului", "detaliu": "(dessins à la plume, album documentaire), Éditions Transilvania Expres, 2015" },
      { "titlu": "Proverbes - Dictons - Expressions", "detaliu": "Éditions Transilvania Expres, 2016" },
      { "titlu": "Traits et Expressions", "detaliu": "(galerie de portraits - peinture, pastel, crayons de couleur, encre), Éditions Transilvania Expres, 2016" },
      { "titlu": "Jérusalem - Lumière et Couleur", "detaliu": "(album d'art), Éditions Transilvania Expres, 2016" },
      { "titlu": "Moments Américains", "detaliu": "(album d'art), Éditions Transilvania Expres, 2017" },
      { "titlu": "Chypre - L'île d'Aphrodite", "detaliu": "(album d'art), Libris Editorial, 2017" },
      { "titlu": "Itinéraires de Chine", "detaliu": "(album d'art), Libris Editorial, 2017" },
      { "titlu": "Paysages de Brașov", "detaliu": "(album d'art), Libris Editorial, 2018" },
      { "titlu": "Venise, Crète, Santorin", "detaliu": "(album d'art), Libris Editorial, 2018" },
      { "titlu": "La mer à 2 Mai et Vama Veche", "detaliu": "(album d'art), Libris Editorial, 2019 (Ref : Curierul Național, Anca Filoteanu, 17 juillet 2019)" },
      { "titlu": "Vers le Nord", "detaliu": "(album d'art), Libris Editorial, 2020" },
      { "titlu": "Paris", "detaliu": "(album d'art), Éditions Creator, 2020" },
      { "titlu": "Couleurs de l'Espagne", "detaliu": "(album d'art), Éditions Creator, 2020" },
      { "titlu": "Jérusalem. Tel Aviv. Bethléem.", "detaliu": "Esquisses à l'aquarelle (album d'art), Libris Editorial, 2021" },
      { "titlu": "Écosse. Portugal. Sicile.", "detaliu": "Esquisses à l'aquarelle (album d'art), Libris Editorial, 2021" },
      { "titlu": "Grèce. Budapest. Istanbul.", "detaliu": "Dessin et aquarelle (album d'art), Libris Editorial, 2021" },
      { "titlu": "Côte d'Azur. Corfou. Dubaï", "detaliu": "(album d'art), Éditions Creator, 2021" },
      { "titlu": "Vienne", "detaliu": "(album d'art), Éditions Creator, 2022" },
      { "titlu": "Berlin", "detaliu": "(album d'art), Éditions Creator, 2022" },
      { "titlu": "L'Arbre de la Création Divine", "detaliu": "(album d'art), Éditions Creator, Brașov, 2022" },
      { "titlu": "Au bord de l'eau", "detaliu": "(album d'art), volumes 1 et 2, Éditions Creator, Brașov, 2023" },
      { "titlu": "Fleurs des saisons. Roses", "detaliu": "(album d'art), Éditions Creator, Brașov, 2024" },
      { "titlu": "Illustration, l'art de l'interprétation", "detaliu": "(album d'art), Éditions Creator, Brașov, 2024" },
      { "titlu": "Fleurs des saisons. Printemps", "detaliu": "(album d'art), Éditions Creator, Brașov, 2025" },
      { "titlu": "Fleurs des saisons. Forme et Couleur", "detaliu": "(album d'art), Éditions Creator, Brașov, 2025" }
    ]
  },


};


const citate = {
  "ro": [
    "\"Aurelia Stoie Mărginean este un asemenea artist care răscolește toate bucătăriile lumii, se umple de gusturi stranii și arome ca să le redea oamenilor transfigurate de plăcerea resimțită de ea. Iată imaginea pe care mi-o stârnește cunoscuta și recunoscuta artistă plastică Aurelia Stoie Mărginean, după mulți ani în care am avut răgaz s-o cunosc ca pictoriță și ca prietenă. Până și numele ei pare predestinat. Aurelia e o artistă solară care trăiește și recreează frumosul sub toate formele lui...\" - Nora Iuga. Tăcutele culori vor să se audă - Cetatea lui Bucur",
    "\"Artista încearcă să cuprindă concepția contemporană asupra organizării spațiului urban de existență (Deschidere spre cer, Cartierele imense). Faptul mi se pare cu deosebire important pentru că, în acest caz, avem de-a face, în primul rând, cu o atitudine reflexivă, cu asumarea răspunderii artistului de a trece dincolo de aparențe, de a sesiza datele esențiale ale existenței umane, în condițiile societății contemporane.\" - Mihai Nadin. Pictori din Brașov"
  ],
  "en": [
    "\"Aurelia Stoie Mărginean is such an artist who rummages through all the kitchens of the world, fills herself with strange tastes and aromas to then convey them to people transfigured by the pleasure she experiences. This is the image that the well-known and recognized visual artist Aurelia Stoie Mărginean evokes in me, after many years in which I had the chance to know her as a painter and as a friend. Even her name seems predestined. Aurelia is a solar artist who lives and recreates beauty in all its forms...\" - Nora Iuga. The Silent Colors Want to Be Heard - The Citadel of Bucur",

    "\"The artist tries to encompass the contemporary conception of the organization of urban living space (Opening to the Sky, The Immense Districts). This seems particularly important to me because, in this case, we are dealing, first and foremost, with a reflective attitude, with the artist’s responsibility to go beyond appearances, to perceive the essential data of human existence in the conditions of contemporary society.\" - Mihai Nadin. Painters from Brașov",
  ],
  "fr": [
    "\"Aurelia Stoie Mărginean est une artiste qui explore toutes les cuisines du monde, se remplit de goûts et d'arômes étranges pour ensuite les transmettre aux gens transfigurés par le plaisir qu'elle ressent. Voici l'image que m'évoque la célèbre et reconnue artiste plasticienne Aurelia Stoie Mărginean, après de nombreuses années où j'ai eu l'occasion de la connaître en tant que peintre et amie. Même son nom semble prédestiné. Aurelia est une artiste solaire qui vit et recrée la beauté sous toutes ses formes...\" - Nora Iuga. Les couleurs silencieuses veulent se faire entendre - La Citadelle de Bucur",

    "\"L'artiste tente de saisir la conception contemporaine de l'organisation de l'espace urbain de vie (Ouverture vers le ciel, Les immenses quartiers). Cela me semble particulièrement important car, dans ce cas, nous avons affaire, avant tout, à une attitude réflexive, à la responsabilité de l'artiste de dépasser les apparences, de percevoir les données essentielles de l'existence humaine dans les conditions de la société contemporaine.\" - Mihai Nadin. Peintres de Brașov",
  ]
};

const gallery = {
  "data01": {
    "titles": {
      "ro": "Vernisajul expoziției Marea la 2Mai și Vama Veche, de la Galeriile Europe, din Brașov, aprilie  2019",
      "en": "The opening of the exhibition 'The Sea at 2Mai and Vama Veche', from Europe Galleries, Brașov, April 2019",
      "fr": "L'ouverture de l'exposition 'La mer à 2Mai et Vama Veche', des Galeries Europe, Brașov, avril 2019"
    },
    "descriptions": {
      "ro": "Aurelia Stoie Mărginean este prezentată de Veronica Bodea Tatulea, critic de artă și de poeta Nadia Cella Pop",
      "en": "Aurelia Stoie Mărginean is presented by Veronica Bodea Tatulea, art critic and poet Nadia Cella Pop",
      "fr": "Aurelia Stoie Mărginean est présentée par Veronica Bodea Tatulea, critique d'art et poétesse Nadia Cella Pop"
    },
    "images": [
      { "src": "assets/images/galerie/1/image01.jpeg" },
      { "src": "assets/images/galerie/1/image02.jpeg" },
      { "src": "assets/images/galerie/1/image03.jpeg" },
      { "src": "assets/images/galerie/1/image04.jpeg" },
      { "src": "assets/images/galerie/1/image05.jpeg" },
      { "src": "assets/images/galerie/1/image06.jpeg" },
      { "src": "assets/images/galerie/1/image07.jpeg" }
    ],
    "videos": [
      { "src": "assets/images/galerie/1/video01.mp4" },
      { "src": "assets/images/galerie/1/video02.mp4" },
      { "src": "assets/images/galerie/1/video03.mp4" },
    ]
  },
  "data02": {
    "titles": {
      "ro": "Galerie de portrete",
      "en": "Portrait gallery",
      "fr": "Galerie de portraits"
    },
    "descriptions": {
      "ro": "Portrete",
      "en": "Portraits",
      "fr": "Portraits"
    },
    "images": [
      { "src": "assets/images/galerie/2/Papa Ioan Paul al II-lea.jpg", "titles": { "ro": "Papa Ioan Paul al II-lea", "en": "Pope John Paul II", "fr": "Pape Jean-Paul II" } },
      { "src": "assets/images/galerie/2/Albert Zoli.jpg", "titles": { "ro": "Albert Zoli", "en": "Albert Zoli", "fr": "Albert Zoli" } },
      { "src": "assets/images/galerie/2/Alexandru Suciu.jpg", "titles": { "ro": "Alexandru Suciu", "en": "Alexandru Suciu", "fr": "Alexandru Suciu" } },
      { "src": "assets/images/galerie/2/Aurelia Ungur.jpg", "titles": { "ro": "Aurelia Ungur", "en": "Aurelia Ungur", "fr": "Aurelia Ungur" } },
      { "src": "assets/images/galerie/2/Carmen Daicu.jpg", "titles": { "ro": "Carmen Daicu", "en": "Carmen Daicu", "fr": "Carmen Daicu" } },
      { "src": "assets/images/galerie/2/Catalin Barbu.jpg", "titles": { "ro": "Catalin Barbu", "en": "Catalin Barbu", "fr": "Catalin Barbu" } },
      { "src": "assets/images/galerie/2/Cornel Dumitrescu.jpg", "titles": { "ro": "Cornel Dumitrescu", "en": "Cornel Dumitrescu", "fr": "Cornel Dumitrescu" } },
      { "src": "assets/images/galerie/2/Dali.png", "titles": { "ro": "Dali", "en": "Dali", "fr": "Dali" } },
      { "src": "assets/images/galerie/2/Gabriel Stan.jpg", "titles": { "ro": "Gabriel Stan", "en": "Gabriel Stan", "fr": "Gabriel Stan" } },
      { "src": "assets/images/galerie/2/Gonbos.jpg", "titles": { "ro": "Gonbos", "en": "Gonbos", "fr": "Gonbos" } },
      { "src": "assets/images/galerie/2/Harald Meschendorfer.jpg", "titles": { "ro": "Harald Meschendorfer", "en": "Harald Meschendorfer", "fr": "Harald Meschendorfer" } },
      { "src": "assets/images/galerie/2/Nicolae Stoie.jpg", "titles": { "ro": "Nicolae Stoie", "en": "Nicolae Stoie", "fr": "Nicolae Stoie" } },
      { "src": "assets/images/galerie/2/Nina Casian.png", "titles": { "ro": "Nina Casian", "en": "Nina Casian poet", "fr": "Nina Casian" } },
      { "src": "assets/images/galerie/2/Nora Iuga.png", "titles": { "ro": "Nora Iuga", "en": "Nora Iuga", "fr": "Nora Iuga" } },
      { "src": "assets/images/galerie/2/Sanda Ghetie.jpg", "titles": { "ro": "Sanda Ghetie", "en": "Sanda Ghetie", "fr": "Sanda Ghetie" } },
      { "src": "assets/images/galerie/2/Sinnziana Batiste.jpg", "titles": { "ro": "Sinnziana Batiste", "en": "Sinnziana Batiste", "fr": "Sinnziana Batiste" } }
    ],
    "videos": []
  },
  "data03": {
    "titles": {
      "ro": "Schite de Calatorie America",
      "en": "Travel Sketches America",
      "fr": "Esquisses de voyage Amerique"
    },
    "descriptions": {
      "ro": "Schite de Calatorie America.",
      "en": "Travel Sketches America",
      "fr": "Esquisses de voyage Amerique"
    },
    "images": [
      { "src": "assets/images/galerie/3/05 Forme de relief la Bryce Comyon.png", "titles": { "ro": "Forme de relief la Bryce Comyon", "en": "Landforms at Bryce Comyon", "fr": "Formes de relief a Bryce Comyon" } },
      { "src": "assets/images/galerie/3/104 Capitoliu Washington.png", "titles": { "ro": "Capitoliu Washington", "en": "Washington Capitol", "fr": "Capitole de Washington" } },
      { "src": "assets/images/galerie/3/106 Marele Canion.png", "titles": { "ro": "Marele Canion", "en": "Grand Canyon", "fr": "Grand Canyon" } },
      { "src": "assets/images/galerie/3/110 Sala de concert ]n centrul Los Angeles.png", "titles": { "ro": "Sala de concert in centrul Los Angeles", "en": "Concert hall in downtown Los Angeles", "fr": "Salle de concert au centre de Los Angeles" } },
      { "src": "assets/images/galerie/3/111 O cladire extraordinara, sala de concere .png", "titles": { "ro": "O cladire extraordinara, sala de concerte", "en": "An extraordinary building, concert hall", "fr": "Un batiment extraordinaire, salle de concert" } },
      { "src": "assets/images/galerie/3/113 Localitate cu aspect olandez.png", "titles": { "ro": "Localitate cu aspect olandez", "en": "Town with a Dutch look", "fr": "Localite a aspect neerlandais" } },
      { "src": "assets/images/galerie/3/114Obelisca.png", "titles": { "ro": "Obelisca", "en": "Obelisk", "fr": "Obelisque" } },
      { "src": "assets/images/galerie/3/116 Hollyoad Mascatii si selele moarte.png", "titles": { "ro": "Hollywood, mascatii si stelele moarte", "en": "Hollywood, the masked and the dead stars", "fr": "Hollywood, les masques et les etoiles mortes" } },
      { "src": "assets/images/galerie/3/118 Broadway.png", "titles": { "ro": "Broadway", "en": "Broadway", "fr": "Broadway" } },
      { "src": "assets/images/galerie/3/119 Muzeul Metropolitan.png", "titles": { "ro": "Muzeul Metropolitan", "en": "Metropolitan Museum", "fr": "Musee Metropolitain" } },
      { "src": "assets/images/galerie/3/120 Galeria Nationala de Arta Washengton.png", "titles": { "ro": "Galeria Nationala de Arta Washington", "en": "National Gallery of Art Washington", "fr": "Galerie nationale d'art de Washington" } },
      { "src": "assets/images/galerie/3/121 hotelul Stanfors.png", "titles": { "ro": "Hotelul Stanfors", "en": "Stanfors Hotel", "fr": "Hotel Stanfors" } },
      { "src": "assets/images/galerie/3/13 Times Square New York.png", "titles": { "ro": "Times Square, New York", "en": "Times Square, New York", "fr": "Times Square, New York" } },
      { "src": "assets/images/galerie/3/128 Din geamul Feribotului Statuia Libertati.png", "titles": { "ro": "Din geamul feribotului, Statuia Libertatii", "en": "From the ferry window, the Statue of Liberty", "fr": "Depuis la fenetre du ferry, la Statue de la Liberte" } },
      { "src": "assets/images/galerie/3/129 Cantareti la malul Oceanului Pacific.png", "titles": { "ro": "Cantareti la malul Oceanului Pacific", "en": "Singers on the shore of the Pacific Ocean", "fr": "Chanteurs au bord de l'ocean Pacifique" } },
      { "src": "assets/images/galerie/3/130 Impresie la Bryce Canyon.png", "titles": { "ro": "Impresie la Bryce Canyon", "en": "Impression at Bryce Canyon", "fr": "Impression a Bryce Canyon" } },
      { "src": "assets/images/galerie/3/131 Schita la Beverly Hills.png", "titles": { "ro": "Schita la Beverly Hills", "en": "Sketch in Beverly Hills", "fr": "Esquisse a Beverly Hills" } },
      { "src": "assets/images/galerie/3/136 New York vazut de pe vapor.png", "titles": { "ro": "New York vazut de pe vapor", "en": "New York seen from the ferry", "fr": "New York vu depuis le ferry" } },
      { "src": "assets/images/galerie/3/139 Marele Canion Impresie.png", "titles": { "ro": "Marele Canion, impresie", "en": "Grand Canyon, impression", "fr": "Grand Canyon, impression" } },
      { "src": "assets/images/galerie/3/142 Crochiu in Times Square.png", "titles": { "ro": "Crochiu in Times Square", "en": "Sketch in Times Square", "fr": "Croquis a Times Square" } },
      { "src": "assets/images/galerie/3/145 Cascada Niagara.png", "titles": { "ro": "Cascada Niagara", "en": "Niagara Falls", "fr": "Chutes du Niagara" } },
      { "src": "assets/images/galerie/3/146 Vederea statuiei din spate.png", "titles": { "ro": "Vederea statuiei din spate", "en": "View of the statue from behind", "fr": "Vue de la statue de dos" } },
      { "src": "assets/images/galerie/3/147 vedere de pe vapor.png", "titles": { "ro": "Vedere de pe vapor", "en": "View from the ferry", "fr": "Vue depuis le ferry" } },
      { "src": "assets/images/galerie/3/15 Covorul rosu de la Hollywod.png", "titles": { "ro": "Covorul rosu de la Hollywood", "en": "The red carpet in Hollywood", "fr": "Le tapis rouge a Hollywood" } },
      { "src": "assets/images/galerie/3/16 Pereche de motocicliști la Bryce Canyon (II) S.U.A.png", "titles": { "ro": "Pereche de motociclisti la Bryce Canyon (II), S.U.A.", "en": "Pair of motorcyclists at Bryce Canyon (II), U.S.A.", "fr": "Couple de motocyclistes a Bryce Canyon (II), Etats-Unis" } },
      { "src": "assets/images/galerie/3/17 Pereche de motocicliști la Bryce Canyon (I) S.U.A.png", "titles": { "ro": "Pereche de motociclisti la Bryce Canyon (I), S.U.A.", "en": "Pair of motorcyclists at Bryce Canyon (I), U.S.A.", "fr": "Couple de motocyclistes a Bryce Canyon (I), Etats-Unis" } },
      { "src": "assets/images/galerie/3/22 Segoia cel ami mare si mai vechi copac din lume.png", "titles": { "ro": "Sequoia, cel mai mare si mai vechi copac din lume", "en": "Sequoia, the biggest and oldest tree in the world", "fr": "Sequoia, l'arbre le plus grand et le plus ancien du monde" } },
      { "src": "assets/images/galerie/3/25.Hollywood Teatru cu animale.png", "titles": { "ro": "Hollywood, teatru cu animale", "en": "Hollywood, theater with animals", "fr": "Hollywood, theatre avec animaux" } },
      { "src": "assets/images/galerie/3/31 Primitor de turisti din autocare costumat gangster California.png", "titles": { "ro": "Primitor de turisti din autocare, costumat gangster, California", "en": "Tour bus greeter dressed as a gangster, California", "fr": "Accueil des touristes en autocar, deguise en gangster, Californie" } },
      { "src": "assets/images/galerie/3/32 Hollywood Water World.png", "titles": { "ro": "Hollywood Water World", "en": "Hollywood Water World", "fr": "Hollywood Water World" } },
      { "src": "assets/images/galerie/3/44 Parcul Yosemite.png", "titles": { "ro": "Parcul Yosemite", "en": "Yosemite Park", "fr": "Parc Yosemite" } },
      { "src": "assets/images/galerie/3/51 Obeliscul Washington.png", "titles": { "ro": "Obeliscul Washington", "en": "Washington Obelisk", "fr": "Obelisque de Washington" } },
      { "src": "assets/images/galerie/3/53 Impresionanta Statui a Libertati.png", "titles": { "ro": "Impresionanta Statuie a Libertatii", "en": "The impressive Statue of Liberty", "fr": "L'impressionnante Statue de la Liberte" } },
      { "src": "assets/images/galerie/3/55 Crochiu cu obezi Washinthon D.C.png", "titles": { "ro": "Crochiu cu obezi, Washington D.C.", "en": "Sketch with obese figures, Washington D.C.", "fr": "Croquis avec des obeses, Washington D.C." } },
      { "src": "assets/images/galerie/3/67 Negresa.png", "titles": { "ro": "Negresa", "en": "Black woman", "fr": "Femme noire" } },
      { "src": "assets/images/galerie/3/85 New York orizont de pe vapor (4).png", "titles": { "ro": "New York, orizont de pe vapor (4)", "en": "New York skyline from the ferry (4)", "fr": "Horizon de New York depuis le ferry (4)" } },
      { "src": "assets/images/galerie/3/86 Satuia Libertati.png", "titles": { "ro": "Statuia Libertatii", "en": "Statue of Liberty", "fr": "Statue de la Liberte" } },
      { "src": "assets/images/galerie/3/87 New York orizont de pe vapor (5).png", "titles": { "ro": "New York, orizont de pe vapor (5)", "en": "New York skyline from the ferry (5)", "fr": "Horizon de New York depuis le ferry (5)" } },
      { "src": "assets/images/galerie/3/96 Mirositorul de droguri (1).png", "titles": { "ro": "Mirositorul de droguri (1)", "en": "Drug sniffer (1)", "fr": "Renifleur de drogue (1)" } }
    ],
    "videos": []
  },
  "data04": {
    "titles": {
      "ro": "Schite de Calatorie Santorini",
      "en": "Travel Sketches Santorini",
      "fr": "Esquisses de voyage Santorini"
    },
    "descriptions": {
      "ro": "Schite de Calatorie Santorini.",
      "en": "Travel Sketches Santorini.",
      "fr": "Esquisses de voyage Santorini."
    },
    "images": [
      { "src": "assets/images/galerie/4/Fira, Santorini.png", "titles": { "ro": "Fira, Santorini", "en": "Fira, Santorini", "fr": "Fira, Santorini" } },
      { "src": "assets/images/galerie/4/Pe vapor spre Santorini.png", "titles": { "ro": "Pe vapor spre Santorini", "en": "On the ferry to Santorini", "fr": "Sur le ferry vers Santorini" } }
    ],
    "videos": []
  },
  "data05": {
    "titles": {
      "ro": "Schite de Calatorie Ierusalim",
      "en": "Travel Sketches Jerusalem",
      "fr": "Esquisses de voyage Jerusalem"
    },
    "descriptions": {
      "ro": "Schite de Calatorie Ierusalim.",
      "en": "Travel Sketches Jerusalem.",
      "fr": "Esquisses de voyage Jerusalem."
    },
    "images": [
      { "src": "assets/images/galerie/5/Bilete la Zidul Plangeri 25,0 x35,0 cm.png", "titles": { "ro": "Bilete la Zidul Plangerii", "en": "Notes at the Wailing Wall", "fr": "Billets au Mur des Lamentations" } },
      { "src": "assets/images/galerie/5/crochiu la zidul plangeri 2 25,0 x35,0 cm.png", "titles": { "ro": "Crochiu la Zidul Plangerii 2", "en": "Sketch at the Wailing Wall 2", "fr": "Croquis au Mur des Lamentations 2" } },
      { "src": "assets/images/galerie/5/cupola alba 25,0 x 32,0 cm.png", "titles": { "ro": "Cupola alba", "en": "White dome", "fr": "Coupole blanche" } },
      { "src": "assets/images/galerie/5/Ierusalim.png", "titles": { "ro": "Ierusalim", "en": "Jerusalem", "fr": "Jerusalem" } },
      { "src": "assets/images/galerie/5/La zidul plangeri  25,0 x35,0 cm.png", "titles": { "ro": "La Zidul Plangerii", "en": "At the Wailing Wall", "fr": "Au Mur des Lamentations" } },
      { "src": "assets/images/galerie/5/Maslinul din Ghetimani 25,0x35,0cm.png", "titles": { "ro": "Maslinul din Ghetimani", "en": "The Olive Tree of Gethsemane", "fr": "L'olivier de Gethsemani" } },
      { "src": "assets/images/galerie/5/MONUMENTUL iN MEMORIA LUI JOHN FITZGERALD KENNEDY 31,5 x 24,0 cm.png", "titles": { "ro": "Monumentul in memoria lui John Fitzgerald Kennedy", "en": "Monument in memory of John Fitzgerald Kennedy", "fr": "Monument a la memoire de John Fitzgerald Kennedy" } }
    ],
    "videos": []
  },
  "data06": {
    "titles": {
      "ro": "Schite de Calatorie Creta",
      "en": "Travel Sketches Crete",
      "fr": "Esquisses de voyage Crete"
    },
    "descriptions": {
      "ro": "Schite de Calatorie Creta.",
      "en": "Travel Sketches Crete.",
      "fr": "Esquisses de voyage Crete."
    },
    "images": [
      { "src": "assets/images/galerie/6/Amurg la Hersonissos • Dusk at Hersonissos.jpg", "titles": { "ro": "Amurg la Hersonissos", "en": "Dusk at Hersonissos", "fr": "Crepuscule a Hersonissos" } },
      { "src": "assets/images/galerie/6/Anogia • Anogia.jpg", "titles": { "ro": "Anogia", "en": "Anogia", "fr": "Anogia" } },
      { "src": "assets/images/galerie/6/Înserare la Hersonissos • Sunset at Hersonissos.jpg", "titles": { "ro": "Inserare la Hersonissos", "en": "Sunset at Hersonissos", "fr": "Coucher de soleil a Hersonissos" } }
    ],
    "videos": []
  },
  "data07": {
    "titles": {
      "ro": "Schite de Calatorie China",
      "en": "Travel Sketches China",
      "fr": "Esquisses de voyage Chine"
    },
    "descriptions": {
      "ro": "Schite de Calatorie China.",
      "en": "Travel Sketches China.",
      "fr": "Esquisses de voyage Chine."
    },
    "images": [
      { "src": "assets/images/galerie/7/20171018_151438_HDR 2.png" },
      { "src": "assets/images/galerie/7/20171018_151438_HDR 20.png" },
      { "src": "assets/images/galerie/7/20171018_151438_HDR 5.png" },
      { "src": "assets/images/galerie/7/20171018_151438_HDR 7.png" },
      { "src": "assets/images/galerie/7/20171018_151438_HDR gri.png" },
      { "src": "assets/images/galerie/7/20171018_151655_HDR.png" },
      { "src": "assets/images/galerie/7/20171018_151705_HDR.png" },
      { "src": "assets/images/galerie/7/20171018_151731_HDR.png" },
      { "src": "assets/images/galerie/7/20171018_151753_HDR.png" },
      { "src": "assets/images/galerie/7/20171018_151800_HDR.png" },
      { "src": "assets/images/galerie/7/20171018_151837_HDR.png" },
      { "src": "assets/images/galerie/7/20171018_151849_HDR.png" },
      { "src": "assets/images/galerie/7/20171018_151911_HDR.png" },
      { "src": "assets/images/galerie/7/20171018_152001_HDR.png" },
      { "src": "assets/images/galerie/7/20171018_152010_HDR.png" },
      { "src": "assets/images/galerie/7/20171018_152043_HDR.png" },
      { "src": "assets/images/galerie/7/20171018_152212_HDR.png" },
      { "src": "assets/images/galerie/7/20171018_152221_HDR.png" },
      { "src": "assets/images/galerie/7/20171018_152249_HDR.png" },
      { "src": "assets/images/galerie/7/20171018_152332_HDR.png" },
      { "src": "assets/images/galerie/7/20171018_152402_HDR.png" },
      { "src": "assets/images/galerie/7/a02.png" },
      { "src": "assets/images/galerie/7/a03.png" },
      { "src": "assets/images/galerie/7/a09.png" },
      { "src": "assets/images/galerie/7/b1.png" },
      { "src": "assets/images/galerie/7/b2.png" },
      { "src": "assets/images/galerie/7/b4.png" },
      { "src": "assets/images/galerie/7/b5.png" },
      { "src": "assets/images/galerie/7/b7.png" },
      { "src": "assets/images/galerie/7/c3.png" },
      { "src": "assets/images/galerie/7/c9.png" }
    ],
    "videos": []
  },
  "data08": {
    "titles": {
      "ro": "Schite de Calatorie Spre Nord",
      "en": "Travel Sketches To the North",
      "fr": "Esquisses de voyage Vers le Nord"
    },
    "descriptions": {
      "ro": "Schite de Calatorie Spre Nord.",
      "en": "Travel Sketches To the North.",
      "fr": "Esquisses de voyage Vers le Nord."
    },
    "images": [
      { "src": "assets/images/galerie/8/Berger Norvegia Hârtie Daler Rowney 25,5x17,7cm 31 iulie 2011.png", "titles": { "ro": "Berger, Norvegia", "en": "Berger, Norway", "fr": "Berger, Norvege" } },
      { "src": "assets/images/galerie/8/Biciclete in Copengaga 14.8x21.0cm 3 august 2011.jpg", "titles": { "ro": "Biciclete in Copenhaga", "en": "Bicycles in Copenhagen", "fr": "Velos a Copenhague" } },
      { "src": "assets/images/galerie/8/Candelabru de aur și sticlă de murană la Ernitage Rusia Hârtie Daler Rowney  15x20,2cm 20 iulie 2011.png", "titles": { "ro": "Candelabru de aur si sticla de Murano la Ermitaj, Rusia", "en": "Golden chandelier and Murano glass at the Hermitage, Russia", "fr": "Lustre dore et verre de Murano a l'Ermitage, Russie" } },
      { "src": "assets/images/galerie/8/Cracovia Polonia Hârtie Daler Rowney  20,2x14,4cm 15iulie 2011.png", "titles": { "ro": "Cracovia, Polonia", "en": "Krakow, Poland", "fr": "Cracovie, Pologne" } },
      { "src": "assets/images/galerie/8/Dresda 6august 2011 Hârtie speciala 14.8x21.0cm.jpg", "titles": { "ro": "Dresda", "en": "Dresden", "fr": "Dresde" } },
      { "src": "assets/images/galerie/8/Drumul Atlanticului Hârtie Daler Rowney 17,7x13,0cm 29 iulie 2011.png", "titles": { "ro": "Drumul Atlanticului", "en": "Atlantic Road", "fr": "Route de l'Atlantique" } },
      { "src": "assets/images/galerie/8/Hotel Claron Norvegia  Hârtie offset 14.8x21.0cm 29 iulie 2012.jpg", "titles": { "ro": "Hotel Claron, Norvegia", "en": "Hotel Claron, Norway", "fr": "Hotel Claron, Norvege" } },
      { "src": "assets/images/galerie/8/Insulele Lofoten in asteptarea Feribotului  Norvegia Hârtie specială 14,5x6xcm 26 iulie 2011.png", "titles": { "ro": "Insulele Lofoten, in asteptarea feribotului, Norvegia", "en": "Lofoten Islands, waiting for the ferry, Norway", "fr": "Iles Lofoten, en attendant le ferry, Norvege" } },
      { "src": "assets/images/galerie/8/Insulele Lofoten Norvegia Hârtie specială 23,0x14.png", "titles": { "ro": "Insulele Lofoten, Norvegia", "en": "Lofoten Islands, Norway", "fr": "Iles Lofoten, Norvege" } },
      { "src": "assets/images/galerie/8/Marea catedrala Upsala Suedia 2 august 2011 21x14,5cm Hârtie specială.png", "titles": { "ro": "Marea catedrala, Uppsala, Suedia", "en": "The great cathedral, Uppsala, Sweden", "fr": "La grande cathedrale, Uppsala, Suede" } },
      { "src": "assets/images/galerie/8/Mica sirenă Coopenhaga Danemarca august 2011.jpg", "titles": { "ro": "Mica sirena, Copenhaga, Danemarca", "en": "The Little Mermaid, Copenhagen, Denmark", "fr": "La Petite Sirene, Copenhague, Danemark" } },
      { "src": "assets/images/galerie/8/Muzeul Ernitage 2 Sankt Petersburg Rusia 20 iulie 2011 Hârtie Daler Rowney 21,0x14,8cm.png", "titles": { "ro": "Muzeul Ermitaj 2, Sankt Petersburg, Rusia", "en": "Hermitage Museum 2, Saint Petersburg, Russia", "fr": "Musee de l'Ermitage 2, Saint-Petersbourg, Russie" } },
      { "src": "assets/images/galerie/8/Muzeul Ernitage Sankt Petersburg Rusia 20 iulie 2011 Hârtie Daler Rowney 21,0x14,8cm.png", "titles": { "ro": "Muzeul Ermitaj, Sankt Petersburg, Rusia", "en": "Hermitage Museum, Saint Petersburg, Russia", "fr": "Musee de l'Ermitage, Saint-Petersbourg, Russie" } },
      { "src": "assets/images/galerie/8/Norvegia Hârtie special 20 iulie 2011 23x14,6cm In asteptarea Feribotului.png", "titles": { "ro": "Norvegia, in asteptarea feribotului", "en": "Norway, waiting for the ferry", "fr": "Norvege, en attendant le ferry" } },
      { "src": "assets/images/galerie/8/Ornamente aurite la palatul tarilor Sankt Petersburg Rusia 20 iulie 2011 Hârtie Daler Rowney 20,2x14,4cm.png", "titles": { "ro": "Ornamente aurite la palatul tarilor, Sankt Petersburg, Rusia", "en": "Golden ornaments at the Tsars' palace, Saint Petersburg, Russia", "fr": "Ornements dores au palais des tsars, Saint-Petersbourg, Russie" } },
      { "src": "assets/images/galerie/8/Ornamente aurite si draperie la Țarskori Sankt Petersburg Hârtie Daler Rowney 14,3x20cm 20 iulie 2011.png", "titles": { "ro": "Ornamente aurite si draperie la Tsarskoye, Sankt Petersburg", "en": "Golden ornaments and drapery at Tsarskoye, Saint Petersburg", "fr": "Ornements dores et draperie a Tsarskoie, Saint-Petersbourg" } },
      { "src": "assets/images/galerie/8/Palatul aurit Sankt Petersburg 20 iulie 2011 20,2x14,4cm Hârtie Daler Rowney.png", "titles": { "ro": "Palatul aurit, Sankt Petersburg", "en": "The gilded palace, Saint Petersburg", "fr": "Le palais dore, Saint-Petersbourg" } },
      { "src": "assets/images/galerie/8/Pești la uscat Norvegia 26 iulie 2011 Hârtie italiană 23x14,6cm.png", "titles": { "ro": "Pesti la uscat, Norvegia", "en": "Drying fish, Norway", "fr": "Poissons sechant, Norvege" } },
      { "src": "assets/images/galerie/8/Piața Ermitage Rusia 20 iulie 2011 Hârtie Daler Rowney 20,2x15cm.png", "titles": { "ro": "Piata Ermitaj, Rusia", "en": "Hermitage Square, Russia", "fr": "Place de l'Ermitage, Russie" } },
      { "src": "assets/images/galerie/8/Ploaie la Tromso Norvegia Hartie Daler Rowney 35,5x25,4cm 25 iulie 2011.png", "titles": { "ro": "Ploaie la Tromso, Norvegia", "en": "Rain in Tromso, Norway", "fr": "Pluie a Tromso, Norvege" } },
      { "src": "assets/images/galerie/8/Reni șezând Findlanda Hârte italiană  24 iulie 2011 23x14,6cm.png", "titles": { "ro": "Reni sezand, Finlanda", "en": "Resting reindeer, Finland", "fr": "Rennes assis, Finlande" } },
      { "src": "assets/images/galerie/8/Rusia Ernitage  20 iulie 2011 20,5x15mm Hârtie specială.png", "titles": { "ro": "Rusia, Ermitaj", "en": "Russia, Hermitage", "fr": "Russie, Ermitage" } },
      { "src": "assets/images/galerie/8/Sankt Petersburg Rusia 20 iulie 2011 Hârtie Daler Rowney 21,0x14,8cm.png", "titles": { "ro": "Sankt Petersburg, Rusia", "en": "Saint Petersburg, Russia", "fr": "Saint-Petersbourg, Russie" } },
      { "src": "assets/images/galerie/8/Statuia lui Hermes si ornament cu delfini Oslo Hârtie Daler Rowney 25,3x17,6 1 august 2011.png", "titles": { "ro": "Statuia lui Hermes si ornament cu delfini, Oslo", "en": "Statue of Hermes and dolphin ornament, Oslo", "fr": "Statue d'Hermes et ornement aux dauphins, Oslo" } },
      { "src": "assets/images/galerie/8/statuie in Sankt Petersburg 20 iulie 2011 Hârtie Daler Rowney 20,2x14,4.png", "titles": { "ro": "Statuie in Sankt Petersburg", "en": "Statue in Saint Petersburg", "fr": "Statue a Saint-Petersbourg" } },
      { "src": "assets/images/galerie/8/Turla de biserica Dresda 6august 2011 Hârtie speciala 14.8x21.0cm.jpg", "titles": { "ro": "Turla de biserica, Dresda", "en": "Church spire, Dresden", "fr": "Clocher d'eglise, Dresde" } },
      { "src": "assets/images/galerie/8/Turmă de reni Finlanda 24 iulie 2011 Hârtie italiană 23x14,6cm.png", "titles": { "ro": "Turma de reni, Finlanda", "en": "Reindeer herd, Finland", "fr": "Troupeau de rennes, Finlande" } }
    ],
    "videos": []
  }
};



// Funcția de bază pentru generarea listei 
function genereazaListaExpozitii(data, lang) {
  const listaExpozitii = document.getElementById('lista-expozitii');

  if (!listaExpozitii) {
    console.error("Elementul cu ID-ul 'lista-expozitii' nu a fost găsit.");
    return;
  }
  listaExpozitii.innerHTML = '';
  const titlu = document.getElementById('lista-expozitii-titlu');
  if (!titlu) {
    console.error("Elementul cu ID-ul 'lista-expozitii-titlu' nu a fost găsit.");
    return;
  }
  titlu.innerHTML = data[lang].titlu;

  data[lang].events.forEach(item => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<strong>${item.year}</strong> – ${item.event}.`;
    listaExpozitii.appendChild(listItem);
  });
}

function genereazaListaBooks(data, lang) {
  const listaCarti = document.getElementById('lista-carti');
  if (!listaCarti) {
    console.error("Elementul cu ID-ul 'lista-carti' nu a fost găsit.");
    return;
  }

  listaCarti.innerHTML = '';
  const titlu = document.getElementById('lista-carti-titlu');
  if (!titlu) {
    console.error("Elementul cu ID-ul 'lista-carti-titlu' nu a fost găsit.");
    return;
  }
  titlu.innerHTML = data[lang].titlu;
  data[lang].items.forEach(item => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<strong>${item.titlu}</strong> ${item.detaliu}.`;
    listaCarti.appendChild(listItem);
  });
}

function genereazaCitate(data, lang) {
  const citate = document.getElementById('citate');
  if (!citate) {
    console.error("Elementul cu ID-ul 'citate' nu a fost găsit.");
    return;
  }
  citate.innerHTML = `<h1>Aurelia Stoie Mărginean</h1>${data[lang].map(item => `<p>${item}</p>`).join('')}`;
}


function genereazaMenu(data, lang) {
  const home = document.getElementById('menu_home');
  if (!home) {
    console.error("Elementul cu ID-ul 'menu_home' nu a fost găsit.");
    return;
  }
  const exhibitions = document.getElementById('menu_exhibitions');
  if (!exhibitions) {
    console.error("Elementul cu ID-ul 'menu_exhibitions' nu a fost găsit.");
    return;
  }
  const books = document.getElementById('menu_books');
  if (!books) {
    console.error("Elementul cu ID-ul 'menu_books' nu a fost găsit.");
    return;
  }
  const gallery = document.getElementById('menu_gallery');
  if (!gallery) {
    console.error("Elementul cu ID-ul 'menu_gallery' nu a fost găsit.");
    return;
  }
  const lang_data = data[lang];
  home.innerHTML = lang_data.home;
  exhibitions.innerHTML = lang_data.exhibitions;
  books.innerHTML = lang_data.books;
  gallery.innerHTML = lang_data.gallery;
}

function genereazaGalerie(data, lang) {
  const galerie = document.getElementById('galerie');
  if (!galerie) {
    console.error("Elementul cu ID-ul 'galerie' nu a fost găsit.");
    return;
  }
  galerie.innerHTML = '';
  const row = document.createElement('div');
  row.className = 'row';

  for (const key in data) {
    const entry = data[key];
    const col = document.createElement('div');
    col.className = 'col-md-4 col-sm-6 mb-4';

    const card = document.createElement('div');
    card.className = 'card cursor-pointer gallery-card';
    card.style.cursor = 'pointer';
    card.onclick = (e) => {
      e.preventDefault();
      window.location.hash = 'galery-' + key;
    };

    const img = document.createElement('img');
    img.src = getMediaSrc(entry.images[0]);
    img.className = 'card-img-top';
    img.alt = entry.titles[lang];
    img.style.height = '200px';
    img.style.objectFit = 'cover';

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    cardBody.innerHTML = `<h5 class="card-title">${entry.titles[lang]}</h5>`;

    card.appendChild(img);
    card.appendChild(cardBody);
    col.appendChild(card);
    row.appendChild(col);
  }

  galerie.appendChild(row);
}

function genereazaGaleriDetail(key, data, lang) {
  const galerie = document.getElementById('galerie');
  if (!galerie) {
    console.error("Elementul cu ID-ul 'galerie' nu a fost găsit.");
    return;
  }

  const entry = data[key];
  galerie.innerHTML = '';

  // Title
  const title = document.createElement('h2');
  title.innerHTML = entry.titles[lang];
  galerie.appendChild(title);

  // Description
  if (entry.descriptions && entry.descriptions[lang]) {
    const description = document.createElement('p');
    description.innerHTML = entry.descriptions[lang];
    description.style.fontSize = '0.95em';
    description.className = 'text-muted mb-4';
    galerie.appendChild(description);
  }

  // Images
  const imagesContainer = document.createElement('div');
  imagesContainer.className = 'row';

  entry.images.forEach(image => {
    const col = document.createElement('div');
    col.className = 'col-md-4 mb-4';
    const mediaWrapper = document.createElement('div');
    mediaWrapper.className = 'd-flex flex-column gap-2';
    const imgElement = document.createElement('img');
    imgElement.dataset.src = getMediaSrc(image);
    imgElement.loading = 'lazy';
    imgElement.decoding = 'async';
    imgElement.className = 'img-fluid';
    imgElement.alt = getTranslatedMediaTitle(image, lang) || '';
    mediaWrapper.appendChild(imgElement);

    const imageTitle = createMediaTitleElement(image, lang);
    if (imageTitle) {
      mediaWrapper.appendChild(imageTitle);
    }

    col.appendChild(mediaWrapper);
    imagesContainer.appendChild(col);
  });

  galerie.appendChild(imagesContainer);
  initializeGalleryLazyLoading(imagesContainer);

  // Videos
  if (entry.videos && entry.videos.length > 0) {
    const videosContainer = document.createElement('div');
    videosContainer.className = 'row';

    entry.videos.forEach(video => {
      const col = document.createElement('div');
      col.className = 'col-md-4 mb-4';

      const mediaWrapper = document.createElement('div');
      mediaWrapper.className = 'd-flex flex-column gap-2';

      const videoElement = document.createElement('video');
      videoElement.controls = true;
      videoElement.className = 'img-fluid';

      const sourceElement = document.createElement('source');
      sourceElement.src = getMediaSrc(video);
      sourceElement.type = 'video/mp4';
      videoElement.appendChild(sourceElement);

      mediaWrapper.appendChild(videoElement);

      const videoTitle = createMediaTitleElement(video, lang);
      if (videoTitle) {
        mediaWrapper.appendChild(videoTitle);
      }

      col.appendChild(mediaWrapper);
      videosContainer.appendChild(col);
    });

    galerie.appendChild(videosContainer);
  }
}

function initializeGalleryLazyLoading(container) {
  const lazyImages = container.querySelectorAll('img[data-src]');

  if (!lazyImages.length) {
    return;
  }

  const loadImage = (imgElement) => {
    if (!imgElement.dataset.src) {
      return;
    }

    imgElement.src = imgElement.dataset.src;
    imgElement.removeAttribute('data-src');
  };

  if (!('IntersectionObserver' in window)) {
    lazyImages.forEach(loadImage);
    return;
  }

  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }

      loadImage(entry.target);
      currentObserver.unobserve(entry.target);
    });
  }, {
    rootMargin: '200px 0px',
    threshold: 0.01
  });

  lazyImages.forEach(imgElement => observer.observe(imgElement));
}

function getMediaSrc(mediaItem) {
  if (typeof mediaItem === 'string') {
    return mediaItem;
  }

  return mediaItem?.src || '';
}

function getTranslatedMediaTitle(mediaItem, lang) {
  if (!mediaItem || typeof mediaItem === 'string' || !mediaItem.titles) {
    return '';
  }

  return mediaItem.titles[lang] || mediaItem.titles.ro || mediaItem.titles.en || mediaItem.titles.fr || '';
}

function createMediaTitleElement(mediaItem, lang) {
  const mediaTitle = getTranslatedMediaTitle(mediaItem, lang);

  if (!mediaTitle) {
    return null;
  }

  const titleElement = document.createElement('p');
  titleElement.className = 'text-muted mb-0';
  titleElement.textContent = mediaTitle;
  return titleElement;
}

function setLanguage(lang) {
  localStorage.setItem('language', lang);
}

// Citirea limbii
function getLanguage() {
  return localStorage.getItem('language');
}

function getLang() {
  const storedLang = getLanguage();
  if (supportedLang[storedLang]) return storedLang;
  const userLang = navigator.language || navigator.userLanguage;
  let langCode = userLang.split('-')[0].toLowerCase() || 'ro';
  if (!supportedLang[langCode]) langCode = 'ro';
  return langCode;
}

function updateSelectLang(defaultLang) {
  const elements = document.querySelectorAll('.language-option');
  const elementsArray = Array.from(elements);
  for (let element of elementsArray) {
    const lang = element.getAttribute('data-lang');
    if (lang === defaultLang) {
      const flagSvg = element.querySelector('svg').innerHTML;
      document.getElementById('flagCurrent').innerHTML = flagSvg;
      break;
    }
  }

  elements.forEach(option => {
    option.addEventListener('click', function (e) {
      e.preventDefault();
      const lang = this.getAttribute('data-lang');

      // Schimbăm SVG-ul curent în meniu
      const flagSvg = this.querySelector('svg').innerHTML;
      document.getElementById('flagCurrent').innerHTML = flagSvg;
      setLanguage(lang.toLowerCase());
      // Eveniment la schimbarea limbii
      incarcaDate(lang.toLowerCase());
      showSection(currentSection);
      // Refresh gallery with new language if on gallery detail
      const hash = window.location.hash.substring(1);
      if (hash.startsWith('galery-')) {
        const key = hash.replace('galery-', '');
        if (gallery[key]) {
          genereazaGaleriDetail(key, gallery, lang.toLowerCase());
        }
      }

      // Închidem dropdown-ul
      const dropdown = bootstrap.Dropdown.getInstance(document.getElementById('currentLanguage'));
      if (dropdown) dropdown.hide();
    });
  });
}
// Funcția asincronă care folosește fetch
function incarcaDate(lang) {
  genereazaMenu(menu, lang)
  genereazaCitate(citate, lang)
  genereazaListaExpozitii(expozitii, lang);
  genereazaListaBooks(books, lang);
  handleGalleryHash(gallery, lang);
}

function handleGalleryHash(data, lang) {
  const hash = window.location.hash.substring(1);
  if (hash.startsWith('galery-')) {
    const key = hash.replace('galery-', '');
    if (data[key]) {
      genereazaGaleriDetail(key, data, lang);
    } else {
      genereazaGalerie(data, lang);
    }
  } else {
    genereazaGalerie(data, lang);
  }
}
function showSection(target) {
  // Hide all sections
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.style.display = 'none';
  });
  // Show the target section
  const targetSection = document.querySelector(target);
  if (targetSection) {
    targetSection.style.display = 'block';
  }
  currentSection = target;

  // Scroll to top
  window.scrollTo(0, 0);

  // Update active menu
  const menuLinks = document.querySelectorAll('.nav-link');
  menuLinks.forEach(link => {
    link.classList.remove('active');
  });
  const activeLink = document.querySelector(`[data-target="${target}"]`);
  if (activeLink) {
    activeLink.classList.add('active');
  }
}
function documentLoaded() {
  const lang = getLang();
  updateSelectLang(lang)
  incarcaDate(lang);

  // Setup menu click handlers to change hash
  const menuLinks = document.querySelectorAll('.nav-link[data-target]');
  menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.getAttribute('data-target').replace('#', '');
      window.location.hash = target;
    });
  });

  // Check initial hash
  const hash = window.location.hash.substring(1);
  if (hash.startsWith('galery-')) {
    showSection('#activitate');
    handleGalleryHash(gallery, lang);
  } else if (hash === 'home' || hash === 'expozitii' || hash === 'albume' || hash === 'activitate') {
    showSection('#' + hash);
  } else {
    showSection('#home');
  }

  // Listen for hash changes
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.substring(1);
    const lang = getLang();

    // Check if it's a gallery detail
    if (hash.startsWith('galery-')) {
      showSection('#activitate');
      const key = hash.replace('galery-', '');
      if (gallery[key]) {
        genereazaGaleriDetail(key, gallery, lang);
      } else {
        genereazaGalerie(gallery, lang);
      }
    } else if (hash === 'activitate') {
      showSection('#activitate');
      genereazaGalerie(gallery, lang);  // Reîncarcă meniu galerie
    } else if (hash === 'home' || hash === 'expozitii' || hash === 'albume') {
      showSection('#' + hash);
    }
  });
}


// 6. Rulăm funcția principală după ce DOM-ul este complet încărcat
document.addEventListener('DOMContentLoaded', documentLoaded);
