// ===== DATA ===== 

const CATEGORIES = [ 

  { id: "all",        label: "Tutto",       icon: "✦",  subtitle: "Ogni occasione" }, 

  { id: "ristorante", label: "Ristoranti",  icon: "🍝", subtitle: "Pranzo e cena" }, 

  { id: "bar",        label: "Bar",         icon: "☕", subtitle: "Drink e pause" }, 

  { id: "gelateria",  label: "Gelaterie",   icon: "🍨", subtitle: "Fresco e goloso" }, 

  { id: "pasticceria",label: "Pasticcerie", icon: "🧁", subtitle: "Dolci e colazioni" } 

]; 

 

const IDEA_MAP = { 

  romantico: ["romantico", "coppia", "cena romantica"], 

  veloce:    ["veloce", "rapido", "al volo"], 

  gelato:    ["gelato", "dolce", "dessert"], 

  brunch:    ["brunch", "colazione", "caffè"], 

  gruppo:    ["gruppo", "amici", "conviviale"], 

  economico: ["economico", "low cost", "cheap"], 

  vicino:    ["vicino", "near", "around me"] 

}; 

 

const VENUES = [ 

  { 

    id: 1, name: "Trattoria da Mario", category: "ristorante", city: "Milano", 

    address: "Via Savona 18, Milano", phone: "02 5551 2044", hours: "12:00 - 15:00 · 19:00 - 23:30", 

    price: "€€", rating: 4.8, atmosphere: "romantico", coords: { lat: 45.4559, lng: 9.1685 }, 

    website: "https://www.google.com/search?q=Trattoria+da+Mario+Milano", menuUrl: null, 

    description: "Cucina italiana tradizionale con paste fresche, arrosti lenti e un'atmosfera calda da quartiere.", 

    fullDescription: "Trattoria da Mario è il classico posto dove torni per un piatto ben fatto e un'accoglienza sincera. Il menu gira intorno a ricette italiane senza fronzoli, porzioni generose e materie prime curate. Perfetto per una cena rilassata, per chi cerca gusto autentico e un ambiente conviviale.", 

    reviewPreview: "Carbonara cremosa e servizio gentilissimo, perfetto per una cena senza pensieri.", 

    reviews: [ 

      { author: "Giulia",  text: "Ambiente intimo, pasta fresca e tiramisù da ricordare." }, 

      { author: "Lorenzo", text: "Prezzi corretti, porzioni abbondanti e ottima carta dei vini." }, 

      { author: "Marta",   text: "Uno di quei posti semplici ma fatti davvero bene." } 

    ], 

    galleryEmoji: ["🍝","🍷","🏡"], accent: ["#ff6b00","#ffb067"], views: 320, favoritesCount: 87 

  }, 

  { 

    id: 2, name: "Bar Sport Navigli", category: "bar", city: "Milano", 

    address: "Ripa di Porta Ticinese 42, Milano", phone: "02 4800 1999", hours: "07:00 - 01:00", 

    price: "€", rating: 4.2, atmosphere: "informale", coords: { lat: 45.4508, lng: 9.1734 }, 

    website: "https://www.google.com/search?q=Bar+Sport+Navigli+Milano", menuUrl: null, 

    description: "Cocktail facili, caffetteria continua e tavolini esterni ideali per l'aperitivo.", 

    fullDescription: "Bar Sport Navigli unisce ritmo urbano e semplicità. Al mattino caffè e brioche, la sera spritz, taglieri e una selezione di cocktail lineari ma ben eseguiti. La posizione lo rende ideale per una sosta veloce o per un aperitivo informale con amici.", 

    reviewPreview: "Spritz equilibrato e tavolini perfetti per guardare il via vai sui Navigli.", 

    reviews: [ 

      { author: "Sara",   text: "Ottimo per una pausa rapida, staff super veloce." }, 

      { author: "Davide", text: "Locale easy, aperitivo piacevole e prezzi onesti." }, 

      { author: "Noemi",  text: "Colazione buona, soprattutto il cappuccino." } 

    ], 

    galleryEmoji: ["☕","🍹","🌆"], accent: ["#ff8f3d","#ffd3a6"], views: 210, favoritesCount: 52 

  }, 

  { 

    id: 3, name: "Gelateria Dolce Vita", category: "gelateria", city: "Roma", 

    address: "Via Cola di Rienzo 112, Roma", phone: "06 9023 7741", hours: "11:00 - 00:30", 

    price: "€", rating: 4.9, atmosphere: "veloce", coords: { lat: 41.9098, lng: 12.4624 }, 

    website: "https://www.google.com/search?q=Gelateria+Dolce+Vita+Roma", menuUrl: null, 

    description: "Gelato artigianale dai gusti classici e stagionali, cremoso e bilanciato.", 

    fullDescription: "Gelateria Dolce Vita punta su consistenze pulite, ingredienti italiani e gusti leggibili. Pistacchio, nocciola e fondente sono i protagonisti, ma ogni settimana arrivano proposte stagionali. Ideale dopo cena o per una pausa pomeridiana con qualcosa di fresco ma ricercato.", 

    reviewPreview: "Pistacchio intenso e cono fragrante, tra i migliori provati a Roma.", 

    reviews: [ 

      { author: "Elena",  text: "Gelato setoso, ingredienti davvero percepibili." }, 

      { author: "Fabio",  text: "File veloci e porzioni giuste, gran bel posto." }, 

      { author: "Chiara", text: "Nocciola e fondente promossi a pieni voti." } 

    ], 

    galleryEmoji: ["🍦","🍨","🌸"], accent: ["#ff6b00","#ffe0c2"], views: 410, favoritesCount: 115 

  }, 

  { 

    id: 4, name: "Pasticceria Siciliana Aurora", category: "pasticceria", city: "Torino", 

    address: "Corso Vittorio Emanuele II 74, Torino", phone: "011 470 8892", hours: "06:30 - 20:30", 

    price: "€€", rating: 4.7, atmosphere: "colazione", coords: { lat: 45.0632, lng: 7.6812 }, 

    website: "https://www.google.com/search?q=Pasticceria+Siciliana+Aurora+Torino", menuUrl: null, 

    description: "Cannoli, cassate mignon e colazioni ricche in un locale luminoso e curato.", 

    fullDescription: "Aurora porta il lato più goloso della Sicilia in una pasticceria elegante ma accessibile. La vetrina è piena di lievitati fragranti, paste di mandorla e monoporzioni. Perfetta per colazioni lente, pause dolci e piccoli vassoi da condividere.", 

    reviewPreview: "Cannolo croccante riempito al momento, esperienza top.", 

    reviews: [ 

      { author: "Pietro",   text: "Ricotta freschissima e sfoglie fragranti." }, 

      { author: "Veronica", text: "Locale bellissimo e banco sempre invitante." }, 

      { author: "Andrea",   text: "Colazione premium senza diventare troppo formale." } 

    ], 

    galleryEmoji: ["🧁","🍮","☕"], accent: ["#ffa85c","#fff0db"], views: 180, favoritesCount: 44 

  }, 

  { 

    id: 5, name: "Osteria Il Cortile", category: "ristorante", city: "Bologna", 

    address: "Via delle Lame 27, Bologna", phone: "051 324 771", hours: "12:30 - 14:30 · 19:30 - 23:00", 

    price: "€€€", rating: 4.6, atmosphere: "romantico", coords: { lat: 44.4949, lng: 11.3426 }, 

    website: "https://www.google.com/search?q=Osteria+Il+Cortile+Bologna", menuUrl: null, 

    description: "Cucina emiliana raffinata, tortellini fatti a mano e salette intime.", 

    fullDescription: "Osteria Il Cortile è pensata per chi cerca una cena più curata, con piatti della tradizione emiliana alleggeriti nella presentazione ma non nel gusto. Luci soffuse, servizio misurato e una carta vini interessante la rendono perfetta per una serata romantica o una cena speciale.", 

    reviewPreview: "Tortellini in brodo impeccabili e atmosfera raccolta.", 

    reviews: [ 

      { author: "Federica", text: "Servizio elegante ma mai rigido, piatti molto centrati." }, 

      { author: "Stefano",  text: "Perfetto per una cena di coppia." }, 

      { author: "Lucia",    text: "Qualità alta e ambiente davvero rilassante." } 

    ], 

    galleryEmoji: ["🍝","🕯️","🍷"], accent: ["#ff7a1a","#f8c18f"], views: 265, favoritesCount: 71 

  }, 

  { 

    id: 6, name: "Caffè del Corso", category: "bar", city: "Firenze", 

    address: "Via del Corso 15R, Firenze", phone: "055 287 003", hours: "07:30 - 23:30", 

    price: "€€", rating: 4.1, atmosphere: "veloce", coords: { lat: 43.7711, lng: 11.2544 }, 

    website: "https://www.google.com/search?q=Caffè+del+Corso+Firenze", menuUrl: null, 

    description: "Bar elegante per colazioni veloci, caffè specialty e aperitivi classici.", 

    fullDescription: "Caffè del Corso vive bene in ogni momento della giornata. La mattina punta su caffetteria precisa e lievitati semplici, nel pomeriggio su un'atmosfera rilassata, la sera su cocktail classici e snack ben fatti. Il design pulito e la posizione centrale lo rendono molto versatile.", 

    reviewPreview: "Ottimo flat white e location comodissima per una pausa nel centro.", 

    reviews: [ 

      { author: "Riccardo",  text: "Bar molto ordinato, servizio rapido." }, 

      { author: "Valentina", text: "Aperitivo tranquillo, buona musica di sottofondo." }, 

      { author: "Michele",   text: "Molto comodo se sei in centro e vuoi qualità." } 

    ], 

    galleryEmoji: ["☕","🥐","🌇"], accent: ["#ff9350","#ffe7cf"], views: 155, favoritesCount: 38 

  }, 

  { 

    id: 7, name: "Gelato al Duomo", category: "gelateria", city: "Firenze", 

    address: "Via dei Calzaiuoli 39, Firenze", phone: "055 902 4175", hours: "10:30 - 23:45", 

    price: "€", rating: 4.4, atmosphere: "veloce", coords: { lat: 43.7731, lng: 11.2560 }, 

    website: "https://www.google.com/search?q=Gelato+al+Duomo+Firenze", menuUrl: null, 

    description: "Coni generosi, granite fresche e gusti fruttati perfetti d'estate.", 

    fullDescription: "Gelato al Duomo è una gelateria pratica, centrale e affidabile. I gusti frutta sono particolarmente freschi, mentre crema e cioccolato puntano su texture morbide e rotonde. È il tipo di posto da scegliere quando vuoi qualcosa di immediato ma ben fatto durante una passeggiata.", 

    reviewPreview: "Mango e limone super freschi, ideale nelle giornate calde.", 

    reviews: [ 

      { author: "Irene",   text: "Molto buoni i gusti alla frutta." }, 

      { author: "Tommaso", text: "Servizio rapido e cono croccante." }, 

      { author: "Asia",    text: "Perfetta sosta mentre si gira il centro." } 

    ], 

    galleryEmoji: ["🍦","🍋","🏛️"], accent: ["#ff6b00","#ffd8a8"], views: 290, favoritesCount: 63 

  }, 

  { 

    id: 8, name: "Pasticceria Minerva", category: "pasticceria", city: "Napoli", 

    address: "Via Scarlatti 83, Napoli", phone: "081 551 7802", hours: "06:00 - 21:00", 

    price: "€", rating: 4.5, atmosphere: "veloce", coords: { lat: 40.8360, lng: 14.2488 }, 

    website: "https://www.google.com/search?q=Pasticceria+Minerva+Napoli", menuUrl: null, 

    description: "Sfogliatelle, babà e mignon in una pasticceria vivace dal gusto classico.", 

    fullDescription: "Pasticceria Minerva è il posto giusto per chi vuole un dolce iconico fatto bene, senza complicazioni. La produzione quotidiana è ricca e il banco ruota continuamente. Perfetta per colazioni energiche, pause al volo e vassoi da portare a casa.", 

    reviewPreview: "Babà soffice e ben imbevuto, uno dei migliori del quartiere.", 

    reviews: [ 

      { author: "Antonio", text: "Banco spettacolare e prodotti sempre freschi." }, 

      { author: "Claudia", text: "Sfogliatella riccia da manuale." }, 

      { author: "Rosa",    text: "Locale genuino e sempre pieno di scelta." } 

    ], 

    galleryEmoji: ["🧁","🥮","🍰"], accent: ["#ff7d24","#ffe3c5"], views: 340, favoritesCount: 92 

  }, 

  { 

    id: 9, name: "Bistrot Porto Nuovo", category: "ristorante", city: "Genova", 

    address: "Calata Andalò di Negro 9, Genova", phone: "010 774 9911", hours: "12:00 - 14:30 · 19:00 - 22:45", 

    price: "€€€", rating: 4.3, atmosphere: "romantico", coords: { lat: 44.4056, lng: 8.9463 }, 

    website: "https://www.google.com/search?q=Bistrot+Porto+Nuovo+Genova", menuUrl: null, 

    description: "Piatti di mare contemporanei, terrazza luminosa e servizio discreto.", 

    fullDescription: "Bistrot Porto Nuovo guarda al mare sia nel menu sia nel mood. Piatti puliti, cotture precise e una carta orientata a pesce e crudi rendono l'esperienza moderna ma accessibile. Ideale per chi cerca un ristorante elegante senza formalità eccessive.", 

    reviewPreview: "Crudi curati e vista piacevole, ottimo per una cena speciale.", 

    reviews: [ 

      { author: "Gabriele", text: "Tonno scottato eccellente e atmosfera rilassata." }, 

      { author: "Miriam",   text: "Prezzo più alto, ma qualità evidente." }, 

      { author: "Nadia",    text: "Bella location e servizio puntuale." } 

    ], 

    galleryEmoji: ["🦞","🐟","⛵"], accent: ["#ff9f66","#ffe8d4"], views: 175, favoritesCount: 41 

  }, 

  { 

    id: 10, name: "Bar Centrale 21", category: "bar", city: "Roma", 

    address: "Piazza Bologna 21, Roma", phone: "06 4410 9812", hours: "06:30 - 00:30", 

    price: "€", rating: 3.9, atmosphere: "veloce", coords: { lat: 41.9028, lng: 12.5144 }, 

    website: "https://www.google.com/search?q=Bar+Centrale+Roma", menuUrl: null, 

    description: "Bar di quartiere affidabile per colazione, tramezzini e aperitivi semplici.", 

    fullDescription: "Bar Centrale 21 è pratico e immediato: entri, ordini veloce e trovi sempre qualcosa di semplice ma soddisfacente. Ottimo per colazioni rapide, pausa pranzo informale e aperitivi senza pretese. Un punto fermo per chi vuole spendere poco e avere servizio continuo.", 

    reviewPreview: "Comodo, veloce e con ottimi cornetti alla crema.", 

    reviews: [ 

      { author: "Marco",  text: "Locale senza fronzoli ma sempre utile." }, 

      { author: "Silvia", text: "Cornetti buoni e prezzi corretti." }, 

      { author: "Luca",   text: "Perfetto quando vuoi qualcosa al volo." } 

    ], 

    galleryEmoji: ["☕","🥐","🗞️"], accent: ["#ff6b00","#ffd7b0"], views: 130, favoritesCount: 29 

  }, 

  { 

    id: 11, name: "La Bruschetta Gentile", category: "ristorante", city: "Verona", 

    address: "Via Mazzini 64, Verona", phone: "045 901 337", hours: "12:15 - 14:45 · 19:15 - 23:15", 

    price: "€€", rating: 4.4, atmosphere: "informale", coords: { lat: 45.4384, lng: 10.9916 }, 

    website: "https://www.google.com/search?q=La+Bruschetta+Gentile+Verona", menuUrl: null, 

    description: "Piccolo ristorante contemporaneo con antipasti condivisibili e cucina stagionale.", 

    fullDescription: "La Bruschetta Gentile costruisce un'esperienza informale ma ricercata. Piatti da condividere, ingredienti stagionali e una sala raccolta la rendono ideale per chi vuole mangiare bene in un contesto rilassato. Ottima scelta per serate tra amici o appuntamenti leggeri.", 

    reviewPreview: "Menu stagionale ben pensato e servizio molto attento.", 

    reviews: [ 

      { author: "Beatrice", text: "Piatti curati e bella energia in sala." }, 

      { author: "Enrico",   text: "Buon equilibrio tra prezzo e qualità." }, 

      { author: "Camilla",  text: "Locale piccolo ma super piacevole." } 

    ], 

    galleryEmoji: ["🥗","🍞","🫒"], accent: ["#ff8b32","#fff0e0"], views: 220, favoritesCount: 58 

  }, 

  { 

    id: 12, name: "Cremeria San Luca", category: "gelateria", city: "Bologna", 

    address: "Via Ugo Bassi 9, Bologna", phone: "051 773 440", hours: "12:00 - 23:30", 

    price: "€€", rating: 4.6, atmosphere: "gelato", coords: { lat: 44.4938, lng: 11.3387 }, 

    website: "https://www.google.com/search?q=Cremeria+San+Luca+Bologna", menuUrl: null, 

    description: "Cremeria artigianale con semifreddi, gelati classici e topping fatti in casa.", 

    fullDescription: "Cremeria San Luca lavora su ricette tradizionali con una spinta artigianale evidente. Il gelato ha struttura ricca, i topping sono fatti in casa e i semifreddi completano l'offerta con un tocco più goloso. Ideale per un dessert completo, non solo per il classico cono.", 

    reviewPreview: "Crema al fiordilatte vellutata e topping al caramello fantastico.", 

    reviews: [ 

      { author: "Martina", text: "Consistenza super cremosa, si sente la qualità." }, 

      { author: "Alessio", text: "Ottimi semifreddi, bel plus rispetto ad altre gelaterie." }, 

      { author: "Greta",   text: "Porzioni generose e staff cordiale." } 

    ], 

    galleryEmoji: ["🍨","🍮","🌰"], accent: ["#ffa458","#ffe7d0"], views: 300, favoritesCount: 78 

  }, 

  { 

    id: 13, name: "Forno & Zucchero", category: "pasticceria", city: "Milano", 

    address: "Viale Premuda 6, Milano", phone: "02 3214 8811", hours: "07:00 - 19:30", 

    price: "€€", rating: 4.3, atmosphere: "brunch", coords: { lat: 45.4654, lng: 9.2028 }, 

    website: "https://www.google.com/search?q=Forno+e+Zucchero+Milano", menuUrl: null, 

    description: "Bakery-pasticceria con lievitati al burro, crostate moderne e caffetteria specialty.", 

    fullDescription: "Forno & Zucchero è una pasticceria dal gusto metropolitano, perfetta per chi cerca una colazione più curata o una merenda elegante. I lievitati sono il punto forte, insieme a crostate e monoporzioni dal profilo pulito. Ambiente chiaro, servizio rilassato e atmosfera contemporanea.", 

    reviewPreview: "Croissant sfogliato benissimo e banco dolci molto raffinato.", 

    reviews: [ 

      { author: "Nicole", text: "Ottima scelta per colazione lenta del weekend." }, 

      { author: "Simone", text: "Locale bello e prodotti curatissimi." }, 

      { author: "Alice",  text: "Monoporzione al pistacchio davvero memorabile." } 

    ], 

    galleryEmoji: ["🥐","🍰","☕"], accent: ["#ff7a1f","#ffe6cb"], views: 195, favoritesCount: 47 

  }, 

  { 

    id: 14, name: "Enoteca Tavola Calda", category: "ristorante", city: "Roma", 

    address: "Via Ostiense 141, Roma", phone: "06 5831 2098", hours: "12:00 - 15:00 · 19:00 - 00:00", 

    price: "€€", rating: 3.8, atmosphere: "informale", coords: { lat: 41.8719, lng: 12.4821 }, 

    website: "https://www.google.com/search?q=Enoteca+Tavola+Calda+Roma", menuUrl: null, 

    description: "Piatti romani, vini naturali e tavoli conviviali in un ambiente informale.", 

    fullDescription: "Enoteca Tavola Calda miscela spirito da osteria e attenzione al vino. Il menu punta su ricette romane dirette, con qualche proposta del giorno, mentre la selezione di bottiglie è interessante ma accessibile. Ideale per serate informali in compagnia e per chi ama condividere.", 

    reviewPreview: "Cacio e pepe saporita e buona selezione di calici.", 

    reviews: [ 

      { author: "Paolo",   text: "Atmosfera allegra, ottimo per uscire in gruppo." }, 

      { author: "Emma",    text: "Non troppo formale, ma con una bella identità." }, 

      { author: "Daniele", text: "Vini interessanti e cucina sincera." } 

    ], 

    galleryEmoji: ["🍷","🍝","🫙"], accent: ["#ff9452","#ffe4cc"], views: 145, favoritesCount: 33 

  }, 

  { 

    id: 15, name: "Bicchieri & Brioche", category: "bar", city: "Torino", 

    address: "Via Po 57, Torino", phone: "011 883 2401", hours: "07:00 - 00:00", 

    price: "€€", rating: 4.7, atmosphere: "brunch", coords: { lat: 45.0682, lng: 7.6941 }, 

    website: "https://www.google.com/search?q=Bicchieri+e+Brioche+Torino", menuUrl: null, 

    description: "Bar bistrot dinamico con brunch, cocktail leggeri e serate dal mood soft.", 

    fullDescription: "Bicchieri & Brioche è una via di mezzo riuscita tra bar moderno e bistrot casual. Si passa con naturalezza dalla colazione al brunch, fino a un aperitivo più ricercato. Gli interni sono essenziali ma accoglienti e il servizio è uno dei punti forti del locale.", 

    reviewPreview: "Brunch curato e cocktail ben bilanciati, ottimo all day long.", 

    reviews: [ 

      { author: "Gaia",    text: "Molto versatile, buono in ogni fascia oraria." }, 

      { author: "Filippo", text: "Brunch davvero riuscito e staff sorridente." }, 

      { author: "Arianna", text: "Uno dei bar più piacevoli della zona." } 

    ], 

    galleryEmoji: ["🥂","🥐","🌿"], accent: ["#ff6b00","#ffd9b4"], views: 260, favoritesCount: 69 

  } 

]; 

 

