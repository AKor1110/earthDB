<!DOCTYPE html>
<html>
<head>
    <title>Earth Dashboard</title>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" >
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style/main.css">
    <link rel="stylesheet" href="style/maps.css">
    <link href="https://fonts.googleapis.com/css?family=Dosis" rel="stylesheet">
    <?php include("php/includes.php") ?>
    
</head>

<body>
    <div id="main">
        <div id="top">
            <a href="/" style="text-decoration: none;color: white;">
                <div id="name">
                    Earth Dashboard
                </div>
            </a>
            <div id="nav">
            <ul>
            </ul>
            </div>
        </div>
    </div>
    
    <div id="mainBody2">
        
        <div class="bodyInfo">
            <div style="text-align: center;font-size: 1.7em;padding-top: 3em;padding-bottom:3em;">
                The email address <p style="font-size: 2em"><?=unsubMessage()?></p> has been unsubscribed from <a href="http://earthdb.xyz">earthDB</a>.
                <?=removeEmail()?>
            </div>
        </div>  
    </div>
    
    <div id="footer">
        MLH OtterHacks 2017 | Lucas Childers, Sean McCarthy, Daniel Mora, Andy Kor, Alexander Morales
    </div>
</body>
</html>
