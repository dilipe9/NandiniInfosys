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

const routes = [
  {
    path: "/postlogin/dashboard",
    icon: AiFillDashboard,
    name: "Dashboard",
    component: Dashboard,
    type: "parent",
  },

  {
    name: "BI Dashboard",
    type: "parent",
    icon: AiFillDashboard,
    children: [
      {
        name: "Sales Dashboard",
        path: "/postlogin/sales",
        component: SalesDashBoard,
      },
      {
        name: "HR Dashboard",
        path: "/postlogin/hr",
        component: HRDashboard,
      },
      {
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
    children: [
      {
        name: "Designation",
        component: DesignationMaster,
      },
      {
        name: "Department",
        component: DepartmentMaster,
      },
      {
        name: "Employee",
        component: EmployeeMaster,
      },
      {
        name: "Role",
        component: RoleMaster,
      },
      {
        name: "User",
        component: UserMaster,
      },
      {
        name: "Setting",
        component: Settings,
      },
    ],
  },
  {
    name: "Tally Data",
    type: "parent",
    icon: AiFillDashboard,
    children: [
      {
        name: "Company",
        component: Company,
      },
      {
        name: "Cost Category",
        component: CostCategory,
      },
      {
        name: "Cost Center",
        component: CostCenter,
      },
      {
        name: "Currency",
        component: Currency,
      },
      {
        name: "Group",
        component: Group,
      },
      {
        name: "Ledger",
        component: Ledger,
      },
      {
        name: "Stock Category",
        component: StockCategory,
      },
      {
        name: "Stock Godown",
        component: StockGodown,
      },
      {
        name: "Stock Group",
        component: StockGroup,
      },
      {
        name: "Stock Item",
        component: StockItem,
      },
      {
        name: "Stock Unit",
        component: StockUnit,
      },
      {
        name: "Voucher Type",
        component: VoucherType,
      },
      {
        name: "Transactions",
        component: Transaction,
      },
    ],
  },
  {
    name: "Reports",
    type: "parent",
    icon: AiFillDashboard,
    children: [
      {
        name: "Statistics",
        component: Statistics,
      },
      {
        name: "Sync Report",
        component: SYnc,
      },
      {
        name: "Purchase",
        component: PurchaseTransaction,
      },
    ],
  },
  {
    name: "Scheme",
    type: "parent",
    icon: AiFillDashboard,
    children: [
      {
        name: "Target Scheme",
        component: TargetScheme,
      },
      {
        name: "Scheme Process",
        component: SchemeProcess,
      },
    ],
  },
  {
    name: "Tally Master",
    type: "parent",
    icon: AiFillDashboard,
    children: [
      {
        name: "Company",
        component: TallyCompany,
      },
      {
        name: "Cost Category",
        component: TallyCostCategory,
      },
      {
        name: "Cost Center",
        component: TallyCostCenter,
      },
      {
        name: "Currency",
        component: TallyCurrency,
      },
      {
        name: "Group",
        component: TallyGroup,
      },
      {
        name: "Ledger",
        component: TallyLedger,
      },
      {
        name: "Stock Category",
        component: TallyStockCategory,
      },
      {
        name: "Stock Godown",
        component: TallyStockGodown,
      },
      {
        name: "Stock Group",
        component: TallyStockGroup,
      },
      {
        name: "Stock Item",
        component: TallyStockItem,
      },
      {
        name: "Stock Unit",
        component: TallyStockUnit,
      },
      {
        name: "Voucher Type",
        component: TallyVoucherType,
      },
      {
        name: "Transactions",
        component: TallyTransactions,
      },
    ],
  },
];

export default routes;