// ===== STATE STORE ===== 

const createStore = (initialState) => { 

  let state = { ...initialState }; 

  const listeners = new Set(); 

  return { 

    getState: () => ({ ...state }), 

    setState(updates) { 

      const prev = { ...state }; 

      state = { ...state, ...updates }; 

      listeners.forEach(fn => fn(state, prev)); 

    }, 

    subscribe(fn) { 

      listeners.add(fn); 

      return () => listeners.delete(fn); 

    } 

  }; 

}; 

 

const store = createStore({ 

  route: '#home', 

  userLocation: null, 

  favorites: safeGetFavorites(), 

  filters: { category: 'all', search: '', city: '', price: 'all', minRating: 0 }, 

  currentVenueId: null 

}); 

 

// ===== UTILS ===== 

const $ = (sel, ctx = document) => ctx.querySelector(sel); 

const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel)); 

 

const debounce = (fn, ms = 300) => { 

  let t; 

  return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; 

}; 

 

const safeGetFavorites = () => { 

  try { return JSON.parse(localStorage.getItem('fs_favorites') || '[]'); } 

  catch { return []; } 

}; 

 

const getDistance = (lat1, lon1, lat2, lon2) => { 

  const R = 6371, toRad = x => x * Math.PI / 180; 

  const dLat = toRad(lat2 - lat1), dLon = toRad(lon2 - lon1); 

  const a = Math.sin(dLat/2)**2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon/2)**2; 

  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); 

}; 

 

