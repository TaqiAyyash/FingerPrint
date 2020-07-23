define(['knockout'],
function(ko) {
  //put this function in the page you want activate fingerprint "common in first page"
 function Finger_print() {
      self.FingerPrint=function(){             
      FingerprintAuth.isAvailable(function (result) {

       console.log("FingerprintAuth available: " + JSON.stringify(result));

         // If has fingerprint device and has fingerprints registered
         if (result.isAvailable == true && result.hasEnrolledFingerprints == true) {
               var encryptConfig = {
               clientId: "myAppName",
               username: "taqi",
               password: "1230",
               maxAttempts: 3,
               locale: "en_US",
               dialogTitle: "Please put your finger on Device",
               dialogMessage: "For Authentication Security",
               dialogHint: "No one will steal your identity, promised"
                  }; // See config object for required parameters

                // Set config and success callback
                FingerprintAuth.encrypt(encryptConfig, function (_fingerResult) {
                console.log("successCallback(): " + JSON.stringify(_fingerResult));

                if (_fingerResult.withFingerprint) {

                console.log("Successfully encrypted credentials.");
                console.log("Encrypted credentials: " + result.token);
                } else if (_fingerResult.withBackup) {
                     console.log("Authenticated with backup password");
                  }
                   // Error callback
                   }, function (err) {
                   if (err === "Cancelled") {
                       console.log("FingerprintAuth Dialog Cancelled!");

                       } else {
                             // console.log("FingerprintAuth Error: " + err);
                              navigator.app.exitApp();
                                }
                            });
                        }

                    }, function (message) {
                        console.log("isAvailableError(): " + message);
                    });
                }
             
        self.connected = function() {
          // call function here to to activate it once the user access this page
           FingerPrint();
             };
                              
        self.disconnected = function() {
            // Implement if needed
            };
                                
        self.transitionCompleted = function() {
            // Implement if needed
            };
                        }

                        
        return Finger_print
            }
            );
