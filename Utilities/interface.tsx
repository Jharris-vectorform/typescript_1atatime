import { CSSProperties, FunctionComponent, ReactElement } from "react";

export interface SelectedPlantDTO {
  plantId: number;
  name: string;
  isDefault: boolean;
  baseOrgId: number;
}
export interface PlantSiteDetailsDTO {
  success: boolean;
  message: string;
  permissions: number;
  data: PlantSiteDetails;
}

export interface PlantSiteDetails {
  plantId: number;
  plantLoad: string;
  ambientTemperatureFahrenheit: string;
  ambientTemperatureCelsius: string;
  lastOutage?: {
    day: number;
    month: number;
    year: number;
  };
  nextPlannedOutage?: {
    day: number;
    month: number;
    year: number;
  };
}

export interface HeaderData {
  user: {
    userId: number;
    firstName: string;
    lastName: string;
    pictureUrl: string;
    plants: {
      plantId: number;
      baseOrgId: number;
      name: string;
      isDefault: boolean;
    }[];
  };
  notifications: Notification[];
  newNotificationCount: number;
}

export interface HeaderDTO {
  success: boolean;
  message: string;
  permissions: number;
  data: HeaderData;
}

export interface AccountSettingsData {
  fName: string;
  lName: string;
  email: string;
  defaultBaseOrgId: number;
  defaultBaseOrgName: string;
  optedOut: boolean;
}

export interface AccountSettingsDTO {
  success: boolean;
  message: string;
  permissions: number;
  data: AccountSettingsData;
}

export interface PlantConfigImageDTO {
  file: string;
}
export interface PlantConfigDTO {
  success: boolean;
  message: string;
  permissions: number;
  data: {
    plantId: number;
    baseOrgId: number;
    baseOrgName: string;
    operators: string;
    websiteURL: string;
    owner: string;
    parentGroup: string;
    address1: string;
    address2: string;
    address3: string;
    mainPhone: string;
    frequency: string;
    mhiRegion: string;
    notesComments: string;
    file: string;
    units: null;
  };
}

export interface PlantConfigData {
  plantId: number;
  baseOrgId: number;
  baseOrgName: string;
  operators: string;
  websiteURL: string;
  owner: string;
  parentGroup: string;
  address1: string;
  address2: string;
  address3: string;
  mainPhone: string;
  frequency: string;
  mhiRegion: string;
  notesComments: string;
  file: string | null;
  units: null;
}

// endpoints for notification tray

export interface Notification {
  body: string;
  ctaLink: string;
  date: string;
  dismiss: boolean;
  itemId: number;
  itemTypeId: number;
  notificationId: number;
  notificationTypeId: number;
  read: boolean;
}

export interface NotificationType {
  typeId: number;
  name: string;
  description: string;
}

export interface UnitDATA {
  unitId: number;
  plantId: number;
  name: string;
  parentGroupOwnership: string;
  operator: string;
  directOwnership: string;
  coDate: string;
  fuelTypeId: number;
  unitConfigurationId: number;
  totalMW: number;
  notes: string;
  fuelTypeName: string;
  unitConfigurationName: string;
  equipmentCount: number;
}

export interface UnitDTO {
  success: boolean;
  message: string;
  permissions: number;
  data: UnitDATA | null;
}

export interface UnitGetAllDTO {
  success: boolean;
  message: string;
  permissions: number;
  data: UnitDATA[] | [];
}
// parts catalog section
export interface PartsCatalogSectionDATA {
  id: number;
  name: string;
  checked: boolean;
}
export interface PartsCatalogSectionDTO {
  success: boolean;
  message: string;
  permissions: number;
  data: OMManualSectionDATA | null;
}
export interface PartsCatalogSectionGetAllDTO {
  success: boolean;
  message: string;
  permissions: number;
  data: OMManualSectionDATA[] | [];
}

export interface OMManualSectionDATA {
  id: number;
  name: string;
  checked: boolean;
}
export interface OMManualSectionDTO {
  success: boolean;
  message: string;
  permissions: number;
  data: OMManualSectionDATA | null;
}
export interface OMManualSectionGetAllDTO {
  success: boolean;
  message: string;
  permissions: number;
  data: OMManualSectionDATA[] | [];
}

