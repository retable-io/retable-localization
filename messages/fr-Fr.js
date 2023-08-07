/* eslint-disable max-len */
/* eslint-disable import/no-anonymous-default-export */
import { LOCALES } from '../locales';

export default {
  [LOCALES.FRENCH]: {
    // Dashboard
    welcome:
      'Bonjour et bienvenue au Retable. Vous pouvez ajouter un nouvel espace de travail ici. 👋',
    workspaceTip: 'Vous pouvez modifier le nom et la description de votre espace de travail. 👆',
    shareTip:
      "Vous pouvez partager vos workspaces avec d'autres personnes et commencer facilement votre collaboration. ⛵",
    enjoy: 'Profitez de Retable avec votre premier projet ! 😍',
    next: 'Suivant',
    prev: 'Précédent',
    finishTour: 'Terminer le Tour',
    newWrokspace: 'Ajouter un espace de travail',
    workspaces: 'Espaces de travail',
    WorkspaceTrash: 'Corbeille',
    workspaceNotfound: 'Espace de travail ou projet introuvable.',
    noWorkspaces: "Vous n'avez pas d'espace de travail.",
    isError: 'Il y a une erreur.',
    gridView: 'Vue Grille',
    listView: 'Vue Liste',
    addingWc: "Ajout d'un nouvel espace de travail ",
    emptyWorkspaceMessage:
      'Vous pouvez ajouter un nouveau projet en cliquant sur le bouton "Ajouter un projet".',
    emptyWorkspaceMessageApp:
      'Vous pouvez ajouter une nouvelle application en cliquant sur le bouton "Ajouter".',
    projects: 'Projets',
    apps: 'Applications',
    app: 'Application',

    gdpr: 'Certificat GDPR',
    community: 'Communauté',
    downloadDesktopApp: "Télécharger l'application de bureau",
    retableChromeExt: 'Extension Chrome Retable',
    retableChromeExtHeader: "Essayez l'extension Chrome Retable 🚀",
    retableChromeExtText:
      'Visualisez, éditez et collaborez facilement sur tous les fichiers CSV sans les télécharger !',
    // Main Top Bar
    search: 'Rechercher',
    accountDetails: 'Détails du Compte',
    logout: 'Se Déconnecter',
    // RetableAlertPop
    needUpgrade: 'Vous devez mettre à niveau votre abonnement pour continuer cette opération.',
    needUpgradePro:
      "Vous devez passer de l'abonnement Pro à l'abonnement Équipe pour continuer cette opération.",
    needUpgradeOrDelete:
      'Vous devez mettre à niveau votre abonnement pour continuer cette opération ou la supprimer définitivement sans la déplacer dans la corbeille.',
    upgrade: 'Mettre à niveau',
    upgrade2: 'Mettre à niveau',
    upgradeNow: 'Mettre à niveau maintenant',
    upgradeNowToolTip: 'Mettez à niveau votre abonnement.',
    youAreInProPlan: "Vous êtes dans l'abonnement Pro.",
    youAreInBasicPlan: "Vous êtes dans l'abonnement de base.",
    youAreInEnterprisePlan: "Vous êtes dans l'abonnement Équipe.",
    youAreInBussinessProPlan: "Vous êtes dans l'abonnement Pro Business.",
    youAreInBussinessBasicPlan: "Vous êtes dans l'abonnement Basic Business.",
    youAreAlreadyIn: "Vous êtes déjà dans le plan d'équipe.",
    needUpgradeShareRole:
      'Mettez à niveau maintenant pour utiliser les rôles Éditeur et Spectateur.',
    //RetableAutomationActionInput
    separateEmails: 'Destinataires (séparez plusieurs adresses e-mail par des virgules)',
    content: 'Contenu',
    subject: 'Sujet',
    //RetableAutomationModal
    NameValidation: "Le nom doit comporter plus d'un caractère.",
    selectColumn: 'Sélectionnez une colonne',
    invalidEmail: 'E-mail invalide',
    upperCaseEmailError: "Veuillez saisir l'e-mail en lettres minuscules.",
    triggerNotcompleted: "Le déclencheur n'est pas terminé.",
    actionNotcompleted: "L'action n'est pas terminée.",
    deleteAutomation: "Supprimer l'automatisation",
    deleteAutomationText:
      "Cette opération supprimera l'automatisation de ce projet. Êtes-vous sûr de vouloir effectuer cette opération ?",
    cancel: 'Annuler',
    delete: 'Supprimer',
    automation: 'Automatisation',
    name: 'Nom',
    automationName: "Nom de l'automatisation",
    description: 'Description',
    reWs: "Renommer l'espace de travail",
    automationDescription: "Description de l'automatisation",
    trigger: 'Déclencheur',
    type: 'Type',
    selectTrigger: 'Sélectionnez un déclencheur',
    action: 'Action',
    selectAction: 'Sélectionnez une action',
    lastUpdated: 'Dernière mise à jour par {path}',
    att: 'à {path}',
    save: 'Enregistrer',
    discard: 'Ignorer',
    pleaseSelTab: 'Veuillez sélectionner une table.',
    //RetableUserColumnInput
    select: 'Sélectionner',
    //RetableAutomationTriggerInput
    table: 'Tableau',
    selectTable: 'Sélectionnez un tableau',
    column: 'Colonne',
    //RetableAutomation
    noDescription: 'Pas de description',
    addNew: 'Ajouter un nouveau',
    noAutomationsText:
      'Il n\'y a pas d\'automatisation dans ce projet, utilisez le bouton "Ajouter un nouveau" pour en ajouter un.',
    noAutomotionViewer: "Il n'y a pas d'automatisation dans ce projet.",
    automationRunCountWarning:
      "Vous avez atteint le nombre total d'exécutions mensuelles d'automatisation. Votre crédit d'exécutions d'automatisation sera renouvelé le {date}.",
    automationCountWarning:
      'Vous pouvez créer un maximum de {count} automatisations dans un espace de travail.',
    automationCountInfo: 'Vous avez utilisé {usedCount} sur {totalCount} automatisation(s).',
    runCount: "Nombre d'exécutions",
    automationRunCountInfo: 'Total des automatisations en cours dans cet espace de travail.',

    //RetableCalendarDropdown
    Hm: ' HH:mm',
    reset: 'RÉINITIALISER',
    apply: 'APPLIQUER',

    //RetableCalendarInput
    day: 'jour',
    month: 'mois',
    year: 'année',

    //RetableColorPicker
    enterCustomColors:
      'Vous pouvez entrer des couleurs personnalisées au format "#FFF" ou "#FFFFFF".',

    //RetableColumnInput
    selectedColor: 'Couleur sélectionnée :',
    eg: 'par exemple ',
    attachFile: 'Ajouter une pièce jointe',
    fileSizelarge5: 'Taille de fichier supérieure à 5 Mo !',
    fileSizelarge5Text:
      'Taille de fichier supérieure à 5 Mo ! ' +
      'Vous pouvez mettre à niveau votre abonnement pour télécharger des fichiers de plus de 5 Mo. ',
    fileSizelarge20: 'Taille de fichier supérieure à 20 Mo !',
    clean: 'Nettoyer',
    fieldRequired: 'Ce champ est requis.',
    required: 'Requis',
    mustRequired: 'Obligatoire',
    selectColabs: 'Sélectionner des collaborateurs',
    searchColabs: 'Rechercher parmi les collaborateurs',
    selecetAColab: 'Sélectionner un collaborateur',
    findMe: 'Me trouver',
    permissionLocationDeniedDesc: 'Vérifiez les paramètres de votre navigateur.',

    // RetableCreateFromTemplateModal
    selectWorkspaceOrProject: 'Vous devez sélectionner un espace de travail ou un projet.',
    use: 'Utiliser',

    // RetableDashboardTrashBin
    years: ' an(s)',
    months: ' mois',
    days: ' jour(s)',
    hours: ' heure(s)',
    minutes: ' minute(s)',
    second: ' seconde(s)',
    seconds: ' seconde(s)',
    ago: ' il y a',
    just: "à l'instant",
    dashboardTrashBin: 'Corbeille',
    dashboardTrashBinTooltip: 'Restaurer ou supprimer des projets et des espaces de travail',
    typeProject: 'Type : Projet',
    typeWorkspace: 'Type : Espace de travail',
    restore: 'Restaurer',
    restored: 'Restauré',
    restoring: 'Restauration',
    remove: 'Supprimer',
    download: 'Télécharger',
    removed: 'Supprimé',
    noDeletedItem: "Il n'y a aucun espace de travail ou projet supprimé dans votre corbeille.",
    deletedBy: 'Supprimé par ',

    // RetableDropdownInput
    selectSomeOptions: 'Sélectionner des options',
    searchOptions: 'Rechercher parmi les options',
    selectOption: 'Sélectionner une option',
    //RetableExpandDropdown
    itsEmpty: "C'est vide.",
    col: 'Col',

    // RetableExpandCellModal
    cellPreview: 'Aperçu de la cellule',
    done: 'Terminé',
    fgColor: 'Couleur avant-plan',
    bgColor: 'Couleur arrière-plan',

    // RetableDuplicateTableModal
    move: 'Déplacer',
    copy: 'Copier',
    selectProject: 'Sélectionner un projet',

    // RetableEditableFormQuestion
    unknownRow: 'Ligne inconnue',
    fieldName: 'Nom du champ',
    fieldDesc: 'Description du champ',
    typeQuestionText: `Saisissez un contenu à afficher sur le formulaire à la place du nom de colonne par défaut.`,
    typeQuestionDesc: `Saisissez un contenu à afficher sur le formulaire pour la description de la colonne.`,
    addDesc: 'Ajouter une description pour ce formulaire',
    coverImage: 'Image de couverture',

    // RetableEditFormModal
    embedForm: 'Intégrer le formulaire sur votre page Web',
    copied: 'Copié !',
    copyClipboard: 'Copier dans le presse-papiers',
    openLinkTab: 'Ouvrir le lien dans un nouvel onglet',
    shareToGetSubmissions: "Partagez ce lien pour recevoir des soumissions de n'importe qui.",
    editForm: 'Modifier le formulaire Retable',
    submit: 'Soumettre',
    share: 'Partager',
    columns: 'Colonnes',
    getEmailNotification: 'Recevoir des notifications par e-mail pour les nouvelles réponses',
    edit: 'Modifier',
    codeEdit: 'Modifier le code',
    codeLive: 'Code en direct',
    codePreview: 'Aperçu du code',
    addBold: 'Ajouter du texte en gras',
    addItalic: 'Ajouter du texte en italique',
    addStrikethrough: 'Ajouter du texte barré',
    addHr: 'Insérer une ligne de séparation',
    addTitle: 'Insérer un titre',
    addLink: 'Ajouter un lien',
    addQuote: 'Insérer une citation',
    addCode: 'Insérer du code',
    addCodeBlock: 'Insérer un bloc de code',
    addComment: 'Insérer un commentaire',
    addImage: 'Ajouter une image',
    unorderedListCommand: 'Modifier la liste non ordonnée',
    orderedListCommand: 'Modifier la liste ordonnée',
    checkedListCommand: 'Modifier la liste à cocher',
    textHere: 'Texte ici',
    urlHere: 'URL ici',
    lastHiddenColumn: 'Vous ne pouvez pas masquer la dernière colonne du formulaire.',

    // RetableEmbeddedUrlModal
    embedRetable: 'Intégrer Retable',
    embedCode: "Code d'intégration",
    doubleclickCopy: 'Double-cliquez pour copier',
    width: 'Largeur',
    height: 'Hauteur',
    wrongFiletype: 'Type de fichier incorrect.',
    noAccess: "Vous n'avez pas l'autorisation de faire cela.",
    selectAnotherImage: 'Sélectionnez une autre image ou faites glisser-déposer.',
    selectImage: 'Sélectionnez une image ou faites glisser-déposer.',
    uploadImage: 'Télécharger une image.',
    uploadFile: 'Télécharger un fichier.',
    selectAnothrFile: 'Sélectionnez un autre fichier ou faites glisser-déposer.',
    selectFile: 'Sélectionnez un fichier ou faites glisser-déposer.',
    fileUpload: 'Téléchargement de fichier',
    customFileUpload: 'Mon appareil',
    projectAttachment: 'Pièce jointe de projet',
    selFile: 'Sélectionnez un fichier',
    upload: 'Télécharger',
    uploadMore: 'Télécharger davantage',
    viewEditSelected: 'Voir/Modifier',
    fillFields: 'Veuillez remplir tous les champs obligatoires.',
    insertValidAddress: 'Veuillez insérer une adresse e-mail valide.',
    update: 'Mettre à jour',
    hideBrand: 'Masquer le logo de Retable',
    fillEmptyFields: "Vous devez remplir au moins l'un des champs ci-dessus.",

    //RetableForm
    fileUploading: 'Téléchargement de fichier(s) en cours',
    clearForm: 'Effacer le formulaire',
    maliciousMessage1: "N'envoyez jamais de mots de passe via les formulaires Retable.",
    maliciousMessage2: 'Signaler un formulaire malveillant.',
    shareForm: 'Partager le formulaire',
    responseWarn: 'Vous devez être connecté pour recevoir ces réponses au formulaire.',

    // RetablePublicFormView
    thankForSubmission: 'Merci pour votre soumission.',
    retableUsing:
      'Quel que soit votre rôle ou votre besoin, des ressources humaines au marketing, des ventes à la gestion de projet et' +
      ' de la conception : ',
    noNeedSearch: "Vous n'avez pas besoin de chercher ! ",
    provideClass:
      'Il offre une qualité et des performances de premier ordre chaque jour sans limites.',
    qualityPerformance:
      'Il offre une qualité et des performances de premier ordre chaque jour sans limites.',
    gotoRetable: 'Accéder à Retable',
    createFormNow: 'Créez votre formulaire en ligne dès maintenant',
    updateSubmission: 'Mettre à jour votre soumission',
    backToRow: 'Retourner à la ligne',
    backToForm: 'Retourner au formulaire',
    error: 'Erreur',
    noViewCreate: "Vous n'avez aucune vue ou table. Vous pouvez en créer une nouvelle.",
    thisPrivateForm: 'Bonjour ! 👋 Ceci est un formulaire privé.',
    pleaseLoginToView: 'Veuillez vous connecter pour voir.',
    redirectText: 'Redirection vers <p1></p1> dans <p2></p2> secondes...',
    enterUrl: "Entrez l'URL ici",
    redirectStart:
      'Une fois le formulaire soumis, la redirection se fait après un compte à rebours de 10 secondes.',
    redirectUrl: 'URL de redirection',
    formEmailError:
      "Vous ne pouvez pas envoyer d'e-mails aux utilisateurs qui n'ont pas de compte Retable",
    sendCopyForm: 'Envoyez-moi une copie de mes réponses',
    sendMailDescription:
      'Les personnes qui remplissent le formulaire peuvent recevoir une copie de leur réponse au formulaire par e-mail.',
    writeHere: 'Écrivez ici',

    // RetableImportModal
    sure: 'Êtes-vous sûr ?',
    affectDefaultValue: `Cette table comporte au moins un type de colonne numérotée automatiquement ou est ouverte avec 
des options de valeur par défaut. 
Vos données importées peuvent être affectées en raison de ces conditions.`,
    confirm: 'Confirmer',
    selectCorrectFile: 'Vous devez sélectionner un fichier .csv ou .xls(x).',
    selectRetableCorrectFile: 'Vous devez sélectionner un fichier .retable.',
    newColumn: ' Nouvelle colonne',
    checkDuplicated: "Veuillez vous assurer qu'aucune colonne en double n'a été sélectionnée.",
    allMustSelectedCol: 'Toutes les colonnes importées doivent avoir une colonne sélectionnée.',
    selectAnotherType: 'Sélectionner un autre fichier .csv ou .xls(x)',
    selectRetableType: 'Sélectionner un autre fichier .retable',
    selectTypeFile: 'Sélectionner un fichier .csv ou .xls(x)',
    selectRetableTypeFile: 'Sélectionner un fichier .retable',
    importProject: 'Importer un fichier .csv ou .xls(x)',
    importNewProject: 'Importer un nouveau projet.',
    importTable: 'Importer une table',
    importNewTable: 'Importer une nouvelle table.',
    importData: 'Importer des données',
    addRecordExistingTable: 'Ajouter de nouvelles entrées à une table existante.',
    importedColumn: 'Colonne importée',
    tableColumn: 'Colonne de la table',
    import: 'Importer',
    firstIsRowInclude: "La première ligne est l'en-tête, ne pas inclure cet en-tête.",
    firstRowheader: "La première ligne est l'en-tête.",
    trimWhitespace: 'Supprimer les espaces vides.',
    insert: 'Insérer',
    insertDescription:
      "Vous pouvez sélectionner n'importe quel fichier CSV ou XLS de votre appareil pour l'importer facilement à la fin de votre table Retable.",
    replaceDescription:
      "Toutes vos données dans cette table seront remplacées par les données que vous avez importées. Si les données n'ont pas d'équivalent dans le fichier importé, ces données seront ajoutées à la fin de votre table Retable.",
    chooseUniqueColumns: 'Choisir des colonnes clés uniques',
    replaceHeader: 'Remplacer également les en-têtes',
    repeatingSourceColumnWarning:
      'Les données dans la table que vous avez importée ne sont pas uniques.',
    repeatingTargetColumnWarning: 'Les données de votre table Retable ne sont pas uniques.',
    emptyFileWarning: 'Ce fichier est vide.',
    insertData: 'Insérer des données',
    replaceData: 'Remplacer les données',
    wrongURLFormat: "Format d'URL incorrect.",
    importFileURL: "Importer l'URL du fichier",
    importFileURLDesc: "Importer une nouvelle table à partir d'une URL de fichier.",
    inaccessibleURL: "L'URL est inaccessible.",
    // RetableInviteMoreModal
    enterEmail: 'Veuillez entrer une adresse e-mail',
    cantInvite5: 'Vous ne pouvez pas inviter plus de 5 utilisateurs à la fois.',
    inviteMore: 'Références',
    referInfo: 'Obtenez 3 $ de crédit pour chaque personne que vous référez à Retable.',
    referDescription: 'Vous ne pouvez inviter que 5 personnes à la fois',
    to: 'À ',
    invite: 'Inviter',

    // RetableMessage
    wirteMsg: 'Écrivez quelque chose...',
    y: 'a',
    mon: 'lun',
    d: 'j',
    h: 'h',
    m: 'm',
    s: 's',
    you: 'Vous',
    anonymousUser: 'Utilisateur anonyme',
    badgelilagray: 'badge-lila-gray',
    commented: ' a commenté',
    rowIn: ' cette ligne dans ',
    editedCell: ' a modifié cette cellule dans {path}',
    noImage: 'Aucune image disponible.',

    // RetablePlanCard
    currentPlan: 'Plan actuel',
    contactUs: 'Contactez-nous',
    features: 'FONCTIONNALITÉS',

    // RetableProblemsModal
    requiredCell: 'Obligatoire, cellule de la ligne {path} ',
    isEmpty: ' est vide.',
    valueOf: ' La valeur de la ligne {path}',
    dontMatchCol: ' ne correspond pas au type de colonne.',
    colMustUniqe:
      'Chaque valeur dans cette colonne doit être unique. Mais il y a {path} cellules avec la même valeur',
    rowValue: 'La valeur {path} doit correspondre au format de colonne.',
    rowValidation: 'La valeur de la ligne {path} doit suivre la ou les règles de validation.',
    validationErr: 'Erreurs de validation dans les données de la cellule.',
    problemsof: 'Problèmes de {path}',

    // RetableProfilePicEditModal
    picSizeLarge1: "La taille de l'image est supérieure à 1 Mo.",
    profilePicture: 'Photo de profil',
    removeSure: 'Êtes-vous sûr de vouloir supprimer votre photo de profil ?',
    chooseImage: 'Choisir une image',
    imgValidation: 'Seuls les fichiers .jpeg et .png sont autorisés.',

    // RetableProject
    project: 'Projet',
    noRecover: 'Une fois supprimé, vous ne pourrez plus récupérer ce projet !',
    sharedUsers: 'Utilisateurs partagés :',
    sureDeleteProj: `Vous êtes sur le point de supprimer ce projet.`,

    //RetableProjectChat
    startDiscussion: 'Démarrer une discussion',
    startDis: "Démarrer une discussion. Vous pouvez mentionner d'autres personnes avec '@'",

    // RetableProjectDropdown
    authorizedRename: "Vous n'êtes pas autorisé à renommer.",

    // RetableProjectShareModal
    editor: 'Éditeur',
    owner: 'Propriétaire',
    removeUser: "Supprimer l'utilisateur",
    removeTeam: "Supprimer l'équipe",
    removeUserText:
      "Cette opération supprimera l'utilisateur de cet espace." +
      ' Êtes-vous sûr de vouloir effectuer cette opération ?',
    removeTeamSpace:
      "Cette opération supprimera l'utilisateur de cet espace." +
      ' Êtes-vous sûr de vouloir effectuer cette opération ?',
    inviteMembers: 'Inviter des membres',
    publicproject: 'Projet public',
    copLink: 'Copier le lien',
    projLink: 'Lien du projet',
    worksLink: "Lien de l'espace de travail",
    unknownUser: 'Utilisateur inconnu',
    unknownTeam: 'Équipe inconnue',
    invitedUser: 'Utilisateur invité',
    resendEmail: "Renvoyer l'e-mail",
    noProjMembers: 'Aucun membre de projet.',
    workspaceMembers: "Membres de l'espace de travail",
    projectCollaborators: 'Inviter plus de collaborateurs de projet par e-mail',
    resendInvitation: "Renvoyer l'invitation",
    modalTitle: "Démographie de l'annuaire des employés",
    findEmail: 'Adresse e-mail',
    findEmailOrTeam: "Adresse e-mail ou une équipe par '@'",
    public: 'Public',
    anyoneCanSee: 'Tout le monde peut voir ce lien.',
    publicProjectLinkInfoOn:
      'Lorsque le commutateur de vue du projet est activé, la vue publique est automatiquement activée pour toutes les vues. ',
    publicProjectLinkInfoOff:
      'Lorsque le commutateur de vue du projet est désactivé, la vue publique est automatiquement désactivée pour toutes les vues.',
    projectUseDataInfo:
      'Si les utilisateurs que vous avez partagés sont connectés, ils peuvent cloner ce projet, cette table et ces données dans leurs espaces de travail personnels. Seuls les propriétaires peuvent activer ou désactiver le commutateur.',
    projectUseDataWarning: `Si vous activez l'option "Utiliser les données" pour votre projet, les personnes ayant le lien pourront accéder à toutes les données de ce projet et supprimer tout filtre ou masquage que vous avez appliqué en clonant le projet dans leur espace de travail Retable. Votre projet et vos tables ne seront pas affectés par ces changements.`,
    shared: 'Partagé',
    sharedFailMessage:
      'Partagé par e-mail dans le format approprié. Les e-mails inappropriés sont répertoriés ci-dessous.',

    // RetableProjectTrashBin
    projectTrash: 'Corbeille du projet',
    noDeletedTable: "Il n'y a aucune table ou vue supprimée dans votre corbeille.",
    view: 'Vue',

    //RetablePublicProjectShare
    refresh: 'Actualiser',
    embedOnWeb: 'Intégrer la table sur votre page web',
    useData: 'Utiliser les données',
    viewersCreateProj: `Les spectateurs peuvent créer un nouveau projet à partir de ce projet.
     (Si les utilisateurs avec qui vous partagez sont connectés.)`,
    tablesWillVisible: 'Les tables ci-dessous seront visibles par tous ceux qui ont le lien',
    shareWithUnique: 'Partager le projet avec un lien unique.',
    cusLink: 'Lien personnalisé',
    cusLinkDes: 'Créer un lien personnalisé vers ce projet.',
    accept: 'Accepter',
    linkReq: 'Lien requis.',

    // RetablePublicSpreadsheet
    incorrectData: 'Cette table contient des données incorrectes.',
    checkErrors: 'Vérifier les erreurs',

    // RetablePublicTableHeader
    saving: 'Enregistrement en cours...',
    changesSaved: 'Toutes les modifications enregistrées.',
    signUp: 'Inscrivez-vous',

    // RetablePublicView
    tableLocked: 'La table est verrouillée par ',

    // RetableRowShareModal
    bulk: 'En vrac',
    shareRow: 'Partager la ligne',
    useLink: 'Utilisez ce lien ou envoyez le lien par e-mail pour modifier la ligne.',
    hidden: '(Masqué)',
    send: 'Envoyer',
    sendRowLink: 'Envoyer le lien de vue de la ligne par e-mail',
    enterMailType: "Entrez un e-mail ou tapez '@'",
    noEmailOrCollabCol:
      "Il n'y a pas d'e-mails ou de colonnes de collaborateurs dans votre table. Veuillez créer un e-mail" +
      ' ou une colonne de collaborateurs pour utiliser le mode En vrac !',
    thisRow: 'Cette ligne',
    allRows: 'Toutes les lignes',
    bulkUpdateDesc:
      'Chaque ligne est envoyée à la personne de la colonne sélectionnée.' +
      " Les lignes ne sont pas attribuées à un collaborateur et aucun e-mail n'est envoyé à personne.",

    // RetableShareIcons
    shareText:
      'Organisez, affichez, partagez et modifiez des données comme dans des feuilles de calcul, facilement.',

    // RetableShareMenu
    all: 'Tout',
    onlyData: 'Données seulement',
    disableExport: "Désactiver l'exportation",
    disableExportInfo:
      'Les utilisateurs avec lesquels vous partagez le lien ne peuvent pas exporter votre table.',

    // RetableSnapshotListModal
    noSnapshots: 'Aucun instantané.',
    restoreTable: 'Restaurer la table',
    createTable: 'Créer une nouvelle table',
    snapshotDescription:
      'Un instantané doit être sélectionné lorsque vous souhaitez restaurer une table ou créer une nouvelle table.',
    // RetableSnapshotModal
    snapshots: 'Instantanés',
    takeSnapshot: 'Prendre un instantané',
    // RetableDataValidation
    validation: 'Validation',
    validationDes: 'Cette option permet de déterminer les règles de validation des données.',
    addRuleData: 'Ajouter une règle de validation des données.',
    addValidationRule: 'Ajouter une règle de validation',

    // RetableDelimiteColumnModal
    sureDeleteCol: 'Voulez-vous diviser les données de la colonne ?',
    split: 'Diviser',
    delimiter: 'Délimiteur',
    typePreview: 'Saisissez quelque chose et prévisualisez',
    preview: 'Aperçu',
    previewData: 'Aperçu des données',
    noDataFound: 'Aucune donnée trouvée.',
    multiple: 'Plusieurs',
    addMuUsers: 'Ajouter plusieurs collaborateurs',
    sendNotif: 'Envoyer une notification',
    notifyUsers:
      "Notifier les collaborateurs lorsqu'ils sont ajoutés ou lorsque la ligne dans laquelle ils ont été ajoutés est modifiée.",

    // RetableProjectHistoryModal
    rowSavedText:
      'La ligne est enregistrée mais vos données ne correspondent pas à la condition de filtrage.' +
      ' Vous pouvez voir cette ligne une fois que vous avez supprimé le filtre.',
    createdAt: 'Créé le ',
    updatedAt: 'Mis à jour le ',
    projectHistory: 'Historique du projet',
    noFoundProjectHistory: 'Aucun historique de projet trouvé.',

    // RetableReferenceTable
    selectReferenceTable: 'Sélectionnez la table de référence',
    lookUpColumn: 'Colonne de recherche',
    rollupColumn: 'Colonne Rollup',
    noPremissionOthers: "Vous n'avez pas la permission de voir d'autres tables.",
    selectRefCol: 'Sélectionnez la colonne de référence',
    rollupColumnConfigured:
      'Les colonnes Rollup doivent être configurées dans la colonne personnalisée.',

    // RetableLookupValue
    selectReferencedColumn: 'Sélectionnez la colonne de référence',
    referencedColumn: 'Colonne de référence',
    selectLookupColumn: 'Sélectionnez la colonne de recherche',
    selectRollupColumn: 'Sélectionnez la colonne Rollup',
    noReferencedColumn:
      "Vous avez besoin d'une colonne de référence pour ajouter une recherche. Ajoutez d'abord la colonne de référence avant de configurer cette colonne de recherche.",
    noReferencedColumnRollup:
      "Vous avez besoin d'une colonne de référence pour ajouter un Rollup. Ajoutez d'abord la colonne de référence avant de configurer cette colonne Rollup",
    // RetableRowData
    noImageFound: 'Aucune image trouvée.',

    // RetableRowHistoryModal
    rowDetail: 'Détail de la ligne',
    addNewRow: 'Ajouter une nouvelle ligne',
    history: 'Historique',
    comments: 'Commentaires',
    watchRowDesc:
      'Un e-mail de notification est envoyé aux observateurs lorsque la ligne est modifiée.',
    watchRowNumberDesc: "Nombre d'observateurs de cette ligne.",
    nohistory: 'Aucun changement pour le moment.',
    nocomments: 'Aucun commentaire pour le moment.',
    addColumn: 'Ajouter une colonne',
    prevRecord: 'Précédent',
    nextRecord: 'Suivant',
    addRowHistory: 'Ajouter',
    watchRow: 'Surveiller',
    showHiddenCols: 'Afficher {count} colonne(s) masquée(s)',

    // RetableSendMailModal
    sendSelectedEmail: 'Envoyer les données sélectionnées par e-mail',

    // RetableGenerateDataModal
    generateData: 'Générer des données',
    columnData: 'Données de colonne',
    noColumnData: 'Aucune donnée de colonne.',
    generate: 'Générer',

    //RetableSourceInput
    emptyOption: 'Option vide',
    sureRemoveOption: 'Êtes-vous sûr de vouloir supprimer cette option ?',
    sureCleanList: 'Êtes-vous sûr de vouloir vider la liste ?',
    clear: 'Effacer',
    sortAZ: 'Trier de A à Z',
    sortZA: 'Trier de Z à A',
    generateTableColumn: 'Générer à partir de la colonne de la table',
    addAnOption: 'Ajouter une option',
    addOption: 'Ajouter une option',
    selectedOptions: 'Il y a {path} option(s) sélectionnée(s).',
    optionNotFound: 'Option(s) non trouvée(s) !',

    // RetableEditColumnModal
    columnTypes: 'Types de colonne',
    addNewCol: 'Ajouter une nouvelle colonne',
    custCol: 'Personnaliser la colonne',
    baicTypeCol: 'Basique',
    advancedTypeCol: 'Avancé',
    premiumTypeCol: 'Premium',
    premiumBetaTitle: 'Gratuit en version bêta pour les comptes Pro et Équipe',
    collaborator: 'Collaborateur',
    addUsers: 'Ajouter des utilisateurs aux cellules.',
    enterChar: 'Veuillez saisir au moins un caractère.',
    selectReference: 'Veuillez sélectionner la table de référence et le champ de recherche.',
    customizeReferenced:
      'Vous ne pouvez pas personnaliser la colonne de référence avec ce type de colonne.',
    customizeReference:
      'Vous ne pouvez pas personnaliser la colonne de référence avec ce type de colonne.',
    customizeTableReference:
      'Vous ne pouvez pas personnaliser cette colonne car elle est utilisée comme source par la colonne de recherche.',
    customizeTableReferenceRollup:
      'Vous ne pouvez pas personnaliser cette colonne car elle est utilisée comme source par la colonne Rollup.',
    customizeLookup:
      'Vous ne pouvez pas personnaliser la colonne de valeur de recherche avec ce type de colonne.',
    customizeRollup:
      'Vous ne pouvez pas personnaliser la source de la colonne Rollup avec ce type de colonne.',
    dataLostText:
      'SI VOUS AVEZ DES DONNÉES DANS CETTE COLONNE et ' +
      'si vous changez le type de colonne, les données de cette colonne pourraient être perdues ou corrompues.' +
      "Cependant, si vous revenez au type de colonne d'origine, " +
      "vous pourrez accéder à vos données d'origine en actualisant.",
    dataWarning:
      'ATTENTION : Les données que vous avez modifiées avant de revenir ' +
      "au type de colonne d'origine pourraient toujours être perdues ou corrompues.",
    columnFilterWarning:
      "Si le type de colonne est modifié parce qu'un filtre est appliqué à la colonne, le filtre sera supprimé.",
    ok: 'OK',
    ex: 'Exemple : ',
    ex1: 'Exemple : 1',
    text: 'Texte',
    title: 'Titre',
    uniqueValues: 'Chaque valeur sera unique dans la table pour cette colonne.',
    requiredValues: 'Chaque valeur sera requise dans la table pour cette colonne.',
    maskData: 'Masquer les données',
    maskDataDescription:
      "Masquer les valeurs de cellule dans la vue partagée publique pour les autres personnes en les remplaçant par des étoiles ('*').",
    unique: 'Unique',
    refTable: ' Table de référence ',
    dateFormat: 'Format de date',
    includeTime: "Inclure l'heure",
    selectOptions: 'Sélectionner des options',
    singleSelect: 'Sélection unique',
    multiSelect: 'Sélection multiple',
    singlelineMultiline: 'Ligne unique / Multiligne',
    singleLineText: 'Texte en une seule ligne',
    multiLineText: 'Texte multiligne',
    wordWrap: 'Retour à la ligne',
    format: 'Format',
    integer: 'Entier (1)',
    decimal: 'Décimal (1.0)',
    currencyDecimal: 'Décimal (1.00)',
    precision: 'Précision',
    currencySymbol: 'Symbole de devise',
    allowNegatives: 'Autoriser les nombres négatifs.',
    style: 'Style',
    max: 'Max',
    emptyCellDef: 'Cette colonne remplira les cellules vides avec la valeur par défaut donnée.',
    textDes: 'Une ligne de texte.',
    richTextDes: 'Les données peuvent être formatées et affichées selon un format.',
    richText: 'Texte enrichi',
    numDes: 'Une ligne de nombres.',
    checkboxDes: 'Une petite case à cocher pour placer une marque.',
    imgDes:
      "Les images permettent d'ajouter des images qui peuvent ensuite être affichées ou téléchargées.",
    attachmentsDes:
      "Les pièces jointes vous permettent d'ajouter des images," +
      " des documents ou d'autres fichiers qui peuvent ensuite être affichés ou téléchargés.",
    calendarDes:
      'Saisissez une date (par exemple, 11/12/2013) ou sélectionnez-en une dans un calendrier.',
    colorDes: 'Choisissez une couleur pour votre cellule.',
    emailDes: 'Une adresse e-mail valide (par exemple, andrew@example.com).',
    phoneDes: 'Un numéro de téléphone (par exemple, +1 023 456 7890).',
    percentDes: 'Ajout de % à vos nombres.',
    selectDes:
      'La sélection multiple vous permet de sélectionner une ou plusieurs options prédéfinies répertoriées ci-dessous.',
    geoLocationDes:
      "Marquez votre emplacement. (par exemple, '41.021045896867875,29.00408756726393')",
    referenceDes: "Afficher les données d'une autre table dans cette table.",
    autonumberDes:
      'Génère automatiquement un nombre unique et incrémenté automatiquement pour chaque enregistrement.',
    currencyDes:
      'Type spécifique de champ de nombre qui formate le nombre comme un montant de devise.',
    ratingDes: 'Attribuez une note à vos enregistrements.',
    defaultVal: 'Valeur par défaut',
    european: 'Européen',
    us: 'US',
    iso: 'ISO',
    urlDes: "Une ligne d'URL.",
    url: 'URL',
    protocolRequired: "Vous devez ajouter le protocole de l'URL.",
    lookupValue: 'Valeur de recherche',
    lookupvalues: 'Valeurs de recherche',
    rollupValue: 'Valeur Rollup',
    rollupValues: 'Valeurs Rollup',
    lookUpDes: 'Rechercher une autre valeur dans la table de référence.',
    createdAtDes: "Affiche la date et l'heure de création de l'enregistrement.",
    createdByDes: "Affiche l'utilisateur qui a créé l'enregistrement.",
    updatedAtDes: "Affiche la date et l'heure de la dernière modification de l'enregistrement.",
    updatedByDes:
      "Affiche l'utilisateur qui a apporté la dernière modification à l'enregistrement.",
    rollupDesc:
      'Une colonne Rollup vous permet de résumer des données à partir de valeurs qui sont référencées dans cette table.',
    includeAllValuesRollup: 'Inclure toutes les valeurs de la même catégorie dans le calcul.',
    includeAllValuesRollupDesc:
      "Si la case à cocher est cochée, toutes les valeurs de la même catégorie sont incluses dans le calcul. Si elle n'est pas cochée, seules les données que vous avez sélectionnées sont incluses dans le calcul.",
    columnTitleMustBeUnique: 'Le titre de la colonne doit être unique.',
    showAsButton: 'Afficher comme un bouton',
    buttonText: 'Texte du bouton',
    uuidDes:
      'Génère automatiquement une valeur unique et personnalisée pour chaque enregistrement.',
    uuidLength: 'Longueur',
    uppercase: 'Majuscules',
    lowercase: 'Minuscules',
    numbers: 'Nombres',
    symbols: 'Symboles',
    uuidExample: 'Exemple',
    uuidCustomizeId: 'Identifiant personnalisé',
    qrCodeDes:
      "Vous pouvez créer un code QR avec la valeur écrite dans la cellule. Vous pouvez scanner ce code QR avec n'importe quel scanner QR.",
    qrCodeSupportDes:
      'Le type de colonne Code QR prend en charge les formats de données ci-dessus.',
    selectSourceColumn: 'Sélectionner la colonne source de GPT',
    enterSecretKey: "Veuillez saisir une clé secrète de l'API ChatGPT.",
    gptKeyInfo: "Générez une clé secrète de l'API ChatGPT en utilisant ce lien :",
    selectSourceColumnSwal:
      'Veuillez sélectionner une colonne source pour générer une réponse valide de ChatGPT.',
    enterPrompt: 'Veuillez saisir votre invitation pour générer une réponse valide de ChatGPT.',
    gptDes: 'Colonne ChatGPT',
    prompt: 'Invitation',
    voteDes: 'Vous permet de voter sur les lignes de votre table.',

    //RetableGPT
    secretKey: 'Clé secrète',
    apiKeysOpenAI: 'Clés API - OpenAI API',
    askQuesitonGpt: 'Posez une question à gpt avec des données de colonnes.',

    exampleGpt1: 'Qui est le PDG de {CompanyNameColumn}',
    exampleGpt1b: '{CompanyNameColumn}',
    exampleGpt2:
      'Combien de médailles {CountryNameColumn} a-t-il remporté aux Jeux olympiques de 2020 ? Répondez uniquement par des chiffres.',
    exampleGpt2b: '{CountryNameColumn} ',

    // RetableSpreadsheet
    formShare: `Le formulaire doit être partagé pour partager la ligne. 
  Voulez-vous ouvrir l'option de partage de la vue du formulaire ?`,
    frozenMsg: 'Les colonnes plus larges que la moitié de la vue ne peuvent pas être figées.',
    freezeColumns: 'Geler les colonnes',
    warning: 'Avertissement',
    manyRequests: 'Trop de demandes de suppression de lignes !',
    deleteRows: 'Supprimer la (les) ligne(s)',
    deleteRow: 'Supprimer la ligne',
    deleteAllSelected:
      'Cette opération supprimera toutes les lignes sélectionnées. Êtes-vous sûr de vouloir effectuer cette opération ?',
    somethingWentWrong: "Quelque chose s'est mal passé 🤔",
    pleaseRefresh: 'Veuillez rafraîchir la page.',
    deleteLastCol: 'Vous ne pouvez pas supprimer la dernière colonne visible du tableau.',
    deleteRefCol: 'Vous ne pouvez pas supprimer la colonne de référence.',
    deleteRefLookupCol:
      // eslint-disable-next-line max-len
      "Vous ne pouvez pas supprimer ou changer la source de la colonne de valeur de recherche. Vous devez d'abord supprimer ou changer le type de la colonne de valeur de recherche.",
    deleteRefRollupCol:
      // eslint-disable-next-line max-len
      "Vous ne pouvez pas supprimer ou changer la source de la colonne Rollup. Vous devez d'abord supprimer ou changer le type de la colonne Rollup.",
    deleteRefRollupCol:
      "Vous ne pouvez pas supprimer ou changer la source de la colonne Rollup. Vous devez d'abord supprimer ou changer le type de la colonne Rollup.",
    deleteLookupCol:
      // eslint-disable-next-line max-len
      "Vous ne pouvez pas supprimer cette colonne car elle est utilisée par une colonne de recherche dans une autre table. Vous devez d'abord supprimer ou changer le type de la colonne de valeur de recherche.",
    deleteRollupCol:
      // eslint-disable-next-line max-len
      "Vous ne pouvez pas supprimer cette colonne car elle est utilisée par une colonne Rollup dans une autre table. Vous devez d'abord supprimer ou changer le type de la colonne Rollup.",
    deleteCol: 'Supprimer la (les) colonne(s)',
    removeSelectedWarning:
      'Cette opération SUPPRIMERA toutes les colonnes sélectionnées. Êtes-vous sûr de vouloir effectuer cette opération ?',
    row: 'Ligne',
    cell: 'Cellule',
    rowAdded: 'Nouvelle ligne ajoutée.',
    selectLookupValue: 'Veuillez sélectionner la colonne de référence et le champ de recherche.',
    selectRollupValue: 'Veuillez sélectionner la colonne de référence et le champ Rollup.',

    // RetableTableFooter
    none: 'Aucun',
    empty: 'Vide',
    summary: 'Résumé',
    filled: 'Rempli',
    sum: 'Somme',
    avg: 'Moyenne',
    min: 'Min',
    max2: 'Max',
    count: 'Compte',
    countNum: 'Compter les nombres',
    row2: ' ligne',
    column2: ' colonne',
    s: 's',
    columns2: ' colonnes',

    // RetableProjectNotificationMenu
    at: ' à ',
    notifications: 'Notifications',
    noNotification: 'Aucune notification.',

    // RetableTableHeader
    duplicateproject: 'Dupliquer le projet',
    deleteproject: 'Supprimer le projet',
    changeProject: 'Changer de projet',
    projMembers: 'Membres du projet',
    feedback: 'Feedback',
    userGuide: "Guide de l'utilisateur",
    editPr: 'Modifier le projet',
    renameProject: 'Renommer le projet',
    projectName: 'Saisissez le nom du projet',
    shareProject: 'Partager le projet',
    shareCollab: 'Inviter des collaborateurs',
    exportProject: 'Exporter le projet',
    exporting: 'Export en cours...',
    roadmap: 'Roadmap',
    support: 'Support',

    // RetableTableNav
    emptyTable: 'Table vide',
    importRetable: 'Importer Retable',
    importGoogleSheet: 'Importer une feuille Google',
    projectHistories: 'Historiques du projet',
    projectTrashBin: 'Corbeille du projet',
    automations: 'Automatisations',
    addOrimport: 'Ajouter ou importer',
    hideCol: 'Masquer les colonnes',
    hide: 'Masquer',
    filter: 'Filtrer',
    retableNameMustBeUnique: 'Le nom du Retable doit être unique.',
    maintenance: 'Maintenance en cours',

    // RetableTableNavItem
    renameTable: 'Renommer la table',
    duplicateTable: 'Dupliquer la table',
    copyTable: 'Copier la table',
    moveTable: 'Déplacer la table',
    snapshot: "Capture d'écran",
    exportTable: 'Exporter la table',
    deleteTable: 'Supprimer la table',
    containAnotherProj: "L'espace de travail doit contenir au moins un projet.",
    atLeast1Table: 'Le projet doit avoir au moins une table.',
    noRecoverTable: 'Une fois supprimée, vous ne pourrez plus récupérer cette table !',
    referecnedTable: 'La table est référencée par une autre table.',
    sureDeleteTable:
      'Êtes-vous sûr de vouloir supprimer cette table ?\nLes tables récemment supprimées peuvent être restaurées depuis la corbeille.',
    sureDelTable: 'Vous êtes sur le point de supprimer cette table.',
    affectReferenceValue:
      'Cette table contient des colonnes de référence ou des colonnes référencées.\nCes colonnes seront converties en texte.',
    lockTable: 'Verrouiller la table',
    unlockTable: 'Déverrouiller la table',
    unlockTableRequest: 'Demande de déverrouillage de la table',

    // RetableClientModal
    onlineCollaborators: 'Collaborateurs en ligne',
    showCell: 'Afficher la cellule',

    // RetableFilterMenu
    addFilter: 'Ajouter un filtre',
    applyFilter: 'Appliquer',
    disableFilter: 'Désactiver le filtre',
    typeHEX: 'Taper HEX',
    operator: 'Opérateur',
    or: 'OU',
    and: 'ET',
    mergedCellsWarning: 'Cette opération désassemblera les cellules fusionnées.',
    differenceInfo:
      'Le résultat peut être négatif ou positif en fonction des différents types de filtres.',
    filterLock:
      "Lorsqu'un filtre est verrouillé, il sera invisible et ne pourra pas être modifié dans le partage public. Seul un utilisateur ayant des permissions de propriétaire peut verrouiller un filtre.",
    lock: 'Verrouiller',
    locked: 'Verrouillé',
    unlock: 'Déverrouiller',

    // RetableFileUploadModal
    fileType: 'Type de fichier',
    fileSize: 'Taille du fichier',
    fileName: 'Nom du fichier',
    createdBy: 'Créé par',
    used: 'Utilisé',
    usedStorage: 'est utilisé de votre espace de stockage.',
    maxFUSizeExceed: "Vous n'avez pas assez d'espace pour les pièces jointes du projet.",
    uploadCancelText:
      'Les fichiers que vous essayez de télécharger seront annulés. Voulez-vous toujours fermer ?',
    noAccessProjectAtt:
      "Vous n'avez pas accès aux pièces jointes du projet, mais vous pouvez toujours télécharger des fichiers.",
    otherProjects: 'Autres projets',
    attachmentSizeInfo:
      "Notez que les projets et les tables dans la corbeille occupent de l'espace dans leurs pièces jointes.",
    dropToUpload: 'Déposez pour télécharger',

    // RetableFindAndReplace
    replaceSure: 'Voulez-vous remplacer toutes les données ?',
    replaceAll: 'Remplacer tout',
    find: 'Chercher',
    replace: 'Remplacer',
    caseSensitive: 'Respecter la casse',
    findAndReplace: 'Rechercher et remplacer',

    // RetableFormatingMenu
    conditionalFormatting: 'Formatage conditionnel',
    addFormat: 'Ajouter un format',

    // RetableHideFieldsMenu
    noHide: 'Vous ne pouvez pas masquer la dernière colonne de la table.',
    refreshlink: 'Actualiser le lien',
    shareData: 'Partagez vos données avec ce lien (les champs masqués ne seront pas visibles)',
    editable: 'Modifiable',
    makeEditable:
      "Rendez votre Vue Publique modifiable. Si l'utilisateur avec qui vous avez partagé est connecté, les modifications seront enregistrées. Sinon, les modifications ne seront pas enregistrées dans la table principale.",
    viewUseDataInfo:
      'Si les utilisateurs avec qui vous avez partagé cette table sont connectés à Retable, ils peuvent cloner cette table et ajouter des données à leurs espaces de travail et projets personnels de Retable.',
    formView: 'Vue Formulaire',
    publicForm: 'Formulaire Public',
    publicView: 'Vue Publique',
    makePrivateForm:
      'Rendez le formulaire privé. Seuls les utilisateurs connectés peuvent voir et soumettre le formulaire.',
    privateForm: 'Seuls les utilisateurs connectés peuvent voir et soumettre',
    EditPreviewform: 'Modifier et prévisualiser le formulaire',

    // RetableStyleToolbar
    bold: 'Gras',
    italic: 'Italique',
    underline: 'Souligné',
    fontColor: 'Couleur de police',
    fillColor: 'Couleur de remplissage',
    resetStyle: 'Réinitialiser le style',
    rowSize: 'Taille de la ligne',
    shortRow: 'Ligne courte',
    mediumRow: 'Ligne moyenne',
    tallRow: 'Grande ligne',
    mergeCell: 'Fusionner les cellules',
    columnStyle: 'Style de colonne',
    resetColorStyle: 'Réinitialiser le style',

    // RetableTableToolbar
    cannotUnlock: 'Vous ne pouvez pas déverrouiller cette table.',
    views: 'Vues',
    changeDataView: 'Vues',
    export: 'Exporter',
    exportView: 'Exporter la vue',
    unlockedTable: 'Table déverrouillée',
    projectChat: 'Discussion sur le projet',
    sort: 'Trier',
    sortAscending: 'Trier par ordre croissant',
    sortDescending: 'Trier par ordre décroissant',
    group: 'Regrouper',
    chat: 'Chat',
    tabList: 'Liste des tables',
    unlockRequest: 'Envoyer un e-mail de demande de déverrouillage de la table (',
    unlockRequestSent: 'Un e-mail de demande de déverrouillage de la table a été envoyé (',
    youHaveToWait: 'Vous devez attendre un peu (',
    youHaveToWaitSecondPart: ' secondes)',
    youHaveToWaitMinPart: ' minutes)',
    tableHistory: 'Historique de la table',
    undo: 'Annuler',
    redo: 'Refaire',
    addNewRow2: 'Ajouter une nouvelle ligne',
    addNewRow3: 'Ajouter une ligne',

    // retableSortMenu
    pickAnotherColumn: 'Choisir une autre colonne',
    pickColumnToSort: 'Choisir une colonne à trier',
    pickColumnToGroup: 'Choisir une colonne à regrouper',
    disable: 'Désactiver',
    ascending: 'Ordre croissant',
    descending: 'Ordre décroissant',

    // RetableTemplateModal
    projectTemplate: 'Modèle de projet',
    useTemplate: 'Utiliser le modèle',
    close: 'Fermer',

    // RetableViewListItem
    renameView: 'Renommer la vue',
    duplicateView: 'Dupliquer la vue',
    deleteView: 'Supprimer la vue',
    noDeleteLastView: 'Vous ne pouvez pas supprimer la dernière vue de Retable.',
    noRecoverView: 'Vous êtes sur le point de supprimer cette vue.',
    defaultView: 'Vue par défaut',

    // retableViewsList
    adding: 'Ajout en cours...',

    // RetableWorkspaceHeader
    workspace: 'Espace de travail',
    editWorkspace: "Modifier l'espace de travail",
    editWorkName: "Modifier le nom de l'espace de travail",
    editWorkDes: "Modifier la description de l'espace de travail",
    deleteWorkspace: "Supprimer l'espace de travail",
    startTemplate: 'Commencer avec un modèle',
    startScratch: 'Commencer à partir de zéro',
    shareWorkspace: "Partager l'espace de travail",
    noWorkspaceRecover: 'Vous êtes sur le point de supprimer cet espace de travail.',
    workspaceName: "Tapez le nom de l'espace de travail",
    awesomeWorkspace: "C'est un superbe espace de travail ! Organisez maintenant vos projets.",
    awsomeProject: "Projets partagés avec vous par d'autres collaborateurs.",
    externallyProjectsDesc: 'Projets enregistrés depuis Retable Spreadsheet ou une source externe.',
    workspaceDescription: "Tapez la description de l'espace de travail",
    workspaceDesc: 'Espace de travail par défaut',
    newProject: 'Ajouter un projet',
    newApp: 'Ajouter une application',
    renameApp: "Renommer l'application",
    deleteApp: "Supprimer l'application",
    sureDeleteWorkspace: 'Vous êtes sur le point de supprimer cet espace de travail.',

    // RetableWorkspaceListView
    emptyProject: 'Projet vide',
    sharedWith: 'Partagé avec',
    noProject:
      'Il n\'y a pas de projet dans cet espace de travail. Utilisez le bouton "Ajouter un nouveau projet" pour en ajouter un.',

    // RetableWorkspaceShareModal
    removeUserWorkspace:
      "Cette opération supprimera l'utilisateur de cet espace de travail. Êtes-vous sûr de vouloir effectuer cette opération ?",
    inviteLink: 'Inviter via un lien',
    inviteByLinkInfo:
      "Si les utilisateurs avec lesquels vous avez partagé sont connectés à Retable, l'espace de travail sera partagé avec le rôle de spectateur.",
    inviteCollaborators: "Inviter d'autres collaborateurs de l'espace de travail par e-mail",
    inviteLink2: "Lien d'invitation",
    shareYourWorkspace: 'Partagez votre espace de travail avec ce lien.',
    peopleLink:
      "Les personnes qui rejoindront cet espace de travail avec le lien auront le rôle d'éditeur.",
    personalLink:
      'Ce lien est personnel. Vous et les personnes que vous invitez pouvez voir ce lien.',
    viewer: 'Spectateur',
    noWSMemberFound: "Aucun membre de l'espace de travail trouvé.",
    noPJMemberFound: 'Aucun membre du projet trouvé.',
    wsViewerDesc:
      "Les personnes qui rejoindront l'espace de travail avec ce lien auront le rôle de spectateur.",
    orgMemberDesc:
      "Les personnes qui rejoindront l'organisation avec ce lien auront le rôle de membre.",
    teamAlready: "L'équipe possède déjà les permissions.",
    upgradeNowFeature:
      'Effectuez une <p1>mise à niveau maintenant</p1> pour utiliser cette fonctionnalité.',

    // helpers
    free: 'Gratuit',
    basic: 'Basique',
    annuallyBasic: 'Basique annuel',
    retableFast: 'Pour ceux qui veulent voir à quel point Retable est rapide',
    monthUser: 'mois/utilisateur',
    unlimitedCollaborators: 'Collaborateurs illimités',
    collaborators: 'Collaborateurs',
    collabrativePerWorkspace: 'Collaborateurs par espace de travail',
    publicForms: 'Formulaires publics',
    publicViews: 'Vues publiques',
    pro: 'Pro',
    annuallyPro: 'Pro annuel',
    enterprise: 'Entreprise',
    bussinessBasic: 'Business Basic',
    bussinessPro: 'Business Pro',
    bussinessEnterprise: 'Business Unlimited',
    team: 'Équipe',
    bussinessAnnuallyBasic: 'Business annuel Basic',
    bussinessAnnuallyPro: 'Business annuel Pro',
    bussinessAnnuallyEnterprise: 'Business annuel Enterprise',
    anyoneUsemore: 'Pour ceux qui veulent utiliser davantage',
    unlimited: 'Illimité',
    prioritySupport: 'Support prioritaire',
    whowants: 'Pour ceux qui veulent posséder leurs données sur leur cloud ou leurs serveurs',
    everythingPro: "Tout dans le plan 'Pro'",
    customContact: 'Contact personnalisé',
    paymentOptions: 'Options de paiement flexibles',
    number: 'Numéro',
    checkbox: 'Case à cocher',
    image: 'Image',
    'select(options)': 'Sélectionner (Options)',
    geolocation: 'Géolocalisation',
    attachment: 'Pièce jointe',
    calendar: 'Date et heure',
    color: 'Couleur',
    email: 'E-mail',
    workEmail: 'E-mail professionnel',
    autonumber: 'Numéro automatique',
    phonenumber: 'Numéro de téléphone',
    percent: 'Pourcentage',
    referenceanothertable: 'Référence à une autre table',
    lastmodifiedtime: 'Heure de dernière modification',
    lastmodifiedby: 'Dernière modification par',
    createdtime: 'Heure de création',
    createdby: 'Créé par',
    viaEmail: 'par e-mail',
    currency: 'Devise',
    rating: 'Évaluation',
    lookup: 'Recherche',
    richtext: 'Texte enrichi',
    rollup: 'Consolidation',
    uuid: 'Identifiant unique',
    qrcode: 'Code QR',
    vote: 'Voter',
    gpt: 'GPT',
    last100Actions: 'Dernières 100 actions',
    last10Actions: 'Dernières 10 actions',
    '3Owner': '3 propriétaires',
    '10Owner': '10 propriétaires',
    proPlanTitle1: 'Formulaires en ligne',
    proPlanTitle2: 'Intégration HTML',
    proPlanTitle3: 'Nombre de projets',
    proPlanTitle4: 'Nombre de tableaux',
    proPlanTitle5: 'Enregistrements par projet',
    proPlanTitle6: "Espace d'attachement par espace de travail",
    proPlanTitle7: 'Demander la mise à jour',
    proPlanTitle8: 'Historique des modifications',
    proPlanTitle9: "Capture d'écran",
    proPlanTitle10: 'Types de colonnes de base et avancés',
    proPlanTitle11: 'Vues Kanban, Calendrier, Carte, Grille, Liste, Formulaire et Graphique',
    proPlanTitleUnlimitedVal: 'Illimité',

    // RetableSearchInput
    searchInWorkspace: 'Rechercher dans les Espace de travail ou les Projets',
    searchInTemplates: 'Rechercher dans les Modèles',
    searchInProjectShare: 'Rechercher dans les Membres du Projet',
    searchInWorkspaceShare: "Rechercher dans les Membres de l'Espace de travail",

    // MainFooter
    version: 'Version',

    // Templates
    Templates: 'Modèles',
    templateNotfound: 'Modèle introuvable!',
    templateArchive: '<p1>Bienvenue</p1> <p2>Archive de Modèles</p2>',
    useIt: 'Utilisez-le',

    //Retable
    welcomeProj: 'Bienvenue dans votre premier projet incroyable 👋',
    projSet: "Vous pouvez modifier les paramètres de votre projet à partir d'ici 👆",
    navigateProj: "Vous pouvez naviguer entre vos projets à partir d'ici ⛵",
    tableOptions: 'Vous pouvez effectuer vos opérations de table ici.',
    snapshotStep: 'Vous pouvez prendre un instantané de votre table.',
    enjoyRetable: 'Profitez de votre utilisation de Retable 😍',
    haveMsg: 'Vous avez un nouveau message',
    nMsg: 'Nouveau message',
    extensionRowLimitationWarning:
      'Vous ne pouvez insérer que 1000 lignes. Si vous souhaitez insérer plus de 1000 lignes, vous devez vous inscrire et mettre à niveau votre plan.',
    extensionFirstRowInfo: 'Définir la première ligne comme en-tête?',
    extensionFirstRowInfoDesc:
      'Vous pouvez également définir cette action ultérieurement en cliquant avec le bouton droit sur la première ligne et en sélectionnant le champ "Définir comme en-tête".',

    //Account
    api: 'API',
    apiKey: 'Clé API',
    accountOverview: 'Aperçu du compte',
    enaa: 'Activé',
    diss: 'Désactivé',
    staa: 'Statut',
    updateUsername: "Mettez à jour votre nom d'utilisateur et gérez votre compte",
    profile: 'Profil',
    password: 'Mot de passe',
    password2: 'Mot de passe',
    audit: 'Audit',
    subscription: 'Abonnement',
    teams: 'Équipes',
    organizations: 'Organisations',
    organization: 'Organisation',
    visit: 'Visitez',
    docss: 'Documentation',
    showw: 'Voir',
    personal: 'Personnel',
    bussiness: 'Entreprise',
    createNewApi: 'Créer une nouvelle API',
    deleteKeyWarning: 'Vous êtes sur le point de supprimer cette clé.',
    organizationAdminAccount: "Admin de l'organisation",
    organizationDescriptionAccount: "Description de l'organisation",
    organizationNameAccount: "Nom de l'organisation",
    settings: 'Paramètres',
    // saga swall
    invSent: '👋 Nous avons déjà envoyé une invitation par e-mail. 👍',
    justNow: "À l'instant",
    okswal: "D'accord",
    success: 'Succès',
    projDuplicatedName: 'Projet dupliqué avec le nom : ',
    tableDuplicatedName: 'Table dupliquée avec le nom : ',
    newColAdded: 'Nouvelle colonne ajoutée',
    importingData: 'Importation des données...',
    snapshotTaken: 'Votre instantané a été pris le ',
    snapshotReloaded: ' instantané rechargé.',
    snapReTable: ' instantané rechargé en tant que nouvelle table.',
    tableRemoved: `Vous pouvez restaurer cette table depuis la corbeille.`,
    viewRemove: `Vous pouvez restaurer cette vue depuis la corbeille.`,
    tableLockedForOther:
      'Table verrouillée pour les autres, vous pouvez éditer votre table sans aucune distraction.',
    passwordSent: '📩 Nous avons envoyé un lien de réinitialisation du mot de passe à',
    dontForCheck: "🧐 N'oubliez pas de vérifier votre dossier Spam / Indésirables.",
    invationSent: 'Invitation envoyée.',
    invitationResendSuccessfully: 'Invitation renvoyée avec succès à {inviteduserMail}.',
    accUpd: 'Votre compte a été mis à jour avec succès.',
    proRemoved: `Vous pouvez restaurer ce projet depuis la corbeille.`,
    workRemoved: `Vous pouvez restaurer cet espace de travail depuis la corbeille.`,
    somethingWrongInvitation: "Des problèmes sont survenus lors de l'envoi des invitations. \n",
    alreadyInAnOrg: 'Utilisateurs déjà dans une autre organisation',
    alreadyInTheOrg: 'Utilisateurs déjà dans cette organisation',
    youAreAlreadyInOrg: 'Vous êtes déjà dans une organisation.',
    errorWhenCreatingInvitation: 'Une erreur est survenue lors de la création des invitations',
    hasAnUnusedInvitation: 'Les utilisateurs ont des invitations inutilisées',
    userNotFound: "L'utilisateur n'existe pas",
    orgInviteBadRequest:
      'Vous êtes déjà impliqué dans une organisation. Vous ne pouvez pas être impliqué dans une autre organisation.',
    goToOrganization: "Aller à l'organisation",
    maxFileSizeToUpload:
      'Vos fichiers sont trop volumineux. Veuillez nous contacter si vous souhaitez télécharger des fichiers de plus de 10 Mo.',

    contSs: "Vous ne pouvez pas créer plus d'instantanés. ",
    upgradeForSs:
      'Mettez à niveau votre compte pour un nouvel instantané ou écrasez un instantané existant. ',
    clickYes: 'Cliquez sur OUI si vous souhaitez écraser cette version, ',
    clickNo: 'Cliquez sur NON si vous souhaitez conserver la version existante.',
    no: 'Non',
    yes: 'Oui',
    tableNotExists: "La table que vous recherchez n'existe pas.",
    invitationAlreadyUsed: "L'invitation est déjà utilisée.",
    pjExportSheetNameError:
      "Il y a des problèmes d'incompatibilité. Les noms de Retable seront modifiés selon les règles suivantes.\n\n" +
      '*Un nom de Retable ne peut pas dépasser 31 caractères.\n' +
      '*Vous ne pouvez pas utiliser les caractères spéciaux suivants dans un nom de Retable. (\\ , / , * , ? , : , [ , ])',
    pjExportProjectNameError:
      "Il y a des problèmes d'incompatibilité. Le nom du projet sera modifié selon les règles suivantes.\n\n" +
      '*Vous ne pouvez pas utiliser les caractères spéciaux suivants dans un nom de projet. (\\ , / , * , ? , : , [ , ])',
    pjExportProjectAndSheetNameError:
      "Il y a des problèmes d'incompatibilité. Le nom du projet sera modifié selon les règles suivantes (indiquées par !) et les noms de Retable seront modifiés selon les règles suivantes (indiquées par *)\n\n" +
      '*Un nom de Retable ne peut pas dépasser 31 caractères.\n' +
      '*!Vous ne pouvez pas utiliser les caractères spéciaux suivants dans un nom de projet ou de Retable. (\\ , / , * , ? , : , [ , ])',
    retableExportNameError:
      "Il y a des problèmes d'incompatibilité. Le nom du fichier sera modifié selon les règles suivantes.\n\n" +
      '*Vous ne pouvez pas utiliser les caractères spéciaux suivants dans un nom de Retable. (\\ , / , * , ? , : , [ , ])',
    unregisteredMail: 'E-mail(s) non enregistré(s)',
    info: 'Info',
    recaptchaErrorMessage:
      'Un problème est survenu lors de la vérification. Actualisez la page ou contactez-nous.',

    // profile
    uploadPic: 'Télécharger une photo de profil',
    enterName: 'Entrez le nom',
    surname: 'Nom de famille',
    enterSurname: 'Entrez le nom de famille',
    enterEmail2: "Entrez l'e-mail",
    saveProfile: 'Enregistrer le profil',
    nameIsRequired: 'Le nom est requis.',
    needPassword:
      "Pour changer votre e-mail, vous devez d'abord <p1>ajouter un mot de passe Retable</p1>.",
    emailAlreadyInUse: 'est déjà utilisé dans un autre compte.',
    incorrectPassword: 'Mot de passe incorrect',

    //password
    currentPassword: 'Mot de passe actuel',
    newPassword: 'Nouveau mot de passe',
    passwordAgain: 'Nouveau mot de passe à nouveau',
    changePassword: 'Changer le mot de passe',

    // Audit
    activity: 'Activité',
    date: 'Date',

    // subscription
    credit: 'Crédit : ',
    earnMore: 'Gagnez des Crédits!',
    currentPlan2: 'Plan Actuel : ',
    status: 'Statut : ',
    manageSubscription: 'Gérer votre abonnement',
    proAccount: 'Votre compte est sur le plan {path}.',
    renewPlan: 'Votre plan sera renouvelé pour {path} le {path2}',
    endPlan: 'Votre plan prendra fin le {path}',
    carbonRemoval: "Nous {path} pour financer l'élimination du carbone de nouvelle génération",
    contribute: 'contribuer à 1% des achats',
    active: 'Actif',
    pastDue: 'En retard',
    canceled: 'Annulé',
    paused: 'En pause',
    incomplete: 'Incomplet',
    yourAreUsingThisPlan: 'Vous utilisez ce plan.',
    chooseoneplan: '<p1>Choisissez</p1> <p2>Un Plan</p2>',
    useFreeTrial: "Utiliser l'essai gratuit",
    useFreeTrialDesc: "Vous pouvez commencer un abonnement tout en utilisant l'essai gratuit.",
    freeTrial: 'Essai Gratuit',
    trialEndDate: "Date de fin d'essai",
    remainingTrialDays: "Jours d'essai restants",
    subscriptionEndDate: "Date de fin de l'abonnement",
    nextBillingDate: 'Prochaine date de facturation',
    resumesAt: 'Reprend le',
    period: 'Période',
    totalSeat: 'Siège Total',
    activeSeat: 'Siège Actif',
    seat: 'Siège',

    // filters
    contains: 'contient',
    donotContain: 'ne contient pas',
    iss: 'est',
    issnot: "n'est pas",
    isemptyy: 'est vide',
    issnotempty: "n'est pas vide",
    between: 'entre',
    difference: 'différence',
    doesnotContain: 'ne contient pas',
    isFilter: 'est',
    isNot: "n'est pas",
    isEmptyFilter: 'est vide',
    isnotEmptyFilter: "n'est pas vide",
    is: 'est',
    isNot2: "n'est pas",
    isBefore: 'est avant',
    isAfter: 'est après',
    notauth: 'non autorisé',
    form: 'Formulaire',
    otherusers: 'Autres Utilisateurs',
    // automations
    sendMail: 'Envoyer un e-mail',
    wRowAdded: "Lorsqu'une ligne est ajoutée",
    wRowDeleted: "Lorsqu'une ligne est supprimée",
    wCellUpdated: "Lorsqu'une cellule est mise à jour",
    wFormSubmited: "Lorsqu'un formulaire est soumis",
    atSchTime: 'À une heure planifiée',
    sendRecords: 'Envoyer des enregistrements',
    selectToField: 'Sélectionner le champ "À".',
    callWebhooks: 'Appeler des webhooks',
    params: 'Paramètres',
    headers: 'En-têtes',
    body: 'Corps',
    webhookErrorInvalidUrl: 'Veuillez entrer une URL valide.',
    webhookErrorRequiredHeaders:
      'Veuillez fournir une valeur pour les champs nom et valeur dans la section En-têtes.',
    queryName: 'Nom de la requête',
    queryValue: 'Valeur de la requête',
    headerName: "Nom de l'en-tête",
    headerValue: "Valeur de l'en-tête",
    contentType: 'Type de contenu',
    httpMethod: 'Méthode HTTP',
    noParamsInfo: "Aucun paramètre de requête n'est présent pour cette demande.",
    automationLogRunSuccess: "L'automatisation s'est terminée avec succès.",
    automationLogRunError: "L'automatisation a échoué avec une erreur.",
    automationLogCreate: 'Automatisation créée avec succès.',
    automationLogUpdate: 'Automatisation mise à jour avec succès.',
    automationLogSendEmail: 'Automatisation déclenchée par {userName} et e-mail envoyé.',
    automationLogSendEmailWithoutUser: 'Automatisation déclenchée et e-mail envoyé.',
    request: 'Requête',
    response: 'Réponse',
    automationCreatedByUser: 'Automatisation créée par {userName}.',
    automationUpdatedByUser: 'Automatisation mise à jour par {userName}.',
    automationTriggedByUser: 'Déclenchée par {userName}.',

    // datavalidation
    minvalue: 'Valeur min :',
    maxvalue: 'Valeur max :',

    //RetableTableReferenceModal
    selectedVal: 'Valeur(s) sélectionnée(s)',
    selectableVal: 'Valeur(s) sélectionnable(s)',

    // Faq
    pricing: 'Tarification',
    faq: 'FAQ',
    signIn: 'Se connecter',
    signUpFree: "S'inscrire gratuitement",

    orchestratePowerful:
      'Orchestrez des solutions commerciales puissantes avec une seule source de vérité.',
    limitImagination: 'La seule limite est votre imagination.',
    //////////
    whatisRetable: "Qu'est-ce que Retable ?",
    det: 'Détails',
    retableMean:
      'Retable est un programme logiciel hybride simplifié de feuille de calcul et de base de données utilisé' +
      " comme un outil d'organisation et de collaboration en ligne. Il convient aux petites et grandes" +
      " entreprises, aux ONG et à toutes les autres organisations qui s'appuient sur des pratiques de" +
      ' travail collaboratif.',

    whyRetable: 'Pourquoi devrais-je / mon entreprise préférer Retable ?',
    whyAnswer:
      'Retable combine le format familier des feuilles de calcul avec la puissance des bases de données,' +
      ' créant une solution que les équipes adorent utiliser. Il est facile à utiliser et ne' +
      ' nécessite aucune expérience technique. Retable est hautement personnalisable et peut être' +
      " adapté aux besoins des organisations individuelles ou même des différents projets au sein d'une" +
      ' seule entité.',
    whatAdvantages: "Quels sont les avantages d'utiliser Retable ?",
    theAdvantages:
      "Retable vous permet d'enregistrer et de gérer rapidement n'importe quel type d'information" +
      " dispersée. L'un des principaux avantages est qu'il aide les utilisateurs à gagner un temps" +
      ' considérable. Il offre de nombreuses possibilités différentes et, en tant que solution basée' +
      ' sur le Web, le logiciel est régulièrement mis à jour avec encore plus de fonctionnalités pour' +
      " améliorer l'efficacité commerciale et les opportunités de collaboration.",

    workMultipleExcel:
      'Retable vous permet de travailler sur plusieurs fichiers Excel et feuilles de calcul en même temps.',
    dataEasy: 'La manipulation des données est rapide et facile.',
    adaptableSpecific: 'Adaptable pour répondre aux besoins de projets spécifiques.',
    differentViews: 'Différentes vues vous permettent de mélanger et assortir les composants.',
    elegantInterface: 'Interface utilisateur visuelle élégante.',
    multiUserTime:
      'Plusieurs utilisateurs peuvent travailler simultanément sur la même table en temps réel.',
    userAuthorize: 'Les utilisateurs peuvent être autorisés et accéder à une cellule spécifique.',
    increasedSecurity:
      'Sécurité renforcée - Retable peut masquer les données de colonnes déterminées par les utilisateurs.',
    editSpreadSheets:
      'Modifier, gérer et partager des feuilles de calcul et des données avec votre équipe commerciale. Aucun code requis.',
    storeReocrds: 'Stockez des enregistrements et gardez tout organisé.',
    preformsImEx:
      "Effectue des transactions d'importation et d'exportation de manière efficace. Les utilisateurs peuvent exporter le" +
      ' fichier dans plusieurs formats.',
    saveTime: "Économisez du temps avec des flux d'approbation de données basés sur des règles.",
    snapshotHis:
      "Retable dispose d'un historique des instantanés pour suivre toutes les modifications.",
    chatWithOthers: 'Discutez avec les autres membres du projet.',
    providesSimplifiedExcel:
      'Fournit une gestion simplifiée des feuilles de calcul / des données / des tables pour ceux qui ne sont pas compétents en technologie.',

    incorporateRetable: 'Comment puis-je incorporer Retable dans mon entreprise ?',
    incorporateDes:
      'La meilleure façon de comprendre les capacités complètes de Retable est de commencer à utiliser' +
      ' la version gratuite. Une fois que vous commencez à travailler avec Retable, vous commencerez à voir' +
      ' les capacités infinies à portée de main. Sans formation requise et avec une configuration facile,' +
      " votre équipe peut rapidement commencer à bénéficier d'une solution logicielle qui révolutionnera" +
      ' votre façon de travailler.',
    isFree: 'Retable est-il gratuit à utiliser ?',
    yesFree:
      "Oui, c'est gratuit. Il existe également des niveaux d'entreprise adaptés à différentes utilisations.",
    whatWorkspace: "Qu'est-ce qu'un espace de travail ?",
    workspaceDes:
      'Un espace de travail est une zone avec des projets connexes. Alors que chaque projet se concentre sur une' +
      " zone unique, plusieurs projets peuvent appartenir à des catégories opérationnelles similaires de l'entreprise." +
      ' Il est utilisé pour classer et regrouper les projets. Vous pouvez considérer un espace de travail comme une' +
      ' collection de projets et de tables partagés entre un groupe de personnes travaillant ensemble.',

    whatProj: "Qu'est-ce qu'un projet ?",
    projDes:
      'Les projets sont comme une feuille de calcul et peuvent contenir plusieurs tables. Chaque projet doit être' +
      ' unique, se concentrer sur un domaine clé et contenir toutes les informations que votre organisation possède' +
      ' concernant ce domaine clé.',
    canCopyPaste:
      'Puis-je copier-coller des tables provenant de différents espaces de travail / projets ?',
    copyPatseDes:
      'Vous pouvez déplacer vos tables vers un autre projet dans le même espace de travail.',
    canShare: "Puis-je partager mon travail avec mes collègues qui n'ont pas de compte Retable ?",
    shareDes:
      "Oui, vous pouvez partager votre travail avec vos collègues via e-mail, qu'ils aient ou non un compte Retable.",
    shareOptions: 'Quelles sont les options de partage ?',
    shareOptionsare: 'Les options de partage sont :',
    shareDes1:
      'Partager un espace de travail, un projet ou des tables en cliquant sur "Partager avec..." dans le site Web.',
    shareDes2: 'Partager des données en les copiant / collant dans un e-mail.',
    handleUsers:
      "Comment Retable gère-t-il plus d'un utilisateur modifiant la même table / projet / espace de travail ?",
    handleUserstext:
      'La modification multi-utilisateurs permet à plusieurs utilisateurs de modifier simultanément' +
      ' le même espace de travail, projet ou table.',
    handleUserDes:
      'Alors que plusieurs utilisateurs modifient en même temps le même composant, les premières lettres des' +
      ' utilisateurs sont affichées en haut à droite des deux écrans.' +
      ' Quiconque ouvre un espace de travail, un projet ou une table partagé, toutes les premières lettres' +
      " des utilisateurs partagés sont affichées en haut à droite de l'écran." +
      " Lorsqu'un utilisateur modifie une cellule, les autres utilisateurs peuvent voir toutes les modifications" +
      " après que l'utilisateur a quitté la cellule.",

    whatAttachmetTab: 'Quelle est la limite de taille des pièces jointes pour chaque table ?',
    attachmetTabDes: 'La limite de taille des pièces jointes est de 2 Go par cellule.',
    rowColLimit: 'Quelle est la limite de lignes / colonnes par table ?',
    limitsDes: 'La limite de lignes par table est de 2000, et la limite de colonnes est de 50.',
    webSupported: 'Quels navigateurs Web sont pris en charge ?',
    websDes: 'Retable est pris en charge par Google Chrome, Edge, Safari, Brave, Opera et Firefox.',
    canChat:
      'Puis-je discuter avec mes collègues lorsque je suis dans un espace de travail ou un projet ?',
    canChatDes:
      'La fonction de commentaire / chat Pro est disponible sous chaque projet pour les utilisateurs qui ont un droit de partage dessus.',
    //landing
    retableDes:
      'Organisez, affichez, partagez et modifiez des données comme dans des feuilles de calcul, facilement...',
    getStartedFree: 'Commencez gratuitement',
    whatRetable: "Qu'est-ce que Retable ?",
    retableWork:
      'Retable est un logiciel hybride en ligne de feuille de calcul et de base de données qui peut être utilisé' +
      " comme outil d'organisation et de collaboration des données.",
    retableWork2:
      'Il convient aux petites et grandes entreprises, aux ONG et à toutes les autres organisations' +
      " qui s'appuient sur des pratiques de travail collaboratif.",
    noLimitsData: 'Organisation des données sans limites.',
    organizeData: 'Organisez vos données avec {path} et partagez-les.',
    easyTables:
      'Les projets et les tables sont faciles à naviguer avec des couleurs. Plus de dossiers...',
    dataSafe:
      'Vos données sont sécurisées et en sécurité avec un excellent historique des modifications.',
    storedActions:
      'Chaque enregistrement est stocké avec son historique des modifications et des commentaires.',
    easyTables: 'Créer une table est à portée de clic comme ci-dessous.',
    sales: 'Ventes',
    salesPipeline: 'Pipeline de ventes',
    salesAssets: 'Suivi des actifs de vente',
    businessDevelopment: 'Développement des affaires',
    creativeTeams: 'Équipes créatives',
    designProjPipeline: 'Pipeline de projets de design',
    visualInspirations: 'Inspirations visuelles',
    artGallery: "Gestion de la galerie d'art",

    marketing: 'Marketing',
    socialMedia: 'Calendriers des médias sociaux',
    contentMarketing: 'Marketing de contenu',
    management: 'Gestion',
    emailMarketing: 'Marketing par e-mail',

    humanResources: 'Ressources humaines',
    recruitmentTracking: 'Suivi du recrutement',
    employeeSurveys: "Enquêtes sur l'engagement des employés",
    interviewQuestions: "Questions d'entretien",

    projectManagement: 'Gestion de projet',
    projectTracker: 'Suivi de projet',
    contractorTime: 'Suivi du temps des sous-traitants',
    projectPipeline: 'Pipeline de projet',

    retableforSpin: 'Essayez Retable dès maintenant',
    freeRetable: 'Retable est gratuit à utiliser pour les équipes de toutes tailles.',

    product: 'Produit',
    termsService: "Conditions d'utilisation",
    privacyPolicy: 'Politique de confidentialité',
    airtableAlternative: 'Alternative à Airtable',
    googleSheetsAlternative: 'Alternative à Google Sheets',

    company: 'Entreprise',
    blog: 'Blog',
    reachUs: 'Contactez-nous',

    //Pricing.js
    plansPricing: 'Plans et tarification',
    retableFreeuse: 'Retable est gratuit à utiliser.',
    contributePurchases:
      'Nous contribuons à 1% des achats pour financer la captation de carbone de nouvelle génération',
    twoMonths: '2 mois',
    oneYear: '1 an',

    //login
    login: 'Connexion',
    signinGoogle: 'Se connecter avec Google',
    signInLinkedIn: 'Se connecter avec LinkedIn',
    forgotPassword: 'Mot de passe oublié',
    dontHaveAccount: "Vous n'avez pas de compte ?",
    emailCanotEmpty: "L'adresse e-mail ne peut pas être vide.",
    passwordCanotEmpty: 'Le mot de passe ne peut pas être vide.',
    invalidPassword: 'Mot de passe invalide.',
    passwordValid: 'Votre mot de passe doit contenir au moins 8 caractères.',
    enterPassword: 'Entrez votre mot de passe',
    enterYourEmail: 'Entrez votre adresse e-mail',
    start: 'Commencer',
    sign: 'Se',
    in: 'connecter',
    forgotPass1: 'Mot de',
    forgotPass2: 'passe',
    rememberMe: 'Se souvenir de moi pendant 30 jours',

    // forgetpassword
    resetPass:
      'Entrez votre adresse e-mail et nous vous enverrons un lien pour réinitialiser votre mot de passe.',
    back: 'Retour',

    // signup
    nameContempty: 'Le nom ne peut pas être vide',
    lastnameContEmpty: 'Le nom de famille ne peut pas être vide',
    passVal: 'Votre mot de passe doit comporter au moins 8 caractères',
    firstName: 'Prénom',
    lastName: 'Nom de famille',
    createPassword: 'Créez un mot de passe',
    signupGoogle: 'Inscrivez-vous avec Google',
    signUpLinkedIn: 'Inscrivez-vous avec LinkedIn',
    alreadyhaveAccount: 'Vous avez déjà un compte?',
    signUpFree1: "S'inscrire",
    signUpFree2: 'gratuit',
    unregisteredUser: "L'e-mail n'est pas enregistré.",
    worngLoginPass: 'Mot de passe incorrect',
    goRegister: "Aller s'inscrire",
    errorEmailContainsRetable:
      'Le domaine Retable ne peut pas être utilisé, vous pouvez utiliser un autre domaine.',

    //Appsumo Signup
    activeYourAccount1: 'Activez',
    activeYourAccount2: 'votre compte',

    //thankyou
    thankYou: 'Merci de vous être inscrit sur Retable. 🎉',
    canSignin: 'Vous pouvez maintenant {path}.',
    signIn3: 'Se connecter',
    alsoVerify: 'Veuillez vérifier votre e-mail pour utiliser toutes les fonctionnalités.',
    dontForget: "(N'oubliez pas de vérifier votre dossier spam/courrier indésirable)",
    confirmationSent: 'Un e-mail de confirmation a été envoyé à',

    // retableWorkspacebody
    noProjectAtAll:
      'Il n\'y a aucun projet dans cet espace de travail. Utilisez le bouton "Ajouter un nouveau projet" pour en ajouter un.',

    // jexcel
    minimumkarakter: 'Caractère minimum :',
    maksimumkarakter: 'Caractère maximum :',
    customizeColumn: 'Personnaliser la colonne',
    splitColumnData: 'Diviser les données de la colonne',
    insertColumnBef: 'Insérer une nouvelle colonne avant',
    insertColumnAft: 'Insérer une nouvelle colonne après',
    duplicatCell: 'Dupliquer la cellule',
    duplicateColumn: 'Dupliquer la colonne',
    deleteColumn: 'Supprimer la colonne',
    deleteSelected: 'Supprimer la/les colonne(s) sélectionnée(s)',
    askToUpdate: 'Demander une mise à jour',
    copy2: 'Copier',
    cut: 'Couper',
    paste: 'Coller',
    sendAsEmail: 'Envoyer par e-mail',
    saveAs: 'Enregistrer au format CSV',
    validationError: 'Erreur de validation',
    checkType:
      "Veuillez vérifier les notifications d'erreur dans les cellules pour plus de détails ou personnaliser les propriétés de la colonne" +
      ' pour correspondre aux critères de validation',
    requiredField: 'Champ obligatoire',
    fillCell: 'Veuillez remplir la cellule.',
    fillField: 'Veuillez remplir ce champ',
    uniqueColumn: 'Colonne unique',
    valuesUniq: 'Chaque valeur dans cette colonne doit être unique.',
    valuesUniqDes: ' autres cellules avec la même valeur.',
    typeError: 'Erreur de type',
    contentWrong: 'Le contenu ou la valeur ne correspond pas au type de colonne de cette cellule.',
    followRules: 'La valeur doit respecter ces règles :',

    noRecords: 'Aucun enregistrement trouvé',
    show: 'Afficher',
    entries: ' entrées',
    columnName: 'Nom de colonne',
    renameColumn: 'Renommer cette colonne',
    rowBefore: 'Insérer une nouvelle ligne avant',
    rowAfter: 'Insérer une nouvelle ligne après',
    duplicateRow: 'Dupliquer la ligne',
    deleteSelRows: 'Supprimer la/les ligne(s) sélectionnée(s)',
    clearSelCells: 'Effacer la/les cellule(s) sélectionnée(s)',
    editComments: 'Modifier les commentaires',
    addComments: 'Ajouter des commentaires',
    clearComments: 'Effacer les commentaires',
    sureDelRow: 'Êtes-vous sûr de vouloir supprimer les lignes sélectionnées ?',
    sureDelCol: 'Êtes-vous sûr de vouloir supprimer les colonnes sélectionnées ?',
    destroyCell: 'Cette action détruira toutes les cellules fusionnées existantes. Êtes-vous sûr ?',
    clearSearch: 'Cette action effacera les résultats de votre recherche. Êtes-vous sûr ?',
    confCell: 'Il y a un conflit avec une autre cellule fusionnée',
    invalidMerge: 'Propriétés de fusion invalides',
    cellMerged: 'Cellule déjà fusionnée',
    noSelected: 'Aucune cellule sélectionnée',
    valueInvalid: "La valeur de la cellule n'est pas valide selon la règle spécifiée.",
    dragDes: 'Faites glisser pour ajuster le nombre de colonnes figées',
    emptyRow: 'Ligne vide',
    noDeleteLastCol: "Il n'est pas possible de supprimer la dernière colonne.",
    leastRow: 'La table doit avoir au moins une ligne.',
    leastCol: 'La table doit avoir au moins une colonne.',
    setAsHeader: 'Définir comme en-tête',

    //Retable Create Project Modal
    getUpAndRunningFast: 'Mettez-vous en route rapidement !',
    startScratchDescription:
      'Créez un nouveau projet vierge avec des tableaux et des vues personnalisés.',
    importProjectDescription:
      'Importez un fichier CSV, XLS ou Retable pour créer votre projet Retable.',
    startTemplateDescription:
      'Sélectionnez un modèle pour commencer et personnalisez-le au fur et à mesure.',
    backToTheRetable: 'Retour à Retable',

    // projects
    shareMe: 'Projets partagés avec moi',
    externallySavedProjects: "Projets enregistrés à l'extérieur",

    //Retable Chart View
    line: 'Ligne',
    bar: 'Barre',
    pie: 'Camembert',
    area: 'Aire',
    'x-axis': 'Axe X',
    'y-axis': 'Axe Y',
    categoriesField: 'Champ des catégories',
    values: 'Valeurs',
    retableView: 'Vue Retable',
    chartView: 'Vue du graphique',

    //Retable X Axis Menu
    pickColumn: 'Choisir une colonne',

    //Retable Y Axis Menu
    count2: 'Compter',
    field: 'Champ',
    sum2: 'Somme',
    min2: 'Min',
    max3: 'Max',
    avg2: 'Moy',
    addValue: 'Ajouter une valeur',
    changeColor: 'Changer la couleur',
    // datavalidation
    minCha: 'Caractère minimum :',
    maxCha: 'Caractère maximum :',
    regexx: 'Expression régulière :',
    minVal: 'Valeur minimum :',
    maxVal: 'Valeur maximum :',

    // retableAutomationFindValue
    operator2: 'Opérateur :',
    noCond: 'Aucune condition trouvée.',
    addCon: 'Ajouter une condition',
    addAnoCon: 'Ajouter une autre condition',

    // password
    passReq: 'Le mot de passe ne répond pas aux exigences.',
    typePas: 'Vous devez taper votre mot de passe actuel.',
    typeNewPas: 'Nouveau mot de passe',
    typeNewPascheck: 'Vous devez taper le nouveau mot de passe.',
    typeNewPasAgain: 'Vous devez taper à nouveau le nouveau mot de passe.',
    passNoMatch: 'Les nouveaux mots de passe ne correspondent pas.',
    passDif: 'Le nouveau mot de passe doit être différent.',
    passDes:
      'Le mot de passe doit comporter au moins 8 caractères, dont au moins 1 chiffre, 1 majuscule et 1 minuscule',

    //Whats New
    whatsNew: 'Quoi de neuf',
    newsNotFound: 'Actualités non trouvées.',
    searchInNews: 'Rechercher dans les actualités',
    learnMore: 'En savoir plus',
    howToUse: 'Comment utiliser ?',
    backList: 'Retour à la liste',

    // payment
    paymentProblem: '🧐 Il semble y avoir un problème avec votre paiement.',
    goToPayment: 'Aller aux abonnements et aux paiements',
    checking: 'Vérification en cours...',
    upgradeForFreeTitle: 'Mettez à niveau votre compte gratuitement maintenant !',
    tryChoosenPlan: 'Voulez-vous continuer gratuitement avec le plan choisi ?',
    nowYourPlanIsPro:
      'Maintenant, vous pouvez profiter du plan Retable PRO gratuitement pendant 7 jours !',

    // retableinviteEarnAlert
    zerocred: 'Vous avez 0 $ de crédit.',
    ifInvite: 'si vous {path} dès maintenant,',
    inviteFf: 'Invitez des amis',
    andEarn: 'et gagnez 3 $ de crédit !',
    earn5: 'vous pouvez gagner 3 $ !',
    freinds: 'invitez des amis et des collègues ',

    // Retableexporttablemodal
    exportas: 'Exporter en tant que',
    exportFormat: "Format d'exportation",

    // RetableChart
    xAxix: "Veuillez sélectionner une colonne de l'axe X. 📈",
    changeAxix:
      "Changez les valeurs sur l'axe Y ou changez le type de graphique si vous souhaitez personnaliser votre" +
      ' graphique. 🥧',
    selectCate: 'Veuillez sélectionner une colonne du champ des catégories. 📈',
    custChart:
      'Changez les valeurs ou le type de graphique si vous souhaitez personnaliser votre graphique. 🥧',
    exCharts: 'Vous pouvez voir ci-dessous des exemples de graphiques.',

    // Retable List View
    warningDeleteLastRow: "Il n'est pas possible de supprimer la dernière ligne.",
    warningDeleteLastColumn: 'La table doit comporter au moins une colonne.',

    //Retable List View Toolbar
    customizeList: 'Personnaliser la liste',
    customize: 'Personnaliser',
    changeViewType: 'Changer le type de vue',

    //Retable Loading
    loading: 'Chargement...',
    pleaseWait: 'Veuillez patienter...',

    //Verify
    go: 'Aller',
    verifying: 'Vérification en cours',
    successVerify: 'Vérification réussie. Vous pouvez maintenant vous connecter.',
    failureVerify: "Jeton non vérifié ou déjà vérifié. Veuillez revenir à la page d'accueil.",
    notVerify:
      "Désolé, vous devez vérifier votre adresse e-mail (n'oubliez pas de vérifier vos dossiers spam/courrier indésirable 👍)",

    //RetableCreateNew
    newWorkspace: 'Nouvel Espace de travail',
    getUp: 'Mettez-vous en route rapidement !',
    buildNow: 'Commencer',
    building: 'Construction',
    importDocument: 'Importer un document',
    slct: 'Sélectionner',
    selected: 'Sélectionné',
    workspaceNameTitle: "Nom de l'espace de travail",
    workspaceDescTitle: "Description de l'espace de travail",
    wsNameCantEmpty: "Le nom de l'espace de travail ne peut pas être vide.",
    pjOptionCantEmpty: "Vous devez sélectionner l'un des types de création de projet ci-dessus.",
    letsFindFile: '<p1>Recherchons </p1><p2>ce fichier</p2>',
    justImport: 'Vous pouvez uniquement importer des fichiers ".csv", ".xls(x)" ou ".retable".',
    dragHere: 'Glisser ici ou sélectionner un fichier',
    change: 'Changer',
    importedFile: 'Fichier importé.',
    neWProject: 'Nouveau Projet',
    newWorkspaceDesc:
      "L'espace de travail est utilisé pour classer et combiner les projets. Pensez à un espace de travail comme une collection de projets et de tableaux partagés entre un groupe de personnes travaillant ensemble.",
    newProjectDesc:
      'Chaque projet doit être unique, se concentrer sur un domaine clé et contenir toutes les informations que votre organisation possède concernant ce domaine.',
    forUseInOrganization: 'Pour utilisation dans une organisation',
    forPersonalUse: 'Pour utilisation personnelle',
    createOrgWSDesc1:
      "Vous pouvez appliquer une marque aux projets que vous créez dans l'organisation.",
    createPersonalWSDesc1:
      'Vous ne pouvez pas appliquer de marque aux projets que vous créez dans votre espace de travail personnel.',
    createOrgWSDesc2:
      "Pour créer l'espace de travail de l'organisation, vous devez d'abord créer une organisation.",
    createOrgWSDesc3: 'Disponible uniquement avec le plan Business.',
    createOrgWSDesc4:
      "L'espace de travail de l'organisation ne peut pas être créé. La marque peut être appliquée dans le plan Équipe.",
    firstlyYouMustCreateAnOrganization: 'Commencez par créer une organisation.',
    typeProjectName: 'Saisissez le nom du projet',
    typeProjectDescription: 'Saisissez la description du projet',
    projectNameTitle: 'Nom du projet',
    projectDescTitle: 'Description du projet',
    pjNameCantEmpty: 'Le nom du projet ne peut pas être vide.',

    //Team
    createTeam: 'Ajouter une équipe',
    addTeam: 'Ajouter une équipe',
    createOrganization: 'Ajouter une organisation',
    addOrganization: 'Ajouter une organisation',
    pressCreateTeam: 'Vous pouvez créer une équipe en cliquant sur le bouton "Ajouter une équipe".',
    teamName: "Nom de l'équipe",
    organizationName: "Nom de l'organisation",
    add: 'Ajouter',
    teamNameMustMin3Char: "Le nom de l'équipe doit comporter au moins 3 caractères.",
    organizationNameMustMin3Char: "Le nom de l'organisation doit comporter au moins 3 caractères.",

    teamNameCanNotBeEmpty: "Le nom de l'équipe ne peut pas être vide.",
    organizationNameCanNotBeEmpty: "Le nom de l'organisation ne peut pas être vide.",
    errorOrganizationNameContainRetable:
      'Le nom de l\'organisation ne peut pas contenir "Retable", vous pouvez utiliser un nom d\'organisation différent.',
    addMember: 'Ajouter un membre',
    detail: 'Détails',
    renameTeam: "Renommer l'équipe",
    deleteTeamTitle: 'Êtes-vous sûr(e) ?',
    deleteTeamText: 'Une fois supprimée, vous ne pourrez pas récupérer cette équipe !',
    creator: 'Créateur',
    admin: 'Administrateur',
    member: 'Membre',
    invited: 'Invité',
    lead: 'Responsable',
    deleteTeamMemberTitle: 'Êtes-vous sûr(e) ?',
    deleteTeamMemberText: "Vous êtes sur le point de supprimer ce membre de l'équipe.",
    youCantRemoveMembers: "Vous ne pouvez pas supprimer les membres de l'équipe.",
    memberNotFound: 'Membre introuvable !',
    memberNotFoundWarning: 'Aucun membre trouvé pour ajouter cette équipe',

    //RetableOrganizationSettings
    organizationDescription: "Description de l'organisation",
    //RetableOrganizationMembers
    noInvitedMembersFound: 'Aucun membre invité trouvé.',
    //RetableOrganizationDetail
    brand: 'Marque',
    members: 'Membres',
    settings: 'Paramètres',
    //RetableOrganizationBrand
    primaryColor: 'Couleur primaire',
    secondaryColor: 'Couleur secondaire',
    chooseAnImage: 'Choisir une image',
    setDefault: 'Définir par défaut',
    exampletext: "Texte d'exemple",
    brandIconValidation1: 'Type de fichier PNG ou JPEG.',
    brandIconValidation2: 'Taille de fichier inférieure à 1 Mo.',
    brandIconValidation3: 'Résolution carrée (par exemple, 40x40, 100x100).',
    brandIconValidation4: "Ratio d'aspect 16:3 pour une meilleure qualité.",

    // Brand
    brandTitle: 'Titre de la marque',
    brandLogo: 'Logo de la marque',
    brandIcon: 'Icône de la marque',
    brandTitleMustMin3Char: 'Le titre de la marque doit comporter au moins 3 caractères.',
    brandTitleCanNotBeEmpty: 'Le titre de la marque ne peut pas être vide.',
    brandIconSizeError: "La taille de l'icône de la marque doit être inférieure à 1 Mo.",
    brandIconMustBeSquare: "L'icône de la marque doit être carrée.",
    brandLogoSizeError: 'La taille du logo de la marque doit être inférieure à 1 Mo.',
    brandWrongType: 'Type de fichier incorrect.',
    brandReset: 'Réinitialiser',
    brandResetWarning: 'Vous êtes sur le point de réinitialiser les paramètres de votre marque.',
    branding: 'Branding',
    presentYourBrand:
      "Le branding de l'organisation ne peut être appliqué qu'aux projets créés dans l'espace de travail de l'organisation. Personnalisez vos paramètres de marque depuis l'onglet \"Organisation\" sur la page \"Aperçu du compte\".",
    presentYourBrand2:
      'Disponible uniquement pour l\'équipe. Personnalisez vos paramètres de marque depuis l\'onglet "Organisation" sur la page "Aperçu du compte".',
    presentYourBrand3:
      'L\'utilisateur doit avoir les autorisations "Propriétaire" ou "Éditeur" pour utiliser le bouton de branding.',
    presentYoutBrand4:
      'Disponible uniquement pour l\'organisation dont vous êtes membre. Personnalisez vos paramètres de marque depuis l\'onglet "Organisation" sur la page "Aperçu du compte".',
    // RetableTeamMemberRole
    inactive: 'Inactif',
    inactiveDesc: "L'utilisateur a des autorisations actives dans une autre équipe partagée.",

    // Organisation
    removeMember: 'Supprimer le membre',
    removeInvited: 'Supprimer le membre invité',
    removeMemberOrganization:
      'Cette opération supprimera le membre de cette organisation.' +
      ' Êtes-vous sûr(e) de vouloir effectuer cette opération ?',
    removeInvitedOrganization:
      'Cette opération supprimera le membre invité de cette organisation.' +
      ' Êtes-vous sûr(e) de vouloir effectuer cette opération ?',
    members: 'Membres',
    inviteds: 'Membre(s) invité(s)',
    reject: 'Rejeter',
    invitationPlanCancellationMessage: `Votre compte possède déjà un plan de paiement.
 Si vous acceptez l'invitation, le plan de paiement de votre compte sera annulé et il continuera avec un plan d'organisation.
 Ces changements peuvent affecter l'utilisation de l'espace de travail/projet/table.
 Voulez-vous quand même accepter l'invitation ?`,
    needBussinessPlanUpgrade:
      "Besoin d'une mise à niveau du plan Business pour effectuer cette opération.",
    deleteOrganizationMessage:
      'Vous ne pourrez pas restaurer une organisation si vous la supprimez. Êtes-vous sûr(e) de vouloir effectuer cette opération ?',
    orgQuantityError:
      "Il n'y a pas suffisamment de places. Vous devez acheter plus de places pour inviter de nouveaux utilisateurs.",
    notEnoughSeatFreeUser:
      "Vous avez été rétrogradé(e) au plan gratuit car vous n'avez pas acheté suffisamment de places. Veuillez contacter l'administrateur de l'organisation.",
    notEnoughSeatAdmin:
      "Cet utilisateur a été rétrogradé(e) au plan gratuit car vous n'avez pas acheté suffisamment de places.",
    // RetableFormTableLockMessage
    goToDashboard: 'Aller au tableau de bord',
    goToRetable: 'Aller à Retable',
    formLockedMsg: 'Ce formulaire est verrouillé. Vous ne pouvez pas le modifier.',
    formTableLockMsg: 'Bonjour 👋. Ce formulaire est verrouillé.',

    // RetableFormViewEdit
    formSettings: 'Paramètres du formulaire',
    extendedCoverImg: 'Image de couverture étendue',
    sendResponse: 'Envoyer une réponse',
    sendResponseDescription:
      'Les personnes connectées et ayant rempli le formulaire peuvent recevoir une copie de leur formulaire par e-mail.',

    // RetablePlanCard
    collaboratorPerWorkspace: "Jusqu'à <p1></p1> collaborateurs par espace de travail",
    collaboratorPerWorkspacePro: '<p1></p1> collaborateurs par espace de travail',
    workspaceLimit: '<p1></p1> espace de travail',
    projectLimit: "Jusqu'à <p1></p1> projet par espace de travail",
    projectLimitPro: '<p1></p1> projet par espace de travail',
    tableLimit: '<p1></p1> table par projet',
    recordsProject: '<p1></p1> enregistrements par projet',
    fileAttachmentProject: "<p1></p1> d'espace de pièce jointe par projet",
    changeHistoryFree: 'Historique des modifications',
    changeHistory: "Modifier <p1></p1> Historique de l'action",
    last10: 'Derniers 10',
    last100: 'Derniers 100',
    uptimeSLA: 'SLA de disponibilité : <p1></p1>',
    annually: 'Annuellement',
    monthly: 'Mensuellement',
    yearly: 'Année',
    planFreeDesc: "Essayez-nous avant d'avoir besoin de plus",
    planBasicDesc: 'Idéal pour les petites équipes',
    billedMonthly: 'facturé mensuellement',
    billedAnnually: 'facturé annuellement',
    numberOfSeats: '<p1></p1> nombre de places',
    // RETABLE SHARE MODAL
    invNewCol: 'Inviter de nouveaux collaborateurs',
    invAs: 'Inviter en tant que',
    projLevCol: 'Collaborateur au niveau du projet',
    AllowOnProj: "Permettre l'accès uniquement au projet.",
    workspLevColl: "Collaborateur au niveau de l'espace de travail",
    AllowAccPrWor: "Permettre l'accès à tous les projets de l'espace de travail.",
    shareRecc: 'Partager et ajouter le(s) enregistrement(s)',
    inviteMorCol: 'Inviter plus de collaborateurs par e-mail',

    //RetableSpreadsheetHeader
    saveRetable: 'Enregistrer Retable',
    needRegister:
      "Vous pouvez enregistrer cette feuille de calcul en vous inscrivant - c'est gratuit !",
    startNow: 'Commencer maintenant',
    needRegisterForShare:
      "Vous pouvez partager cette feuille de calcul en vous inscrivant - c'est gratuit !",

    // Calendar View
    chooseACalendarField: 'Choisissez une colonne de date et heure',
    yourRowsPlacedByThisField: 'Vos enregistrements seront placés en fonction de cette colonne.',
    yourRowsPlacedByThisRange: 'Vos enregistrements seront placés en fonction de ces colonnes.',
    createACalendarColumn:
      'Ajouter une colonne de date et heure pour placer les enregistrements sur le calendrier.',
    createNewCalendarColumn: 'Ajouter une nouvelle colonne de date et heure',
    usingCalendarColumn: 'Utilisation de la colonne de date et heure',
    usingDateRange: 'Utilisation de la plage de dates',
    setEndDate: 'Définir un champ de date de fin',

    //RetableMApModal.js
    locationCell: 'Cellule de localisation',
    setEndDate: 'Définir un champ de date de fin',

    // Map View
    chooseALocationField: 'Choisissez une colonne de localisation',
    createALocationColumn:
      'Ajouter une colonne de localisation pour placer les enregistrements sur la carte.',
    createNewLocationColumn: 'Ajouter une nouvelle colonne de localisation',
    usingLocationColumn: 'Utilisation de la colonne de localisation',
    backToLocation: 'Revenir à la localisation',
    draggableNow: "C'est maintenant déplaçable.",
    newMarker: 'Nouveau marqueur',
    relocate: 'Déplacer',
    searchACity: 'Rechercher une ville',
    gettingLocationAddress: "Obtention de l'adresse de localisation",
    deleteLocation: 'Supprimer la localisation',
    latitude: 'Latitude',
    longitude: 'Longitude',

    month: 'Mois',
    week: 'Semaine',
    day: 'Jour',
    today: "Aujourd'hui",

    //AddViewMenu.js
    kanbanView: 'Vue Kanban',
    calenderView: 'Vue Calendrier',
    mapView: 'Vue Carte',
    cardView: 'Vue Carte',
    addAview: 'Ajouter une vue',
    //locationColumnInput
    address: 'Adresse',

    //KanbanStackHeader.js
    uncategorized: 'Non catégorisé',
    record: 'enregistrements',

    //AddNewStack.js
    addNewStack: 'Ajouter un nouveau groupe',

    //RetableKanbanViewToolbar.js
    stackedBy: 'Empilé par',

    // Kanban View
    deleteStack: 'Supprimer la pile',
    renameStack: 'Renommer la pile',
    chooseAKanbanColumn: 'Choisissez une colonne de sélection ou de collaborateur',
    chooseAField: 'Choisissez un champ',
    createNewSingleSelect: 'Ajouter une nouvelle colonne de sélection unique',
    createNewCollaborator: 'Ajouter une nouvelle colonne de collaborateur',
    usingSelectOrCollaboratorColumn:
      "Utilisation d'une colonne de sélection unique ou de collaborateur",
    createAKanbanColumn: 'Ajouter une colonne de sélection unique ou de collaborateur',
    selectAFieldKanban: 'Champ Kanban',
    yourRowsStackedBased: 'Vos enregistrements seront regroupés en fonction de ce champ.',
    duplicateItem: "Dupliquer l'élément",
    itemBefore: 'Insérer un nouvel élément avant',
    itemAfter: 'Insérer un nouvel élément après',
    itemDetail: "Détails de l'élément",
    addNewItem: 'Ajouter un nouvel élément',

    // Formulation
    formula: 'Formule',
    formulaDesc: 'Calculez une valeur pour chaque ligne.',
    formulaError: 'Il y a une erreur dans la formulation. Veuillez vérifier la formule.',
    formulaCycleError: 'Référence circulaire détectée.',
    formulaColumnConfigured:
      'Les colonnes de formule doivent être configurées dans la personnalisation de colonne.',

    theme: 'Thème',
    dark: 'Sombre',
    light: 'Clair',

    // Desktop
    openWithRetable: 'Ouvrir avec Retable',
    noWorkspaceWarning:
      "Vous n'avez pas d'espace de travail où vous pouvez ouvrir cette version. Ajoutez un espace de travail.",
    currentVersionTitle: 'Ouvrir sur un projet existant',
    currentVersionDescription: 'Cela ouvre la dernière version du projet.',
    existVersionTitle: 'Ajouter un nouveau projet',
    existVersionDescription: 'Choisissez un espace de travail et créez un nouveau projet Retable.',
    projectPermissionWarning: `Vous n'avez pas la permission d'accéder à ce projet. Le projet a peut-être été supprimé ou vous avez été retiré du projet. Vous pouvez essayer d'ajouter un nouveau projet.`,
    openAsNewProject: 'Ouvrir comme un nouveau projet',
    existingVersionWillOpen: "*La version existante s'ouvrira.",
    versionYouWantToOpenWillOpen: "*La version que vous souhaitez ouvrir s'ouvrira.",
    open: 'Ouvrir',

    // Switch View
    youCanNotSwitchToKanban:
      'Vous ne pouvez pas passer à la vue Kanban pour les tables sans colonne de sélection unique ou de collaborateur.',
    youCanNotSwitchToCalendar:
      'Vous ne pouvez pas passer à la vue Calendrier pour les tables sans colonne de date et heure.',
    youCanNotSwitchToMap:
      'Vous ne pouvez pas passer à la vue Carte pour les tables sans colonne de géolocalisation.',
    youCanNotSwitchToForm: 'Vous ne pouvez pas passer à la vue Formulaire.',
    youCanNotSwitchFromForm: "Vous ne pouvez pas passer de la vue Formulaire à d'autres vues.",

    //Trial Expired
    trialExpired: 'Votre essai de Retable a expiré 😥',
    trialUpgradePlan: 'Passez à un abonnement payant pour continuer votre travail glorieux 🌟',
    trialUseCoupon:
      "N'oubliez pas d'utiliser le code de réduction de 50 % 'NEWYEAR50' valable sur tous les plans lors du paiement 🚀",
    trialRememberCoupon: "N'oubliez pas, le coupon est valable jusqu'au 28 février ! 🎁",

    // RetableColumnsMenu
    changesNotSavedAlert: 'Êtes-vous sûr(e) ? Vos modifications ne sont pas enregistrées.',
    hideAllColumnNames: 'Masquer tous les noms de colonnes',

    // Form View
    dragImage: 'Faites glisser ou sélectionnez une image ici',
    // RetableApp
    appNameTitle: "Nom de l'application",
    typeAppName: "Entrez le nom de l'application",
    saveAsPDF: 'Enregistrer au format PDF',

    // Card View
    customizeCards: 'Personnaliser les Cartes',
    imageColumn: 'Colonne Image',
    selectAnImageColumn: "Sélectionnez une colonne d'image",
    selectAnCardColumn: 'Sélectionnez une colonne image, QR ou couleur',
    usingCardColumn: "Utilisation d'une colonne image, QR ou couleur",
    selectCardColumnDesc:
      "Vous pouvez afficher la valeur de la cellule sélectionnée dans l'en-tête de la carte.",
    chooseAColumn: 'Choisir une colonne',
    addCardColumn: 'Ajouter une colonne image, QR ou couleur',
    createNewCardColumn: 'Ajouter une nouvelle colonne {columnType}',
    deleteItem: "Supprimer l'élément",

    // Elements Left Content
    elements: 'Éléments',

    // General Toast
    tableCopied: 'Table copiée.',
    tableMoved: 'Table déplacée.',
    orgUpdated: 'Votre organisation a été mise à jour avec succès.',
    orgDeleted: 'Votre organisation a été supprimée avec succès.',
    passwordChanged: 'Votre mot de passe a été modifié avec succès.',
    sent: 'Envoyé.',

    // RetableRowDetailRightPanel
    noSelection: 'Aucune ligne sélectionnée pour affichage',

    // Welcome
    letsStart: 'Commençons !',
    welcomeRetable: 'Bienvenue sur Retable !🚀',
    welcomeDescription:
      "Nous comprenons que l'essai de quelque chose de nouveau peut être difficile, mais nous voulons vous assurer qu'il n'y a pas besoin de s'inquiéter.🚀{break}" +
      'Nous sommes là pour rendre la transition aussi fluide que possible.{break}' +
      'Pour vous aider à vous mettre en route, nous avons préparé une courte vidéo pour vous.👇🏻',
    onboarding_Q1: 'Que ferez-vous avec Retable ?',
    onboarding_Q1_description:
      "Nous l'utiliserons plus tard pour vous suggérer des modèles adaptés.",
    onboarding_Q2: 'À propos de votre organisation',
    onboarding_Q2_description: 'Quel est le nom de votre organisation ?',
    onboarding_Q3: "Sélectionnez le nombre d'employés",
    onboarding_Q3_description: 'Combien de personnes travaillent dans votre organisation ?',
    onboarding_Q4: 'Quel est votre rôle ?',
    onboarding_Q4_description: 'Nous vous aiderons à démarrer en fonction de votre réponse.',
    onboarding_Q5: 'Quelles applications avez-vous utilisées auparavant ?',
    startup: 'Start-up',
    small_business: 'Petite entreprise',
    large_company: 'Grande entreprise',
    personal_freelancer: 'Particulier / freelance',
    educational: 'Éducatif',
    nonprofit: 'Organisme à but non lucratif / caritatif',
    less5: 'Moins de 5',
    more500: 'Plus de 500',
    personal: 'Personnel',
    manager: 'Gestionnaire',
    accountant: 'Comptable',
    administration: 'Administration',
    analyst: 'Analyste',
    architect: 'Architecte',
    attorney: 'Avocat',
    banker: 'Banquier',
    businessOwner: "Propriétaire d'entreprise",
    consultant: 'Conseiller',
    customerServiceRepresentative: 'Représentant du service client',
    developer: 'Développeur',
    educator: 'Enseignant',
    engineer: 'Ingénieur',
    executive: 'Cadre',
    financialAnalyst: 'Analyste financier',
    graphicDesigner: 'Designer graphique',
    humanResourcesSpecialist: 'Spécialiste en ressources humaines',
    itSpecialist: 'Spécialiste informatique',
    marketingManager: 'Responsable marketing',
    nurse: 'Infirmier(e)',
    operationsManager: 'Responsable des opérations',
    paralegal: 'Assistant juridique',
    physician: 'Médecin',
    realEstateAgent: 'Agent immobilier',
    salesRepresentative: 'Représentant commercial',
    scientist: 'Scientifique',
    softwareEngineer: 'Ingénieur logiciel',
    teacher: 'Enseignant',
    therapist: 'Thérapeute',
    writer: 'Écrivain',
    others: 'Autres',

    //FormulaPopover.js
    examples: 'Exemples',

    // Congrats.js
    congratulations: 'Félicitations',
    congratsDescription:
      'Vous avez configuré votre compte avec succès.{break}' +
      'Quoi de neuf ? Commencez par ajouter votre projet dans votre espace de travail et créez votre première application !',
    g2Checkbox:
      "J'autorise Retable à me connecter pour laisser un avis sur Retable sur Capterra ou G2 afin de recevoir une carte cadeau de 20 $.",
    congratsDiscord: 'Vous avez des questions ? Rejoignez notre serveur Discord',
    sweet: 'Super',

    //Header cell
    referanceHeaderCellFrom: '{to} de {from}',

    //RetableAutomationTriggerInput partII
    //month part
    january: 'Janvier',
    february: 'Février',
    march: 'Mars',
    april: 'Avril',
    may: 'Mai',
    june: 'Juin',
    july: 'Juillet',
    august: 'Août',
    september: 'Septembre',
    october: 'Octobre',
    november: 'Novembre',
    december: 'Décembre',

    //dayOfWeek part
    sunday: 'Dimanche',
    monday: 'Lundi',
    tuesday: 'Mardi',
    wednesday: 'Mercredi',
    thursday: 'Jeudi',
    friday: 'Vendredi',
    saturday: 'Samedi',

    //dayOfMonth part
    auto1st: '1er',
    auto2nd: '2ème',
    auto3rd: '3ème',
    auto4th: '4ème',
    auto5th: '5ème',
    auto6th: '6ème',
    auto7th: '7ème',
    auto8th: '8ème',
    auto9th: '9ème',
    auto10th: '10ème',
    auto11th: '11ème',
    auto12th: '12ème',
    auto13th: '13ème',
    auto14th: '14ème',
    auto15th: '15ème',
    auto16th: '16ème',
    auto17th: '17ème',
    auto18th: '18ème',
    auto19th: '19ème',
    auto20th: '20ème',
    auto21st: '21ème',
    auto22nd: '22ème',
    auto23rd: '23ème',
    auto24th: '24ème',
    auto25th: '25ème',
    auto26th: '26ème',
    auto27th: '27ème',
    auto28th: '28ème',
    auto29th: '29ème',
    auto30th: '30ème',
    auto31st: '31ème',

    //tabs part
    tabsSeconds: 'Secondes',
    tabsMinutes: 'Minutes',
    tabsHours: 'Heures',
    tabsDay: 'Jour',
    tabsMonth: 'Mois',
    tabsYear: 'Année',

    //quartz part
    everyLabel: 'Chaque jour',
    dayOfWeekIncrementLabel1: 'Tous les',
    dayOfWeekIncrementLabel2: 'jour(s) à partir du',
    dayOfMonthIncrementLabel1: 'Tous les',
    dayOfMonthIncrementLabel2: 'jour(s) à partir du',
    dayOfMonthIncrementLabel3: 'du mois',

    dayOfWeekAndLabel: 'Jour spécifique de la semaine (choisir un ou plusieurs)',

    dayOfWeekRangeLabel1: 'Chaque jour entre',
    dayOfWeekRangeLabel2: 'et',

    dayOfMonthAndLabel: 'Jour spécifique du mois (choisir un ou plusieurs)',

    dayOfMonthLastDayLabel: 'Le dernier jour du mois',
    dayOfMonthLastDayWeekLabel: 'Le dernier jour de la semaine du mois',
    dayOfWeekLastNTHDayWeekLabel1: 'Le dernier',
    dayOfWeekLastNTHDayWeekLabel2: 'du mois',
    dayOfMonthDaysBeforeEndMonthLabel: 'jour(s) avant la fin du mois',

    dayOfMonthNearestWeekDayOfMonthLabel1:
      'Le jour de semaine le plus proche (du lundi au vendredi) du',
    dayOfMonthNearestWeekDayOfMonthLabel2: 'du mois',

    dayOfWeekNTHWeekDayOfMonthLabel1: 'Le',
    dayOfWeekNTHWeekDayOfMonthLabel2: 'du mois',

    monthEveryLabel: 'Chaque mois',
    monthIncrementLabel1: 'Tous les',
    monthIncrementLabel2: 'mois à partir du mois',
    monthAndLabel: 'Mois spécifique (choisir un ou plusieurs)',
    monthRangeLabel1: 'Chaque mois entre le mois',
    monthRangeLabel2: 'et le mois',

    secondEveryLabel: 'Chaque seconde',
    secondIncrementLabel1: 'Toutes les',
    secondIncrementLabel2: 'secondes à partir de la seconde',
    secondAndLabel: 'Seconde spécifique (choisir une ou plusieurs)',
    secondRangeLabel1: 'Chaque seconde entre la seconde',
    secondRangeLabel2: 'et la seconde',

    minuteEveryLabel: 'Chaque minute',
    minuteIncrementLabel1: 'Toutes les',
    minuteIncrementLabel2: 'minutes à partir de la minute',
    minuteAndLabel: 'Minute spécifique (choisir une ou plusieurs)',
    minuteRangeLabel1: 'Chaque minute entre la minute',
    minuteRangeLabel2: 'et la minute',

    hourEveryLabel: 'Chaque heure',
    hourIncrementLabel1: 'Toutes les',
    hourIncrementLabel2: "heures à partir de l'heure",
    hourAndLabel: 'Heure spécifique (choisir une ou plusieurs)',
    hourRangeLabel1: "Chaque heure entre l'heure",
    hourRangeLabel2: "et l'heure",

    yearEveryLabel: 'Toutes les années',
    yearIncrementLabel1: 'Toutes les',
    yearIncrementLabel2: "années à partir de l'année",
    yearAndLabel: 'Année spécifique (choisir une ou plusieurs)',
    yearRangeLabel1: "Chaque année entre l'année",
    yearRangeLabel2: "et l'année",

    //unix part starts here
    uDayEveryLabel: 'Chaque jour',
    uDayOdWeekIncrementLabel1: 'Tous les',
    uDayOdWeekIncrementLabel2: 'jour(s) de la semaine',
    uDayOfMonthIncrementLabel1: 'Tous les',
    uDayOfMonthIncrementLabel2: 'jour(s) du mois',
    uDayOdWeekAndLabel: 'Jour spécifique de la semaine (choisir un ou plusieurs)',
    uDayOdMonthAndLabel: 'Jour spécifique du mois (choisir un ou plusieurs)',

    uMonthEveryLabel: 'Chaque mois',
    uMonthIncrementhLabel1: 'Tous les',
    uMonthIncrementhLabel2: 'mois',
    uMonthAndLabel: 'Mois spécifique (choisir un ou plusieurs)',
    uMonthRangeLabel1: 'Chaque mois entre le mois',
    uMonthRangeLabel2: 'et le mois',

    uMinuteEveryLabel: 'Chaque minute',
    uMinuteIncrementLabel1: 'Toutes les',
    uMinuteIncrementLabel2: 'minutes',
    uMinuteAndLabel: 'Minute spécifique (choisir une ou plusieurs)',
    uMinuteRangeLabel1: 'Chaque minute entre la minute',
    uMinuteRangeLabel2: 'et la minute',

    uHourEveryLabel: 'Chaque heure',
    uHourIncrementLabel1: 'Toutes les',
    uHourIncrementLabel2: 'heures',
    uHourAndLabel: 'Heure spécifique (choisir une ou plusieurs)',
    uHourRangeLabel1: "Chaque heure entre l'heure",
    uHourRangeLabel2: "et l'heure",

    // Groupbymenu
    groupByColumnInfo:
      'Les données de la colonne sont accessibles lorsque la colonne groupée est masquée.',

    // Settings.js
    digitSeparator: 'Séparateur de chiffres',
    comma: 'Virgule',
    dot: 'Point',

    //RetableThemeSwitch
    themeSwitch: 'Changer de thème',

    //RetableTableViewBody
    enterToAddNewRow: 'Appuyez sur Entrée pour ajouter une nouvelle ligne.',

    //RetableFreeTrialModal
    freeTrialModalTitle: 'Essai gratuit',

    // Delete Account
    deleteMyAccount: 'Supprimer mon compte',
    delErrOrgAdmin: 'Vous devez supprimer votre organisation avant de supprimer votre compte.',
    delErrOrgMember:
      "L'administrateur de l'organisation doit vous exclure de l'organisation. Vous pouvez vous connecter à l'administrateur de votre organisation.",
    deleteAccount: 'Supprimer le compte',
    thisAccountWillBeDeleted: 'Ce compte sera supprimé.',
    needToKnowBeforeDeleteAccount: 'Ce que vous devez savoir avant la suppression du compte.',
    whatWillHappenWorkspace:
      'Que va-t-il se passer pour mes espaces de travail si je supprime mon compte ?',
    whatWillHappenWorkspaceContent:
      "Si vous êtes le seul utilisateur dans votre espace de travail, vos espaces de travail seront supprimés et vous ne pourrez plus y accéder. S'il y a plus d'un 'propriétaire' dans vos espaces de travail, tout propriétaire sera affecté aux espaces de travail en tant que 'créateur' et ces espaces de travail ne seront pas supprimés.",
    whatWillHappenData: 'Que va-t-il se passer pour mes données ?',
    whatWillHappenDataContent:
      "En cas de suppression de votre compte, tous les projets, tableaux, vues et données de l'espace de travail supprimé seront définitivement supprimés.",
    isMyaccountTemporarlyDeleted:
      "Mon compte est-il temporairement supprimé, puis-je m'inscrire à nouveau ?",
    isMyaccountTemporarlyDeletedContent:
      'Vous pouvez vous inscrire à nouveau après la suppression de votre compte, mais vous ne pourrez pas accéder à vos données, vous serez considéré comme un nouvel utilisateur.',
    dontForgetBackup: "N'oubliez pas de sauvegarder vos données avant de supprimer votre compte !",
    notBeAbleToAccessData:
      "Lorsque vous supprimez votre compte, vous ne pourrez plus accéder à vos données, alors assurez-vous d'exporter et de sauvegarder vos données importantes avant de supprimer votre compte.",
    acceptDeleteAccount:
      "J'ai lu les conditions mentionnées ci-dessus et j'accepte de supprimer mon compte.",
    deleteAccountDoesNotMatch:
      'Le compte connecté ne correspond pas au compte qui a effectué la demande. Veuillez vous connecter avec le compte qui a effectué la demande.',
    accountDeleteSuccess: 'Votre compte a été supprimé avec succès.',
    delErrAppsumoUser:
      "Vous devez demander un remboursement auprès d'AppSumo avant de supprimer votre compte.",
  },
};
