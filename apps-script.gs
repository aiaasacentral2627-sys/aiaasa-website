// AIAASA Member Registration — paste this into Extensions > Apps Script
// Deploy as a Web App, then paste the /exec URL into index.html's SHEET_ENDPOINT.

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["First Name", "Surname", "Station", "Country", "Phone", "Gender", "DOB", "Submitted At"]);
  }
  var data = JSON.parse(e.postData.contents);
  sheet.appendRow([
    data.firstName,
    data.surname,
    data.station,
    data.country,
    data.phone,
    data.gender,
    data.dob,
    data.submittedAt
  ]);
  return ContentService.createTextOutput(JSON.stringify({status: "success"}))
    .setMimeType(ContentService.MimeType.JSON);
}
