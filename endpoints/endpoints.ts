export const baseURL = process.env.REACT_APP_API_URL as string;
export const originUrl = `${window.location.origin}`;

export const apiHeader = `${baseURL}/api/Header`;
export const apiHeaderSearch = `${baseURL}/api/Header/Search`;

export const apiAccountSettings = `${baseURL}/api/AccountSettings`;


export const apiHealth = `${baseURL}/api/Health`;


export const apiPartsAndServices = `${baseURL}/api/Home/PartsAndServices`;
export const apiTechnicalDocumentation = `${baseURL}/api/Home/TechnicalDocumentation`;
export const apiIssueReports = `${baseURL}/api/Home/IssueReports`;
export const apiQuoteRequests = `${baseURL}/api/Home/QuoteRequests`;
export const apiPlantSiteDetails = `${baseURL}/api/Home/PlantSiteDetails`;

export const apiFile = `${baseURL}/api/File`;

export const apiPlantConfig = `${baseURL}/api/PlantConfig`;
export const apiPlantConfigImage = `${baseURL}/api/PlantConfig/GetFile`;


export const apiUnit = `${baseURL}/api/Unit`;
export const apiUnitGetAll = `${baseURL}/api/Unit/GetAllByPlantId`;


export const apiPlantProfileTypes = `${baseURL}/api/PlantProfileType/GetAll`;
export const apiPlantFuelTypes = `${baseURL}/api/FuelType/GetAll`;
export const apiProductTypes= `${baseURL}/api/ProductType/GetAll`;
export const apiEquipmentAttachmentTypes = `${baseURL}/api/EquipmentAttachmentType/GetAll`;
export const apiAssociatedUnitTypes= `${baseURL}/api/AssociatedUnit/GetAll`;
export const apiManufacturerTypes = `${baseURL}/api/Manufacturer/GetAll`;
export const apiUnitConfigurationTypes = `${baseURL}/api/UnitConfiguration/GetAll`;
export const apiContractBasisTypes = `${baseURL}/api/ContractBasis/GetAll`;
export const apigetEquipmentModelNameTypes = `${baseURL}/api/EquipmentModel/GetAll`;

export const apiGetFAQ = `${baseURL}/api/FAQ/GetFAQ`;
export const apiUpdateFAQ = `${baseURL}/api/FAQ/UpdateFAQ`;

export const apigetAllQuoteRequestTypes = `${baseURL}/api/cpitem/quote-request/GetAllQuoteRequestTypes`;
export const apigetAllRequestPriority = `${baseURL}/api/RequestPriority/GetAll`;
export const apiGetAllOutageSeasons = `${baseURL}/api/cpitem/quote-request/GetOutageSeasons`;
export const apiGetAllPartsRequestReasons = `${baseURL}/api/cpitem/quote-request/GetPartsRequestReasons`;
export const apiGetAllServiceRequestReasons = `${baseURL}/api/cpitem/quote-request/GetServiceRequestReasons`;
export const apiGetAllQuoteTypes = `${baseURL}/api/cpitem/quote-request/GetAllQuoteTypes`;
export const apiquoterequest = `${baseURL}/api/cpitem/quote-request`;
export const apiDeleteAttachment = `${baseURL}/api/cpitem/quote-request/DeleteAttachment`;
export const apiUpdateQuoteStatus = `${baseURL}/api/cpitem/quote-request/UpdateQuoteStatus`;
export const apiUpdateQuoteAttachment = `${baseURL}/api/cpitem/quote-request/UpdateAttachment`;
export const apiquoterequestCreateAttachment = `${baseURL}/api/cpitem/quote-request/CreateAttachment`;
export const apiGetQuoteRequest = `${baseURL}/api/cpitem/quote-request/GetByGlobalItemId`;
export const apiGetQuoteRequestAttachmentByType = `${baseURL}/api/cpitem/quote-request/GetQuoteRequestAttachmentByType`;
export const apiGetQuoteRequestAttachmentList = `${baseURL}/api/cpitem/quote-request/GetQuoteRequestAttachmentList`;
export const apiGetQuoteRequestAttachment = `${baseURL}/api/cpitem/quote-request/GetAttachment`;


