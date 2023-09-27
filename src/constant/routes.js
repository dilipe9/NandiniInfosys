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
import SYnc from "../Pages/Reports/Sync";
import Statistics from "../Pages/Reports/Statistics";

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
		],
	},
];

export default routes;
