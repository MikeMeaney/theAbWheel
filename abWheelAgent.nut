server.log("abWheel Agent is rolling along");

 function send_Tamale(body) {         //take in JSON object for the Reps
    local firebase_url = "https://catxco.firebaseio.com/wheel.json" //The URL of the firebase location
    server.log(format("Sending data to: %s",firebase_url)); //Tell me were the data is going to be sent
    
    server.log(body);       //Show me the body that's going to be sent
    
    //send data to fire base
    local req = http.put(firebase_url, {}, body);
  
    local res = req.sendsync();         //send request
    if(res.statuscode != 200) {
        server.log("error sending message: "+res.body);
    }
}
 
 device.on("wholeTamale", function(JSONfeed) {       //take csv body in from device
    server.log("--Wheel data is being processed--");
    //send preformatted JSON object
   send_Tamale(JSONfeed);         //send to function to call xively
});

