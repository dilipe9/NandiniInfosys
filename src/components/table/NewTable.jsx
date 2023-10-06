import React, { useEffect, useState } from "react";
import {
  GridComponent,
  Inject,
  ColumnDirective,
  ColumnsDirective,
  Edit,
  CommandColumn,
  Freeze,
  Page,
  Filter,
  Toolbar,
  ExcelExport,
  Resize,
} from "@syncfusion/ej2-react-grids";
import {
  setSpinner,
  createSpinner,
  showSpinner,
} from "@syncfusion/ej2-react-popups";

const NewTable = ({ tableData }) => {
  const [newData, setNewData] = useState([]);
  const [headerText, setHeaderText] = useState([]);

  useEffect(() => {
    if (tableData?.length) {
      let data = [];

      for (let i = 1; i < tableData.length; i++) {
        let object = {};

        for (let j = 0; j < tableData[i].length; j++) {
          object[tableData[0][j]] = tableData[i][j];
        }
        data.push(object);
      }

      setNewData(data);
      const headerTitle = Object.values(tableData[0]);
      setHeaderText(headerTitle);
    }
  }, [tableData]);

  let grid;
  const dataBound = () => {
    if (grid) {
      grid.autoFitColumns(["SNo"]);
    }
  };

  let spinnerTarget = document.querySelector("#customSpinner");
  createSpinner({ target: spinnerTarget, width: "20px" });
  showSpinner(spinnerTarget);

  return (
    <>
      {!newData.length ? (
        <div id="customSpinner" style={{ height: "60vh" }} />
      ) : (
        <GridComponent
          autoFitColumns={true}
          locale="en-Us"
          id="Wgt_DelearUiGrid_id"
          key="Wgt_DelearUiGrid_id"
          allowTextWrap={true}
          allowResizing={true}
          dataSource={newData}
          toolbar={toolbar}
          enableStickyHeader={true}
          height={"300px"}
          allowPaging={true}
          allowSelection={true}
          gridLines="Both"
          editSettings={{
            allowEditing: true,
            mode: "Batch",
            persistSelection: true,
            showConfirmDialog: false,
          }}
          dataBound={dataBound}
          rowHeight={60}
          pageSettings={{ pageSize: 20 }}
          allowFiltering={true}
          filterSettings={{ type: "Excel" }}
          allowExcelExport={true}
          allowSorting={true}
          loadingIndicator={{ indicatorType: "Spinner" }}
          enableHeaderFocus
          autoFit={true}
        >
          <Inject
            services={[
              Edit,
              CommandColumn,
              Freeze,
              Page,
              Filter,
              Toolbar,
              ExcelExport,
              Resize,
            ]}
          />

          <ColumnsDirective>
            {headerText.length &&
              headerText.map((item, index) => {
                return (
                  <ColumnDirective
                    field={item}
                    headerText={item}
                    textAlign="center"
                    width="200"
                  />
                );
              })}
          </ColumnsDirective>
        </GridComponent>
      )}
    </>
  );
};

export default NewTable;