export interface ErrorDTO {
  success: boolean;
  message: string;
  permissions: number;
  data: string;
}
export interface IssueReportsDTO {
  success: boolean;
  message: string;
  permissions: number;
  data: {
    totalCount: number;
    newIssueReportsCount: number;
    agedIssueReportsCount: number;
    resolvedIssueReportsCount: number;
    averageOpenTime: number;
  };
}

export interface IssueReport {
  reportId: number;
  globalId: number;
  // created: Date;
  // createdBy: String;
  // updated: Date;
  created: string;
  createdBy: string;
  updated: string;
  updatedBy: string;
  originalFileName: string;
  // updatedBy: "CP System User 1";
  displayFileName: String;
  fileId: number;
  // originalFileName: "New Microsoft Word Document (16).pdf";
  // createdModel: {
  // 	day: 29;
  // 	month: 8;
  // 	year: 2022;
  // };
  priority: number;
  priorityTitle: String;
  system: String;
  status: string;
  // isOpen: boolean;
  // threadId: 1;
  messageCount: number;
  // fileCopyLink: "https://mpwa-cust-port-ui-dev.mpwa-ase.appserviceenvironment.net/shared-document/45";
  // fileModel: {
  // 	id: number;
  // 	originalFileName: "New Microsoft Word Document (16).pdf";
  // 	globalItemId: 61;
  // 	fileTypeId: 1;
  // 	uploaded: "2022-08-29T14:15:53.6286129";
  // 	location: "019/0061/0045";
  // 	size: 27639;
  // 	fileType: {
  // 		id: 1;
  // 		name: "PDF";
  // 		description: "Adobe Acrobat PDF";
  // 		extension: "pdf";
  // 		maxSizeMb: 100;
  // 		contentType: "application/pdf";
  // 	};
  // 	displaySize: "26.99 KB";
  // };
  isDeleted: boolean;
  isLocked: boolean;
}

export interface IssueReportFilter {
  includeDeleted?: boolean;
  priority?: number;
  includeOpen?: boolean;
  includeClosed?: boolean;
  includeNoReplies?: boolean;
  includeOneToFiveReplies?: boolean;
  includeMoreThanFiveReplies?: boolean;
  system?: string;
  posted?: { from?: Date; to?: Date; custom?: boolean };
  modified?: { from?: Date; to?: Date; custom?: boolean };
}

export interface IssueReportItemsDTO {
  success: boolean;
  message: string;
  permissions: number;
  data: [
    {
      orgGroup: string;
      baseOrg: {
        id: number;
        name: string;
        description: string;
        spLegacyID: number;
      };
      role: string;
      permissionName: string;
      canView: boolean;
      canEdit: boolean;
      canAdd: boolean;
      canDelete: boolean;
      canAdmin: boolean;
      items: Array<IssueReport>;
    }
  ];
}
//////////////////////////////////////////////////////
// Quote Request Interface Section Start
export interface QuoteRequestDTO {
  success: boolean;
  message: string;
  permissions: number;
  data: {
    totalCount: number;
    newQuoteRequestCount: number;
    agedQuoteRequestCount: number;
    resolvedQuoteRequestCount: number;
    averageOpenTime: number;
  };
}

export interface QuoteRequest {
  globalId: number;
  created: Date;
  submittedOn: Date;
  createdBy: String;
  updated: Date;
  displayFileName: String;
  priority: number;
  priorityTitle: String;
  system: String;
  status: string;
  isOpen: boolean;
  messageCount: number;
  id: number;
  isDeleted: boolean;
}

export interface QuoteRequestFilter {
  isPartRequestType?: boolean;
  isServiceRequestType?: boolean;
  isHigh?: boolean;
  isMedium?: boolean;
  isLow?: boolean;
  isProgress?: boolean;
  isClosed?: boolean;
  priority?: number;
  includeOpen?: boolean;
  includeClosed?: boolean;
  includeNoReplies?: boolean;
  includeOneToFiveReplies?: boolean;
  includeMoreThanFiveReplies?: boolean;
  system?: string;
  posted?: { from?: Date; to?: Date; custom?: boolean };
  modified?: { from?: Date; to?: Date; custom?: boolean };
}

