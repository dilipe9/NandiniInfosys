import { regex_alphaNumericOnly, numberAndDecimalOnly, numberOnly, regex_alphaNumericOnlyNoSpace, regex_email } from './Constants'

export const alphaNumeicWithSomeSpecialChar = (event) => {
    let regex = new RegExp(regex_alphaNumericOnly);
    let key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (event.keyCode == 8 || event.keyCode == 46 || event.key == "," || event.key == "." || event.key == "/" || event.key == "-" || event.key == "(" || event.key == ")" || event.key == "_" || event.key == "[" || event.key == "]" || event.key == "\\") {
        return true;
    }
    else if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
};

export const alphaNumeicCharWithSomeSpecialCharAllow = (event) => {
    let regex = new RegExp(regex_alphaNumericOnly);
    let key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (event.keyCode == 8 || event.key == "/" || event.key == "-" || event.key == "(" || event.key == ")" || event.key == "_" || event.key == "[" || event.key == "]" || event.key == "\\") {
        return true;
    }
    else if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
}

export const onlyAlphaNumericWithoutSpaceAllowed = (event) => {
    let regex = new RegExp(regex_alphaNumericOnlyNoSpace);
    let key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (regex.test(key)) {
        return true;
    }
    else {
        event.preventDefault();
        return false;
    }
};

export const onlyDecimalAllowed = (event) => {
    let regex = new RegExp(numberAndDecimalOnly);
    let key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (regex.test(key)) {
        return true;
    }
    else {
        event.preventDefault();
        return false;
    }
};

export const onlyNumberAllowed = (event) => {
    let regex = new RegExp(numberOnly);
    let key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (regex.test(key)) {
        return true;
    }
    else {
        event.preventDefault();
        return false;
    }
};

export function getFinancialYearByDate(input_date) {
    let financial_year = "";
    let supplied_date = new Date(input_date);
    if ((supplied_date.getMonth() + 1) <= 3) {
        financial_year = (supplied_date.getFullYear() - 1) + "-" + supplied_date.getFullYear()
    } else {
        financial_year = supplied_date.getFullYear() + "-" + (supplied_date.getFullYear() + 1)
    }
    return financial_year;
}

export function getQuarterByDate(input_date) {
    let month = input_date.getMonth();

    return (((Math.ceil((month + 1) / 3)) - 1) > 0) ? ((Math.ceil((month + 1) / 3)) - 1) : 4;
}

export function getQuarterStartEndDate(FY, Qr) {

    let startYear = parseInt(FY);
    let endYear = parseInt(FY) + 1;
    let QrStartDate = '';
    let QrEndDate = '';

    switch (Qr) {
        case 'Q1':
            QrStartDate = '01-Apr-' + startYear;
            QrEndDate = '30-Jun-' + startYear;
            break;

        case 'Q2':
            QrStartDate = '01-Jul-' + startYear;
            QrEndDate = '30-Sep-' + startYear;
            break;

        case 'Q3':
            QrStartDate = '01-Oct-' + startYear;
            QrEndDate = '31-Dec-' + startYear;
            break;

        case 'Q4':
            QrStartDate = '01-Jan-' + endYear;
            QrEndDate = '31-Mar-' + endYear;
            break;

        default:
            break;
    }

    return { startDate: QrStartDate, endDate: QrEndDate };

}

export function addLeadingZero(input_num, desired_size) {
    input_num = input_num.toString();
    while (input_num.length < desired_size) input_num = "0" + input_num;
    return input_num;
}

export function multiLingualString(string) {
    let MltLngData = JSON.parse(localStorage.getItem("MltLngData"));
    if ((MltLngData === null) || (MltLngData === undefined)) {
        return string;
    } else {
        return MltLngData.hasOwnProperty(string) ? MltLngData[string] : string;
    }
    //let key = string.replaceAll(" ", "");
}

export function numberWithThousandSeparator(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

export function formatDateForReport(dateString) {
    return (dateString instanceof Date) ? dateString.toLocaleString('en-in', { day: '2-digit' }) + '.' + dateString.toLocaleString('en-in', { month: 'short' }) + '.' + dateString.toLocaleString('en-in', { year: 'numeric' }) : null;
}

export function formatDateToShow(dateString) {
    return (dateString instanceof Date) ? dateString.toLocaleString('en-in', { day: '2-digit' }) + '-' + dateString.toLocaleString('en-in', { month: 'short' }) + '-' + dateString.toLocaleString('en-in', { year: 'numeric' }) : null;
}

export function formatDateForApiCall(dateString) {
    return (dateString instanceof Date) ? dateString.toLocaleString('en-in', { year: 'numeric' }) + '-' + dateString.toLocaleString('en-in', { month: '2-digit' }) + '-' + dateString.toLocaleString('en-in', { day: '2-digit' }) : null;
}

export function numberValueFromCommaFormatString(x) {
    return parseFloat(x.replaceAll(',', ''));
}

export function numberToWord(x) {
    let a = ['', 'One ', 'Two ', 'Three ', 'Four ', 'Five ', 'Six ', 'Seven ', 'Eight ', 'Nine ', 'Ten ', 'Eleven ', 'Twelve ', 'Thirteen ', 'Fourteen ', 'Fifteen ', 'Sixteen ', 'Seventeen ', 'Eighteen ', 'Nineteen '];
    let b = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    if ((x = x.toString()).length > 9)
        return x;
    let n = ('000000000' + x).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n)
        return;
    let str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'Crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'Lakh ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'Thousand ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'Hundred ' : '';
    str += (n[5] != 0) ? (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) : '';
    return str;
}

export function floatToWord(x) {
    let nums = x.toString().split('.');
    let str = '';
    str = (nums[1] > 0) ? numberToWord(nums[0]) + ' and ' + numberToWord(nums[1]) : numberToWord(nums[0]);
    return str;
}

export async function getIpData() {
    let ipDetails =
        await fetch('https://geolocation-db.com/json/')
            .then((response) => response.json())
            .then((result) => {
                return result;
            })
            .catch((err) => console.log(err));
    return ipDetails;
}

export function isEmailValid(str) {
    if (str.match(regex_email)) {
        return true;
    } else {
        return false;
    }
}