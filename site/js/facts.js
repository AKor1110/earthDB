function GetInformationFromUserLawn()
{
    var prompt = "That\'s enough water to supply ";
    var prompt2 =" homes with water for a day.";
    var Message = " gallons of water to water your lawn.";
    var underprompt = "That is about the same amount of water the average American household uses per day!";
    var small = "That is far less water than the average American household per day.";
    var Gallon = 0.623; // amount of water to full fill grass needs
       var consumption = $("#UserLength").val() * $("#UserWidth").val() * Gallon;
       $("#output").empty();
       $('<div class=divText>You use ' + Math.round(consumption) + Message + '</div>').appendTo('#output');
       if (consumption >= 100) {
           var Usuage = consumption / 100;
           $("#usage").empty();
           $('<div class=divText>' + prompt + Math.round(Usuage) + prompt2 + '</div>').appendTo('#usage');
       }
       else if (consumption >= 80 && consumption < 100) {
           $("#usage").empty();
           $('<div class=divText>' + underprompt + '</div>').appendTo('#usage');
       }
       else if(consumption < 80){
           $("#usage").empty();
           $('<div class=divText>' + small + '</div>').appendTo('#usage');
       }
       else
       {
           $("#usage").empty();
       }

}


function GetInformationFromUserAVG() {
// an average show takes about 8 minutes
    // avg 17.2 gallons the flow of rate is 2.1 gallons/minute
    var AvgTime=8;
    var AvgGallons=2.1;
    var tip1="That\'s higher that the American average. Pay attention to the length of time spent in the shower!";
    var tip2 ="While using soap and shampoo, try turning off the water!";
    var tip3 ="If you have to wait for the hot water, try collecting the discarded cold water in a bucket for watering plants.";
    var tip4="Your shower time is less than the American average of 8 minutes.";
    var message=" gallons of water per week showering!";
    var consumption = $("#UserTime").val() * $("#UserDaily").val() * AvgGallons;
    $("#ShowerTot").empty();
    $('<div class=divText>You use ' +Math.round(consumption) + message + '</div>').appendTo('#ShowerTot');
    if($("#UserTime").val() >= AvgTime)
    {
        $("#MessageTips").empty();
        $('<div class=divText>' + tip3 + '</div>').appendTo('#MessageTips');
    }
    else if($("#UserTime").val() < AvgTime)
    {
        $("#MessageTips").empty();
        $('<div class=divText>' + tip1 + '</div>').appendTo('#MessageTips');
    }
    else if($("#UserTime").val() == AvgTime)
    {
        $("#MessageTips").empty();
        $('<div class=divText>' + tip2 + '</div>').appendTo('#MessageTips');
    }
    else
    {
        $("#MessageTips").empty();
        $('<div class=divText>' + tip4 + '</div>').appendTo('#MessageTips');
    }
}