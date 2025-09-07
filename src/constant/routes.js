import React from "react";
import { AiFillDashboard } from "react-icons/ai";

// Dashboards
import Dashboard from "../Pages/Dashboard";
import SalesDashBoard from "../Pages/Dashboard/SalesDashboard";
import HRDashboard from "../Pages/Dashboard/HRDashboard";
import OSDashbord from "../Pages/Dashboard/OutstandingDashboard";

// Tally
import CostCenter from "../Pages/TallyData/CostCenter";
import CostCategory from "../Pages/TallyData/CostCategory";
import Company from "../Pages/TallyData/Company";
import Currency from "../Pages/TallyData/Currency";
import Group from "../Pages/TallyData/Group";
import Ledger from "../Pages/TallyData/Ledger";
import StockCategory from "../Pages/TallyData/StockCategory";
import StockGodown from "../Pages/TallyData/StockGodown";
import StockGroup from "../Pages/TallyData/StockGroup";
import StockItem from "../Pages/TallyData/StockItem";
import StockUnit from "../Pages/TallyData/StockUnit";
import VoucherType from "../Pages/TallyData/VoucherType";
import Transaction from "../Pages/TallyData/Transactions";

// MASTERS
import DepartmentMaster from "../Pages/Masters/DepartmentMaster";
import DesignationMaster from "../Pages/Masters/DesignationMaster";
import EmployeeMaster from "../Pages/Masters/EmployeeMaster";
import RoleMaster from "../Pages/Masters/RoleMaster";
import UserMaster from "../Pages/Masters/UserMaster";
import Settings from "../Pages/Masters/SettingMaster";

//Reports
import SYnc from "../Pages/Reports/Sync";
import Statistics from "../Pages/Reports/Statistics";
import PurchaseTransaction from "../Pages/Reports/Purchase";
import JournelReportTransaction from "../Pages/Reports/Journel";
import SalesReportTransaction from "../Pages/Reports/Sales";

//Scheme
import TargetScheme from "../Pages/Scheme/TargetScheme";
import SchemeProcess from "../Pages/Scheme/SchemeProcess";

// Tally Master
import TallyCompany from "../Pages/TallyMaster/Company";
import TallyCostCategory from "../Pages/TallyMaster/CostCategory";
import TallyCostCenter from "../Pages/TallyMaster/CostCenter";
import TallyCurrency from "../Pages/TallyMaster/Currency";
import TallyGroup from "../Pages/TallyMaster/Group";
import TallyLedger from "../Pages/TallyMaster/Ledger";
import TallyStockCategory from "../Pages/TallyMaster/StockCategory";
import TallyStockGodown from "../Pages/TallyMaster/StockGodown";
import TallyStockGroup from "../Pages/TallyMaster/StockGroup";
import TallyStockItem from "../Pages/TallyMaster/StockItem";
import TallyStockUnit from "../Pages/TallyMaster/StockUnit";
import TallyTransactions from "../Pages/TallyMaster/Transactions";
import TallyVoucherType from "../Pages/TallyMaster/VoucherType";

// Transaction
import Budget from "../Pages/Transaction/Budget";
import BudgetPlanning from "../Pages/Transaction/BudgetPlanning";
import PurchaseRequisition from "../Pages/Transaction/PurchaseRequisition";
import SalesTransaction from "../Pages/Transaction/SalesTransaction";
import ItemIntegrationReport from "../Pages/IntegrationReport/ItemReport";
import CustomerIntegrationReport from "../Pages/IntegrationReport/CustomerReport";
import CustomerAdressReport from "../Pages/IntegrationReport/CustomerAddressReport";
import InvoiceReport from "../Pages/IntegrationReport/InvoiceReport";
import InvoiceDetailReport from "../Pages/IntegrationReport/InvoiceDetailReport";
import PaymentReport from "../Pages/IntegrationReport/Payment";
import CreditNoteReport from "../Pages/IntegrationReport/CreditNoteReport";
import DebitNoteReport from "../Pages/IntegrationReport/DebitNoteReport";

