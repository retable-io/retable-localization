/* eslint-disable max-len */
/* eslint-disable import/no-anonymous-default-export */
import { LOCALES } from '../locales';

export default {
  [LOCALES.TURKISH]: {
    // Dashboard
    welcome:
      "Merhaba, Retable'a Hoş geldiniz, burada yeni çalışma alanı" + ' oluşturabilirsiniz. 👋',
    workspaceTip: 'Çalışma alanınızın adını ve açıklamasını değiştirebilirsiniz. 👆',
    shareTip:
      'Çalışma alanlarınızı diğer kişilerle paylaşabilir ve işbirliğinizi kolayca' +
      ' başlatabilirsiniz. ⛵',
    enjoy: 'İlk projenizin tadını çıkarın. 😍',
    next: 'Sonraki',
    prev: 'Önceki',
    finishTour: 'Turu Bitir',
    newWrokspace: 'Çalışma alanı ekle',
    workspaces: 'Çalışma Alanları',
    WorkspaceTrash: 'Çöp kutusu',
    workspaceNotfound: 'Çalışma alanı veya proje bulunamadı!',
    noWorkspaces: 'Hiç çalışma alanınız yok.',
    isError: 'Bir hata var.',
    gridView: 'Izgara Görünümü',
    listView: 'Liste Görünümü',
    addingWc: 'Yeni çalışma alanı eklenyor',
    emptyWorkspaceMessage: '"Proje ekle" butonuna basarak yeni proje ekleyebilirsiniz.',
    gdpr: 'GDPR Sertifikası',
    community: 'Topluluk',
    downloadDesktopApp: 'Masaüstü Uygulamasını İndir',
    retableChromeExt: 'Retable Chrome Uzantısı',
    retableChromeExtHeader: 'Retable Chrome Eklentisini Deneyin!🚀',
    retableChromeExtText:
      'Tüm CSV dosyalarını indirmeden kolayca görüntüleyin, düzenleyin ve ekip arkadaşlarınızla işbirliği yapın!',

    //Main Top Bar
    search: 'Ara',
    accountDetails: 'Hesap Detayları',
    logout: 'Çıkış',

    // RetableAlertPop
    needUpgrade: 'Bu işleme devam etmek için planınızı "Pro" plana yükseltmeniz gerekiyor.',
    needUpgradePro: 'Bu işleme devam etmek için Pro planınızı Team plana yükseltmeniz gerekiyor.',
    upgrade: 'Yükselt',
    upgrade2: 'YÜKSELT',

    upgradeNow: 'Yükselt',
    upgradeNowToolTip: 'Planını yükselt.',
    youAreInProPlan: 'Pro plandasınız.',
    youAreInBasicPlan: 'Basic plandasınız.',
    youAreInEnterprisePlan: 'Takım planındasınız.',
    youAreAlreadyIn: 'Zaten Takın planındasınız.',
    needUpgradeShareRole: 'Editör ve İzleyici rollerini kullanmak için şimdi yükseltin.',

    //RetableAutomationActionInput
    separateEmails: 'Alıcılar (birden çok e-posta adresini virgülle ayırın)',
    content: 'İçerik',
    subject: 'Konu',

    //RetableAutomationModal
    NameValidation: 'Bir karakterden uzun olmalıdır.',
    selectColumn: 'Bir kolon seçin',
    invalidEmail: 'Geçersiz e-posta',
    upperCaseEmailError: 'Lütfen e-postayı küçük harflerle girin.',
    triggerNotcompleted: 'Tetikleme tamamlanmadı.',
    actionNotcompleted: 'İşlem tamamlanmadı.',
    deleteAutomation: 'Otomasyonu Sil',
    deleteAutomationText:
      'Bu işlem, otomasyonu bu projeden siler. Bu işlemi gerçekleştireceğinizden emin misiniz?',
    cancel: 'İptal et',
    delete: 'Sil',
    automation: 'Otomasyon',
    name: 'İsim',
    automationName: 'Otomasyon ismi',
    description: 'Açıklama',
    reWs: 'Çalışma Alanını Yeniden Adlandır',
    automationDescription: 'Otomasyon açıklaması',
    trigger: 'Tetik',
    type: 'Tip',
    selectTrigger: 'Bir tetikleyici seçin',
    action: 'Aksiyon',
    selectAction: 'Bir eylem seçin',
    lastUpdated: '{path} tarafından En son güncellendi',
    att: '{path}',
    save: 'Kaydet',
    discard: 'Devam et',
    pleaseSelTab: 'Lütfen, Tablo seçiniz.',

    //RetableAutomationTriggerInput
    table: 'Tablo',
    selectTable: 'Bir table seçin',
    column: 'Kolon',

    //RetableAutomation
    noDescription: 'Açıklama yok',
    addNew: 'Yeni Ekle',
    noAutomationsText:
      'Bu projede otomasyon yok, bir tane eklemek için "Yeni ekle" düğmesini kullanın.',
    noAutomotionViewer: 'Bu projede otomasyon yok.',
    automationRunCountWarning:
      'Aylık otomasyon çalıştırma limitiniz tamamlandı. Krediniz {date} tarihinde yenilenecektir.',
    automationCountWarning: 'Bir çalışma alanında en fazla {count} otomasyon oluşturabilirsiniz.',
    automationCountInfo: '{totalCount} otomasyondan {usedCount} tanesini kullanıyorsunuz.',
    runCount: 'Çalışma sayısı',
    automationRunCountInfo: 'Bu çalışma alanındaki otomasyonların toplam çalışma sayısı.',

    //RetableCalendarDropdown
    Hm: ' HH:mm',
    reset: 'RESET',
    apply: 'Uygula',

    //RetableCalendarInput
    day: 'gün',
    month: 'ay',
    year: 'sene',

    //RetableColorPicker
    enterCustomColors: '"#FFFF" veya "#FFFFFF" biçimlerinde özel renkler girebilirsiniz.',

    //RetableColumnInput
    selectedColor: 'Seçilen Renk:',
    eg: 'örnek: ',
    attachFile: 'Dosya Ekle',
    fileSizelarge5: "5 MB'den büyük dosya boyutu!",
    fileSizelarge5Text:
      "5 MB'den büyük dosya boyutu! " +
      "5 MB'den büyük dosyaları yüklemek için planınızı yükseltebilirsiniz.",
    fileSizelarge20: "20 MB'den büyük dosya boyutu!",
    clean: 'Temizle',
    fieldRequired: 'Bu alan gereklidir.',
    required: 'Gerekli',
    mustRequired: 'Zorunlu',
    selectColabs: 'Ortak çalışanları seçin',
    searchColabs: 'Ortak çalışanlarda arayın',
    selecetAColab: 'Ortak Çalışan Seçin',
    findMe: 'Beni bul',
    permissionLocationDeniedDesc: 'Tarayıcı ayarlarını kontrol edin.',

    // RetableCreateFromTemplateModal
    selectWorkspaceOrProject: 'Çalışma alanı veya proje seçmelisiniz.',
    use: 'Kullan',

    // RetableDashboardTrashBin
    years: ' yıl',
    months: ' ay',
    days: ' gün',
    hours: ' saat',
    minutes: ' dakika',
    second: ' saniye',
    seconds: ' saniye',
    ago: ' önce',
    just: 'şimdi',
    dashboardTrashBin: 'Çöp Kutusu',
    dashboardTrashBinTooltip: 'Çalışma alanlarını ve projeleri geri yükle veya sil',
    typeProject: 'Tip: Proje',
    typeWorkspace: 'Tip: Çalışma alanı',
    restore: 'Geri Yükle',
    Restoree: 'Geri Yüklendi',
    remove: 'Kaldır',
    download: 'İndir',
    restoring: 'Yükleniyor',
    removed: 'Kaldırlıdı',
    noDeletedItem: 'Çöp kutunuzda silinmiş tablo veya görünüm yok.',
    deletedBy: 'tarafından silindi ',

    // RetableDropdownInput
    selectSomeOptions: "Seçenekler'i seçin",
    searchOptions: 'Seçeneklerde arayın',
    selectOption: 'Bir seçenek seçin',

    // RetableExpandCellModal
    cellPreview: 'Hücre Önizleme',
    done: 'Tamamlandı',
    fgColor: 'Ön Plan Rengi',
    bgColor: 'Arka Plan Rengi',

    // RetableDuplicateTableModal
    move: 'Taşı',
    copy: 'Kopyala ',
    selectProject: 'Proje Seç',

    // RetableEditableFormQuestion
    unknownRow: 'Bilinmeyen satır',
    fieldName: 'Alan Adı',
    fieldDesc: 'Alan Açıklaması',
    typeQuestionText: `Varsayılan kolon adı yerine formda görüntülenecek bir soru yazın.`,
    typeQuestionDesc: `Formda görüntülenecek kolon açıklamasını yazın.`,
    addDesc: 'Bu form için açıklama ekleyin',
    coverImage: 'Arka plan',

    // RetableEditFormModal
    embedForm: 'Formu web sayfanıza gömün',
    copied: 'Kopyalandı!',
    copyClipboard: 'Panoya kopyala.',
    openLinkTab: 'Bağlantıyı yeni sekmeye aç.',
    shareToGetSubmissions: 'Herhangi birinden gönderim almak için bu bağlantıyı paylaşın.',
    editForm: 'Retable Formunu Düzenle',
    submit: 'Gönder',
    share: 'Paylaş',
    columns: 'Kolonlar',
    getEmailNotification: 'Yeni yanıtlar için e-posta bildirimleri alın',
    edit: 'Düzenleme',
    codeEdit: 'Düzenleme Ekranı',
    codeLive: 'Canlı Ekran',
    codePreview: 'Önizleme Ekranı',
    addBold: 'Kalın Metin Ekle',
    addItalic: 'İtalik Metin Ekle',
    addStrikethrough: 'Üstü Çizili Metin Ekle',
    addHr: 'HR Ekle',
    addTitle: 'Başlık Ekle',
    addLink: 'Link Ekle',
    addQuote: 'Alıntı Ekle',
    addCode: 'Kod Ekle',
    addCodeBlock: 'Kod Blok Ekle',
    addComment: 'Yorum Ekle',
    addImage: 'Resim Ekle',
    unorderedListCommand: 'Sırasız Liste Ekle',
    orderedListCommand: 'Sıralı Liste Ekle',
    checkedListCommand: 'Kontrol Listesi Ekle',
    textHere: 'Metin Yeri',
    urlHere: 'Link Yeri',
    lastHiddenColumn: 'Formun son sütununu gizleyemezsiniz.',

    // RetableEmbeddedUrlModal
    embedRetable: 'Gömülü Retable',
    embedCode: 'Gömme Kodu',
    doubleclickCopy: 'Kopyalamak için çift tıklayın',
    width: 'Genişlik',
    height: 'Boy',
    wrongFiletype: 'Yanlış dosya türü!',
    noAccess: 'Bunu yapmak için erişiminiz yok.',
    selectAnotherImage: 'Başka bir resim seçin veya sürükleyip bırakın.',
    selectImage: 'Bir resim seçin veya sürükleyip bırakın.',
    uploadImage: 'Resim yükle.',
    uploadFile: 'Dosya yükle.',
    selectAnothrFile: 'Başka bir dosya seçin veya sürükleyip bırakın.',
    selectFile: 'Bir dosya seçin veya sürükleyip bırakın.',
    fileUpload: 'Dosya yükleme',
    customFileUpload: 'Cihazım',
    projectAttachment: 'Proje Eki',
    selFile: 'Bir dosya seçin',
    upload: 'Yükle',
    uploadMore: 'Daha Fazla Yükle',
    viewEditSelected: 'İncele/Düzenle',
    fillFields: 'Lütfen tüm gerekli alanları doldurun.',
    insertValidAddress: 'Lütfen geçerli bir e-posta adresi girin.',
    update: 'Güncelle',
    hideBrand: 'Markayı gizle',
    fillEmptyFields: 'Yukarıdaki alanlardan en az birini doldurmalısınız.',

    //RetableForm
    fileUploading: 'Dosya(lar) yükleniyor',
    clearForm: 'Formu temizle',
    maliciousMessage1: 'Parolaları asla Retable formları aracılığıyla göndermeyin.',
    maliciousMessage2: 'Kötü amaçlı formu bildirin.',
    shareForm: 'Formu Paylaş',
    responseWarn: 'Bu form yanıtlarını almak için giriş yapmalısınız.',

    // RetablePublicFormView
    thankForSubmission: 'Gönderiniz için teşekkür ederiz.',
    retableUsing:
      "İK'dan pazarlamaya, satıştan proje yönetimine ve tasarıma kadar rolünüz veya" +
      ' ihtiyacınız ne olursa olsun',
    noNeedSearch: 'Aramanıza gerek yok! ',
    provideClass: 'Her gün sınırsız birinci sınıf kalite ve performans sağlar.',
    qualityPerformance: 'Her gün sınırsız birinci sınıf kalite ve performans sağlar.',
    gotoRetable: "Retable'a git",
    createFormNow: 'Çevrimiçi formunuzu şimdi oluşturun',
    updateSubmission: 'Gönderinizi güncelleyin',
    backToRow: 'Satıra dön',
    backToForm: 'Forma dön',
    error: 'Hata',
    noViewCreate: 'Herhangi bir görünümünüz veya tablonuz yok. Yeni bir tane oluşturabilirsiniz.',
    thisPrivateForm: 'Merhaba! 👋 Bu özel bir form.',
    pleaseLoginToView: 'Lütfen görüntüleyebilmek için giriş yapınız.',
    redirectText: "<p2></p2> saniye içinde <p1></p1>'e yönlendiriliyor...",
    enterUrl: "URL'yi buraya girin",
    redirectStart: 'Yönlendirme, form gönderildikten 10 saniye sonra otomatik olarak gerçekleşir.',
    redirectUrl: 'URL yönlendirme',
    formEmailError: 'Retable hesabı olmayan kullanıcılara e-posta gönderemezsiniz.',
    sendCopyForm: 'Yanıtlarımın bir kopyasını bana e-postayla gönder',
    sendMailDescription:
      'Formu dolduran kişiler, form yanıtlarının bir kopyasını e-posta ile alabilirler.',
    writeHere: 'Buraya yaz',

    // RetableImportModal
    sure: 'Emin misin?',
    affectDefaultValue: `Bu tabloda bazı otomatik numara kolon türleri veya açık varsayılan
     değer seçenekleri var.
    İçe aktarma verileriniz bu koşullardan etkilenebilir.`,
    confirm: 'Onayla',
    selectCorrectFile: 'Bir .csv veya .xls(x) dosyası seçin',
    selectRetableCorrectFile: 'Bir .retable dosyası seçin',
    newColumn: ' yeni kolon',
    checkDuplicated: 'Lütfen yinelenen sütunların seçilmediğinden emin olun.',
    allMustSelectedCol: 'İçe aktarılan tüm sütunların seçili bir sütunu olmalıdır.',
    selectAnotherType: 'Başka bir .csv veya .xls(x) Dosyası seçin',
    selectRetableAnotherType: 'Başka bir .retable Dosyası seçin',
    selectTypeFile: 'Bir .csv veya .xls(x) dosyası seçin',
    selectRetableTypeFile: 'Bir .retable dosyası seçin',
    // selectTypeFile: 'Bir .retable dosyası seçin',
    importProject: 'Bir .csv veya .xls(x) içe aktar',
    importNewProject: 'Yeni bir proje içe aktar.',
    importTable: 'Tabloyu İçe Aktar',
    importNewTable: 'Yeni bir tablo içe aktar.',
    importData: 'Verileri İçe Aktar',
    addRecordExistingTable: 'Mevcut tabloya yeni kayıt(lar) ekle.',
    importedColumn: 'İçe Aktarılan Kolon',
    tableColumn: 'Tablo Kolonu',
    import: 'İçe aktar',
    firstIsRowInclude: 'İlk satır başlıktır, bu başlığı eklemeyin.',
    firstRowheader: 'İlk satır başlıktır.',
    trimWhitespace: 'Boşlukları kırpın.',
    insert: 'Ekle',
    insertDescription:
      'Retable tablonuzun sonuna kolayca eklemek için cihazınızdan herhangi bir CSV veya XLS dosyasını seçebilirsiniz.',
    replaceDescription:
      'Bu tablodaki tüm verileriniz, içe aktardığınız verilerle değiştirilir. İçe aktardığınız dosyada eşdeğer veri yoksa, bu veri Retable tablonuzun sonuna eklenir.',
    chooseUniqueColumns: 'Benzersiz kolonları seçin',
    replaceHeader: 'Başlıkları da değiştir',
    repeatingSourceColumnWarning: 'İçe aktardığınız tablo içindeki veriler benzersiz değil.',
    repeatingTargetColumnWarning: 'Retable tablonuzdaki veriler benzersiz değil.',
    emptyFileWarning: 'Bu dosya boş.',
    insertData: 'Veri Ekle',
    replaceData: 'Veri Değiştir',

    // RetableInviteMoreModal
    enterEmail: 'Lütfen bir e-posta girin',
    cantInvite5: "Aynı anda 5'ten fazla kullanıcı davet edilemez.",
    inviteMore: 'Tavsiyeler',
    referInfo: "Retable'a yönlendirdiğiniz her kişi için $3 kredi kazanın.",
    referDescription: 'Bir seferde yalnızca 5 kişiyi davet edebilirsiniz',
    to: 'Kime ',
    invite: 'Davet et',

    // RetableMessage
    wirteMsg: 'Bir şey yaz...',
    y: ' sene',
    mon: ' ay',
    d: ' gün',
    h: ' saat',
    m: ' dakika',
    s: ' saniye',
    you: 'Sen',
    anonymousUser: 'Bilinmeyen Kullanıcı',
    badgelilagray: 'badge-lila-gray',
    commented: ' Yorum yaptı',
    rowIn: ' Bu satıra ',
    editedCell: ' ,{path} hücreyi şu şekilde düzenledi',
    noImage: 'Resim mevcut değil.',

    // RetablePlanCard
    currentPlan: 'Mevcut Plan',
    contactUs: 'Bizimle iletişime geçin',
    features: 'ÖZELLİKLER',

    // RetableProblemsModal
    requiredCell: 'Zorunlu kolonda, {path} satırındaki hücre ',
    isEmpty: 'boş.',
    valueOf: ' {path} satırının değeri',
    dontMatchCol: ' kolon tipiyle eşleşmiyor.',
    colMustUniqe:
      'Bu kolondaki her değer benzersiz olmalıdır.' +
      " Ancak 2. satırda aynı değere sahip {path}'den fazla hücre(ler) var.",
    rowValue: '{path} değeri sütun biçimiyle eşleşmelidir.',
    rowValidation: '{path} satırındaki değer doğrulama kural(lar)ına uymalıdır.',
    validationErr: 'Hücre verilerinde doğrulama hata(lar)ı.',
    problemsof: '{path} de Görünüm Sorunları',

    // RetableProfilePicEditModal
    picSizeLarge1: "1MB'den büyük resim boyutu",
    profilePicture: 'Profil fotoğrafı',
    removeSure: 'Profil resminizi kaldırmak istediğinizden emin misiniz?',
    chooseImage: 'Resim Seç',
    imgValidation: 'Yalnızca .jpeg ve .png dosyalarına izin verilir!',

    // RetableProject
    project: 'Proje',
    noRecover: 'Silindikten sonra, bu projeyi kurtaramayacaksınız!',
    sharedUsers: 'Paylaşılan kullanıcılar:',
    sureDeleteProj: `Bu projeyi silmek üzeresiniz.`,

    //RetableProjectChat
    startDiscussion: 'Tartışma başlat',
    startDis: "Bir tartışma başlatın, diğerlerinden '@' ile bahsedin'",

    // RetableProjectDropdown
    authorizedRename: 'Yeniden adlandırma yetkiniz yok.',

    // RetableProjectShareModal
    editor: 'Editör',
    owner: 'Sahip',
    removeUser: 'Kullanıcıyı Kaldır',
    removeUserText:
      'Bu işlem kullanıcıyı bu alandan kaldıracaktır.' +
      ' Bu işlemi gerçekleştireceğinizden emin misiniz?',
    inviteMembers: 'Üyeleri davet et',
    publicproject: 'Genel proje',
    projLink: 'Proje Bağlantısı',
    worksLink: 'Çalışma Alanı Bağlantısı',
    copLink: 'Bağlantıyı kopyala',
    unknownUser: 'bilinmeyen kullanıcı',
    invitedUser: 'Davetli Kullanıcı',
    resendEmail: 'Emaili yeniden gönder',
    noProjMembers: 'Proje üyesi yok.',
    workspaceMembers: 'Çalışma Alanı Üyeleri',
    projectCollaborators: 'E-posta yoluyla daha fazla proje',
    resendInvitation: 'Yeniden davet gönder',
    modalTitle: 'Çalışan Dizini Demografisi',
    findEmail: 'E-posta adresi',
    findEmailOrTeam: "E-posta adresleri veya '@' ile bir ekip",
    public: 'Genel',
    anyoneCanSee: 'Bu bağlantıyı herkes görebilir.',
    publicProjectLinkInfoOn:
      'Proje paylaşıma açıldığında projedeki bütün görünümler de paylaşıma açılır. ',
    publicProjectLinkInfoOff:
      'Proje paylaşıma kapatıldığında projedeki bütün görünümler de paylaşıma kapatılır.',
    projectUseDataInfo:
      'Eğer paylaştığınız kullanıcılar giriş yaptıysa; bu projeyi, tablo ve verileri kişisel çalışma alanlarına klonlayabilirler. Sadece sahiplik hakkı olan kullanıcılar, bu anahtarı aktif veya pasif hale getirebilir.',
    projectUseDataWarning: `Projeniz için "Verileri Kullan" seçeneğini etkinleştirirseniz, bağlantıya sahip kişiler bu projedeki tüm verilere erişebilecek ve projeyi Retable çalışma alanına klonlayarak uyguladığınız tüm filtreleri veya gizlemeleri kaldırabilecektir. Projeniz ve tablolarınız bu değişikliklerden etkilenmeyecektir.`,
    shared: 'Paylaşıldı',
    sharedFailMessage:
      'Uygun formatta olan e-postalarla paylaşılmıştır. Uygunsuz e-postalar aşağıda listelenmiştir.',

    // RetableProjectTrashBin
    projectTrash: 'Proje Çöp Kutusu',
    noDeletedTable: 'Çöp kutunuzda silinmiş bir tablo yok.',
    view: 'Görünüm',

    //RetablePublicProjectShare
    refresh: 'Yenile',
    embedOnWeb: "Retable'ı web sayfanıza gömün.",
    useData: 'Verileri Kullan',
    viewersCreateProj: `Görüntüleyenler bu projeyi kullanarak yeni bir proje
    oluşturabilir. (Paylaştığınız kullanıcı oturum açtıysa.)`,
    tablesWillVisible: 'Aşağıdaki tablolar, bağlantıya sahip olan herkes tarafından görülebilir',
    shareWithUnique: 'Projeyi benzersiz bir bağlantıyla paylaşın.',
    cusLink: 'Özel Bağlantı',
    cusLinkDes: 'Bu projeye özel bağlantı oluştur.',
    accept: 'Kabul et',
    linkReq: 'Link gereklidir.',

    // RetablePublicSpreadsheet
    incorrectData: 'Bu tabloda bazı yanlış veriler var.',
    checkErrors: 'Hataları Kontrol Et',

    // RetablePublicTableHeader
    saving: 'Kaydediliyor...',
    changesSaved: 'Bütün değişiklikler kaydedildi.',
    signUp: 'Üye ol',

    // RetablePublicView
    tableLocked: 'tarafından kilitlendi ',

    // RetableRowShareModal
    bulk: 'Toplu',
    shareRow: 'Satırı Paylaş',
    useLink: 'Satırı düzenlemek için bu bağlantıyı kullanın veya bağlantıyı e-postayla gönderin.',
    hidden: '(Gizlenmiş)',
    send: 'Gönder',
    sendRowLink: 'E-posta yoluyla satır görünümü bağlantısı gönder',
    enterMailType: "Bir e-posta girin veya '@' yazın",
    noEmailOrCollabCol:
      'Tablonuzda e-posta veya kolaboratör kolonu yok. Toplu kullanmak için lütfen e-posta' +
      ' veya kolaboratör kolonu oluşturun!',
    thisRow: 'Bu satır',
    allRows: 'Tüm satırlar',
    bulkUpdateDesc:
      'Her satır, seçilen sütundaki kişiye gönderilir.' +
      ' Atanmamış satırlar hiç kimseye gönderilmez.',

    // RetableShareIcons
    shareText:
      'Elektronik tablolardaki gibi verileri kolayca düzenleyin, görüntüleyin,' +
      ' paylaşın ve düzenleyin...',

    // RetableShareMenu
    all: 'Hepsi',
    onlyData: 'Sadece Veri',
    disableExport: 'Dışa Aktarmayı Kapat',
    disableExportInfo: 'Bağlantıyı paylaştığınız kullanıcılar tablonuzu dışa aktaramaz.',

    // RetableSnapshotListModal
    noSnapshots: 'Anlık görüntü yok.',
    restoreTable: 'Tabloyu Geri Yükle',
    createTable: 'Yeni tablo oluştur',
    snapshotDescription:
      'Tabloyu geri yüklemek ya da yeni tablo oluşturmak için anlık görüntü seçin.',

    // RetableSnapshotModal
    snapshots: 'Anlık Görüntüler',
    takeSnapshot: 'Anlık görüntü al',

    // RetableDataValidation
    validation: 'Doğrulama',
    validationDes: 'Bu seçenek, veri doğrulama kurallarını belirlemenizi sağlar.',
    addRuleData: 'Veri doğrulama için bir kural ekleyin.',
    addValidationRule: 'Doğrulama Kuralı Ekle',

    // RetableDelimiteColumnModal
    sureDeleteCol: 'Kolon verilerini bölmek mi istiyorsunuz?',
    split: 'Böl',
    delimiter: 'Sınırlayıcı',
    typePreview: 'Herhangi bir şey yazın ve önizleyin',
    preview: 'Önizleme',
    previewData: 'Verileri Önizleme',
    noDataFound: 'Veri bulunamadı.',
    multiple: 'Çoklu',
    addMuUsers: 'Birden çok ortak çalışan ekleyin.',
    sendNotif: 'Bildirim Gönder',
    notifyUsers:
      'Ortak çalışanlara eklendiklerinde veya eklendikleri satır' +
      ' değiştirildiğinde bildirimde bulunun.',

    // RetableProjectHistoryModal
    rowSavedText: `Satır kaydedildi ancak verileriniz filtre koşuluna eşit değil.
      Filtreyi kaldırdığınızda bu satırı görebilirsiniz.`,
    createdAt: 'tarihinde oluşturuldu.',
    updatedAt: 'tarihinde güncellendi.',
    projectHistory: 'Proje Geçmişi',
    noFoundProjectHistory: 'Proje geçmişi bulunamadı.',

    // RetableReferenceTable
    selectReferenceTable: 'Referans tablosunu seçin',
    lookUpColumn: 'Kolon seç',
    noPremissionOthers: 'Diğer tabloları görüntüleme izniniz yok.',
    selectRefCol: 'Referans kolonu seçin',

    // RetableLookupValue
    selectReferencedColumn: 'Referanslı kolon seçin',
    referencedColumn: 'Referanslı kolon',
    selectLookupColumn: 'Değer aranacak kolon seçin.',
    noReferencedColumn:
      'Bir değer arama kolonu eklemek için bir referans kolonuna ihtiyacınız var. Değer arama kolonunu eklemeden önce referans kolonunu ekleyin.',

    // RetableRowData
    noImageFound: 'Resim bulunamadı.',

    // RetableRowHistoryModal
    rowDetail: 'Satır ayrıntıları',
    addNewRow: 'Yeni Satır Ekle',
    history: 'Geçmiş',
    comments: 'Yorumlar',
    watchRowDesc: 'Satır verileri değiştiğinde izleyicilere bilgilendirme e-postası gönderilir.',
    watchRowNumberDesc: 'Bu satırı izleyenlerin sayısı.',
    nohistory: 'Henüz herhangi bir değişiklik yapılmadı.',
    nocomments: 'Henüz herhangi bir yorum yapılmadı.',
    addColumn: 'Kolon ekle',
    prevRecord: 'Önceki',
    nextRecord: 'Sonraki',
    addRowHistory: 'Yeni',
    watchRow: 'İzle',
    showHiddenCols: '{count} gizli kolonu göster',

    // RetableSendMailModal
    sendSelectedEmail: 'Seçilen verileri e-posta olarak gönder',

    // RetableGenerateDataModal
    generateData: 'Veri Oluştur',
    columnData: 'Kolon Verileri',
    noColumnData: 'Kolon Verileri yok.',
    generate: 'Oluştur',

    //RetableSourceInput
    emptyOption: 'Boş Seçenek',
    sureRemoveOption: 'Bu seçeneği kaldırmak istediğinizden emin misiniz?',
    sureCleanList: 'Listeyi temizlemek istediğinizden emin misiniz?',
    clear: 'Temizle',
    sortAZ: "A'dan Z'ye Sırala",
    sortZA: "Z'dan A'ye Sırala",
    generateTableColumn: 'Tablo kolonundan oluştur',
    addAnOption: 'Bir seçenek ekle',
    addOption: 'Seçenek Ekle',
    selectedOptions: '{path} seçenek var. ',
    optionNotFound: 'Seçenekler bulunamadı!',

    // RetableEditColumnModal
    columnTypes: 'Sütun Tipleri',
    addNewCol: 'Yeni Kolon Ekle',
    custCol: 'Kolonu özelleştir',
    baicTypeCol: 'Temel',
    advancedTypeCol: ' Gelişmiş',
    premiumTypeCol: 'Premium',
    premiumBetaTitle: 'Pro ve Team hesapları için beta sürümünde ücretsiz',
    collaborator: 'Ortak Çalışan',
    addUsers: 'Kullanıcıları hücrelere ekleyin.',
    enterChar: 'Lütfen en az bir karakter girin.',
    selectReference: 'Lütfen referans tablosunu seçin ve alanı arayın.',
    customizeReferenced: 'Bu kolon türüyle başvurulan kolonu özelleştiremezsiniz',
    customizeReference: 'Bu kolon türüyle referans kolonu özelleştiremezsiniz',
    customizeTableReference:
      // eslint-disable-next-line max-len
      'Bu kolonu özelleştiremezsiniz çünkü değer arama kolunu tarafından kaynak olarak kullanılıyor.',
    customizeTableReferenceRollup:
      // eslint-disable-next-line max-len
      'Bu kolonu özelleştiremezsiniz çünkü değer rollup kolunu tarafından kaynak olarak kullanılıyor.',
    customizeLookup: 'Değer aranacak kolon tipini bu kolon tipi ile düzenleyemezsiniz',
    dataLostText:
      'BU KOLONDA VERİLERİNİZ VARSA ve kolon türünü değiştirirseniz, içindeki veriler ' +
      'kaybolabilir veya bozulabilir! Ancak, orijinal kolon türüne geri dönerseniz, özgün' +
      ' verilerinize yenileyerek erişebilirsiniz.',
    dataWarning:
      'UYARI: Orijinal kolon türüne geri dönmeden önce düzenlediğiniz veriler yine de' +
      ' kaybolabilir veya bozulabilir.',
    columnFilterWarning:
      'Sütuna bir filtre uygulandığı için sütun türü değiştirilirse, filtre kaldırılır.',
    ok: 'Tamam',
    ex: 'Example: ',
    ex1: 'Example: 1',
    text: 'Metin',
    title: 'Başlık',
    uniqueValues: 'Bu kolon için tabloda her bir değer benzersiz olacaktır.',
    requiredValues: 'Bu kolon için tabloda her değer zorunlu olacaktır.',
    maskData: 'Veri maskeleme',
    maskDataDescription:
      "Herkese açık paylaşılan görünümde hücre değerlerinizi yıldızlarla ('*') doldurarak diğer insanlardan gizleyin.",
    unique: 'Benzersiz',
    refTable: ' Referans tablosu ',
    dateFormat: 'Tarih formatı',
    includeTime: 'Saati dahil et',
    selectOptions: "Seçenekler'i seçin",
    singleSelect: 'Tek Seçim',
    multiSelect: 'Çoklu seçim',
    singlelineMultiline: 'Tek Satırlı/Çok Satırlı',
    singleLineText: 'Tek Satırlı Metin',
    multiLineText: 'Çok Satırlı Metin',
    wordWrap: 'Sözcük Kaydırma',
    format: 'Biçim',
    integer: 'Tamsayı (1)',
    decimal: 'Ondalık sayı (1.0)',
    currencyDecimal: 'Ondalık sayı (1.00)',
    precision: 'Hassasiyet',
    currencySymbol: 'Para Birimi Simgesi.',
    allowNegatives: 'Negatif sayılara izin ver.',
    style: 'Tarz',
    max: 'Maksimum',
    emptyCellDef: 'Bu kolon, verilen varsayılan değeri kullanarak boş hücreleri dolduracaktır.',
    textDes: 'Bir metin satırı.',
    numDes: 'Bir sayı satırı.',
    checkboxDes: 'Onay işareti koymak için küçük bir kutu.',
    imgDes:
      'Görüntü, daha sonra görüntülenebilecek veya indirilebilecek görüntüler' +
      ' eklemenize olanak tanır.',
    attachmentsDes:
      'Ekler, daha sonra görüntülenebilecek veya indirilebilecek' +
      ' resimler, belgeler veya başka dosyalar eklemenize olanak tanır.',
    calendarDes: 'Bir tarih girin veya takvimden bir tarih seçin. (örn. 11/12/2013).',
    colorDes: 'Hücreniz için bir renk seçin.',
    emailDes: 'Geçerli bir e-posta adresi (ör. andrew@example.com).',
    phoneDes: 'Bir telefon numarası (ör. +1 023 456 7890).',
    percentDes: 'Numaralarınıza % ekler.',
    selectDes:
      'Çoklu seçim, aşağıda listelenen önceden tanımlanmış' +
      ' bir veya daha fazla seçeneği seçmenizi sağlar.',
    geoLocationDes: "Konumunu işaretle. (ör. '41.021045896867875,29.00408756726393')",
    referenceDes: 'Diğer tablonun verilerini bu tabloda göster.',
    autonumberDes: 'Otomatik olarak her kayıt için benzersiz ve artan bir sayı oluşturur.',
    currencyDes: 'Sayıyı para birimi tutarı olarak biçimlendiren belirli sayı alanı türü.',
    ratingDes: 'Kayıtlarınızı değerlendirin.',
    defaultVal: 'Varsayılan değer',
    european: 'Avrupa',
    us: 'ABD',
    iso: 'ISO',
    urlDes: 'Bir URL satırı.',
    url: 'URL',
    protocolRequired: "URL'in protokol kısmını yazmalısınız.",
    lookupValue: 'Değer arama',
    lookupvalues: 'Değer Aramalar',
    lookUpDes: 'Referans tablodan başka bir değer arayın.',
    selectLookupValue: 'Lütfen referanslı kolon ve değer aranacak alanı seçiniz.',
    createdAtDes: 'Kaydın oluşturulduğu tarih ve saati gösterir.',
    createdByDes: 'Kaydı oluşturan kullanıcıyı gösterir.',
    updatedAtDes: 'Kaydın değiştirildiği tarih ve saati gösterir.',
    updatedByDes: 'Kayıtta değişiklik yapan son kullanıcıyı gösterir.',
    showAsButton: 'Buton Olarak Göster',
    buttonText: 'Buton Metni',
    uuidDes: 'Her kayıt için otomatik olarak benzersiz ve özel bir değer oluşturur.',
    uuidLength: 'Uzunluk',
    uppercase: 'Büyük harf',
    lowercase: 'Küçük harf',
    numbers: 'Sayılar',
    symbols: 'Semboller',
    uuidExample: 'Örnek',
    uuidCustomizeId: 'Tanımlayıcıyı özelleştir',
    qrCodeDes:
      'Hücrede yazan değer ile QR kod oluşturabilir, bu QR kodu herhangi bir QR tarayıcı ile tarayabilirsiniz.',
    qrCodeSupportDes: 'QR Kod sütun türü, yukarıdaki veri biçimlerini destekler.',
    selectSourceColumn: 'GPT kaynak kolonu seç',
    enterSecretKey: 'Lütfen bir ChatGPT API gizli anahtarı girin.',
    gptKeyInfo: 'Bu adresten bir ChatGpt API gizli anahtarı oluşturun:',
    selectSourceColumnSwal:
      'Geçerli bir ChatGPT yanıtı oluşturmak için lütfen bir kaynak sütunu seçin.',
    enterPrompt: 'Geçerli bir ChatGPT yanıtı oluşturmak için lütfen bir başlatıcı girin.',

    // RetableSpreadsheet
    formShare: `Satırın paylaşılabilmesi için formun paylaşılması gerekir. 
      Form görünümü paylaşma seçeneğini açmak istiyor musunuz?`,
    frozenMsg: 'Görünümün yarısından geniş olan kolonlar dondurulamaz.',
    freezeColumns: 'Kolonları Dondur',
    warning: 'Uyarı',
    manyRequests: 'Çok fazla satır silme isteği var!',
    deleteRows: 'Satır(lar)ı sil',
    deleteRow: 'Satırı sil',
    deleteAllSelected:
      'Bu işlem seçilen tüm satır(lar)ı siler. Bu işlemi gerçekleştirmek istediğinizden emin misiniz?',
    somethingWentWrong: 'Bir şeyler ters gitti 🤔',
    pleaseRefresh: 'Lütfen sayfayı yenileyin.',
    deleteLastCol: 'Tablonun görünen son sütununu silemezsiniz.',
    deleteRefCol: 'Referans kolonu silemezsiniz.',
    deleteRefLookupCol:
      // eslint-disable-next-line max-len
      'Değer arama kolonunun kaynağını silenemezsiniz. Öncelikle değer arama kolonunu silmelisiniz veya değiştirmelisiniz.',
    deleteLookupCol:
      // eslint-disable-next-line max-len
      'Bu kolon başka bir tablodan değer arama için kullanıldığı için bu kolonu silemezsiniz. Öncelikle değer arama kolonunu silmelisiniz veya değiştirmelisiniz.',
    deleteCol: 'Kolon(lar)ı sil',
    removeSelectedWarning:
      'Bu işlem seçilen tüm kolon(lar)ı silecektir. Bu işlemi gerçekleştirmek istediğinizden emin misiniz?',
    row: 'Satır',
    cell: 'Hücre',
    rowAdded: 'Yeni satır eklendi.',

    // RetableTableFooter
    sum: 'Toplam: ',
    avg: 'Ort: ',
    min: 'Min: ',
    max2: 'Maks: ',
    count: 'Adet: ',
    countNum: 'Sayı Adedi: ',
    row2: ' satır',
    column2: ' kolon',
    s: ' ',
    columns2: ' kolon',

    // RetableProjectNotificationMenu
    at: ' at ',
    notifications: 'Bildirim',
    noNotification: 'Bildirim yok.',

    // RetableTableHeader
    duplicateproject: 'Projeyi Yinele',
    deleteproject: 'Projeyi Sil',
    changeProject: 'Projeyi Değiştir',
    projMembers: 'Proje Üyeleri',
    feedback: 'Geri bildirim',
    userGuide: 'Kullanım kılavuzu',
    editPr: 'Projeyi düzenle',
    renameProject: 'Projeyi Yeniden Adlandır',
    projectName: 'Project adı yazın',
    shareProject: 'Projeyi Paylaş',
    shareCollab: 'Ortak Çalışanları Davet Et',
    exportProject: 'Projeyi Dışa Aktar',
    exporting: 'Dışa Aktarılıyor...',
    roadmap: 'Yol Haritası',
    support: 'Destek',
    discord: 'Discord',

    // RetableTableNav
    emptyTable: 'Boş Tablo',
    importRetable: 'Retable İçe Aktar',
    importGoogleSheet: 'Google E-Tablosunu İçe Aktar',
    projectHistories: 'Proje Geçmişi',
    projectTrashBin: 'Proje Çöp Kutusu',
    automations: 'Otomasyonlar',
    addOrimport: 'Ekle veya içe aktar',
    hideCol: 'Kolonları Gizle',
    hide: 'Gizle',
    filter: 'Filtre',
    maintenance: 'Bakımda',

    // RetableTableNavItem
    renameTable: 'Tabloyu Yeniden Adlandır',
    duplicateTable: 'Yinelenen Tablo',
    copyTable: 'Tabloyu Kopyala',
    moveTable: 'Tabloyu Taşı',
    snapshot: 'Anlık Görüntü',
    exportTable: 'Tabloyu Dışa Aktar',
    deleteTable: 'Tabloyu Sil',
    containAnotherProj: 'Çalışma alanı başka bir proje içermelidir.',
    atLeast1Table: 'Projenin en az bir tablosu olmalıdır.',
    noRecoverTable: 'Silindikten sonra, bu tabloyu kurtaramazsınız!',
    referecnedTable: 'Tabloya başka bir tablo tarafından başvurulmaktadır.',
    sureDeleteTable: `Bu tabloyu silmek istediğinizden emin misiniz?
    Son silinen tablo çöp kutusundan geri yüklenebilir.`,
    sureDelTable: `Bu tabloyu silmek üzeresiniz.`,
    affectReferenceValue: `Tabloda bazı referans sütunları ya da 
    referans olarak kullanılan sütunlar var.
    Bu sütunlar metin olarak değişecektir.`,
    lockTable: 'Tabloyu Kilitle',
    unlockTable: 'Tablo Kilidini Aç',
    unlockTableRequest: 'Kilit Açma İsteği',

    // RetableClientModal
    onlineCollaborators: 'Çevrimiçi Ortak Çalışanlar',
    showCell: 'Hücreyi Göster',

    //RetableFilterMenu
    addFilter: 'Filtre Ekle',
    applyFilter: 'Uygula',
    disableFilter: 'Pasif',
    typeHEX: 'Type HEX',
    operator: 'Operatör',
    or: 'VEYA',
    and: 'VE',
    mergedCellsWarning: 'Bu işlem birleştirilmiş hücreleri ayıracaktır.',
    differenceInfo: 'Fark filtre tipi için sonuç negatif veya pozitif olabilir.',
    filterLock:
      // eslint-disable-next-line max-len
      'Bir filtre kilitlendiğinde genel paylaşım tarafında değiştirilememesi için görünmez olacaktır. Sadece sahip yetkisi filtreyi kilitleyebilir.',

    //RetableFileUploadModal
    fileType: 'Dosya Türü',
    fileSize: 'Dosya Boyutu',
    fileName: 'Dosya Adı',
    createdBy: 'Oluşturduğu Kişi',
    used: 'Kullanıldı',
    usedStorage: 'depo alanından kullanıldı.',
    maxFUSizeExceed: 'Proje ekinde yeterli alanınız yok.',
    uploadCancelText:
      'Yüklemeye çalıştığın dosyalar iptal olacaktır. Yinede kapatmak istiyor musun?',
    noAccessProjectAtt:
      'Proje eklerini görüntüleme erişiminiz yok fakat yine de dosya yükleyebilirsiniz.',
    otherProjects: 'Diğer Projeler',
    attachmentSizeInfo:
      'Çöp kutusundaki proje ve tabloların içindeki eklerinde yer kapladığını unutma.',
    dropToUpload: 'Yüklemek için bırak',

    // RetableFindAndReplace
    replaceSure: 'Tüm verileri değiştirmek istiyor musunuz?',
    replaceAll: 'Tümünü değiştir',
    find: 'Bul',
    replace: 'Değiştir',
    caseSensitive: 'Harfe Duyarlı',
    findAndReplace: 'Bul ve Değiştir',

    // RetableFormatingMenu
    conditionalFormatting: 'Koşullu biçimlendirme',
    addFormat: 'Biçim ekle',

    // RetableHideFieldsMenu
    noHide: 'Tablonun son kolonunu gizleyemezsiniz.',
    refreshlink: 'Bağlantıyı yenile',
    shareData: 'Verilerinizi bu bağlantıyla paylaşın. (Gizli alanlar görünmez)',
    editable: 'Düzenlenebilir',
    makeEditable:
      'Genel Görünümünüzü düzenlenebilir hale getirin. (Paylaştığınız kullanıcı oturum açtıysa.)',
    viewUseDataInfo: `Eğer paylaştığınız kullanıcılar Retable'a giriş yaptıysa, bu tablo ve verileri kişisel Retable çalışma alanlarına ve projelerine klonlayabilirler.`,
    formView: 'Form Görünümü',
    publicForm: 'Genel Form',
    publicView: 'Genel Görünüm',
    makePrivateForm:
      'Bu formu özel yapın. Yalnızca oturum açmış kullanıcılar,' +
      ' formu görüntüleyebilir ve gönderebilir.',
    privateForm: 'Oturum açmış kullanıcılar form gönderebilir',
    EditPreviewform: 'Formu düzenleme ve önizleme',

    // RetableStyleToolbar
    bold: 'Kalın',
    italic: 'Eğik',
    underline: 'Alt çizgili',
    fontColor: 'Yazı Tipi Rengi',
    fillColor: 'Dolgu Rengi',
    resetStyle: 'Biçimi Sıfırla',
    rowSize: 'Satır Boyutu',
    shortRow: 'Kısa Satır',
    mediumRow: 'Orta Satır',
    tallRow: 'Uzun Satır',
    mergeCell: 'Hücreleri birleştir',
    columnStyle: 'Kolon stili',
    resetColorStyle: 'Biçimi sıfırla',

    // RetableTableToolbar
    cannotUnlock: 'Bu tablonun kilidini açamazsınız.',
    views: 'Görünümler',
    changeDataView: 'Veri görünümünü değiştir',
    export: 'Dışa Aktar',
    exportView: 'Görünümü Dışa Aktar',
    unlockedTable: 'Tablonun kilidi açık',
    projectChat: 'Proje Sohbeti',
    sort: 'Sıralama',
    sortAscending: 'Artan sıralama',
    sortDescending: 'Azalan sıralama',
    group: 'Grup',
    disable: 'Pasif',
    ascending: 'Artan sıralama',
    descending: 'Azalan sıralama',
    chat: 'Sohbet',
    tabList: 'Tablo listesi',
    unlockRequest: 'Tablo kilidini açma isteği gönder. (',
    unlockRequestSent: 'Tablo kilidini açma isteği gönderildi. (',
    youHaveToWait: 'Bunun için biraz beklemelisiniz. (',
    youHaveToWaitSecondPart: ' saniye)',
    youHaveToWaitMinPart: ' dakika)',
    tableHistory: 'Tablo tarihçesi',
    undo: 'Geri al',
    redo: 'İleri al',
    addNewRow2: 'Yeni satır ekle',
    addNewRow3: 'Satır Ekle',

    //retableSortMenu
    pickAnotherColumn: 'Başka bir kolon seçin',
    pickColumnToSort: 'Sıralamak için bir kolon seçin',

    pickColumnToGroup: 'Gruplamak için bir kolon seçin',

    // RetableTemplateModal
    projectTemplate: 'Proje Şablonu',
    useTemplate: 'Şablon kullan',
    close: 'Kapat',

    // RetableViewListItem
    renameView: 'Görünümü yeniden adlandır',
    duplicateView: 'Yinelenen görünüm',
    deleteView: 'Görünümü sil',
    noDeleteLastView: "Retable'ın son görünümünü silemezsiniz.",
    noRecoverView: 'Bu görünümü silmek üzeresiniz.',
    defaultView: 'Varsayılan Görünüm',

    // retableViewsList
    adding: 'Ekleniyor...',

    // RetableWorkspaceHeader
    workspace: 'Çalışma Alanı',
    editWorkspace: 'Çalışma Alanını Düzenle',
    editWorkName: 'Çalışma Alanı Adını Düzenle',
    editWorkDes: 'Çalışma Alanı Açıklamasını Düzenle',
    deleteWorkspace: 'Çalışma Alanını Sil',
    startTemplate: 'Bir şablonla başlayın',
    startScratch: 'Sıfırdan başla',
    shareWorkspace: 'Çalışma Alanını Paylaş',
    noWorkspaceRecover: 'Bu çalışma alanını silmek üzeresiniz.',
    workspaceName: 'Çalışma Alanı adı yazın',
    awesomeWorkspace: 'Harika Bir Çalışma Alanı! Projelerinizi düzenlemenize yardımcı olur.',
    awsomeProject: 'Ortak çalışanların sizinle paylaştığı projeler.',
    externallyProjectsDesc:
      'Retable Spreadsheet sayfasından veya dış kaynaktan kaydedilmiş projeler.',
    workspaceDesc: 'Varsayılan Çalışma Alanı',
    workspaceDescription: 'Çalışma Alanı açıklaması yazın',
    newProject: 'Proje ekle',
    sureDeleteWorkspace: `Bu çalışma alanını silmek üzeresiniz.`,

    // RetableWorkspaceListView
    emptyProject: 'Boş proje',
    sharedWith: 'Shared with',
    noProject: 'Bu çalışma alanında proje yok, eklemek için "Yeni proje ekle" düğmesini kullanın.',

    // RetableWorkspaceShareModal
    removeUserWorkspace:
      'Bu işlem, kullanıcıyı çalışma alanından kaldıracaktır.' +
      ' Bu işlemi gerçekleştireceğinizden emin misiniz?',
    inviteLink: 'Bağlantı ile davet et',
    inviteByLinkInfo: `Eğer paylaştığınız kullanıcılar Retable'a giriş yaptıysa; çalışma alanı, Görüntüleyici rolü ile paylaşılır.`,
    inviteCollaborators: 'Daha fazla çalışanı e-posta yoluyla davet edin',
    inviteLink2: 'Davet bağlantısı',
    shareYourWorkspace: 'Çalışma alanınızı bu bağlantıyla paylaşın.',
    peopleLink: 'Bu bağlantı ile çalışma alanına katılacak kişiler Editör rolüne sahip olacaktır.',
    personalLink:
      'Bu bağlantı kişiseldir. Bu bağlantıyı sadece siz ve davet' +
      ' edeceğiniz kişiler görebilir.',
    viewer: 'İzleyici',
    noWSMemberFound: 'Herhangi bir çalışma alanı üyesi bulunamadı!',
    noPJMemberFound: 'Herhangi bir proje üyesi bulunamadı!',
    wsViewerDesc:
      'Bu bağlantı ile çalışma alanına katılacak kişiler İzleyici rolüne sahip olacaktır.',
    orgMemberDesc: 'Bu bağlantı ile organizasyona katılacak kişiler Üye rolüne sahip olacaktır.',
    teamAlready: 'Takımın zaten izni var.',
    upgradeNowFeature: 'Bu özelliği kullanmak için şimdi <p1>yükseltin</p1>.',
    sharedWorkspaceFailMessage:
      'Çalışma ortamı, uygun olan mailler ile paylaşıldı, uygun olmayan mail listesi aşağıda yer alıyor.',

    // helpers
    free: 'Ücretsiz',
    basic: 'Temel',
    annuallyBasic: 'Yıllık Temel',
    retableFast: "Retable'ın ne kadar hızlı olduğunu görmek isteyenler",
    monthUser: 'ay/kullanıcı',
    unlimitedCollaborators: 'Sınırsız Ortak Çalışan',
    collaborators: 'Ortak Çalışan',
    collabrativePerWorkspace: 'Collabrative per workspace',
    publicForms: 'Genel Formlar',
    publicViews: 'Genel Görünümler',
    pro: 'Pro',
    annuallyPro: 'Yıllık Pro',
    enterprise: 'Enterprise',
    bussinessBasic: 'İşletme Temel',
    bussinessPro: 'İşletme Pro',
    bussinessEnterprise: 'İşletme Limitsiz',
    team: 'Takım',
    bussinessAnnuallyBasic: 'İşletme Yıllık Temel',
    bussinessAnnuallyPro: 'İşletme Yıllık Pro',
    bussinessAnnuallyEnterprise: 'İşletme Yıllık Enterprise',
    anyoneUsemore: 'Daha fazla kullanmak isteyenler',
    unlimited: 'Sınırsız',
    prioritySupport: 'Öncelikli Destek',
    whowants: 'Kim verilerini bulut veya sunucularında bulundurmak ister',
    everythingPro: '"Pro" Plandaki her şey',
    customContact: 'Özel İletişim',
    paymentOptions: 'Esnek ödeme seçenekleri',
    number: 'Sayı',
    checkbox: 'Onay',
    image: 'Görüntü',
    'select(options)': 'Seçme',
    geolocation: 'Coğrafi Konum',
    attachment: 'Ek',
    calendar: 'Tarih&Saat',
    color: 'Renk',
    email: 'E-posta',
    workEmail: 'İş e-postası',
    autonumber: 'Otomatik Numara',
    phonenumber: 'Telefon Numarası',
    percent: 'Yüzde',
    referenceanothertable: 'Başka Bir Tabloya Başvuru',
    lastmodifiedtime: 'Son Güncellenme Tarihi',
    lastmodifiedby: 'Son Güncelleme Yapan Kişi',
    createdtime: 'Oluşturulma Tarihi',
    createdby: 'Oluşturan Kişi',
    viaEmail: 'E-posta yoluyla',
    currency: 'Para Birimi',
    rating: 'Değerlendirme',
    lookup: 'Ara',
    rollup: 'Toparlama',
    uuid: 'Benzersiz Tanımlayıcı',
    qrcode: 'QR Kod',
    gpt: 'GPT',
    last100Actions: 'Son 100 aksiyon',
    '3Owner': '3 Owner',

    // RetableSearchInput
    searchInWorkspace: 'Çalışma Alanı veya Projelerin içinde ara',
    searchInTemplates: 'Şablonların içinde ara',
    searchInProjectShare: 'Proje Üyeleri içinde ara',
    searchInWorkspaceShare: 'Çalışma Alanı Üyeleri içinde ara',
    searchACity: 'Şehir ara',

    // MainFooter
    version: 'Versiyon',

    // Templates
    Templates: 'Şablonlar',
    templateNotfound: 'Şablon bulunamadı!',
    templateArchive: '<p1>Şablon Arşivine</p1> <p2>Hoşgeldiniz</p2>',
    useIt: 'Kullan',

    //Retable
    welcomeProj: 'İlk müthiş projenize hoş geldiniz. 👋',
    projSet: 'Proje ayarlarınızı buradan değiştirebilirsiniz 👆',
    navigateProj: 'Projelerinizde buradan gezinebilirsiniz. ⛵',
    tableOptions: 'Tablo işlemlerinizi buradan yapabilirsiniz.',
    snapshotStep: 'Tablonuzun anlık görüntüsünü alabilirsiniz.',
    enjoyRetable: "Retable'ınızı kullanmanın keyfini çıkarın. 😍",
    haveMsg: 'Yeni bir mesajınız var',
    nMsg: 'Yeni Mesaj',
    extensionRowLimitationWarning:
      'Yalnızca 1000 satır ekleyebilirsiniz, daha fazla satır ekleyebilmek için kaydolmanız gerekmektedir.',
    extensionFirstRowInfo: 'İlk satır başlık olarak ayarlansın mı?',
    extensionFirstRowInfoDesc:
      'Bu eylemi daha sonra ilk satıra sağ tıklayıp "Başlık olarak ayarla" alanını seçerek de ayarlayabilirsiniz.',

    //Account
    api: 'API',
    apiKey: 'API Anahtarı',
    accountOverview: 'Hesaba Genel Bakış',
    enaa: 'Etkinleştirilmiş',
    diss: 'Devre Dışı',
    staa: 'Durum',
    updateUsername: 'Kullanıcı adınızı güncelleyin ve hesabınızı yönetin',
    profile: 'Profil',
    password: 'Şifre',
    password2: 'Parola',
    audit: 'Denetim',
    subscription: 'Abonelik',
    teams: 'Takımlar',
    organizations: 'Organizasyonlar',
    organization: 'Organizasyon',
    visit: 'Ziyaret et',
    docss: 'Dokümantasyon',
    showw: 'Göster',
    personal: 'Kişisel',
    bussiness: 'İşletme',
    settings: 'Ayarlar',
    createNewApi: 'Yeni API oluştur',
    deleteKeyWarning: 'Bu anahtarı silmek üzeresiniz.',

    // saga swall
    invSent: '👋 Zaten bir davetiye 📧 e-postası gönderdik. 👍',
    justNow: 'Şu anda',
    okswal: 'Tamam',
    success: 'Başarılı',
    projDuplicatedName: 'proje adı ile yinelendi',
    tableDuplicatedName: 'tablo adı ile yinelendi',
    newColAdded: 'yeni kolon eklendi',
    importingData: 'Veriler İçe Aktarılıyor...',
    snapshotTaken: ' tarihinde anlık görüntünüz alındı.',
    snapshotReloaded: ' anlık görüntü yeniden yüklendi.',
    snapReTable: ' anlık görüntü yeni tablo olarak yüklendi.',
    tableRemoved: `Bu tabloyu çöp kutusundan geri yükleyebilirsiniz.`,
    viewRemove: `Bu görünümü çöp kutusundan geri yükleyebilirsiniz.`,
    tableLockedForOther:
      'Tablo diğerleri için kilitli, dikkatiniz dağılmadan tablonuzu düzenleyebilirsiniz.',
    passwordSent: '📩 Şifremi unuttum bağlantısını gönderdik',
    dontForCheck: '🧐 Spam/Önemsiz klasörünüzü kontrol etmeyi unutmayın.',
    invationSent: 'Davet gönderildi.',
    // eslint-disable-next-line max-len
    invitationResendSuccessfully: 'Davet başarıyla {inviteduserMail} adresine yeniden gönderildi.',
    accUpd: 'Hesabınız başarıyla güncellendi.',
    proRemoved: `Bu projeyi çöp kutusundan geri yükleyebilirsiniz.`,
    workRemoved: `Bu çalışma alanını çöp kutusundan geri yükleyebilirsiniz.`,
    somethingWrongInvitation: 'Davetiye gönderirken bazı sorunlar oluştu. \n',
    alreadyInAnOrg: 'Kullanıcılar zaten başka bir organizasyonda',
    alreadyInTheOrg: 'Kullanıcılar zaten bu organizasyonda',
    youAreAlreadyInOrg: 'Zaten bir organizasyona dahilsin.',
    errorWhenCreatingInvitation: 'Davetiyeler oluşturulurken bir hata oluştu',
    hasAnUnusedInvitation: 'Kullanıcıların kullanılmayan davetiyeleri var',
    userNotFound: 'Kullanıcılar mevcut değil',
    orgInviteBadRequest:
      'Zaten bir organizasyonda yer alıyorsunuz. Tekrar bir organizasyona dahil olamazsınız.',
    goToOrganization: 'Organizasyona git',
    maxFileSizeToUpload:
      // eslint-disable-next-line max-len
      "Dosyalarınız çok güçlü. 10 MB'tan büyük yükleme yapmak istiyorsanız bizimle iletişime geçmeniz daha iyi olabilir.",

    contSs: 'Daha fazla ekran görüntüsü oluşturamazsınız. ',
    upgradeForSs:
      'Hesabınızı yeni bir anlık görüntü için yükseltin veya varolan bir anlık' +
      ' görüntünün üzerine yazın. ',
    clickYes: "Bu sürümün üzerine yazmak istiyorsanız Evet'i, ",
    clickNo: "varolan sürümü korumak istiyorsanız Hayır'ı tıklatın.",
    no: 'Hayır',
    yes: 'Evet',
    tableNotExists: 'Aradığınız tablo mevcut değil.',
    invitationAlreadyUsed: 'Davetiye zaten kullanılmış.',
    pjExportSheetNameError:
      'Bazı uyumsuz sorunlar var. ' +
      'Retable isimleri aşağıdaki kurallara göre değiştirilecektir.\n\n' +
      '*Retable isimleri 31 karakterden fazla olamaz.\n' +
      '*Retable isimleri içerisinde bazı özel karakterleri içermemelidir. ' +
      '(\\ , / , * , ? , : , [ , ])',
    pjExportProjectNameError:
      'Bazı uyumsuz sorunlar var. ' +
      'Proje ismi aşağıdaki kurallara göre değiştirilecektir.\n\n' +
      '*Proje ismi içerisinde bazı özel karakterleri içermemelidir. ' +
      '(\\ , / , * , ? , : , [ , ])',
    pjExportProjectAndSheetNameError:
      'Bazı uyumsuz sorunlar var. ' +
      'Proje ismi aşağıdaki (!) kurallara göre değiştirilecektir. ' +
      'Retable isimleri aşağıdaki (*) kurallara göre değiştirilecektir.\n\n' +
      '*Retable isimleri 31 karakterden fazla olamaz.\n' +
      '*!Proje ya da Retable isimleri içerisinde bazı özel karakterleri içermemelidir. ' +
      '(\\ , / , * , ? , : , [ , ])',
    retableExportNameError:
      'Bazı uyumsuz sorunlar var. ' +
      'Dosya ismi aşağıdaki kurallara göre değiştirilecektir.\n\n' +
      '*Retable ismi içerisinde bazı özel karakterleri içermemelidir. ' +
      '(\\ , / , * , ? , :)',
    unregisteredMail: 'Kayıtlı olmayan E-postalar',
    info: 'Bilgilendirme',
    recaptchaErrorMessage:
      'Doğrulama sırasında bir hata oluştu. Sayfayı yenileyin veya bize bildirin.',

    // profile
    uploadPic: 'Profil resmi yükle',
    enterName: 'İsim Girin',
    surname: 'Soyad',
    enterSurname: 'Soyadı Girin',
    enterEmail2: 'E-posta Girin',
    saveProfile: 'Profili kaydet',
    nameIsRequired: 'İsim boş bırakılamaz.',
    needPassword:
      // eslint-disable-next-line max-len
      'Email değiştirebilmek için öncelikle <p1>Retable parolanızı oluşturma</p1>nız gerekiyor.',
    emailAlreadyInUse: 'zaten başka bir hesapta kullanılıyor.',
    incorrectPassword: 'Hatalı parola',

    //password
    currentPassword: 'Mevcut parola',
    newPassword: 'Yeni parola',
    passwordAgain: 'Yeni parolayı onayla',
    changePassword: 'Parolayı değiştir',

    // Audit
    activity: 'Aktivite',
    date: 'Tarih',

    // subscription
    credit: 'Kredi: ',
    earnMore: 'Daha fazla kredi edinin!',
    currentPlan2: 'Mevcut Plan: ',
    status: 'Durum: ',
    manageSubscription: 'Aboneliğinizi yönetme',
    proAccount: 'Hesabınız {path} plandadır.',
    renewPlan: "Planınız {path}'te {path2}'a yenilenecek.",
    endPlan: "Planınız {path}'te bitecek",
    carbonRemoval: 'Yeni nesil karbon giderimini finanse etmek için {path}',
    contribute: "alımların %1'ini katkıda bulunuyoruz",
    active: 'Etkin',
    pastDue: 'Gecikmiş',
    canceled: 'İptal edildi',
    paused: 'Duraklatıldı',
    incomplete: 'Tamamlanmamış',
    yourAreUsingThisPlan: 'Bu planı kullanıyorsunuz.',
    chooseoneplan: '<p1>Bir</p1><p2> Plan Seçin</p2>',
    useFreeTrial: 'Ücretsiz Deneme',
    useFreeTrialDesc: 'Ücretsiz Deneme süresince bir abonelik başlatabilirsiniz.',
    freeTrial: 'Ücretsiz Deneme',
    trialEndDate: 'Deneme bitiş tarihi',
    remainingTrialDays: 'Kalan ücretsiz gün(ler)',
    subscriptionEndDate: 'Abonelik bitiş tarihi',
    nextBillingDate: 'Sıradaki ödeme tarihi',
    resumesAt: 'Devam etme tarihi',
    period: 'Periyot',
    totalSeat: 'Toplam alan',
    activeSeat: 'Aktif alan',
    seat: 'Alan',

    // filters
    contains: 'içeriyor',
    donotContain: 'içerir değildir',
    iss: '=',
    issnot: '≠',
    isemptyy: 'boş',
    issnotempty: 'boş değil',
    between: 'arasında',
    difference: 'fark',
    doesnotContain: 'içermiyor',
    isFilter: '=',
    isNot: '≠',
    isEmptyFilter: 'boş',
    isnotEmptyFilter: 'boş değil',
    is: '=',
    isNot2: '≠',
    isBefore: 'önce',
    isAfter: 'sonra',
    notauth: 'yetkili olmayan',
    form: 'Form',
    otherusers: 'Diğer Kullanıcılar',

    // autommations
    sendMail: 'E-posta gönder',
    wRowAdded: 'Satır eklendiğinde',
    wRowDeleted: 'Satır silindiğinde',
    wCellUpdated: 'Hücre güncellendiğinde',
    wFormSubmited: 'Form gönderildiğinde',
    atSchTime: 'Planlanan zamanda',
    sendRecords: 'Kayıtları gönder',
    selectToField: '"Kime" alanını seçin.',

    // datavalidation
    minvalue: 'Minimum karakter:',
    maxvalue: 'Maksimum karakter:',

    //RetableTableReferenceModal
    selectedVal: 'Seçilen değer(ler)',
    selectableVal: 'Seçilebilir değer(ler)',

    // Faq
    pricing: 'Fiyat',
    faq: 'SSS (Sıkça Sorulan Sorular)',
    signIn: 'Giriş Yap',
    signUpFree: 'Ücretsiz Kaydol',

    orchestratePowerful: 'Tek bir doğruluk kaynağıyla güçlü iş çözümleri düzenleyin.',
    limitImagination: 'Tek sınır hayal gücünüz.',
    whatisRetable: 'Retable nedir?',
    det: 'Detaylar',
    retableMean:
      'Retable, çevrimiçi organizasyon ve işbirliği aracı olarak kullanılan basitleştirilmiş' +
      ' bir elektronik tablo ve veritabanı hibrit yazılım programıdır. Küçük ve büyük' +
      ' işletmeler,' +
      " STK'lar ve işbirlikçi çalışma uygulamalarına dayanan diğer tüm kuruluşlar için uygundur.",

    whyRetable: "Neden ben / şirketim Retable'ı tercih etmeliyim?",
    whyAnswer:
      'Retable, bilinen elektronik tablo biçimini veritabanlarının gücüyle birleştirerek' +
      ' ekiplerin kullanmayı sevdiği çok kullanışlı bir çözüm oluşturur. Kullanımı kolaydır ve' +
      ' teknik deneyim gerektirmez. Son derece özelleştirilebilir ve tek bir kuruluş içindeki' +
      ' bireysel kuruluşların ve hatta farklı projelerin ihtiyaçlarını karşılayacak şekilde' +
      ' uyarlanabilir.',
    whatAdvantages: 'Retable kullanmanın avantajları nelerdir?',
    theAdvantages:
      'Retable, her türlü dağınık bilgiyi hızlı bir şekilde kaydetmenize ve yönetmenize olanak' +
      ' tanır ve kullanıcılara sağladığı en önemli avantajlardan biri, büyük miktarda' +
      ' zamandan tasarruf edilmesidir. Birçok farklı olanağı vardır ve web tabanlı bir çözüm' +
      ' olarak yazılım, iş verimliliğini ve işbirliği fırsatlarını artırmak için daha da fazla' +
      ' özellikle düzenli olarak güncellenir.',

    workMultipleExcel:
      'Retable, aynı anda birden çok excel ve elektronik tablo dosyası üzerinde çalışmanıza' +
      ' olanak tanır.',
    dataEasy: 'Veri manipülasyonu hızlı ve kolaydır.',
    adaptableSpecific: 'Belirli bir projenin ihtiyaçlarını karşılamak için uyarlanabilir.',
    differentViews:
      'Farklı görünümler, bileşenleri karıştırmanıza ve eşleştirmenize olanak' + ' tanır.',
    elegantInterface: 'Zarif görsel kullanıcı arayüzü.',
    multiUserTime:
      'Aynı anda birden fazla kullanıcı, gerçek zamanlı olarak Retable üzerinde sorunsuz bir' +
      ' şekilde çalışır.',
    userAuthorize: 'Kullanıcı hücre bazında erişim yetkisi verebilir.',
    increasedSecurity:
      'Artırılmış güvenlik – Sistem, kullanıcılar tarafından belirlenen kolonlarda veri' +
      ' maskeleme gerçekleştirir.',
    editSpreadSheets:
      'Elektronik tabloları ve verileri iş ekibiyle düzenleyin, yönetin ve paylaşın. Kod' +
      ' gerekmez.',
    storeReocrds: 'Kayıtları saklayın ve her şeyi çok düzenli tutun.',
    preformsImEx:
      'İthalat ve ihracat işlemlerini verimli bir şekilde gerçekleştirir. Kullanıcılar dosyayı' +
      ' istenen biçimde dışa aktarabilir.',
    saveTime: 'Kural tabanlı veri onay akışlarıyla zamandan tasarruf edin.',
    snapshotHis: 'Retable, tüm değişiklikleri izlemek için anlık görüntü geçmişine sahiptir.',
    chatWithOthers: 'Diğer proje üyeleriyle sohbet edin.',
    providesSimplifiedExcel:
      'Teknolojiyi kullanma becerisi olmayanlar için basitleştirilmiş excel/veri/tablo' +
      ' yönetimi sağlar',

    incorporateRetable: "Retable'ı işime nasıl dahil edebilirim?",
    incorporateDes:
      "Retable'ın tüm özelliklerini anlamanın en iyi yolu, ücretsiz sürümü kullanmaya" +
      ' başlamaktır. Retable ile çalışmaya başladığınızda, parmaklarınızın ucunda sonsuz' +
      ' yetenekleri görmeye başlayacaksınız. Hiçbir eğitim gerektirmeyen ve kolay bir kurulum' +
      ' süreci ile ekibiniz, çalışma şeklinizde devrim yaratacak bir yazılım çözümünü kullanmaya' +
      ' hızla başlayabilir.',
    isFree: "Retable'ı kullanmak ücretsiz mi?",
    yesFree: 'Evet, ücretsizdir. Yakın gelecekte bazı ek abonelik modelleri mevcut olacaktır',
    whatWorkspace: 'Çalışma Alanı nedir?',
    workspaceDes:
      'Çalışma Alanı, ilgili Projeye sahip bir alandır. Her Proje benzersiz bir' +
      ' alana odaklanmış olsa da, bir dizi Proje benzer iş-operasyonel kategorilere ayrılabilir.' +
      ' Projeleri sınıflandırmak ve birleştirmek için kullanılır. Çalışma alanını, birlikte' +
      ' çalışan bir grup insan arasında paylaşılan projeler ve tablolar topluluğu olarak' +
      ' düşünebilirsiniz',

    whatProj: 'Proje Nedir?',
    projDes:
      'Projeler bir elektronik tablo gibidir ve çok sayıda Tablo içerebilir. Her Proje' +
      ' benzersiz olmalı, tek bir anahtar alana odaklanmalı ve bu anahtar alanla ilgili sahip' +
      ' olduğu tüm bilgileri içermelidir.',
    canCopyPaste:
      'Farklı çalışma alanlarından/projelerden tabloları kopyalayıp yapıştırabilir miyim?',
    copyPatseDes: 'Tablolarınızı aynı Çalışma Alanı içinde başka bir projeye taşıyabilirsiniz.',
    canShare: 'Çalışmalarımı Retable hesabı olmayan iş arkadaşlarımla paylaşabilir miyim?',
    shareDes:
      'Evet, Retable hesabı olsun ya da olmasın çalışma arkadaşlarınızla e-posta yoluyla' +
      ' çalışmalarınızı paylaşabilirsiniz.',
    shareOptions: 'Paylaşım seçenekleri nelerdir?',
    shareOptionsare: 'Paylaşım seçenekleri:',
    shareDes1:
      'Web sitesindeki "Şununla paylaş..." seçeneğine tıklayarak Çalışma Alanı, Proje veya' +
      ' Tabloları Paylaşma.',
    shareDes2: 'Verileri postaya kopyala/yapıştır yoluyla paylaşma.',
    handleUsers:
      'Çok kullanıcılı aynı tablo/proje/çalışma alanını düzenlerken Retable nasıl işliyor?',
    handleUserstext:
      'Çok kullanıcılı veri düzenleme, birden çok kullanıcının aynı WS, Proje veya Tabloyu' +
      ' aynı anda düzenlemesine olanak tanır.',
    handleUserDes:
      'Birden çok kullanıcı aynı bileşeni aynı anda düzenlerken, kullanıcıların ilk harfleri' +
      ' her iki ekranın sağ üst köşesinde gösterilir.' +
      ' Paylaşılan WS, Proje veya Tabloyu kim açarsa, paylaşılan tüm kullanıcıların ilk' +
      ' harfleri ekranın sağ üst köşesinde gösterilir.' +
      ' Bir kullanıcı hücreleri düzenledikten sonra hücreden çıktığında, diğer kullanıcı(lar)' +
      ' düzenlemeden sonra tüm değişiklikleri görebilir',

    whatAttachmetTab: 'Her tablo için ek dosya boyutu sınırı nedir?',
    attachmetTabDes: "Ek dosya boyutu sınırı hücre başına 2 GB'dir.",
    rowColLimit: 'Tablo başına satır/sütun sınırı nedir?',
    limitsDes: `Tablo başına limitler; 
    satır: 2.000 
    kolon: 50`,
    webSupported: 'Hangi web tarayıcıları destekleniyor?',
    websDes: 'Google Chrome, Edge, Safari, Opera ve Firefox, Retable tarafından desteklenmektedir.',
    canChat: 'Bir Çalışma Alanındayken veya Projedeyken meslektaşlarımla sohbet edebilir miyim?',
    canChatDes:
      'Üzerinde herhangi bir paylaşım hakkı olan kullanıcılar için her Projenin altında temel' +
      ' yorum / sohbet mevcuttur.',

    // landing
    retableDes:
      'Elektronik tablolardaki gibi verileri kolayca düzenleyin, görüntüleyin, paylaşın ve' +
      ' düzenleyin...',
    getStartedFree: 'Ücretsiz başlayın',
    whatRetable: 'Retable nedir?',
    retableWork:
      'Retable, çevrimiçi bir hibrit elektronik tablodur ve veri tabanı yazılımı, veri' +
      ' organizasyonu ve işbirliği aracı olarak kullanılabilir.',
    retableWork2:
      "Küçük ve büyük işletmeler, STK'lar (Sivil Toplum Kuruluşu) ve işbirliğine" +
      ' dayalı çalışma uygulamalarına dayanan diğer tüm kuruluşlar için uygundur.',
    noLimitsData: 'Sınır Tanımayan Veri Organizasyonu.',
    organizeData: '{path} Alanlarıyla düzenleyin ve paylaşın.',
    easyTables: 'Proje, tablolarda renklerle gezinmek kolaydır. Daha fazla klasör yok...',
    dataSafe: 'Verileriniz büyük bir değişiklik geçmişi ile güvenli ve emniyetlidir',
    storedActions: 'Her kayıt, yorumlarla birlikte değişiklik geçmişiyle birlikte saklanır.',
    easyTables: 'Bir tablo oluşturmak, aşağıdaki gibi bir tık uzaklıktadır.',
    sales: 'Satış',
    salesPipeline: 'Satış Öngörüleri Planı',
    salesAssets: 'Satış Varlıkları Takibi',
    businessDevelopment: 'İş Geliştirme',
    creativeTeams: 'Yaratıcı Ekipler',
    designProjPipeline: 'Tasarım Projesi Stoğu',
    visualInspirations: 'Görsel İlhamlar',
    artGallery: 'Sanat Galerisi Yönetimi',
    marketing: 'Pazarlama',
    socialMedia: 'Sosyal Medya Takvimleri',
    contentMarketing: 'İçerik Pazarlama',
    management: 'Yönetmek',
    emailMarketing: 'Eposta Pazarlama',

    humanResources: 'İnsan Kaynakları',
    recruitmentTracking: 'İşe Alım Takibi',
    employeeSurveys: 'Çalışan Bağlılığı Anketleri',
    interviewQuestions: 'Mülakat Soruları',

    projectManagement: 'Proje Yönetimi',
    projectTracker: 'Proje İzleyici',
    contractorTime: 'Yüklenici Zaman Takibi',
    projectPipeline: 'Hazırdaki Projeler / Proje Stoğu',

    retableforSpin: 'Bir dönüş için Retable alın.',
    freeRetable: 'Retable, her büyüklükteki takımlar için ücretsiz olarak kullanılabilir.',

    product: 'Ürün',
    termsService: 'Hizmet Şartları',
    privacyPolicy: 'Gizlilik Politikası',
    airtableAlternative: 'Airtable Alternatif',
    googleSheetsAlternative: 'Google E-Tablolar Alternatifi',

    company: 'Şirket',
    blog: 'Blog',
    reachUs: 'Bize ulaşın',

    //Pricing.js
    plansPricing: 'Planlar & Fiyatlandırma',
    retableFreeuse: "Retable'ın kullanımı ücretsizdir.",
    contributePurchases:
      "Yeni nesil karbon giderimini finanse etmek için alımların %1'ini katkıda bulunuyoruz",
    twoMonths: '2 Ay',
    oneYear: '1 Yıl',

    //login
    login: 'Oturum aç',
    signinGoogle: 'Google ile oturum açın',
    signInLinkedIn: 'LinkedIn ile oturum açın',
    forgotPassword: 'Şifremi Unuttum',
    dontHaveAccount: 'Bir hesabınız yok mu?',
    emailCanotEmpty: 'E-posta boş olamaz.',
    passwordCanotEmpty: 'Şifre boş olamaz.',
    invalidPassword: 'Geçersiz Şifre',
    passwordValid: 'Şifreniz en az 8 karakter içermelidir.',
    enterPassword: 'Şifrenizi giriniz',
    enterYourEmail: 'E-postanızı giriniz',
    start: 'Başla',
    sign: 'Giriş',
    in: 'Yap',
    forgotPass1: 'Şifremi',
    forgotPass2: 'unuttum',
    rememberMe: '30 gün boyunca beni hatırla',

    // forgetpassword
    resetPass:
      'E-posta adresinizi girin ve şifrenizi sıfırlamak için size bir bağlantı gönderelim.',
    back: 'Geri',

    // signup
    nameContempty: 'Ad boş olamaz',
    lastnameContEmpty: 'Soyadı boş bırakılamaz',
    passVal: 'Şifreniz en az 8 karakter olmalıdır',
    firstName: 'Ad',
    lastName: 'Soyad',
    createPassword: 'Parola oluştur',
    signupGoogle: 'Google ile kaydolun',
    signUpLinkedIn: 'LinkedIn ile kaydolun',
    alreadyhaveAccount: 'Zaten bir hesabınız var mı?',
    signUpFree1: 'Ücretsiz',
    signUpFree2: 'kaydol',
    unregisteredUser: 'E-posta kayıtlı değil.',
    worngLoginPass: 'Yanlış şifre',
    goRegister: 'Git kayıt ol',
    errorEmailContainsRetable:
      'Retable alan adı kullanılamaz, farklı bir alan adı kullanabilirsiniz.',

    //Appsumo Signup
    activeYourAccount1: 'Hesabınızı',
    activeYourAccount2: 'aktif edin',

    //thankyou
    thankYou: " Retable'a kaydolduğunuz için teşekkür ederiz. 🎉",
    canSignin: 'Şimdi {path}',
    signIn3: 'oturum açabilirsiniz.',
    alsoVerify: 'Ayrıca tüm özellikleri kullanmak için e-postanızı doğrulayın.',
    dontForget: '(Spam/önemsiz klasörlerini kontrol etmeyi unutmayın.)',
    confirmationSent: 'Bir doğrulama epostası gönderildi.',

    // retableWorkspacebody
    noProjectAtAll:
      'Bu çalışma alanında proje yok, eklemek için "Yeni proje ekle" düğmesini kullanın.',

    //jexcel
    minimumkarakter: 'Minimum karakter:',
    maksimumkarakter: 'Maksimum karakter:',
    customizeColumn: 'Kolonu özelleştir',
    splitColumnData: 'Kolonu verilerini böl',
    insertColumnBef: 'Önüne yeni bir kolon ekle',
    insertColumnAft: 'Sonrasına yeni bir kolon ekle',
    duplicatCell: 'Hücreyi yinelen',
    duplicateColumn: 'Kolonu yinele',
    deleteColumn: 'Kolonu sil',
    deleteSelected: 'Seçili kolonları sil',
    askToUpdate: 'Güncelleme iste',
    copy2: 'Kopyala',
    cut: 'Kes',
    paste: 'Yapıştır',
    sendAsEmail: 'E-posta olarak gönder',
    saveAs: '.csv olarak kaydet',
    validationError: 'Doğrulama Hatası',
    checkType:
      'Ayrıntılar için lütfen hücrelerdeki hata bildirimlerini denetleyin veya kolon' +
      ' özelliklerini doğrulama ölçütleriyle eşleşecek şekilde özelleştirin',

    requiredField: 'Gerekli Alan',
    fillCell: 'Lütfen hücreyi doldurun.',
    fillField: 'Lütfen bu alanı doldurun',
    uniqueColumn: 'Benzersiz Kolon',
    valuesUniq: 'Bu kolondaki her değer benzersiz olmalıdır. ',
    valuesUniqDes: ' den fazla aynı değere sahip hücre(ler) var.',
    typeError: 'Tip Hatası',
    contentWrong: 'İçerik veya değer, bu hücrenin kolon türüyle eşleşmiyor.',
    followRules: 'Değer şu kural(lar)a uymalıdır:',

    noRecords: 'kayıt bulunamadı',
    show: 'Göster ',
    entries: ' girdileri',
    columnName: 'Kolon adı',
    renameColumn: 'Bu kolonu yeniden adlandır',
    rowBefore: 'Önüne yeni bir satır ekle',
    rowAfter: 'Sonrasına yeni bir satır ekle',
    duplicateRow: 'Satırı yinele',
    deleteSelRows: 'Seçili satırları sil',
    clearSelCells: 'Seçili hücreleri temizle',
    editComments: 'Yorumları düzenle',
    addComments: 'Yorum ekle',
    clearComments: 'Yorumları temizle',
    sureDelRow: 'Seçili satırları silmek istediğinizden emin misiniz?',
    sureDelCol: 'Seçili kolonları silmek istediğinizden emin misiniz?',
    destroyCell: 'Bu eylem, mevcut birleştirilmiş hücreleri yok edecektir. Emin misin?',
    clearSearch: 'Bu işlem, arama sonuçlarınızı temizleyecektir. Emin misin?',
    confCell: 'Başka bir birleştirilmiş hücreyle çakışma var',
    invalidMerge: 'Geçersiz birleştirilmiş mülkler',
    cellMerged: 'Hücre zaten birleştirildi',
    noSelected: 'Hiçbir hücre seçilmedi',
    valueInvalid: 'Belirtilen kural(lar)a göre hücrenin değeri geçerli değil.',
    search: 'Ara',
    dragDes: 'Donmuş kolon sayısını ayarlamak için sürükleyin',
    emptyRow: 'Boş hücre',
    noDeleteLastCol: 'Son kolunu silmek mümkün değildir.',
    leastRow: 'Tablo en az bir satır olmalıdır.',
    leastCol: 'Tablo en az bir kolon olmalıdır.',
    setAsHeader: 'Başlık olarak ayarla',

    //Retable Create Project Modal
    getUpAndRunningFast: 'Ayağa kalk ve hızlı koş!',
    startScratchDescription: 'Özel tablolar ve görünümler ile yeni bir boş taban oluşturun.',
    importProjectDescription:
      'Retable projenizi oluşturmak için bir CSV, XLS veya Retable dosyasını içe aktarın.',
    startTemplateDescription: 'Bir şablon seçerek başlayın ve ilerledikçe özelleştirin.',
    backToTheRetable: "Retable'a geri dön",

    // projects
    shareMe: 'Benimle paylaşılan projeler',
    externallySavedProjects: 'Harici kaydedilen projeler',

    //Retable Chart View
    line: 'Çizgi',
    bar: 'Çubuk',
    pie: 'Pasta',
    area: 'Alan',
    'x-axis': 'X-ekseni',
    'y-axis': 'Y-ekseni',
    categoriesField: 'Kategoriler alanı',
    values: 'Değerler',
    retableView: 'Retable Görünümü',
    chartView: 'Grafik Görünümü',

    //Retable X Axis Menu
    pickColumn: 'Bir kolon seçin',

    //Retable Y Axis Menu
    count2: 'Sayı',
    field: 'Alan',
    sum2: 'Toplam',
    min2: 'Min',
    max3: 'Maks',
    avg2: 'Ort',
    addValue: 'Değer ekle',
    changeColor: 'Renk değiştir',
    // datavalidation
    minCha: 'Minimum karakter:',
    maxCha: 'Maksimum karakter:',
    regexx: 'Regex:',
    minVal: 'Minimum değer:',
    maxVal: 'Maksimum değer:',

    // retableAutomationFindValue
    operator2: 'Operatör:',
    noCond: 'Hiçbir koşul bulunamadı.',
    addCon: 'Koşul ekle',
    addAnoCon: 'Başka Bir Koşul Ekle',

    // password
    passReq: 'Parola gereksinimlerini karşılamıyor!',
    typePas: 'Mevcut parolanızı yazmalısınız.',
    typeNewPas: 'Yeni Parola',
    typeNewPascheck: 'Yeni Parola yazmalısınız.',
    typeNewPasAgain: 'Yeni parolanızı tekrar yazmalısınız.',
    passNoMatch: 'Yeni parolalar uyuşmuyor.',
    passDif: 'Yeni Parola ile farklı olmalıdır.',
    passDes: 'Şifre en az 8 karakter, 1 sayı, 1 büyük ve 1 küçük harf içermelidir.',

    //Whats New
    whatsNew: 'Yenilikler',
    newsNotFound: 'Yenilikler bulunamadı.',
    searchInNews: 'Yeniliklerde ara',
    learnMore: 'Daha fazla öğren',
    howToUse: 'Nasıl kullanılır?',
    backList: 'Listeye geri dön',

    // payment
    paymentProblem: '🧐 Ödemenizde bir sorun var gibi görünüyor.',
    goToPayment: 'Abonelik ve Ödemeler alanına gidin.',
    checking: 'Kontrol ediliyor...',
    upgradeForFreeTitle: 'Şimdi Hesabınızı Ücretsiz Yükseltin!',
    tryChoosenPlan: 'Seçilen plan ile ücretsiz şekilde devam etmek istiyor musunuz?',
    nowYourPlanIsPro: '7 günlük Retable PRO planın tadını çıkartabilirsin!',

    // retableinviteEarnAlert
    zerocred: '$0 krediniz var.',
    ifInvite: '{path} hemen şimdi davet ederseniz',
    earn5: '$3 kazanabilirsiniz!',
    andEarn: 've $3 kredi kazanın!',
    inviteFf: 'Arkadaşlarınızı davet edin',
    freinds: 'Arkadaşlarınızı ve iş arkadaşlarınızı',

    // Retableexporttablemodal
    exportas: 'Dışa Aktar',
    exportFormat: 'Dışa Aktarma Formatı',

    // RetableChart
    xAxix: 'Lütfen X ekseninden bir kolon seçin. 📈',
    changeAxix:
      'Grafiğinizi özelleştirmek istiyorsanız, Y eksenindeki değerleri' +
      ' değiştirin veya grafik türünü değiştirin. 🥧',
    selectCate: 'Lütfen Kategoriler alanından bir kolon seçin. 📈',
    custChart:
      'Grafiğinizi özelleştirmek istiyorsanız değerleri değiştirin' +
      ' veya grafik türünü değiştirin. 🥧',
    exCharts: 'Aşağıda örnek çizelgeleri görebilirsiniz.',

    // Retable List View
    warningDeleteLastRow: 'Son satırı silemezsiniz.',
    warningDeleteLastColumn: 'Tablonun en az bir kolonu olmalı.',

    //Retable List View Toolbar
    customizeList: 'Listeyi Özelleştir',
    customize: 'Özelleştir',
    changeViewType: 'Görünüm tipini değiştir',

    //Retable Loading
    loading: 'Yükleniyor...',
    pleaseWait: 'Lütfen bekleyin...',

    //Verify
    go: 'Git',
    verifying: 'Doğrulanıyor',
    successVerify: 'Başarıyla doğrulandı. Şimdi giriş yapabilirsiniz.',
    failureVerify: 'Doğrulanmamış veya zaten doğrulanmış token. Lütfen ana sayfaya gidin.',
    notVerify:
      'Üzgünüz, e-posta adresinizi doğrulumanız gerekiyor.(Spam/Çöp klasörlerini kontrol etmeyi unutmayın 👍)',
    //RetableCreateNew
    newWorkspace: 'Yeni Çalışma Alanı',
    getUp: 'Kalk ve hızlı koş!',
    buildNow: 'Şimdi Oluştur',
    building: 'Oluşturuluyor',
    importDocument: 'Belge içe aktar',
    slct: 'Seç',
    selected: 'Seçildi',
    workspaceNameTitle: 'Çalışma Alanı Adı',
    workspaceDescTitle: 'Çalışma Alanı Açıklaması',
    wsNameCantEmpty: 'Çalışma alanı adı boş olamaz.',
    pjOptionCantEmpty: 'Yukaridaki proje oluşturma türlerinden birini seçmeniz gerekiyor.',
    letsFindFile: '<p1>Hadi </p1><p2>dosyayı bulalım</p2>',
    justImport: 'Sadece ".csv", ".xls(x)" veya ".retable" dosyalarını içeriye alabilirsiniz',
    dragHere: 'Buraya sürükle ya da dosya seç',
    change: 'Değiştir',
    importedFile: 'İçe aktarılmış dosya.',
    neWProject: 'Yeni proje',
    newWorkspaceDesc: `Çalışma alanı, projeleri sınıflandırmak ve birleştirmek için kullanılır.
    Bir çalışma alanını projeler topluluğu olarak ve
    bu projeleri içinde birlikte çalışan insanlar arasında paylaşılan 
    tablolar topluluğu olarak düşünün.`,
    newProjectDesc: `Her proje benzersiz olmalıdır,
    Tek bir özel alana odaklanın ve sahip olduğunuz tüm ilgili bilgileri bu alana aktarın.`,
    forUseInOrganization: 'Organizasyonda kullanım için',
    forPersonalUse: 'Kişisel kullanım için',
    typeProjectName: 'Proje adı yazın',
    typeProjectDescription: 'Proje açıklaması yazın',
    projectNameTitle: 'Proje Adı',
    projectDescTitle: 'Proje Açıklaması',
    pjNameCantEmpty: 'Proje adı boş olamaz.',

    //Team
    createTeam: 'Takım Oluştur',
    addTeam: 'Takım ekle',
    createOrganization: 'Organizasyon ekle',
    addOrganization: 'Organizasyon ekle',
    pressCreateTeam: '"Takım Oluştur" butonuna basarak yeni bir takım oluşturabilirsin.',
    teamName: 'Takım Adı',
    organizationName: 'Organizasyon adı',
    create: 'Oluştur',
    teamNameMustMin3Char: 'Takım adı en az 3 karakter olmalıdır.',
    organizationNameMustMin3Char: 'Organizasyon adı en az 3 karakter olmalıdır.',
    teamNameMustBeFilled: 'Takım adı doldurulmalı.',
    organizationNameCanNotBeEmpty: 'Organizasyon adı doldurulmalı.',
    errorOrganizationNameContainRetable:
      'Organizasyon adı “Retable” içeremez, farklı bir organizasyon adı kullanabilirsiniz.',
    addMember: 'Üye ekle',
    detail: 'Detay',
    renameTeam: 'Yeniden isimlendir',
    deleteTeamTitle: 'Emin misiniz?',
    deleteTeamText: 'Silinen takım bir daha geri alınamaz!',
    admin: 'Yönetici',
    creator: 'Yaratıcı',
    member: 'Üye',
    invited: 'Davetli',
    lead: 'Lider',
    deleteTeamMemberTitle: 'Emin misiniz?',
    deleteTeamMemberText: 'Üyeyi silmek üzeresiniz.',
    youCantRemoveMembers: 'Siz üyeleri silemezsiniz.',
    memberNotFound: 'Üye bulunamadı!',
    memberNotFoundWarning: 'Takıma eklemek için üye bulunamadı',

    // Brand
    brandTitleMustMin3Char: 'Marka başlığı minimum 3 karakter olmalıdır.',
    brandTitleCanNotBeEmpty: 'Marka başlığı boş olamaz.',
    brandIconSizeError: 'Marka ikonu 1MB ve altında dosya boyutuna sahip olmalıdır.',
    brandIconMustBeSquare: 'Marka ikonu kare çözünürlükte olmalıdır.',
    brandLogoSizeError: 'Marka logosu 1MB ve altında dosya boyutuna sahip olmalıdır.',
    brandWrongType: 'Hatalı dosya formatı.',
    brandReset: 'Sıfırla',
    brandResetWarning: 'Marka ayarlarınızı sıfırlamak üzeresiniz.',

    //RetableTeamMemberRole
    inactive: 'Pasif',
    inactiveDesc: 'Kullanıcı paylaşılan diğer takım içerisinde aktif izin sahibi.',

    //Organization
    removeMember: 'Üye silme',
    removeInvited: 'Davet edilen üye silme',
    removeMemberOrganization:
      'Bu işlem üyeyi organizasyondan silecek.' + 'İşleme devam etmek istediğine emin misin?',
    removeInvitedOrganization:
      'Bu işlem davet edilen üyeyi organizasyondan silecek.' +
      'İşleme devam etmek istediğine emin misin?',
    members: 'Üyeler',
    inviteds: 'Davetliler',
    accept: 'Kabul Et',
    reject: 'Reddet',
    invitationPlanCancellationMessage: `Hesabınızda zaten bir ödeme planı bulunuyor. 
      Eğer bu daveti kabul ederseniz ödeme planınız iptal olup, 
      organizasyon planı ile devam edeceksiniz. 
      Bu değişim çalışma alanı/proje/tablo kullanımını etkileyebilir. 
      Hala bu daveti kabul etmek istiyor musunuz?`,
    needBussinessPlanUpgrade: 'Bu işlemi gerçekleştirmek için İş Planı yükseltmesi gerekiyor.',
    deleteOrganizationMessage:
      'Organizasyon silinirse geri alınamaz. Bu işlemi yapmak istediğinize emin misiniz?',
    orgQuantityError:
      'Yeterli alan yok. Yeni kullanıcıları davet etmek için daha fazla alan satın almalısınız.',
    notEnoughSeatFreeUser:
      'Organizasyonda yeterli alan olmadığı için Ücretsiz plana düşürüldünüz. Lütfen organizasyon admini ile iletişime geçin.',
    notEnoughSeatAdmin: 'Yeterli alan olmadığı için bu kullanıcı Ücretsiz plana düşürüldü.',
    //RetableFormTableLockMessage
    goToDashboard: 'Anasayfaya Git',
    goToRetable: "Retable'a Git",
    formLockedMsg: 'Bu form kilitli. Düzenleme yapamazsınız.',
    formTableLockMsg: 'Merhaba 👋. Bu form kilitli.',

    //RetableFormViewEdit
    formSettings: 'Form Ayarları',
    extendedCoverImg: 'Genişletilmiş kapak resmi',
    sendResponse: 'Yanıtları gönder',
    sendResponseDescription:
      'Giriş yapıp formu dolduran kişiler, formlarının bir kopyasını e-posta ile alabilirler.',

    //RetablePlanCard
    collaboratorPerWorkspace: 'Çalışma alanı başına en fazla <p1></p1> kolaboratör',
    collaboratorPerWorkspacePro: 'Çalışma alanı başına <p1></p1> kolaboratör',
    workspaceLimit: '<p1></p1> çalışma alanı',
    projectLimit: 'Çalışma alanı başına <p1></p1> proje',
    projectLimitPro: 'Çalışma alanı başına <p1></p1> proje',
    tableLimit: 'Proje başına <p1></p1> tablo',
    recordsProject: 'Proje başına <p1></p1> kayıt',
    fileAttachmentProject: 'Proje başına <p1></p1> dosya alanı',
    changeHistoryFree: 'Geçmiş Eylem',
    changeHistory: '<p1></p1> Geçmiş Eylemi Değiştir',
    last10: 'Son 10',
    last100: 'Son 100',
    uptimeSLA: 'Hizmet Performansı: <p1></p1>',
    annually: 'Yıllık',
    monthly: 'Aylık',
    planFreeDesc: 'daha fazlasına ihtiyacın olmadan önce bizi dene',
    planBasicDesc: 'küçük takımlar için iyi',
    billedMonthly: 'aylık faturalandırılır',
    billedAnnually: 'yıllık faturalandırılır',
    numberOfSeats: '<p1></p1> kişilik',

    // RETABLE SHARE MODAL
    invNewCol: 'Yeni Ortak Çalışanları Davet Et',
    invAs: '... Olarak davet et',
    projLevCol: 'Proje Düzeyinde Ortak Çalışan',
    AllowOnProj: 'Yalnızca projeye erişime izin verin.',
    workspLevColl: 'Çalışma Alanı Düzeyinde Ortak Çalışan',
    AllowAccPrWor: 'Çalışma alanındaki tüm projelere erişime izin verin.',
    shareRecc: 'Kayıt(ları) paylaşın ve ekleyin',
    inviteMorCol: 'E-posta yoluyla daha fazla ortak çalışan davet edin',

    //RetableSpreadsheetHeader
    saveRetable: "Retable'ı Kaydet",
    needRegister: 'Kayıt olarak tabloyu ücretsiz kaydedebilirsiniz.',
    startNow: 'Şimdi Başla',
    needRegisterForShare: 'Kayıt olarak bu tabloyu paylaşabilirsiniz, kayıt olmak ücretsizdir.',

    // Calendar View
    chooseACalendarField: 'Bir tarih&saat kolonu seçiniz',
    yourRowsPlacedByThisField: 'Kayıtlarınız seçtiğiniz tarih&saat kolonuna göre görüntülenecek.',
    yourRowsPlacedByThisRange:
      'Kayıtlarınız tarih aralığı için seçtiğiniz kolonlara göre görüntülenecek.',
    createACalendarColumn:
      'Kayıtlarınızı takvimde görüntüleyebilmek için bir tarih&saat kolonu oluşturun.',
    createNewCalendarColumn: 'Yeni bir tarih&saat kolonu oluştur',
    usingCalendarColumn: 'Kullanılan tarih&saat kolonu',
    usingDateRange: 'Tarih aralığı kullanılıyor',
    setEndDate: 'Bir bitiş tarihi alanı belirle',

    // Map View
    chooseALocationField: 'Bir lokasyon kolonu seçiniz',
    yourRowsPlacedByThisField: 'Kayıtlarınız seçtiğiniz lokasyon kolonuna göre görüntülenecek.',
    createALocationColumn:
      'Kayıtlarınızı haritada görüntüleyebilmek için bir lokasyon kolonu oluşturun.',
    createNewLocationColumn: 'Yeni bir lokasyon kolonu oluştur',
    usingLocationColumn: 'Kullanılan lokasyon kolonu',
    gettingLocationAddress: 'Konum adresi alınıyor',
    backToLocation: 'Konuma geri dön',
    draggableNow: 'Artık sürüklenebilir.',
    newMarker: 'Yeni konum',
    relocate: 'Yerini değiştir',
    deleteLocation: 'Konumu sil',
    latitude: 'Enlem',
    longitude: 'Boylam',

    month: 'Ay',
    week: 'Hafta',
    day: 'Gün',
    today: 'Bugün',

    // Kanban View
    deleteStack: 'Yığını Sil',
    renameStack: 'Yığını Yeniden Adlandır',
    chooseAKanbanColumn: 'Bir tek seçim ya da ortak çalışan kolonu seçiniz',
    createNewSingleSelect: 'Yeni bir tek seçim kolonu oluştur',
    createNewCollaborator: 'Yeni bir ortak çalışan kolonu oluştur',
    usingSelectOrCollaboratorColumn: 'Kullanılan tek seçim / ortak çalışan kolonu',
    createAKanbanColumn: 'Bir tek seçim ya da ortak çalışan kolonu oluşturun',
    selectAFieldKanban: 'Kanban Field',
    yourRowsStackedBased: 'Kayıtlarınız seçtiğini kolona göre görüntülenecek.',
    duplicateItem: 'Öğeyi yinele',
    itemDetail: 'Öğe ayrıntıları',
    addNewItem: 'Yeni öğe ekle',

    // Formula Column
    formula: 'Formül',
    formulaColumnConfigured: 'Formul kolonları "Kolonu özelleştir" bölümden güncellenmelidir.',
    theme: 'Tema',
    dark: 'Karanlık',
    light: 'Aydınlık',

    // Desktop
    openWithRetable: 'Retable ile aç',
    openAsNewProject: 'Yeni Proje Aç',
    existingVersionWillOpen: '*Güncel sürüm açılacaktır.',
    versionYouWantToOpenWillOpen: '*Yüklenen sürüm açılacaktır.',
    open: 'Aç',

    // Switch View
    youCanNotSwitchToKanban:
      'Kanban Görünümüne geçebilmek için tablonuzda Seçim ya da Ortak Çalışan kolonu olmalıdır. ',
    youCanNotSwitchToCalendar:
      'Takvim Görünümüne geçebilmek için tablonuzda Takvim kolonu olmalıdır.',
    youCanNotSwitchToMap:
      'Harita Görünümüne geçebilmek için tablonuzda Coğrafi Konum kolonu olmalıdır.',
    youCanNotSwitchToForm: 'Form Görünümüne geçiş yapamazsınız.',
    youCanNotSwitchFromForm: 'Form Görünümünden diğer görünümlere geçiş yapamazsınız.',

    //Trial Expired
    trialExpired: 'Deneme süren doldu. 😥',
    trialUpgradePlan: 'Kaldığın yerden devam edebilmek için hesabını hemen yükseltebilirsin. 🌟',
    trialUseCoupon:
      // eslint-disable-next-line max-len
      '"NEWYEAR50" indirim kuponu ile tüm Retable planlarında geçerli %50 indirimden yararlanmayı unutma! 🚀',
    trialRememberCoupon: 'Kupon 28 Şubat tarihine kadar geçerlidir. 🎁',

    // RetableColumnsMenu
    changesNotSavedAlert: 'Emin misin? Yaptığın değişiklikler kaydedilmedi.',
    hideAllColumnNames: 'Bütün kolon isimlerini gizle',

    // Form View
    dragImage: 'Drag or select an image here',

    // Card View
    customizeCards: 'Kartları Özelleştir',
    imageColumn: 'Görüntü Kolonu',
    selectAnCardColumn: 'Bir görüntü, qr veya renk kolonu seç',
    usingCardColumn: 'Kullanılan görüntü/qr/renk kolonu',
    selectCardColumnDesc:
      'Seçilen kolondaki verilerinizi kart başlığı olarak görüntüleyebilirsiniz.',
    chooseAColumn: 'Bir kolon seçin',
    addCardColumn: 'Bir görüntü/qr/renk kolonu ekleyin',
    createNewCardColumn: 'Yeni bir {columnType} kolonu ekleyin',
    deleteItem: 'Öğeyi sil',

    // General Toast
    tableCopied: 'Tablo kopyalandı.',
    tableMoved: 'Tablo taşındı.',
    orgUpdated: 'Organizasyonun başarıyla güncellendi.',
    orgDeleted: 'Organizasyonun başarıyla silindi.',
    passwordChanged: 'Parola başarıyla değiştirildi',
    sent: 'Gönderildi.',

    // RetableRowDetailRightPanel
    noSelection: 'Görüntülenecek satır seçilmedi',

    // Welcome
    letsStart: 'Hadi başlayalım!',
    welcomeRetable: "Retable'a hoş geldiniz!🚀",
    welcomeDescription:
      "Evet, yine yeni bir 'merhaba' sayfası. Yeni bir sey denemenin ne kadar zor olabileceğini biliyoruz, ama burada öyle olmasını istemedik, yani endişelenmene gerek yok.🚀{break}" +
      'Hızlanmana yardımcı olmak için için bir video hazırladık.👇🏻',
    onboarding_Q1: "Retable'ı ne için kullanacaksınız?",
    onboarding_Q1_description:
      'Bunu daha sonra özellikle size özel şablonlar önermek için kullanacağız.',
    onboarding_Q2: 'Organizasyon hakkında',
    onboarding_Q2_description: 'Organizasyonunuzun adı nedir?',
    onboarding_Q3: 'Çalışan sayısını seçin',
    onboarding_Q3_description: 'Organizasyonunuzda kaç kişi çalışıyor?',
    onboarding_Q4: 'Rolünüzü en iyi ne tanımlar?',
    onboarding_Q4_description: 'Yanıtınıza göre başlamanıza yardımcı olacağız.',
    onboarding_Q5: 'Daha önce hangi uygulamaları kullandınız?',
    startup: 'Girişim',
    small_business: 'Küçük iş',
    large_company: 'Büyük şirket',
    personal_freelancer: 'Kişisel / serbest meslek',
    educational: 'Eğitimsel',
    nonprofit: 'Kâr amacı gütmeyen kuruluş / hayır kurumu',
    less5: "5'ten az",
    more500: "500'den fazla",
    // accountant: 'Muhasebeci',
    // analyst: 'Analist',
    // attorney: 'Avukat',
    // developer: 'Geliştirici',
    // educator: 'Eğitimci',
    // teacher: 'Öğretmen',
    personal: 'Kişisel',
    manager: 'Yönetici',
    accountant: 'Muhasebeci',
    administration: 'İdari',
    analyst: 'Analist',
    architect: 'Mimar',
    attorney: 'Avukat',
    banker: 'Bankacı',
    businessOwner: 'İşyeri sahibi',
    consultant: 'Danışman',
    customerServiceRepresentative: 'Müşteri Hizmetleri Temsilcisi',
    developer: 'Geliştirici',
    educator: 'Eğitimci',
    engineer: 'Mühendis',
    executive: 'Üst Düzey Yönetici',
    financialAnalyst: 'Finansal Analist',
    graphicDesigner: 'Grafik Tasarımcı',
    humanResourcesSpecialist: 'İnsan Kaynakları Uzmanı',
    itSpecialist: 'Bilişim Uzmanı',
    marketingManager: 'Pazarlama Müdürü',
    nurse: 'Hemşire',
    operationsManager: 'İşletme Müdürü',
    paralegal: 'Avukat Asistanı',
    physician: 'Doktor',
    realEstateAgent: 'Emlakçı',
    salesRepresentative: 'Satış Temsilcisi',
    scientist: 'Bilim İnsanı',
    softwareEngineer: 'Yazılım Mühendisi',
    teacher: 'Öğretmen',
    therapist: 'Terapist',
    writer: 'Yazar',
    others: 'Diğer',

    // Congrats.js
    congratulations: 'Tebrikler',
    congratsDescription:
      'Hesabınızı başarıyla oluşturdunuz.{break}' +
      'Sırada ne var? Projenizi çalışma alanınıza eklemeye başlayın ve ilk uygulamanızı oluşturun!',
    g2Checkbox:
      "Retable'ın Capterra veya G2'de Retable'a yorum bırakmam için beni bağlamasına izin veriyorum, böylece 10$'lık bir hediye çeki alabilirim.",
    congratsDiscord: 'Soruların mı var? Discord sunucumuza katıl',
    sweet: 'Sweet',

    // Groupbymenu
    groupByColumnInfo: 'Sütun verilerine, gruplandırılmış sütun gizliyken erişilebilir.',

    // Settings.js
    digitSeparator: 'Rakam Ayırıcı',
    comma: 'Virgül',
    dot: 'Nokta',
  },
};
