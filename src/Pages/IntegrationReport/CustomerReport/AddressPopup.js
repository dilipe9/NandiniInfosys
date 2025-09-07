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

export const AddressPopup = ({
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
          <div style={modalTitleContainerStyle}>{`Customer :${
            customerDetails.customerDetail?.CustomerCode || ""
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
                    field="CustomerCode"
                    headerText="Customer Code"
                    isPrimaryKey={true}
                    width="180"
                    textAlign="left"
                    allowEditing={false}
                  />

                  <ColumnDirective
                    field="Country"
                    headerText="Country"
                    width="150"
                    textAlign="left"
                    allowEditing={false}
                  />
                  <ColumnDirective
                    field="State"
                    headerText="State"
                    width="130"
                    textAlign="left"
                    allowEditing={false}
                  />
                  <ColumnDirective
                    field="City"
                    headerText="City"
                    width="120"
                    textAlign="left"
                    allowEditing={false}
                  />
                  <ColumnDirective
                    field="Street"
                    headerText="Street"
                    width="150"
                    textAlign="left"
                    allowEditing={false}
                    allowFiltering={false}
                  />
                  <ColumnDirective
                    field="PinCode"
                    headerText="PinCode"
                    width="130"
                    textAlign="left"
                    allowEditing={false}
                  />
                  {/* <ColumnDirective
                    field="GSTINApplicableDate"
                    headerText="GSTIN Applicable Date"
                    width="220"
                    textAlign="left"
                    allowEditing={false}
                  /> */}
                  {/* <ColumnDirective
                    field="GSTRegistrationType"
                    headerText="GST Registration Type"
                    width="200"
                    textAlign="left"
                    allowEditing={false}
                  /> */}
                  {/* <ColumnDirective
                    field="CustomerGSTIN"
                    headerText="Customer GSTIN"
                    width="180"
                    textAlign="left"
                    allowEditing={false}
                    visible={false}
                  /> */}
                  <ColumnDirective
                    field="ExternalID"
                    headerText="External ID"
                    width="170"
                    textAlign="left"
                    allowEditing={false}
                  />
                  <ColumnDirective
                    field="CPCode"
                    headerText="CP Code"
                    width="170"
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
//   "CustomerCode": "898981_10RMPLW1081Z3Z9",
//   "Street": "Test123",
//   "City": "Test123",
//   "State": "Chhattisgarh",
//   "Country": "India",
//   "PinCode": "400910",
//   "ExternalID": "",
//   "CPCode": "",
//   "createdon": "2025-03-03T15:06:38.61",
//   "updatedon": "2025-03-03T15:06:38.61"
// }
