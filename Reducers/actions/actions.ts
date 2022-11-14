import { ActionType } from "../action-types"
import {
  HeaderDTO,
  IssueReportsDTO,
  IssueReportItemsDTO,
  PartsAndServicesDTO,
  PlantConfigDTO,
  PlantSiteDetailsDTO,
  TechnicalDocumentationDTO,
  TypeDTO,
  ModalsStateManagementDTO,
  PlantConfigImageDTO,
  PlantEquipmentDTO,
  PlantEquipmentsDTO,
  PlantEquipmentAttachmentsDTO,
  PlantEquipmentIdDTO,
  PlantEquipmentAttachmentDTO,
  ContactAvatarImageDTO,
  PlantContactsDTO,
  ShowErrorInterface,
  ContactAccordianInterface,
  FaqInterfaceDTO,
  UnitDTO,
  UnitGetAllDTO,
  OMManualSectionGetAllDTO,
  TypeDATA,
  SelectedPlantDTO,
  PagePermissions,
  Report,
  AccountSettingsDTO,
  NotificationType,
  QuoteRequestListDTO
} from "../../utils/interface";



interface HeaderAction {
  type: ActionType.HEADER;
  payload: HeaderDTO;
}

interface NotificationTypesAction {
  type: ActionType.NOTIFICATION_TYPES;
  payload: NotificationType[]
}

interface AccountSettingsAction {
  type: ActionType.ACCOUNT_SETTINGS;
  payload: AccountSettingsDTO;
}

interface SelectedPlantAction {
  type: ActionType.SELECTED_PLANT;
  payload: SelectedPlantDTO;
}

interface PartAndServicesAction {
  type: ActionType.PARTS_AND_SERVICES;
  payload: PartsAndServicesDTO;
}



interface TechnicalDocumentationAction {
  type: ActionType.TECHNICAL_DOCUMENTATION;
  payload: TechnicalDocumentationDTO;
}

interface NameplateAction {
  type: ActionType.NAMEPLATE;
  payload: { id: number };
}

interface SelectedPlantDetailsAction {
  type: ActionType.SELECTED_PLANT_DETAILS;
  payload: PlantSiteDetailsDTO;
}

interface IssueReportsAction {
  type: ActionType.ISSUE_REPORTS;
  payload: IssueReportsDTO;
}

interface IssueReportItemsAction {
  type: ActionType.ISSUE_REPORT_ITEMS;
  payload: IssueReportItemsDTO;
}

interface PlantConfigAction {
  type: ActionType.PLANT_CONFIG;
  payload: PlantConfigDTO;
}
interface ContactAvatarImageAction {
  type: ActionType.CONTACT_AVATAR_IMAGE;
  payload: ContactAvatarImageDTO[];
}

interface PlantEquipmentAction {
  type: ActionType.PLANT_EQUIPMENT;
  payload: PlantEquipmentDTO;
}
interface ShowErrorAction {
  type: ActionType.SHOW_ERROR;
  payload: ShowErrorInterface;
}

interface PlantEquipmentsAction {
  type: ActionType.PLANT_EQUIPMENTS;
  payload: PlantEquipmentsDTO;
}

interface PlantEquipmentsIdAction {
  type: ActionType.PLANT_EQUIPMENTS_ID;
  payload: PlantEquipmentIdDTO;
}
interface EquipmentsAttachmentsAction {
  type: ActionType.PLANT_EQUIPMENT_ATTACHMENTS;
  payload: PlantEquipmentAttachmentsDTO;
}

interface EquipmentsAttachmentAction {
  type: ActionType.PLANT_EQUIPMENT_ATTACHMENT;
  payload: PlantEquipmentAttachmentDTO;
}
interface PlantContactsAction {
  type: ActionType.PLANT_CONTACTS;
  payload: PlantContactsDTO;
}

interface TypeMitsubishiContactsAction {
  type: ActionType.TYPE_MITSUBISHI_CONTACTS;
  payload: PlantContactsDTO;
}
interface TypePlantContactsAction {
  type: ActionType.TYPE_PLANT_CONTACTS;
  payload: PlantContactsDTO;
}
interface AccordianContactDataAction {
  type: ActionType.CONTACT_ACCORDIAN_DATA;
  payload: ContactAccordianInterface;
}
interface FaqContentAction {
  type: ActionType.FAQ_CONTENT;
  payload: FaqInterfaceDTO;
}

interface PlantConfigImageAction {
  type: ActionType.PLANT_CONFIG_IMAGE;
  payload: PlantConfigImageDTO;
}