const createStars = r => '★'.repeat(Math.floor(r)) + (r % 1 >= 0.5 ? '½' : ''); 

const catLabel = id => CATEGORIES.find(c => c.id === id)?.label || id; 

 

const showToast = (() => { 

  let t; 

  return msg => { 

    clearTimeout(t); 

    const el = $('#toast'); 

    el.textContent = msg; 

    el.classList.remove('hidden'); 

    requestAnimationFrame(() => el.classList.add('show')); 

    t = setTimeout(() => { 

      el.classList.remove('show'); 

      setTimeout(() => el.classList.add('hidden'), 320); 

    }, 2800); 

  }; 

})(); 

 

// ===== ROUTER ===== 

const ROUTES = ['#home','#search','#favorites','#nearby','#toprated','#categories','#ideas']; 

 

class Router { 

  constructor(store) { 

    this.store = store; 

    window.addEventListener('hashchange', () => this.handle()); 

    window.addEventListener('load', () => this.handle()); 

  } 

  handle() { 

    const hash = window.location.hash || '#home'; 

    const route = ROUTES.includes(hash) ? hash : '#home'; 

    this.store.setState({ route }); 

  } 

  navigate(route) { 

    if (window.location.hash !== route) window.location.hash = route; 

    else this.store.setState({ route }); // forza re-render se già sulla stessa route 

  } 

} 

 