export interface QuoteRequestItemsDTO {
  success: boolean;
  message: string;
  permissions: number;
  data: [
    {
      orgGroup: string;
      baseOrg: {
        id: number;
        name: string;
        description: string;
        spLegacyID: number;
      };
      role: string;
      permissionName: string;
      canView: boolean;
      canEdit: boolean;
      canAdd: boolean;
      canDelete: boolean;
      canAdmin: boolean;
      items: Array<QuoteRequest>;
    }
  ];
}

export interface QuoteRequestListDTO {
  success: boolean;
  message: string;
  permissions: number;
  data: QuoteRequestGetAll[];
}

export interface QuoteRequestGetAll {
  quoteRequestId: number;
  globalItemId: number;
  baseOrgId: number;
  itemTypeId: number;
  description: string;
  quotePriorityId: number;
  plantSiteId: number;
  quoteNeededDate: string;
  partsPriorityId: number;
  partsNeededDate: string;
  partsRequestReasoningId: number;
  serviceRequestReasoningId: number | null;
  isPlannedOutage: string;
  outageSeasonId: number;
  outageYear: number;
  equipmentId: number;
  customerContactId: number;
  dateRequestReceivedFromCustomer: string;
  additionalComments: string;
  internalOutageId: string;
  submittedOn: string;
  quoteRequestParts: QuoteRequestPart[] | [];
  quoteRequestEvents: QuoteRequestEvents[] | [];
  quoteRequestAttachments: QuoteRequestAttachment[] | [];
  quoteRequestType: number;
  quoteTypeId: number;
  quotePriority: string;
  requestTypeName: string;
  createdBy: string;
  customerContact: string;
}
export interface QuoteRequestAttachment {
  quoteRequestAttachmentId: number;
  name: string;
  quoteRequestAttachmentTypeId: number;
  description?: string;
  fileType: number;
  fileLocation: string;
  created: string;
  createdBy: string;
  createdById: number;
  size: number;
  file?: string;
  fileTypeName: string;
  quoteName?: string;
  quoteRequestAttachmentTypeName: string;
  displaySize: string;
  fileTypeObj: FileTypeObj;
  fileId: number;
  sapQuoteNumber: string;
}
export interface base64Interface extends QuoteRequestAttachment {fileBase64:string};
export interface QuoteRequestEvents {
  quoteRequestEventId: number;
  eventTypeId: number;
  dateValue: Date;
  auxData: string;
  modified: Date;
  modifiedBy: number;
  quoteRequestAttachment: QuoteRequestAttachment;
}

export interface QuoteRequestPart {
  partNumber: string;
  description: string;
  quantity: number;
}

// Quote Request Interface Section End ....
///////////////////////////////////////////////////////////////////

export interface DiscussionItem {
  id: number;
  globalId: number;
  description: String;
  topic: String;
  statusBadge?: {
    label: string;
    color: string;
  };
  isLocked?: boolean;
}

export interface PartsAndServicesDTO {
  success: boolean;
  message: string;
  permissions: number;
  data: {
    totalCount: number;
    partsQuotesAndOrdersCount: number;
    servicesQuotesAndOrdersCount: number;
    averagePartsTurnaroundTime: number;
    averageServicesTurnaroundTime: number;
  };
}

// Parts Catalog Section
export interface PartsCatalogInterface {
  reportType: string;
  globalItemId: number;
  baseOrgId: number;
  itemTypeId: number;
  created: string;
  createdBy: string;
  updated: string;
  updatedBy: string;
  displayName: string;
  associatedEquipment: Equipment[];
  file: string;
  isDeleted: boolean;
  fileModel: FileModel;
  fileCopyLink: string;
  previousFiles: FileModel[];
}
//end Parts Catalog Section