const routes = [
  {
    path: "/postlogin/dashboard",
    icon: AiFillDashboard,
    name: "Dashboard",
    component: Dashboard,
    type: "parent",
    id: 1,
  },

  {
    name: "BI Dashboard",
    type: "parent",
    id: 2,
    icon: AiFillDashboard,
    children: [
      {
        id: 3,
        name: "Sales Dashboard",
        path: "/postlogin/sales",
        component: SalesDashBoard,
      },
      {
        id: 4,
        name: "HR Dashboard",
        path: "/postlogin/hr",
        component: HRDashboard,
      },
      {
        id: 5,
        name: "Outstanding Dashboard",
        path: "/postlogin/outstanding",
        component: OSDashbord,
      },
    ],
  },
  {
    name: "Masters",
    type: "parent",
    icon: AiFillDashboard,
    id: 6,
    children: [
      {
        id: 7,
        name: "Designation",
        component: DesignationMaster,
      },
      {
        id: 8,
        name: "Department",
        component: DepartmentMaster,
      },
      {
        id: 9,
        name: "Employee",
        component: EmployeeMaster,
      },
      {
        id: 10,
        name: "Role",
        component: RoleMaster,
      },
      {
        id: 11,
        name: "User",
        component: UserMaster,
      },
      {
        id: 12,
        name: "Setting",
        component: Settings,
      },
    ],
  },
  {
    name: "Tally Data",
    id: 13,
    type: "parent",
    icon: AiFillDashboard,
    children: [
      {
        id: 14,
        name: "Company",
        component: Company,
      },
      {
        id: 15,
        name: "Cost Category",
        component: CostCategory,
      },
      {
        id: 16,
        name: "Cost Center",
        component: CostCenter,
      },
      {
        id: 17,
        name: "Currency",
        component: Currency,
      },
      {
        id: 18,
        name: "Group",
        component: Group,
      },
      {
        id: 19,
        name: "Ledger",
        component: Ledger,
      },
      {
        id: 20,
        name: "Stock Category",
        component: StockCategory,
      },
      {
        id: 21,
        name: "Stock Godown",
        component: StockGodown,
      },
      {
        id: 22,
        name: "Stock Group",
        component: StockGroup,
      },
      {
        id: 23,
        name: "Stock Item",
        component: StockItem,
      },
      {
        id: 24,
        name: "Stock Unit",
        component: StockUnit,
      },
      {
        id: 25,
        name: "Voucher Type",
        component: VoucherType,
      },
      {
        id: 26,
        name: "Transactions",
        component: Transaction,
      },
    ],
  },
  {
    name: "Reports",
    type: "parent",
    icon: AiFillDashboard,
    id: 27,
    children: [
      {
        id: 28,
        name: "Statistics",
        component: Statistics,
      },
      {
        id: 29,
        name: "Sync Report",
        component: SYnc,
      },
      {
        id: 30,
        name: "Purchase",
        component: PurchaseTransaction,
      },
      {
        id: 31,
        name: "Sales",
        component: SalesReportTransaction,
      },
      {
        id: 32,
        name: "Journal",
        component: JournelReportTransaction,
      },
    ],
  },
  {
    name: "Integration Report",
    type: "parent",
    icon: AiFillDashboard,
    id: 55,
    children: [
      {
        id: 56,
        name: "Item Report",
        component: ItemIntegrationReport,
      },
      {
        id: 57,
        name: "Customer report",
        component: CustomerIntegrationReport,
      },
      {
        id: 58,
        name: "Customer Address",
        component: CustomerAdressReport,
      },
      {
        id: 59,
        name: "Invoice",
        component: InvoiceReport,
      },
      {
        id: 60,
        name: "Invoice Detail",
        component: InvoiceDetailReport,
      },
      {
        id: 61,
        name: "Payment",
        component: PaymentReport,
      },
      {
        id: 62,
        name: "Credit Note",
        component: CreditNoteReport,
      },
      {
        id: 63,
        name: "Debit Note",
        component: DebitNoteReport,
      },
    ],
  },
  {
    id: 33,
    name: "Scheme",
    type: "parent",
    icon: AiFillDashboard,
    children: [
      {
        id: 34,
        name: "Target Scheme",
        component: TargetScheme,
      },
      { id: 35, name: "Scheme Process", component: SchemeProcess },
    ],
  },
  {
    id: 36,
    name: "Transaction",
    type: "parent",
    icon: AiFillDashboard,
    children: [
      {
        id: 37,
        name: "Budget Planning",
        component: BudgetPlanning,
      },
      {
        id: 38,
        name: "Sales Transaction",
        component: SalesTransaction,
      },
      {
        id: 39,
        name: "Purchase Requisition",
        component: PurchaseRequisition,
      },
      { id: 40, name: "Budget", component: Budget },
    ],
  },
  {
    id: 41,
    name: "Tally Master",
    type: "parent",
    icon: AiFillDashboard,
    children: [
      {
        id: 42,
        name: "Company Master",
        component: TallyCompany,
      },
      { id: 43, name: "Cost Category", component: TallyCostCategory },
      {
        id: 44,
        name: "Cost Center Master",
        component: TallyCostCenter,
      },
      {
        id: 45,
        name: "Currency Master",
        component: TallyCurrency,
      },
      {
        id: 46,
        name: "Group Master",
        component: TallyGroup,
      },
      {
        id: 47,
        name: "Ledger Master",
        component: TallyLedger,
      },
      {
        id: 48,
        name: "Stock Category Master",
        component: TallyStockCategory,
      },
      {
        id: 49,
        name: "Stock Godown Master",
        component: TallyStockGodown,
      },
      {
        id: 50,
        name: "Stock Group Master",
        component: TallyStockGroup,
      },
      {
        id: 51,
        name: "Stock Item Master",
        component: TallyStockItem,
      },
      {
        id: 52,
        name: "Stock Unit Master",
        component: TallyStockUnit,
      },
      {
        id: 53,
        name: "Voucher Type Master",
        component: TallyVoucherType,
      },
      {
        id: 54,
        name: "Transactions Master",
        component: TallyTransactions,
      },
    ],
  },
];

export default routes;
