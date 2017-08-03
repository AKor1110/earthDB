<!DOCTYPE html>
<html>
<head>
    <title>Earth Dashboard</title>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" >
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style/main.css">
    <link rel="stylesheet" href="style/maps.css">
    <link href="https://fonts.googleapis.com/css?family=Dosis" rel="stylesheet">
    <script src="js/jquery-3.2.1.min.js"></script>
    <script src="js/scrolling.js"></script>
    <script src="js/liveWeather.js"></script>
    <script src="js/facts.js"></script>
    <script src="js/10day.js"></script>
    <?php include("php/includes.php") ?>
</head>

<body>
    <div id="main">
        <div id="top">
            <a href="/" style="text-decoration: none;color: white">
                <div id="name">
                    Earth Dashboard
                </div>
            </a>
            <div id="nav">
            <ul>
                <li><a href="#10daytitle">Forecast</a></li>
                <li><a href="#lawn">Usage</a></li>
                <li><a href="#me">You</a></li>
                <li><a href="#about">About</a></li>
            </ul>
            </div>
        </div>
    </div>
    
    <div id="liveWeather">
        <div id="weatherInfoBox">
            <div id="wCity"></div>
            <div id="wTemp"></div>
        </div>
        <img id="weatherIcon" src="">
        
    </div>
    
    <div id="mainBody">
        <div class="bodyInfo">
            <div id="emailing">
                <form name = "enter_email" method = "post">
            		<div style="font-size: 1.15em;">Subscribe to the tip of the day!</div>
            		<input type = "text" name = "email" id="emailForm" placeholder="email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'email'">
                    <br>
            		<input type = "submit" value = "Submit" name="emailSub" id="emailSubmit">
                    <?=addEmail()?>
        		</form>
            </div>
        </div>
            <div id="tools" class="bodyInfo">  
                <div class="title" id="10daytitle">
                    Forecast
                </div>
                <br>
                <table id="weatherTable"></table>
                <br><br>
                
                <div class="title" id="lawn">
                    Lawn Water Usage
                </div>
                <div id="factsBody">
                    <input type="number" min="0" onkeypress="return event.charCode >= 48"  style="margin-right: .5em" placeholder="Length" id="UserLength" class="numberEntry">
                    <input type="number" min="0" onkeypress="return event.charCode >= 48" placeholder="Width" id="UserWidth" class="numberEntry">
                    <br>
                    <input type="button" value="Calculate" onclick="GetInformationFromUserLawn();" class="calculateButton"/>
                    <div id="output" class="answer"></div>
                    
                    <div id="usage"></div>
                    <br>
                    <br>
                </div>
                <div class="title" id="shower">
                    Shower Water Usage
                </div>
                <div id="factsBody">
                    <input type="number" min="0" onkeypress="return event.charCode >= 48" style="margin-right: .5em" placeholder="Minutes" id="UserTime" class="numberEntry">
                    <input type="number" min="0" onkeypress="return event.charCode >= 48" placeholder="Weekly" id="UserDaily" class="numberEntry">
                    <br>
                    <input type="button" value="Calculate" onclick="GetInformationFromUserAVG();" class="calculateButton"/>
                    <div id="ShowerTot" class="answer"></div>
                    
                    <div id="MessageTips"></div>
                </div>
            </div>
        <div id="me" class="bodyInfo">
            <div class="title">
                What can you do?
            </div>
            <div class="paragraph">
            The question should be: what can’t you do? Reduce. Reuse. Recycle. We have all heard these words before, but what majority of the population actually abide by these standards? On average, the United States recycles approximately 32% of its total waste, but that still does not deter from the fact that Americans generate 300,000 tons of landfill waste every year! That’s equivalent to the weight of 4,380 average humans! So, if you really want to make a change by doing minor things, these are the top five ways you can do so:
            <div class="innerPara">
                <br>Allocate and manage water usage wisely: the little things like turning the faucet off when brushing your teeth or drinking tap water instead of bottled water will matter in the long run.
            <br><br>Recycle! Know what you can and can’t recycle. Each city has it’s own recycling guidelines, so learn about those and abide by them as best as you can! Even buying recycled material can make a big impact because it can always be recycled again!
            <br><br>Leave your car at home. If you can stay off the road for just two days a week, you can reduce greenhouse gas emissions by an average of 1,590 pounds per year! A better solution is that you walk or ride your bike to work, or even carpool. Doing these things not only improve your health, but the health of the Earth as well!
            <br><br>Save energy in your home. Converting to solar power is not only cheaper in the long run, but you can get yourself an almost unlimited amount of energy for a one time price. Manipulate your thermostat to accommodate for times when you don’t actually need to cool or heat your house. Finally, turn off lights when you don’t need them and although it does seem simple, a lot of people are guilty of this form of energy waste.
            <br><br>Stop yourself from impulsively buying things to reduce waste and improve patience! Everyone is guilty of buying things they don’t need, and as a result, items can pile up and end up being thrown away. Buy things you actually need and that will last a long time, and more importantly that are of good quality. These simple ideas can help reduce waste in total!
            </div>
            
            </div>
        </div>
        <div id="about" class="bodyInfo">
            <div class="title">
                About
            </div>
            <div class="paragraph">
                We are a team of five Computer Science students from California State University, Monterey Bay in the CS++ cohort program. This website was developed in respect for Earth Day and the OtterHacks 2017 hackathon. 
                <br><br>
                We wanted to create a site that would be not only useful, but relevant to present events as well. So, we came up with the Earth Dashboard. This website was made to give incentive for saving the planet. We acknowledge that small changes to everyday life can mean big impact for our environment in the long run. Through this website, we hope to change typical habits into better, practical, and sustainable habits that can improve the environment. 
                
            </div>
        </div>
    </div>
    
    <div id="footer">
        <div style="float:left">MLH OtterHacks 2017 | Lucas Childers, Sean McCarthy, Daniel Mora, Andy Kor, Alexander Morales</div>
        <div style="float:right">Weather provided by <a href="https://www.wunderground.com/" target="_blank" style="text-decoration:none;color:white;">Weather Underground</a> </div>
        <br>
    </div>
</body>
</html>
