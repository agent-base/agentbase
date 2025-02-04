const translation = {
  steps: {
    header: {
      creation: 'Créer des Connaissances',
      update: 'Ajouter des données',
    },
    one: 'Choisissez la source de données',
    two: 'Prétraitement et Nettoyage du Texte',
    three: 'Exécutez et terminez',
  },
  error: {
    unavailable: 'Cette connaissance n\'est pas disponible',
  },
  stepOne: {
    filePreview: 'Aperçu du fichier',
    pagePreview: 'Aperçu de la page',
    dataSourceType: {
      file: 'Importer à partir d\'un fichier texte',
      notion: 'Synchroniser depuis Notion',
      web: 'Synchroniser depuis le site web',
    },
    uploader: {
      title: 'Télécharger le fichier texte',
      button: 'Glisser et déposer le fichier, ou',
      browse: 'Parcourir',
      tip: 'Prend en charge {{supportTypes}}. Max {{size}}MB chacun.',
      validation: {
        typeError: 'Type de fichier non pris en charge',
        size: 'Fichier trop volumineux. Le maximum est de {{size}}MB',
        count: 'Plusieurs fichiers non pris en charge',
        filesNumber: 'Vous avez atteint la limite de téléchargement par lot de {{filesNumber}}.',
      },
      cancel: 'Annuler',
      change: 'Changer',
      failed: 'Le téléchargement a échoué',
    },
    notionSyncTitle: 'Notion n\'est pas connecté',
    notionSyncTip: 'Pour synchroniser avec Notion, une connexion à Notion doit d\'abord être établie.',
    connect: 'Aller à connecter',
    button: 'suivant',
    emptyDatasetCreation: 'Je veux créer un Savoir vide',
    modal: {
      title: 'Créer une Connaissance vide',
      tip: 'Une Connaissance vide ne contiendra aucun document, et vous pouvez télécharger des documents à tout moment.',
      input: 'Nom de la connaissance',
      placeholder: 'Veuillez entrer',
      nameNotEmpty: 'Le nom ne peut pas être vide',
      nameLengthInvalid: 'Le nom doit comporter entre 1 et 40 caractères.',
      cancelButton: 'Annuler',
      confirmButton: 'Créer',
      failed: 'Création échouée',
    },
    website: {
      limit: 'Limite',
      fireCrawlNotConfiguredDescription: 'Configurez Firecrawl avec la clé API pour l’utiliser.',
      selectAll: 'Tout sélectionner',
      unknownError: 'Erreur inconnue',
      firecrawlDoc: 'Docs Firecrawl',
      totalPageScraped: 'Nombre total de pages extraites :',
      preview: 'Aperçu',
      crawlSubPage: 'Explorer les sous-pages',
      configure: 'Configurer',
      firecrawlDocLink: 'https://docs.agentbase.ai/guides/knowledge-base/sync-from-website',
      maxDepth: 'Profondeur maximale',
      fireCrawlNotConfigured: 'Firecrawl n’est pas configuré',
      firecrawlTitle: 'Extraire du contenu web avec 🔥Firecrawl',
      scrapTimeInfo: 'Pages récupérées au total dans un délai de {{time}}s',
      options: 'Options',
      exceptionErrorTitle: 'Une exception s’est produite lors de l’exécution de la tâche Firecrawl :',
      includeOnlyPaths: 'Inclure uniquement les chemins d’accès',
      resetAll: 'Tout réinitialiser',
      run: 'Courir',
      extractOnlyMainContent: 'Extraire uniquement le contenu principal (pas d’en-têtes, de navigations, de pieds de page, etc.)',
      excludePaths: 'Exclure les chemins d’accès',
      maxDepthTooltip: 'Profondeur maximale à explorer par rapport à l’URL saisie. La profondeur 0 gratte simplement la page de l’URL saisie, la profondeur 1 récupère l’URL et tout ce qui suit l’URL saisie + un /, et ainsi de suite.',
    },
  },
  stepTwo: {
    segmentation: 'Paramètres de bloc',
    auto: 'Automatique',
    autoDescription: 'Définir automatiquement les règles de découpage et de prétraitement. Il est recommandé aux utilisateurs non familiers de sélectionner ceci.',
    custom: 'Personnalisé',
    customDescription: 'Personnalisez les règles de morceaux, la longueur des morceaux et les règles de prétraitement, etc.',
    separator: 'Identifiant de segment',
    separatorPlaceholder: 'Par exemple, nouvelle ligne (\\\\n) ou séparateur spécial (tel que "***")',
    maxLength: 'Longueur maximale du morceau',
    overlap: 'Chevauchement de morceaux',
    overlapTip: 'La définition d\'un chevauchement de morceaux peut maintenir la pertinence sémantique entre eux, améliorant ainsi l\'effet de récupération. Il est recommandé de définir 10%-25% de la taille maximale du morceau.',
    overlapCheck: 'le chevauchement de morceaux ne doit pas être plus grand que la longueur maximale de morceau',
    rules: 'Règles de prétraitement du texte',
    removeExtraSpaces: 'Remplacer les espaces consécutifs, les sauts de ligne et les tabulations',
    removeUrlEmails: 'Supprimez toutes les URL et adresses e-mail',
    removeStopwords: 'Supprimez les mots vides tels que "a", "an", "the"',
    preview: 'Confirmer & Aperçu',
    reset: 'Réinitialiser',
    indexMode: 'Mode d\'index',
    qualified: 'Haute Qualité',
    recommend: 'Recommander',
    qualifiedTip: 'Appelez l\'interface d\'embedding système par défaut pour le traitement afin de fournir une précision plus élevée lorsque les utilisateurs font une requête.',
    warning: 'Veuillez d\'abord configurer la clé API du fournisseur de modèle.',
    click: 'Aller aux paramètres',
    economical: 'Économique',
    economicalTip: 'Utilisez des moteurs vectoriels hors ligne, des index de mots-clés, etc. pour réduire la précision sans dépenser de jetons',
    QATitle: 'Segmentation en format Question & Réponse',
    QATip: 'Activer cette option consommera plus de jetons',
    QALanguage: 'Segmenter en utilisant',
    estimateCost: 'Estimation',
    estimateSegment: 'Morceaux estimés',
    segmentCount: 'morceaux',
    calculating: 'En calcul...',
    fileSource: 'Prétraiter les documents',
    notionSource: 'Prétraiter les pages',
    other: 'et autres',
    fileUnit: 'fichiers',
    notionUnit: 'pages',
    previousStep: 'Étape précédente',
    nextStep: 'Enregistrer & Traiter',
    save: 'Enregistrer & Traiter',
    cancel: 'Annuler',
    sideTipTitle: 'Pourquoi découper et prétraiter ?',
    sideTipP1: 'Lors du traitement des données textuelles, le découpage et le nettoyage sont deux étapes importantes de la prétraitement.',
    sideTipP2: 'La segmentation divise les longs textes en paragraphes afin que les modèles puissent mieux comprendre. Cela améliore la qualité et la pertinence des résultats du modèle.',
    sideTipP3: 'Le nettoyage élimine les caractères et les formats inutiles, rendant le Savoir plus propre et plus facile à analyser.',
    sideTipP4: 'Un bon découpage et nettoyage améliorent les performances du modèle, fournissant des résultats plus précis et précieux.',
    previewTitle: 'Aperçu',
    previewTitleButton: 'Aperçu',
    previewButton: 'Passage au format Q&R',
    previewSwitchTipStart: 'L\'aperçu actuel du morceau est en format texte, passer à un aperçu en format de questions-réponses va',
    previewSwitchTipEnd: 'consommer des tokens supplémentaires',
    characters: 'personnages',
    indexSettingTip: 'Pour changer la méthode d\'index, veuillez aller à la',
    retrievalSettingTip: 'Pour changer la méthode d\'index, veuillez aller à la',
    datasetSettingLink: 'Paramètres de connaissance.',
    webpageUnit: 'Pages',
    websiteSource: 'Site web de prétraitement',
    separatorTip: 'Un délimiteur est le caractère utilisé pour séparer le texte. \\n\\n et \\n sont des délimiteurs couramment utilisés pour séparer les paragraphes et les lignes. Combiné à des virgules (\\n\\n,\\n), les paragraphes seront segmentés par des lignes lorsqu’ils dépasseront la longueur maximale des morceaux. Vous pouvez également utiliser des délimiteurs spéciaux définis par vous-même (par exemple ***).',
  },
  stepThree: {
    creationTitle: '🎉 Connaissance créée',
    creationContent: 'Nous avons automatiquement nommé le Savoir, vous pouvez le modifier à tout moment',
    label: 'Nom de la connaissance',
    additionTitle: '🎉 Document téléchargé',
    additionP1: 'Le document a été téléchargé dans la Connaissance',
    additionP2: ', vous pouvez le trouver dans la liste des documents de la Connaissance.',
    stop: 'Arrêter le traitement',
    resume: 'Reprendre le traitement',
    navTo: 'Aller au document',
    sideTipTitle: 'Qu\'est-ce qui suit ?',
    sideTipContent: 'Après l\'indexation du document, la Connaissance peut être intégrée dans l\'application en tant que contexte, vous pouvez trouver le paramètre de contexte sur la page d\'orchestration de prompt. Vous pouvez également le créer en tant que plugin d\'indexation ChatGPT ind',
    modelTitle: 'Êtes-vous sûr de vouloir arrêter l\'embedding ?',
    modelContent: 'Si vous devez reprendre le traitement plus tard, vous continuerez à partir de l\'endroit où vous vous êtes arrêté.',
    modelButtonConfirm: 'Confirmer',
    modelButtonCancel: 'Annuler',
  },
  firecrawl: {
    apiKeyPlaceholder: 'Clé API de firecrawl.dev',
    configFirecrawl: 'Configurer 🔥Firecrawl',
    getApiKeyLinkText: 'Obtenez votre clé API auprès de firecrawl.dev',
  },
}

export default translation
