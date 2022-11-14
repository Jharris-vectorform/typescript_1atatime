import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "../containers/Home/Home";
import PlantInformation from "../containers/PlantInformation/PlantInformation";
import AddDocumentContainer from "../containers/TechnicalDocumentation/AddDocumentContainer";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import FileReader from "../components/FileReader/FileReader";

import ThreadContainer from "../containers/Thread/ThreadContainer";
import Thread from "../containers/Thread/Thread";
import ThreadList from "../containers/Thread/ThreadList";
import TechnicalDocumentationContainer from "../containers/TechnicalDocumentation/TechnicalDocumentationContainer";
import PartsAndServicesContainer from "../containers/TechnicalDocumentation/PartsAndServicesContainer";
import ManageDocumentGroups from "../containers/Reports/ManageReportGroups/ManageDocumentGroups";
import TechnicalDocumentationGroupContainer from "../containers/TechnicalDocumentation/TechnicalDocumentationGroupContainer";
import TechnicalDocumentationModuleContainer from "../containers/TechnicalDocumentation/TechnicalDocumentationModuleContainer";
import SupportContainer from "../containers/Support/SupportContainer";

import PartsAndServiceContainer from "../containers/PartsAndService/PartsAndServiceContainer";

import Faq from "../components/Faq/Faq";
import PlantSiteDetails from "../components/PlantSiteDetails/PlantSiteDetails";
import SiteContacts from "../components/SiteContacts/SiteContacts";
import Nameplate from "../components/Nameplate/Nameplate";
import TechnicalDocumentationModuleIndex from "../containers/TechnicalDocumentation/TechnicalDocumentationModuleIndex";
import PortalAccessRequest from "../containers/PortalAccess/PortalAccessRequest";
import SplashPage from "../containers/Welcome/SplashPage/SplashPage";
import IssueReportsContainer from "../containers/IssueReports/IssueReportContainer";
import DiscussionBoardContainer from "../containers/DiscussionBoard/DiscussionBoardContainer";
import {DataReporting} from "../containers/DataReporting/DataReporting"

import { PrivateRoutes } from "../components/Auth/PrivateRoutes";
import { msalFeatureFlag } from "../utils/Auth/msalConfig";
import { Forbidden } from "../components/ErrorPage/Forbidden";
import { SvgViewer } from "../components/UI/SvgViewer";
import { ModuleRedirector } from "../containers/Public/ModuleRedirector";
import SearchContainer from "../containers/Search/SearchContainer";
import Search from "../containers/Search/Search";


import ESRContainer from "../containers/Support/ESR/ESRContainer";
import { UserManagementContainer } from "../containers/Administration/UserManagementContainer";
import {NotificationEmailContainer} from "../containers/Administration/NotificationEmailContainer";
import QuoteRequestContainer from "../containers/QuoteRequests/ModuleSpecificInformation/QuoteRequestsContainer";
import QuoteRequests from "../containers/QuoteRequests/QuoteRequests";
import { OrgGroupList } from "../containers/Administration/OrgGroupList";
import { ManageUserContainer } from "../containers/Administration/ManageUserContainer";
import QuoteRequestTracking from "../containers/QuoteRequests/QuoteRequestTracking";
import CustomerSurvey from "../containers/CustomerSurveyContainer/CustomerSurveyQuestions";
import AdministrationListContainer from "../containers/Administration/AdministrationListContainer";
import AdministrationListModuleContainer from "../containers/Administration/AdministrationListModuleContainer";
import AdministrationGroupContainer from "../containers/Administration/AdministrationGroupContainer";