// ===== SEARCH SERVICE ===== 

const SearchService = { 

  search(venues, filters, userLocation) { 

    const { search, city, category, price, minRating } = filters; 

    const norm = search.trim().toLowerCase(); 

    const normCity = city.trim().toLowerCase(); 

 

    // Espande keywords con ideaMap 

    let kw = norm ? [norm] : []; 

    Object.entries(IDEA_MAP).forEach(([key, vals]) => { 

      if (norm.includes(key)) kw = kw.concat(vals); 

    }); 

 

    return venues.map(v => { 

      const name  = v.name.toLowerCase(); 

      const vCity = v.city.toLowerCase(); 

      const vCat  = v.category.toLowerCase(); 

      const desc  = (v.description + ' ' + v.fullDescription).toLowerCase(); 

      const atm   = (v.atmosphere || '').toLowerCase(); 

 

      const matchSearch = !norm || kw.some(k => name.includes(k) || vCat.includes(k) || desc.includes(k) || atm.includes(k)); 

      const matchCity   = !normCity || vCity.includes(normCity) || normCity.includes(vCity); 

      const matchCat    = category === 'all' || v.category === category; 

      const matchPrice  = price === 'all' || v.price === price; 

      const matchRating = v.rating >= minRating; 

 

      if (!matchSearch || !matchCity || !matchCat || !matchPrice || !matchRating) return null; 

 

      let score = 0; 

      kw.forEach(k => { 

        if (name.startsWith(k)) score += 15; 

        else if (name.includes(k)) score += 8; 

        if (vCat.includes(k)) score += 6; 

        if (atm.includes(k))  score += 8; 

        if (desc.includes(k)) score += 3; 

      }); 

      if (kw.some(k => atm.includes(k))) score += 15; 

      if (v.price === '€') score += 2; 

      score += v.rating * 5; 

      score += v.reviews.length * 2; 

      score += v.favoritesCount * 0.5; 

 

      let distance = null; 

      if (userLocation && v.coords) { 

        distance = getDistance(userLocation.lat, userLocation.lng, v.coords.lat, v.coords.lng); 

        score += Math.max(0, 20 - distance); 

      } 

 

      return { ...v, score, distance: distance !== null ? +distance.toFixed(1) : null }; 

    }).filter(Boolean).sort((a, b) => b.score - a.score); 

  } 

}; 

 