export interface TechnicalDocumentationDTO {
  success: boolean;
  message: string;
  permissions: number;
  data: {
    totalCount: number;
    newMitsubishiReportsCount: number;
    newTechnicalBulletinsCount: number;
    oandMManualsCount: number;
  };
}
export interface TypeDATA {
  data:
    | {
        id: number;
        name: string;
      }[]
    | [];
}
export interface TypeDTO {
  success: boolean;
  message: string;
  permissions: number;
  data: [
    {
      id: number;
      name: string;
    }
  ];
}
export interface RequestPriorityDTO {
  success: boolean;
  message: string;
  permissions: number;
  data: [
    {
      id: number;
      title: string;
      order: number;
    }
  ];
}

export interface SelectOptionProps {
  id: number;
  name: string;
  isDefault?: boolean;
}
export interface SelectPlantProps {
  plantId: number;
  name: string;
  isDefault: boolean;
}
export interface ContactAvatarImageDTO {
  success: boolean;
  preview: string;
  name: string;
  error: null | string;
}
export interface ModalsStateManagementDTO {
  isCopy: {
    isCopyLinkModal: boolean;
  };
  isView: {
    isNameplate: boolean;
    isCloseQuoteRequest:boolean;
  };
  isAdd: {
    isEquipment: boolean;
    isNameplate: boolean;
    isNameplateSamePage: boolean;
    isContactModal: boolean;
    isUnit: boolean;
    isPartsListDocument: boolean;
    isAttachNameplateAsset: boolean;
    isQuoteRequest: boolean;
    isQuoteDocument: boolean;
    isPODocument: boolean;
  };
  isDelete: {
    isEquipment: boolean;
    isNameplate: boolean;
    isPlantConfig: boolean;
    isUnit: boolean;
    isQuoteRequest: boolean;
    isQuoteDocument: boolean;
    isPODocument: boolean;
  };
  isEdit: {
    isEquipment: boolean;
    isNameplate: boolean;
    isPlantConfig: boolean;
    isContactModal: boolean;
    isUnit: boolean;
    isFaq: boolean;
    isPartsListDocument: boolean;
    isAttachNameplateAsset: boolean;
    isQuoteRequest: boolean;
    isQuoteDocument: boolean;
    isPODocument: boolean;
  };
  isDeleteSuccess: {
    isEquipment: boolean;
    isContactModal: boolean;
    isNameplate: boolean;
    isPlantConfig: boolean;
    isUnit: boolean;
    isQuoteRequest: boolean;
    isQuoteDocument: boolean;
    isPODocument: boolean;
  };
  isEditedSuccess: {
    isEquipment: boolean;
    isUnit: boolean;
    isNameplate: boolean;
    isContactModal: boolean;
    isPlantConfig: boolean;
    isQuoteRequest: boolean;
    isFaq: boolean;
    isQuoteDocument: boolean;
    isPODocument: boolean;
  };
  isAddedSuccess: {
    isEquipment: boolean;
    isContactModal: boolean;
    isNameplate: boolean;
    isNameplateSamePage: boolean;
    isUnit: boolean;
    isQuoteRequest: boolean;
    isQuoteDocument: boolean;
    isPODocument: boolean;
  };
}
export interface PlantInformation {
  nameplate: {
    id: number;
  };
}

export interface CPApiResponse<Type> {
  success: boolean;
  message: string;
  permissions: number;
  data: Type;
}

export interface MitsubishiPowerReport {
  reportType: string;
  globalItemId: number;
  itemTypeId: number;
  created: string;
  createdBy: string;
  updated: string;
  updatedBy: string;
  displayName: string;
  associatedEquipment: Equipment[];
  file: string;
}

export interface Equipment {
  equipmentId: number;
  productTypeId: number;
  name: string;
}

export interface ThreadMessageAttachment {
  attachment?: string;
  created: string;
  createdBy: string;
  createdById: number;
  deleted?: string;
  deletedBy?: string;
  deletedById?: number;
  description: string;
  id: number;
  messageId: number;
  originalFileName: string;
}

