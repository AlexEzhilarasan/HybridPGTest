     
     
//-----------------------------------------------------------------
// Replace the values below with your own app configuration values.
//-----------------------------------------------------------------

// When debugMode is true, logToConsole() messages will be written to a
// "debug console" section of the page.
var debugMode = true;

// The client ID value specified for your remote access object that defines
// your application in Salesforce.
var remoteAccessConsumerKey = "3MVG9Y6d_Btp4xp5WIBgxEQC294fvrX.8RAzSviKlLjW99IE_mAlVNZ.z8qg8pe6gtExkHfVv4CLQf99qQS9A";

// The redirect URI value specified for your remote access object that defines
// your application in Salesforce.
var oauthRedirectURI = "https://login.salesforce.com/services/oauth2/success";

// The authorization/access scope(s) you wish to define for your application.
var oauthScopes = ["visualforce","api"];

// The start page of the application.  This is the [pagePath] portion of
// http://[host]/[pagePath].  Leave blank to use the local index.html page.
var startPage = "";  // Used for local REST-based"index.html" PhoneGap app.
//var startPage = "apex/BasicVFPage"; //used for Visualforce-based apps


// Whether the container app should automatically refresh our oauth session on app foreground:
// generally a good idea.
var autoRefreshOnForeground = true; 
    

//-----------------------------------------------------------------
// End configuration block
//-----------------------------------------------------------------
        
            

