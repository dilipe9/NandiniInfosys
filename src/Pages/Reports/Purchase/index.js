import React, { useState, useId, useEffect, useRef } from "react";
import Input from "../../../components/input/Input";
import styles from "../../../components/form_generator/styles/formGenerator.module.css";
import { axios_ } from "../../../utilities/utll";
import InputRow from "../../../components/input_row/InputRow";
import Button from "../../../components/button/Button";
import "./puchase_transaction.css";
import { DataManager, Query } from "@syncfusion/ej2-data";
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Edit,
  CommandColumn,
  Freeze,
  Page,
  Filter,
  Toolbar,
  ExcelExport,
  AggregateColumnDirective,
  Sort,
  ForeignKey,
} from "@syncfusion/ej2-react-grids";
import { DetailRow, Inject } from "@syncfusion/ej2-react-grids";
import { dateFormat } from "../../../utilities/utll";

const PurchaseTransaction = () => {
  let childGridInstance = useRef();
  const uid = useId();
  const [formDetails, setFormDetails] = useState({
    selectedPeriod: "-1",
    fromDate: "",
    toDate: "",
  });
  const [parentGridData, setParentGridData] = useState([]);
  const [periodData, setPeriodData] = useState([]);
  const [showRefresh, setShowRefresh] = useState(false);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    if (formDetails.fromDate !== "" && formDetails.toDate !== "") {
      setShowRefresh(true);
    }
  }, [formDetails]);
  useEffect(() => {
    getPeriodDetails();
  }, []);
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setFormDetails({ ...formDetails, [name]: value });
  };
  const handleOnChange = (e) => {
    e.preventDefault();
    let name = e.target.name;
    let value = e.target.value;
    if (value > -1) {
      let newDetails = { selectedPeriod: "", fromDate: "", toDate: "" };
      let periodSelectedData = periodData.filter(
        (itm) => itm.periodid == value
      );
      newDetails.selectedPeriod = value;
      newDetails.fromDate = dateFormat(periodSelectedData[0].fromdate);
      newDetails.toDate = dateFormat(periodSelectedData[0].todate);
      setFormDetails({ ...newDetails });
      if (value < 10) {
        const payload = {
          TransactionType: "Purchase",
          FromDate: newDetails.fromDate,
          ToDate: newDetails.toDate,
        };
        saveApi(payload);
      }
    }
  };

  const handleSubmit = async (args) => {
    const payload = {
      TransactionType: "Purchase",
      FromDate: formDetails.fromDate,
      ToDate: formDetails.toDate,
    };
    saveApi(payload);
  };
  const saveApi = async (args) => {
    setLoading(true);
    try {
      const res = await axios_.post("DownloadPurchase", args);

      if (res?.status === 200) {
        let response = res;

        if (
          Array.isArray(response.data.TRANSACTIONS) &&
          response.data.TRANSACTIONS.length > 0
        ) {
          response.data.TRANSACTIONS.map((val) => {
            if (val.ALLLEDGERENTRIES.length > 0) {
              val.ALLLEDGERENTRIES.map((itm) => {
                if (itm.ISDEEMEDPOSITIVE) {
                  itm.title = `(${itm.LEDGERNAME}) ${itm.AMOUNT} (DR)`;
                } else {
                  itm.title = `(${itm.LEDGERNAME}) ${itm.AMOUNT} (CR)`;
                }
              });
            }
          });
          setParentGridData(response.data.TRANSACTIONS);
        }
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const onLoad = (args) => {
    if (args.data.hasOwnProperty("ALLLEDGERENTRIES")) {
      let primarhyKeyField =
        childGridInstance.current.getPrimaryKeyFieldNames()[0];
      let primarhyKeyValue = args.data[primarhyKeyField];
      let matchedData = new DataManager(parentGridData).executeLocal(
        new Query().where(primarhyKeyField, "equal", primarhyKeyValue)
      );

      args.childGrid.query = new Query();
      args.childGrid.dataSource = matchedData[0].ALLLEDGERENTRIES;
      args.childGrid.childGrid = GrandChildGridOptions;
    } else if (args.data.hasOwnProperty("ALLINVENTORYENTRIES")) {
      args.childGrid.query = new Query();
      args.childGrid.dataSource = args.data.ALLINVENTORYENTRIES;
    }
  };
  const childGridColumns = [
    {
      field: "title",
      headerText: "Ledger Name",
      textAlign: "left",
      width: 150,
    },
    {
      field: "LEDGERGUID",
      headerText: "LEDGERGUID",
      isPrimaryKey: true,
      width: 150,
      visible: false,
    },
    {
      field: "ISPARTYLEDGER",
      headerText: "ISPARTYLEDGER",
      width: 150,
      visible: false,
    },
    { field: "AMOUNT", headerText: "Amount", width: 150, visible: false },
  ];
  const childGrandChildGridColumns = [
    {
      field: "STOCKITEMNAME",
      headerText: "Stock Item Name",
      textAlign: "left",
      width: 150,
    },
    {
      field: "STOCKGUID",
      headerText: "Stock Guid",
      width: 150,
      visible: false,
    },
    {
      field: "BILLEDQTY",
      headerText: "Billed Quantity",
      width: 150,
      visible: true,
    },
    {
      field: "ACTUALQTY",
      headerText: "Actual Quantity",
      width: 150,
      visible: true,
    },
    {
      field: "RATE",
      headerText: "Rate",
      width: 150,
      visible: true,
    },
    {
      field: "DISCOUNT",
      headerText: "Discount",
      width: 150,
      visible: true,
    },
    { field: "AMOUNT", headerText: "Amount", width: 150 },
  ];
  const orderChildGridOptions = {
    columns: childGridColumns,
    childGrid: "jdbfvh",
    detailDataBound: onLoad,
  };

  const GrandChildGridOptions = {
    columns: childGrandChildGridColumns,
  };

  const getPeriodDetails = async () => {
    setLoading(true);
    const payload = { periodname: "periodname" };
    try {
      const res = await axios_.post("/Master/GetPeriod", payload);

      if (res?.status === 200) {
        setPeriodData(res.data.Data);
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={"form_form__purchaseTransaction"}>
        <InputRow key={"purchaseTransactionInputRow"} align="left" col={1}>
          <div className="selectContainerCss">
            <span
              className={"purchaseTransactionLabel"}
              key={`span_purchaseTransactionLabel`}
            >
              {"Period"}
            </span>
            <select
              className="select_period_purchaseTransactionCss"
              value={formDetails.selectedPeriod}
              onChange={handleOnChange}
            >
              <option
                key={`default_period_purchaseTransactionCss`}
                value={-1}
                styles={{ "text-align": "center" }}
              >
                --{"Select Period"}--
              </option>
              {periodData?.length > 0 &&
                periodData.map((val, index) => (
                  <option key={index} value={val.periodid}>
                    {val.periodname}
                  </option>
                ))}
            </select>
          </div>
          <Input
            key={`date_from_date_purchaseTransaction`}
            type={"date"}
            label={"From Date"}
            name={"fromDate"}
            enabled={formDetails.selectedPeriod == 10 ? true : false}
            value={formDetails.fromDate}
            onChange={handleChange}
          />
          <Input
            key={`date_to_date_purchaseTransaction`}
            type={"date"}
            label={"Date To"}
            name={"toDate"}
            enabled={formDetails.selectedPeriod == 10 ? true : false}
            value={formDetails.toDate}
            onChange={handleChange}
          />
          {isLoading ? null : (
            <Button
              visible={formDetails.selectedPeriod == 10 ? showRefresh : false}
              name={"submit"}
              key={"form_trabsaction"}
              btnText={"Refresh"}
              btnType={"button"}
              // align={control.align}
              onClick={handleSubmit}
            />
          )}
        </InputRow>
        {isLoading ? (
          <React.Fragment>Loading...</React.Fragment>
        ) : (
          <GridComponent
            locale="en-Us"
            id="Wgt_DelearUiGrid_id"
            key="Wgt_DelearUiGrid_id"
            allowTextWrap={true}
            allowResizing={false}
            dataSource={parentGridData}
            height={"400px"}
            ref={childGridInstance}
            allowPaging={true}
            allowSelection={true}
            gridLines="Both"
            rowHeight={25}
            pageSettings={{ pageSize: 15, pageCount: 10 }}
            allowFiltering={true}
            filterSettings={{ type: "Excel" }}
            allowExcelExport={true}
            allowSorting={true}
            childGrid={orderChildGridOptions}
            detailDataBound={onLoad}
          >
            <ColumnsDirective>
              <ColumnDirective
                field="GUID"
                haederText="GUID"
                visible={false}
                isPrimaryKey={true}
              />
              <ColumnDirective
                field="VCHTYPE"
                headerText="Voucher Type"
                width="150"
                textAlign="left"
                allowEditing={false}
              />
              <ColumnDirective
                field="VOUCHERNUMBER"
                headerText="Voucher Number"
                width="150"
                textAlign="left"
                allowEditing={false}
              />
              <ColumnDirective
                field="DATE"
                headerText="DATE"
                width="150"
                textAlign="left"
                allowEditing={false}
              />
              <ColumnDirective
                field="PARTYLEDGERNAME"
                headerText="Ledger Name"
                width="150"
                textAlign="left"
                allowEditing={false}
              />
              <ColumnDirective
                field="EFFECTIVEDATE"
                headerText="Effective Date"
                width="150"
                textAlign="left"
                allowEditing={false}
              />
              <ColumnDirective
                field="MASTERID"
                headerText="Master ID"
                width="150"
                textAlign="left"
                allowEditing={false}
                visible={false}
              />
              <ColumnDirective
                field="ALTERID"
                headerText="Alter ID"
                width="150"
                textAlign="left"
                allowEditing={false}
                visible={false}
              />
              <ColumnDirective
                field="REFERENCE"
                headerText="Refrence"
                width="150"
                textAlign="left"
                allowEditing={false}
              />
              <ColumnDirective
                field="REFERENCEDATE"
                headerText="Refrence Date"
                width="150"
                textAlign="left"
                allowEditing={false}
              />

              <ColumnDirective
                field="NARRATION"
                headerText="Narration"
                width="150"
                textAlign="left"
                allowEditing={false}
                visible={false}
              />
            </ColumnsDirective>
            <Inject
              services={[
                DetailRow,
                CommandColumn,
                Freeze,
                Page,
                Filter,
                Toolbar,
                ExcelExport,
                Sort,
                ForeignKey,
              ]}
            />
          </GridComponent>
        )}
      </div>
    </>
  );
};

export default PurchaseTransaction;