export const apiPlantEquipment= `${baseURL}/api/PlantEquipment`
export const apiGetAllEquipmentsByPlantID= `${baseURL}/api/PlantEquipment/GetAllByPlantId`
export const apiGetAllEquipmentsByUnitID= `${baseURL}/api/PlantEquipment/GetAllByUnitID`
export const apiGetAllPlantEquipmentsAttachments= `${baseURL}/api/EquipmentAttachment/GetAllByPlantEquipmentId`
export const apiEquipmentAttachment= `${baseURL}/api/EquipmentAttachment`
export const apiGetEquipmentAttachmentFile= `${baseURL}/api/EquipmentAttachment/GetFile`
export const apiSiteUnits = `${baseURL}/api/Unit`;


export const apiPlantContacts= `${baseURL}/api/PlantContact/GetAllByPlantId`
export const apiPlantContact= `${baseURL}/api/PlantContact`
export const apiPlantContactGetAvatar= `${baseURL}/api/PlantContact/GetAvatar`


export const apiMitsubishiPowerReportType = `${baseURL}/api/MitsubishiPowerReportType`;
export const apiMitsubishiPowerReport = `${baseURL}/api/MitsubishiPowerReport`;
export const apiReportDownloadFile = `${baseURL}/api/File/DownloadFile`;

export const apiItemTypeCatalog = `${baseURL}/api/ItemTypeCatalog`;
export const apiPartsCatalog = `${baseURL}/api/cpitem/parts-catalog`;

export const apiMessage = `${baseURL}/api/message-threads/Message`;
export const apiMessageThreads = `${baseURL}/api/message-threads/Thread`;
export const apiMessageAttachment = `${baseURL}/api/message-threads/MessageAttachment`;

export const omManualApiUrl = `${baseURL}/api/cpitem/om-manual`;
export const technicalBulletinApiUrl = `${baseURL}/api/cpitem/technical-bulletin`;
export const technicalBulletinShareWithUG = `${baseURL}/api/cpitem/technical-bulletin/ShareWithUG`;

export const issueReportApiUrl = `${baseURL}/api/cpitem/issue-report`;
export const QuoteRequestApiUrl = `${baseURL}/api/cpitem/quote-request`;
export const getSearchResults = `${baseURL}/api/Search/GetSearchResults`;
export const apiGenerateAccessReportUrl = `${baseURL}/api/roles-and-permissions/BaseOrg/GeneratePlantAccessReport`;

export const userApiUrl = `${baseURL}/api/roles-and-permissions/User`;
export const reactivateUserApiUrl = `${baseURL}/api/roles-and-permissions/User/ReactivateUser`;
export const roleApiUrl = `${baseURL}/api/roles-and-permissions/Role`;
export const baseOrgRoleApiUrl = `${baseURL}/api/roles-and-permissions/user-baseorg-role`;
export const orgGroupApiUrl = `${baseURL}/api/roles-and-permissions/OrgGroup`;
export const controllerApiUrl = `${baseURL}/api/controller`;

export const KPIsApiUrl = `${baseURL}/api/ESR`;

export const updateNotificationsAsRead = `${baseURL}/api/Notification/BulkUpdateAsRead`;
export const updateItemsAsRead = `${baseURL}/api/Notification/BulkMarkAsRead`;
export const updateNotificationsAsDismissed = `${baseURL}/api/Header/BulkDismissNotifications`;
export const getNotificationTypesApiUrl = `${baseURL}/api/Notification/GetNotificationTypes`;

export const sharedDocumentUrl = `${originUrl}/shared-document`;
export const apiEmailOptOut = `${baseURL}/api/EmailOptOut`;

export const TakasagoTechBulletinWebsiteURL = 'https://www.gtnews.mhi.co.jp/en/';