interface ToolTipAction {
  type: ActionType.TOOLTIP;
  payload: boolean;
}

interface ToolTipContentAction {
  type: ActionType.TOOLTIP_CONTENT;
  payload: React.ReactElement;
}

interface SideBarToggleAction {
  type: ActionType.SIDEBAR_TOGGLE;
  payload: boolean;
}

interface MobileNavToggleAction {
  type: ActionType.MOBILE_NAV_TOGGLE;
  payload: boolean;
}

interface TrackLocationAction {
  type: ActionType.TRACK_LOCATION;
  payload: string;
}

interface TrackLocationAction {
  type: ActionType.TRACK_LOCATION;
  payload: string;
}

interface AccordianTabAction {
  type: ActionType.ACCORDIAN_TAB;
  payload: number;
}

interface FuelTypeAction {
  type: ActionType.FUEL_TYPE;
  payload: TypeDTO;
}

interface ContractBasisTypeAction {
  type: ActionType.CONTRACT_BASIS_TYPES;
  payload: TypeDTO;
}
interface ProductTypeAction {
  type: ActionType.PRODUCT_TYPE;
  payload: TypeDTO;
}
interface UnitConfigurationTypeAction {
  type: ActionType.UNIT_CONFIGURATION_TYPES;
  payload: TypeDTO;
}

interface ManufacturerTypeAction {
  type: ActionType.MANUFACTURER_TYPE;
  payload: TypeDTO;
}

interface EquipmentAttachmentTypeAction {
  type: ActionType.EQUIPMENT_ATTACHMENT_TYPE;
  payload: TypeDTO;
}


interface UnitAction {
  type: ActionType.UNIT;
  payload: UnitDTO;
}

interface UnitGetAllAction {
  type: ActionType.UNIT_GET_ALL;
  payload: UnitGetAllDTO;
}

interface OMManualSectionGetAllAction {
  type: ActionType.OMMANUAL_SECTION_GET_ALL;
  payload: OMManualSectionGetAllDTO;
}

interface UnitTypesAction {
  type: ActionType.UNIT_TYPES;
  payload: TypeDATA;
}
interface EquipmentTypesAction {
  type: ActionType.PLANT_EQUIPMENT_TYPES;
  payload: TypeDATA;
}

interface ModalNameTypesAction {
  type: ActionType.EQUIPMENT_MODAL_NAME_TYPES;
  payload: TypeDTO;
}

interface IsModalAction {
  type: ActionType.IS_MODAL;
  payload: ModalsStateManagementDTO;
}

interface GlobalUniqueIdsAction {
  type: ActionType.GLOBAL_UNIQUE_IDS;
  payload: string[]
}

interface PagePermissionsAction {
  type: ActionType.PAGE_PERMISSIONS,
  payload: PagePermissions
}
interface ReportsAction {
  type: ActionType.REPORT,
  payload: Report
}
interface QuoteRequestItemsAction {
  type: ActionType.QUOTE_REQUEST_ITEMS,
  payload: QuoteRequestListDTO
}

export type Action =
  | HeaderAction
  | NotificationTypesAction
  | AccountSettingsAction
  | QuoteRequestItemsAction
  | TypeMitsubishiContactsAction
  | UnitGetAllAction
  | UnitAction
  | OMManualSectionGetAllAction
  | EquipmentTypesAction
  | ReportsAction
  | UnitTypesAction
  | ModalNameTypesAction
  | UnitConfigurationTypeAction
  | TypePlantContactsAction
  | AccordianContactDataAction
  | SelectedPlantAction
  | FaqContentAction
  | PartAndServicesAction
  | PlantContactsAction
  | ProductTypeAction
  | ShowErrorAction
  | ContractBasisTypeAction
  | EquipmentAttachmentTypeAction
  | SelectedPlantDetailsAction
  | ManufacturerTypeAction
  | ContactAvatarImageAction
  | PlantConfigAction
  | PlantEquipmentAction
  | PlantEquipmentsAction
  | PlantEquipmentsIdAction
  | EquipmentsAttachmentsAction
  | EquipmentsAttachmentAction
  | PlantConfigImageAction
  | IssueReportsAction
  | IssueReportItemsAction
  | ToolTipAction
  | ToolTipContentAction
  | SideBarToggleAction
  | MobileNavToggleAction
  | TrackLocationAction
  | FuelTypeAction
  | TechnicalDocumentationAction
  | NameplateAction
  | IsModalAction
  | GlobalUniqueIdsAction
  | PagePermissionsAction
  | AccordianTabAction;
