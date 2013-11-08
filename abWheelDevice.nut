theOut <- OutputPort("buttonPress","string"); // Declare an output for the imp Planner. 
startMillis <- hardware.millis(); //The place were the millis of the start of each rotation is held

targetPause <- 750; //This maybe adjusted, I found that it was an adequte pause durration

pauses <- 0; // Were the number of pauses are held. I reaches 2 then is reset
reps <- 0; // Once the pause counter is reset, the number of completed reps is increased by one

//at initalization just go ahead and clear out the data on the FireBase
agent.send("wholeTamale","{\"durration\":0, \"reps\": 0, \"pauses\": 0}");

//Function for calculating the durration between pulses, decting pauses, updating the number of reps, and 
function durrationCounter(){
  
  hardware.pin9.write(1); // Turn the LED on to indicate pulse from sensor

  //show me what millis is being used to determine the durration
  server.log(format("millis going into calculation: %u", startMillis));
  
  local currentMillis = hardware.millis();
  local durration = currentMillis - startMillis;
  
  server.log(format("durration bewteen state changes: %u", durration));
  
  //This is were the pause detction occurs
  if(durration > targetPause){
    server.log("---PAUSE DETECTED---");
    pauses++;
    server.log(format("pauses counted: %u",pauses));
    
    //reset the pause counter
    if(pauses>1){
     pauses = 0;
     reps++;
     server.log(format("reps completed: %u", reps));
     
     //Now that the pause counter has been reset, 
  //   local repJSON = format("{\"value\": %u}", reps);
//     agent.send("reps",repJSON);
    }
  }
  startMillis <- hardware.millis(); //Update the start millis time
  
  //Send the whole tamale. The objective here is to not overload the FireBase
  local theWholeTamale = format("{\"durration\": %u, \"reps\": %u, \"pauses\": %u}", durration, reps, pauses);
  server.log(theWholeTamale);
  agent.send("wholeTamale", theWholeTamale);
  hardware.pin9.write(0); // Turn the LED off
}

// configure the imp's hardware
// pin 7 is a digital input (0 or 1) and is pulled up externally
hardware.pin7.configure(DIGITAL_IN_PULLUP, durrationCounter);
//Pin 9 is were the LED is connected
hardware.pin9.configure(DIGITAL_OUT);

//Start the MACHINE!!!!!! BWAHHAHAHAHAHAHAhh-Cough! erk, ah, oh God, I inhaled some spit there.
server.log("Ab Wheel Started"); //Tell me about it. 

// imp.configure registers us with the Imp Service
// the arrays at the end. They once paired with what was the planner. Now they do squat.
imp.configure("Ab Wheel", [], []);