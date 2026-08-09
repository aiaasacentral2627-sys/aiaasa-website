// AIAASA backend — paste this whole file into Extensions > Apps Script
// It handles BOTH the member registration form and the testimonials form,
// using one Web App URL for everything.

const SHEET_MEMBERS = "Members";
const SHEET_TESTIMONIALS = "Testimonials";

function doPost(e) {
  var body = JSON.parse(e.postData.contents);
  var ss = SpreadsheetApp.getActiveSpreadsheet();

  if (body.formType === "testimonial") {
    var sheet = ss.getSheetByName(SHEET_TESTIMONIALS);
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_TESTIMONIALS);
      sheet.appendRow(["Name", "Station/Country", "Testimonial", "Submitted At"]);
    }
    sheet.appendRow([body.name, body.origin, body.text, body.submittedAt]);
  } else {
    var sheet = ss.getSheetByName(SHEET_MEMBERS);
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_MEMBERS);
      sheet.appendRow(["First Name", "Surname", "Station", "Country", "Gender", "DOB", "Submitted At"]);
    }
    sheet.appendRow([body.firstName, body.surname, body.station, body.country, body.gender, body.dob, body.submittedAt]);
  }

  return ContentService.createTextOutput(JSON.stringify({status: "success"}))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_TESTIMONIALS);
  var result = [];

  if (sheet && sheet.getLastRow() > 1) {
    var rows = sheet.getRange(2, 1, sheet.getLastRow() - 1, 4).getValues();
    rows.forEach(function(r) {
      if (r[2]) { // only include rows that have testimonial text
        result.push({ name: r[0], origin: r[1], text: r[2], submittedAt: r[3] });
      }
    });
    result.reverse(); // newest first
  }

  return ContentService.createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
}
