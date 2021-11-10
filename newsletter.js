function newslettersubmit(){
    var field = $("#newsletter").val();
    
    if(field == ""){
        document.getElementById("newsletter").style.borderBottomColor = "red "
        document.getElementById("validaterror").style.display = "flex"

    }else{
        document.getElementById("newsletter").style.borderBottomColor = "lightgray "
        document.getElementById("validaterror").style.display = "none"
    }
    
    if(field !== "" ){

$.ajax({

    url: "https://docs.google.com/forms/d/e/1FAIpQLScGAplAM9JhAahaWh6okYjq_viCCcMVElSKzLaIT_uRELp-sA/formResponse?",
    data: {"entry.1506121739": field},
    type: "POST",
    dataType: "xml",
    success: function(d)
    {
    },
    error: function(x, y, z)
        {


            document.getElementById("validaterror").style.display = "none"
            document.getElementById("success").style.display = "flex"					
            document.getElementById("newsletter").value = ""
            
        }
});
return false;
}
}