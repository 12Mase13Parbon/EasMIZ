$(document).ready(function() {
    var i=0;
    $.ajax({
        type:"GET", 
        url: "http://localhost:3000/regData", 
        success: function(data) {
                //var data = JSON.stringify(data);
                
                console.log(data);
                for(var c=0;c<data.length;c++) {
                    $("#allData").append('<tr><td>'+data[c].id+'</td><td>'+data[c].name+'</td><td>'+data[c].fname+'</td><td>'+data[c].gname+'</td><td>'+data[c].cnumber+'</td><td>'+data[c].lnumber+'</td><td>'+data[c].email+'</td><td>'+data[c].ldnumber+'</td><td>'+data[c].address+'</td><td>'+data[c].classes+'</td><td>'+data[c].section+'</td><td>'+data[c].ses+'</td></tr>');
                }
                
            }, 
        error: function(jqXHR, textStatus, errorThrown) {
                alert(jqXHR.status);
            },
       dataType: "jsonp"
    });
    
})