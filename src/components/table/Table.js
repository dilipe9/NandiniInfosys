import { useEffect, useState, useRef } from "react";

import styles from "./style/table.module.css";
import {
  axios_,
  convertToCSV,
  jsonToArray,
  shufflTableColums,
  sortTable,
} from "../../utilities/utll";

import { IoIosMenu, IoMdDownload, IoMdRefresh } from "react-icons/io";

import { AiFillEdit, AiOutlineSortDescending } from "react-icons/ai";
import { AiOutlineSortAscending } from "react-icons/ai";
import { useContext } from "react";
import { Context } from "../../store/store";
import { fieldsMap } from "../../constant/fieldsMap";
import { BsCloudDownloadFill } from "react-icons/bs";
import Pagination from "../pagination/Pagination";
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
  Reorder,
  valueAccessor,
  Group,
  ColumnChooser,
} from "@syncfusion/ej2-react-grids";
import { DetailRow, Inject } from "@syncfusion/ej2-react-grids";

export default function Table({
  name = "",
  visibleFieldList = [],
  fetch = {},
  menuVisible = true,
  showEdit = false,
  onEdit = () => {},
}) {
  let gridInstance = useRef();
  const { updateTableData, tbldata, setTableRefresh } = useContext(Context);
  const [tableHeaders, SetTableHeders] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [colOrder, setColOrder] = useState([]);
  const [loading, setLoading] = useState(false);

  // Paginnation
  const [toShow, setToShow] = useState(25);
  const [currengPage, setCurrentPage] = useState(1);

  let dragStartCol;
  let dragEndCol;

  useEffect(() => {
    fetchTableData();
    setTableRefresh((prev) => {
      let obj = { ...prev };
      obj[name] = refreshTable;
      return obj;
    });
  }, [name, fetch.data]);

  function filterTable(e) {
    try {
      let val = e.target.value;
      let filtered = tbldata[name];
      if (!val) {
        return setTableData(filtered);
      }

      filtered = filtered.filter((item, index) => {
        return (
          item.join().toLowerCase().includes(val.toLowerCase()) || index == 0
        );
      });

      setTableData(filtered);
    } catch (e) {
      // console.log(e);
    }
  }

  function EditButton({ record }) {
    return (
      <div className={styles.editButton}>
        <AiFillEdit
          onClick={() => {
            onEdit(record);
          }}
          fill="#16619f"
        />
      </div>
    );
  }
  function onPageChange(numberOfRecords, currenPageNumber) {
    let pageData =
      tbldata[name]?.data &&
      tbldata[name]?.data.length > 0 &&
      tbldata[name]?.data.filter((_, index) => {
        return (
          index == 0 ||
          (index > (currenPageNumber - 1) * numberOfRecords &&
            index <= currenPageNumber * numberOfRecords)
        );
      });

    setTableData(pageData);
  }

  function displayPageRow(data) {
    return data.filter((row, index) => index <= toShow);
  }
  function refreshTable() {
    fetchTableData();
  }
  function updateTableDataState(data) {
    let pageRows = displayPageRow(data);
    setTableData(pageRows);
    updateTableData(name, data);
  }

  async function fetchTableData() {
    try {
      if (fetch?.api) {
        let res;
        if (fetch.type === "post") {
          setLoading(true);
          res = await axios_.post(fetch.api, fetch.data);
        } else {
          res = await axios_.get(fetch.api);
        }
        if (res.status == 200) {
          let data = res.data.Data;

          if (data && data?.length > 0) {
            let tableHeaders = fieldsMap[name];
            SetTableHeders(tableHeaders);
            // data = jsonToArray(data, fieldsMap, name, EditButton, showEdit);

            // let obj = data[0].map((item, index) => index);
            // setColOrder(obj);
            // updateTableDataState(data);
            data.map((val, index) => {
              val.srlno = index + 1;
            });
            setTableData(data);
          } else {
            updateTableDataState([]);
          }
        }
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
    }
  }

  function onPageChange(numberOfRecords, currenPageNumber) {
    let pageData =
      tbldata[name] &&
      tbldata[name].length > 0 &&
      tbldata[name].filter((_, index) => {
        return (
          index == 0 ||
          (index > (currenPageNumber - 1) * numberOfRecords &&
            index <= currenPageNumber * numberOfRecords)
        );
      });

    setTableData(pageData);
  }

  function displayPageRow(data) {
    return data.filter((row, index) => index <= toShow);
  }

  function shuffleColumns(from, to) {
    if (from === to) return;
    let shuffled = [];
    colOrder.forEach((item, index) => {
      if (item === to) {
        shuffled.push(from);
        shuffled.push(to);
      } else if (!(item === from)) {
        shuffled.push(index);
      }
    });
    let obj = shufflTableColums(tableData, shuffled);

    updateTableDataState(obj);
  }
  function sort(order, index) {
    let sortedData = sortTable(tableData, order, index);
    updateTableDataState(sortedData);
  }

  function ContextMenu({ index }) {
    const [showMenu, setShowMenu] = useState(false);
    return (
      <div className={styles.menu}>
        <IoIosMenu />
        {showMenu && (
          <ul className={styles.menuList}>
            <li onClick={sort.bind(this, "asc", index)} key={`menu_1`}>
              <AiOutlineSortAscending />
              Ascending
            </li>
            <li onClick={sort.bind(this, "desc", index)} key={`menu_2`}>
              <AiOutlineSortDescending />
              Descending
            </li>
          </ul>
        )}
      </div>
    );
  }

  function dragStart(e, index) {
    dragStartCol = index;
  }

  function dragEnd(e, index) {
    e.preventDefault();
    shuffleColumns(dragStartCol, dragEndCol);
  }
  const commmandTemplate = [
    {
      type: "Edit",
      buttonOption: { cssClass: "e-flat", iconCss: "e-edit e-icons" },
    },
  ];
  const toolbar = ["Search", "ColumnChooser", "ExcelExport", "CSV Export"];
  const handleCSVImport = (args) => {
    console.log(args.item.text);
    if (args.item.text === "Excel Export") {
      const excelExportProperties = {
        fileName: `${name}.xlsx`,
      };
      gridInstance.current.excelExport(excelExportProperties);
    } else if (args.item.text === "CSV Export") {
      const excelExportProperties = {
        fileName: `${name}.csv`,
      };

      gridInstance.current.csvExport(excelExportProperties);
    }
  };

  function findIndexByObjectMatch(masterArray, searchObject) {
    for (let i = 0; i < masterArray.length; i++) {
      const currentObject = masterArray[i];

      if (isObjectMatch(currentObject, searchObject)) {
        return i;
      }
    }

    return -1; // Return -1 if no match is found
  }
  function isObjectMatch(obj1, obj2) {
    if (typeof obj1 !== "object" || typeof obj2 !== "object") {
      return false;
    }

    for (const key in obj2) {
      if (obj2.hasOwnProperty(key)) {
        if (!obj1.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
          return false;
        }
      }
    }

    return true;
  }
  const prepareEditData = (args) => {
    // let newData = [args.rowIndex, args.rowData];
    const index = findIndexByObjectMatch(tableData, args.rowData);
    let newData = [index, args.rowData];
    onEdit(newData);
  };

  // const serialNumberTempalte = (args) => {
  //   let serialNo = args.index + 1;
  //   return serialNo;
  // };

  return (
    <div className={styles.gridContainer}>
      {menuVisible && (
        <div className={styles.mainMenu}>
          <IoMdRefresh
            className={`${styles.refreshButton} ${
              loading ? styles.animateRefreshButton : ""
            }`}
            onClick={fetchTableData}
          />
          {/* <input
            className={styles.searchBox}
            placeholder="Search"
            onChange={filterTable}
          /> */}

          <span
            className={styles.downloadButton}
            onClick={handleCSVImport}
            // onClick={() => convertToCSV(tbldata[name], name)}
          >
            <BsCloudDownloadFill />
          </span>
          {/* {tbldata[name] && tbldata[name].length > 0 && (
            <Pagination onChange={onPageChange} name={name} />
          )} */}
        </div>
      )}
      <div className={styles.tableContainer}>
        {tableData && tableData.length > 0 ? (
          <GridComponent
            locale="en-Us"
            id={`${name}_GridComponent_Id`}
            key={`${name}_GridComponent_Id`}
            allowTextWrap={true}
            allowResizing={false}
            dataSource={tableData}
            ref={gridInstance}
            height={"400px"}
            // width={"100%"}
            allowPaging={true}
            allowSelection={true}
            gridLines="Both"
            rowHeight={25}
            pageSettings={{ pageSize: 15, pageCount: 10 }}
            allowFiltering={true}
            filterSettings={{ type: "Excel" }}
            allowExcelExport={true}
            allowSorting={true}
            commandClick={(args) => prepareEditData(args)}
            toolbar={toolbar}
            allowReordering={true}
            allowGrouping={true}
            showColumnChooser={true}
            toolbarClick={handleCSVImport}
          >
            <ColumnsDirective>
              <ColumnDirective
                headerText="Edit"
                commands={commmandTemplate}
                visible={showEdit ? true : false}
                width={"100"}
                textAlign="center"
              />
              <ColumnDirective
                headerText="S No."
                width="130"
                field="srlno"
                textAlign="Left"
              />

              {tableHeaders.length > 0 &&
                tableHeaders.map((val) => {
                  return (
                    <ColumnDirective
                      field={val.field}
                      headerText={val.headerText}
                      width={val.width}
                      visible={val.visible ? val.visible : false}
                      textAlign="Left"
                      type="string"
                    />
                  );
                })}
            </ColumnsDirective>
            <Inject
              services={[
                CommandColumn,
                Freeze,
                Page,
                Filter,
                Toolbar,
                ExcelExport,
                Sort,
                ForeignKey,
                Reorder,
                Group,
                ColumnChooser,
              ]}
            />
          </GridComponent>
        ) : (
          !loading && <div className={styles.noData}>No data available</div>
        )}
      </div>
    </div>
  );
}
