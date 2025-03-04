

## **How to Do It?**  
### **1️⃣ Check if `platform.stgtelematics.com` has an API**  
- Does the platform have an API?  
- Can you get data in JSON format?  
- Do you have API credentials (API Key, Token, etc.)?  

👉 **Action:** Check if there is API documentation for `platform.stgtelematics.com`.  

---

### **2️⃣ Use Google Sheets API**  
You can use **Google Sheets API** to automatically add tracking data to your Google Sheet.  
- The API allows you to **read/write data** programmatically.  
- You can use **Python, Laravel (PHP), or Node.js** to send data.  

👉 **Action:** Enable Google Sheets API and generate credentials.  

---

### **3️⃣ Create a Script to Automate Everything**  
1. Fetch data from `platform.stgtelematics.com` API.  
2. Process the response (extract `start`, `open`, `finished` status).  
3. Insert/update rows in Google Sheets using **Google Sheets API**.  
4. Run this script **automatically** (e.g., every 10 minutes).  

---

### **🛠️ Tech Stack Options**  
- **Python + Google Sheets API + Requests (for API calls)**  
- **Laravel (PHP) + Guzzle + Google Sheets API**  
- **Node.js + Axios + Google Sheets API**   