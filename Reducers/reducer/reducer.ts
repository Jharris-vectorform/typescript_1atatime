import { Action } from "../actions"
import { ActionType } from "../action-types"
import { StateInterface } from "../../Store";

export const reducer = (
  state: StateInterface,
  action: Action
): StateInterface => {
  switch (action.type) {
    case ActionType.HEADER: {
      return {
        ...state,
        header: action.payload,
      };
    }
    case ActionType.NOTIFICATION_TYPES: {
      return {
        ...state,
        notificationTypes: action.payload
      }
    }
    case ActionType.ACCOUNT_SETTINGS: {
      return {
        ...state,
        accountSettings: action.payload,
      };
    }
    case ActionType.SELECTED_PLANT: {
      return {
        ...state,
        selectedPlant: action.payload,
      };
    }
    case ActionType.FUEL_TYPE: {
      return {
        ...state,
        fuelType: action.payload,
      };
    }
    case ActionType.SELECTED_PLANT_DETAILS: {
      return {
        ...state,
        selectedPlantDetails: action.payload,
      };
    }
    case ActionType.PLANT_CONFIG: {
      return {
        ...state,
        plantConfig: action.payload,
      };
    }
    case ActionType.PLANT_EQUIPMENT: {
      return {
        ...state,
        plantEquipment: action.payload,
      };
    }
    case ActionType.CONTACT_AVATAR_IMAGE: {
      return {
        ...state,
        contactAvatarImage: action.payload,
      };
    }
    case ActionType.PLANT_EQUIPMENTS: {
      return {
        ...state,
        plantEquipments: action.payload,
      };
    }
    case ActionType.PLANT_EQUIPMENT_ATTACHMENTS: {
      return {
        ...state,
        plantEquipmentsAttachments: action.payload,
      };
    }
    case ActionType.PLANT_EQUIPMENT_ATTACHMENT: {
      return {
        ...state,
        plantEquipmentsAttachment: action.payload,
      };
    }
    case ActionType.PLANT_EQUIPMENTS_ID: {
      return {
        ...state,
        plantEquipmentId: action.payload,
      };
    }
    case ActionType.SHOW_ERROR: {
      return {
        ...state,
        showError: action.payload,
      };
    }
    case ActionType.PLANT_CONFIG_IMAGE: {
      return {
        ...state,
        plantConfigImage: action.payload,
      };
    }
    case ActionType.TECHNICAL_DOCUMENTATION: {
      return {
        ...state,
        technicalDocumentation: action.payload,
      };
    }
    case ActionType.PRODUCT_TYPE: {
      return {
        ...state,
        productType: action.payload,
      };
    }

    case ActionType.EQUIPMENT_ATTACHMENT_TYPE: {
      return {
        ...state,
        equipmentAttachmentType: action.payload,
      };
    }
    case ActionType.MANUFACTURER_TYPE: {
      return {
        ...state,
        manufacturerType: action.payload,
      };
    }
    case ActionType.CONTRACT_BASIS_TYPES: {
      return {
        ...state,
        contractBasisTypes: action.payload,
      };
    }
    case ActionType.NAMEPLATE: {
      return {
        ...state,
        plantInformation: {
          nameplate: action.payload,
        }
      };

    }
    case ActionType.IS_MODAL: {
      return {
        ...state,
        isModal: action.payload
      };

    }
    case ActionType.ISSUE_REPORTS: {
      return {
        ...state,
        issueReports: action.payload,
      };
    }
    case ActionType.ISSUE_REPORT_ITEMS: {
      return {
        ...state,
        issueReportItems: action.payload,
      };
    }
    case ActionType.PARTS_AND_SERVICES: {
      return {
        ...state,
        partsAndServices: action.payload,
      };
    }

    case ActionType.TOOLTIP: {


      return {
        ...state,
        toolTip: action.payload,
      };
    }

    case ActionType.TOOLTIP_CONTENT: {
      return {
        ...state,
        toolTipContent: action.payload
      };
    }

    case ActionType.ACCORDIAN_TAB: {

      return {
        ...state,
        accordian_tab: action.payload,
      };
    }
    case ActionType.SIDEBAR_TOGGLE: {
      return {
        ...state,
        sidebarToggle: action.payload,
      };
    }
    case ActionType.EQUIPMENT_MODAL_NAME_TYPES: {
      return {
        ...state,
        equipmentModelNameTypes: action.payload,
      };
    }
    case ActionType.TYPE_PLANT_CONTACTS: {
      return {
        ...state,
        typePlantContacts: action.payload,
      };
    }
    case ActionType.TYPE_MITSUBISHI_CONTACTS: {
      return {
        ...state,
        typeMitsubiContacts: action.payload,
      };
    }
    case ActionType.CONTACT_ACCORDIAN_DATA: {
      return {
        ...state,
        contactAccordianData: action.payload,
      };
    }
    case ActionType.MOBILE_NAV_TOGGLE: {
      return {
        ...state,
        mobileNavToggle: action.payload,
      };
    }
    case ActionType.TRACK_LOCATION: {
      return {
        ...state,
        trackLocation: action.payload,
      };
    }
    case ActionType.PLANT_CONTACTS: {
      return {
        ...state,
        plantContacts: action.payload,
      };
    }
    case ActionType.FAQ_CONTENT: {
      return {
        ...state,
        faq: action.payload,
      };
    }
    case ActionType.UNIT: {
      return {
        ...state,
        unit: action.payload,
      };
    }
    case ActionType.UNIT_TYPES: {
      return {
        ...state,
        unitTypes: action.payload,
      };
    }
    case ActionType.REPORT: {
      return {
        ...state,
        report: action.payload,
      };
    }
    case ActionType.PLANT_EQUIPMENT_TYPES: {
      return {
        ...state,
        equipmentTypes: action.payload,
      };
    }
    case ActionType.UNIT_GET_ALL: {
      return {
        ...state,
        unitGetAll: action.payload,
      };
    }
    case ActionType.QUOTE_REQUEST_ITEMS: {
      return {
        ...state,
        QuoteRequestItems: action.payload,
      };
    }
    case ActionType.OMMANUAL_SECTION_GET_ALL: {
      return {
        ...state,
        ommanualSectionGetAll: action.payload,
      };
    }
    case ActionType.UNIT_CONFIGURATION_TYPES: {
      return {
        ...state,
        unitConfigurationTypes: action.payload,
      };
    }
    case ActionType.GLOBAL_UNIQUE_IDS: {
      return {
        ...state,
        globalUniqueIds: action.payload
      };
    }
    case ActionType.PAGE_PERMISSIONS: {
      return {
        ...state,
        pagePermissions: action.payload
      };
    }


    default:
      return state;
  }
}
