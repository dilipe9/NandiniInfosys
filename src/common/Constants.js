// export const serverAPI = 'https://scheme.mayanksoftwares.com/';
export const serverAPI = 'https://scheme.mayanksoftwares.co/';
export const gridPageDefaultLength = 15;
export const popupGridDefaultPageLength = 25;
export const schemeSubGridPageLength = 10;
export const ToolbarOptions = [
    //"Search",
    "ExcelExport",
    // "PdfExport",
    //"CsvExport",
    //"ColumnChooser",
];
export const fieldRegex = /[^a-zA-Z0-9~`!@#$%^&*()_+-={\[\}\]\|\\:;"'<,>\.\?\/ ]/g;
export const fieldRegex_numberonly = /[^0-9\.]/g;
export const numberAndDecimalOnly = "^[0-9.]+$";
export const numberOnly = "^[0-9]+$";
export const singlequoteRegex = /'/g;
export const regex_alphaNumericOnly = "^[a-zA-Z0-9 ]+$";
export const regex_alphaNumericOnlyNoSpace = "^[a-zA-Z0-9]+$";
export const regex_NumberUpto4Decimal = /^(?:\d*\.\d{1,4}|\d+)$/;
export const regex_Item_Code_Name = /^[ A-Za-z0-9_,./\\()[\]-]*$/;
export const regex_NumberUpto2Decimal = /^(?:\d*\.\d{0,2}|\d+)$/;
export const regex_email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;