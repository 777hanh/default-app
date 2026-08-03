/**
 * Import theo thứ tự a đến z, không nhập lung tung
 */
import Allowances from './entity/swagger/Microservice.nPL.Allowances'
import AuthenAndConfigAuthentication from './entity/swagger/Microservice.AuthenAndConfig.Authentication';
import AuthenAndConfigCustomize from './entity/swagger/Microservice.AuthenAndConfig.Customize';
import AuthenAndConfigCustomizeTable from './entity/swagger/Microservice.AuthenAndConfig.CustomizeTable';
import AuthenAndConfigEntry from './entity/swagger/Microservice.AuthenAndConfig.Entry';
import AuthenAndConfigFactor from './entity/swagger/Microservice.AuthenAndConfig.Factor';
import AuthenAndConfigMenu from './entity/swagger/Microservice.AuthenAndConfig.Menu';
import AuthenticationSystem from './entity/swagger/Authentication.System.Microservice';
import BankStatements from './entity/swagger/Functions.BankStatements';
import BrandPromotionBudgets from './entity/swagger/Functions.BrandPromotionBudgets.js';
import BudgetProposals from './entity/swagger/Functions.BudgetProposals.js';
import CategoryApprovalProcess from './entity/swagger/Microservice.Category.ApprovalProcess.js';
import CategoryContentComments from './entity/swagger/Microservice.Category.ContentComments';
import CategoryContracts from './entity/swagger/Microservice.Category.Contracts';
import CategoryCreditLimitProposal from './entity/swagger/Microservice.Category.CreditLimitProposal.js';
import CategoryDataTypes from './entity/swagger/Microservice.Category.DataTypes';
import CategoryDeviceInfos from './entity/swagger/Microservice.Category.DeviceInfos';
import CategoryDevices from './entity/swagger/Microservice.Category.Devices';
import CategoryDeviceTypes from './entity/swagger/Microservice.Category.DeviceTypes';
import CategoryGasItems from './entity/swagger/Microservice.Category.GasItems';
import CategoryGeneral from './entity/swagger/Microservice.Category.General';
import CategoryGeneralApprovals from './entity/swagger/Microservice.Category.GeneralApprovals';
import CategoryIndicators from './entity/swagger/Microservice.Category.Indicators';
import CategoryItems from './entity/swagger/Microservice.Category.Items';
import CategoryPlanForUsers from './entity/swagger/Microservice.Category.PlanForUsers';
import CategoryPowerTypes from './entity/swagger/Microservice.Category.PowerTypes';
import CategoryStationByGasRestaurents from './entity/swagger/Microservice.Category.StationByGasRestaurents';
import CategoryStationImages from './entity/swagger/Microservice.Category.StationImages';
import CategoryStationNodes from './entity/swagger/Microservice.Category.StationNodes';
import CategoryStatus from './entity/swagger/Microservice.Category.Status';
import CategoryStores from './entity/swagger/Microservice.Category.Stores';
import CateRegions from './entity/swagger/Microservice.Category.Regions.js';
import CategorynPL from './entity/swagger/Microservice.Category.nPL';
import CategorynPLCustomer from './entity/swagger/Microservice.Category.nPLCustomer';
import CategorynPLCustomersDetails from './entity/swagger/Microservice.Category.nPLCustomersDetails';
import ChangeCustomerProfiles from './entity/swagger/Functions.Customer.ChangeCustomerProfiles';
import CollectExcelProcessing from './entity/swagger/Microservice.Collect.ExcelProcessing';
import ConditionKeys from './entity/swagger/Microservice.Category.ConditionKeys.js';