export type ThreadMessageCreatable = Pick<ThreadMessage, "threadId" | "title" | "content">;
export interface ThreadMessage {
  threadId: number;
  title: string;
  content: string;
  id?: number;
  parentId?: number;
  created?: string;
  createdBy?: string;
  createdById?: number;
  edited?: string;
  deleted?: string;
  deletedBy?: string;
  deletedById?: number;
  messages?: ThreadMessage[];
  messageAttachments?: ThreadMessageAttachment[];
}

export type ThreadCreatable = Pick<Thread, "globalItemId">;
export interface Thread {
  globalItemId: number;
  id: number;
  messages: ThreadMessage[];
}

export interface PlantEquipmentIdDTO {
  id: number;
}
export interface SiteContactInterface {
  id: number;
  avatar: string;
  contacttype: string;
  contactlist: {
    name: string;
    profile: string;
    contact: {
      office: string;
      mobile: string;
    };
    email: string;
  };
  totalcontact: number;
}
export interface EquipmentAttachmentModelDTO {
  equipmentAttachmentId: number;
  equipmentId: number;
  name: string;
  equipmentAttachmentTypeId: number;
  description: string;
  fileType: number;
  filePath: string;
  created: string;
  createdBy: string;
  createdById: number;
  updated: string;
  updatedBy: string;
  updatedById: number;
  file: null | string;
  size: null | string;
  equipmentName: string;
  equipmentAttachmentTypeName: string;
  associatedUnitName: null | string;
  fileTypeName: string;
  displaySize: string;
  fileTypeObj: FileTypeObj;
}
export interface FileTypeObj {
  id: number;
  name: string;
  description: string;
  extension: string;
  maxSizeMb: number;
  contentType: string;
}

export interface PlantEquipmentsDATA {
  plantEquipmentId: number;
  unitID: number;
  equipmentName: string;
  equipmentID: string;
  productType: number;
  manufacturerType: number;
  contractBasis: number;
  equipmentModel: string;
  equipmentModelId: number;
  productTypeName: string;
  contractBasisName: string;
  equipmentModelName: string;
  manufacturerName: string;
  any: boolean;
  notes: null;
  modelConfigurationComments: null;
  equipmentAttachmentCount: number;
  equipmentAttachmentModels: EquipmentAttachmentModelDTO[] | null;
}

export interface PlantEquipmentDTO {
  success: boolean;
  message: string;
  permissions: number;
  data: PlantEquipmentsDATA;
}

export interface PlantEquipmentsDTO {
  success: boolean;
  message: string;
  permissions: number;
  data: PlantEquipmentsDATA[] | [];
}

export interface InterfaceFormDataPlantEquipment {
  equipmentName: string;
  unitID: number;
  plantEquipmentId: number | null;
  equipmentID: string;
  productType: number | null;
  manufacturerType: number | null;
  manufacturerName: string;
  contractBasis: number | null;
  equipmentModel: string;
}

export interface PlantEquipmentResponseData {
  success: boolean;
  message: string;
  permissions: number;
  data: PlantEquipmentsDATA;
}

export interface PlantEquipmentAttachmentsDTO {
  success: boolean;
  message: string;
  permissions: number;
  data: EquipmentAttachmentModelDTO[];
}

export interface PlantEquipmentAttachmentDTO {
  success: boolean;
  message: string;
  permissions: number;
  data: EquipmentAttachmentModelDTO;
}

export interface EquipmentAttachmentInitialValuesProps {
  equipmentId: number;
  name: string;
  EquipmentAttachmentId: number;
  equipmentAttachmentTypeId: number;
  description: string;
  associatedUnit: number;
  file: string;
}

export interface deleteEquipmentDTO {
  plantEquipmentId: number;
  deletionReason: string;
}

export interface deleteInterface {
  success: boolean;
  message: string;
  permissions: number;
  data: boolean;
}

export interface updateInterface {
  success: boolean;
  message: string;
  permissions: number;
  data: boolean;
}

export interface IdObj {
  attachmentid: number;
  equipmentid: number;
}

export interface PlantInformation {
  nameplate: {
    id: number;
  };
}

export interface CPApiResponse<Type> {
  success: boolean;
  message: string;
  permissions: number;
  data: Type;
}

