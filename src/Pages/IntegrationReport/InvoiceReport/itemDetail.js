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

export const ItemDetailReportPopup = ({
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
          <div style={modalTitleContainerStyle}>{`Invoice No :${
            customerDetails.customerDetail?.InvoiceNo || ""
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
                  <ColumnDirective
                    field="InvoiceNo"
                    headerText="Invoice No"
                    width="200"
                    textAlign="left"
                    allowEditing={false}
                  />
                  <ColumnDirective
                    field="MaterialCode"
                    headerText="Material Code"
                    width="200"
                    textAlign="left"
                    allowEditing={false}
                  />
                  <ColumnDirective
                    field="SellingPrice"
                    headerText="Selling Price"
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
                    field="TotalPrice"
                    headerText="Total Price"
                    width="200"
                    textAlign="left"
                    allowEditing={false}
                  />
                  <ColumnDirective
                    field="Discount"
                    headerText="Discount"
                    width="200"
                    textAlign="left"
                    allowEditing={false}
                  />
                  <ColumnDirective
                    field="ExternalId"
                    headerText="External ID"
                    width="200"
                    textAlign="left"
                    allowEditing={false}
                  />
                  <ColumnDirective
                    field="TaxAmount"
                    headerText="Tax Amount"
                    width="200"
                    textAlign="left"
                    allowEditing={false}
                  />
                  <ColumnDirective
                    field="TotalAmount"
                    headerText="Total Amount"
                    width="200"
                    textAlign="left"
                    allowEditing={false}
                  />
                  <ColumnDirective
                    field="LineItemNo"
                    headerText="Line Item No"
                    width="200"
                    textAlign="left"
                    allowEditing={false}
                  />
                  <ColumnDirective
                    field="Warehouse"
                    headerText="Warehouse"
                    width="200"
                    textAlign="left"
                    allowEditing={false}
                  />
                  <ColumnDirective
                    field="IGSTPercent"
                    headerText="IGST Percent"
                    width="200"
                    textAlign="left"
                    allowEditing={false}
                  />
                  <ColumnDirective
                    field="SGSTPercent"
                    headerText="SGST Percent"
                    width="200"
                    textAlign="left"
                    allowEditing={false}
                  />
                  <ColumnDirective
                    field="CGSTPercent"
                    headerText="CGST Percent"
                    width="200"
                    textAlign="left"
                    allowEditing={false}
                  />
                  <ColumnDirective
                    field="IGSTAmount"
                    headerText="IGST Amount"
                    width="200"
                    textAlign="left"
                    allowEditing={false}
                  />
                  <ColumnDirective
                    field="SGSTAmount"
                    headerText="SGST Amount"
                    width="200"
                    textAlign="left"
                    allowEditing={false}
                  />
                  <ColumnDirective
                    field="CGSTAmount"
                    headerText="CGST Amount"
                    width="200"
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
//   "InvoiceNo": "SI-0000000288",
//   "MaterialCode": "CM90517OOHO",
//   "SellingPrice": 5879.81,
//   "Qty": 1,
//   "TotalPrice": 46.40,
//   "Discount": 1.00,
//   "ExternalId": "SecINVLI - 0000000356",
//   "TaxAmount": 1286.21,
//   "TotalAmount": 5879.81,
//   "LineItemNo": "SecINVLI - 0000000356",
//   "Warehouse": "1003547WH1",
//   "IGSTPercent": 0.00,
//   "SGSTPercent": 0.00,
//   "CGSTPercent": 0.00,
//   "IGSTAmount": 0.00,
//   "SGSTAmount": 643.10,
//   "CGSTAmount": 643.10,
//   "createdon": "2025-03-05T11:36:17.137",
//   "updatedon": "2025-03-05T11:36:17.15"
// }