import ConditionTypes from './entity/swagger/Microservice.Category.ConditionTypes.js';
import ConfigBackups from './entity/swagger/Microservice.Config.Backups';
import ConfigCompany from './entity/swagger/Microservice.Config.Company';
import ConfigCustomerGroups from './entity/swagger/Microservice.Config.CustomerGroups';
import ConfigCustomers from './entity/swagger/Microservice.Config.Customers';
import ConfigEmployers from './entity/swagger/Microservice.Config.Employers';
import ConfigEntrys from './entity/swagger/Microservice.Config.Entrys';
import ConfigFactors from './entity/swagger/Microservice.Config.Factors';
import ConfigFormPrints from './entity/swagger/Microservice.Config.FormPrints';
import ConfigGroupEmployers from './entity/swagger/Microservice.Config.GroupEmployers';
import ConfigMenu from './entity/swagger/Microservice.Config.Menu';
import ConfigPI from './entity/swagger/Microservice.Category.ConfigPI.js';
import ConfigShippers from './entity/swagger/Microservice.Config.Shippers';
import ConfigStationRight_ByGroups from './entity/swagger/Microservice.Config.StationRight_ByGroups';
import ConfigSystem from './entity/swagger/Microservice.Config.System';
import ConfigUsers from './entity/swagger/Microservice.Config.Users';
import Complaints from './entity/swagger/Functions.Complaints';
import CustomerArchived from './entity/swagger/Microservice.Category.CustomerArchived';
import CustomerEvaluation from './entity/swagger/Microservice.Category.CustomerEvaluation';
import CustomerProfileChanges from './entity/swagger/Functions.Customer.CustomerProfileChanges';
import CustomerProfiles from './entity/swagger/Functions.Customer.CustomerProfiles';
import CustomerSalesAccesses from './entity/swagger/Functions.Customer.CustomerSalesAccesses';
import CustomerRequest from './entity/swagger/Microservice.Category.CustomerRequest';
import CustomerInfoExchange from './entity/swagger/Functions.Customer.CustomerInformationExchanges';
import CustomerGroup from './entity/swagger/Functions.Customer.CustomerGroups';
import CustomizeType from './entity/swagger/Microservice.AuthenAndConfig.CustomizeType';
import DashboardSmartLighting from './entity/swagger/Functions.Maintenance.DashboardSmartLighting';
import DataBegins from './entity/swagger/Functions.DataBegin.DataBegins.js';
import DocumentTypes from './entity/swagger/Microservice.Init.DocumentTypes.js';
import DisplayCabinets from './entity/swagger/Functions.Plan.DisplayCabinets.js';
import DisplayMaterials from './entity/swagger/Functions.Plan.DisplayMaterials.js';


