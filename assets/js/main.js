const supportedLang = {
  ro: true,
  en: true,
  fr: true,
}

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
  titlu.innerHTML = '';
  titlu.appendChild(document.createTextNode(data[lang].titlu));

  data[lang].events.forEach(item => {
    const listItem = document.createElement('li');
    const yearStrong = document.createElement('strong');

    // Asigură-te că datele JSON sunt coerente cu structura așteptată
    yearStrong.appendChild(document.createTextNode(item.year));

    listItem.appendChild(yearStrong);
    // Observație: textul este injectat direct pentru a include separatorul și punctul
    listItem.appendChild(document.createTextNode(` – ${item.event}.`));

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
  titlu.innerHTML = '';
  titlu.appendChild(document.createTextNode(data[lang].titlu));
  data[lang].items.forEach(item => {
    const listItem = document.createElement('li');
    const yearStrong = document.createElement('strong');

    // Asigură-te că datele JSON sunt coerente cu structura așteptată
    yearStrong.appendChild(document.createTextNode(item.titlu));

    listItem.appendChild(yearStrong);
    // Observație: textul este injectat direct pentru a include separatorul și punctul
    listItem.appendChild(document.createTextNode(` ${item.detaliu}.`));

    listaCarti.appendChild(listItem);
  });
}

function genereazaCitate(data, lang) {
  const citate = document.getElementById('citate');
  if (!citate) {
    console.error("Elementul cu ID-ul 'citate' nu a fost găsit.");
    return;
  }
  citate.innerHTML = '';
  const titlu = document.createElement('h1');
  titlu.appendChild(document.createTextNode('Aurelia Stoie Mărginean'));
  citate.appendChild(titlu);
  data[lang].forEach(item => {
    const citat = document.createElement('p');
    citat.appendChild(document.createTextNode(item));
    citate.appendChild(citat);
  });
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
  home.innerHTML = '';
  exhibitions.innerHTML = '';
  books.innerHTML = '';
  gallery.innerHTML = '';
  home.appendChild(document.createTextNode(lang_data.home));
  exhibitions.appendChild(document.createTextNode(lang_data.exhibitions));
  books.appendChild(document.createTextNode(lang_data.books));
  gallery.appendChild(document.createTextNode(lang_data.gallery));
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
}
function documentLoaded() {
  const lang = getLang();
  updateSelectLang(lang)
  incarcaDate(lang);
}


// 6. Rulăm funcția principală după ce DOM-ul este complet încărcat
document.addEventListener('DOMContentLoaded', documentLoaded);