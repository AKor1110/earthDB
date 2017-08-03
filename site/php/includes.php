<?php
function addEmail()
{
    if (isset($_POST["emailSub"]))
    {
        
        if (!isset($_POST["email"]))
        {
            return;
        }
        $email = str_replace(' ', '', $_POST["email"]);
        
        $regex = "/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/";
            
        if (!preg_match($regex, $_POST["email"]))
        {
            return;
        }
        
        $file = fopen("../python/data_base.csv", "r");
        $data = array();
        $handle = fgetcsv($file, 1000, ",");
        
        $exists = false;
        
        for ($i = 0; $i < count($handle); $i++)
        {
            $data[$i] = $handle[$i];
            
            if ($_POST["email"] == $handle[$i])
            {
                $exists = true;
            }
        }
        
        fclose($file);
        
        if ($exists == false)
        {
            $data[$amount] = $_POST["email"];
            
            $out = fopen("../python/data_base.csv", "w");
            
            fputcsv($out, $data);
            fclose($out);
        }
    }
}

function unsubMessage()
{
    return $_GET['unsubscribe'];
}

function removeEmail()
{
    $unsub = unsubMessage();
    $email = str_replace(' ', '', $unsub);

    $regex = "/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/";

    if (!preg_match($regex, $email))
    {
        return;
    }

    $file = fopen("../python/data_base.csv", "r");
    $data = array();
    $handle = fgetcsv($file, 1000, ",");

    $exists = false;

    for ($i = 0; $i < count($handle); $i++)
    {
        if ($email == $handle[$i])
        {
            $exists = true;
        }
        else
        {
            array_push($data, $handle[$i]);
        }
    }

    fclose($file);

    if ($exists == true)
    {
        $out = fopen("../python/data_base.csv", "w");
        fputcsv($out, $data);
        fclose($out);
    }
    else 
    {
        continue;
    }
}
?>