export const Router = ({ providers }: { providers: React.ReactElement }) => (
  <BrowserRouter>
    <Routes>
      <Route element={msalFeatureFlag ? <PrivateRoutes /> : <Outlet />}>
        <Route path={"/"} element={providers}>
          <Route index element={<Home />} />
          <Route path="/email-opt-out" element={<Home isEmailOptOut={true} />} />
          <Route path={"/shared-document/:fileId"}>
            <Route index element={<FileReader />} />
            <Route path=":fileURI" element={<FileReader />} />
          </Route>
          <Route path="/document/:globalItemId" element={<FileReader />} />
          <Route path="/plant-information" element={<PlantInformation />}>
            <Route index element={<PlantSiteDetails overview={false} />} />
            <Route path="plant-site-information" element={<PlantSiteDetails overview={false} />} />

            <Route path="equipmentAttachments/:plantEquipmentId" element={<Nameplate />} />
            <Route path="site-contacts" element={<SiteContacts />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
          <Route path="/issue-reports" element={<IssueReportsContainer title="Issue Reports" />}>
            <Route path=":globalId/discussion-board" element={<DiscussionBoardContainer />} />
          </Route>
          <Route path="/quote-requests" element={<QuoteRequestContainer moduleId={6} title="Quote Requests" />} />
          <Route path="/quote-request" element={<ThreadContainer globalItemId={6} title="Quote Request" />}>
            <Route path=":threadId" element={<Thread />} />
            <Route index element={<ThreadList />} />
          </Route>
          <Route path="/search" element={<SearchContainer />}>
            <Route path=":searchText" element={<Search />} />
          </Route>
          <Route path="/parts&service" element={<PartsAndServiceContainer />}>
            <Route path={"QuoteRequests"} element={<QuoteRequests />}>
              <Route path=":quoteRequestId" element={<QuoteRequestTracking />} />
            </Route>
          </Route>
          <Route path="/parts&service/customer-survey" element={<CustomerSurvey className="flex" text="" />} />

          <Route path="/parts&service" element={<PartsAndServicesContainer />}>
            <Route path=":moduleName" element={<TechnicalDocumentationModuleContainer />}>
              <Route path=":groupId" element={<TechnicalDocumentationGroupContainer />}>
                <Route path="add" element={<AddDocumentContainer isEdit={false} />} />
                <Route path="edit" element={<AddDocumentContainer isEdit={true} />} />
              </Route>
              <Route index element={<TechnicalDocumentationModuleIndex />} />
              <Route path="manage-groups" element={<ManageDocumentGroups />} />
            </Route>
          </Route>

          <Route path="/technical-documentation" element={<TechnicalDocumentationContainer />}>
            <Route path=":moduleName" element={<TechnicalDocumentationModuleContainer />}>
              <Route path=":groupId" element={<TechnicalDocumentationGroupContainer />}>
                <Route path="add" element={<AddDocumentContainer isEdit={false} />} />
                <Route path="edit" element={<AddDocumentContainer isEdit={true} />} />
              </Route>
              <Route index element={<TechnicalDocumentationModuleIndex />} />
              <Route path="manage-groups" element={<ManageDocumentGroups />} />
            </Route>
          </Route>
          <Route path="/support" element={<SupportContainer />}>
            <Route path="faq/:supportModuleName" element={<Faq />} />
            <Route path="esr/:supportModuleName" element={<ESRContainer />} />
          </Route>
          <Route path="/administration/organization-management" element={<OrgGroupList />} />
          {/* <Route path="/administration/plant-management" element={<OrgGroupList />} /> */}
          {/* <Route path="/administration/role-configuration" element={<OrgGroupList />} /> */}
          <Route path="/administration/email-alert-&-notification-management" element={<NotificationEmailContainer section="Notification Settings" />} />
          <Route path="/administration/user-management" element={<UserManagementContainer section="default" />} />
          <Route path="/administration/user-management/:userId" element={<ManageUserContainer />} />
          <Route path="/administration/user-management/internal" element={<UserManagementContainer section="internal" />} />
          <Route path="/administration/user-management/external" element={<UserManagementContainer section="external" />} />
          <Route path="/administration/Data-Reporting" element={<DataReporting />} />

          <Route path="/administration/email-alert-&-notification-management/notification-settings" element={<NotificationEmailContainer section="Notification Settings" />} />
          <Route path="/administration/email-alert-&-notification-management/email-alert-settings" element={<NotificationEmailContainer section="Email Alert Settings" />} />
     
          <Route path="/administration" element={<AdministrationListContainer />}>
            <Route path=":moduleName" element={<AdministrationListModuleContainer />}>
              <Route path=":groupId" element={<AdministrationGroupContainer />} />
            </Route>
          </Route>
          <Route path="/forbidden" element={<Forbidden />} />
          <Route path="/module/:moduleId/*" element={<ModuleRedirector />} />
          <Route path="/forbidden" element={<Forbidden />} />
          <Route path="/module/:moduleId/*" element={<ModuleRedirector />} />
        </Route>
      </Route>
      <Route path="/portal-access" element={<PortalAccessRequest />} />
      <Route path="/splash" element={<SplashPage />} />
      {process.env.NODE_ENV === "development" && (
        <>
          <Route path="/svgs" element={<SvgViewer />} />
        </>
      )}
    </Routes>
  </BrowserRouter>
);
