$(document).ready(function() { 
    $("button").click(function() { 
        var data = $("form").serializeArray(); 
        console.log(data);
    }); 
}); 
