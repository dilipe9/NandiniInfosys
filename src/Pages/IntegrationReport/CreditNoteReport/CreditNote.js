import React from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
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
  ColumnChooser,
  Group,
} from "@syncfusion/ej2-react-grids";
import { DetailRow, Inject } from "@syncfusion/ej2-react-grids";
import { Col, Row } from "reactstrap";

export const CreditNoteDetailPopup = ({
  customerDetails,
  isOpen,
  toggle,
  addressList,
  handleRowBound,
}) => {
  const modalTitleContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    // background: "#00325c",
    padding: "5px 5px",
    borderRadius: "2px",
    border: "1px solid #000",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    color: "#00325c",
    fontFamily: "Made Tommy, sans-serif",
    fontSize: "15px",
    fontWeight: "500",
    letterSpacing: "0.5px",
    textTransform: "uppercase",
    margin: 0,
  };

  return (
    <>
      <Modal isOpen={isOpen} size="xl">
        <ModalHeader toggle={toggle}>
          <div style={modalTitleContainerStyle}>{`Document No :${
            customerDetails.customerDetail?.DocumentNo || ""
          }`}</div>
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col>
              <GridComponent
                locale="en-Us"
                id="customerIntegratioReport"
                key="customerIntegratioReport"
                allowTextWrap={true}
                allowResizing={false}
                dataSource={addressList}
                height={"Auto"}
                // ref={instance}
                allowPaging={true}
                allowSelection={true}
                gridLines="Both"
                rowHeight={25}
                allowFiltering={true}
                filterSettings={{ type: "Excel" }}
                allowExcelExport={true}
                allowSorting={true}
                showColumnChooser={true}
                // allowGrouping={true}
                toolbar={["Search"]}
                pageSettings={{
                  pageSizes: [10, 20, 30, 40, 50, 60, "All"],
                  pageCount: 15,
                }}
                // toolbarClick={handleToolbarClick}
                rowDataBound={handleRowBound}
                // commandClick={viewCustomerDetail}
              >
                <ColumnsDirective>
                  <ColumnDirective
                    field="serialNo"
                    headerText="S No"
                    allowEditing={false}
                    width="90"
                    allowFiltering={false}
                    // freeze="Left"
                  />
                  {/* <ColumnDirective
                    field="DocumentNo"
                    headerText="Document No"
                    width="200"
                    textAlign="left"
                    allowEditing={false}
                  /> */}
                  <ColumnDirective
                    field="ItemName"
                    headerText="Item Name"
                    width="200"
                    textAlign="left"
                    allowEditing={false}
                  />
                  <ColumnDirective
                    field="Qty"
                    headerText="Quantity"
                    width="200"
                    textAlign="left"
                    allowEditing={false}
                  />
                  <ColumnDirective
                    field="Rate"
                    headerText="Rate"
                    width="200"
                    textAlign="left"
                    allowEditing={false}
                  />
                  <ColumnDirective
                    field="Value"
                    headerText="Value"
                    width="200"
                    textAlign="left"
                    allowEditing={false}
                  />
                  <ColumnDirective
                    field="BillNo"
                    headerText="Bill No"
                    width="200"
                    textAlign="left"
                    allowEditing={false}
                  />
                  <ColumnDirective
                    field="BillDate"
                    headerText="Bill Date"
                    width="200"
                    textAlign="left"
                    allowEditing={false}
                  />
                  <ColumnDirective
                    field="SalesReturn"
                    headerText="Sales Return"
                    width="200"
                    textAlign="left"
                    allowEditing={false}
                  />
                  <ColumnDirective
                    field="ExternalId"
                    headerText="External Id"
                    width="180"
                    textAlign="left"
                    allowEditing={false}
                  />
                  <ColumnDirective
                    field="createdon"
                    headerText="Created On"
                    width="200"
                    textAlign="left"
                    allowEditing={false}
                  />
                  <ColumnDirective
                    field="updatedon"
                    headerText="Updated On"
                    width="200"
                    textAlign="left"
                    allowEditing={false}
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
                    ColumnChooser,
                    Group,
                  ]}
                />
              </GridComponent>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </>
  );
};

// {
//   "ExternalId": "SLI-0037",
//   "ItemName": "OTCESP001",
//   "Qty": 5,
//   "Rate": 44352.00,
//   "Value": 221760.00,
//   "BillNo": "SI-0000000289",
//   "BillDate": "2024-12-03T00:00:00",
//   "SalesReturn": "SRN-0033",
//   "createdon": "2025-03-05T11:23:50.857",
//   "updatedon": "2025-03-05T11:23:50.857"
// }