export type DocumentGroupCreatable = Pick<DocumentGroup, "name">;
export interface DocumentGroup {
  name: string;
  id: number;
  description: string;
  extendedAttributesTable: string;
  allowDiscussion: boolean;
  userDefined: boolean;
  active: boolean;
  displayOrder: number;
}

export interface MitsubishiPowerReport {
  reportType: string;
  globalItemId: number;
  itemTypeId: number;
  created: string;
  createdBy: string;
  updated: string;
  updatedBy: string;
  displayName: string;
  associatedEquipment: Equipment[];
  file: string;
}

export interface MitsubishiPowerReportGroup {
  name: string;
  itemTypeId: number;
  description: string;
  extendedAttributesTable: string;
  allowDiscussion: boolean;
  userDefined: boolean;
  active: boolean;
  displayOrder: number;
}

export interface Report {
  reportType: string;
  globalId: number;
  globalItemId?: number;
  created: string;
  createdBy: string;
  itemTypeId: number;
  updated: string;
  updatedBy: string;
  displayFileName: string;
  associatedEquipment: AssociatedEquipment[] | null;
  fileModel: FileModel;
  scope: string;
  issueDate: string;
  applicability: string;
  summaryGuideline: string;
  implementationStatus: string;
  isDeleted: boolean;
  previousFiles: PreviousFile[];
  fileId: number;
  sectionId: number;
  // when reading from POST
  displayName?: string;
}
export interface AssociatedEquipment {
  equipmentId: number;
  productTypeId: number;
  name: string;
}

export interface PreviousFile {
  id: number;
  originalFileName: string;
  globalItemId: number;
  fileTypeId: number;
  uploaded: string;
  location: string;
  size: number;
  fileType: FileType;
  displaySize: string;
}

export interface FileType {
  id: number;
  name: string;
  description: string;
  extension: string;
  maxSizeMb: number;
  contentType: string;
}
export interface PlantContact {
  plantContactId: number;
  plantId: number;
  userId: number;
  firstName: string;
  lastName: string;
  jobTitle: string;
  primaryPhone: string;
  primaryPhoneTypeId: number;
  primaryPhoneType: string;
  secondaryPhone: string;
  secondaryPhoneTypeId: number;
  secondaryPhoneType: string;
  email: string;
  isMitsubishiContact: boolean;
  avatarFile: string;
  avatarSize: number;
  displayAvatarSize: string;
}

export interface PlantContactDTO {
  success: boolean;
  message: string;
  permissions: number;
  data: PlantContact;
}
export interface PlantContactsDTO {
  success: boolean;
  message: string;
  permissions: number;
  data: PlantContact[] | [];
}

export interface ContactAccordianInterface {
  data:
    | {
        id: number;
        contact_type: string;
        contact_list: PlantContact[];
      }[]
    | [];
}

export interface ContactFormInterface {
  plantId: number;
  PlantContactId: number;
  firstName: string;
  lastName: string;
  jobTitle: string;
  primaryPhone: string;
  primaryPhoneTypeId: number | string;
  secondaryPhone: string | null;
  secondaryPhoneTypeId: number | string;
  email: string;
  isMitsubishiContact: boolean;
  avatarFile: string | null;
}

export interface ShowErrorInterface {
  title: string;
  isError: boolean;
  ErrorType: "danger" | "warning" | "success" | "info" | null;
}

export interface ReportRowData {
  id: number;
  reportName: string;
  reportID: string;
  equipment: string;
  published: string;
  lastModified: string;
}

export interface FaqInterfaceDTO {
  faqText: string;
}

export interface SiteUnit {
  unitId: number;
  plantId: number;
  name: string;
  parentGroupOwnership: string;
  operator: string;
  directOwnership: string;
  coDate: string;
  fuelTypeId: number;
  unitConfigurationId: number;
  totalMW: number;
  notes: string;
  fuelTypeName: string;
  unitConfigurationName: string;
  equipmentCount: number;
}

export interface PagePermissions {
  pageKey: string;
  canView: boolean;
  canEdit: boolean;
  canAdd: boolean;
  canDelete: boolean;
  canAdmin: boolean;
}