// ===== LOCATION SERVICE ===== 

const LocationService = { 

  get() { 

    return new Promise((resolve, reject) => { 

      if (!navigator.geolocation) { reject(new Error('Geolocalizzazione non supportata')); return; } 

      navigator.geolocation.getCurrentPosition( 

        p => resolve({ lat: p.coords.latitude, lng: p.coords.longitude }), 

        e => { 

          const msgs = { 1: 'Permesso negato', 2: 'Posizione non disponibile', 3: 'Timeout' }; 

          reject(new Error(msgs[e.code] || 'Errore geolocalizzazione')); 

        } 

      ); 

    }); 

  } 

}; 

 

// ===== COMPONENTS ===== 

const CatCard = (cat, active) => ` 

  <button class="category-card ${active ? 'active' : ''}" data-category="${cat.id}"> 

    <span class="category-icon">${cat.icon}</span> 

    <strong>${cat.label}</strong> 

    <span>${cat.subtitle}</span> 

  </button>`; 

 

const CatChip = (cat, active) => ` 

  <button class="category-chip ${active ? 'active' : ''}" data-category="${cat.id}" role="option" aria-selected="${active}"> 

    ${cat.icon} ${cat.label} 

  </button>`; 

 

const IdeaCard = key => { 

  const cfg = { 

    romantico: { icon:'💕', label:'Romantico',  sub:'Cena a due',        cls:'idea-romantic' }, 

    veloce:    { icon:'⚡', label:'Veloce',     sub:'Pausa rapida',       cls:'idea-quick'    }, 

    gelato:    { icon:'🍨', label:'Gelato',     sub:'Dolce fresco',       cls:'idea-gelato'   }, 

    brunch:    { icon:'🥐', label:'Brunch',     sub:'Colazione tardiva',  cls:'idea-brunch'   }, 

    gruppo:    { icon:'👥', label:'Gruppo',     sub:'Con gli amici',      cls:'idea-group'    }, 

    economico: { icon:'💰', label:'Economico',  sub:'Low cost',           cls:'idea-budget'   }, 

    vicino:    { icon:'📍', label:'Vicino a me',sub:'Intorno a te',       cls:'idea-quick'    } 

  }; 

  const c = cfg[key] || { icon:'✦', label: key, sub:'', cls:'' }; 

  return `<button class="idea-card ${c.cls}" data-idea="${key}"> 

    <span class="idea-icon">${c.icon}</span> 

    <strong>${c.label}</strong> 

    <span>${c.sub}</span> 

  </button>`; 

}; 

 

const SmallCard = (v, favs) => { 

  const dist = v.distance !== null ? `<span class="distance-tag">📍 ${v.distance} km</span>` : ''; 

  return ` 

  <article class="nearby-card" data-open-detail="${v.id}" tabindex="0" aria-label="Apri ${v.name}"> 

    <div class="card-visual" style="--accent:${v.accent[0]};--accent-soft:${v.accent[1]};"> 

      <span class="card-visual-label">${v.city}</span> 

    </div> 

    <div class="nearby-content"> 

      <div class="card-meta"> 

        <div> 

          <h3 class="card-title">${v.name}</h3> 

          <p class="muted">${catLabel(v.category)} · ${v.price}</p> 

        </div> 

        <span class="rating-pill">${v.rating.toFixed(1)}</span> 

      </div> 

      <p class="muted">${v.description}</p> 

      ${dist} 

    </div> 

  </article>`; 

}; 

 

const ResultCard = (v, favs) => { 

  const isFav = favs.includes(v.id); 

  const dist  = v.distance !== null ? `<span class="distance-tag">📍 ${v.distance} km</span>` : ''; 

  return ` 

  <article class="result-card" data-open-detail="${v.id}" tabindex="0" aria-label="Apri ${v.name}"> 

    <div class="card-visual" style="--accent:${v.accent[0]};--accent-soft:${v.accent[1]};"> 

      <span class="card-visual-label">${v.category === 'bar' ? 'Aperitivo' : 'FoodSpot Pick'}</span> 

    </div> 

    <div class="result-content"> 

      <div class="result-headline"> 

        <div> 

          <span class="category-badge">${catLabel(v.category)}</span> 

          <h3 class="result-title">${v.name}</h3> 

          <p class="muted">${v.city} · ${v.address}</p> 

        </div> 

        <div class="result-meta"> 

          <span class="price-tag">${v.price}</span> 

          <span class="stars">${createStars(v.rating)} ${v.rating.toFixed(1)}</span> 

        </div> 

      </div> 

      <p class="result-description">${v.description}</p> 

      <p class="review-preview">"${v.reviewPreview}"</p> 

      <div class="result-footer"> 

        <span class="muted">${v.hours}</span> 

        <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;"> 

          ${dist} 

          <button class="ghost-button fav-btn" data-favorite="${v.id}" 

            aria-label="${isFav ? 'Rimuovi dai preferiti' : 'Aggiungi ai preferiti'}" 

            style="min-height:42px;padding:0 12px;font-size:1.1rem;"> 

            ${isFav ? '❤️' : '🤍'} 

          </button> 

          <button class="primary-button">Apri dettaglio →</button> 

        </div> 

      </div> 

    </div> 

  </article>`; 

}; 

 

// ===== RENDER ===== 

