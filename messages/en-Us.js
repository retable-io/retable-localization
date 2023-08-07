/* eslint-disable max-len */
/* eslint-disable import/no-anonymous-default-export */
import { LOCALES } from '../locales';

export default {
  [LOCALES.ENGLISH]: {
    // Dashboard
    welcome: 'Hello and welcome to Retable. You can add a new workspace here. 👋',
    workspaceTip: 'You can change your workspace name and description. 👆',
    shareTip:
      'You can share your workspaces with other people and start your collaboration easily. ⛵',
    enjoy: 'Enjoy Retable with your first project! 😍',
    next: 'Next',
    prev: 'Prev',
    finishTour: 'Finish Tour',
    newWrokspace: 'Add workspace',
    workspaces: 'Workspaces',
    WorkspaceTrash: 'Trash bin',
    workspaceNotfound: 'Workspace or project not found.',
    noWorkspaces: "You don't have any workspaces.",
    isError: 'There is an error.',
    gridView: 'Grid View',
    listView: 'List View',
    addingWc: 'Adding new workspace',
    emptyWorkspaceMessage: 'You can add a new project by pressing "Add project" button.',
    gdpr: 'GDPR Certificate',
    community: 'Community',
    downloadDesktopApp: 'Download Desktop App',
    retableChromeExt: 'Retable Chrome Extension',
    retableChromeExtHeader: 'Try Retable Chrome Extension 🚀',
    retableChromeExtText: 'Easily view, edit and collaborate on all CSV files without downloading!',
    //Main Top Bar
    search: 'Search',
    accountDetails: 'Account Details',
    logout: 'Logout',

    // RetableAlertPop
    needUpgrade: 'You need to upgrade your plan to proceed with this operation.',
    needUpgradePro:
      'You need to upgrade your Pro plan to Team plan to proceed with this operation.',
    needUpgradeOrDelete:
      'You need to upgrade your plan to proceed with this operation or permanently delete without moving to trashbin.',
    upgrade: 'Upgrade',
    upgrade2: 'UPGRADE',

    upgradeNow: 'Upgrade',
    upgradeNowToolTip: 'Upgrade your plan.',
    youAreInProPlan: 'You are in Pro plan.',
    youAreInBasicPlan: 'You are in Basic plan.',
    youAreInEnterprisePlan: 'You are in Team plan.',
    youAreInBussinessProPlan: 'You are in Bussinenss Pro plan.',
    youAreInBussinessBasicPlan: 'You are in Bussiness Basic plan.',
    youAreAlreadyIn: 'You are already in Team plan.',
    needUpgradeShareRole: 'Upgrade now to use Editor and Viewer roles.',

    //RetableAutomationActionInput
    separateEmails: 'Recipients (separate multiple email addresses with commas)',
    content: 'Content',
    subject: 'Subject',

    //RetableAutomationModal
    NameValidation: 'Name must be longer than one character.',
    selectColumn: 'Select a column',
    invalidEmail: 'Invalid email',
    upperCaseEmailError: 'Please enter email in lowercase letters.',
    triggerNotcompleted: 'Trigger is not completed.',
    actionNotcompleted: 'Action is not completed.',
    deleteAutomation: 'Delete automation',
    deleteAutomationText:
      'This operation will delete the automation from this project.' +
      ' Are you sure to perform this operation?',
    cancel: 'Cancel',
    delete: 'Delete',
    automation: 'Automation',
    name: 'Name',
    automationName: 'Automation name',
    description: 'Description',
    reWs: 'Rename Workspace',
    automationDescription: 'Automation description',
    trigger: 'Trigger',
    type: 'Type',
    selectTrigger: 'Select a trigger',
    action: 'Action',
    selectAction: 'Select an action',
    lastUpdated: 'Last updated by {path}',
    att: 'at {path}',
    save: 'Save',
    discard: 'Discard',
    pleaseSelTab: 'Please select a table.',

    //RetableAutomationTriggerInput
    table: 'Table',
    selectTable: 'Select a table',
    column: 'Column',

    //RetableAutomation
    noDescription: 'No description',
    addNew: 'Add New',
    noAutomationsText: 'There is no automations in this project, use "Add New" button to add one.',
    noAutomotionViewer: 'There is no automations in this project.',
    automationRunCountWarning:
      'You have completed your monthly automation run count. Your Automation run count credit will be renewed on {date}.',
    automationCountWarning: 'You can create a maximum of {count} automations in a workspace.',
    automationCountInfo: 'You used {usedCount} of {totalCount} automation.',
    runCount: 'Run count',
    automationRunCountInfo: 'Total of running automation in this workspace.',

    //RetableCalendarDropdown
    Hm: ' HH:mm',
    reset: 'RESET',
    apply: 'APPLY',

    //RetableCalendarInput
    day: 'day',
    month: 'month',
    year: 'year',

    //RetableColorPicker
    enterCustomColors: 'You can enter custom colors in "#FFF" or "#FFFFFF" formats.',

    //RetableColumnInput
    selectedColor: 'Selected Color:',
    eg: 'e.g. ',
    attachFile: 'Add attachment',
    fileSizelarge5: 'File size larger than 5 MB!',
    fileSizelarge5Text:
      'File size larger than 5 MB! ' +
      'You can upgrade your plan for uploading files larger than 5 MB. ',
    fileSizelarge20: 'File size larger than 20 MB!',
    clean: 'Clean',
    fieldRequired: 'This field is required.',
    required: 'Required',
    mustRequired: 'Required',
    selectColabs: 'Select collaborator(s)',
    searchColabs: 'Search in collaborator(s)',
    selecetAColab: 'Select a Collaborator',
    findMe: 'Find me',
    permissionLocationDeniedDesc: 'Check your browser settings.',

    // RetableCreateFromTemplateModal
    selectWorkspaceOrProject: 'You should select a workspace or project.',
    use: 'Use',

    // RetableDashboardTrashBin
    years: ' year(s)',
    months: ' month(s)',
    days: ' day(s)',
    hours: ' hour(s)',
    minutes: ' minute(s)',
    second: ' second(s)',
    seconds: ' second(s)',
    ago: ' ago',
    just: 'just',
    dashboardTrashBin: 'Trash Bin',
    dashboardTrashBinTooltip: 'Restore or delete project and workspaces',
    typeProject: 'Type: Project',
    typeWorkspace: 'Type: Workspace',
    restore: 'Restore',
    Restored: 'Restored',
    restoring: 'Restore',
    remove: 'Remove',
    download: 'Download',
    removed: 'Removed',
    noDeletedItem: 'There are no deleted workspaces or projects in your trash.',
    deletedBy: 'Deleted by ',

    // RetableDropdownInput
    selectSomeOptions: 'Select option(s)',
    searchOptions: 'Search in option(s)',
    selectOption: 'Select an option',

    // RetableExpandCellModal
    cellPreview: 'Cell Preview',
    done: 'Done',
    fgColor: 'Foreground Color',
    bgColor: 'Background Color',

    // RetableDuplicateTableModal
    move: 'Move',
    copy: 'Copy ',
    selectProject: 'Select Project',

    // RetableEditableFormQuestion
    unknownRow: 'Unknown row',
    fieldName: 'Field Name',
    fieldDesc: 'Field Description',
    typeQuestionText: `Type a content to display on the form instead of the default column name.`,
    typeQuestionDesc: `Type a content to display on the form for column description.`,
    addDesc: 'Add a description for this form',
    coverImage: 'Cover image',

    // RetableEditFormModal
    embedForm: 'Embed the form on your web page',
    copied: 'Copied!',
    copyClipboard: 'Copy to clipboard',
    openLinkTab: 'Open link to new tab',
    shareToGetSubmissions: 'Share this link to get submissions from anyone.',
    editForm: 'Edit Retable Form',
    submit: 'Submit',
    share: 'Share',
    columns: 'Columns',
    getEmailNotification: 'Get email notifications for new responses',
    edit: 'Edit',
    codeEdit: 'Edit Code',
    codeLive: 'Live Code',
    codePreview: 'Preview Code',
    addBold: 'Add Bold Text',
    addItalic: 'Add Italic Text',
    addStrikethrough: 'Add Strikethrough Text',
    addHr: 'Insert HR',
    addTitle: 'Insert Title',
    addLink: 'Add Link',
    addQuote: 'Insert Quote',
    addCode: 'Insert Code',
    addCodeBlock: 'Insert Code Block',
    addComment: 'Insert Comment',
    addImage: 'Add Image',
    unorderedListCommand: 'Edit Unordered List',
    orderedListCommand: 'Edit Ordered List',
    checkedListCommand: 'Edit Checked List',
    textHere: 'Text Here',
    urlHere: 'URL Here',
    lastHiddenColumn: 'You can not hide the last column of form.',

    // RetableEmbeddedUrlModal
    embedRetable: 'Embed Retable',
    embedCode: 'Embed Code',
    doubleclickCopy: 'Doubleclick to copy',
    width: 'Width',
    height: 'Height',
    wrongFiletype: 'Wrong file type.',
    noAccess: "You don't have access to do this.",
    selectAnotherImage: 'Select another image or drag and drop.',
    selectImage: 'Select an image or drag and drop.',
    uploadImage: 'Upload an image.',
    uploadFile: 'Upload a file.',
    selectAnothrFile: 'Select another file or drag and drop.',
    selectFile: 'Select a file or drag and drop.',
    fileUpload: 'File Upload',
    customFileUpload: 'My Device',
    projectAttachment: 'Project Attachment',
    selFile: 'Select a file',
    upload: 'Upload',
    uploadMore: 'Upload More',
    viewEditSelected: 'View/Edit',
    fillFields: 'Please fill in all required fields.',
    insertValidAddress: 'Please insert a valid email address.',
    update: 'Update',
    hideBrand: 'Hide retable logo',
    fillEmptyFields: 'You must fill at least one of the fields above.',

    //RetableForm
    fileUploading: 'File(s) uploading',
    clearForm: 'Clear form',
    maliciousMessage1: 'Never submit passwords through Retable forms.',
    maliciousMessage2: 'Report malicious form.',
    shareForm: 'Share Form',
    responseWarn: 'You must be logged in to receive these form responses.',

    // RetablePublicFormView
    thankForSubmission: 'Thank you for your submission.',
    retableUsing:
      ' Whatever your role or need, from HR to marketing, sales to project management and' +
      ' design: ',
    noNeedSearch: "You don't need to search! ",
    provideClass: 'It provides first-class quality and performance every day without limits.',
    qualityPerformance: 'It provides first-class quality and performance every day without limits.',
    gotoRetable: 'Go to Retable',
    createFormNow: 'Create your online form now',
    updateSubmission: 'Update your submission',
    backToRow: 'Return to row',
    backToForm: 'Return to form',
    error: 'Error',
    noViewCreate: 'You have not any view or table. You can create a new one.',
    thisPrivateForm: 'Hi there! 👋 This is a private form.',
    pleaseLoginToView: 'Please login to view.',
    redirectText: 'Redirecting to <p1></p1> in <p2></p2> seconds...',
    enterUrl: 'Enter URL here',
    redirectStart: 'Once the form is submitted, redirect happens after a 10-second countdown.',
    redirectUrl: 'Redirect URL',
    formEmailError: 'You cannot send e-mails to users who do not have a Retable account',
    sendCopyForm: 'Email me a copy of my responses',
    sendMailDescription:
      'People who fill out the form can receive a copy of their form response by email.',
    writeHere: 'Write here',

    // RetableImportModal
    sure: 'Are you sure?',
    affectDefaultValue: `This table has at least one autonumber column types or opened with 
    default value options. 
    Your import data can be affected due to those conditions.`,
    confirm: 'Confirm',
    selectCorrectFile: 'You must select a .csv or .xls(x) file.',
    selectRetableCorrectFile: 'You must select a .retable file.',
    newColumn: ' New column',
    checkDuplicated: 'Please make sure no duplicated columns have been selected.',
    allMustSelectedCol: 'All the imported columns must have a selected column.',
    selectAnotherType: 'Select another .csv or .xls(x) File',
    selectRetableType: 'Select another .retable File',
    selectTypeFile: 'Select a .csv or .xls(x) File',
    selectRetableTypeFile: 'Select a .retable File',
    importProject: 'Import a .csv or .xls(x)',
    importNewProject: 'Import a new project.',
    importTable: 'Import Table',
    importNewTable: 'Import a new table.',
    importData: 'Import Data',
    addRecordExistingTable: 'Add new record(s) to existing table.',
    importedColumn: 'Imported Column',
    tableColumn: 'Table Column',
    import: 'Import',
    firstIsRowInclude: "First row is header, don't include this header.",
    firstRowheader: 'First row is header.',
    trimWhitespace: 'Trim whitespace.',
    insert: 'Insert',
    insertDescription:
      'You can select any CSV or XLS file from your device to easily import to the end of your Retable table.',
    replaceDescription:
      'All your data in this table is replaced with the data you imported. If the data has no equivalent in the imported file, this data is added to the end of your Retable table.',
    chooseUniqueColumns: 'Choose unique key columns',
    replaceHeader: 'Replace the headers as well',
    repeatingSourceColumnWarning: 'The data in the table you imported is not unique.',
    repeatingTargetColumnWarning: 'The data in your Retable table is not unique.',
    emptyFileWarning: 'This file is empty.',
    insertData: 'Insert Data',
    replaceData: 'Replace Data',

    // RetableInviteMoreModal
    enterEmail: 'Please enter an email',
    cantInvite5: "Can't invite more than 5 user at once.",
    inviteMore: 'Referrals',
    referInfo: 'Get $3 in credit for every person you refer to Retable.',
    referDescription: 'You can only invite 5 people at a time',
    to: 'To ',
    invite: 'Invite',

    // RetableMessage
    wirteMsg: 'Write something...',
    y: 'y',
    mon: 'mon',
    d: 'd',
    h: 'h',
    m: 'm',
    s: 's',
    you: 'You',
    anonymousUser: 'Anonymous User',
    badgelilagray: 'badge-lila-gray',
    commented: ' commented',
    rowIn: ' this row in ',
    editedCell: ' edited this cell in {path}',
    noImage: 'No image available.',

    // RetablePlanCard
    currentPlan: 'Current Plan',
    contactUs: 'Contact Us',
    features: 'FEATURES',

    // RetableProblemsModal
    requiredCell: 'Required, cell on row {path} ',
    isEmpty: ' is empty.',
    valueOf: ' The value of row {path}',
    dontMatchCol: ' does not match the column type.',
    colMustUniqe:
      'Each value in this column must be unique. But there are {path} cells with the same value',
    rowValue: 'The value {path} must match the column format.',
    rowValidation: 'The value on row {path} must follow validation rule(s).',
    validationErr: 'Validation error(s) in cell data.',
    problemsof: 'Problems of {path}',

    // RetableProfilePicEditModal
    picSizeLarge1: 'Picture size is larger than 1MB.',
    profilePicture: 'Profile Picture',
    removeSure: 'Are you sure you want to remove your profile picture?',
    chooseImage: 'Choose Image',
    imgValidation: 'Only .jpeg and .png files are allowed.',

    // RetableProject
    project: 'Project',
    noRecover: 'Once deleted, you will not be able to recover this project!',
    sharedUsers: 'Shared users:',
    sureDeleteProj: `You are about to delete this project.`,

    //RetableProjectChat
    startDiscussion: 'Start a discussion',
    startDis: "Start a discussion. You can mention others with '@'",

    // RetableProjectDropdown
    authorizedRename: 'You are not authorized to rename.',

    // RetableProjectShareModal
    editor: 'Editor',
    owner: 'Owner',
    removeUser: 'Remove User',
    removeTeam: 'Remove Team',
    removeUserText:
      'This operation will remove the user from this space.' +
      ' Are you sure to perform this operation?',
    removeTeamSpace:
      'This operation will remove the user from this space.' +
      ' Are you sure to perform this operation?',
    inviteMembers: 'Invite members',
    publicproject: 'Public project',
    copLink: 'Copy link',
    projLink: 'Project Link',
    worksLink: 'Workspace Link',
    unknownUser: 'Unknown user',
    unknownTeam: 'Unknown team',
    invitedUser: 'Invited User',
    resendEmail: 'Resend Email',
    noProjMembers: 'No project members.',
    workspaceMembers: 'Workspace Members',
    projectCollaborators: 'Invite more project collaborators via email',
    resendInvitation: 'Resend invitation',
    modalTitle: 'Employee Directory Demographic',
    findEmail: 'Email address',
    findEmailOrTeam: "Email address or a team by '@'",
    public: 'Public',
    anyoneCanSee: 'Anyone can see this link.',
    publicProjectLinkInfoOn:
      'When the Project view switch is activated, the Public view is automatically activated for all views. ',
    publicProjectLinkInfoOff:
      'When the Project view switch is inactivated, the Public view is automatically inactive for all views.',
    projectUseDataInfo:
      'If the users you shared with are logged in, they can clone this project, table and data to their personal workspaces. Only owner users can activate or deactivate the switch.',
    projectUseDataWarning: `If you enable the "Use Data" option for your project, people with the link will be able to access all the data in this project and remove any filters or hiding that you have applied by cloning the project to their Retable workspace. Your project and tables will not be affected by these changes.`,
    shared: 'Shared',
    sharedFailMessage:
      'Shared via e-mail in the appropriate format. Inappropriate emails are listed below.',

    // RetableProjectTrashBin
    projectTrash: 'Project Trash Bin',
    noDeletedTable: 'There are no deleted tables or views in your trash.',
    view: 'View',

    //RetablePublicProjectShare
    refresh: 'Refresh',
    embedOnWeb: 'Embed the table on your web page',
    useData: 'Use Data',
    viewersCreateProj: `Viewers can create a new project using this project.
     (If the user you shared with are logged in.)`,
    tablesWillVisible: 'Tables below will be visible to anyone who has the link',
    shareWithUnique: 'Share project with a unique link.',
    cusLink: 'Custom Link',
    cusLinkDes: 'Create custom link to this project.',
    accept: 'Accept',
    linkReq: 'Link is required.',

    // RetablePublicSpreadsheet
    incorrectData: 'This table has some incorrect data.',
    checkErrors: 'Check Errors',

    // RetablePublicTableHeader
    saving: 'Saving...',
    changesSaved: 'All changes saved.',
    signUp: 'Sign up',

    // RetablePublicView
    tableLocked: 'Table is locked by ',

    // RetableRowShareModal
    bulk: 'Bulk',
    shareRow: 'Share Row',
    useLink: 'Use this link or send link by email to edit the row.',
    hidden: '(Hidden)',
    send: 'Send',
    sendRowLink: 'Send row view link via email',
    enterMailType: "Enter an email or type '@'",
    noEmailOrCollabCol:
      'There are no emails or collaborator columns in your table. Please create an email' +
      ' or collaborator column to use Bulk!',
    thisRow: 'This row',
    allRows: 'All rows',
    bulkUpdateDesc:
      'Each row is sent to the person in the selected column.' +
      ' Rows are not assigned to a collaborator or an email is not sent to anyone.',

    // RetableShareIcons
    shareText: 'Organize, display, share and edit data like in spreadsheets, easily.',

    // RetableShareMenu
    all: 'All',
    onlyData: 'Only Data',
    disableExport: 'Disable Export',
    disableExportInfo: 'Users with whom you share the link cannot export your table.',

    // RetableSnapshotListModal
    noSnapshots: 'No snapshots.',
    restoreTable: 'Restore table',
    createTable: 'Create new table',
    snapshotDescription:
      'A snapshot needs to be selected when you want to restore a table or create a new table.',

    // RetableSnapshotModal
    snapshots: ' Snapshots',
    takeSnapshot: 'Take a snapshot',

    // RetableDataValidation
    validation: 'Validation',
    validationDes: 'This option allows to determine rules for data validation.',
    addRuleData: 'Add a rule for data validation.',
    addValidationRule: 'Add Validation Rule',

    // RetableDelimiteColumnModal
    sureDeleteCol: 'Are you want to split column data?',
    split: 'Split',
    delimiter: 'Delimiter',
    typePreview: 'Type anything and preview',
    preview: 'Preview',
    previewData: 'Preview Data',
    noDataFound: 'No data found.',
    multiple: 'Multiple',
    addMuUsers: 'Add multiple collaborators',
    sendNotif: 'Send Notification',
    notifyUsers: 'Notify collaborators when they are added or the row they are added is changed.',

    // RetableProjectHistoryModal
    rowSavedText:
      'Row is saved but your data is not equal to filter condition.' +
      ' You can see this row when you remove the filter.',
    createdAt: 'Created at ',
    updatedAt: 'Updated at ',
    projectHistory: 'Project History',
    noFoundProjectHistory: 'No project history found.',

    // RetableReferenceTable
    selectReferenceTable: 'Select reference table',
    lookUpColumn: 'Lookup column',
    rollupColumn: 'Rollup column',
    noPremissionOthers: 'You do not have permission to view other tables.',
    selectRefCol: 'Select reference column',
    rollupColumnConfigured: 'Rollup columns should be configured in the customize column.',

    // RetableLookupValue
    selectReferencedColumn: 'Select referenced column',
    referencedColumn: 'Referenced column',
    selectLookupColumn: 'Select lookup column',
    selectRollupColumn: 'Select rollup column',
    noReferencedColumn:
      'You need a reference column to add a lookup. Add the reference column before configuring this lookup column.',
    noReferencedColumnRollup:
      'You need a reference column to add a rollup. Add the reference column before configuring this rollup column',
    // RetableRowData
    noImageFound: 'No image found.',

    // RetableRowHistoryModal
    rowDetail: 'Row Detail',
    addNewRow: 'Add New Row',
    history: 'History',
    comments: 'Comments',
    watchRowDesc: 'A notification mail is sent to the watchers when a row is modified.',
    watchRowNumberDesc: 'Number of watchers of this row.',
    nohistory: 'No changes yet.',
    nocomments: 'No comments yet.',
    addColumn: 'Add column',
    prevRecord: 'Previous',
    nextRecord: 'Next',
    addRowHistory: 'Add',
    watchRow: 'Watch',
    showHiddenCols: 'Show {count} hidden column(s)',

    // RetableSendMailModal
    sendSelectedEmail: 'Send selected data as email',

    // RetableGenerateDataModal
    generateData: 'Generate Data',
    columnData: 'Column Data',
    noColumnData: 'No column data.',
    generate: 'Generate',

    //RetableSourceInput
    emptyOption: 'Empty Option',
    sureRemoveOption: 'Are you sure to remove this option?',
    sureCleanList: 'Are you sure to clear the list?',
    clear: 'Clear',
    sortAZ: 'Sort A to Z',
    sortZA: 'Sort Z to A',
    generateTableColumn: 'Generate from table column',
    addAnOption: 'Add an option',
    addOption: 'Add Option',
    selectedOptions: 'There are {path} select option(s).',
    optionNotFound: 'Option(s) not found!',

    // RetableEditColumnModal
    columnTypes: 'Column Types',
    addNewCol: 'Add New Column',
    custCol: 'Customize column',
    baicTypeCol: 'Basic',
    advancedTypeCol: ' Advanced',
    premiumTypeCol: 'Premium',
    premiumBetaTitle: 'Free in beta for Pro and Team accounts',
    collaborator: 'Collaborator',
    addUsers: 'Add users to cells.',
    enterChar: 'Please enter at least one character.',
    selectReference: 'Please, select reference table and look up field.',
    customizeReferenced: 'You can not customize referenced column with this column type',
    customizeReference: 'You can not customize reference column with this column type',
    customizeTableReference:
      'You can not customize this column because it is used as a source by lookup column.',
    customizeTableReferenceRollup:
      'You can not customize this column because it is used as a source by rollup column.',
    customizeLookup: 'You can not customize lookup value column with this column type',
    customizeRollup: 'You can not customize source of rollup column with this column type',
    dataLostText:
      'IF YOU HAVE DATA IN THIS COLUMN and ' +
      'if you change the column type, data in this column might be lost or corrupted.' +
      'However, if you change back to the original column type, ' +
      'you will be able to access your original data by refreshing.',
    dataWarning:
      'WARNING: The data you edited before going back ' +
      'to the original column type might still be lost or corrupted.',
    columnFilterWarning:
      'If the column type is changed because a filter is applied to the column, the filter will be removed.',
    ok: 'OK',
    ex: 'Example: ',
    ex1: 'Example: 1',
    text: 'Text',
    title: 'Title',
    uniqueValues: 'Each value will be unique across the table for this column.',
    requiredValues: 'Each value will be required across the table for this column.',
    maskData: 'Mask data',
    maskDataDescription:
      "Hide your cell values in public shared view from other people by filling them with stars. ('*')",
    unique: 'Unique',
    refTable: ' Reference table ',
    dateFormat: 'Date Format',
    includeTime: 'Include Time',
    selectOptions: 'Select Option(s)',
    singleSelect: 'Single Select',
    multiSelect: 'Multi Select',
    singlelineMultiline: 'Single-line / multi-line',
    singleLineText: 'Single-line Text',
    multiLineText: 'Multi-line Text',
    wordWrap: 'Word Wrap',
    format: 'Format',
    integer: 'Integer (1)',
    decimal: 'Decimal (1.0)',
    currencyDecimal: 'Decimal (1.00)',
    precision: 'Precision',
    currencySymbol: 'Currency Symbol',
    allowNegatives: 'Allow negative numbers.',
    style: 'Style',
    max: 'Max',
    emptyCellDef: 'This column will fill empty cells using given default value.',
    textDes: 'A line of text.',
    numDes: 'A line of numbers.',
    checkboxDes: 'A small box in which to place a check mark.',
    imgDes: 'Image allow you to add images which can then be viewed or downloaded.',
    attachmentsDes:
      'Attachments allow you to add images,' +
      ' documents, or other files which can then be viewed or downloaded.',
    calendarDes: 'Enter a date (e.g. 11/12/2013) or pick one from a calendar.',
    colorDes: 'Pick a color for your cell.',
    emailDes: 'A valid email address (e.g. andrew@example.com).',
    phoneDes: 'A telephone number (e.g. +1 023 456 7890).',
    percentDes: 'Adding % to your numbers.',
    selectDes: 'Multiple select allows you to select one or more predefined options listed below.',
    geoLocationDes: "Mark your location. (e.g. '41.021045896867875,29.00408756726393')",
    referenceDes: "Show other table's data ​in this table.",
    autonumberDes:
      'Automatically generates a unique, automatically incremented number for each record.',
    currencyDes: 'Specific type of number field that formats the number as a currency amount.',
    ratingDes: 'Rate your records.',
    defaultVal: 'Default Value',
    european: 'European',
    us: 'US',
    iso: 'ISO',
    urlDes: 'A line of URL.',
    url: 'URL',
    protocolRequired: 'You need to add the protocol of the URL.',
    lookupValue: 'Lookup value',
    lookupvalues: 'Lookup Values',
    rollupValue: 'Rollup Value',
    rollupValues: 'Rollup Values',
    lookUpDes: 'Lookup for other value from referenced table.',
    createdAtDes: 'Shows the date and time the record was created.',
    createdByDes: 'Shows the user who created the record.',
    updatedAtDes: 'Shows the date and time that the record was modified.',
    updatedByDes: 'Shows the user who last modified the record.',
    rollupDesc:
      'A rollup column helps you to summarize data from values that are referenced to this table.',
    includeAllValuesRollup: 'Include all values in the same category in the calculation.',
    includeAllValuesRollupDesc:
      'If the checkbox is checked, all values in the same category are included in the calculation. If unchecked, only the data you selected is included in the calculation.',
    columnTitleMustBeUnique: 'Column title must be unique.',
    showAsButton: 'Show As Button',
    buttonText: 'Button Text',
    uuidDes: 'Automatically generates a unique and custom value for each record.',
    uuidLength: 'Length',
    uppercase: 'Uppercase',
    lowercase: 'Lowercase',
    numbers: 'Numbers',
    symbols: 'Symbols',
    uuidExample: 'Example',
    uuidCustomizeId: 'Customize Identifier',
    qrCodeDes:
      'You can create a QR code with the value written in the cell. You can scan this QR code with any QR scanner.',
    qrCodeSupportDes: 'QR Code column type supports the data formats above.',
    selectSourceColumn: 'Select GPT source column',
    enterSecretKey: 'Please enter a ChatGPT API secret key.',
    gptKeyInfo: 'Generate a ChatGPT API secret key using this link:',
    selectSourceColumnSwal: 'Please select a source column to generate a valid ChatGPT response.',
    enterPrompt: 'Please enter your prompt to generate a valid ChatGPT response.',
    gptDes: 'ChatGPT column',
    prompt: 'Prompt',

    // RetableSpreadsheet
    formShare: `The form must be shared to share the row. 
      Do you want to open form view share option?`,
    frozenMsg: 'Columns wider than half of the view cannot be frozen.',
    freezeColumns: 'Freeze Columns',
    warning: 'Warning',
    manyRequests: 'Too many row delete requests!',
    deleteRows: 'Delete Row(s)',
    deleteRow: 'Delete row',
    deleteAllSelected:
      'This operation will delete all selected row(s). Are you sure perform this operation?',
    somethingWentWrong: 'Something went wrong 🤔',
    pleaseRefresh: 'Please refresh the page.',
    deleteLastCol: 'You can not delete the last visible column of the table.',
    deleteRefCol: 'You can not delete the referenced column.',
    deleteRefLookupCol:
      // eslint-disable-next-line max-len
      'You can not delete or change the source of lookup value column. You must first delete or change the type of the lookup value column.',
    deleteRefRollupCol:
      // eslint-disable-next-line max-len
      'You can not delete or change the source of rollup column. You must first delete or change the type of the rollup column.',
    deleteRefRollupCol:
      'You can not delete or change the source of rollup column. You must first delete or change the type of the rollup column.',
    deleteLookupCol:
      // eslint-disable-next-line max-len
      'You can not delete this column because it is used by a lookup column in another table. You must first delete or change type of the lookup value column.',
    deleteRollupCol:
      // eslint-disable-next-line max-len
      'You can not delete this column because it is used by a rollup column in another table. You must first delete or change type of the rollup column.',
    deleteCol: 'Delete Column(s)',
    removeSelectedWarning:
      'This operation will DELETE all selected column(s). Are you sure to perform this operation?',
    row: 'Row',
    cell: 'Cell',
    rowAdded: 'New row added.',
    selectLookupValue: 'Please select referenced column and lookup field.',
    selectRollupValue: 'Please select referenced column and rollup field.',

    // RetableTableFooter
    none: 'None',
    empty: 'Empty',
    summary: 'Summary',
    filled: 'Filled',
    sum: 'Sum',
    avg: 'Avg',
    min: 'Min',
    max2: 'Max',
    count: 'Count',
    countNum: 'Count Numbers',
    row2: ' row',
    column2: ' column',
    s: 's',
    columns2: ' columns',

    // RetableProjectNotificationMenu
    at: ' at ',
    notifications: 'Notifications',
    noNotification: 'No notification.',

    // RetableTableHeader
    duplicateproject: 'Duplicate Project',
    deleteproject: 'Delete Project',
    changeProject: 'Change Project',
    projMembers: 'Project Members',
    feedback: 'Feedback',
    userGuide: 'User Guide',
    editPr: 'Edit Project',
    renameProject: 'Rename Project',
    projectName: 'Type project name',
    shareProject: 'Share Project',
    shareCollab: 'Invite Collaborators',
    exportProject: 'Export Project',
    exporting: 'Exporting...',
    roadmap: 'Roadmap',
    support: 'Support',
    discord: 'Discord',

    // RetableTableNav
    emptyTable: 'Empty Table',
    importRetable: 'Import Retable',
    importGoogleSheet: 'Import Google Sheet',
    projectHistories: 'Project History',
    projectTrashBin: 'Project Trash Bin',
    automations: 'Automations',
    addOrimport: 'Add or import',
    hideCol: 'Hide Columns',
    hide: 'Hide',
    filter: 'Filter',
    retableNameMustBeUnique: 'Retable name must be unique.',
    maintenance: 'Under maintenance',

    // RetableTableNavItem
    renameTable: 'Rename Table',
    duplicateTable: 'Duplicate Table',
    copyTable: 'Copy Table',
    moveTable: 'Move Table',
    snapshot: 'Snapshot',
    exportTable: 'Export Table',
    deleteTable: 'Delete Table',
    containAnotherProj: 'Workspace should contain at least one project.',
    atLeast1Table: 'Project should have at least one table.',
    noRecoverTable: 'Once deleted, you will not be able to recover this table!',
    referecnedTable: 'Table is referenced by another table.',
    sureDeleteTable: `Are you sure you want to delete this table?
    Recently deleted tables can be restored from trash.`,
    sureDelTable: `You are about to delete this table.`,
    affectReferenceValue: `This table has reference columns or referenced columns.
    These columns will change as text.`,
    lockTable: 'Lock Table',
    unlockTable: 'Unlock Table',
    unlockTableRequest: 'Unlock Table Request',

    // RetableClientModal
    onlineCollaborators: 'Online Collaborators',
    showCell: 'Show Cell',

    //RetableFilterMenu
    addFilter: 'Add Filter',
    applyFilter: 'Apply',
    disableFilter: 'Disable Filter',
    typeHEX: 'Type HEX',
    operator: 'Operator',
    or: 'OR',
    and: 'AND',
    mergedCellsWarning: 'This operation will unmerge the merged cells.',
    differenceInfo: 'The result may be negative or positive based on different filter types.',
    filterLock:
      'When a filter is locked, it will be invisible and cannot be modified on the public share. Only a user with owner permission can lock filter.',
    lock: 'Lock',
    locked: 'Locked',
    unlock: 'Unlock',

    //RetableFileUploadModal
    fileType: 'File Type',
    fileSize: 'File Size',
    fileName: 'File Name',
    createdBy: 'Created By',
    used: 'Used',
    usedStorage: 'is used of your storage.',
    maxFUSizeExceed: "You don't have enough space on project attachment.",
    uploadCancelText:
      'The files you are trying to upload will be canceled. Do you still want to close?',
    noAccessProjectAtt:
      "You don't have access to view project attachments but you can still upload files.",
    otherProjects: 'Other Projects',
    attachmentSizeInfo:
      'Note that projects and tables in the trash take up space in their attachments.',
    dropToUpload: 'Drop to upload',

    // RetableFindAndReplace
    replaceSure: 'Do you want to replace all data?',
    replaceAll: 'Replace All',
    find: 'Find',
    replace: 'Replace',
    caseSensitive: 'Case Sensitive',
    findAndReplace: 'Find & Replace',

    // RetableFormatingMenu
    conditionalFormatting: 'Conditional formatting',
    addFormat: 'Add Format',

    // RetableHideFieldsMenu
    noHide: 'You can not hide the last column of table.',
    refreshlink: 'Refresh link',
    shareData: 'Share your data with this link (hidden fields are not visible)',
    editable: 'Editable',
    makeEditable:
      'Make your Public View editable. If the user you shared with is logged in, the changes are saved. Otherwise the changes are not saved in the main table.',
    viewUseDataInfo:
      'If the users you shared this table with are logged in to Retable, they can clone this table and add data to their personal Retable workspaces and projects.',
    formView: 'Form View',
    publicForm: 'Public Form',
    publicView: 'Public View',
    makePrivateForm: 'Make the form private. Only logged in users can view and submit the form.',
    privateForm: 'Only logged in users can view and submit',

    EditPreviewform: 'Edit and preview form',

    // RetableStyleToolbar
    bold: 'Bold',
    italic: 'Italic',
    underline: 'Underline',
    fontColor: 'Font Color',
    fillColor: 'Fill Color',
    resetStyle: 'Reset Style',
    rowSize: 'Row Size',
    shortRow: 'Short Row',
    mediumRow: 'Medium Row',
    tallRow: 'Tall Row',
    mergeCell: 'Merge Cell',
    columnStyle: 'Column style',
    resetColorStyle: 'Reset style',

    // RetableTableToolbar
    cannotUnlock: "You can't unlock this table.",
    views: 'Views',
    changeDataView: 'Views',
    export: 'Export',
    exportView: 'Export View',
    unlockedTable: 'Table is unlocked',
    projectChat: 'Project Chat',
    sort: 'Sort',
    sortAscending: 'Sort ascending',
    sortDescending: 'Sort descending',
    group: 'Group',
    chat: 'Chat',
    tabList: 'Table list',
    unlockRequest: 'Send table unlock request mail. (',
    unlockRequestSent: 'Table unlock request email has been sent. (',
    youHaveToWait: 'You have to wait a bit. (',
    youHaveToWaitSecondPart: ' seconds)',
    youHaveToWaitMinPart: ' minutes)',
    tableHistory: 'Table history',
    undo: 'Undo',
    redo: 'Redo',
    addNewRow2: 'Add new row',
    addNewRow3: 'Add Row',

    //retableSortMenu
    pickAnotherColumn: 'Pick another column',
    pickColumnToSort: 'Pick a column to sort',
    pickColumnToGroup: 'Pick a column to group',
    disable: 'Disable',
    ascending: 'Ascending',
    descending: 'Descending',

    // RetableTemplateModal
    projectTemplate: 'Project Template',
    useTemplate: 'Use Template',
    close: 'Close',

    // RetableViewListItem
    renameView: 'Rename view',
    duplicateView: 'Duplicate view',
    deleteView: 'Delete view',
    noDeleteLastView: 'You can not delete the last view of retable.',
    noRecoverView: 'You are about to delete this view.',
    defaultView: 'Default View',

    // retableViewsList
    adding: 'Adding...',

    // RetableWorkspaceHeader
    workspace: 'Workspace',
    editWorkspace: 'Edit Workspace',
    editWorkName: 'Edit Workspace Name',
    editWorkDes: 'Edit Workspace Description',
    deleteWorkspace: 'Delete Workspace',
    startTemplate: 'Start with a template',
    startScratch: 'Start from scratch',
    shareWorkspace: 'Share Workspace',
    noWorkspaceRecover: 'You are about to delete this workspace.',
    workspaceName: 'Type workspace name',
    awesomeWorkspace: 'This is an awesome workspace! Now go ahead and organize your projects.',
    awsomeProject: 'Projects shared with you from other collaborators.',
    externallyProjectsDesc: 'Projects saved from Retable Spreadsheet or an external source.',
    workspaceDescription: 'Type workspace description',
    workspaceDesc: 'Default Workspace',
    newProject: 'Add project',
    sureDeleteWorkspace: `You are about to delete this workspace.`,

    // RetableWorkspaceListView
    emptyProject: 'Empty project',
    sharedWith: 'Shared with',
    noProject: 'There is no project in this workspace. Use "Add new project" button to add one.',

    // RetableWorkspaceShareModal
    removeUserWorkspace:
      'This operation will remove the user from this workspace.' +
      ' Are you sure to perform this operation?',
    inviteLink: 'Invite by link',
    inviteByLinkInfo:
      'If the users you shared with are logged in to Retable, the workspace is shared with Viewer role.',
    inviteCollaborators: 'Invite more workspace collaborators via email',
    inviteLink2: 'Invite link',
    shareYourWorkspace: 'Share your workspace with this link.',
    peopleLink: 'People who will join to this workspace with the link will have Editor role.',
    personalLink: `This link is personal. Only you and the people whom you will invite can see this
    link.`,
    viewer: 'Viewer',
    noWSMemberFound: 'No workspace members found.',
    noPJMemberFound: 'No project members found.',
    wsViewerDesc: 'People who will join to workspace with this link will have Viewer role.',
    orgMemberDesc: 'People who will join to organization with this link will have Member role.',
    teamAlready: 'Team already has permission.',
    upgradeNowFeature: '<p1>Upgrade now</p1> to use this feature.',

    // helpers
    free: 'Free',
    basic: 'Basic',
    annuallyBasic: 'Annually Basic',
    retableFast: 'Anyone who want to see how fast Retable is',
    monthUser: 'month/user',
    unlimitedCollaborators: 'Unlimited Collaborators',
    collaborators: 'Ortak Çalışan',
    collabrativePerWorkspace: 'Collabrative per workspace',
    publicForms: 'Public Forms',
    publicViews: 'Public Views',
    pro: 'Pro',
    annuallyPro: 'Annual Pro',
    enterprise: 'Enterprise',
    bussinessBasic: 'Business Basic',
    bussinessPro: 'Business Pro',
    bussinessEnterprise: 'Business Unlimited',
    team: 'Team',
    bussinessAnnuallyBasic: 'Business Annual Basic',
    bussinessAnnuallyPro: 'Business Annual Pro',
    bussinessAnnuallyEnterprise: 'Business Annual Enterprise',
    anyoneUsemore: 'Anyone who wants to use more',
    unlimited: 'Unlimited',
    prioritySupport: 'Priority Support',
    enterprise: 'Enterprise',
    whowants: 'Who wants to own their data on their cloud or servers',
    everythingPro: 'Everything in "Pro" Plan',
    customContact: 'Custom Contact',
    paymentOptions: 'Flexible payment options',
    number: 'Number',
    checkbox: 'Checkbox',
    image: 'Image',
    'select(options)': 'Select (Options)',
    geolocation: 'Geolocation',
    attachment: 'Attachment',
    calendar: 'Date&Time',
    color: 'Color',
    email: 'E-mail',
    workEmail: 'Work e-mail',
    autonumber: 'Autonumber',
    phonenumber: 'Phone Number',
    percent: 'Percent',
    referenceanothertable: 'Reference Another Table',
    lastmodifiedtime: 'Last Modified Time',
    lastmodifiedby: 'Last Modified By',
    createdtime: 'Created Time',
    createdby: 'Created By',
    viaEmail: 'via email',
    currency: 'Currency',
    rating: 'Rating',
    lookup: 'Lookup',
    rollup: 'Rollup',
    uuid: 'Unique Identifier',
    qrcode: 'QR Code',
    gpt: 'GPT',
    last100Actions: 'Last 100 Actions',
    last10Actions: 'Last 10 Actions',
    '3Owner': '3 Owner',
    '10Owner': '10 Owner',

    // RetableSearchInput
    searchInWorkspace: 'Search in Workspaces or Projects',
    searchInTemplates: 'Search in Templates',
    searchInProjectShare: 'Search in Project Members',
    searchInWorkspaceShare: 'Search in Workspace Members',

    // MainFooter
    version: 'Version',

    // Templates
    Templates: 'Templates',
    templateNotfound: 'Template not found!',
    templateArchive: '<p1>Welcome</p1> <p2>Template Archive</p2>',
    useIt: 'Use it',

    //Retable
    welcomeProj: 'Welcome to your first awesome project 👋',
    projSet: 'You can change your project settings from here 👆',
    navigateProj: 'You can navigate your projects from here ⛵',
    tableOptions: 'You can make your table operations here.',
    snapshotStep: 'You can take a snapshot of your table.',
    enjoyRetable: 'Enjoy using your Retable 😍',
    haveMsg: 'You have a new message',
    nMsg: 'New message',
    extensionRowLimitationWarning:
      'You can only insert 1000 rows. If you want to insert more than 1000 rows, you have to sign up and upgrade your plan.',
    extensionFirstRowInfo: 'Set first row as header?',
    extensionFirstRowInfoDesc:
      'You can also set this action later by right-clicking on the first row and selecting the "Set as header" field.',

    //Account
    api: 'API',
    apiKey: 'API Key',
    accountOverview: 'Account Overview',
    enaa: 'Enabled',
    diss: 'Disabled',
    staa: 'Status',
    updateUsername: 'Update your username and manage your account',
    profile: 'Profile',
    password: 'Password',
    password2: 'Password',
    audit: 'Audit',
    subscription: 'Subscription',
    teams: 'Teams',
    organizations: 'Organizations',
    organization: 'Organization',
    visit: 'Visit',
    docss: 'Documentation',
    showw: 'Show',
    personal: 'Personal',
    bussiness: 'Business',
    settings: 'Settings',
    createNewApi: 'Create new API',
    deleteKeyWarning: 'You are about to delete this key.',

    // saga swall
    invSent: '👋 We have already sent an invitation 📧  email. 👍',
    justNow: 'Just now',
    okswal: 'OK',
    success: 'Success',
    projDuplicatedName: 'Project duplicated with name: ',
    tableDuplicatedName: 'Table duplicated with name: ',
    newColAdded: 'New column added',
    importingData: 'Importing Data...',
    snapshotTaken: 'Your snapshot has been taken on ',
    snapshotReloaded: ' snapshot reloaded.',
    snapReTable: ' snapshot reloaded as new table.',
    tableRemoved: `You can restore this table from trash bin.`,
    viewRemove: `You can restore this view from trash bin.`,
    tableLockedForOther:
      'Table locked for others, you can edit your table without any distraction.',
    passwordSent: '📩 We sent a forgot password link to',
    dontForCheck: "🧐 Don't forget to check your Spam/Junk folder.",
    invationSent: 'Invitation sent.',
    invitationResendSuccessfully: 'Invitation successfully resend to {inviteduserMail}.',
    accUpd: 'Your account successfuly updated.',
    proRemoved: `You can restore this project from trash bin.`,
    workRemoved: `You can restore this workspace from trash bin.`,
    somethingWrongInvitation: 'Some problems happened when sending invitations. \n',
    alreadyInAnOrg: 'Users already in another organization',
    alreadyInTheOrg: 'Users already in this organization',
    youAreAlreadyInOrg: 'You are already in an organization.',
    errorWhenCreatingInvitation: 'An error occurred while creating invitations',
    hasAnUnusedInvitation: 'Users have unused invitations',
    userNotFound: 'User does not exist',
    orgInviteBadRequest:
      'You are already involved in an organization. You cannot be involved in another organization.',
    goToOrganization: 'Go to organization',
    maxFileSizeToUpload:
      'Your files are too big. Please contact us if you want to upload files larger than 10MB.',

    contSs: 'You cannot create more snapshots. ',
    upgradeForSs: 'Upgrade your account for a new snapshot or overwrite an existing snapshot. ',
    clickYes: 'Click YES if you want to overwrite this version, ',
    clickNo: 'Click NO if you want to keep existing version.',
    no: 'No',
    yes: 'Yes',
    tableNotExists: 'The table you are looking for does not exists.',
    invitationAlreadyUsed: 'Invitation is already used.',
    pjExportSheetNameError:
      'There are incompatibility problems. Retable names will be modified according to the following rules.\n\n' +
      '*A retable name cannot exceed 31 characters.\n' +
      '*You cannot use the following special characters in a retable name. (\\ , / , * , ? , : , [ , ])',
    pjExportProjectNameError:
      'There are incompatibility problems. Project name will be modified according to the following rules.\n\n' +
      '*You cannot use the following special characters in a project name. (\\ , / , * , ? , : , [ , ])',
    pjExportProjectAndSheetNameError:
      'There are incompatibility problems. Project name will be modified according to the following rules (denoted by !) and Retable names will be changed according to the following (denoted by *) rules.\n\n' +
      '*A retable name cannot exceed 31 characters.\n' +
      '*!You cannot use the following special characters in a project or retable name. (\\ , / , * , ? , : , [ , ])',
    retableExportNameError:
      'There are incompatibility problems. File name will be modified according to the following rules.\n\n' +
      '*You cannot use the following special characters in a retable name. (\\ , / , * , ? , : , [ , ])',
    unregisteredMail: 'Unregistered Email(s)',
    info: 'Info',
    recaptchaErrorMessage:
      'A problem occurred during verification. Refresh the page or Contact us.',

    // profile
    uploadPic: 'Upload profile picture',
    enterName: 'Enter Name',
    surname: 'Surname',
    enterSurname: 'Enter Surname',
    enterEmail2: 'Enter Email',
    saveProfile: 'Save profile',
    nameIsRequired: 'Name is required.',
    needPassword: 'To change your email, you must first <p1>add a Retable password</p1>.',
    emailAlreadyInUse: 'is already in use in another account.',
    incorrectPassword: 'Incorrect password',

    //password
    currentPassword: 'Current password',
    newPassword: 'New password',
    passwordAgain: 'New password again',
    changePassword: 'Change password',

    // Audit
    activity: 'Activity',
    date: 'Date',

    // subscription
    credit: 'Credit: ',
    earnMore: 'Earn Credit!',
    currentPlan2: 'Current Plan: ',
    status: 'Status: ',
    manageSubscription: 'Manage your subscription',
    proAccount: 'Your account is on the {path} plan.',
    renewPlan: 'Your plan will renew at {path} for {path2}',
    endPlan: 'Your plan will end at {path}',
    carbonRemoval: 'We {path} to fund next-generation carbon removal',
    contribute: 'contribute 1% of purchases',
    active: 'Active',
    pastDue: 'Past Due',
    canceled: 'Canceled',
    paused: 'Paused',
    incomplete: 'Incomplete',
    yourAreUsingThisPlan: 'You are using this plan.',
    chooseoneplan: '<p1>Choose</p1> <p2>One Plan</p2>',
    useFreeTrial: 'Use Free Trial',
    useFreeTrialDesc: 'You can start a subscription while use free trial.',
    freeTrial: 'Free Trial',
    trialEndDate: 'Trial end date',
    remainingTrialDays: 'Remaining trial day(s)',
    subscriptionEndDate: 'Subscription end date',
    nextBillingDate: 'Next billing date',
    resumesAt: 'Resumes at',
    period: 'Period',
    totalSeat: 'Total seat',
    activeSeat: 'Active seat',
    seat: 'Seat',

    // filters
    contains: 'contains',
    donotContain: 'does not contain',
    iss: 'is',
    issnot: 'is not',
    isemptyy: 'is empty',
    issnotempty: 'is not empty',
    between: 'between',
    difference: 'difference',
    doesnotContain: 'does not contain',
    isFilter: 'is',
    isNot: 'is not',
    isEmptyFilter: 'is empty',
    isnotEmptyFilter: 'is not empty',
    is: 'is',
    isNot2: 'is not',
    isBefore: 'is before',
    isAfter: 'is after',
    notauth: 'not authorized',
    form: 'Form',
    otherusers: 'Other Users',

    // automations
    sendMail: 'Send mail',
    wRowAdded: 'When row is added',
    wRowDeleted: 'When row is deleted',
    wCellUpdated: 'When cell is updated',
    wFormSubmited: 'When form is submitted',
    atSchTime: 'At a scheduled time',
    sendRecords: 'Send records',
    selectToField: 'Select the "To" field.',

    // datavalidation
    minvalue: 'Min value:',
    maxvalue: 'Max value:',

    //RetableTableReferenceModal
    selectedVal: 'Selected value(s)',
    selectableVal: 'Selectable value(s)',

    // Faq
    pricing: 'Pricing',
    faq: 'FAQ',
    signIn: 'Sign in',
    signUpFree: 'Sign up for free',

    orchestratePowerful: 'Orchestrate powerful business solutions with a single source of truth.',
    limitImagination: 'The only limit is your imagination.',
    //////////
    whatisRetable: 'What is Retable?',
    det: 'Details',
    retableMean:
      'Retable is a simplified spreadsheet and database hybrid software program used' +
      ' as an online organization and collaboration tool. It is suitable for small and large' +
      ' businesses, NGOs and any other organizations that rely on collaborative working' +
      ' practices.',

    whyRetable: 'Why should I / my company prefer Retable?',
    whyAnswer:
      'Retable combines the familiar format of spreadsheets with the power of databases,' +
      ' creating a solution that teams love to use. It is easy to use and' +
      ' requires no technical experience. Retable is highly customizable and can be adapted' +
      ' to meet the needs of' +
      ' individual organizations or even different projects within a single entity.',
    whatAdvantages: 'What are the advantages of using Retable?',
    theAdvantages:
      'Retable allows you to quickly record and manage any type of scattered' +
      ' information. One of the key benefits is that it helps users save a huge amount of time.' +
      ' It has many different possibilities and as a web-based solution, the software is' +
      ' regularly updated with even more features to improve business efficiency and' +
      ' collaboration opportunities.',

    workMultipleExcel:
      'Retable allows you to work on multiple Excel and spreadsheet files at the same time.',
    dataEasy: 'Data manipulation is quick and easy.',
    adaptableSpecific: 'Adaptable to meet the needs of specific projects.',
    differentViews: 'Different views allow you to mix and match components.',
    elegantInterface: 'Elegant visual user interface.',
    multiUserTime: 'Multiple users can work seamlessly on the same table in real time.',
    userAuthorize: 'Users can be authorized and given access on a cell basis.',
    increasedSecurity: 'Increased security – Retable can mask column data determined by users.',
    editSpreadSheets:
      'Edit, manage and share spreadsheets and data with your business team. No code required.',
    storeReocrds: 'Store records and keep everything organized.',
    preformsImEx:
      'Performs import and export transactions efficiently. Users can export the' +
      ' file in several formats.',
    saveTime: 'Save time with rule-based data approval flows.',
    snapshotHis: 'Retable has snapshot history to track all changes.',
    chatWithOthers: 'Chat with other project members.',
    providesSimplifiedExcel:
      'Provides simplified excel / data / table management for those who' +
      ' are not skilled in using technology.',

    incorporateRetable: 'How do I incorporate Retable to my business?',
    incorporateDes:
      'The best way to understand the full capabilities of Retable is just to start using the' +
      ' free version. Once you get started working with Retable, you will start seeing the' +
      ' endless capabilities at your fingertips. With no training required and with an easy setup' +
      ' process, your team can quickly start to benefit from using a software solution that will' +
      ' revolutionise the way you work.',
    isFree: 'Is Retable free to use?',
    yesFree: 'Yes, it is free. There are also business tiers that match different use cases.',
    whatWorkspace: 'What is a workspace?',
    workspaceDes:
      'A workspace is an area with related projects. While each project is focused on a unique' +
      ' area, a number of projects can fall into similar business-operational categories. It is' +
      ' used to classify and combine projects. You can think of a workspace as a collection of' +
      ' projects and tables shared among a group of people working together.',

    whatProj: 'What is a project?',
    projDes:
      'Projects are like a spreadsheet and can contain number of tables. Each project should be' +
      ' unique, focus on one key area, and contain all of the information your organization has' +
      ' regarding that key area.',
    canCopyPaste: 'Can I copy-paste tables from different workspaces/projects?',
    copyPatseDes: 'You can move your tables to another project within the same workspace.',
    canShare: "Can I share my work with my colleagues who don't have a Retable account?",
    shareDes:
      'Yes, you can share your work with your colleagues via email, no matter if they do or don’t have a' +
      ' Retable account.',
    shareOptions: 'What are share options?',
    shareOptionsare: 'Share options are;',
    shareDes1:
      'Sharing Wwrkspace, project or tables by clicking “Share with...” within the website.',
    shareDes2: 'Sharing data by copy/paste into mail.',
    handleUsers:
      'How does Retable handle more than one user editing the same table/project/workspace?',
    handleUserstext:
      'Multi-user editing allows multiple users to edit same workspace, project or table at the' +
      ' same time.',
    handleUserDes:
      'While multiple users edit the same component at the same time, first letters of' +
      ' the users are shown on the top right of both screens.' +
      ' Whoever opens a shared workspace, project or table, all shared users first letters' +
      ' are shown on the top right of the screen.' +
      ' When a user edits a cell, other user(s) are able to view all changes after the user' +
      ' moves out of the cell.',

    whatAttachmetTab: 'What is the attachment file size limit for each table?',
    attachmetTabDes: 'The attachment file size limit is 2 GB per cell.',
    rowColLimit: 'What is the row/column limit per table?',
    limitsDes: 'Row limit per table is 2000, and column limit is 50',
    webSupported: 'Which web browsers are supported?',
    websDes: 'Google Chrome, Edge, Safari, Brave, Opera and Firefox are supported by Retable.',
    canChat: 'Can I chat with my colleagues while I am in a workspace or project?',
    canChatDes:
      'Pro commenting/chatting is available under each project for the users who have a' +
      ' share right on it.',

    //landing
    retableDes: 'Organize, display, share and edit data like in spreadsheets, easily...',
    getStartedFree: 'Get started for free',
    whatRetable: 'What is Retable?',
    retableWork:
      'Retable is an online hybrid spreadsheet and database software can be used as' +
      ' data organization and collaboration tool.',
    retableWork2:
      'It is suitable for small and large businesses, NGOs and any other organizations' +
      ' relying on collaborative working practices.',
    noLimitsData: 'Data Organisation With No Limits.',
    organizeData: 'Organize your data with {path} and share it.',
    easyTables: 'Project, tables are easy to navigate with colors. No more folders...',
    dataSafe: 'Your data is secure and safe with a great change history.',
    storedActions: 'Each record is stored with its change history together with comments.',
    easyTables: 'Creating a table is one click away like below.',
    sales: 'Sales',
    salesPipeline: 'Sales Pipeline',
    salesAssets: 'Sales Assets Tracking',
    businessDevelopment: 'Business Development',
    creativeTeams: 'Creative Teams',
    designProjPipeline: 'Design Project Pipeline',
    visualInspirations: 'Visual Inspirations',
    artGallery: 'Art Gallery Management',

    marketing: 'Marketing',
    socialMedia: 'Social Media Calendars',
    contentMarketing: 'Content Marketing',
    management: 'Management',
    emailMarketing: 'Email Marketing',

    humanResources: 'Human Resources',
    recruitmentTracking: 'Recruitment Tracking',
    employeeSurveys: 'Employee Engagement Surveys',
    interviewQuestions: 'Interview Questions',

    projectManagement: 'Project Management',
    projectTracker: 'Project Tracker',
    contractorTime: 'Contractor Time Tracking',
    projectPipeline: 'Project Pipeline',

    retableforSpin: 'Take Retable for a spin',
    freeRetable: 'Retable is free to use for teams of any size.',

    product: 'Product',
    termsService: 'Terms of Service',
    privacyPolicy: 'Privacy Policy',
    airtableAlternative: 'Airtable Alternative',
    googleSheetsAlternative: 'Google Sheets Alternative',

    company: 'Company',
    blog: 'Blog',
    reachUs: 'Reach us',

    //Pricing.js
    plansPricing: 'Plans & Pricing',
    retableFreeuse: 'Retable is free to use.',
    contributePurchases: 'We contribute 1% of purchases to fund next-generation carbon removal',
    twoMonths: '2 Months',
    oneYear: '1 Year',

    //login
    login: 'Login',
    signinGoogle: 'Sign in with Google',
    signInLinkedIn: 'Sign in with LinkedIn',
    forgotPassword: 'Forgot Password',
    dontHaveAccount: "Don't have an account?",
    emailCanotEmpty: 'Email can not be empty.',
    passwordCanotEmpty: 'Password can not be empty.',
    invalidPassword: 'Invalid password',
    passwordValid: 'Your password must be include at least 8 characters.',
    enterPassword: 'Enter your password',
    enterYourEmail: 'Enter your email',
    start: 'Start',
    sign: 'Sign',
    in: 'in',
    forgotPass1: 'Forgot',
    forgotPass2: 'password',
    rememberMe: 'Remember me for 30 days',

    // forgetpasswor
    resetPass: "Enter your email address and we'll send you a link to reset your password.",
    back: 'Back',

    // signup
    nameContempty: 'Name can not be empty',
    lastnameContEmpty: 'Last name can not be empty',
    passVal: 'Your password must be least 8 characters',
    firstName: 'First Name',
    lastName: 'Last Name',
    createPassword: 'Create a password',
    signupGoogle: 'Sign up with Google',
    signUpLinkedIn: 'Sign up with LinkedIn',
    alreadyhaveAccount: 'Already have an account?',
    signUpFree1: 'Sign up',
    signUpFree2: 'free',
    unregisteredUser: 'Email is not registered.',
    worngLoginPass: 'Wrong password',
    goRegister: 'Go sign up',
    errorEmailContainsRetable: 'Retable domain cannot be used, you can use a different domain.',

    //Appsumo Signup
    activeYourAccount1: 'Activate',
    activeYourAccount2: 'your account',

    //thankyou
    thankYou: ' Thank you for signing up Retable. 🎉',
    canSignin: 'You can {path} now.',
    signIn3: 'Sign in',
    alsoVerify: 'Please verify your email to use full features.',
    dontForget: "(Don't forget to check your spam/junk folder)",
    confirmationSent: 'A confirmation email has been sent to',

    // retableWorkspacebody
    noProjectAtAll:
      'There are no projects in this workspace. Use "Add new project" button to add one.',

    // jexcel
    minimumkarakter: 'Min character:',
    maksimumkarakter: 'Max character:',
    customizeColumn: 'Customize column',
    splitColumnData: 'Split column data',
    insertColumnBef: 'Insert a new column before',
    insertColumnAft: 'Insert a new column after',
    duplicatCell: 'Duplicate cell',
    duplicateColumn: 'Duplicate column',
    deleteColumn: 'Delete column',
    deleteSelected: 'Delete selected column(s)',
    askToUpdate: 'Ask to update',
    copy2: 'Copy',
    cut: 'Cut',
    paste: 'Paste',
    sendAsEmail: 'Send as an email',
    saveAs: 'Save as csv',
    validationError: 'Validation Error',
    checkType:
      'Please check error notifications in cells for details or customize column' +
      ' properties to match the validation criteria',
    requiredField: 'Required Field',
    fillCell: 'Please fill in the cell.',
    fillField: 'Please fill out this field',
    uniqueColumn: 'Unique Column',
    valuesUniq: 'Each value in this column must be unique. ',
    valuesUniqDes: ' more cell(s) with same value.',
    typeError: 'Type Error',
    contentWrong: 'Content or value does not match the column type of this cell.',
    followRules: 'The value must follow these rule(s):',

    noRecords: 'No records found',
    show: 'Show ',
    entries: ' entries',
    columnName: 'Column name',
    renameColumn: 'Rename this column',
    rowBefore: 'Insert a new row before',
    rowAfter: 'Insert a new row after',
    duplicateRow: 'Duplicate row',
    deleteSelRows: 'Delete selected row(s)',
    clearSelCells: 'Clear selected cell(s)',
    editComments: 'Edit comments',
    addComments: 'Add comments',
    clearComments: 'Clear comments',
    sureDelRow: 'Are you sure you want to delete the selected rows?',
    sureDelCol: 'Are you sure you want to delete the selected columns?',
    destroyCell: 'This action will destroy any existing merged cells. Are you sure?',
    clearSearch: 'This action will clear your search results. Are you sure?',
    confCell: 'There is a conflict with another merged cell',
    invalidMerge: 'Invalid merged properties',
    cellMerged: 'Cell already merged',
    noSelected: 'No cells selected',
    valueInvalid: 'The value of cell is not valid according to the specified rule(s).',
    search: 'Search',
    dragDes: 'Drag to adjust number of frozen columns',
    emptyRow: 'Empty row',
    noDeleteLastCol: 'It is not possible to delete the last column.',
    leastRow: 'Table should have at least one row.',
    leastCol: 'Table should have at least one column.',
    setAsHeader: 'Set as header',

    //Retable Create Project Modal
    getUpAndRunningFast: 'Get up and running fast!',
    startScratchDescription: 'Create a new blank project with custom tables and views.',
    importProjectDescription: 'Import a CSV, XLS or Retable file to create your Retable project.',
    startTemplateDescription: 'Select a template to get started and customize as you go.',
    backToTheRetable: 'Back to the Retable',

    // projects
    shareMe: 'Projects shared with me',
    externallySavedProjects: 'Externally saved projects',

    //Retable Chart View
    line: 'Line',
    bar: 'Bar',
    pie: 'Pie',
    area: 'Area',
    'x-axis': 'X-axis',
    'y-axis': 'Y-axis',
    categoriesField: 'Categories field',
    values: 'Values',
    retableView: 'Retable View',
    chartView: 'Chart View',

    //Retable X Axis Menu
    pickColumn: 'Pick a column',

    //Retable Y Axis Menu
    count2: 'Count',
    field: 'Field',
    sum2: 'Sum',
    min2: 'Min',
    max3: 'Max',
    avg2: 'Avg',
    addValue: 'Add value',
    changeColor: 'Change color',
    // datavalidation
    minCha: 'Min character:',
    maxCha: 'Max character:',
    regexx: 'Regex:',
    minVal: 'Min value:',
    maxVal: 'Max value:',

    // retableAutomationFindValue
    operator2: 'Operator:',
    noCond: 'No conditions found.',
    addCon: 'Add Condition',
    addAnoCon: 'Add Another Condition',

    // password
    passReq: "Password doesn't meet requirements.",
    typePas: 'You must type your current password.',
    typeNewPas: 'New Password',
    typeNewPascheck: 'You must type new password.',
    typeNewPasAgain: 'You must type new password again.',
    passNoMatch: 'New passwords do not match.',
    passDif: 'New password must be different.',
    passDes:
      'Password must be at least 8 characters in length and contain at least 1 number, 1 uppercase and 1 lowercase characters',

    //Whats New
    whatsNew: "What's new",
    newsNotFound: 'News not found.',
    searchInNews: 'Search in news',
    learnMore: 'Learn more',
    howToUse: 'How to use?',
    backList: 'Back to List',

    // payment
    paymentProblem: '🧐 It seems there is a problem on your payment.',
    goToPayment: 'Go to Subscriptions & Payment',
    checking: 'Checking...',
    upgradeForFreeTitle: 'Upgrade Your Account for Free Now!',
    tryChoosenPlan: 'Do you want to continue for free with the chosen plan?',
    nowYourPlanIsPro: 'Now, you can enjoy the Retable PRO plan for free for 7 days!',

    // retableinviteEarnAlert
    zerocred: 'You have $0 in credit.',
    ifInvite: 'if you {path} right now,',
    inviteFf: 'Invite friends',
    andEarn: 'and earn $3 credits!',
    earn5: 'you can earn $3!',
    freinds: 'invite friends and coworkers ',

    // Retableexporttablemodal
    exportas: 'Export As',
    exportFormat: 'Export Format',

    // RetableChart
    xAxix: 'Please select a column from the X-axis. 📈',
    changeAxix:
      'Change values on the Y-axis or change chart type if you want to customize your' +
      ' chart. 🥧',
    selectCate: 'Please select a column from Categories field. 📈',
    custChart: 'Change values or change chart type if you want to customize your chart. 🥧',
    exCharts: 'You can see example charts below.',

    // Retable List View
    warningDeleteLastRow: 'It is not possible to delete the last row.',
    warningDeleteLastColumn: 'Table should have at least one column.',

    //Retable List View Toolbar
    customizeList: 'Customize List',
    customize: 'Customize',
    changeViewType: 'Change view type',

    //Retable Loading
    loading: 'Loading...',
    pleaseWait: 'Please wait...',

    //Verify
    go: 'Go',
    verifying: 'Verifying',
    successVerify: 'Successfully verified. You can login now.',
    failureVerify: 'Not verified or already verified token. Please go to the home page.',
    notVerify:
      "Sorry, you need to verify your email address (please don't forget to check your spam/junk folders 👍)",

    //RetableCreateNew
    newWorkspace: 'New Workspace',
    getUp: 'Get up and running fast!',
    buildNow: 'Build Now',
    building: 'Building',
    importDocument: 'Import document',
    slct: 'Select',
    selected: 'Selected',
    workspaceNameTitle: 'Workspace Name',
    workspaceDescTitle: 'Workspace Description',
    wsNameCantEmpty: 'Workspace name can not be empty.',
    pjOptionCantEmpty: 'You need to select one of the project creation types above.',
    letsFindFile: '<p1>Lets </p1><p2>find this file</p2>',
    justImport: 'You can only import ".csv", ".xls(x)" or ".retable" files.',
    dragHere: 'Drag here or select a file',
    change: 'Change',
    importedFile: 'Imported file.',
    neWProject: 'New Project',
    newWorkspaceDesc: `The Workspace is used to classify and combine projects.
    Think of a Workspace as a collection of projects and
    tables shared among a group of people working together.`,
    newProjectDesc: `Each Project should be unique, 
    focus on one key area and contain all the information your 
    organization has regarding that area.`,
    forUseInOrganization: 'For use in organization',
    forPersonalUse: 'For personal use',
    createOrgWSDesc1: 'You can apply branding to the projects you create in the organization.',
    createPersonalWSDesc1:
      'You can not apply branding to the projects you create in your personal workspace',
    createOrgWSDesc2:
      'To create the organization workspace, you must first create an organization.',
    createOrgWSDesc3: 'Only available with the Business plan.',
    createOrgWSDesc4:
      'The organization workspace cannot be created. Branding can be applied in Team plan.',
    firstlyYouMustCreateAnOrganization: 'First, create an organization.',
    typeProjectName: 'Type project name',
    typeProjectDescription: 'Type project description',
    projectNameTitle: 'Project Name',
    projectDescTitle: 'Project Description',
    pjNameCantEmpty: 'Project name can not be empty.',

    //Team
    createTeam: 'Add team',
    addTeam: 'Add team',
    createOrganization: 'Add organization',
    addOrganization: 'Add organization',
    pressCreateTeam: 'You can create a team by clicking "Create Team" button.',
    teamName: 'Team Name',
    organizationName: 'Organization Name',
    add: 'Add',
    teamNameMustMin3Char: 'Team name must be at least 3 characters.',
    organizationNameMustMin3Char: 'Organization name must be at least 3 characters.',

    teamNameCanNotBeEmpty: 'Team name can not be empty.',
    organizationNameCanNotBeEmpty: 'Organization name can not be empty.',
    errorOrganizationNameContainRetable:
      'The organization name cannot contain "Retable", you can use a different organization name.',
    addMember: 'Add member',
    detail: 'Detail',
    renameTeam: 'Rename team',
    deleteTeamTitle: 'Are you sure?',
    deleteTeamText: 'Once deleted, you will not be able to recover this team!',
    creator: 'Creator',
    admin: 'Admin',
    member: 'Member',
    invited: 'Invited',
    lead: 'Lead',
    deleteTeamMemberTitle: 'Are you sure?',
    deleteTeamMemberText: 'You are about to remove this team member.',
    youCantRemoveMembers: "You can't remove team members.",
    memberNotFound: 'Member not found!',
    memberNotFoundWarning: 'Not found members to add this team',

    // Brand
    brandTitleMustMin3Char: 'Brand title must be at least 3 characters.',
    brandTitleCanNotBeEmpty: 'Brand title can not be empty.',
    brandIconSizeError: 'Brand icon size must be under 1MB.',
    brandIconMustBeSquare: 'Brand icon must be square.',
    brandLogoSizeError: 'Brand logo size must be under 1MB.',
    brandWrongType: 'Wrong file type.',
    brandReset: 'Reset',
    brandResetWarning: 'You are about to reset your branding settings.',
    branding: 'Branding',
    presentYourBrand:
      'Organization branding can only be applied to projects created in the organization workspace. Customize your brand settings from the "Organization" tab on the "Account Overview" page.',
    presentYourBrand2:
      'Only available for the Team. Customize your brand settings from the "Organization" tab on the "Account Overview" page.',
    presentYourBrand3:
      'The user must have Owner or Editor authorization to use the Branding button.',
    presentYoutBrand4:
      'Only available for the organization you are a member of. Customize your brand settings from the "Organization" tab on the "Account Overview" page.',
    //RetableTeamMemberRole
    inactive: 'Inactive',
    inactiveDesc: 'User has active permission in another shared team.',

    //Organization
    removeMember: 'Remove member',
    removeInvited: 'Remove invited member',
    removeMemberOrganization:
      'This operation will remove the member from this organization.' +
      ' Are you sure to perform this operation?',
    removeInvitedOrganization:
      'This operation will remove the invited member from this organization.' +
      ' Are you sure to perform this operation?',
    members: 'Members',
    inviteds: 'Invited member(s)',
    accept: 'Accept',
    reject: 'Reject',
    invitationPlanCancellationMessage: `Your account already has a payment plan. 
    If you accept the invitation, payment plan of your account will be cancelled and it will continue with an organization plan. 
    These changes can affect the use of workspace/project/table. 
    Do you still want to accept the invitation?`,
    needBussinessPlanUpgrade: 'Need Bussiness Plan upgrade to perform this operation.',
    deleteOrganizationMessage:
      'You cannot restore an organization if you delete. Are you sure to perform this operation?',
    orgQuantityError: 'There are not enough seats. You need to buy more seats to invite new users.',
    notEnoughSeatFreeUser:
      'You have been downgraded to the Free plan because not enough seats were purchased. Please contact with organization admin.',
    notEnoughSeatAdmin:
      'This user was downgraded to the Free plan because not enough seats were purchased.',
    //RetableFormTableLockMessage
    goToDashboard: 'Go to Dashboard',
    goToRetable: 'Go to Retable',
    formLockedMsg: 'This form is locked. You can not edit.',
    formTableLockMsg: 'Hi, there 👋. This form is locked.',

    //RetableFormViewEdit
    formSettings: 'Form Settings',
    extendedCoverImg: 'Extended cover image',
    sendResponse: 'Send response',
    sendResponseDescription:
      'People who logged in and fill out the form can receive a copy of their form by email.',

    //RetablePlanCard
    collaboratorPerWorkspace: 'Up to <p1></p1> collaborators per workspace',
    collaboratorPerWorkspacePro: '<p1></p1> collaborators per workspace',
    workspaceLimit: '<p1></p1> workspace',
    projectLimit: 'Up to <p1></p1> project per workspace',
    projectLimitPro: '<p1></p1> project per workspace',
    tableLimit: '<p1></p1> table per project',
    recordsProject: '<p1></p1> records per project',
    fileAttachmentProject: '<p1></p1> attachment space per project',
    changeHistoryFree: 'Change History',
    changeHistory: 'Change <p1></p1> History Action',
    last10: 'Last 10',
    last100: 'Last 100',
    uptimeSLA: 'Uptime SLA: <p1></p1>',
    annually: 'Annually',
    monthly: 'Monthly',
    yearly: 'Yearly',
    planFreeDesc: 'try us before you need more',
    planBasicDesc: 'great for small teams',
    billedMonthly: 'billed monthly',
    billedAnnually: 'billed annually',
    numberOfSeats: '<p1></p1> number of seats',

    // RETABLE SHARE MODAL
    invNewCol: 'Invite New Collaborators',
    invAs: 'Invite As',
    projLevCol: 'Project Level Collaborator',
    AllowOnProj: 'Allow access only the project.',
    workspLevColl: 'Workspace Level Collaborator',
    AllowAccPrWor: 'Allow access all projects of the workspace.',
    shareRecc: 'Share and add the record(s)',
    inviteMorCol: 'Invite more collaborators via email',

    //RetableSpreadsheetHeader
    saveRetable: 'Save Retable',
    needRegister: "You can save this spreadsheet by signing up - it's free!",
    startNow: 'Start Now',
    needRegisterForShare: "You can share this spreadsheet by signing up - it's free!",

    // Calendar View
    chooseACalendarField: 'Choose a date&time column',
    yourRowsPlacedByThisField: 'Your records will be placed based on this column.',
    yourRowsPlacedByThisRange: 'Your records wil be placed based on this columns.',
    createACalendarColumn: 'Add a date&time column to place records on the calendar.',
    createNewCalendarColumn: 'Add a new date&time column',
    usingCalendarColumn: 'Using date&time column',
    usingDateRange: 'Using date range',
    setEndDate: 'Set an end date field',

    // Map View
    chooseALocationField: 'Choose a location column',
    createALocationColumn: 'Add a location column to place records on the map.',
    createNewLocationColumn: 'Add a new location column',
    usingLocationColumn: 'Using location column',
    backToLocation: 'Go back to location',
    draggableNow: "It's draggable now.",
    newMarker: 'New marker',
    relocate: 'Relocate',
    searchACity: 'Search a city',
    gettingLocationAddress: 'Getting location address',
    deleteLocation: 'Delete location',
    latitude: 'Latitude',
    longitude: 'Longitude',

    month: 'Month',
    week: 'Week',
    day: 'Day',
    today: 'Today',

    // Kanban View
    deleteStack: 'Delete Stack',
    renameStack: 'Rename Stack',
    chooseAKanbanColumn: 'Choose select or collaborator column',
    chooseAField: 'Choose a field',
    createNewSingleSelect: 'Add new single select column',
    createNewCollaborator: 'Add new collaborator column',
    usingSelectOrCollaboratorColumn: 'Using single select or collaborator column',
    createAKanbanColumn: 'Add single select or collaborator column',
    selectAFieldKanban: 'Kanban Field',
    yourRowsStackedBased: 'Your records will be stacked based on this field.',
    duplicateItem: 'Duplicate item',
    itemBefore: 'Insert a new item before',
    itemAfter: 'Insert a new item after',
    itemDetail: 'Item Detail',
    addNewItem: 'Add New Item',

    // Formulation
    formula: 'Formula',
    formulaDesc: 'Compute a value in each row.',
    formulaError: 'There is an error in the formulation. Please check the formula.',
    formulaCycleError: 'Circular reference detected.',
    formulaColumnConfigured: 'Formula columns should be configured in the customize column.',

    theme: 'Theme',
    dark: 'Dark',
    light: 'Light',

    // Desktop
    openWithRetable: 'Open with Retable',
    openAsNewProject: 'Open As A New Project',
    existingVersionWillOpen: '*The existing version will open.',
    versionYouWantToOpenWillOpen: '*The version you want to open will open.',
    open: 'Open',

    // Switch View
    youCanNotSwitchToKanban:
      'You cannot switch to Kanban View for tables without a Select or Collaborator column.',
    youCanNotSwitchToCalendar:
      'You cannot switch to Calendar View for tables without a Calendar column.',
    youCanNotSwitchToMap: 'You cannot switch to Map View for tables without a Geolocation column.',
    youCanNotSwitchToForm: 'You cannot switch to Form View.',
    youCanNotSwitchFromForm: 'You cannot switch from Form View to other views.',

    //Trial Expired
    trialExpired: 'Your Retable trial has expired 😥',
    trialUpgradePlan: 'Upgrade to a paid plan to continue with your glorious work 🌟',
    trialUseCoupon:
      "Don't forget to use the 50% off coupon code 'NEWYEAR50' valid on all plans at checkout 🚀",
    trialRememberCoupon: 'Remember, the coupon is valid until February 28! 🎁',

    // RetableColumnsMenu
    changesNotSavedAlert: 'Are you sure? Your changes are not saved.',
    hideAllColumnNames: 'Hide all column names',

    // Form View
    dragImage: 'Drag or select an image here',

    // Card View
    customizeCards: 'Customize Cards',
    imageColumn: 'Image Column',
    selectAnCardColumn: 'Select an image, QR or color column',
    usingCardColumn: 'Using image, QR or color column',
    selectCardColumnDesc: 'You can display your selected cell value in the card header.',
    chooseAColumn: 'Choose a column',
    addCardColumn: 'Add an image, QR or color column',
    createNewCardColumn: 'Add new {columnType} column',
    deleteItem: 'Delete item',

    // General Toast
    tableCopied: 'Table copied.',
    tableMoved: 'Table moved.',
    orgUpdated: 'Your organization successfully updated.',
    orgDeleted: 'Your organization successfully deleted.',
    passwordChanged: 'Your password successfully changed.',
    sent: 'Sent.',

    // RetableRowDetailRightPanel
    noSelection: 'No row selected to display',

    // Welcome
    letsStart: "Let's start!",
    welcomeRetable: 'Welcome to Retable!🚀',
    welcomeDescription:
      "We understand that trying something new can be challenging, but we want to assure you that there's no need to worry.🚀{break}" +
      "We're here to make the transition as smooth as possible.{break}" +
      "To help you get up to speed, we've prepared a quick video for you.👇🏻",
    onboarding_Q1: 'What will you be using Retable for?',
    onboarding_Q1_description: "We'll use this later to suggest templates especially for you.",
    onboarding_Q2: 'About your organization',
    onboarding_Q2_description: "What is your organization's name?",
    onboarding_Q3: 'Select number of employees',
    onboarding_Q3_description: 'How many people work at your organization?',
    onboarding_Q4: 'What best describes your role?',
    onboarding_Q4_description: "We'll help you get started based on your response.",
    onboarding_Q5: 'Which apps have you used previously?',
    startup: 'Startup',
    small_business: 'Small business',
    large_company: 'Large company',
    personal_freelancer: 'Personal / freelancer',
    educational: 'Educational',
    nonprofit: 'Non-profit / charity',
    less5: 'Less than 5',
    more500: 'More than 500',
    // accountant: 'Accountant',
    // analyst: 'Analyst',
    // attorney: 'Attorney',
    // developer: 'Developer',
    // educator: 'Educator',
    // teacher: 'Teacher',
    personal: 'Personal',
    manager: 'Manager',
    accountant: 'Accountant',
    administration: 'Administration',
    analyst: 'Analyst',
    architect: 'Architect',
    attorney: 'Attorney',
    banker: 'Banker',
    businessOwner: 'Business Owner',
    consultant: 'Consultant',
    customerServiceRepresentative: 'Customer Service Representative',
    developer: 'Developer',
    educator: 'Educator',
    engineer: 'Engineer',
    executive: 'Executive',
    financialAnalyst: 'Financial Analyst',
    graphicDesigner: 'Graphic Designer',
    humanResourcesSpecialist: 'Human Resources Specialist',
    itSpecialist: 'IT Specialist',
    marketingManager: 'Marketing Manager',
    nurse: 'Nurse',
    operationsManager: 'Operations Manager',
    paralegal: 'Paralegal',
    physician: 'Physician',
    realEstateAgent: 'Real Estate Agent',
    salesRepresentative: 'Sales Representative',
    scientist: 'Scientist',
    softwareEngineer: 'Software Engineer',
    teacher: 'Teacher',
    therapist: 'Therapist',
    writer: 'Writer',
    others: 'Others',

    // Congrats.js
    congratulations: 'Congratulations',
    congratsDescription:
      'You have succesfully set up your account.{break}' +
      'What is next? Start adding your project in your workspace and create your first app!',
    g2Checkbox:
      'I allow Retable to connect me to leave a review for Retable on Capterra or G2 so I can get a $10 gift card.',
    congratsDiscord: 'Have questions? Join our Discord server',
    sweet: 'Sweet',

    // Groupbymenu
    groupByColumnInfo: 'Column data is accessible while the grouped column is hidden.',

    // Settings.js
    digitSeparator: 'Digit Separator',
    comma: 'Comma',
    dot: 'Dot',
  },
};
