// Function to fetch data from the telematics platform API and update the sheet
function updateTelematicsData() {
    // Replace with your actual API endpoint URL
    var apiUrl = "https://platform.stgtelematics.com/api/v1/tracks";
    
    // Replace with your actual API key or token if needed
    var apiKey = "YOUR_API_KEY"; 
  
    // Setup request options
    var options = {
      "method": "get",
      "headers": {
        "Authorization": "Bearer " + apiKey,
        // Add any additional headers if required by the API
      },
      "muteHttpExceptions": true
    };
  
    try {
      // Fetch data from the API
      var response = UrlFetchApp.fetch(apiUrl, options);
      var responseCode = response.getResponseCode();
  
      if (responseCode === 200) {
        // Parse the API response (assuming it's JSON)
        var data = JSON.parse(response.getContentText());
        
        // Access the desired sheet by name (change 'Sheet1' if needed)
        var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
        
        // Clear previous data (optional, if you want a fresh update each time)
        sheet.clearContents();
        
        // Optionally, add headers (customize these based on your API response structure)
        var headers = ["Time", "Status", "Zone", "Other Info"];
        sheet.appendRow(headers);
        
        // Loop through the data and add rows to the sheet
        // (Assuming 'data' is an array of objects)
        data.forEach(function(item) {
          // Customize the properties based on your API response
          var time = item.time || "";
          var status = item.status || "";
          var zone = item.zone || "";
          var otherInfo = item.otherInfo || "";
          
          sheet.appendRow([time, status, zone, otherInfo]);
        });
        
        Logger.log("Telematics data updated successfully.");
      } else {
        Logger.log("API call failed with code: " + responseCode);
      }
      
    } catch (error) {
      Logger.log("Error fetching data: " + error);
    }
  }
// Function to fetch data from the telematics platform API and update the sheet
function updateTelematicsData() {
  // Replace with your actual API endpoint URL
  var apiUrl = "https://platform.stgtelematics.com/api/v1/tracks";
  
  // Replace with your actual API key or token if needed
  var apiKey = "YOUR_API_KEY"; 

  // Setup request options
  var options = {
    "method": "get",
    "headers": {
      "Authorization": "Bearer " + apiKey,
      // Add any additional headers if required by the API
    },
    "muteHttpExceptions": true
  };

  try {
    // Fetch data from the API
    var response = UrlFetchApp.fetch(apiUrl, options);
    var responseCode = response.getResponseCode();

    if (responseCode === 200) {
      // Parse the API response (assuming it's JSON)
      var data = JSON.parse(response.getContentText());
      
      // Access the desired sheet by name (change 'Sheet1' if needed)
      var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
      
      // Clear previous data (optional, if you want a fresh update each time)
      sheet.clearContents();
      
      // Optionally, add headers (customize these based on your API response structure)
      var headers = ["Time", "Status", "Zone", "Other Info"];
      sheet.appendRow(headers);
      
      // Loop through the data and add rows to the sheet
      // (Assuming 'data' is an array of objects)
      data.forEach(function(item) {
        // Customize the properties based on your API response
        var time = item.time || "";
        var status = item.status || "";
        var zone = item.zone || "";
        var otherInfo = item.otherInfo || "";
        
        sheet.appendRow([time, status, zone, otherInfo]);
      });
      
      Logger.log("Telematics data updated successfully.");
    } else {
      Logger.log("API call failed with code: " + responseCode);
    }
    
  } catch (error) {
    Logger.log("Error fetching data: " + error);
  }
}
  