import DriverRequestFuelRefills from './entity/swagger/Microservice.Category.DriverRequestFuelRefills';
import ExhibitionEvaluations from './entity/swagger/Functions.ExhibitionEvaluations.js';
import ExhibitionExtensions from './entity/swagger/Functions.ExhibitionExtensions.js';
import ExhibitionPrograms from './entity/swagger/Functions.ExhibitionPrograms.js';
import ExhibitionRegistrations from './entity/swagger/Functions.ExhibitionRegistrations.js';
import ExpertNPL from './entity/swagger/Microservice.Category.nPLExperts';
import ExportPDF from './entity/swagger/Microservice.Init.ExportPDF.js';
import Factor from './entity/swagger/Microservice.Init.Factor.js';
import GasFamilysReports from './entity/swagger/Microservice.GasFamilys.Reports';
import GasRestaurantsReports from './entity/swagger/Microservice.GasRestaurants.Reports';
import GeneralAttachFiles from './entity/swagger/Microservice.General.AttachFiles';
import GeneralCategory from './entity/swagger/Microservice.General.Category';
import GeneralCategoryTree from './entity/swagger/Microservice.General.CategoryTrees';
import GeneralCustomerDeliverys from './entity/swagger/Microservice.General.CustomerDeliverys';
import GeneralEventAlerts from './entity/swagger/Function.General.EventAlerts.js';
import GeneralEventSystems from './entity/swagger/Microservice.General.EventSystems.js';
import GeneralItems from './entity/swagger/Microservice.General.Items';
import generalMaintenanceProcess from './entity/swagger/Functions.General.MaintenanceProcess.js';
import generalMaintenanceReports from './entity/swagger/Functions.General.MaintenanceReports.js';
import GeneralStations from './entity/swagger/Microservice.General.Stations';
import HandOverDocument from './entity/swagger/Functions.HandOverDocument.js';
import IncidentReports from './entity/swagger/Microservice.Category.IncidentReports.js';
import ImportExcel from './entity/swagger/Functions.ImportExcel.js';
import KESPriceStandards from './entity/swagger/Microservice.Category.KESPriceStandards';
import KeyCondition from './entity/swagger/Microservice.Init.KeyCondition.js';
import LiquidateReason from './entity/swagger/Functions.LiquidateReason.js';
import MailConfigs from './entity/swagger/Microservice.Config.MailConfigs';
import MappingProposal from './entity/swagger/Microservice.Category.MappingProposal';
import MarketResearchs from './entity/swagger/Functions.MarketResearchs.js';
import MasterCharts from './entity/swagger/Microservice.Master.Charts';
import MasterDashboard from './entity/swagger/Microservice.Master.Dashboard';
import MasterMonitors from './entity/swagger/Microservice.Master.Monitors';
import MasterNotification from './entity/swagger/Microservice.Master.Notification';
import MasterNotifyRight from './entity/swagger/Microservice.Master.NotifyRight';
import MasterNotifyTypes from './entity/swagger/Microservice.Master.NotifyTypes';
import MasterTokenAppVer2 from './entity/swagger/Microservice.Master.TokenAppVer2';
import MasterTokenApps from './entity/swagger/Microservice.Master.TokenApps';
import MediaMovie from './entity/swagger/Microservice.Media.Movie';
import MediaPosts from './entity/swagger/Microservice.Media.Posts';
import MonitorIndicatorWarnings from './entity/swagger/Microservice.Monitor.IndicatorWarnings';
import MonitorLevelWarnings from './entity/swagger/Microservice.Monitor.LevelWarnings';
import Maps from './entity/swagger/Microservice.Rails.Maps';
import NotificationContacts from './entity/swagger/Microservice.Notification.Contacts';
import NotificationCustomers from './entity/swagger/Microservice.Notification.Customers';
import NotificationInternals from './entity/swagger/Microservice.Notification.Internals';
import NPLCategories from './entity/swagger/Microservice.Category.nPL.NPLCategories'
import nPLDepotByCustomers from './entity/swagger/Microservice.nPL.DepotByCustomers';
import NPLDriver from './entity/swagger/Microservice.Category.nPLDriver';
import NPLDriveHelper from './entity/swagger/Microservice.Category.nPLDriveHelper';
import NPLVehicles from './entity/swagger/Microservice.Category.nPLVehicles.js';
import NPLRegions from './entity/swagger/Microservice.Category.nPLRegion.js';
import NPLRoutes from './entity/swagger/Microservice.Category.nPLRoutes.js';
import OrderRequets from './entity/swagger/Functions.OrderRequest.js';
import OtherRequest from './entity/swagger/Microservice.Category.OrtherRequest.js';
import OtherProposals from './entity/swagger/Functions.OtherProposals.js';
import OtherProposalsNPL from './entity/swagger/Functions.OtherProposalsNPL.js';
import PaymentCashRequests from './entity/swagger/Functions.PaymentCashRequests';
import PaymentConfirmations from './entity/swagger/Functions.PaymentConfirmations.js';
import PaymentRequests from './entity/swagger/Functions.PaymentRequests';
import Posts from './entity/swagger/Functions.Media.Posts.js';
import PriceShippings from './entity/swagger/Functions.PriceCommercials.PriceShippings.js';
import PricePolicy from './entity/swagger/Microservice.Category.PricePolicy.js';
import PriceSpecialGroups from  './entity/swagger/Functions.PriceCommercials.SpecialGroups';
import ProvisionalDiscounts from './entity/swagger/Functions.PriceCommercials.ProvisionalDiscounts.js';
import ProcessAdjustment from './entity/swagger/Functions.nPL.ProcessAdjustment.js';
import ProcessDriverMaintenances from './entity/swagger/Functions.nPL.ProcessDriverMaintenances.js';
import ProcessDriverRepairs from './entity/swagger/Functions.nPL.ProcessDriverRepairs.js';
import ProcessRequestVehicles from './entity/swagger/Functions.nPL.ProcessRequestVehicles.js';
import ProductionCapacitys from './entity/swagger/Microservice.Category.ProductionCapacitys.js';
import PromotionPrograms from './entity/swagger/Microservice.Category.PromotionPrograms.js';
import PromotionGifts from './entity/swagger/Functions.PromotionGift.js';
import PromotionGiftPlan from './entity/swagger/Functions.PromotionGiftPlan.js';
import PromotionGiftExpansions from './entity/swagger/Functions.PromotionGiftExpansions.js';
import PermissionLists from './entity/swagger/Microservice.Init.PermissionLists.js';
import PricingProcedures from './entity/swagger/Microservice.Init.PricingProcedures.js';
import PriceProposals from './entity/swagger/Functions.PriceCommercials.PriceProposals.js';
import PIAllocations from './entity/swagger/Functions.Plans.PIAllocations.js';
import PIEvaluations from './entity/swagger/Functions.Plans.PIEvaluations.js';
import Quotation from './entity/swagger/Functions.Quotation.js';
import SaleOrders from './entity/swagger/Functions.SaleOrders';
import SalesAdjustDebits from './entity/swagger/Microservice.Sales.AdjustDebits';
import SalesAdjustPrices from './entity/swagger/Microservice.Sales.AdjustPrices';
import SalesBalanceDebitTanks from './entity/swagger/Microservice.Sales.BalanceDebitTanks';
import SalesBalanceDebits from './entity/swagger/Microservice.Sales.BalanceDebits';
import SaleContractsNPL from './entity/swagger/Functions.nPL.SaleContracts';
import SaleContractsByIncurredNPL from './entity/swagger/Functions.nPL.SaleContractsByIncurred';
import SalesDeliverys from './entity/swagger/Functions.Sales.Deliverys';
import SalesGasDeliverys from './entity/swagger/Microservice.Sales.GasDeliverys';
import SalesGasReports from './entity/swagger/Microservice.Sales.GasReports';
import SalesOrderInvoices from './entity/swagger/Functions.Sales.OrderInvoices';
import SalesOrderSumary from './entity/swagger/Functions.Sales.OrderSumary';
import SalesOrders from './entity/swagger/Functions.Sales.Orders';
import SalesInventorys from './entity/swagger/Functions.SaleInventorys';
import SalesInventoryHolds from './entity/swagger/Functions.SaleInventorys.SaleInventoryHolds';
import SalesInventoryTransfers from './entity/swagger/Functions.SaleInventorys.SaleInventoryTransfers';
import SalesInventoryImports from './entity/swagger/Functions.SaleInventorys.SaleInventoryImports';
import SalesReturnTanks from './entity/swagger/Microservice.Sales.ReturnTanks';
import SalesSaleContracts from './entity/swagger/Microservice.Sales.SaleContracts';
import SalesVouchers from './entity/swagger/Microservice.Sales.Vouchers';
import Shippings from './entity/swagger/Functions.Shippings.js';
import ShippingsNPL from './entity/swagger/Functions.nPL.Shippings';
import ShippingsDetailByIncurreds from './entity/swagger/Microservice.Category.ShippingsDetailByIncurreds.js';
import ShippingsDetailByTollFees from './entity/swagger/Functions.nPL.ShippingDetailByTollFees';
import ShippingsDetailByUpdateInfo from './entity/swagger/Functions.nPL.ShippingDetailByUpdateInfo';
import ShippingsIncurred from './entity/swagger/Functions.nPL.ShippingIncurreds';
import ShippingsNotSOs from './entity/swagger/Microservice.Category.ShippingsNotSOs.js';
import ShipmentAllowances from './entity/swagger/Microservice.Category.ShipmentAllowances.js';
import SmartGas from './entity/swagger/Microservice.IOT.SmartGas';
import TaskFuncs from './entity/swagger/Functions.Media.TaskFuncs';
import Trainings from './entity/swagger/Functions.Trainings.js';
import TypeCondition from './entity/swagger/Microservice.Init.TypeCondition.js';
import VehicleDatas from './entity/swagger/Functions.nPL.VehicleDatas';
import VehicleHandovers from './entity/swagger/Microservice.Category.VehicleHandovers.js';
import VehicleMaintenances from './entity/swagger/Microservice.Category.VehicleMaintenances.js';
import Vehicles from './entity/swagger/Microservice.Category.Vehicles.js';
import VietMap from './entity/swagger/Microservice.VietMap.js';
import ResearchMarketPlans from './entity/swagger/Microservice.Category.ResearchMarketPlans.js';