export interface FileModel {
  id: number;
  originalFileName: string;
  globalItemId: number;
  fileTypeId: number;
  uploaded: string;
  location: string;
  size?: number;
  fileType: FileType;
  displaySize: string;
}

export interface BaseOrg {
  id: number;
  name: string;
  description: string;
  spLegacyID?: number;
}
export interface BaseOrgGroup {
  id: number;
  name: string;
  description: string;
  associatedPlantsCount: number;
  childOrgGroups: string[];
  deleted: string;
  deletedReason: string;
}
export interface PlantPermissionedReports {
  orgGroup?: string;
  baseOrg: BaseOrg;
  role: string;
  canView: boolean;
  canEdit: boolean;
  canAdd: boolean;
  canDelete: boolean;
  canAdmin: boolean;
  items: Report[];
}

export interface QuoteFormInterfaceDTO {
  success: boolean;
  message: string;
  permissions: number;
  data: RequestQuoteDTO[];
}

export interface RequestQuoteDTO {
  quoteRequestId: number | null;
  globalItemId: number | null;
  baseOrgId: number;
  itemTypeId: number;
  description: string;
  quotePriorityId: number;
  plantSiteId: number;
  quoteNeededDate: string;
  dateRecievedfromCustomer: string;
  partsPriorityId: number;
  partsNeededDate: string;
  partsRequestReasoningId: number;
  isPlannedOutage: string;
  isCustomer: string;
  outageSeasonId: number;
  outageYear: number;
  equipmentId: number;
  customerContactId: number;
  additionalComments: string;
  internalOutageId: string;
  quoteRequestParts: QuoteRequestPart[];
  quoteRequestEvents: QuoteRequestEvent[];
  quoteRequestType: number | null;
  file: string;
  quoteTypeId: number | null;
}

export interface RequestQuoteFormInterface {
  quoteRequest: {
    quoteRequestId: number | null;
    globalItemId: number | null;
    baseOrgId: number;
    itemTypeId: number;
    description: string;
    isCustomer: string;
    quotePriorityId: number;
    plantSiteId: number;
    quoteNeededDate: Date | string;
    partsPriorityId: number;
    partsNeededDate: Date | string;
    partsRequestReasoningId: number;
    isPlannedOutage: string;
    outageSeasonId: number | string;
    outageYear: number | string;
    equipmentId: number;
    customerContactId: string | number;
    additionalComments: string;
    internalOutageId: string;
    quoteRequestParts: QuoteRequestPart[] | [];
    quoteRequestEvents: QuoteRequestEvent[] | [];
    quoteRequestAttachments: QuoteRequestAttachment[];
    quotePriority: string;
    requestTypeName: string;
    createdBy: string;
    customerContact: string;
    quoteRequestType: number | null;
    file: string;
    quoteTypeId: number | null;
    serviceRequestReasoningId: number;
    dateRequestReceivedFromCustomer: Date | string;
  };
  partsDocument: {
    quoteRequestId: number;
    name: string;
    quoteRequestAttachmentTypeId: number;
    file: string;
  };
  nameplate: {
    quoteRequestId: number;
    name: string;
    quoteRequestAttachmentTypeId: number;
    file: string;
  };
  isUnitSelected: boolean | null;
  isProductSelected: boolean | null;
  partsDocumentBase64: string;
  nameplateBase64: string;

  unit?: number;
  productType?: number;
}
export interface QuoteRequestEvent {
  quoteRequestEventId: number;
  eventTypeId: number;
  dateValue: Date | string;
  auxData: string;
  modified: Date | string;
  modifiedBy: number;
  quoteRequestAttachment: QuoteRequestAttachment;
}
export interface QuoteRequestEventWithID {
  id?: number;

  quoteRequestEventId: number;
  eventTypeId: number;
  dateValue: Date | string;
  auxData: string;
  modified: Date | string;
  modifiedBy: number;
  quoteRequestAttachment?: QuoteRequestAttachment;
}

export interface QuoteRequestEventAttachment {
  quoteRequestEventAttachmentId: number;
  originalFileName: string;
  fileTypeId: number;
  uploaded: Date | string;
  location: string;
  size: number;
  displaySize: string;
  sapQuoteNumber: string;
}

