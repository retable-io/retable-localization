/* eslint-disable max-len */
/* eslint-disable import/no-anonymous-default-export */
import { LOCALES } from '../locales';

export default {
  [LOCALES.ITALIAN]: {
    // Dashboard
    getStartedWith: 'Inizia con',
    retablePro30: 'Piano Retable PRO per 30 giorni',
    informModalDesc:
      "Hai iniziato a utilizzare Retable Pro per 30 giorni per ottenere l'accesso completo alle funzionalità di Retable. Ora vai avanti e crea i dati e il flusso di lavoro della tua azienda interna.",
    welcome: 'Ciao e benvenuto su Retable. Puoi aggiungere un nuovo spazio di lavoro qui. 👋',
    workspaceTip: 'Puoi cambiare il nome e la descrizione del tuo spazio di lavoro. 👆',
    shareTip:
      'Puoi condividere i tuoi spazi di lavoro con altre persone ed iniziare facilmente la tua collaborazione. ⛵',
    enjoy: 'Goditi Retable con il tuo primo progetto! 😍',
    next: 'Prossimo',
    prev: 'Precedente',
    finishTour: 'Termina il tour',
    newWrokspace: 'Aggiungi spazio di lavoro',
    workspaces: 'Spazi di lavoro',
    WorkspaceTrash: 'Cestino',
    workspaceNotfound: 'Spazio di lavoro o progetto non trovato.',
    noWorkspaces: 'Non hai alcuno spazio di lavoro.',
    isError: 'Si è verificato un errore.',
    gridView: 'Visualizzazione a griglia',
    listView: 'Visualizzazione a lista',
    addingWc: 'Aggiunta di un nuovo spazio di lavoro',
    emptyWorkspaceMessage: 'Puoi aggiungere un nuovo progetto premendo il pulsante "Aggiungi"',
    emptyWorkspaceMessageApp: 'Puoi aggiungere una nuova app premendo il pulsante "Aggiungi".',
    projects: 'Progetti',
    apps: 'Apps',
    app: 'App',
    gdpr: 'Certificato GDPR',
    community: 'Comunità',
    downloadDesktopApp: "Scarica l'app desktop",
    retableChromeExt: 'Estensione Retable per Chrome',
    retableFeatureAlertMessage:
      "L'app IOS Retable è attiva! Alimenta la tua esperienza Retable. Ottieni subito l'app IOS",
    retableChromeExtText:
      'Eleva la tua esperienza con Reable grazie alla nostra app Android. Scaricala subito su Google Play!',
    belongToOrg: 'Questo spazio di lavoro appartiene a {orgName}',
    notBelongToOrg: 'Questo spazio di lavoro non appartiene ad alcuna organizzazione',
    dashboardSearchInput: 'Cerca in spazi di lavoro e tabelle',
    quickStart: 'Guida rapida',
    quickStartText: 'Tutto ciò di cui hai bisogno per diventare un esperto di Retable',
    resources: 'Risorse',
    videoTutorials: 'Video tutorial',
    integrations: 'Integrazioni',
    discordChannel: 'Canale Discord',
    contact: 'Contatti',
    myWorkspaces: 'I miei spazi di lavoro',
    sharedWithYou: 'Condiviso con te',
    quicklinks: 'Link veloci',
    emptyWsDescText: 'Una descrizione per il tuo spazio di lavoro',
    emptyWsText: 'Questo spazio di lavoro è vuoto. Inizia creando un nuovo progetto',
    dashboard: 'Cruscotto',
    news: 'Notizie',
    wsDetails: 'Dettagli dello spazio di lavoro',

    editDescription: 'Modifica descrizione',
    noResults: 'Nessun risultato trovato.',

    //Main Top Bar
    search: 'Cerca',
    accountDetails: "Dettagli dell'account",
    logout: 'Esci',
    switchTheme: 'Cambia tema',

    // RetableAlertPop
    needUpgrade: 'Devi aggiornare il tuo piano per procedere con questa operazione.',
    needUpgradePro:
      'Devi aggiornare il tuo piano Pro al piano Team per procedere con questa operazione.',
    needUpgradeOrDelete:
      'Devi aggiornare il tuo piano per procedere con questa operazione o eliminarlo definitivamente senza spostarlo nel cestino.',
    upgrade: 'Aggiorna',
    upgrade2: 'AGGIORNA',
    upgradeNowProTrial: 'Aggiornamento ora',
    upgradeProtrialHeader:
      "Quando termina la tua prova, devi passare a un piano. Dopo questo periodo, non avrai accesso ai tuoi file senza l'upgrade.",
    proTrialRemainingTime:
      'Questa area di lavoro ha ancora {remainingTime} giorni nel piano di prova Pro.',
    upgradeNow: 'Aggiorna adesso',
    upgradeNowToolTip: 'Aggiorna il tuo piano.',
    youAreInProPlan: 'Ti trovi nel piano Pro.',
    youAreInBasicPlan: 'Ti trovi nel piano Base.',
    youAreInEnterprisePlan: 'Ti trovi nel piano Team.',
    youAreInBussinessProPlan: 'Ti trovi nel piano Business Pro.',
    youAreInBussinessBasicPlan: 'Ti trovi nel piano Business Basic.',
    youAreAlreadyIn: 'Ti trovi già nel piano Team.',
    needUpgradeShareRole:
      "Effettua l'aggiornamento ora per utilizzare i ruoli di Editor e Visualizzatore.",

    //RetableAutomationActionInput
    separateEmails: 'Destinatari (separa gli indirizzi email multipli con virgole)',
    content: 'Contenuto',
    subject: 'Oggetto',
    sendMailInfo:
      "Il contenuto dei record dell'automazione che hai creato non verrà inviato. Riceverai solo una notifica via e-mail che la tua automazione è stata attivata. Se desideri aggiungere ulteriori informazioni al campo del contenuto, puoi farlo da questo campo.",
    sendRecordInfo:
      "Il contenuto dei record idonei per l'automazione che hai creato verrà inviato automaticamente, se desideri aggiungere ulteriori informazioni alla parte del contenuto, puoi farlo da questo campo.",

    //RetableAutomationModal
    NameValidation: 'Il nome deve essere più lungo di un carattere.',
    selectColumn: 'Seleziona una colonna',
    invalidEmail: 'Indirizzo email non valido',
    invalidEmails: 'Indirizzo email non valide',
    upperCaseEmailError: "Inserisci l'indirizzo email in lettere minuscole.",
    triggerNotcompleted: 'Definisci un trigger per abilitare questa automazione.',
    actionNotcompleted: "Definisci un'azione per abilitare questa automazione.",
    actionAndTriggerNotCompleted:
      "Definisci un trigger e un'azione per abilitare questa automazione.",
    deleteAutomation: 'Elimina automazione',
    deleteAutomationText:
      "Questa operazione eliminerà l'automazione da questo progetto. Sei sicuro di voler eseguire questa operazione?",
    cancel: 'Annulla',
    delete: 'Elimina',
    automation: 'Automazione',
    name: 'Nome',
    automationName: "Nome dell'automazione",
    description: 'Descrizione',
    reWs: 'Rinomina spazio di lavoro',
    automationDescription: "Descrizione dell'automazione",
    trigger: 'Attivatore',
    type: 'Tipo',
    selectTrigger: 'Seleziona un attivatore',
    action: 'Azione',
    selectAction: "Seleziona un'azione",
    lastUpdated: 'Ultimo aggiornamento di {path}',
    att: 'alle {path}',
    save: 'Salva',
    discard: 'Scartare',
    pleaseSelTab: 'Selezionare una tabella.',
    //RetableUserColumnInput
    select: 'Seleziona',

    //RetableAutomationTriggerInput
    table: 'Tabella',
    selectTable: 'Selezionare una tabella',
    column: 'Colonna',

    //RetableAutomation
    noDescription: 'Nessuna descrizione',
    addNew: 'Aggiungi nuovo',
    noAutomationsText:
      'Non ci sono automazioni in questo progetto, usare il pulsante "Aggiungi nuovo" per aggiungerne una.',
    noAutomotionViewer: 'In questo progetto non ci sono automazioni.',
    automationRunCountWarning:
      'È stato completato il conteggio mensile dei cicli di automazione. Il credito per il conteggio dei cicli di automazione sarà rinnovato il {date}.',
    automationCountWarning:
      "È possibile creare un massimo di {count} automazioni in un'area di lavoro.",
    automationCountInfo: 'È stato utilizzato {usedCount} di {totalCount} automazione.',
    runCount: 'Conteggio delle corse',
    automationRunCountInfo: 'Totale delle automazioni in esecuzione in questo spazio di lavoro.',

    //RetableCalendarDropdown
    Hm: ' HH:mm',
    reset: 'RESET',
    apply: 'APPLICARE',

    //RetableCalendarInput
    day: 'giorno',
    month: 'mese',
    year: 'anno',

    //RetableColorPicker
    enterCustomColors: 'È possibile inserire colori personalizzati nei formati "#FFF" o "#FFFFFF".',

    //RetableColumnInput
    selectedColor: 'Colore selezionato:',
    eg: 'ad es. ',
    attachFile: 'Aggiungi allegato',
    fileSizelarge5: 'Dimensione del file superiore a 5 MB!',
    fileSizelarge5Text:
      'Dimensione del file superiore a 5 MB! ' +
      'È possibile aggiornare il piano per caricare file di dimensioni superiori a 5 MB. ',
    fileSizelarge20: 'Dimensione del file superiore a 20 MB!',
    clean: 'Pulito',
    fieldRequired: 'Questo campo è obbligatorio.',
    required: 'Richiesto',
    mustRequired: 'Richiesto',
    selectColabs: 'Selezionare il/i collaboratore/i',
    searchColabs: 'Ricerca di un collaboratore/i',
    selecetAColab: 'Seleziona un collaboratore',
    findMe: 'Trovami',
    permissionLocationDeniedDesc: 'Controllare le impostazioni del browser.',

    // RetableCreateFromTemplateModal
    selectWorkspaceOrProject: "È necessario selezionare un'area di lavoro o un progetto.",
    use: 'Usa',

    // RetableDashboardTrashBin
    years: ' anno/i',
    months: ' mese/i',
    days: ' giorno/i',
    hours: ' ora/e',
    minutes: ' minuto/i',
    second: ' secondo/i',
    seconds: ' secondo/i',
    ago: ' fa',
    just: 'solo',
    dashboardTrashBin: 'Cestino',
    dashboardTrashBinTooltip: 'Ripristinare o eliminare progetti e spazi di lavoro',
    typeProject: 'Tipo: Progetto',
    typeWorkspace: 'Tipo: Spazio di lavoro',
    restore: 'Ripristino',
    restored: 'Ripristinato',
    restoring: 'Ripristino',
    remove: 'Rimuovere',
    download: 'Scarica',
    removed: 'Rimosso',
    noDeletedItem: 'Non ci sono spazi di lavoro o progetti eliminati nel cestino.',
    deletedBy: 'Eliminato da ',

    // RetableDropdownInput
    selectSomeOptions: "Selezionare l'opzione (le opzioni)",
    searchOptions: 'Cerca nelle opzioni',
    selectOption: "Selezionare un'opzione",

    //RetableExpandDropdown
    itsEmpty: 'È vuoto.',
    col: 'Col',

    // RetableExpandCellModal
    cellPreview: 'Anteprima della cella',
    done: 'Fatto',
    fgColor: 'Colore di primo piano',
    bgColor: 'Colore di sfondo',

    // RetableDuplicateTableModal
    move: 'Spostare',
    copy: 'Copia ',
    selectProject: 'Selezionare il progetto',

    // RetableEditableFormQuestion
    unknownRow: 'Fila sconosciuta',
    fieldName: 'Nome del campo',
    fieldDesc: 'Descrizione del campo',
    typeQuestionText: `Digitare un contenuto da visualizzare nel modulo al posto del nome predefinito della colonna.`,
    typeQuestionDesc: `Digitare un contenuto da visualizzare nel modulo per la descrizione della colonna.`,
    addDesc: 'Aggiungere una descrizione a questo modulo',
    coverImage: 'Immagine di copertina',

    // RetableEditFormModal
    embedForm: 'Inserisci il modulo nella tua pagina web',
    copied: 'Copiato!',
    copyClipboard: 'Copia negli appunti',
    openLinkTab: 'Apri il link in una nuova scheda',
    shareToGetSubmissions: 'Condividi questo link per ricevere contributi da chiunque.',
    editForm: 'Modifica del modulo Retable',
    submit: 'Invia',
    share: 'Condividi',
    columns: 'Colonne',
    getEmailNotification: 'Ricevi notifiche via e-mail per le nuove risposte',
    edit: 'Modifica',
    codeEdit: 'Modifica il codice',
    codeLive: 'Codice dal vivo',
    codePreview: 'Anteprima del codice',
    addBold: 'Aggiungi testo in grassetto',
    addItalic: 'Aggiungi testo in corsivo',
    addStrikethrough: 'Aggiungi testo barrato',
    addHr: 'Inserire HR',
    addTitle: 'Inserisci il titolo',
    addLink: 'Aggiungi link',
    addQuote: 'Inserisci una citazione',
    addCode: 'Inserisci codice',
    addCodeBlock: 'Inserisci blocco di codice',
    addComment: 'Inserisci commento',
    addImage: 'Aggiungi immagine',
    unorderedListCommand: 'Modifica elenco non ordinato',
    orderedListCommand: 'Modifica elenco ordinato',
    checkedListCommand: 'Modifica elenco contrassegnato',
    textHere: 'Testo qui',
    urlHere: 'URL qui',
    lastHiddenColumn: "Non è possibile nascondere l'ultima colonna del modulo.",
    goToPublicToSubmit: 'Vai alla visualizzazione del modulo pubblico per inviare una voce',

    // RetableEmbeddedUrlModal
    embedRetable: 'Incorpora Retable',
    embedCode: 'Incorpora codice',
    doubleclickCopy: 'Doppio clic per copiare',
    width: 'Larg.',
    height: 'Alt.',
    wrongFiletype: 'Tipo di file sbagliato.',
    noAccess: 'Non hai accesso a questa funzione.',
    selectAnotherImage: "Seleziona un'altra immagine o trascinala.",
    selectImage: "Seleziona un'immagine o trascinala.",
    uploadImage: "Carica un'immagine.",
    uploadFile: 'Carica un file.',

    selectAnothrFile: 'Seleziona un altro file o trascina e rilascia.',
    selectFile: 'Seleziona un file o trascina e rilascia.',
    fileUpload: 'Caricamento file',
    customFileUpload: 'Il mio dispositivo',
    projectAttachment: 'Progetto allegato',
    selFile: 'Seleziona un file',
    upload: 'Carica',
    uploadMore: 'Carica altro',
    viewEditSelected: 'Visualizza/Modifica',
    fillFields: 'Compila tutti i campi richiesti.',
    insertValidAddress: 'Inserisci un indirizzo e-mail valido.',
    update: 'Aggiorna',
    hideBrand: 'Nascondi logo Retable',
    fillEmptyFields: 'È necessario compilare almeno uno dei campi sopra indicati.',
    manageYourFiles: 'Gestisci i tuoi file',
    uploadYourFiles: 'Carica i tuoi file',
    uploadText: 'Quando carichi un file, sarà disponibile in tutte le tabelle di questo progetto.',
    uploadNewFile: 'Carica nuovo file',
    filesThisCell: 'File in questa cella',
    otherFiles: 'Altri file',
    projectNoFiles: 'Non ci sono file in questo progetto',
    cellNoFiles: 'Non ci sono file in questa cella',
    clickToUpload: 'Fare clic per caricare',
    dragDrop: ' oppure trascina e rilascia',
    removeFileProject: 'Rimuovere questo file dal progetto?',
    removeFileProjectText: 'Quando rimuovi questo file, verrà eliminato definitivamente',
    removeFiles: 'Rimuovi file',
    moveFiles: 'Sposta i file in questa cella',
    allFilesUploaded: 'Tutti i file caricati',

    //RetableForm
    fileUploading: 'Caricamento file in corso',
    clearForm: 'Azzerra modulo',
    maliciousMessage1: 'Non inviare mai le password attraverso i moduli di Retable.',
    maliciousMessage2: 'Segnala un modulo dannoso.',
    shareForm: 'Condividi modulo',
    responseWarn:
      'Le persone che hanno effettuato il login e compilato il modulo possono ricevere una copia del loro modulo via e-mail.',
    loginToVote: 'Per votare è necessario aver effettuato il login.',

    // RetablePublicFormView
    thankForSubmission: "Grazie per l'invio della richiesta.",
    retableUsing:
      ' Qualunque sia il vostro ruolo o la vostra esigenza, dalle risorse umane al marketing, dalle vendite alla gestione dei progetti e alla gestione delle risorse umane' +
      ' design: ',
    noNeedSearch: "Non c'è bisogno di cercare! ",
    provideClass: 'Fornisce ogni giorno qualità e prestazioni di prima classe, senza limiti.',
    qualityPerformance: 'Fornisce ogni giorno qualità e prestazioni di prima classe, senza limiti.',
    gotoRetable: 'Vai a Retable',
    createFormNow: 'Crea ora il tuo modulo online',
    updateSubmission: "Aggiorna l'invio",
    backToRow: 'Torna alla riga',
    backToForm: 'Torna al modulo',
    error: 'Errore',
    noViewCreate: 'Non hai nessuna vista o tabella. È possibile crearne una nuova.',
    thisPrivateForm: 'Ciao a tutti! 👋 Questo è un modulo privato.',
    pleaseLoginToView: 'Accedi per visualizzare.',
    redirectText: 'Reindirizzamento a <p1></p1> in <p2></p2> secondi...',
    enterUrl: "Inserisci l'URL qui",
    redirectStart:
      'Una volta inviato il modulo, il reindirizzamento avviene dopo un conto alla rovescia di 10 secondi.',
    redirectUrl: 'URL di redirect',
    formEmailError:
      'Non è possibile inviare e-mail a utenti che non dispongono di un account Retable.',
    sendCopyForm: 'Inviami una copia delle mie risposte via e-mail',
    sendMailDescription:
      'Le persone che compilano il modulo possono ricevere una copia della loro risposta via e-mail.',
    writeHere: 'Scrivi qui',

    // RetableImportModal
    sure: 'Sei sicuro?',
    affectDefaultValue: `Questa tabella ha almeno un tipo di colonna auto-numerica o aperta con opzioni di valore predefinite. I dati importati possono essere influenzati da queste condizioni.`,
    confirm: 'Conferma',
    selectCorrectFile: 'È necessario selezionare un file .csv o .xls(x).',
    selectRetableCorrectFile: 'È necessario selezionare un file .retable.',
    newColumn: ' Nuova colonna',
    checkDuplicated: 'Assicurati che non siano state selezionate colonne duplicate.',
    allMustSelectedCol: 'Tutte le colonne importate devono avere una colonna selezionata.',
    selectAnotherType: 'Seleziona un altro file .csv o .xls(x)',
    selectRetableType: 'Seleziona un altro file .retable',
    selectTypeFile: 'Seleziona un file .csv o .xls(x)',
    selectRetableTypeFile: 'Seleziona un file .retable',
    importProject: 'Importa un file .csv o .xls(x)',
    importNewProject: 'Importa un nuovo progetto.',
    importTable: 'Importa tabella',
    importNewTable: 'Importare una nuova tabella.',
    importNewTableURL: 'Importa una nuova tabella da un URL del file.',
    importData: 'Importa i dati',
    addRecordExistingTable: 'Aggiung nuiovi record alla tabella esistente.',
    importedColumn: 'Colonna importata',
    tableColumn: 'Colonna della tabella',
    import: 'Importa',
    firstIsRowInclude: "La prima riga è l'intestazione, non includere questa intestazione.",
    firstRowheader: "La prima riga è l'intestazione.",
    trimWhitespace: 'Tagliare gli spazi bianchi.',
    insert: 'Inserisci',
    insertDescription:
      'Puoi selezionare qualsiasi file CSV o XLS dal tuo dispositivo per importarlo facilmente alla fine della tabella Retable.',
    replaceDescription:
      'Tutti i dati di questa tabella vengono sostituiti con i dati importati. Se i dati non hanno un equivalente nel file importato, vengono aggiunti alla fine della tabella Retable.',
    chooseUniqueColumns: 'Scegli le colonne a chiave unica',
    replaceHeader: "Sostituisci anche l'intestazione",
    repeatingSourceColumnWarning: 'I dati della tabella importata non sono univoci.',
    repeatingTargetColumnWarning: 'I dati della tabella Retable non sono univoci.',
    emptyFileWarning: 'Il file è vuoto.',
    insertData: 'Inserisci i dati',
    replaceData: 'Sostituisci i dati',
    wrongURLFormat: 'Formato URL errato.',
    importFileURL: 'Importa URL del file',
    importFileURLDesc: 'Importa una nuova tabella da un URL del file.',
    inaccessibleURL: "Impossibile accedere all'URL.",

    // RetableInviteMoreModal
    enterEmail: "Inserisci un'email",
    cantInvite5: 'Non è possibile invitare più di 5 utenti contemporaneamente.',
    inviteMore: 'Referenze',
    referInfo: 'Otteni 3 dollari di credito per ogni persona che presenti a Retable.',
    referDescription: 'È possibile invitare solo 5 persone alla volta',
    to: 'A ',
    invite: 'Invita',

    // RetableMessage
    writeMsg: 'Lascia un commento',
    y: 'y',
    mon: 'mon',
    d: 'd',
    h: 'h',
    m: 'm',
    s: 's',
    you: 'Tu',
    anonymousUser: 'Utente anonimo',
    badgelilagray: 'badge-lila-gray',
    commented: ' commentato',
    rowIn: ' questa riga in ',
    editedCell: ' ha modificato questa cella in {path}',
    noImage: 'Nessuna immagine disponibile.',

    // RetablePlanCard
    currentPlan: 'Piano attuale',
    contactUs: 'Contattaci',
    features: 'CARATTERISTICHE',

    // RetableProblemsModal
    requiredCell: 'Obbligatorio, cella sulla riga {path} ',
    isEmpty: ' è vuoto.',
    valueOf: ' Il valore della riga {path}',
    dontMatchCol: ' non corrisponde al tipo di colonna.',
    colMustUniqe:
      'Ogni valore in questa colonna deve essere univoco. Ma ci sono celle {path} con lo stesso valore',
    rowValue: 'Il valore {path} deve corrispondere al formato della colonna.',
    rowValidation: 'Il valore sulla riga {path} deve seguire le regole di convalida.',
    validationErr: 'Errore/i di convalida nei dati della cella.',
    problemsof: 'Problemi di {path}',

    // RetableProfilePicEditModal
    picSizeLarge1: "La dimensione dell'immagine è superiore a 1 MB.",
    profilePicture: 'Immagine del profilo',
    yourPhoto: 'La tua foto',
    removeSure: 'Sei sicuro di voler rimuovere la tua immagine del profilo?',
    chooseImage: 'Scegli Immagine',
    imgValidation: 'Sono consentiti solo file .jpeg e .png.',

    // RetableProject
    project: 'Progetto',
    noRecover: 'Una volta eliminato, non potrai recuperare questo progetto!',
    sharedUsers: 'Utenti condivisi:',
    sureDeleteProj: `Stai per eliminare questo progetto.`,

    //RetableProjectChat
    startDiscussion: 'Avvia una discussione',
    startDis: "Avvia una discussione. Puoi menzionare altri con '@'",
    projectChatPlaceholder:
      'È bello chiacchierare con i tuoi amici. Fai domande, collabora con il tuo team e tieni traccia dei cambiamenti.',

    // RetableProjectDropdown
    authorizedRename: 'Non sei autorizzato a rinominare.',

    // RetableProjectShareModal
    editor: 'Editore',
    editorDesc: 'Può modificare progetti e tabelle, ma non può configurarli o rimuoverli.',
    owner: 'Proprietario/a',
    ownerDesc: 'I proprietari hanno pieno accesso allo spazio di lavoro',
    removeUser: 'Rimuovi utente',
    removeTeam: 'Rimuovi squadra',
    removeUserText:
      "Questa operazione rimuoverà l'utente da questo spazio. Sei sicuro di voler eseguire questa operazione?",
    removeTeamSpace:
      "Questa operazione rimuoverà l'utente da questo spazio. Sei sicuro di voler eseguire questa operazione?",

    inviteMembers: 'Condiv. impostazioni',
    publicproject: 'Progetto pubblico',
    copLink: 'Link kopia',
    projLink: 'Progetto link',
    worksLink: 'Collegamento allo spazio di lavoro',
    unknownUser: 'Utente sconosciuto',
    unknownTeam: 'Squadra sconosciuta',
    invitedUser: 'Utente invitato',
    resendEmail: "Rinvia l'e-mail",
    resendVerEmail: 'Invia nuovamente email di verifica',
    noProjMembers: 'Nessun membro del progetto.',
    workspaceMembers: 'Membri dello spazio di lavoro',
    projectCollaborators: 'Invita altri collaboratori di progetto via e-mail',
    resendInvitation: "invia nuovamente l'invito",
    modalTitle: "Dati demografici dell'elenco dei dipendenti",
    findEmail: 'Indirizzo e-mail',
    findEmailOrTeam: "Indirizzo e-mail o un team tramite '@'",
    public: 'Pubblico',
    anyoneCanSee: 'Chiunque può vedere questo collegamento.',
    publicProjectLinkInfoOn:
      "Quando l'opzione Vista progetto è attivata, la vista Pubblica viene attivata automaticamente per tutte le viste.",
    publicProjectLinkInfoOff:
      "Quando l'opzione Vista progetto è disattivata, la vista pubblica è automaticamente inattiva per tutte le viste.",
    projectUseDataInfo:
      "Se gli utenti con cui hai condiviso hanno effettuato l'accesso, possono clonare questo progetto, tabella e dati nelle loro aree di lavoro personali. Solo gli utenti proprietari possono attivare o disattivare lo switch.",
    projectUseDataWarning:
      'Se abiliti l\'opzione "Usa dati" per il tuo progetto, le persone con il collegamento saranno in grado di accedere a tutti i dati in questo progetto e rimuovere eventuali filtri o nascondere quelli che hai applicato clonando il progetto nella loro area di lavoro Retable. Il tuo progetto e le tue tabelle non saranno interessati da queste modifiche.',
    shared: 'Condiviso',
    sharedFailMessage:
      'Condiviso via e-mail nel formato appropriato. Le email inappropriate sono elencate di seguito.',

    projShared: 'Condivisione riuscita di questo progetto con',
    workspaceShared: 'Condivisione riuscita di questo spazio di lavoro con',
    workspaceShareSettings: 'Impostazioni di condivisione per lo spazio di lavoro {workspaceName}',
    workspaceSharedCountInfo:
      'Questo spazio di lavoro ha {collaboratorCount} collaboratore. Aggiungere un collaboratore allo spazio di lavoro darà loro accesso a tutti i progetti in questo spazio.',

    projectShareSettings: 'Impostazioni di condivisione per il progetto {projectName}',

    // RetableProjectTrashBin
    projectTrash: 'Cestino del progetto',
    noDeletedTable: 'Non sono presenti tabelle o viste eliminate nel cestino.',
    view: 'Visualizzazione',

    //RetablePublicProjectShare
    refresh: 'Ricaricare',
    embedOnWeb: 'Incorpora la tabella nella tua pagina web',
    useData: 'Usa i dati',
    copyToWorkspace: "Copia nell'area di lavoro",
    copyToProject: 'Copia nel progetto',
    viewersCreateProj: `Gli osservatori possono creare un nuovo progetto utilizzando questo progetto.
     (Se l'utente con cui hai condiviso ha effettuato l'accesso.)`,
    tablesWillVisible: 'Le tabelle sottostanti saranno visibili a chiunque abbia il collegamento.',
    shareWithUnique: 'Condividi il progetto con un collegamento univoco.',
    cusLink: 'Collegamento personalizzato',
    cusLinkDes: 'Crea un collegamento personalizzato a questo progetto.',
    linkReq: 'Il collegamento è obbligatorio.',

    // RetablePublicSpreadsheet
    incorrectData: 'Questa tabella contiene alcuni dati errati.',
    checkErrors: 'Controlla gli errori',

    // RetablePublicTableHeader
    saving: 'Salvataggio...',
    changesSaved: 'Tutte le modifiche salvate.',
    signUp: 'Registrati',

    // RetablePublicView
    tableLocked: 'La tabella è bloccata da ',

    // RetableRowShareModal
    bulk: 'Quantità',
    shareRow: 'Condividi riga',
    useLink: 'Usa questo link o invia il link via e-mail per modificare la riga.',
    hidden: '(Nascosto)',
    send: 'Invia',
    sendRowLink: 'Invia il collegamento per la visualizzazione della riga tramite e-mail',
    enterMailType: "Inserisci un'e-mail o digita '@'",
    noEmailOrCollabCol:
      'Nella tabella non sono presenti email o colonne di collaboratori. Crea una colonna email' +
      ' o collaboratore che possa essere applicata a tutte le righe.',
    thisRow: 'Questa riga',
    allRows: 'Tutte le righe',
    bulkUpdateDesc:
      'Ogni riga viene inviata alla persona nella colonna selezionata.' +
      " Le righe non vengono assegnate a un collaboratore o non viene inviata un'e-mail a nessuno.",

    // RetableShareIcons
    shareText:
      'Organizza, visualizza, condividi e modifica facilmente i dati come nei fogli di calcolo.',

    // RetableShareMenu
    all: 'Tutto',
    onlyData: 'Solo dati',
    disableExport: "Disabilita l'esportazione",
    disableExportInfo: 'Gli utenti con cui condividi il link non possono esportare la tua tabella.',

    // RetableSnapshotListModal
    noSnapshots: 'Nessun backup.',
    restoreTable: 'Ripristina tabella',
    createTable: 'Nuova tabella',
    snapshotDescription:
      'È necessario selezionare un backup quando si desidera ripristinare una tabella o creare una nuova tabella.',

    // RetableSnapshotModal
    snapshots: 'Backup',
    takeSnapshot: 'Fai i rinforzi',
    viewPrevSnapshots:
      'Visualizza tutti i backup eseguiti in precedenza. Puoi sceglierne uno e ripristinare i dati..',
    snapShotTaken: 'Backup effettuato',
    snapShotTakenExp:
      'Abbiamo eseguito un backup del tuo progetto. Puoi andare ai backup e ripristinare questo backup quando vuoi.',

    // RetableDataValidation
    validation: 'Convalida',
    validationDes: 'Questa opzione consente di determinare le regole per la convalida dei dati',
    addRuleData: 'Aggiungi una regola per la convalida dei dati.',
    addValidationRule: 'Aggiungi regola di convalida',

    // RetableDelimiteColumnModal
    sureDeleteCol: 'Vuoi dividere i dati della colonna?',
    split: 'Diviso',
    delimiter: 'Delimitatore',
    typePreview: "Digita qualsiasi cosa e visualizza l'anteprima",
    preview: 'Anteprima',
    previewData: 'Anteprima dei dati',
    noDataFound: 'Nessun dato trovato.',
    multiple: 'Multiplo',
    addMuUsers: 'Aggiungi più collaboratori',
    sendNotif: 'Invia notifica',
    notifyUsers:
      'Avvisa i collaboratori quando vengono aggiunti o la riga in cui vengono aggiunti viene modificata',

    // RetableProjectHistoryModal
    rowSavedText:
      'La riga è salvata ma i tuoi dati non corrispondono alla condizione del filtro.' +
      ' Puoi vedere questa riga quando rimuovi il filtro.',
    createdAt: 'Creato alle ',
    updatedAt: 'Aggiornato alle ',
    projectHistory: 'Cronologia del progetto',
    noFoundProjectHistory: 'Nessuna cronologia del progetto trovata.',

    // RetableReferenceTable
    selectReferenceTable: 'Seleziona la tabella di riferimento',
    lookUpColumn: 'Colonna di ricerca',
    rollupColumn: 'Colonna di raggruppamento',
    noPremissionOthers: 'Non sei autorizzato a visualizzare altre tabelle.',
    selectRefCol: 'Seleziona la colonna di riferimento',
    rollupColumnConfigured:
      'Le colonne di raggruppamento devono essere configurate nella colonna Personalizza.',

    // RetableLookupValue
    selectReferencedColumn: 'Seleziona la colonna di riferimento',
    referencedColumn: 'Colonna referenziata',
    selectLookupColumn: 'Seleziona la colonna di ricerca',
    selectRollupColumn: 'Seleziona la colonna di raggruppamento',
    noReferencedColumn:
      'È necessaria una colonna di riferimento per aggiungere una ricerca. Aggiungi la colonna di riferimento prima di configurare questa colonna di ricerca..',
    noReferencedColumnRollup:
      'È necessaria una colonna di riferimento per aggiungere un raggruppamento. Aggiungi la colonna di riferimento prima di configurare questa colonna di raggruppamento.',
    // RetableRowData
    noImageFound: 'Immagine non trovata.',

    // RetableRowHistoryModal
    rowDetail: "Dettagli riga'",
    addNewRow: 'Aggiungi nuova riga',
    history: 'Cronologia',
    comments: 'Commenti',
    watchRowDesc:
      'Viene inviata una email di notifica agli osservatori quando una riga viene modificata.',
    watchRowNumberDesc: 'Numero di osservatori di questa riga.',
    nohistory: 'Nessuna modifica ancora.',
    nocomments: 'Nessun commento ancora.',
    addColumn: "Aggiungi un'altra colonna",
    prevRecord: 'Precedente',
    nextRecord: 'Successivo',
    addRowHistory: 'Aggiungi',
    watchRow: 'Osserva',
    showHiddenCols: 'Mostra {count} colonna(e) nascosta(e)',
    savedAutomatically: 'Salvato automaticamente',

    // RetableSendMailModal
    sendSelectedEmail: 'Invia i dati selezionati tramite email',

    // RetableGenerateDataModal
    generateData: 'Genera dati',
    columnData: 'Dati della colonna',
    noColumnData: 'Nessun dato di colonna.',
    generate: 'Genera',

    //RetableSourceInput
    emptyOption: 'Opzione vuota',
    sureRemoveOption: 'Sei sicuro di voler rimuovere questa opzione?',
    sureCleanList: "Sei sicuro di voler cancellare l'elenco?",
    clear: 'Cancella',
    sortAZ: 'Ordina da A a Z',
    sortZA: 'Ordina da Z a A',
    generateTableColumn: 'Genera dalla colonna della tabella.',
    addAnOption: "Aggiungi un'opzione",
    addOption: 'Aggiungi Opzione',
    selectedOptions: 'Ci sono {path} opzione(i) selezionata(e)',
    optionNotFound: 'Opzione(i) non trovata(e)!',
    searchOrAdd: "Cerca o aggiungi un'opzione",

    // RetableEditColumnModal
    checkProgress:
      'Seleziona questa opzione se desideri utilizzare una barra di avanzamento colorata',
    columnTypes: 'Tipi di colonna.',
    addNewCol: 'Aggiungi nuova colonna',
    custCol: 'Personalizza colonna',
    baicTypeCol: 'Base',
    advancedTypeCol: ' Avanzato',
    premiumTypeCol: 'Premium',
    premiumBetaTitle: 'Gratuito in versione beta per account Pro e Team',
    collaborator: 'Collaboratore',
    addUsers: 'Aggiungi utenti alle celle.',
    enterChar: 'Inserisci almeno un carattere.',
    selectReference: 'Per favore, seleziona la tabella di riferimento e il campo di ricerca..',
    customizeReferenced:
      'Non puoi personalizzare la colonna di riferimento con questo tipo di colonna.',
    customizeReference:
      'Non puoi personalizzare la colonna di riferimento con questo tipo di colonna.',
    customizeTableReference:
      'Non puoi personalizzare questa colonna perché è utilizzata come origine da una colonna di ricerca.',
    customizeTableReferenceRollup:
      'Non puoi personalizzare questa colonna perché è utilizzata come origine da una colonna di raggruppamento.',
    customizeLookup:
      'Non puoi personalizzare la colonna dei valori di ricerca con questo tipo di colonna.',
    customizeRollup:
      "Non puoi personalizzare l'origine della colonna di riepilogo con questo tipo di colonna.",
    dataLostText:
      'SE HAI DATI IN QUESTA COLONNA e' +
      'se cambi il tipo di colonna, i dati in questa colonna potrebbero essere persi o corrotti.' +
      'Tuttavia, se cambi di nuovo al tipo di colonna originale, ' +
      'sarai in grado di accedere ai tuoi dati originali effettuando un aggiornamento di pagina.',
    dataWarning:
      'ATTENZIONE: I dati che hai modificato prima di tornare indietro' +
      'al tipo di colonna originale potrebbero comunque essere persi o corrotti.',
    columnFilterWarning:
      'Se il tipo di colonna viene modificato a causa di un filtro applicato alla colonna, il filtro verrà rimosso.',
    ok: 'OK',
    ex: 'Esempio',
    ex1: 'Esempio: 1',
    text: 'Testo',
    title: 'Titolo',
    uniqueValues: 'Ogni valore sarà unico in tutta la tabella per questa colonna',
    requiredValues: 'Ogni valore sarà richiesto in tutta la tabella per questa colonna',
    maskData: 'Maschera dati.',
    maskDataDescription:
      "Nascondi i valori delle tue celle nella vista condivisa pubblicamente ad altre persone riempiendoli con asterischi ('*')",
    unique: 'Unico',
    refTable: ' Tabella di riferimento ',
    dateFormat: 'Formato data',
    includeTime: 'Includi ora',
    selectOptions: 'Seleziona opzione(i)',
    singleSelect: 'Selezione singola',
    multiSelect: 'Selezione multipla',
    singlelineMultiline: 'Singola riga / multi-riga',
    singleLineText: 'Testo a singola riga',
    multiLineText: 'Testo a multi-riga',
    wordWrap: 'A capo automatico',
    format: 'Formato',
    integer: 'Numero intero (1)',
    decimal: 'Numbero decimale (1.0)',
    currencyDecimal: 'Decimale (1.00)',
    precision: 'Precisione',
    currencySymbol: 'Simbolo di valuta',
    allowNegatives: 'Consenti numeri negativi.',
    style: 'Stile',
    max: 'Massimo',
    emptyCellDef:
      'Questa colonna riempirà le celle vuote utilizzando il valore predefinito fornito',
    textDes: 'Una riga di testo.',
    richTextDes: 'I dati possono essere formattati e visualizzati nel formato.',
    richText: 'Testo Formattato',
    numDes: 'Una riga di numeri.',
    checkboxDes: 'Una piccola casella in cui inserire un segno di spunta.',
    imgDes:
      "L'immagine ti consente di aggiungere immagini che possono poi essere visualizzate o scaricate.",
    attachmentsDes:
      'Gli allegati ti consentono di aggiungere immagini,' +
      ' documenti o altri file che possono poi essere visualizzati o scaricati.',
    calendarDes: 'Inserisci una data (ad esempio, 11/12/2013) o selezionala da un calendario.',
    colorDes: 'Scegli un colore per la tua cella.',
    emailDes: 'Un indirizzo email valido (ad esempio, andrew@example.com).',
    phoneDes: 'Un numero di telefono valido (ad esempio, +1 023 456 7890).',
    percentDes: 'Aggiunta del simbolo % ai tuoi numeri.',
    selectDes:
      'La selezione multipla ti consente di selezionare una o più opzioni predefinite elencate di seguito.',
    geoLocationDes: "Segna la tua posizione (ad esempio, '41.021045896867875,29.00408756726393')",
    referenceDes: "Mostra i dati di un'altra tabella in questa tabella.",
    autonumberDes:
      'Genera automaticamente un numero univoco e incrementato automaticamente per ogni record.',
    currencyDes:
      'Un tipo specifico di campo numerico che formatta il numero come importo di valuta.',
    ratingDes: 'Valuta i tuoi record.',
    defaultVal: 'Valore predefinito',
    european: 'UE',
    us: 'US',
    iso: 'ISO',
    urlDes: 'Una riga di URL.',
    url: 'URL',
    protocolRequired: "Devi aggiungere il protocollo dell'URL.",
    lookupValue: 'Valore di ricerca',
    lookupvalues: 'Valori di Ricerca',
    rollupValue: 'Valore di Raggruppamento',
    rollupValues: 'Valori di Raggruppamento',
    lookUpDes: 'Cerca un altro valore dalla tabella di riferimento.',
    createdAtDes: "Mostra la data e l'ora in cui il record è stato creato.",
    createdByDes: "Mostra l'utente che ha creato il record.",
    updatedAtDes: "Mostra la data e l'ora in cui il record è stato modificato.",
    updatedByDes: "Mostra l'utente che ha modificato per l'ultima volta il record.",

    rollupDesc:
      'Una colonna di riepilogo ti aiuta a riepilogare i dati da valori che sono riferiti a questa tabella.',
    includeAllValuesRollup: 'Includi tutti i valori nella stessa categoria nel calcolo.',
    includeAllValuesRollupDesc:
      'Se la casella è selezionata, tutti i valori nella stessa categoria vengono inclusi nel calcolo. Se deselezionata, vengono inclusi nel calcolo solo i dati che hai selezionato.',
    columnTitleMustBeUnique: 'Il titolo della colonna deve essere unico.',
    showAsButton: 'Mostra come pulsante',
    buttonText: 'Testo del pulsante',
    uuidDes: 'Genera automaticamente un valore univoco e personalizzato per ogni record.',
    uuidLength: 'Lunghezza',
    uppercase: 'Maiuscolo',
    lowercase: 'Minuscolo',
    numbers: 'Numeri',
    symbols: 'Simboli',
    uuidExample: 'Esempio',
    uuidCustomizeId: 'Personalizza identificatore',
    qrCodeDes:
      'Puoi creare un codice QR con il valore scritto nella cella. Puoi scansionare questo codice QR con qualsiasi lettore di codici QR',
    qrCodeSupportDes: 'Il tipo di colonna QR Code supporta i formati di dati sopra indicati.',
    selectSourceColumn: 'Seleziona la colonna di origine di GPT',
    enterSecretKey: "Inserisci una chiave segreta dell'API di ChatGPT.",
    gptKeyInfo: "Genera una chiave segreta dell'API di ChatGPT utilizzando questo link:",
    selectSourceColumnSwal:
      'Seleziona una colonna di origine per generare una risposta valida da ChatGPT.',
    enterPrompt: 'Inserisci il tuo prompt per generare una risposta valida da ChatGPT.',
    gptDes: 'Colonna di ChatGPT',
    prompt: 'Prompt',
    viewAsCoordinates: 'Visualizza come coordinate',
    voteRules: 'Regole',
    voteRule1: 'Ogni utente può votare una volta e i dati storici non vengono salvati.',
    voteRule2:
      'Quando la riga viene duplicata, i valori nella cella di voto vengono azzerati per motivi di sicurezza dei dati.',
    voteRule3: "L'operazione di incolla non può essere eseguita per motivi di sicurezza dei dati.",
    voteRule4: 'Solo gli utenti con il ruolo di "Proprietario" possono cancellare la cella.',
    voteDes: 'Ti permette di votare sulle righe della tua tabella.',
    currencySymbolPlacement: 'Posizione del simbolo di valuta',
    percentSymbolPlacement: 'Posizione del simbolo di percentuale',
    left: 'Sinistra',
    right: 'Destra',

    //RetableGPT
    secretKey: 'Chiave segreta',
    apiKeysOpenAI: 'Chiavi API - API OpenAI',
    askQuesitonGpt: 'Fai una domanda a GPT con dati delle colonne.',
    exampleGpt1: 'Chi è il CEO di {CompanyNameColumn}',
    exampleGpt1b: '{CompanyNameColumn}',
    exampleGpt2:
      'Quante medaglie ha vinto {CountryNameColumn} alle Olimpiadi del 2020? Rispondi solo con numeri.',
    exampleGpt2b: '{CountryNameColumn}',

    // RetableSpreadsheet
    formShare: `Il modulo deve essere condiviso per condividere la riga.
Vuoi aprire l'opzione di condivisione della vista modulo?`,
    frozenMsg: 'Le colonne più larghe della metà della vista non possono essere bloccate.',
    freezeColumns: 'Blocca Colonne',
    warning: 'Avviso',
    manyRequests: 'Troppe richieste di eliminazione righe!',
    deleteRows: 'Elimina Riga(e)',
    deleteRow: 'Elimina riga',
    deleteAllSelected:
      'Questa operazione eliminerà tutte le righe selezionate {numberOfRows}. Sei sicuro di eseguire questa operazione?',
    somethingWentWrong: 'Qualcosa è andato storto 🤔',
    pleaseRefresh: 'Sei pregato di aggiornare la pagina..',
    deleteLastCol: "Non puoi eliminare l'ultima colonna visibile della tabella.",
    deleteRefCol: 'Non puoi eliminare la colonna di riferimento.',
    deleteRefLookupCol:
      // eslint-disable-next-line max-len
      "Non puoi eliminare o modificare l'origine della colonna di valori di ricerca. Devi prima eliminare o cambiare il tipo della colonna dei valori di ricerca.",
    deleteRefRollupCol:
      // eslint-disable-next-line max-len
      "Non puoi eliminare o modificare l'origine della colonna di raggruppamento. Devi prima eliminare o cambiare il tipo della colonna di raggruppamento.",
    deleteLookupCol:
      // eslint-disable-next-line max-len
      "Non puoi eliminare questa colonna perché è utilizzata da una colonna di ricerca in un'altra tabella. Devi prima eliminare o cambiare il tipo della colonna dei valori di ricerca.",
    deleteRollupCol:
      // eslint-disable-next-line max-len
      "Non puoi eliminare questa colonna perché è utilizzata da una colonna di raggruppamento in un'altra tabella. Devi prima eliminare o cambiare il tipo della colonna di raggruppamento.",
    deleteCol: 'Elimina Colonna(e)',

    removeSelectedWarning:
      'Questa operazione ELIMINERÀ tutte le colonne selezionate. Sei sicuro di voler eseguire questa operazione?',
    row: 'Riga',
    cell: 'Cella',
    rowAdded: 'Nuova riga aggiunta.',
    selectLookupValue: 'Seleziona la colonna di riferimento e il campo di ricerca.',
    selectRollupValue: 'Seleziona la colonna di riferimento e il campo di riepilogo.',

    // RetableTableFooter
    none: 'Nessuno',
    empty: 'Vuoto',
    summary: 'Sommario',
    filled: 'Riempito',
    sum: 'Somma',
    avg: 'Media',
    min: 'Minimo',
    max2: 'Massimo',
    count: 'Conteggio',
    countNum: 'Conta Numeri',
    row2: ' riga',
    column2: ' colonna',
    s: 's',
    columns2: ' colonne',

    // RetableProjectNotificationMenu
    at: ' alle ',
    notifications: 'Notifiche',
    noNotification: 'Nessuna notifica.',

    duplicateproject: 'Duplica progetto',
    deleteproject: 'Elimina progetto',
    changeProject: 'Cambia progetto',
    projMembers: 'Membri del progetto',
    feedback: 'Feedback',
    userGuide: "Guida per l'Utente",
    editPr: 'Modifica progetto',
    renameProject: 'Rinomina progetto',
    projectName: 'Digita il nome del progetto',
    shareProject: 'Condividi progetto',
    shareCollab: 'Invita collaboratori',
    exportProject: 'Esporta progetto',
    exporting: 'Esportazione in corso...',
    roadmap: 'Pianificazione',
    support: 'Supporto',
    discord: 'Discord',
    projectsDropdownNewTabDesc: 'Usa il pulsante centrale del mouse per aprire in una nuova scheda',

    // RetableTableNav
    emptyTable: 'Tabella vuota',
    importRetable: 'Importa Retable',
    importGoogleSheet: 'Importa foglio Google',
    projectHistories: 'Cronologia del progetto',
    projectTrashBin: 'Cestino del progetto',
    automations: 'Automazioni',
    addOrimport: 'Aggiungi o importa',
    hideCol: 'Nascondi colonne',
    hide: 'Nascondi',
    filter: 'Filtro',
    retableNameMustBeUnique: 'Il nome di Retable deve essere unico.',
    maintenance: 'In manutenzione',

    // RetableTableNavItem
    renameTable: 'Rinomina tabella',
    duplicateTable: 'Duplica tabella',
    copyTable: 'Copia tabella',
    moveTable: 'Sposta tabella',
    snapshot: 'Backup',
    exportTable: 'Esporta tabella',
    deleteTable: 'Elimina tabella',
    containAnotherProj: 'Lo spazio di lavoro dovrebbe contenere almeno un progetto.',
    atLeast1Table: 'Il progetto dovrebbe avere almeno una tabella.',
    noRecoverTable: 'Una volta eliminata, non potrai ripristinare questa tabella!',
    referecnedTable: "La tabella è referenziata da un'altra tabella.",
    referecnedTableText: 'A questa tabella fanno riferimento le seguenti tabelle:',
    referecnedTableText1:
      'Rimuovi prima i riferimenti in quella tabella, quindi elimina questa tabella.',
    sureDeleteTable:
      'Sei sicuro di voler eliminare questa tabella? Le tabelle eliminate di recente possono essere ripristinate dal cestino.',
    sureDelTable: 'Stai per eliminare questa tabella.',
    affectReferenceValue:
      'Questa tabella ha colonne di riferimento o colonne referenziate. Queste colonne cambieranno come testo.',
    lockTable: 'Blocca Tabella',
    unlockTable: 'Sblocca Tabella',
    unlockTableRequest: 'Richiesta sblocco tabella',

    refDeleteTitle: 'Impossibile rimuovere una tabella con un riferimento',

    // RetableClientModal
    onlineCollaborators: 'Collaboratori online',
    showCell: 'Mostra cella',

    //RetableFilterMenu
    addFilter: 'Aggiungi filtro',
    applyFilter: 'Applica',
    disableFilter: 'Disabilita filtro',
    typeHEX: 'Digita HEX',
    operator: 'Operatore',
    or: 'O',
    and: 'E',
    mergedCellsWarning: "Questa operazione rimuoverà l'unione delle celle.",
    differenceInfo:
      'Il risultato può essere negativo o positivo in base ai diversi tipi di filtro.',
    filterLock:
      'Quando un filtro è bloccato, sarà invisibile e non potrà essere modificato nella condivisione pubblica. Solo un utente con autorizzazione di proprietario può bloccare il filtro.',
    lock: 'Blocca',
    locked: 'Bloccato',
    unlock: 'Sblocca',

    //RetableFilterRow.js
    filtRowStartDate: 'Data di inizio',
    filtRowEndDate: 'Data di fine',
    filtRowNow: 'ORARIO',
    noFilterCondition: 'Nessuna condizione di filtro è applicata.',
    inThisView: 'In questa vista, mostra il record dove',
    enterValue: 'Inserisci un valore',
    startDate: 'Data di inizio',
    endDate: 'Data di fine',

    //RetableFileUploadModal
    fileType: 'Tipo di file',
    fileSize: 'Dimensione del file',
    fileName: 'Nome del file',
    createdBy: 'Creato da',
    used: 'Usato',
    usedStorage: 'è utilizzato del tuo spazio di archiviazione.',
    maxFUSizeExceed: 'Non hai abbastanza spazio negli allegati del progetto.',
    uploadCancelText:
      'I file che stai cercando di caricare saranno annullati. Vuoi comunque chiudere?',
    noAccessProjectAtt:
      'Non hai accesso per visualizzare gli allegati del progetto, ma puoi comunque caricare file.',
    otherProjects: 'Altri progetti',
    attachmentSizeInfo:
      'Nota che i progetti e le tabelle nel cestino occupano spazio nei loro allegati.',
    dropToUpload: 'Trascina per caricare',

    // RetableFindAndReplace
    replaceSure: 'Vuoi sostituire tutti i dati?',
    replaceAll: 'Sostituisci tutto',
    find: 'Trova',
    replace: 'Sostituisci',
    caseSensitive: 'Sensibile alle maiuscole/minuscole',
    findAndReplace: 'Trova e sostituisci',

    // RetableFormatingRow.js
    beforeDate: 'Prima della data',
    afterDate: 'Dopo la data',

    // RetableFormatingMenu
    conditionalFormatting: 'Formattazione condizionale',
    addFormat: 'Aggiungi formato',

    // RetableHideFieldsMenu
    noHide: "Non puoi nascondere l'ultima colonna della tabella.",
    refreshlink: 'Aggiorna il link',
    shareData: 'Condividi i tuoi dati con questo link (i campi nascosti non sono visibili)',
    editable: 'Modificabile',
    makeEditable:
      "Rendi la tua Vista Pubblica modificabile. Se l'utente con cui hai condiviso è loggato, le modifiche vengono salvate. Altrimenti, le modifiche non vengono salvate nella tabella principale.",
    viewUseDataInfo:
      'Se gli utenti con cui hai condiviso questa tabella sono loggati su Retable, possono clonare questa tabella e aggiungere dati ai loro spazi di lavoro e progetti personali su Retable.',
    formView: 'Vista modulo',
    publicForm: 'Modulo pubblico',
    publicView: 'Vista pubblica',
    makePrivateForm:
      'Rendi il modulo privato. Solo gli utenti loggati possono visualizzare e inviare il modulo.',
    privateForm: 'Solo gli utenti loggati possono visualizzare e inviare',

    EditPreviewform: 'Modifica e anteprima del modulo',
    createLinkToView: 'Crea un link per visualizzare',
    createPublicForm: 'Crea un modulo pubblico',
    createForm: 'Crea un modulo',
    enableForm: 'Abilita modulo pubblico',
    makeFormEditable: 'Rendi questo modulo modificabile',
    makeTableEditable: 'Rendi questa tabella modificabile',
    allowViewersCopy: 'Consenti agli utenti di copiare i dati',
    customizeFormBranding: 'Personalizza il branding del modulo',
    applyOrganizationBranding: "Applica il branding dell'organizzazione",
    onlyLoggedInUsersViewSubmit: 'Solo gli utenti registrati possono visualizzare e inviare',
    shareDataWithThisLink:
      'Condividi i tuoi dati con questo link (i campi nascosti non sono visibili)',

    // RetableStyleToolbar
    bold: 'Grassetto',
    italic: 'Corsivo',
    underline: 'Sottolineato',
    fontColor: 'Colore del carattere',
    fillColor: 'Colore di riempimento',
    resetStyle: 'Ripristina stile',
    rowSize: 'Dimensione della riga',
    shortRow: 'Corta',
    mediumRow: 'Media',
    tallRow: 'Alta',
    mergeCell: 'Unisci celle',
    columnStyle: 'Stile della colonna',
    resetColorStyle: 'Ripristina stile',

    // RetableTableToolbar
    cannotUnlock: 'Non puoi sbloccare questa tabella.',
    views: 'Viste',
    changeDataView: 'Cambia vista',
    export: 'Esporta',
    exportView: 'Esporta vista',
    unlockedTable: 'La tabella è sbloccata',
    projectChat: 'Chat del progetto',
    sort: 'Ordina',
    sortAscending: 'Ordina in modo ascendente',
    sortDescending: 'Ordina in modo discendente',
    group: 'Raggruppa',
    chat: 'Chat',
    tabList: 'Elenco delle tabelle',
    unlockRequest: 'Invia una mail per richiedere lo sblocco della tabella. (',
    unlockRequestSent: "L'email di richiesta di sblocco della tabella è stata inviata. (",
    youHaveToWait: "Devi aspettare un po' (",
    youHaveToWaitSecondPart: ' secondi)',
    youHaveToWaitMinPart: ' minuti)',
    tableHistory: 'Cronologia della tabella',
    undo: 'Annulla',
    redo: 'Ripeti',
    addNewRow2: 'Aggiungi nuova riga',
    addNewRow3: 'Aggiungi riga',

    //retableSortMenu
    pickAnotherColumn: "Scegli un'altra colonna",
    pickColumnToSort: 'Scegli una colonna per ordinare',
    pickColumnToGroup: 'Scegli una colonna per raggruppare',
    disable: 'Disabilita',
    ascending: 'Ascendente',
    descending: 'Discendente',

    // RetableTemplateModal
    projectTemplate: 'Modello di progetto',
    useTemplate: 'Usa modello',
    close: 'Chiudi',

    // RetableViewListItem
    renameView: 'Rinomina vista',
    duplicateView: 'Duplica vista',
    deleteView: 'Elimina vista',
    noDeleteLastView: "Non puoi eliminare l'ultima vista di Retable.",
    noRecoverView: 'Stai per eliminare questa vista.',
    defaultView: 'Vista predefinita',

    // retableViewsList
    adding: 'Aggiunta in corso...',

    // RetableWorkspaceHeader
    workspace: 'Spazio di lavoro',
    editWorkspace: 'Modifica spazio di lavoro',
    editWorkName: 'Modifica nome dello spazio di lavoro',
    editWorkDes: 'Modifica descrizione dello Spazio di lavoro',
    deleteWorkspace: 'Elimina spazio di lavoro',
    startTemplate: 'Inizia con un modello',
    startScratch: 'Inizia da zero',
    shareWorkspace: 'Condividi spazio di lavoro',
    noWorkspaceRecover: 'Stai per eliminare questo spazio di lavoro.',
    workspaceName: 'Digita il nome dello spazio di lavoro',
    awesomeWorkspace:
      'Questo è uno spazio di lavoro fantastico! Ora vai avanti e organizza i tuoi progetti.',
    awsomeProject: 'Progetti condivisi con te da altri collaboratori.',
    externallyProjectsDesc: 'Progetti salvati da Retable Spreadsheet o da una fonte esterna.',
    workspaceDescription: 'Digita la descrizione dello spazio di lavoro',
    workspaceDesc: 'Spazio di lavoro predefinito',
    newProject: 'Aggiungi un progetto',
    newApp: "Aggiungi un'app",
    renameApp: 'Rinomina app',
    deleteApp: 'Elimina app',
    sureDeleteWorkspace: 'Stai per eliminare questo spazio di lavoro.',
    createANewProjectUnder: 'Crea un nuovo progetto in {workspaceName}',

    // RetableWorkspaceListView
    emptyProject: 'Progetto vuoto',
    sharedWith: 'Condiviso con',
    noProject:
      'Nessun progetto presente in questa area di lavoro. Utilizza il pulsante "Aggiungi nuovo progetto" per aggiungerne uno.',

    // RetableWorkspaceShareModal
    removeUserWorkspace:
      "Questa operazione rimuoverà l'utente da questo spazio di lavoro." +
      ' Sei sicuro di voler eseguire questa operazione?',
    inviteLink: 'Invita via link',
    inviteByLinkInfo:
      'Se gli utenti con cui hai condiviso sono loggati su Retable, lo spazio di lavoro è condiviso con il ruolo di Visualizzatore.',
    inviteCollaborators: 'Invita più collaboratori per lo spazio di lavoro tramite email',
    inviteLink2: 'Link di invito',
    shareYourWorkspace: 'Condividi il tuo spazio di lavoro con questo link.',
    peopleLink:
      'Le persone che si uniranno a questo spazio di lavoro tramite il link avranno il ruolo di Editor.',
    personalLink:
      'Questo link è personale. Solo tu e le persone che inviterai potranno vedere questo link.',
    viewer: 'Visualizz.',
    viewerDesc:
      'Non è possibile modificare o commentare alcun progetto in questo spazio di lavoro.',
    noWSMemberFound: 'Nessun membro dello spazio di lavoro trovato.',
    noPJMemberFound: 'Nessun membro del progetto trovato.',
    wsViewerDesc:
      'Le persone che si uniranno allo spazio di lavoro tramite questo link avranno il ruolo di Visualizzatore.',
    orgMemberDesc:
      "Le persone che si uniranno all'organizzazione tramite questo link avranno il ruolo di Membro.",
    teamAlready: 'Il team ha già le autorizzazioni.',
    upgradeNowFeature: "<p1>Esegui l'upgrade ora</p1> per utilizzare questa funzionalità.",
    unshare: 'Annulla condivisione',

    shareOutsideOrgTitle: 'Desideri aggiungere questo utente alla tua organizzazione?',
    shareOutsideOrgMsg1: `<b>Se aggiungi questo utente alla tua organizzazione,</b> l'utente avrà accesso gratuito a Retable. Ciò comporterà una riduzione di un posto rispetto al numero totale di posti della tua organizzazione.`,
    shareOutsideOrgMsg2: `<b>Se inviti senza aggiungere questo utente alla tua organizzazione,</b> l'utente deve avere un abbonamento individuale a Retable.`,
    shareOutsideOrgMsg3: `Seleziona l'opzione appropriata in base alle tue preferenze.`,
    neverShowThisAgain: 'Non mostrarlo mai più',
    inviteAnyway: 'Invita comunque',

    // helpers
    free: 'Gratuito',
    basic: 'Base',
    annuallyBasic: 'Base annuale',
    retableFast: 'Chiunque voglia vedere quanto è veloce Retable',
    monthUser: 'mese/utente',
    unlimitedCollaborators: 'Collaboratori illimitati',
    collaborators: 'Collaboratori',
    collabrativePerWorkspace: 'Collaborazione per spazio di lavoro',
    publicForms: 'Moduli pubblici',
    publicViews: 'Viste pubbliche',
    pro: 'Pro',
    annuallyPro: 'Pro annuale',
    enterprise: 'Enterprise',
    bussinessBasic: 'Base business',
    bussinessPro: 'Pro business',
    bussinessEnterprise: 'Illimitato business',
    team: 'Team',
    bussinessAnnuallyBasic: 'Base business annuale',
    bussinessAnnuallyPro: 'Pro business annuale',
    bussinessAnnuallyEnterprise: 'Enterprise business annuale',
    anyoneUsemore: 'Chiunque voglia utilizzare di più',
    unlimited: 'Illimitato',
    prioritySupport: 'Supporto prioritario',
    whowants: 'Chi vuole possedere i propri dati sul proprio cloud o server',
    everythingPro: 'Tutto nel piano "Pro"',
    customContact: 'Contatto personalizzato',
    paymentOptions: 'Opzioni di pagamento flessibili',
    number: 'Numero',
    checkbox: 'Casella di controllo',
    image: 'Immagine',
    'select(options)': 'Selezione singola/multipla',
    geolocation: 'Geolocalizzazione',
    attachment: 'Allegato',
    calendar: 'Data e ora',
    color: 'Colore',
    email: 'E-mail',
    workEmail: 'E-mail professionale',
    autonumber: 'Numero automatico',
    phonenumber: 'Numero di telefono',
    percent: 'Percentuale (Barra di avanzamento)',
    referenceanothertable: "Riferimento a un'Altra tabella",
    lastmodifiedtime: "Ora dell'Ultima modifica",
    lastmodifiedby: 'Ultima modifica effettuata Da',

    createdtime: 'Ora di creazione',
    createdby: 'Creato da',
    created: 'Creato',
    viaEmail: 'tramite e-mail',
    currency: 'Valuta',
    rating: 'Valutazione',
    lookup: 'Ricerca',
    richtext: 'Testo formattato',
    uuid: 'Identificativo unico',
    qrcode: 'Codice QR',
    gpt: 'GPT',
    vote: 'Voto',
    rollup: 'Riepilogo',
    last100Actions: 'Ultime 100 azioni',
    last10Actions: 'Ultime 10 azioni',
    '3Owner': '3 Proprietario',
    '10Owner': '10 Proprietario',
    proPlanTitle1: 'Moduli online',
    proPlanTitle2: 'Incorporazione HTML',
    proPlanTitle3: 'Conteggio progetti',
    proPlanTitle4: 'Conteggio tabelle',
    proPlanTitle5: 'Record per progetto',
    proPlanTitle6: 'Spazio per allegati per spazio di lavoro',
    proPlanTitle7: 'Richiedi di aggiornare',
    proPlanTitle8: 'Storico delle modifiche',
    proPlanTitle9: 'Backup',
    proPlanTitle10: 'Tipi di colonne Base, Avanzato e Premium',
    proPlanTitle11:
      'Visualizzazione Kanban, Calendario, Carta, Mappa, Griglia, Elenco, Modulo e Grafico',
    proPlanTitle12: 'Numero di spazi di lavoro',
    proPlanTitleUnlimitedVal: 'Illimitato',

    // RetableSearchInput
    searchInWorkspace: 'Cerca negli spazi di lavoro o nei progetti',
    searchInTemplates: 'Cerca nei modelli',
    searchInProjectShare: 'Cerca tra i membri del progetto',
    searchInWorkspaceShare: 'Cerca tra i membri dello spazio di lavoro',

    // MainFooter
    version: 'Versione',

    // Templates
    Templates: 'Modelli',
    templateNotfound: 'Modello non trovato!',
    noResultFound: 'Nessun risultato trovato.',
    goBackTemplatesDirectory: 'Torna alla directory dei modelli',
    templateArchive: '<p1>Benvenuto</p1> <p2>Archivio dei modelli</p2>',
    useIt: 'Usalo',

    // Retable
    welcomeProj: 'Benvenuto nel tuo primo progetto.',
    welcomeProjTitle:
      'Questa pagina assomiglia molto a un normale foglio di calcolo, ma con superpoteri.',
    welcomeProjTitle2: 'Mostriamo cosa puoi fare.',
    step2Header:
      'Questa è la tua visualizzazione predefinita, che assomiglia a un foglio di calcolo.',
    step2Title:
      'Una tabella può essere composta da diverse visualizzazioni, e puoi generarne quante ne vuoi.',
    step3:
      'Puoi ordinare, filtrare, raggruppare o formattare le colonne in base alle tue esigenze e ai requisiti della visualizzazione.',
    step4: 'Puoi anche condividere i tuoi dati sia con il pubblico sia con i tuoi colleghi.',
    step5:
      'Le automazioni di progetto di Retable ti consentono di configurare flussi di lavoro trigger-azione personalizzati direttamente nel tuo progetto.',
    step6Header: 'Sei bravo in questo!',
    step6Title:
      "Inizia a lavorare con la tua prima tabella. Non vedo l'ora di vedere cosa stai costruendo per il tuo lavoro!",

    projSet: 'Puoi cambiare le impostazioni del tuo progetto da qui 👆',
    navigateProj: 'Puoi navigare tra i tuoi progetti da qui ⛵',
    tableOptions: 'Puoi effettuare le operazioni sulla tabella da qui.',
    snapshotStep: 'Puoi fare un backup della tua tabella.',
    enjoyRetable: 'Divertiti ad utilizzare Retable 😍',
    haveMsg: 'Hai un nuovo messaggio',
    nMsg: 'Nuovo messaggio',
    extensionRowLimitationWarning:
      'Puoi inserire solo 1000 righe. Se desideri inserire più di 1000 righe, devi registrarti e aggiornare il tuo piano.',
    extensionFirstRowInfo: 'Impostare la prima riga come intestazione?',
    extensionFirstRowInfoDesc:
      'Puoi anche impostare questa azione successivamente facendo clic destro sulla prima riga e selezionando il campo Imposta come intestazione.',

    //Account
    api: 'API',
    apiKey: 'Chiave API',
    key: 'Chiave',
    apiDesc:
      "L'API può essere utilizzata per connettersi in remoto al database Retable e aggiungere o rimuovere righe dalle tabelle. ",
    apiExplanation:
      "L'API può essere utilizzata per connettersi in remoto al database Retable e/o rimuovere le tabelle.",
    accountOverview: "Panoramica dell'account",
    enaa: 'Abilitato',
    diss: 'Disabilitato',
    staa: 'Stato',
    updateUsername: 'Aggiorna il tuo nome utente e gestisci il tuo account',
    profile: 'Profilo',
    password: "Parola d'ordine",
    password2: 'Password',
    audit: 'Audit',
    subscription: 'Abbono',
    teams: 'Team',
    organizations: 'Organizzazioni',
    organization: 'Organizzazione',
    visit: 'Visita',
    docss: 'Vai alla documentazione',
    showw: 'Mostra',
    personal: 'Personale',
    bussiness: 'Business',
    settingsTopbar: "Panoramica dell'account",
    settings: 'Imposte',
    maxAPILimit: 'Limite massimo delle chiavi API:',
    createNewApi: 'Crea una nuova chiave API',
    deleteKeyWarning: 'Stai per eliminare questa chiave.',
    organizationAdminAccount: "Amministratore dell'organizzazione",
    organizationDescriptionAccount: "Descrizione dell'organizzazione",
    organizationNameAccount: "Nome dell'organizzazione",

    hideInfoMembers: "Nascondi le informazioni sull'organizzazione per i membri",
    deleteOrganization: 'Elimina organizzazione',
    deleteOrganizationWarning:
      'Una volta eliminata questa organizzazione, non è possibile tornare indietro. Per favore sii certo.',
    accountOverviewDesc: 'Gestisci il tuo profilo, abbonamento, team, API e registri',
    addUser: 'Aggiungi utente',
    organizationDesc:
      "Quando aggiungi un'organizzazione, puoi anche aggiungere membri del team e aiutarli a collaborare.",
    renewalDate: 'Data di rinnovo',

    // saga swall
    invSent: "👋 Abbiamo già inviato un'email di invito 📧. 👍",
    justNow: 'Proprio ora',
    okswal: 'OK',
    success: 'Successo',
    projDuplicatedName: 'Progetto duplicato con nome: ',
    tableDuplicatedName: 'Tabella duplicata con nome: ',
    newColAdded: 'Nuova colonna aggiunta',
    importingData: 'Importazione dei dati in corso...',
    snapshotTaken: 'Il tuo backup è stato preso in carico ',
    snapshotReloaded: ' backup ricaricato.',
    snapReTable: ' backup ricaricato come nuova tabella.',
    tableRemoved: 'Puoi ripristinare questa tabella dal cestino.',
    viewRemove: 'Puoi ripristinare questa vista dal cestino.',
    tableLockedForOther:
      'Tabella bloccata per gli altri, puoi modificare la tua tabella senza distrazioni.',
    passwordSent: '📩 Abbiamo inviato un link per il recupero della password a',
    dontForCheck: '🧐 Non dimenticare di controllare la tua cartella Spam/Junk.',
    invationSent: 'Invito inviato.',
    columnAdd: 'COLONNA',
    invitationResendSuccessfully: 'Invito rinviato con successo a {inviteduserMail}.',
    accUpd: 'Il tuo account è stato aggiornato con successo.',
    proRemoved: 'Puoi ripristinare questo progetto dal cestino.',
    workRemoved: 'Puoi ripristinare questo spazio di lavoro dal cestino.',
    somethingWrongInvitation: "Si sono verificati problemi nell'invio degli inviti. \n",
    alreadyInAnOrg: "Gli utenti sono già in un'altra organizzazione",
    alreadyInTheOrg: 'Gli utenti sono già in questa organizzazione',
    youAreAlreadyInOrg: "Sei già in un'organizzazione.",
    errorWhenCreatingInvitation: 'Si è verificato un errore durante la creazione degli inviti',
    hasAnUnusedInvitation: 'Gli utenti hanno inviti inutilizzati',
    userNotFound: "L'utente non esiste",
    orgInviteBadRequest:
      "Sei già coinvolto in un'organizzazione. Non puoi essere coinvolto in un'altra organizzazione.",
    goToOrganization: "Vai all'organizzazione",
    maxFileSizeToUpload:
      'I tuoi file sono troppo grandi. Contattaci se desideri caricare file più grandi di 10MB.',
    contSs: 'Non puoi creare più backup. ',
    upgradeForSs: 'Aggiorna il tuo account per un nuovo backup o sovrascrivi un backup esistente. ',
    clickYes: 'Clicca SI se desideri sovrascrivere questa versione, ',
    clickNo: 'Clicca NO se desideri mantenere la versione esistente.',
    no: 'No',
    yes: 'Si',

    tableNotExists: 'La tabella che stai cercando non esiste.',
    invitationAlreadyUsed: "L'invito è già stato utilizzato.",
    pjExportSheetNameError:
      'Ci sono problemi di compatibilità. I nomi delle tabelle saranno modificati secondo le seguenti regole.\n\n' +
      '*Un nome di tabella non può superare i 31 caratteri.\n' +
      '*Non puoi utilizzare i seguenti caratteri speciali in un nome di tabella. ( , / , * , ? , : , [ , ])',
    pjExportProjectNameError:
      'Ci sono problemi di compatibilità. Il nome del progetto verrà modificato secondo le seguenti regole.\n\n' +
      'Non puoi utilizzare i seguenti caratteri speciali in un nome di progetto. ( , / , * , ? , : , [ , ])',
    pjExportProjectAndSheetNameError:
      'Ci sono problemi di compatibilità. Il nome del progetto verrà modificato secondo le seguenti regole (!) e i nomi delle tabelle verranno modificati secondo le seguenti regole ().\n\n' +
      'Un nome di tabella non può superare i 31 caratteri.\n' +
      '!Non puoi utilizzare i seguenti caratteri speciali in un nome di progetto o di tabella. ( , / , * , ? , : , [ , ])',
    retableExportNameError:
      'Ci sono problemi di compatibilità. Il nome del file verrà modificato secondo le seguenti regole.\n\n' +
      '*Non puoi utilizzare i seguenti caratteri speciali in un nome di tabella. ( , / , * , ? , : , [ , ])',
    unregisteredMail: 'E-mail non registrata',
    info: 'Informazioni',
    recaptchaErrorMessage:
      'Si è verificato un problema durante la verifica. Aggiorna la pagina o contattaci.',
    napshotTakenSuccess: 'Backup taken',
    snapshotTakenSuccessDescription:
      'Abbiamo fatto un backup del tuo progetto. Puoi andare ai backup e ripristinare questo backup quando vuoi.',

    // profile
    ltdCanNotChangeEmail:
      'Gli utenti che acquistano un piano con offerta a vita non possono modificare il proprio indirizzo email.',
    uploadPic: 'Carica foto profilo',
    enterName: 'Inserisci nome',
    surname: 'Cognome',
    enterSurname: 'Inserisci cognome',
    enterEmail2: 'Inserisci e-mail',
    saveProfile: 'Salva profilo',
    nameIsRequired: 'Il nome è obbligatorio.',
    needPassword:
      'Per cambiare la tua e-mail, devi prima <p1>aggiungere una password a Retable</p1>.',
    emailAlreadyInUse: 'è già in uso in un altro account.',
    incorrectPassword: 'Password errata',
    yourPhotoDescription:
      'Questa foto verrà visualizzata quando ti viene condiviso uno spazio di lavoro o un progetto.',
    fieldCannotContainUrl: '{field} non può contenere URL.',
    nameCannotSpaceInName: 'Nel nome non possono essere presenti spazi bianchi.',

    //password
    currentPassword: 'Password attuale',
    newPassword: 'Nuova password',
    passwordAgain: 'Ripeti nuova password',
    changePassword: 'Cambia password',

    // Audit
    activity: 'Attività',
    date: 'Data',

    // subscription
    credit: 'Credito: ',
    earnMore: 'Guadagna crediti!',
    currentPlan2: 'Piano attuale: ',
    status: 'Stato: ',
    manageSubscription: 'Gestisci la tua sottoscrizione',
    proAccount: 'Il tuo account è sul piano {path}.',
    renewPlan: 'Il tuo piano si rinnoverà a {path} per {path2}',
    endPlan: 'Il tuo piano terminerà il {path}',
    carbonRemoval: 'Contribuiamo a finanziare la rimozione del carbonio di prossima generazione',
    contribute: "contribuisci con l'1% degli acquisti",
    active: 'Attivo',
    pastDue: 'In ritardo',
    canceled: 'Annullato',
    canceledDate: 'Data di annullamento',
    paused: 'In pausa',
    incomplete: 'Incompleto',
    yourAreUsingThisPlan: 'Stai utilizzando questo piano.',
    chooseoneplan: '<p1>Scegli</p1> <p2>Un Piano</p2>',
    useFreeTrial: 'Usa la prova gratuita',
    useFreeTrialDesc: 'Puoi avviare una sottoscrizione mentre utilizzi la prova gratuita.',
    freeTrial: 'Prova Gratuita',
    trialEndDate: 'Data di fine prova',
    remainingTrialDays: 'Giorni di prova rimanenti',
    subscriptionEndDate: 'Data di fine sottoscrizione',
    nextBillingDate: 'Prossima data di fatturazione',
    resumesAt: 'Riprende a',
    period: 'Periodo',
    totalSeat: 'Posti totali',
    activeSeat: 'Posti attivi',
    seat: 'Posto',
    pageNoAccessThroughApp:
      "Non è possibile accedere a questa pagina tramite l'applicazione. Vi preghiamo di contattarci per la vostra domanda.",
    gotIt: 'Fatto',

    // filters
    contains: 'contiene',
    donotContain: 'non contiene',
    iss: 'è',
    issnot: 'non è',
    isemptyy: 'è vuoto',
    issnotempty: 'non è vuoto',
    between: 'tra',
    difference: 'differenza',
    doesnotContain: 'non contiene',
    isFilter: 'è',
    isNot: 'non è',
    isEmptyFilter: 'è vuoto',
    isnotEmptyFilter: 'non è vuoto',
    is: 'è',
    isNot2: 'non è',
    isBefore: 'è prima di',
    isAfter: 'è dopo',
    notauth: 'non autorizzato',
    form: 'Modulo',
    otherusers: 'Altri utenti',

    // automations
    sendMail: 'Invia una notifica via mail',
    wRowAdded: 'Quando viene aggiunta una riga',
    wRowDeleted: 'Quando viene eliminata una riga',
    wCellUpdated: 'Quando viene aggiornata una cella',
    wFormSubmited: 'Quando viene inviato un modulo',
    atSchTime: 'In un momento pianificato',
    sendRecords: 'Invia record tramite e-mail',
    selectToField: 'Seleziona il campo "A".',
    callWebhooks: 'Chiamata a webhooks',
    params: 'Parametri',
    headers: 'Intestazioni',
    body: 'Corpo',
    webhookErrorInvalidUrl: 'Inserisci un URL valido.',
    webhookErrorRequiredHeaders:
      'Fornisci un valore sia per il campo nome che per il campo valore nella sezione Intestazioni.',
    queryName: 'Nome query',
    queryValue: 'Valore query',
    headerName: 'Nome intestazione',
    headerValue: 'Valore intestazione',
    contentType: 'Tipo di contenuto',
    httpMethod: 'Metodo HTTP',
    noParamsInfo: 'Non sono presenti parametri di query per questa richiesta.',
    automationLogRunSuccess: 'Automazione completata con successo.',
    automationLogRunError: 'Automazione fallita con un errore.',
    automationLogCreate: 'Automazione creata con successo.',
    automationLogUpdate: 'Automazione aggiornata con successo.',
    automationLogSendEmail: 'Automazione attivata da {userName} e email inviata.',
    automationLogSendEmailWithoutUser: 'Automazione attivata ed email inviata.',
    request: 'Richiesta',
    response: 'Risposta',
    automationCreatedByUser: 'Automazione creata da {userName}.',
    automationUpdatedByUser: 'Automazione aggiornata da {userName}.',
    automationTriggedByUser: 'Attivata da {userName}.',
    automationLastupdatedBy: "Aggiornato l'ultima volta da {updatedByName} il {updatedInfoDate}.",
    automationCreatedBy: 'Creato il {createdByDate} da {createdByName}',
    columnTypeIsNotSupported: 'Il tipo di colonna {type} non è ancora supportato.',

    // datavalidation
    minvalue: 'Valore minimo:',
    maxvalue: 'Valore massimo:',

    //RetableTableReferenceModal
    selectedVal: 'Valore(i) selezionato(i)',
    selectableVal: 'Valore(i) selezionabile(i)',

    // Faq
    pricing: 'Prezzi',
    faq: 'Domande frequenti',
    signIn: 'Accedi',
    signUpFree: 'Iscriviti gratuitamente',

    orchestratePowerful: 'Orchestrate potenti soluzioni aziendali con una singola fonte di verità.',
    limitImagination: "L'unico limite è la tua immaginazione.",
    whatisRetable: "Cos'è Retable?",
    det: 'Dettagli',

    retableMean:
      'Retable è un programma software ibrido semplificato tra un foglio di calcolo e un database utilizzato' +
      ' come strumento di collaborazione e organizzazione online. È adatto per piccole e grandi' +
      ' imprese, ONG e qualsiasi altra organizzazione che si basi su pratiche di lavoro collaborative.',

    whyRetable: 'Perché dovrei / la mia azienda dovrebbe preferire Retable?',
    whyAnswer:
      'Retable combina il formato familiare dei fogli di calcolo con la potenza dei database,' +
      ' creando una soluzione che le squadre adorano utilizzare. È facile da usare e' +
      ' non richiede esperienza tecnica. Retable è altamente personalizzabile e può essere adattato' +
      ' per soddisfare le esigenze di' +
      " organizzazioni individuali o addirittura di diversi progetti all'interno di una singola entità.",
    whatAdvantages: "Quali sono i vantaggi nell'utilizzare Retable?",
    theAdvantages:
      'Retable consente di registrare e gestire rapidamente qualsiasi tipo di informazione dispersa.' +
      ' Uno dei principali vantaggi è che aiuta gli utenti a risparmiare una quantità enorme di tempo.' +
      ' Ha molte diverse possibilità e come soluzione basata su web, il software viene' +
      " regolarmente aggiornato con ulteriori funzionalità per migliorare l'efficienza aziendale e" +
      ' opportunità di collaborazione.',

    workMultipleExcel:
      'Retable ti consente di lavorare su più file Excel e fogli di calcolo contemporaneamente.',
    dataEasy: 'La manipolazione dei dati è rapida e semplice.',
    adaptableSpecific: 'Adattabile per soddisfare le esigenze di progetti specifici.',
    differentViews: 'Diverse visualizzazioni consentono di combinare diversi componenti.',
    elegantInterface: 'Interfaccia utente visuale elegante.',
    multiUserTime:
      'Più utenti possono lavorare contemporaneamente sulla stessa tabella in tempo reale.',
    userAuthorize: 'Gli utenti possono essere autorizzati e avere accesso su base di celle.',
    increasedSecurity:
      'Sicurezza aumentata - Retable può mascherare i dati delle colonne determinati dagli utenti.',
    editSpreadSheets:
      'Modifica, gestisci e condividi fogli di calcolo e dati con il tuo team aziendale. Senza codice richiesto.',
    storeReocrds: 'Archivia record e tieni tutto organizzato.',
    preformsImEx:
      'Esegue transazioni di importazione ed esportazione in modo efficiente. Gli utenti possono esportare il' +
      ' file in diversi formati.',
    saveTime: 'Risparmia tempo con flussi di approvazione dei dati basati su regole.',
    snapshotHis:
      "Retable dispose d'un historique de sauvegarde pour suivre toutes les modifications.",
    chatWithOthers: 'Chatta con gli altri membri del progetto.',
    providesSimplifiedExcel:
      'Fornisce una gestione semplificata di excel / dati / tabelle per coloro che' +
      " non sono esperti nell'uso della tecnologia.",

    incorporateRetable: 'Come posso incorporare Retable nella mia azienda?',
    incorporateDes:
      'Il modo migliore per capire le potenzialità complete di Retable è iniziare a utilizzare la' +
      ' versione gratuita. Una volta che inizi a lavorare con Retable, inizierai a vedere le' +
      ' infinite potenzialità a portata di mano. Senza formazione necessaria e con un processo di' +
      " configurazione semplice, il tuo team può iniziare rapidamente a trarre vantaggio dall'utilizzo" +
      ' di una soluzione software che rivoluzionerà il modo in cui lavori.',
    isFree: 'Retable è gratuito da utilizzare?',
    yesFree:
      "Sì, è gratuito. Ci sono anche livelli aziendali che corrispondono a diversi casi d'uso.",
    whatWorkspace: "Cos'è uno spazio di lavoro?",
    workspaceDes:
      "Uno spazio di lavoro è un'area con progetti correlati. Mentre ogni progetto è focalizzato su un" +
      ' area unica, diversi progetti possono rientrare in categorie operative aziendali simili. Viene' +
      ' utilizzato per classificare e combinare progetti. Puoi pensare a uno spazio di lavoro come a una' +
      ' raccolta di progetti e tabelle condivise tra un gruppo di persone che lavorano insieme.',

    whatProj: "Cos'è un progetto?",
    projDes:
      'I progetti sono simili a un foglio di calcolo e possono contenere un numero di tabelle. Ogni' +
      " progetto dovrebbe essere unico, concentrarsi su un'area chiave e contenere tutte le informazioni" +
      ' che la tua organizzazione ha riguardo a quella chiave area.',
    canCopyPaste: 'Posso copiare e incollare tabelle da diversi spazi di lavoro/progetti?',
    copyPatseDes:
      "Puoi spostare le tue tabelle in un altro progetto all'interno dello stesso spazio di lavoro.",
    canShare:
      'Posso condividere il mio lavoro con i miei colleghi che non hanno un account Retable?',
    shareDes:
      'Sì, puoi condividere il tuo lavoro con i tuoi colleghi tramite e-mail, indipendentemente dal fatto' +
      ' che abbiano o meno un account Retable.',
    shareOptions: 'Quali sono le opzioni di condivisione?',
    shareOptionsare: 'Le opzioni di condivisione sono:',
    shareDes1:
      'Condivisione di spazi di lavoro, progetti o tabelle facendo clic su "Condividi con..." all\'interno del sito web.',
    shareDes2: 'Condivisione dei dati tramite copia/incolla nella posta.',
    handleUsers:
      'Come gestisce Retable più utenti che modificano la stessa tabella/progetto/spazio di lavoro?',
    handleUserstext:
      'La modifica multiutente consente a più utenti di modificare lo stesso spazio di',
    handleUserDes:
      "Mentre più utenti modificano lo stesso componente contemporaneamente, le iniziali degli utenti sono mostrate in alto a destra in entrambe le schermate. Chiunque apra un workspace, progetto o tabella condivisi, tutte le iniziali degli utenti condivisi sono mostrate in alto a destra dello schermo. Quando un utente modifica una cella, altri utenti possono visualizzare tutte le modifiche dopo che l'utente esce dalla cella.",
    whatAttachmetTab: 'Qual è il limite di dimensione del file allegato per ciascuna tabella?',
    attachmetTabDes: 'Il limite di dimensione del file allegato è di 2 GB per cella.',
    rowColLimit: 'Qual è il limite di righe/colonne per ciascuna tabella?',
    limitsDes: 'Il limite di righe per ciascuna tabella è di 2000, e il limite di colonne è di 50.',
    webSupported: 'Quali browser web sono supportati?',
    websDes: 'Google Chrome, Edge, Safari, Brave, Opera e Firefox sono supportati da Retable.',
    canChat: 'Posso chattare con i miei colleghi mentre sono in uno spazio di lavoro o progetto?',
    canChatDes:
      'La funzione di commento/chat Pro è disponibile in ciascun progetto per gli utenti che ne hanno il diritto di condivisione.',
    //landing
    retableDes:
      'Organizza, visualizza, condividi e modifica i dati come nei fogli di calcolo, facilmente...',
    getStartedFree: 'Inizia gratuitamente',
    whatRetable: "Cos'è Retable?",

    retableWork:
      'Retable è un software ibrido online tra un foglio di calcolo e un database che può essere utilizzato come' +
      ' strumento di organizzazione e collaborazione dei dati.',
    retableWork2:
      'È adatto per piccole e grandi imprese, ONG e qualsiasi altra organizzazione che si basi su' +
      ' pratiche di lavoro collaborative.',
    noLimitsData: 'Organizzazione dei dati senza limiti.',
    organizeData: 'Organizza i tuoi dati con {path} e condividili.',
    easyTables:
      'I progetti e le tabelle sono facili da navigare con colori. Niente più cartelle...',
    dataSafe: 'I tuoi dati sono sicuri e al sicuro con un ottimo storico delle modifiche.',
    storedActions:
      'Ogni record è archiviato con il suo storico delle modifiche insieme ai commenti.',
    easyTables: "Creare una tabella è a portata di clic come nell'esempio seguente.",
    sales: 'Vendite',
    salesPipeline: 'Pipeline delle vendite',
    salesAssets: 'Monitoraggio dei beni di vendita',
    businessDevelopment: 'Sviluppo aziendale',
    creativeTeams: 'Team creativi',
    designProjPipeline: 'Pipeline dei progetti di design',
    visualInspirations: 'Ispirazioni visive',
    artGallery: "Gestione galleria d'arte",

    marketing: 'Marketing',
    socialMedia: 'Calendari dei social media',
    contentMarketing: 'Marketing dei contenuti',
    management: 'Gestione',
    emailMarketing: 'Marketing via email',

    humanResources: 'Risorse umane',
    recruitmentTracking: 'Monitoraggio delle assunzioni',
    employeeSurveys: 'Sondaggi di coinvolgimento dei dipendenti',
    interviewQuestions: 'Domande per i colloqui',

    projectManagement: 'Gestione dei progetti',
    projectTracker: 'Monitoraggio dei progetti',
    contractorTime: 'Monitoraggio del tempo dei collaboratori',
    projectPipeline: 'Pipeline dei progetti',

    retableforSpin: 'Prova Retable',
    freeRetable: 'Retable è gratuito da utilizzare per team di qualsiasi dimensione.',

    product: 'Prodotto',
    termsService: 'Termini di servizio',
    privacyPolicy: 'Informativa sulla privacy',
    airtableAlternative: 'Alternativa ad Airtable',
    googleSheetsAlternative: 'Alternativa a Google Sheets',

    company: 'Azienda',
    blog: 'Blog',
    reachUs: 'Contattaci',

    //Pricing.js
    plansPricing: 'Piani e prezzi',
    retableFreeuse: 'Retable è gratuito da utilizzare.',
    contributePurchases:
      "Contribuiamo con l'1% degli acquisti per finanziare la rimozione del carbonio di prossima generazione",
    twoMonths: '2 Mesi',
    oneYear: '1 Anno',

    //login
    login: 'Accedi',
    signinGoogle: 'Accedi con Google',
    signInLinkedIn: 'Accedi con LinkedIn',
    forgotPassword: 'Password dimenticata',
    dontHaveAccount: 'Non hai un account?',
    emailCanotEmpty: "L'email non può essere vuota.",
    passwordCanotEmpty: 'La password non può essere vuota.',
    invalidPassword: 'Password non valida',

    passwordValid: 'La tua password deve includere almeno 8 caratteri.',
    enterPassword: 'Inserisci la tua password',
    enterYourEmail: 'Inserisci la tua email',
    start: 'Inizia',
    sign: 'Accedi',
    in: 'in',
    forgotPass1: 'Hai dimenticato la',
    forgotPass2: 'password',
    rememberMe: 'Ricordami per 30 giorni',

    notAMember: 'Non un membro?',
    authBackgroundHeader1: 'Organizza tutti i tuoi fogli di calcolo.',
    authBackgroundHeader2: 'Lavora in sicurezza e condividi in modo collaborativo.',
    authBackgroundText1:
      'Retable unisce la semplicità dei fogli di calcolo e la potenza dei database.',
    authBackgroundText2:
      "Retable semplifica la creazione dell'elenco clienti, la creazione di moduli, la connessione di dati esterni e la visualizzazione delle informazioni.",
    authBackgroundText3UsedBy: 'Usato da',
    authBackgroundText3Customers: 'più di 2400 clienti',
    authBackgroundText3World: 'Intorno al mondo.',
    authBackgroundText4: 'È facile e potente!',

    // forgetpasswor
    resetPass:
      'Inserisci il tuo indirizzo email e ti invieremo un link per reimpostare la tua password.',
    back: 'Indietro',

    // signup
    nameContempty: 'Il nome non può essere vuoto',
    lastnameContEmpty: 'Il cognome non può essere vuoto',
    passVal: 'La tua password deve contenere almeno 8 caratteri',
    firstName: 'Nome',
    lastName: 'Cognome',
    createPassword: 'Crea una password',
    signupGoogle: 'Registrati con Google',
    signUpLinkedIn: 'Registrati con LinkedIn',
    alreadyhaveAccount: 'Hai già un account?',
    signUpFree1: 'Registrati',
    signUpFree2: 'gratis',
    unregisteredUser: "L'email non è registrata.",
    worngLoginPass: 'Password errata',
    goRegister: 'Vai alla registrazione',
    errorEmailContainsRetable:
      'Il dominio Retable non può essere utilizzato, puoi utilizzare un dominio diverso.',

    //Appsumo Signup
    activeYourAccount1: 'Attiva',
    activeYourAccount2: 'il tuo account',

    //thankyou
    thankYou: ' Grazie per esserti registrato su Retable. 🎉',
    canSignin: 'Ora puoi {path}.',
    signIn3: 'accedere',
    alsoVerify: 'Verifica la tua email per utilizzare tutte le funzionalità.',
    dontForget: '(Non dimenticare di controllare la cartella spam/junk)',
    confirmationSent: 'Una email di conferma è stata inviata a',

    // retableWorkspacebody
    noProjectAtAll:
      'Non ci sono progetti in questo spazio di lavoro. Usa il pulsante "Aggiungi nuovo progetto" per aggiungerne uno.',

    // jexcel
    minimumkarakter: 'Caratteri minimi:',
    maksimumkarakter: 'Caratteri massimi:',
    customizeColumn: 'Personalizza colonna',
    splitColumnData: 'Dividi dati della colonna',
    insertColumnBef: 'Inserisci a sinistra',
    insertColumnAft: 'Inserisci a destra',
    duplicatCell: 'Duplica cella',
    duplicateColumn: 'Duplica colonna',
    deleteColumn: 'Elimina colonna',
    deleteSelected: 'Elimina colonna(e) selezionata(e)',
    askToUpdate: 'Chiedi di aggiornare',
    copy2: 'Copia',
    cut: 'Taglia',
    paste: 'Incolla',
    hideColumn: 'Nascondi colonna',
    sendAsEmail: 'Invia come email',
    saveAs: 'Salva come csv',
    validationError: 'Errore di validazione',
    checkType:
      'Per favore controlla le notifiche di errore nelle celle per i dettagli o personalizza le proprietà' +
      ' della colonna per corrispondere ai criteri di validazione',
    requiredField: 'Campo obbligatorio',
    fillCell: 'Per favore riempire la cella.',
    fillField: 'Per favore compilare questo campo',
    uniqueColumn: 'Colonna unica',
    valuesUniq: 'Ogni valore in questa colonna deve essere unico. ',
    valuesUniqDes: ' altra(e) cella(e) con lo stesso valore.',
    typeError: 'Errore di tipo',
    contentWrong: 'Il contenuto o il valore non corrisponde al tipo di colonna di questa cella.',
    followRules: 'Il valore deve seguire queste regole:',

    noRecords: 'Nessun record trovato',
    show: 'Mostra ',
    entries: ' voci',
    columnName: 'Nome colonna',
    renameColumn: 'Rinomina questa colonna',
    rowBefore: 'Inserisci la riga sopra',
    rowAfter: 'Inserisci la riga qui sotto',
    duplicateRow: 'Duplica riga',
    deleteSelRows: 'Elimina riga(e) selezionata(e)',
    clearSelCells: 'Cancella cella(e) selezionata(e)',
    editComments: 'Modifica commenti',
    addComments: 'Aggiungi commenti',
    clearComments: 'Cancella commenti',
    sureDelRow: 'Sei sicuro di voler eliminare le righe selezionate?',
    sureDelCol: 'Sei sicuro di voler eliminare le colonne selezionate?',
    destroyCell: 'Questa azione distruggerà qualsiasi cella unita esistente. Sei sicuro?',
    clearSearch: 'Questa azione cancellerà i risultati della ricerca. Sei sicuro?',
    confCell: "C'è un conflitto con un'altra cella unita",
    invalidMerge: 'Proprietà unite non valide',
    cellMerged: 'Cella già unita',
    noSelected: 'Nessuna cella selezionata',
    valueInvalid: 'Il valore della cella non è valido secondo le regole specificate.',
    searchSmall: 'ricerca',
    dragDes: 'Trascina per regolare il numero di colonne bloccate',
    emptyRow: 'Riga vuota',
    noDeleteLastCol: "Non è possibile eliminare l'ultima colonna.",
    leastRow: 'La tabella dovrebbe avere almeno una riga.',
    leastCol: 'La tabella dovrebbe avere almeno una colonna.',
    setAsHeader: 'Imposta come intestazione',

    //Retable Create Project Modal
    getUpAndRunningFast: 'Inizia velocemente!',
    startScratchDescription:
      'Crea un nuovo progetto vuoto con tabelle e visualizzazioni personalizzate.',
    importProjectDescription:
      'Importa un file CSV, XLS o Retable per creare il tuo progetto Retable.',
    startTemplateDescription: 'Seleziona un modello per iniziare e personalizza mano a mano.',
    backToTheRetable: 'Torna a Retable',

    // projects
    shareMe: 'Progetti condivisi con me',
    externallySavedProjects: 'Progetti salvati esternamente',

    //Retable Chart View
    line: 'Linea',
    bar: 'Barre',
    pie: 'Torta',
    area: 'Area',
    'x-axis': 'Asse X',
    'y-axis': 'Asse Y',
    categoriesField: 'Campo delle categorie',
    values: 'Valori',
    retableView: 'Visualizzazione Retable',
    chartView: 'Visualizzazione grafico',

    //Retable X Axis Menu
    pickColumn: 'Seleziona una colonna',

    //Retable Y Axis Menu
    count2: 'Conteggio',
    field: 'Campo',
    sum2: 'Somma',
    min2: 'Minimo',
    max3: 'Massimo',
    avg2: 'Media',
    addValue: 'Aggiungi valore',
    changeColor: 'Cambia colore',
    // datavalidation
    minCha: 'Minimo caratteri:',
    maxCha: 'Massimo caratteri:',
    regexx: 'Espressione regolare:',
    minVal: 'Valore minimo:',
    maxVal: 'Valore massimo:',

    // retableAutomationFindValue
    operator2: 'Operatore:',
    noCond: 'Nessuna condizione trovata.',
    addCon: 'Aggiungi condizione',
    addAnoCon: "Aggiungi un'altra condizione",

    // password
    passReq: 'La password non soddisfa i requisiti.',
    typePas: 'Devi digitare la tua password attuale.',
    typeNewPas: 'Nuova password',
    typeNewPascheck: 'Devi digitare la nuova password.',
    typeNewPasAgain: 'Devi digitare nuovamente la nuova password.',
    passNoMatch: 'Le nuove password non corrispondono.',
    passDif: 'La nuova password deve essere diversa.',
    passDes:
      'La password deve essere lunga almeno 8 caratteri e contenere almeno 1 numero, 1 carattere maiuscolo e 1 carattere minuscolo.',

    //Whats New
    whatsNew: 'Novità',
    newsNotFound: 'Novità non trovate.',
    searchInNews: 'Cerca nelle novità',
    learnMore: 'Scopri di più',
    howToUse: 'Come utilizzare?',
    backList: 'Torna alla Lista',

    // payment
    paymentProblem: '🧐 Sembra ci sia un problema con il tuo pagamento.',
    goToPayment: 'Vai a Abbonamenti e Pagamenti',
    checking: 'Controllo in corso...',
    upgradeForFreeTitle: 'Aggiorna ora il tuo account gratuitamente!',
    tryChoosenPlan: 'Vuoi continuare gratuitamente con il piano scelto?',
    nowYourPlanIsPro: 'Ora puoi usufruire gratuitamente del piano Retable PRO per 7 giorni!',

    // retableinviteEarnAlert
    zerocred: 'Hai $0 di credito.',
    ifInvite: 'se inviti {path} ora,',
    inviteFf: 'Invita amici',
    andEarn: 'e guadagna $3 di credito!',
    earn5: 'puoi guadagnare $3!',
    freinds: 'invita amici e colleghi',

    // Retableexporttablemodal
    exportas: 'Esporta come',
    exportFormat: 'Formato di esportazione',

    // RetableChart
    xAxix: "Seleziona una colonna dall'asse X.",
    changeAxix:
      "Cambia i valori sull'asse Y o cambia il tipo di grafico se vuoi personalizzare il tuo" +
      ' grafico.',
    selectCate: 'Seleziona una colonna dal campo delle categorie.',
    custChart: 'Cambia i valori o il tipo di grafico se vuoi personalizzare il tuo grafico.',
    exCharts: 'Puoi vedere esempi di grafici qui sotto.',

    // Retable List View
    warningDeleteLastRow: "Non è possibile eliminare l'ultima riga.",
    warningDeleteLastColumn: 'La tabella dovrebbe avere almeno una colonna.',

    //Retable List View Toolbar
    customizeList: 'Personalizza lista',
    customize: 'Personalizza',
    changeViewType: 'Cambia tipo di vista',

    //Retable Loading
    loading: 'Caricamento in corso...',
    pleaseWait: 'Attendere...',

    //Verify
    go: 'Vai',
    verifying: 'Verifica in corso',
    successVerify: 'Verifica effettuata con successo.',
    failureVerify:
      'Token non verificato o già verificato. Si prega di tornare alla pagina iniziale.',
    notVerify:
      'Spiacenti, è necessario verificare il tuo indirizzo email (ti preghiamo di controllare anche la cartella spam o posta indesiderata 👍)',

    //RetableCreateNew
    newWorkspace: 'Nuovo spazio di lavoro',
    getUp: 'Inizia subito!',
    buildNow: 'Crea Ora',
    building: 'Creazione in corso',
    importDocument: 'Importa documento',
    slct: 'Seleziona',
    selected: 'Selezionato',
    workspaceNameTitle: 'Nome spazio di lavoro',
    workspaceDescTitle: 'Descrizione spazio di lavoro',
    wsNameCantEmpty: 'Il nome dello spazio di lavoro non può essere vuoto.',
    pjOptionCantEmpty: 'Devi selezionare uno dei tipi di creazione progetto sopra indicati.',
    letsFindFile: '<p1>Troviamo </p1><p2>questo file</p2>',
    justImport: 'Puoi importare solo file ".csv", ".xls(x)" o ".retable".',
    dragHere: 'Trascina qui o seleziona un file',
    change: 'Cambia',
    importedFile: 'File importato.',
    neWProject: 'Nuovo progetto',
    newWorkspaceDesc:
      'Lo Spazio di Lavoro è utilizzato per classificare e combinare progetti. Immagina uno Spazio di Lavoro come una raccolta di progetti e tabelle condivise tra un gruppo di persone che lavorano insieme.',
    newProjectDesc:
      "Ogni Progetto dovrebbe essere unico, focalizzarsi su un'area chiave e contenere tutte le informazioni che la tua organizzazione possiede riguardo a quell'area.",
    forUseInOrganization: "Per l'uso nell'organizzazione",
    forPersonalUse: "Per l'uso personale",
    createOrgWSDesc1:
      "Puoi applicare il marchio aziendale ai progetti che crei nell'organizzazione.",
    createPersonalWSDesc1:
      'Non puoi applicare il marchio aziendale ai progetti che crei nel tuo spazio di lavoro personale',
    createOrgWSDesc2:
      "Per creare lo spazio di lavoro dell'organizzazione, devi prima creare un'organizzazione.",
    createOrgWSDesc3: 'Disponibile solo con il piano Business.',
    createOrgWSDesc4:
      "Lo spazio di lavoro dell'organizzazione non può essere creato. Il marchio aziendale può essere applicato nel piano Team.",
    firstlyYouMustCreateAnOrganization: "Prima crea un'organizzazione.",
    typeProjectName: 'Digita il nome del progetto',
    typeProjectDescription: 'Digita la descrizione del progetto',

    projectNameTitle: 'Nome progetto',
    projectDescTitle: 'Descrizione progetto',
    pjNameCantEmpty: 'Il nome del progetto non può essere vuoto.',
    projectImportFileTypes: 'CSV, Excel o file Retable',
    projectDetails: 'Dettagli del progetto',
    addNewWorkspace: 'Aggiungi spazio di lavoro',
    clickUpload: 'Fare clic per caricare',
    orDrag: ' oppure trascina e rilascia',

    chooseAColor: 'Scegli un colore',
    chooseAnIcon: "Scegli un'icona",
    nameReqiured: 'Nome (obbligatorio)',
    create: 'Creare',

    //Team
    createTeam: 'Aggiungi squadra',
    addTeam: 'Aggiungi squadra',
    createOrganization: 'Aggiungi organizzazione',
    addOrganization: 'Aggiungi organizzazione',
    pressCreateTeam: 'Puoi creare una squadra cliccando sul pulsante "Aggiungi squadra".',
    teamName: 'Nome squadra',
    organizationName: 'Nome organizzazione',
    add: 'Aggiungi',
    teamNameMustMin3Char: 'Il nome della squadra deve essere lungo almeno 3 caratteri.',
    organizationNameMustMin3Char:
      "Il nome dell'organizzazione deve essere lungo almeno 3 caratteri.",
    teamNameCanNotBeEmpty: 'Il nome della squadra non può essere vuoto.',
    organizationNameCanNotBeEmpty: "Il nome dell'organizzazione non può essere vuoto.",
    errorOrganizationNameContainRetable:
      'Il nome dell\'organizzazione non può contenere "Retable", puoi utilizzare un nome diverso per l\'organizzazione.',
    addMember: 'Aggiungi membro',
    inviteUser: 'Invita utente',
    detail: 'Dettagli',
    renameTeam: 'Rinomina squadra',

    deleteTeamTitle: 'Sei sicuro?',
    deleteTeamText: 'Una volta eliminata, non potrai recuperare questa squadra!',
    creator: 'Creatore',
    admin: 'Amministratore',
    member: 'Membro',
    adminSmall: 'amministratore',
    memberSmall: 'membro',
    leadSmall: 'capo',
    invited: 'Invitato',
    lead: 'Capo',
    deleteTeamMemberTitle: 'Sei sicuro?',
    deleteTeamMemberText: 'Stai per rimuovere questo membro dalla squadra.',
    youCantRemoveMembers: 'Non puoi rimuovere i membri della squadra.',
    memberNotFound: 'Membro non trovato!',
    memberNotFoundWarning: 'Nessun membro trovato da aggiungere a questa squadra',
    //RetableOrganizationSettings
    organizationDescription: "Descrizione dell'organizzazione",
    //RetableOrganizationMembers
    noInvitedMembersFound: 'Nessun membro invitato trovato.',
    hideOrgForMembers: "Nascondi le informazioni sull'organizzazione per i membri",
    //RetableOrganizationDetail
    brand: 'Marchio',

    //RetableOrganizationBrand
    primaryColor: 'Colore primario',
    secondaryColor: 'Colore secondario',
    chooseAnImage: "Scegli un'immagine",
    setDefault: 'Imposta come predefinito',
    exampleText: 'Testo di esempio',
    brandIconValidation1: 'Tipo di file PNG o JPEG.',
    brandIconValidation2: 'Dimensione del file inferiore a 1 MB.',
    brandIconValidation3: 'Risoluzione quadrata (ad esempio, 40x40, 100x100).',
    brandIconValidation4: 'Rapporto di aspetto 16:3 per una migliore qualità.',
    exampleButton: 'Pulsante di esempio',

    // Brand
    brandTitle: 'Titolo del marchio',
    brandLogo: 'Logo del marchio',
    brandIcon: 'Icona del marchio',
    brandTitleMustMin3Char: 'Il titolo del marchio deve essere lungo almeno 3 caratteri.',
    brandTitleCanNotBeEmpty: 'Il titolo del marchio non può essere vuoto.',
    brandIconSizeError: "La dimensione dell'icona del marchio deve essere inferiore a 1MB.",
    brandIconMustBeSquare: "L'icona del marchio deve essere quadrata.",
    brandLogoSizeError: 'La dimensione del logo del marchio deve essere inferiore a 1MB.',
    brandWrongType: 'Tipo di file errato.',
    brandReset: 'Ripristina',
    brandResetWarning: 'Stai per ripristinare le impostazioni del tuo marchio.',
    branding: 'Branding',
    presentYourBrand:
      'Il branding dell\'organizzazione può essere applicato solo ai progetti creati nello spazio di lavoro dell\'organizzazione. Personalizza le impostazioni del tuo marchio dalla scheda "Organizzazione" nella pagina "Panoramica dell\'account".',
    presentYourBrand2:
      'Disponibile solo per il Team. Personalizza le impostazioni del tuo marchio dalla scheda "Organizzazione" nella pagina "Panoramica dell\'account".',
    presentYourBrand3:
      "L'utente deve avere autorizzazione da Proprietario o Editor per utilizzare il pulsante di Branding.",
    presentYoutBrand4:
      'Disponibile solo per l\'organizzazione di cui sei membro. Personalizza le impostazioni del tuo marchio dalla scheda "Organizzazione" nella pagina "Panoramica dell\'account".',

    // RetableTeamMemberRole
    inactive: 'Inattivo',
    inactiveDesc: "L'utente ha autorizzazioni attive in un'altra squadra condivisa.",
    brandTabDesc:
      "Puoi personalizzare Retable con i tuoi colori, loghi e icone. Quando apporti una modifica in questa sezione, le viste pubbliche, le viste dei moduli, le viste dei progetti pubblici e l'intestazione di Retable vengono influenzate.",

    //Organization
    removeMember: 'Rimuovi membro',
    removeInvited: 'Rimuovi membro invitato',
    removeMemberOrganization:
      'Questa operazione rimuoverà il membro da questa organizzazione.' +
      ' Sei sicuro di voler eseguire questa operazione?',
    removeInvitedOrganization:
      'Questa operazione rimuoverà il membro invitato da questa organizzazione.' +
      ' Sei sicuro di voler eseguire questa operazione?',
    members: 'Membri',
    inviteds: 'Membro(i) invitato(i)',
    accept: 'Accetta',
    reject: 'Rifiuta',
    invitationPlanCancellationMessage:
      "Il tuo account ha già un piano di pagamento. Se accetti l'invito, il piano di pagamento del tuo account verrà annullato e passerà a un piano di organizzazione. Questi cambiamenti possono influire sull'uso dello spazio di lavoro/progetto/tabella. Vuoi ancora accettare l'invito?",
    needBussinessPlanUpgrade:
      'È necessario un aggiornamento del piano Business per eseguire questa operazione.',
    deleteOrganizationMessage: 'Una volta eliminata, non potrai recuperare questa organizzazione!',
    orgQuantityError:
      'Non ci sono abbastanza posti disponibili. Devi acquistare più posti per invitare nuovi utenti.',
    notEnoughSeatFreeUser:
      "Sei stato declassato al piano gratuito perché non sono stati acquistati abbastanza posti. Ti preghiamo di contattare l'amministratore dell'organizzazione.",

    notEnoughSeatAdmin:
      'Questo utente è stato declassato al piano gratuito perché non sono stati acquistati abbastanza posti.',
    noInvitedMembers: 'Nessun membro invitato',
    trialPlanFeatureMessage:
      'Poiché hai un piano di prova, non puoi utilizzare questa funzionalità.',
    freeTrialAdminInviteMessage:
      "Hai un'organizzazione, se accetti questo invito e ti unisci all'organizzazione {orgName}, la tua organizzazione verrà eliminata. Confermi?",
    freeTrialmemberInviteMessage:
      "Fai già parte dell'organizzazione {orgName1}, se passi all'organizzazione {orgName2}, lascerai l'organizzazione {orgName1}. Confermi?",

    // RetableFormTableLockMessage
    goToDashboard: 'Vai alla dashboard',
    goToRetable: 'Vai a Retable',
    formLockedMsg: 'Questo modulo è bloccato. Non puoi modificarlo.',
    formTableLockMsg: 'Ciao 👋. Questo modulo è bloccato.',

    //RetableFormViewEdit
    formSettings: 'Impostazioni modulo',
    extendedCoverImg: 'Estesa copertina',
    sendResponse: 'Invia risposta',
    sendResponseDescription:
      'Le persone che accedono e compilano il modulo possono ricevere una copia della loro risposta via email.',

    //RetablePlanCard
    collaboratorPerWorkspace: 'Fino a <p1></p1> collaboratori per spazio di lavoro',
    collaboratorPerWorkspacePro: '<p1></p1> collaboratori per spazio di lavoro',
    workspaceLimit: '<p1></p1> spazio di lavoro',
    projectLimit: 'Fino a <p1></p1> progetti per spazio di lavoro',
    projectLimitPro: '<p1></p1> progetti per spazio di lavoro',
    tableLimit: '<p1></p1> tabelle per progetto',
    recordsProject: '<p1></p1> record per progetto',
    fileAttachmentProject: 'Spazio allegati fino a <p1></p1> per progetto',
    changeHistoryFree: 'Cronologia modifiche',
    changeHistory: 'Cronologia modifiche <p1></p1>',
    last10: 'Ultimi 10',
    last100: 'Ultimi 100',
    uptimeSLA: 'SLA di uptime: <p1></p1>',
    annually: 'Annualmente',
    monthly: 'Mensilmente',
    yearly: 'Annuale',
    planFreeDesc: 'provalo prima di avere bisogno di più',
    planBasicDesc: 'ottimo per piccoli team',
    billedMonthly: 'fatturato mensilmente',
    billedAnnually: 'fatturato annualmente',
    numberOfSeats: '<p1></p1> numero di posti',

    // RETABLE SHARE MODAL
    invNewCol: 'Invita nuovi collaboratori',
    invAs: 'Invita come',
    projLevCol: 'Collaboratore a livello di progetto',
    AllowOnProj: "Consenti l'accesso solo al progetto.",
    workspLevColl: 'Collaboratore a livello di spazio di lavoro',
    AllowAccPrWor: "Consenti l'accesso a tutti i progetti dello spazio di lavoro.",
    shareRecc: 'Condividi e aggiungi il(i) record',
    inviteMorCol: 'Invita altri collaboratori tramite email',

    //RetableSpreadsheetHeader
    saveRetable: 'Salva Retable',
    needRegister: 'Puoi salvare questo foglio di calcolo registrandoti - è gratuito!',
    startNow: 'Inizia ora',
    needRegisterForShare: 'Puoi condividere questo foglio di calcolo registrandoti - è gratuito!',

    // Calendar View
    chooseACalendarField: 'Scegli una colonna data e ora',
    yourRowsPlacedByThisField: 'Le tue righe saranno posizionate in base a questa colonna.',
    yourRowsPlacedByThisRange: 'Le tue righe saranno posizionate in base a questi campi.',
    createACalendarColumn:
      'Aggiungi una colonna data e ora per posizionare le righe nel calendario.',
    createNewCalendarColumn: 'Aggiungi una nuova colonna data e ora',
    usingCalendarColumn: 'Usando la colonna data e ora',
    usingDateRange: "Usando l'intervallo di date",
    addACalendarColumn: 'I tuoi record appariranno in questa colonna nel calendario.',

    //RetableMApModal.js
    locationCell: 'Cella di posizione',
    setEndDate: 'Imposta un campo di data di fine',

    // Map View
    chooseALocationField: 'Scegli una colonna di posizione',
    yourRowsPlacedByThisFieldMap:
      'I tuoi record verranno visualizzati in base alla colonna della posizione scelta.',
    createALocationColumn:
      'Aggiungi una colonna di posizione per posizionare le righe sulla mappa.',
    createNewLocationColumn: 'Aggiungi una nuova colonna di posizione',
    usingLocationColumn: 'Usando la colonna di posizione',
    backToLocation: 'Torna alla posizione',
    draggableNow: 'Ora è trascinabile.',
    newMarker: 'Nuovo marcatore',
    relocate: 'Rilocare',
    searchACity: 'Cerca una città',
    gettingLocationAddress: "Ottengo l'indirizzo della posizione",
    deleteLocation: 'Elimina la posizione',
    latitude: 'Latitudine',
    longitude: 'Longitudine',

    month: 'Mese',
    week: 'Settimana',
    day: 'Giorno',
    today: 'Oggi',
    //AddViewMenu.js
    kanbanView: 'Vista kanban',
    calenderView: 'Vista calendario',
    mapView: 'Vista mappa',
    cardView: 'Vista carta',
    addAview: 'Aggiungi una vista',

    gridViewDesc:
      'Visualizza facilmente i tuoi record come righe e i campi come colonne, un modo versatile per mostrare i dati.',
    listViewDesc:
      'Mostra tutti i tuoi dati in una visualizzazione elenco, senza distrazioni e informazioni aggiuntive.',
    kanbanViewDesc:
      "Un ottimo modo per visualizzare tutti i tuoi record come schede, su un'intuitiva bacheca kanban.",
    calenderViewDesc:
      'Mostra tutti i tuoi record in un calendario, utilizzando le opzioni giorno, settimana e mese.',
    mapViewDesc:
      'Mostra tutte le tue geolocalizzazioni e appunta tutte le tue risorse su una mappa del mondo facile da usare.',
    cardViewDesc:
      'Visualizza i tuoi dati utilizzando una vista a schede in cui ciascuna scheda rappresenta un record.',
    formViewDesc: 'Crea e pubblica i tuoi moduli. Ottieni risposte e salvale nei tuoi fogli.',
    chartViewDesc:
      'Riepiloga una tabella di record e la trasforma in un grafico interattivo a barre, a linee, a torta o ad area.',

    //locationColumnInput
    address: 'Indirizzo',

    //KanbanStackHeader.js
    uncategorized: 'Non categorizzato',
    record: 'record',
    recordSingle: 'record',

    //AddNewStack.js
    addNewStack: 'Aggiungi nuova pila',

    //RetableKanbanViewToolbar.js
    stackedBy: 'Impilato da',

    // Kanban View
    deleteStack: 'Elimina stack',
    renameStack: 'Rinomina stack',
    chooseAKanbanColumn: 'Scegli una colonna di selezione o collaboratore',
    chooseAField: 'Scegli un campo',
    createNewSingleSelect: 'Aggiungi una nuova colonna di selezione singola',
    createNewCollaborator: 'Aggiungi una nuova colonna di collaboratore',
    usingSelectOrCollaboratorColumn: 'Usa la colonna di selezione singola o collaboratore',
    createAKanbanColumn: 'Aggiungi una colonna di selezione singola o collaboratore',
    selectAFieldKanban: 'Campo Kanban',
    yourRowsStackedBased: 'Le tue voci saranno impilate in base a questo campo.',
    duplicateItem: 'Duplica elemento',
    itemBefore: 'Inserisci un nuovo elemento prima',
    itemAfter: 'Inserisci un nuovo elemento dopo',
    itemDetail: 'Dettaglio elemento',
    addNewItem: 'Aggiungi nuovo elemento',
    addAKanbanColumn: 'I tuoi record verranno impilati in base a questo campo.',

    // Formulation
    formula: 'Formula',
    formulaDesc: 'Calcola un valore in ogni riga.',
    formulaError: "C'è un errore nella formulazione. Controlla la formula.",
    formulaCycleError: 'Rilevato un riferimento circolare.',
    formulaColumnConfigured:
      'Le colonne delle formule devono essere configurate nella colonna personalizzata.',
    formulaListLink: 'Per vedere un elenco di tutte le formule, ',
    clickHere: 'clicca qui',
    theme: 'Tema',
    dark: 'Scuro',
    light: 'Chiaro',

    // Desktop
    openWithRetable: 'Apri con Retable',
    openAsNewProject: 'Apri come nuovo progetto',
    existingVersionWillOpen: '*La versione esistente verrà aperta.',
    versionYouWantToOpenWillOpen: '*La versione che desideri aprire verrà aperta.',
    noWorkspaceWarning:
      'Non hai uno spazio di lavoro in cui puoi aprire questa versione. Aggiungi uno spazio di lavoro.',
    currentVersionTitle: 'Apri su un progetto esistente',
    currentVersionDescription: "Apre l'ultima versione del progetto.",
    existVersionTitle: 'Aggiungi un nuovo progetto',
    existVersionDescription: 'Scegli uno spazio di lavoro e crea un nuovo progetto Retable.',
    projectPermissionWarning:
      'Non hai il permesso di accedere a questo progetto. Il progetto potrebbe essere stato eliminato o potresti essere stato rimosso dal     progetto. Puoi provare ad aggiungere un nuovo progetto.',
    open: 'Apri',

    // Switch View
    youCanNotSwitchToKanban:
      'Non puoi passare alla vista Kanban per le tabelle senza una colonna Select o Collaborator',
    youCanNotSwitchToCalendar:
      'Non puoi passare alla vista Calendario per le tabelle senza una colonna Calendario.',
    youCanNotSwitchToMap:
      'Non puoi passare alla vista Mappa per le tabelle senza una colonna Geolocalizzazione.',
    youCanNotSwitchToForm: 'Non puoi passare alla vista Modulo.',
    youCanNotSwitchFromForm: 'Non puoi passare dalla vista Modulo ad altre viste.',

    //Trial Expired
    trialExpired: 'La tua prova di Retable è scaduta 😥',
    testrialExpiredDesc:
      'Iscriviti a Retable e unisciti alle migliaia di clienti che hanno scelto Retable come piattaforma preferita per gestire le proprie informazioni. Saremmo entusiasti di avere anche te.',
    easyToConnect: '(ma è facile riconnettersi)',
    trialArticle1: 'Collabora nei tuoi spazi di lavoro',
    trialArticle2: 'Spazi di lavoro e progetti illimitati',
    trialArticle3: 'Visualizzazioni, moduli e progettazione di moduli personalizzati',
    trialArticle4: 'Più di 150 modelli',
    trialArticle5: 'Integrazioni con strumenti di terze parti',
    trialArticle6: 'Automazioni e webhook',
    trialArticle7: 'Tavoli illimitati',
    trialArticle8: 'Tipi di colonne avanzati',
    trialSendEmail: 'Verifica il tuo indirizzo email e continua con il tuo glorioso lavoro!',
    trialUpgradePlan:
      'Passa a un piano a pagamento per continuare con il tuo meraviglioso lavoro 🌟',
    trialUseCoupon:
      "Non dimenticare di utilizzare il codice sconto del 50% 'NEWYEAR50' valido su tutti i piani al momento del pagamento 🚀",
    trialRememberCoupon: 'Ricorda, il coupon è valido fino al 28 febbraio! 🎁',

    // RetableColumnsMenu
    changesNotSavedAlert: 'Sei sicuro? Le tue modifiche non sono state salvate.',
    hideAllColumnNames: 'Nascondi tutti i nomi delle colonne',

    // Form View
    dragImage: "Trascina o seleziona un'immagine qui",

    // RetableApp
    appNameTitle: "Nome dell'App",
    typeAppName: "Inserisci il Nome dell'App",
    saveAsPDF: 'Salva come PDF',

    // Card View
    customizeCards: 'Personalizza le carte',
    imageColumn: 'Colonna immagine',
    selectAnImageColumn: 'Seleziona una colonna immagine',
    selectAnCardColumn: 'Seleziona una colonna immagine, QR o colore',
    usingCardColumn: 'Utilizzando colonna immagine, QR o colore',
    selectCardColumnDesc:
      "Puoi visualizzare il valore della cella selezionata nell'intestazione della carta.",
    chooseAColumn: 'Scegli una colonna',
    chooseColumns: 'Scegli colonna immagine, qr o colonna colore',
    addCardColumn: 'Aggiungi una colonna immagine, qr o colore',
    createNewCardColumn: 'Aggiungi nuova colonna {columnType}',
    deleteItem: 'Elimina elemento',

    // Elements Left Content
    elements: 'Elementi',

    // General Toast
    tableCopied: 'Tabella copiata.',
    tableMoved: 'Tabella spostata.',
    orgUpdated: 'La tua organizzazione è stata aggiornata con successo.',
    orgDeleted: 'La tua organizzazione è stata eliminata con successo.',
    passwordChanged: 'La tua password è stata cambiata con successo.',
    sent: 'Inviato.',

    // RetableRowDetailRightPanel
    noSelection: 'Nessuna riga selezionata da visualizzare',

    // Welcome
    letsStart: 'Cominciamo!',
    welcomeRetable: 'Benvenuto in Retable!🚀',
    welcomeDescription:
      "Sappiamo che provare qualcosa di nuovo può essere una sfida, ma vogliamo assicurarti che non c'è bisogno di preoccuparsi.🚀{break}" +
      'Siamo qui per rendere la transizione il più semplice possibile.{break}' +
      'Per aiutarti a metterti al passo, abbiamo preparato un breve video per te.👇🏻',
    onboarding_Q1: 'Per cosa utilizzerai Retable?',
    onboarding_Q1_description: 'Lo useremo in seguito per suggerirti modelli appositamente per te.',
    onboarding_Q2: 'Informazioni sulla tua organizzazione',
    onboarding_Q2_description: 'Qual è il nome della tua organizzazione?',
    onboarding_Q3: 'Seleziona il numero di dipendenti',
    onboarding_Q3_description: 'Quante persone lavorano nella tua organizzazione?',
    onboarding_Q4: 'Qual è il tuo ruolo principale?',
    onboarding_Q4_description: 'Ti aiuteremo a iniziare in base alla tua risposta.',
    onboarding_Q5: 'Quali app hai usato in precedenza?',
    startup: 'Startup',
    small_business: 'Piccola impresa',
    large_company: 'Azienda grande',
    personal_freelancer: 'Personale / freelance',
    educational: 'Educativo',
    nonprofit: 'Organizzazione non profit / ente di beneficenza',
    less5: 'Meno di 5',
    more500: 'Più di 500',
    // accountant: 'Contabile',
    // analyst: 'Analista',
    // attorney: 'Avvocato',
    // developer: 'Sviluppatore',
    // educator: 'Educatore',
    // teacher: 'Insegnante',
    manager: 'Responsabile',
    accountant: 'Contabile',
    administration: 'Amministrazione',
    analyst: 'Analista',
    architect: 'Architetto',
    attorney: 'Avvocato',
    banker: 'Banchiere',
    businessOwner: "Proprietario di un'impresa",
    consultant: 'Consulente',
    customerServiceRepresentative: 'Rappresentante del servizio clienti',
    developer: 'Sviluppatore',
    educator: 'Educatore',
    engineer: 'Ingegnere',
    executive: 'Esecutivo',
    financialAnalyst: 'Analista finanziario',
    graphicDesigner: 'Graphic designer',
    humanResourcesSpecialist: 'Specialista delle risorse umane',
    itSpecialist: 'Specialista IT',
    marketingManager: 'Responsabile marketing',
    nurse: 'Infermiere',
    operationsManager: 'Responsabile delle operazioni',
    paralegal: 'Paralegale',
    physician: 'Medico',
    realEstateAgent: 'Agente immobiliare',
    salesRepresentative: 'Rappresentante di vendita',
    scientist: 'Scienziato',
    softwareEngineer: 'Ingegnere del software',
    teacher: 'Insegnante',
    therapist: 'Terapista',
    writer: 'Scrittore',
    others: 'Altro',

    //FormulaPopover.js
    examples: 'Esempi',

    // Congrats.js
    congratulations: 'Congratulazioni',
    congratsDescription:
      'Hai configurato con successo il tuo account.{break}' +
      'Qual è il prossimo passo? Inizia aggiungendo il tuo progetto nello spazio di lavoro e crea la tua prima app!',
    g2Checkbox:
      'Autorizzo Retable a connettermi per lasciare una recensione su Capterra o G2 in modo da poter ricevere una carta regalo da $20.',
    congratsDiscord: 'Hai domande? Unisciti al nostro server Discord',
    sweet: 'Fantastico',

    //Header cell
    referanceHeaderCellFrom: '{to} da {from}',
    getReferenceColumnTooltip1: 'Questa colonna è referenziata da {viewsJoin} tabella(e).',
    getReferenceColumnTooltip2:
      ' Questa colonna è utilizzata per cercare valori in {viewsJoin} tabella(e).',
    getReferenceColumnTooltip3:
      'Questa colonna è utilizzata dalle colonne di somma per {viewsJoin} tabella(e).',

    //RetableAutomationTriggerInput partII
    //month part
    january: 'Gennaio',
    february: 'Febbraio',
    march: 'Marzo',
    april: 'Aprile',
    may: 'Maggio',
    june: 'Giugno',
    july: 'Luglio',
    august: 'Agosto',
    september: 'Settembre',
    october: 'Ottobre',
    november: 'Novembre',
    december: 'Dicembre',

    //dayOfWeek part
    sunday: 'Domenica',
    monday: 'Lunedì',
    tuesday: 'Martedì',
    wednesday: 'Mercoledì',
    thursday: 'Giovedì',
    friday: 'Venerdì',
    saturday: 'Sabato',
    //dayOfMonth part
    auto1st: '1º',
    auto2nd: '2º',
    auto3rd: '3º',
    auto4th: '4º',
    auto5th: '5º',
    auto6th: '6º',
    auto7th: '7º',
    auto8th: '8º',
    auto9th: '9º',
    auto10th: '10º',
    auto11th: '11º',
    auto12th: '12º',
    auto13th: '13º',
    auto14th: '14º',
    auto15th: '15º',
    auto16th: '16º',
    auto17th: '17º',
    auto18th: '18º',
    auto19th: '19º',
    auto20th: '20º',
    auto21st: '21º',
    auto22nd: '22º',
    auto23rd: '23º',
    auto24th: '24º',
    auto25th: '25º',
    auto26th: '26º',
    auto27th: '27º',
    auto28th: '28º',
    auto29th: '29º',
    auto30th: '30º',
    auto31st: '31º',

    //tabs part
    tabsSeconds: 'Secondi',
    tabsMinutes: 'Minuti',
    tabsHours: 'Ore',
    tabsDay: 'Giorno',
    tabsMonth: 'Mese',
    tabsYear: 'Anno',

    //quartz part
    everyLabel: 'Ogni giorno',
    dayOfWeekIncrementLabel1: 'Ogni',
    dayOfWeekIncrementLabel2: 'giorno(i) a partire da',
    dayOfMonthIncrementLabel1: 'Ogni',
    dayOfMonthIncrementLabel2: 'giorno(i) a partire dal',
    dayOfMonthIncrementLabel3: 'del mese',
    dayOfWeekAndLabel: 'Giorno specifico della settimana (scegli uno o più)',
    dayOfWeekRangeLabel1: 'Ogni giorno tra',
    dayOfWeekRangeLabel2: 'e',
    dayOfMonthAndLabel: 'Giorno specifico del mese (scegli uno o più)',
    dayOfMonthLastDayLabel: "L'ultimo giorno del mese",
    dayOfMonthLastDayWeekLabel: "L'ultimo giorno feriale del mese",
    dayOfWeekLastNTHDayWeekLabel1: "L'ultimo",
    dayOfWeekLastNTHDayWeekLabel2: 'del mese',
    dayOfMonthDaysBeforeEndMonthLabel: 'giorno(i) prima della fine del mese',
    dayOfMonthNearestWeekDayOfMonthLabel1: 'Il giorno feriale più vicino (da lunedì a venerdì) al',
    dayOfMonthNearestWeekDayOfMonthLabel2: 'del mese',
    dayOfWeekNTHWeekDayOfMonthLabel1: 'Il',
    dayOfWeekNTHWeekDayOfMonthLabel2: 'del mese',
    monthEveryLabel: 'Ogni mese',
    monthIncrementLabel1: 'Ogni',
    monthIncrementLabel2: 'mese(i) a partire dal mese',
    monthAndLabel: 'Mese specifico (scegli uno o più)',
    monthRangeLabel1: 'Ogni mese tra il mese',
    monthRangeLabel2: 'e il mese',
    secondEveryLabel: 'Ogni secondo',
    secondIncrementLabel1: 'Ogni',
    secondIncrementLabel2: 'secondo(i) a partire dal secondo',
    secondAndLabel: 'Secondo specifico (scegli uno o più)',
    secondRangeLabel1: 'Ogni secondo tra il secondo',
    secondRangeLabel2: 'e il secondo',
    minuteEveryLabel: 'Ogni minuto',
    minuteIncrementLabel1: 'Ogni',
    minuteIncrementLabel2: 'minuto(i) a partire dal minuto',
    minuteAndLabel: 'Minuto specifico (scegli uno o più)',
    minuteRangeLabel1: 'Ogni minuto tra il minuto',
    minuteRangeLabel2: 'e il minuto',
    hourEveryLabel: 'Ogni ora',
    hourIncrementLabel1: 'Ogni',
    hourIncrementLabel2: "ora(e) a partire dall'ora",
    hourAndLabel: 'Ora specifica (scegli uno o più)',
    hourRangeLabel1: "Ogni ora tra l'ora",
    hourRangeLabel2: "e l'ora",
    yearEveryLabel: 'Qualsiasi anno',
    yearIncrementLabel1: 'Ogni',
    yearIncrementLabel2: "anno(i) a partire dall'anno",
    yearAndLabel: 'Anno specifico (scegli uno o più)',
    yearRangeLabel1: "Ogni anno tra l'anno",
    yearRangeLabel2: "e l'anno",

    //unix part starts here
    uDayEveryLabel: 'Ogni giorno',
    uDayOdWeekIncrementLabel1: 'Ogni',
    uDayOdWeekIncrementLabel2: 'giorno(i) della settimana',
    uDayOfMonthIncrementLabel1: 'Ogni',
    uDayOfMonthIncrementLabel2: 'giorno(i) del mese',
    uDayOdWeekAndLabel: 'Giorno specifico della settimana (scegli uno o più)',
    uDayOdMonthAndLabel: 'Giorno specifico del mese (scegli uno o più)',
    uMonthEveryLabel: 'Ogni mese',
    uMonthIncrementhLabel1: 'Ogni',
    uMonthIncrementhLabel2: 'mese(i)',
    uMonthAndLabel: 'Mese specifico (scegli uno o più)',
    uMonthRangeLabel1: 'Ogni mese tra il mese',
    uMonthRangeLabel2: 'e il mese',
    uMinuteEveryLabel: 'Ogni minuto',
    uMinuteIncrementLabel1: 'Ogni',
    uMinuteIncrementLabel2: 'minuto(i)',
    uMinuteAndLabel: 'Minuto specifico (scegli uno o più)',
    uMinuteRangeLabel1: 'Ogni minuto tra il minuto',
    uMinuteRangeLabel2: 'e il minuto',
    uHourEveryLabel: 'Ogni ora',
    uHourIncrementLabel1: 'Ogni',
    uHourIncrementLabel2: 'ora(e)',
    uHourAndLabel: 'Ora specifica (scegli uno o più)',
    uHourRangeLabel1: "Ogni ora tra l'ora",
    uHourRangeLabel2: "e l'ora",

    // Groupbymenu
    groupByColumnInfo:
      'I dati della colonna sono accessibili mentre la colonna raggruppata è nascosta.',
    collapseAll: 'Comprimi tutto',
    expandAll: 'Espandi tutto',

    // Settings.js
    digitSeparator: 'Separatore delle cifre',
    comma: 'Virgola',
    dot: 'Punto',

    //RetableThemeSwitch
    themeSwitch: 'Cambia tema',

    //RetableTableViewBody
    enterToAddNewRow: 'Premi invio per aggiungere una nuova riga.',

    //RetableFreeTrialModal
    freeTrialModalTitle: 'Pro',

    // Delete Account
    deleteMyAccount: 'Elimina il mio account',
    delErrOrgAdmin: 'Devi eliminare la tua organizzazione prima di eliminare il tuo account.',
    delErrOrgMember:
      "L'amministratore dell'organizzazione deve rimuoverti dall'organizzazione. Puoi contattare l'amministratore dell'organizzazione.",
    deleteAccount: 'Elimina account',
    thisAccountWillBeDeleted: 'Questo account verrà eliminato.',
    needToKnowBeforeDeleteAccount:
      "Devi sapere cosa succederà prima dell'eliminazione dell'account.",
    pleaseReadQA:
      "Si prega di leggere prima le domande e risposte sulla cancellazione dell'account.",
    whatWillHappenWorkspace: 'Cosa succederà ai miei spazi di lavoro se elimino il mio account?',
    whatWillHappenWorkspaceContent:
      "Se sei l'unico utente nel tuo spazio di lavoro, i tuoi spazi di lavoro verranno eliminati e non potrai più accedervi. Se ci sono più di un 'Proprietario' nei tuoi spazi di lavoro, qualsiasi Proprietario verrà assegnato ai spazi di lavoro come 'Creatore' e questi spazi di lavoro non verranno eliminati.",
    whatWillHappenData: 'Cosa succederà ai miei dati?',
    whatWillHappenDataContent:
      'Nel caso in cui il tuo account venga eliminato, tutti i progetti, le tabelle, le visualizzazioni e i dati nello spazio di lavoro eliminato verranno eliminati definitivamente.',
    isMyaccountTemporarlyDeleted:
      'Il mio account è temporaneamente eliminato, posso registrarmi di nuovo?',
    isMyaccountTemporarlyDeletedContent:
      'Puoi registrarti di nuovo dopo che il tuo account è stato eliminato, ma non potrai accedere ai tuoi dati e sarai considerato un nuovo utente.',
    dontForgetBackup:
      'Non dimenticare di fare un backup dei tuoi dati prima di eliminare il tuo account!',
    notBeAbleToAccessData:
      'Quando elimini il tuo account, non potrai accedere ai tuoi dati, quindi prima di eliminare il tuo account, assicurati di esportare e fare un backup dei dati importanti.',
    acceptDeleteAccount:
      'Ho letto le condizioni sopra riportate e accetto di eliminare il mio account.',
    deleteAccountDoesNotMatch:
      "L'account connesso non corrisponde all'account che ha effettuato la richiesta. Effettua l'accesso con l'account che ha effettuato la richiesta.",
    accountDeleteSuccess: 'Il tuo account è stato eliminato con successo.',
    delErrAppsumoUser: 'Devi richiedere il rimborso da AppSumo prima di eliminare il tuo account.',
    delErrAddPass: 'Per eliminare il tuo account, devi prima aggiungere una password Retable',
    addRetablePassword: 'Aggiungi una password retable',
    verifyYourAccount: 'Verifica il tuo account',
    deleteAccountMailSent:
      "Per maggiore sicurezza, ti abbiamo inviato un'e-mail di conferma. Controlla la tua casella di posta e accetta i termini prima di eliminare il tuo account. Non dimenticare di controllare le cartelle spam/posta indesiderata.",
    deletedAccount: 'Account Eliminato',
    dangerZone: 'Zona pericolosa',
    dangerZoneDesc:
      'Una volta eliminato il tuo account, non è possibile tornare indietro. Per favore sii certo.',
    accDeleteOrg: 'Devi eliminare la tua organizzazione prima di eliminare il tuo account.',
    accConnectAdmin:
      "Solo l'amministratore dell'organizzazione può rimuoverti da questo team. Contatta prima l'amministratore della tua organizzazione.",

    //Documentation.js

    defaultRollupExampDesc:
      'Se vuoi effettuare un calcolo nella colonna Rollup, devi digitare (VALUES) nella formula. Puoi anche effettuare calcoli con le altre colonne nella tua tabella.',
    rollupKeywordsDesc: 'Array di valori referenziati.',
    rollupMethodInfoSumDesc: 'Restituisce la somma dei numeri.',
    rollupMethodInfoAvgDesc: 'Restituisce la media degli argomenti numerici.',
    rollupMethodInfoCountDesc: 'Restituisce il conteggio degli argomenti numerici.',
    rollupMethodInfoMaxDesc: 'Restituisce il valore massimo degli argomenti numerici.',
    rollupMethodInfoMinDesc: 'Restituisce il valore minimo degli argomenti numerici.',
    miSumDesc: 'Restituisce la somma dei numeri.',
    miConcatenateDesc: 'Unisce tutti gli argomenti di testo.',
    miCountdesc: 'Restituisce il conteggio degli argomenti numerici.',
    miCountAdesc: 'Restituisce il conteggio degli argomenti non vuoti.',
    miDivideDesc: 'Calcola la divisione di due numeri.',
    miUsDesc: 'Formato data US ("MM/GG/AAAA") o ("MM/GG/AAAA HH:mm").',
    miIsoDesc: 'Formato data ISO ("AAAA-MM-GG") o ISO ("AAAA-MM-GG HH:mm").',
    miEuDesc: 'Formato data europeo ("GG/MM/AAAA") o ("GG/MM/AAAA HH:mm").',
    miTrueDesc: 'Valore logico vero.',
    miFalseDesc: 'Valore logico falso.',
    miAverageDesc: 'Restituisce la media degli argomenti numerici.',
    miMaxDesc: 'Restituisce il valore massimo degli argomenti numerici.',
    miMinDesc: 'Restituisce il valore minimo degli argomenti numerici.',
    miTodayDesc:
      'Restituisce la data corrente formattata come testo. (Il formato data predefinito è EU() ("GG/MM/AAAA")).',
    miNowDesc:
      'Restituisce la data e l\'ora correnti formattate come testo. (Il formato data predefinito è EU("ora") ("GG/MM/AAAA HH:mm")).',
    miDaysDesc:
      'Restituisce il numero di giorni tra due date. (Il formato data predefinito è EU() ("GG/MM/AAAA")).',
    miDateFormatDesc:
      "Formatta la data. Il parametro di input 'testo_data' deve essere in un formato valido. 'formato_corrente' è il formato della data fornita. Il formato 'formato_target' predefinito è EU. Il formato locale predefinito è 'it'. Altri formati locali supportati includono 'es', 'tr', 'de' e 'fr'.",
    miAddDaysdesc: 'Aggiunge giorni a una data.',
    miWorkDaysDesc: 'Restituisce il numero di giorni lavorativi tra due date.',
    miCompleteDesc:
      'Calcola la percentuale di completamento attuale, in base agli argomenti data di fine e data di inizio.',
    miProggressDesc:
      "Calcola la percentuale di completamento, in base all'argomento numerico corrente e all'argomento numerico target.",
    miToNumberDesc: "Converte l'argomento in numero.",
    miToTextDesc: "Converte l'argomento in testo.",
    miLenDesc: 'Restituisce la lunghezza del testo.',
    miIfDesc:
      "Restituisce 'valore_se_vero' se l'espressione logica è VERA e 'valore_se_falso' se è FALSA.",
    miIsBeforeDesc:
      'Restituisce 1 se la data_1 è precedente alla data_2, altrimenti restituisce 0. (Il formato data predefinito è EU() ("GG/MM/AAAA")).',
    miIsAfterDesc:
      'Restituisce 1 se la data_1 è successiva alla data_2, altrimenti restituisce 0. (Il formato data predefinito è EU() ("GG/MM/AAAA")).',
    miIsSameDesc:
      'Confronta due date fino all\'unità, e restituisce 1 se sono uguali, altrimenti restituisce 0. Le unità supportate sono "anno", "mese", "giorno", "ora" e "minuto". (Il formato data predefinito è EU())',
    miIsBetween:
      'Restituisce 1 se la data di destinazione è compresa tra la data di inizio e la data di fine, altrimenti restituisce 0.',
    miDurationsDesc:
      'Calcola la durata tra due date e la restituisce come testo in formato umanizzato usando il formato fornito. \n Formati di output supportati sono "anni", "mesi", "giorni", "ore", "minuti" e "secondi". \n (Il formato data predefinito è EU(), il formato di output predefinito è "anni,mesi,giorni,ore,minuti,secondi")',

    //Saga.js socket.emit header and message parts
    deleteColumnMessage: 'Colonna(e) cancellata(e)',
    deleteColumnHeader: 'Colonna',

    updateStyleHeader: 'Stile Tabella',
    updateStyleMessageTrue: 'Stile tabella aggiornato',
    updateStyleMessageFalse: 'Stile tabella applicato',

    sortDataHeader: 'Ordina',
    sortDataMessage: 'Ordinamento applicato',

    updateFilterHeader: 'Filtro',
    updateFilterMessage: 'Filtro applicato',

    updateFormOptionsHeader: 'Form',
    updateFormOptionsMessage: 'Form personalizzato',

    updateGroupByHeader: 'Gruppo',
    updateGroupByMessage: 'Raggruppamento applicato',

    formRowUpdateHeader: 'Aggiorna',
    formRowUpdateMessage: 'Dati della riga aggiornati',

    submitFormHeader: 'Riga',
    submitFormMessage: "Nuova riga aggiunta dopo l'invio del modulo",

    updateDataHeader: 'Aggiorna',
    updateDataMessage: 'Dati aggiornati',

    deleteDataHeader: 'Elimina',
    deleteDataMessage: 'Dati eliminati',

    updateColumnHeader: 'Colonna',
    updateColumnMessage: 'Colonne aggiornate',

    insertColumnHeader: 'Colonna',
    insertColumnMessage: 'Colonna(e) inserita(e)',

    moveColumnHeader: 'Colonna',
    moveColumnMessage: 'Colonna spostata',

    updateTableWithTableIDHeader1: 'Filtro',
    updateTableWithTableIDHeader2: 'Colonna',
    updateTableWithTableIDMessage1: 'Filtro applicato.',
    updateTableWithTableIDMessage2: 'Colonna(e) aggiornata(e).',

    updateDataAndColumnsHeader: 'Colonna',
    updateDataAndColumnsMessage: 'Colonna duplicata',

    updateTableWithTableIDPasteHeader: 'Incolla',
    updateTableWithTableIDPasteMessage: 'Dati incollati',

    updateTableWithTableIDImportHeader: 'Importa',
    updateTableWithTableIDImportMessage: 'Dati importati',

    delimiteColumnHeader: 'Delimita',
    delimiteColumnMessage: 'Colonna delimitata',

    moveRowHeader: 'Riga',
    moveRowMessage: 'Riga spostata',

    updateViewShareHeader: 'Condividi',
    updateViewShareMessage: 'Condivisione vista aggiornata',

    newRowHeader: 'Dati',
    newRowMessage: 'Dati aggiunti',

    updateAutomationHeader: 'AUTOMAZIONE',
    updateAutomationMessage: 'Automazione creata',
    updateAutomationUpdatedMessage: 'Automazione aggiornata',
    updateAutomationDeletedMessage: 'Automazione eliminata',
    updateAutomationStatusMessage: 'Stato automazione aggiornato',

    updateChartHeader: 'Aggiorna',
    updateChartMessage: 'Vista grafico aggiornata',

    updateViewPayloadHeader: 'Aggiorna',
    updateViewPayloadMessage: 'Vista calendario aggiornata',
    updateViewPayloadKanbanMessage: 'Vista kanban aggiornata',
    updateViewPayloadCardMessage: 'Vista cartella aggiornata',
    updateViewPayloadMapMessage: 'Vista mappa aggiornata',

    resizeColumnHeader: 'Colonna',
    resizeColumnMessage: 'Colonna ridimensionata',

    hideColumnHeader: 'Colonna',
    hideColumnMessage1: 'Una colonna è nascosta',
    hideColumnMessage2: 'Una colonna è ripristinata',

    goToProject: 'Vai al Progetto',
    copyMovePaymentError:
      "Il limite di riga nel progetto è stato superato. Puoi andare al progetto e acquistare un'aggiunta per il limite di riga se non ne hai una. Se hai già un'aggiunta, assicurati di non superare il tuo limite.",
    maxFileImportTitle: 'Questo file è troppo grande per essere allegato',
    maxFileImportText:
      'Non è possibile importare un file più grande di {limit}. Si prega di utilizzare file più piccoli.',

    // RetableAddonView
    addonNotFound: 'Addon non trovati.',
    addons: 'Componenti aggiuntivi',
    extendMore: 'Estendi di più',
    subscribed: 'Iscritto',
    buyNow: 'Acquista ora',
    mo: 'mese',
    addonModalSubtitle:
      'Seleziona da una lista di componenti aggiuntivi per potenziare le tue tabelle',
    addonNeedOrgTitle: 'Organizzazione richiesta',
    addonTeamPlan: 'I componenti aggiuntivi sono disponibili solo nei piani Team.',
    addonNeedOrg:
      "È necessario creare un'organizzazione per poter acquistare i componenti aggiuntivi.",
    addonInDevelopment: 'Questa estensione è in fase di sviluppo. Grazie per la vostra pazienza.',
    addonContactAdmin:
      "Solo l'amministratore dell'organizzazione può effettuare acquisti per i componenti aggiuntivi, contattare l'amministratore dell'organizzazione.",
    addonPer: 'Per {path}',
    smWorkspace: 'spazio di lavoro',
    smProject: 'progetto',
    addonWillActiveFor: 'Sarà attivo per il {path} in cui ti trovi.',
    goAddonPage: 'Portami alla pagina del componente aggiuntivo',
    available: 'Disponibile',
    finished: 'Finito',
    upcoming: 'In arrivo',
    unavailable: 'Non disponibile',
    planRenewAt: 'Il tuo piano verrà rinnovato il {path}.',
    planCancelAt: 'Il tuo piano verrà cancellato il {path}.',
    quantity: 'Quantità',
    promotion: 'Promozione',
    installed: 'Installato',
    install: 'Installa',
    promotionUsedFor:
      'Questa promozione del componente aggiuntivo è utilizzata per {path1} {path2}.',
    promoTier4: 'Appsumo Tier4',
    activateFree: 'Attiva per iniziare a utilizzare gratuitamente',
    goToAppsumo: 'Vai su Appsumo',
    addonNeedTier4:
      "Gli extra promozione sono disponibili solo per il Tier 4. Devi effettuare l'upgrade al Tier 4 per accedere agli extra promozione.",
    afterCancellation: 'Puoi installarlo nuovamente dopo la cancellazione.',
    renew: 'Rinnovare',
    increaseRowLimitTitle: 'Aumentare il limite di righe?',
    increaseRowLimitText:
      "Hai un limite di {limit} righe per progetto. Puoi acquistare l'addon 'Limite di righe' e aumentare il limite a 100.000 righe per progetto.",
    maxRowLimitTitle: 'Hai raggiunto il limite massimo di righe',
    maxRowLimitText:
      'Hai raggiunto il limite massimo di {limit} righe per progetto. Assicurati che i tuoi dati non superino questo limite.',
    increaseFileUploadLimitTitle: 'Questo file è troppo grande per allegarlo alla tua tabella',
    increaseFileUploadLimitText:
      "Non puoi allegare file più grandi di {limit}. Per aumentare questo limite, acquista l'addon 'Limite di caricamento'.",
    maxFileUploadLimitTitle: 'Questo file è troppo grande per allegarlo alla tua tabella',
    maxFileUploadLimitText: 'Non puoi allegare file più grandi di {limit}. Usa file più piccoli.',
    increaseStorageLimitTitle: 'Non hai abbastanza spazio per caricare questo/i file',
    increaseStorageLimitText:
      "Hai un limite di {limit} nel tuo spazio di lavoro. Elimina alcuni file per liberare spazio o acquista l'addon 'Limite di archiviazione'.",
    maxStorageLimitTitle: "È tempo di fare un po' di pulizia!",
    maxStorageLimitText:
      'Hai un limite di {limit} nel tuo spazio di lavoro. Libera spazio per caricare più dei tuoi fantastici file.',
    increaseAutomationCountTitle: 'Hai esaurito le automazioni disponibili',
    increaseAutomationCountText:
      "Attualmente hai un limite di {count} automazioni attive. Per aumentare il numero di automazioni, acquista l'addon 'Conteggio automazioni'.",
    maxAutomationCountTitle: 'Hai raggiunto il massimo di {count} automazioni',
    maxAutomationCountText:
      'Non puoi aggiungere altre automazioni qui. Elimina alcune delle automazioni per aggiungerne di più.',
    addonTwoMonthFree: '2 mesi gratuiti',
    perMonth: 'al mese',
    run: 'eseguire',
    trialUserCannotPurchaseAddon:
      'Gli utenti di prova non possono acquistare componenti aggiuntivi.',
    tempUserCannotPurchaseAddon:
      'Gli utenti temporanei non possono acquistare componenti aggiuntivi.',

    // Addons
    ADDON_PASSWORD_PROTECTION_name: "Protezione dell'accesso URL",
    ADDON_PASSWORD_PROTECTION_description:
      "Se desideri aggiungere un meccanismo di protezione tramite password ai tuoi progetti, visualizzazioni o moduli, il componente aggiuntivo di protezione dell'accesso URL ti aiuterà. In questo modo, puoi impostare password per progetti, visualizzazioni e moduli pubblici. Pertanto gli utenti dovranno inserire una password per vedere i progetti, le visualizzazioni o i moduli protetti da password. Una volta applicato, questo componente aggiuntivo sarà disponibile per un progetto a cui partecipi.",
    ADDON_STORAGE_LIMIT_name: 'Limite di archiviazione',
    ADDON_STORAGE_LIMIT_description:
      "Se desideri aggiungere più spazio di archiviazione, il componente aggiuntivo di limite di archiviazione aggiuntivo fa al caso tuo. L'acquisto di un componente aggiuntivo di limite di archiviazione aumenta lo spazio di allegati di 10 GB. Puoi acquistare un massimo di 9 componenti aggiuntivi di limite di archiviazione. Potrai utilizzare ciascun componente aggiuntivo in un workspace.",
    ADDON_UPLOAD_LIMIT_name: 'Limite di caricamento',
    ADDON_UPLOAD_LIMIT_description:
      'Niente più divisione dei file o superamento dei limiti! Il componente aggiuntivo di limite di caricamento aumenta il limite di caricamento file di 10 MB. Puoi acquistare un massimo di 4 componenti aggiuntivi di limite di caricamento. Potrai utilizzare ciascun componente aggiuntivo in un workspace.',
    ADDON_ADDITIONAL_ROWS_name: 'Limite di righe aggiuntive',
    ADDON_ADDITIONAL_ROWS_description:
      'Hai un limite di 50.000 righe per ciascuno dei tuoi progetti. Il componente aggiuntivo di limite di righe aggiuntive ti aiuta a aumentare il limite di righe a 100.000 per uno dei tuoi progetti. Una volta installato, sarà disponibile nel progetto che selezioni.',
    ADDON_AUTOMATION_RUN_COUNT_name: 'Conteggio esecuzioni automazione',
    ADDON_AUTOMATION_RUN_COUNT_description:
      'Se desideri aggiungere più esecuzioni di automazione, il componente aggiuntivo di conteggio esecuzioni automazione è quello che fa per te. Questo componente aggiuntivo aumenta il tuo conteggio esecuzioni automazione attive di +25000. Puoi acquistare un massimo di 5 componenti aggiuntivi di conteggio esecuzioni automazione. Potrai utilizzare ciascun componente aggiuntivo in un progetto.',
    ADDON_AUTOMATION_COUNT_name: 'Conteggio automazioni',
    ADDON_AUTOMATION_COUNT_description:
      'Se desideri aggiungere più automazioni, il componente aggiuntivo di conteggio automazioni è quello che fa per te. Questo componente aggiuntivo aumenta il tuo conteggio automazioni attive di +10. Puoi acquistare un massimo di 9 componenti aggiuntivi di conteggio automazioni. Potrai utilizzare ciascun componente aggiuntivo in un progetto.',
    PROMO_ROW_SIZE_50_name: 'Limite di righe',
    PROMO_ROW_SIZE_50_description:
      'Hai un limite di 50.000 righe per ciascuno dei tuoi progetti. Il componente aggiuntivo di limite di righe aggiuntive ti aiuta a aumentare il limite di righe a 100.000 per uno dei tuoi progetti. Una volta installato, sarà disponibile nel progetto che selezioni.',
    PROMO_STORAGE_LIMIT_20_name: 'Limite di archiviazione 20 GB',
    PROMO_STORAGE_LIMIT_20_description:
      "L'aggiunta del limite di archiviazione potenzia questo spazio di lavoro fornendo ulteriori 20 GB di archiviazione.",
    PROMO_AUTOMATION_COUNT_20_name: 'Conteggio automazioni',
    PROMO_AUTOMATION_COUNT_20_description:
      "L'aggiunta del conteggio automazioni potenzia questo progetto fornendo ulteriori 20 automazioni.",
    PROMO_AUTOMATION_RUN_COUNT_125_name: 'Conteggio esecuzioni automazione',
    PROMO_AUTOMATION_RUN_COUNT_125_description:
      "L'aggiunta del conteggio esecuzioni automazione potenzia questo progetto fornendo ulteriori 125.000 esecuzioni di automazione.",
    //Account Overview
    customization: 'Personalizzazione',

    //RetableCardViewCustomizeModal
    crop: 'Ritagliare',
    fit: 'Adattare',

    //RetableDashboardContentBox
    wsCreatedBy: 'Questo spazio di lavoro è stato creato da ',
    rename: 'Rinominare',

    // RetableSuggestionPopup
    suggestionText:
      'Guarda il nostro video che mostra come utilizzare i tipi di colonne di base per potenziare i tuoi dati.',
    checkboxText: 'Non lo mostrare di nuovo',
  },
};