const repositories = {
    allowances: Allowances,
	authSystem: AuthenticationSystem,
	authenAndConfigAuthentication: AuthenAndConfigAuthentication,
	authenAndConfigCustomize: AuthenAndConfigCustomize,
	authenAndConfigCustomizeTable: AuthenAndConfigCustomizeTable,
	authenAndConfigEntry: AuthenAndConfigEntry,
	authenAndConfigFactor: AuthenAndConfigFactor,
	authenAndConfigMenu: AuthenAndConfigMenu,
	bankStatements: BankStatements,
	brandPromotionBudgets: BrandPromotionBudgets,
	budgetProposals: BudgetProposals,
	cateApprovalProcess: CategoryApprovalProcess,
	cateContentComment: CategoryContentComments,
	cateContracts: CategoryContracts,
	cateGeneral: CategoryGeneral,
	cateIndicators: CategoryIndicators,
	categoryItems: CategoryItems,
	catePowerTypes: CategoryPowerTypes,
	cateRegions: CateRegions,
	cateStationByGasRestaurents: CategoryStationByGasRestaurents,
	cateStationImages: CategoryStationImages,
	cateStationNodes: CategoryStationNodes,
	cateStatus: CategoryStatus,
	cateStores: CategoryStores,
	categoryCreditLimitProposal: CategoryCreditLimitProposal,
	categoryGeneralApprovals: CategoryGeneralApprovals,
	categoryPlanForUsers: CategoryPlanForUsers,
	catenPL: CategorynPL,
	catenPLCustomer: CategorynPLCustomer,
	catenPLCustomerDetails: CategorynPLCustomersDetails,
	changeCustomerProfiles: ChangeCustomerProfiles,
	collectExcelProcessing: CollectExcelProcessing,
	conditionKeys: ConditionKeys,
	conditionTypes: ConditionTypes,
	confBackups: ConfigBackups,
	confCompany: ConfigCompany,
	confCustomerGroups: ConfigCustomerGroups,
	confCustomers: ConfigCustomers,
	confEmployers: ConfigEmployers,
	confEntrys: ConfigEntrys,
	confFactors: ConfigFactors,
	confFormPrints: ConfigFormPrints,
	confGroupEmployers: ConfigGroupEmployers,
	confMenu: ConfigMenu,
	confShippers: ConfigShippers,
	confStationRightByGroups: ConfigStationRight_ByGroups,
	confSystem: ConfigSystem,
	confUsers: ConfigUsers,
	configPI: ConfigPI,
	complaints: Complaints,
	customerArchived: CustomerArchived,
	customerEvaluation: CustomerEvaluation,
	customerProfileChanges: CustomerProfileChanges,
	customerProfiles: CustomerProfiles,
	customerSalesAccesses: CustomerSalesAccesses,
	customerRequest: CustomerRequest,
	customerInfoExchange: CustomerInfoExchange,
	customerGroup: CustomerGroup,
	customizeType: CustomizeType,
	dashboardSmartLighting: DashboardSmartLighting,
    dataBegins : DataBegins,
	documentTypes: DocumentTypes,
	displayCabinets: DisplayCabinets,
	displayMaterials: DisplayMaterials,


	driverRequestFuelRefills: DriverRequestFuelRefills,
	exhibitionEvaluations: ExhibitionEvaluations,
	exhibitionExtensions: ExhibitionExtensions,
	exhibitionPrograms: ExhibitionPrograms,
	exhibitionRegistrations: ExhibitionRegistrations,
	expertNPL: ExpertNPL,
	exportPDF: ExportPDF,
	factor: Factor,
	gasFamilysReports: GasFamilysReports,
	gasRestaurantsReports: GasRestaurantsReports,
	generalAttachFiles: GeneralAttachFiles,
	generalCategory: GeneralCategory,
	generalCategoryTree: GeneralCategoryTree,
	generalCustomerDeliverys: GeneralCustomerDeliverys,
	generalEventAlerts: GeneralEventAlerts,
	generalEventSystems: GeneralEventSystems,
	generalItems: GeneralItems,
	generalMaintenanceProcess: generalMaintenanceProcess,
	generalMaintenanceReports: generalMaintenanceReports,
	generalStations: GeneralStations,
	handOverDocument: HandOverDocument,
	incidentReports: IncidentReports,
	importExcel: ImportExcel,
	kesPriceStandards: KESPriceStandards,
	keyCondition: KeyCondition,
	liquidateReason: LiquidateReason,
	mailConfigs: MailConfigs,
	mappingProposal: MappingProposal,
	marketResearchs: MarketResearchs,
	mastCharts: MasterCharts,
	mastDashboard: MasterDashboard,
	mastMonitors: MasterMonitors,
	mastNotification: MasterNotification,
	mastNotifyRight: MasterNotifyRight,
	mastNotifyTypes: MasterNotifyTypes,
	mastTokenAppVer2: MasterTokenAppVer2,
	mastTokenApps: MasterTokenApps,
	mediaMovie: MediaMovie,
	mediaPosts: MediaPosts,
	monitorIndicatorWarnings: MonitorIndicatorWarnings,
	monitorLevelWarnings: MonitorLevelWarnings,
	nPLDepotByCustomers: nPLDepotByCustomers,
	NPLVehicles: NPLVehicles,
	notiContracts: NotificationContacts,
	notiCustomers: NotificationCustomers,
	notiInternals: NotificationInternals,
	nPLCategories: NPLCategories,
	nPLDriver: NPLDriver,
	nPLDriveHelper: NPLDriveHelper,
	nPLRoutes: NPLRoutes,
	nPLRegions:NPLRegions,
	orderRequets: OrderRequets,
	otherRequest: OtherRequest,
	otherProposals: OtherProposals,
	otherProposalsNPL: OtherProposalsNPL,
	paymentCashRequests: PaymentCashRequests,
	paymentConfirmations: PaymentConfirmations,
	paymentRequests: PaymentRequests,
	posts: Posts,
	priceShippings: PriceShippings,
	pricePolicy: PricePolicy,
	priceSpecialGroups: PriceSpecialGroups,
	provisionalDiscounts: ProvisionalDiscounts,
	productionCapacitys: ProductionCapacitys,
	promotionPrograms: PromotionPrograms,
	promotionGifts: PromotionGifts,
	promotionGiftPlan: PromotionGiftPlan,
	promotionGiftExpansions:PromotionGiftExpansions,
	processAdjustmentnPL: ProcessAdjustment,
	processDriverMaintenances: ProcessDriverMaintenances,
	processDriverRepairs: ProcessDriverRepairs,
	processRequestVehicles: ProcessRequestVehicles,
	permissionLists: PermissionLists,
	pricingProcedures: PricingProcedures,
	priceProposals: PriceProposals,
	piAllocations: PIAllocations,
	piEvaluations: PIEvaluations,
	quotation: Quotation,
	saleOrders: SaleOrders,
	salesAdjustDebits: SalesAdjustDebits,
	salesAdjustPrices: SalesAdjustPrices,
	salesBalanceDebitTanks: SalesBalanceDebitTanks,
	salesBalanceDebits: SalesBalanceDebits,
	saleContractByIncurredNPL: SaleContractsByIncurredNPL,
	saleContractsNPL: SaleContractsNPL,
	salesDeliverys: SalesDeliverys,
	salesGasDeliverys: SalesGasDeliverys,
	salesOrderInvoices: SalesOrderInvoices,
	salesOrderSumary: SalesOrderSumary,
	salesOrders: SalesOrders,
	salesInventorys: SalesInventorys,
	salesInventoryHolds: SalesInventoryHolds,
	salesInventoryTransfers: SalesInventoryTransfers,
	salesInventoryImports: SalesInventoryImports,
	salesReturnTanks: SalesReturnTanks,
	salesSaleContracts: SalesSaleContracts,
	salesVouchers: SalesVouchers,
	shippings: Shippings,
	shippingsDetailByIncurreds: ShippingsDetailByIncurreds,
	shippingsDetailByTollFees: ShippingsDetailByTollFees,
	shippingsDetailByUpdateInfo: ShippingsDetailByUpdateInfo,
	shippingIncurreds: ShippingsIncurred,
	shippingsNotSOs: ShippingsNotSOs,
	shippingsNPL: ShippingsNPL,
	shipmentAllowances: ShipmentAllowances,
	smartGas: SmartGas,
	taskFuncs: TaskFuncs,
	trainings: Trainings,
	typeCondition: TypeCondition,
	vehicleData: VehicleDatas,
	vehicleHandovers: VehicleHandovers,
	vehicleMaintenances: VehicleMaintenances,
	vehicles: Vehicles,
	vietMap: VietMap,
	researchMarketPlans: ResearchMarketPlans,

};
const RepositoryFactory = {
    get: (name) => repositories[name],
};

export default RepositoryFactory;