const Render = { 

  home(s) { 

    const catsEl = $('#home-categories'); 

    if (catsEl) catsEl.innerHTML = CATEGORIES.filter(c => c.id !== 'all') 

      .map(c => CatCard(c, s.filters.category === c.id)).join(''); 

 

    const ideasEl = $('#home-ideas'); 

    if (ideasEl) ideasEl.innerHTML = Object.keys(IDEA_MAP).map(IdeaCard).join(''); 

 

    const recEl = $('#recommended-list'); 

    if (recEl) recEl.innerHTML = VENUES.filter(v => v.rating >= 4.5).slice(0, 6) 

      .map(v => SmallCard({ ...v, distance: null }, s.favorites)).join(''); 

  }, 

 

  search(s) { 

    const catsEl = $('#search-categories'); 

    if (catsEl) catsEl.innerHTML = CATEGORIES.map(c => CatChip(c, s.filters.category === c.id)).join(''); 

 

    const results = SearchService.search(VENUES, s.filters, s.userLocation); 

    const sumEl = $('#results-summary'); 

    if (sumEl) sumEl.textContent = results.length > 0 ? `${results.length} locali trovati 🔥` : 'Nessun risultato 😢'; 

 

    const listEl = $('#results-list'); 

    if (listEl) listEl.innerHTML = results.length === 0 

      ? `<div class="empty-state">Nessun risultato.<br>💡 Prova "romantico", "brunch", "economico"</div>` 

      : results.map(v => ResultCard(v, s.favorites)).join(''); 

  }, 

 

  favorites(s) { 

    const vens = VENUES.filter(v => s.favorites.includes(v.id)); 

    const sumEl = $('#favorites-summary'); 

    if (sumEl) sumEl.textContent = vens.length > 0 ? `${vens.length} salvati ❤️` : ''; 

    const listEl = $('#favorites-list'); 

    if (listEl) listEl.innerHTML = vens.length === 0 

      ? `<div class="empty-state">Nessun preferito ancora.<br>💡 Clicca 🤍 sui locali che ti piacciono</div>` 

      : vens.map(v => ResultCard({ ...v, distance: null }, s.favorites)).join(''); 

  }, 

 

  nearby(s) { 

    const listEl = $('#nearby-view-list'); 

    if (!listEl) return; 

    let sorted = [...VENUES]; 

    if (s.userLocation) { 

      sorted = sorted.map(v => { 

        if (!v.coords) return { ...v, distance: null }; 

        const d = getDistance(s.userLocation.lat, s.userLocation.lng, v.coords.lat, v.coords.lng); 

        return { ...v, distance: +d.toFixed(1) }; 

      }).sort((a, b) => (a.distance ?? 999) - (b.distance ?? 999)); 

    } else { 

      sorted = sorted.map(v => ({ ...v, distance: null })); 

    } 

    listEl.innerHTML = sorted.map(v => ResultCard(v, s.favorites)).join(''); 

  }, 

 

  toprated(s) { 

    const listEl = $('#toprated-list'); 

    if (!listEl) return; 

    listEl.innerHTML = [...VENUES] 

      .sort((a, b) => b.rating - a.rating) 

      .map(v => ResultCard({ ...v, distance: null }, s.favorites)).join(''); 

  }, 

 

  categories(s) { 

    const catsEl = $('#all-categories'); 

    if (catsEl) catsEl.innerHTML = CATEGORIES.filter(c => c.id !== 'all') 

      .map(c => CatCard(c, s.filters.category === c.id)).join(''); 

 

    const resEl = $('#category-results'); 

    if (resEl) { 

      const filtered = s.filters.category === 'all' 

        ? VENUES 

        : VENUES.filter(v => v.category === s.filters.category); 

      resEl.innerHTML = filtered.map(v => ResultCard({ ...v, distance: null }, s.favorites)).join(''); 

    } 

  }, 

 

  ideas() { 

    const el = $('#all-ideas'); 

    if (el) el.innerHTML = Object.keys(IDEA_MAP).map(IdeaCard).join(''); 

  } 

}; 

 

// ===== CONTROLLER ===== 

class App { 

  constructor(store, router) { 

    this.store  = store; 

    this.router = router; 

    this._bindEvents(); 

    this.store.subscribe((s, prev) => this._onState(s, prev)); 

  } 

 

  _onState(s, prev) { 

    // Aggiorna view attiva 

    $$('.view').forEach(v => { 

      v.classList.toggle('active', `#${v.id.replace('view-', '')}` === s.route); 

    }); 

    // Aggiorna nav active 

    $$('.nav-link, .nav-link-mobile').forEach(b => { 

      b.classList.toggle('active', b.dataset.route === s.route); 

    }); 

 

    // Render per route 

    if (s.route === '#home')       Render.home(s); 

    if (s.route === '#search')     Render.search(s); 

    if (s.route === '#favorites')  Render.favorites(s); 

    if (s.route === '#nearby')     Render.nearby(s); 

    if (s.route === '#toprated')   Render.toprated(s); 

    if (s.route === '#categories') Render.categories(s); 

    if (s.route === '#ideas')      Render.ideas(s); 

 

    // Sync inputs 

    const si = $('#results-search-input'); 

    if (si && document.activeElement !== si) si.value = s.filters.search; 

    const pf = $('#price-filter'); 

    if (pf) pf.value = s.filters.price; 

    const rf = $('#rating-filter'); 

    if (rf) rf.value = String(s.filters.minRating); 

  } 

 