export interface QuoteRequestPart {
  partNumber: string;
  description: string;
  quantity: number;
}
export interface QuoteRequestPart {
  partNumber: string;
  description: string;
  quantity: number;
}

export interface GlobalSearchDTO {
  success: boolean;
  message: string;
  permissions: number;
  data: GlobalSearch[] | [];
}

// A GlobalSearch item will always have the published by and published date fields
export interface GlobalSearch {
  type: string;
  itemTypeId: number;
  globalItemId: number;
  fileId: number;
  title: string;
  fields: [
    {
      name: "Published By";
      value: string;
      type: "VarChar";
    },
    {
      name: "Published Date";
      value: string;
      type: "VarChar";
    }
  ] &
    SearchResultItemField[];
}

export type SearchResultItemField = {
  name: "Published By" | "Published Date" | "File Size" | "File Format" | "File Original Name" | "File Location" | "Modified By" | "Modified Date";
  value: string;
  type: "VarChar";
};

export interface User {
  id: number;
  aDuid: string;
  fName: string;
  lName: string;
  manage: string;
  email: string;
  mpInternal: boolean;
  portalAdmin: boolean;
  defaultBaseOrgId: number;
  tomoniServiceAccount: boolean;
  accountDisabled: boolean;
  Created?: string;
  Updated?: string;
}

export interface Role {
  id: number;
  name: string;
  description: string;
}

/**
 * Interface UserRole is used for user/role assignments
 */
export interface UserRole {
  baseOrgId: number|null;
  orgGroupId: number|null;
  roleId: number;
  any: boolean;
  baseOrgName: string;
  orgGroupName: string;
  roleName: string;
  userId: number;
  id: number;
}

export interface UserRoleAssignments {
  userId: number;
  userFName: string;
  userLName: string;
  email: string;
  isPortalAdmin: boolean;
  roles: UserRole[];
}

export interface ListGroup {
  title: string;
  name: string;
  isInternal: boolean;
}

export interface UserColumnDefinition {
  title: string;
  key: keyof User;
  style: CSSProperties;
  component?: FunctionComponent<{ report: User; tooltip?: ReactElement<any, any> }>;
  className?: string;
}

export interface KPI {
  kpiDataId: number;
  esrPlantName: string;
  baseOrgId: number;
  avgTurnAroundTime: number;
  requestsDeliveredOnTime: number;
  numberOfRequests: number;
}

export interface GetQR_AttachmentListInterface {
  quoteRequestAttachmentId: number;
  name: string;
  quoteRequestAttachmentTypeId: number;
  description: string;
  fileType: number;
  fileLocation: string;
  created: Date | string;
  createdBy: string;
  createdById: number;
  size: number;
  file: string;
  fileTypeName: string;
  quoteName: string;
  quoteRequestAttachmentTypeName: string;
  displaySize: string;
  fileTypeObj: FileTypeObj;
}

export interface CustomerRequestInterface {
  globalItemId: number;
  dateRequestReceivedFromCustomer?: string;
  customerContactId?: number;
  internalOutageId?: string;
  additionalComments?: string;
}
export interface QuoteStatusInterface {
  quoteRequestId: number;
  quotestatusTypeId: number;
  timestamp?: string;
  file?: File;
  SAPQuoteNumber?: string;
}
export interface quoteAttachmentFormInterface {
  quoteRequestAttachmentId?: number;
  quoteRequestId: number;
  quoteRequestAttachmentTypeId: number;
  name?: string;
  description?: string;
  file: string;
  SAPQuoteNumber?: string;
}

export interface PlantManagementFilterInterface {
	includeDeleted?: boolean;
	priority?: number;
	includeOpen?: boolean;
	includeClosed?: boolean;
	includeNoReplies?: boolean;
	includeOneToFiveReplies?: boolean;
	includeMoreThanFiveReplies?: boolean;
	system?: string;
	posted?: { from?: Date; to?: Date; custom?: boolean };
	modified?: { from?: Date; to?: Date; custom?: boolean };
}
