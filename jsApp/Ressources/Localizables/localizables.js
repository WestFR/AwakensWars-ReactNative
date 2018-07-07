import I18n from 'react-native-i18n';

// Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
I18n.fallbacks = true;

I18n.translations = {
  en: {
    homeTitle: 'AwakensWars : Films',
    
    detailGeneral: 'General informations',

    detailFilmTitle: 'Film : ',
    detailFilmName: 'Film name : ',
    detailFilmSynopsis: 'Synopsis : ',
    detailFilmAllSynopsis: 'Synopsis details',
    detailFilmProducer: 'Producer : ',
    detailFilmDirector: 'Director : ',
    detailFilmReleaseDate: 'Release date : ',
    
    detailCharacterTitle: 'Character : ',
    detailCharacterName : 'Character name : ',
    detailCharacterGender: 'Gender : ',

    detailCharacterHomeworld : 'Home : ',

    detailsFilms: 'Films informations',
    detailsCharacters: 'Characters informations',
    detailPlanets: 'Planets informations',
    detailStarships: 'Starships informations',
    detailVehicles: 'Vehicles informations',
    detailSpecies: 'Species informations',

    alertMainTitle: 'App informations',
    alertMainDesc: 'Please choose the desired action to get the information from the application.',
    aboutTitle: 'About',
    aboutDesc: 'First mobile application using React Native technology developed by an independent French developer !\n\nThis application uses an API for displaying game data (https://swapi.co).\n\nThe wallpapers and images used in the application come from open-source sites and are not subject to copyright.\n\nThe source code of the application is available on GitHub for anyone interested in hybrid development (WestFR).',
    rateMeTitle: 'Rate me',
    rateMeError: 'The application is not published so no page of the store is available.\n\n See "AlertsManager.js" file if your app is published.',
    othersAppsTitle: 'Others apps',
    othersAppsError: 'No website URL for this developer is defined, see "AlertsManager.js" file.',
    cancelTitle: 'Cancel',
  },
  fr: {
    homeTitle: 'AwakensWars : Films',
    
    detailGeneral: 'Informations générales',

    detailFilmTitle: 'Film : ',
    detailFilmName: 'Nom du film : ',
    detailFilmSynopsis: 'Synopsis : ',
    detailFilmAllSynopsis: 'Détails du synopsis',
    detailFilmProducer: 'Producteur : ',
    detailFilmDirector: 'Directeur : ',
    detailFilmReleaseDate: 'Date de sortie : ',
    
    detailCharacterTitle: 'Personnage : ',
    detailCharacterName : 'Nom du personnage : ',
    detailCharacterGender: 'Genre : ',

    detailCharacterHomeworld : 'Maison : ',

    detailsFilms: 'Informations films',
    detailCharacters: 'Informations personnages',
    detailPlanets: 'Informations planètes',
    detailStarships: 'Informations vaisseaux',
    detailVehicles: 'Informations véhicules',
    detailSpecies: 'Informations espèces',

    alertMainTitle: 'Informations de l\'application',
    alertMainDesc: 'Veuillez choisir l\'action souhaitée pour obtenir les informations de l\'application.',
    aboutTitle: 'A propos',
    aboutDesc: 'Première application mobile utilisant la technologie React Native développée par un développeur français indépendant!\n\nCette application utilise une API pour afficher les données du jeu (https://swapi.co).\n\nLes fonds d\'écran et les images utilisées dans l\'application proviennent de sites open-source et ne sont pas soumises au droit d\'auteur.\n\nLe code source de l\'application est disponible sur GitHub pour toute personne intéressée par le développement hybride (WestFR).',
    rateMeTitle: 'Notez moi',
    rateMeError: 'L\'application n\'est pas publiée, donc aucune page du magasin n\'est disponible.\n\n Voir le fichier "AlertsManager.js" si votre application est publiée.',
    othersAppsTitle: 'Autres applications',
    othersAppsError: 'Aucune URL de site Web pour ce développeur n\'est définie, voir le fichier "AlertsManager.js."',
    cancelTitle: 'Annuler',
  },
};