  _bindEvents() { 

    // Event delegation su body 

    document.body.addEventListener('click', e => { 

      // Route button 

      const routeBtn = e.target.closest('[data-route]'); 

      if (routeBtn && !routeBtn.closest('#app-menu-overlay') && !routeBtn.closest('.app-tile-soon')) { 

        e.preventDefault(); 

        this.router.navigate(routeBtn.dataset.route); 

        this._closeMobileNav(); 

        window.scrollTo({ top: 0, behavior: 'smooth' }); 

        return; 

      } 

      // Route da app menu overlay (tiles) 

      if (routeBtn && routeBtn.closest('#app-menu-overlay') && !routeBtn.closest('.app-tile-soon')) { 

        e.preventDefault(); 

        this._closeAppMenu(); 

        this.router.navigate(routeBtn.dataset.route); 

        window.scrollTo({ top: 0, behavior: 'smooth' }); 

        return; 

      } 

 

      // Category 

      const catBtn = e.target.closest('[data-category]'); 

      if (catBtn) { 

        this.store.setState({ filters: { ...this.store.getState().filters, category: catBtn.dataset.category, search: '' } }); 

        const r = this.store.getState().route; 

        if (r !== '#search' && r !== '#categories') this.router.navigate('#search'); 

        return; 

      } 

 

      // Idea 

      const ideaBtn = e.target.closest('[data-idea]'); 

      if (ideaBtn) { 

        const kw = IDEA_MAP[ideaBtn.dataset.idea]; 

        this.store.setState({ filters: { ...this.store.getState().filters, search: kw ? kw[0] : ideaBtn.dataset.idea, category: 'all' } }); 

        this.router.navigate('#search'); 

        return; 

      } 

 

      // Open detail 

      const card = e.target.closest('[data-open-detail]'); 

      if (card && !e.target.closest('.fav-btn')) { 

        this._openDetail(Number(card.dataset.openDetail)); 

        return; 

      } 

 

      // Favorite 

      const favBtn = e.target.closest('[data-favorite]'); 

      if (favBtn) { 

        e.stopPropagation(); 

        this._toggleFav(Number(favBtn.dataset.favorite)); 

        return; 

      } 

 

      // Close modal 

      if (e.target.closest('[data-close-modal]') || e.target.closest('#close-modal')) { 

        this._closeDetail(); 

        return; 

      } 

 

      // Close app menu on backdrop 

      if (e.target.id === 'app-menu-overlay') { 

        this._closeAppMenu(); 

        return; 

      } 

    }); 

 

    // Keyboard 

    document.body.addEventListener('keydown', e => { 

      if (e.key === 'Escape') { 

        this._closeDetail(); 

        this._closeAppMenu(); 

        this._closeMobileNav(); 

      } 

      if ((e.key === 'Enter' || e.key === ' ') && e.target.closest('[data-open-detail]')) { 

        e.preventDefault(); 

        this._openDetail(Number(e.target.closest('[data-open-detail]').dataset.openDetail)); 

      } 

    }); 

 

    // Search input 

    const si = $('#results-search-input'); 

    si?.addEventListener('input', debounce(e => { 

      this.store.setState({ filters: { ...this.store.getState().filters, search: e.target.value } }); 

    }, 300)); 

 

    // Filters 

    $('#price-filter')?.addEventListener('change', e => { 

      this.store.setState({ filters: { ...this.store.getState().filters, price: e.target.value } }); 

    }); 

    $('#rating-filter')?.addEventListener('change', e => { 

      this.store.setState({ filters: { ...this.store.getState().filters, minRating: Number(e.target.value) } }); 

    }); 

 

    // Mobile nav 

    $('#mobile-menu-btn')?.addEventListener('click', () => this._toggleMobileNav()); 

 

    // App menu 

    $('#app-menu-btn')?.addEventListener('click', () => this._openAppMenu()); 

    $('#close-menu-btn')?.addEventListener('click', () => this._closeAppMenu()); 

 

    // Refresh location 

    $('#refresh-location-btn')?.addEventListener('click', () => this._refreshLocation()); 

 

    // Modal action buttons 

    $('#btn-menu')?.addEventListener('click', () => this._handleMenu()); 

    $('#btn-sito')?.addEventListener('click', () => this._handleSito()); 

    $('#btn-condividi')?.addEventListener('click', () => this._handleCondividi()); 

  } 

 

  _toggleMobileNav() { 

    const nav = $('#mobile-nav'); 

    nav.classList.toggle('open'); 

    document.body.classList.toggle('no-scroll', nav.classList.contains('open')); 

    $('#mobile-menu-btn')?.setAttribute('aria-expanded', nav.classList.contains('open')); 

  } 

 

  _closeMobileNav() { 

    $('#mobile-nav')?.classList.remove('open'); 

    document.body.classList.remove('no-scroll'); 

    $('#mobile-menu-btn')?.setAttribute('aria-expanded', 'false'); 

  } 

 

  _openAppMenu() { 

    $('#app-menu-overlay')?.classList.add('open'); 

    document.body.classList.add('no-scroll'); 

  } 

 

  _closeAppMenu() { 

    $('#app-menu-overlay')?.classList.remove('open'); 

    document.body.classList.remove('no-scroll'); 

  } 

 

  _toggleFav(id) { 

    const { favorites } = this.store.getState(); 

    const already = favorites.includes(id); 

    const next = already ? favorites.filter(f => f !== id) : [...favorites, id]; 

    this.store.setState({ favorites: next }); 

    localStorage.setItem('fs_favorites', JSON.stringify(next)); 

    showToast(already ? '💔 Rimosso dai preferiti' : '❤️ Aggiunto ai preferiti!'); 

  } 

 

  _openDetail(id) { 

    const v = VENUES.find(x => x.id === id); 

    if (!v) return; 

    this.store.setState({ currentVenueId: id }); 

 

    const dh = $('#detail-hero'); 

    dh.style.setProperty('--accent', v.accent[0]); 

    dh.style.setProperty('--accent-soft', v.accent[1]); 

    $('#detail-hero-name').textContent      = v.name; 

    $('#detail-hero-category').textContent  = catLabel(v.category); 

    $('#detail-hero-rating').textContent    = `${createStars(v.rating)} ${v.rating.toFixed(1)} · ${v.price}`; 

    $('#detail-name').textContent           = v.name; 

    $('#detail-category').textContent       = catLabel(v.category); 

    $('#detail-rating').textContent         = `${createStars(v.rating)} ${v.rating.toFixed(1)}`; 

    $('#detail-description').textContent    = v.fullDescription; 

    $('#detail-address').textContent        = v.address; 

    $('#detail-hours').textContent          = v.hours; 

    $('#detail-phone').textContent          = v.phone; 

 

    $('#detail-gallery').innerHTML = v.galleryEmoji.map((emoji, i) => ` 

      <div class="gallery-item" style="--accent:${v.accent[0]};--accent-soft:${i%2===0?v.accent[0]:v.accent[1]};"> 

        <div class="gallery-item-label">${emoji}</div> 

      </div>`).join(''); 

 

    $('#detail-reviews').innerHTML = v.reviews.map(r => ` 

      <article class="review-card"> 

        <strong>${r.author}</strong> 

        <span class="review-stars">${createStars(v.rating)}</span> 

        <p>${r.text}</p> 

      </article>`).join(''); 

 

    const modal = $('#detail-modal'); 

    modal.classList.remove('hidden'); 

    modal.setAttribute('aria-hidden', 'false'); 

    document.body.style.overflow = 'hidden'; 

    requestAnimationFrame(() => $('#close-modal')?.focus()); 

  } 

 

  _closeDetail() { 

    const modal = $('#detail-modal'); 

    modal.classList.add('hidden'); 

    modal.setAttribute('aria-hidden', 'true'); 

    document.body.style.overflow = ''; 

    this.store.setState({ currentVenueId: null }); 

  } 

 

  async _refreshLocation() { 

    showToast('📍 Rilevo posizione...'); 

    try { 

      const loc = await LocationService.get(); 

      this.store.setState({ userLocation: loc }); 

      showToast('✅ Posizione aggiornata!'); 

    } catch (e) { 

      showToast(`⚠️ ${e.message}`); 

    } 

  } 

 

  _currentVenue() { 

    return VENUES.find(v => v.id === this.store.getState().currentVenueId); 

  } 

 

  _handleMenu() { 

    const v = this._currentVenue(); 

    if (!v) return; 

    v.menuUrl ? window.open(v.menuUrl, '_blank', 'noopener') : showToast('📋 Menu non ancora disponibile'); 

  } 

 

  _handleSito() { 

    const v = this._currentVenue(); 

    if (!v) return; 

    window.open(v.website, '_blank', 'noopener'); 

    showToast('🌐 Apertura sito...'); 

  } 

 

