function commentsubmit(){
     field1 = $("#cname").val();
     field2 = $("#cemail").val();
     field3 = $("textarea#ccomment").val();
    
    if(field1 == ""){
        document.getElementById("cname").style.borderBottomColor = "red"
        document.getElementById("validaterror1").style.display = "flex"

    }else{
        document.getElementById("cname").style.borderBottomColor = "lightgray"
        document.getElementById("validaterror1").style.display = "none"
    }
    if(field2 == ""){
        document.getElementById("cemail").style.borderBottomColor = "red"
        document.getElementById("validaterror1").style.display = "flex"

    }else{
        document.getElementById("cemail").style.borderBottomColor = "lightgray"
        document.getElementById("validaterror1").style.display = "none"
    }
    if(field3 == ""){
        document.getElementById("ccomment").style.border = "red 1px solid"
        document.getElementById("validaterror1").style.display = "flex"

    }else{
        document.getElementById("ccomment").style.border = "lightgray 1px solid"
        document.getElementById("validaterror1").style.display = "none"
    }

    if(field1 !== "" && field2 !== "" && field3 !== "" ){
    
    $.ajax({

    url: "https://docs.google.com/forms/d/e/1FAIpQLSfFgLzyJnktudXrpScUIGU8daOsFGoBcllXEuef8ZND9FOz4A/formResponse?",
    data: {"entry.2087217413": field1, "entry.2129752889": field2, "entry.956220071": field3 },
    type: "POST",
    dataType: "xml",
    success: function(d)
    {
    },
    error: function(x, y, z)
        {


            document.getElementById("validaterror").style.display = "none"
            document.getElementById("success").style.display = "flex"					
            document.getElementById("cname").value = ""            
            document.getElementById("cemail").value = ""            
            document.getElementById("ccomment").value = ""            
        }
});
return false;
}
}