  _handleCondividi() { 

    const v = this._currentVenue(); 

    if (!v) return; 

    const text = `🍽️ ${v.name} — ${v.city}\n${v.description}\nTrovato su FoodSpot!`; 

    if (navigator.share) { 

      navigator.share({ title: v.name, text }).catch(() => {}); 

    } else { 

      navigator.clipboard.writeText(text) 

        .then(() => showToast('✅ Copiato negli appunti!')) 

        .catch(() => showToast('📋 ' + v.name)); 

    } 

  } 

} 

 

// ===== BOOT ===== 

document.addEventListener('DOMContentLoaded', () => { 

  const router = new Router(store); 

  const app = new App(store, router); 

 

  // Richiedi GPS al primo accesso a #search o #nearby 

  store.subscribe((s, prev) => { 

    const needsGps = (s.route === '#search' || s.route === '#nearby'); 

    const justArrived = s.route !== prev.route; 

    if (needsGps && justArrived && !s.userLocation) { 

      app._refreshLocation(); 

    } 

  }); 

});
// ===== ORBO RICERCA PER CITTÀ - by Meta AI =====
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('results-search-input');
  const catRow = document.getElementById('search-categories');
  const resultsList = document.getElementById('results-list');
  const summary = document.getElementById('results-summary');

  if(!input ||!catRow ||!resultsList) return;

  // 1. Cambia placeholder
  input.placeholder = 'Scrivi una città... es. Modena, Bologna';

  // 2. Database finto (poi mettiamo API vera)
  const DB = {
    modena: {
      ristoranti: [
        {n:"Osteria Francescana", v:4.9, d:"3 stelle Michelin", p:"€€€"},
        {n:"Trattoria Aldina", v:4.7, d:"Tortellini top", p:"€€"},
        {n:"Da Enzo", v:4.6, d:"Cucina tipica modenese", p:"€€"}
      ],
      dolci: [
        {n:"Gelateria Bloom", v:4.8, d:"Pistacchio di Bronte", p:"€"},
        {n:"K2", v:4.6, d:"Crema artigianale", p:"€"},
        {n:"Capolinea", v:4.7, d:"Gelato naturale", p:"€"}
      ],
      bar: [
        {n:"Caffè Concerto", v:4.5, d:"Piazza Grande", p:"€€"},
        {n:"Fly", v:4.4, d:"Cocktail bar", p:"€€"}
      ],
      pasticcerie: [
        {n:"Gollini 1888", v:4.9, d:"Panettone storico", p:"€€"},
        {n:"Emilio", v:4.7, d:"Amaretti", p:"€"}
      ]
    },
    bologna: {
      ristoranti: [
        {n:"Trattoria Anna Maria", v:4.8, d:"Tagliatelle al ragù", p:"€€"},
        {n:"Oltre", v:4.7, d:"Cucina moderna", p:"€€€"}
      ],
      dolci: [
        {n:"Cremeria Cavour", v:4.9, d:"Dal 1947", p:"€"},
        {n:"Stefino", v:4.8, d:"Cioccolato", p:"€€"}
      ],
      bar: [{n:"Camera con Vista", v:4.8, d:"Vista torri", p:"€€"}],
      pasticcerie: [{n:"Gamberini", v:4.8, d:"Dal 1907", p:"€€"}]
    },
    milano: {
      ristoranti: [{n:"Cracco", v:4.8, d:"Galleria", p:"€€€"}],
      dolci: [{n:"Gelateria della Musica", v:4.9, d:"Top Italia", p:"€€"}],
      bar: [{n:"Camparino", v:4.8, d:"Duomo", p:"€€€"}],
      pasticcerie: [{n:"Marchesi", v:4.9, d:"Prada", p:"€€€"}]
    }
  };

  // 3. Crea le 4 categorie
  const cats = [
    {id:'ristoranti', label:'🍝 Ristoranti'},
    {id:'dolci', label:'🍦 Dolci'},
    {id:'bar', label:'🍷 Bar'},
    {id:'pasticcerie', label:'🥐 Pasticcerie'}
  ];
  let filtro = 'ristoranti';

  catRow.innerHTML = cats.map(c =>
    `<button class="chip" data-cat="${c.id}" style="padding:8px 14px; margin:4px; border-radius:12px; background:${c.id===filtro?'#FF8C00':'transparent'}; color:${c.id===filtro?'#1a0b2e':'#FFB347'}; border:1px solid #FF8C00; cursor:pointer; font-weight:600; transition:0.2s;">${c.label}</button>`
  ).join('');

  catRow.querySelectorAll('button').forEach(btn => {
    btn.onclick = () => {
      filtro = btn.dataset.cat;
      catRow.querySelectorAll('button').forEach(b => {
        b.style.background = 'transparent';
        b.style.color = '#FFB347';
      });
      btn.style.background = '#FF8C00';
      btn.style.color = '#1a0b2e';
      cerca();
    };
  });

  // 4. Funzione cerca
  function cerca() {
    const citta = input.value.toLowerCase().trim();
    if(citta.length < 2) {
      resultsList.innerHTML = '';
      if(summary) summary.textContent = '';
      return;
    }

    const dati = DB[citta] || DB['modena'];
    const lista = dati[filtro] || [];

    if(summary) summary.textContent = `${lista.length} risultati per ${filtro} a ${citta.charAt(0).toUpperCase()+citta.slice(1)}`;

    resultsList.innerHTML = lista.map(p => `
      <div role="listitem" style="background:linear-gradient(135deg,#2d1b4e,#1a0b2e); border:1px solid rgba(255,140,0,0.3); border-radius:16px; padding:18px; margin-bottom:12px; cursor:pointer; transition:0.2s;" onmouseover="this.style.borderColor='#FF8C00'" onmouseout="this.style.borderColor='rgba(255,140,0,0.3)'">
        <div style="display:flex; justify-content:space-between; align-items:start; margin-bottom:8px;">
          <h3 style="color:#FFB347; font-size:18px; margin:0; font-weight:700;">${p.n}</h3>
          <span style="background:rgba(255,215,0,0.2); color:#FFD700; padding:4px 10px; border-radius:12px; font-size:13px; font-weight:700;">★ ${p.v}</span>
        </div>
        <p style="color:#c9a86b; margin:0 0 6px; font-size:14px;">${p.d}</p>
        <span style="color:#888; font-size:12px;">${p.p} · ${citta.charAt(0).toUpperCase()+citta.slice(1)}</span>
      </div>
    `).join('');
  }

  // 5. Avvia ricerca su INVIO o mentre scrivi
  input.addEventListener('input', () => {
    if(input.value.length > 2) cerca();
  });
  input.addEventListener('keyup', e => {
    if(e.key === 'Enter') cerca();
  });
});