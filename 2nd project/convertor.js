var decimal =(document.querySelectorAll(".decimal"))
var binary =(document.querySelectorAll(".binary"))
var oct=(document.querySelectorAll(".oct"))
var hex=(document.querySelectorAll(".hex"))
var text=(document.querySelectorAll(".text"))
var text2=(document.querySelectorAll(".text2"))



function result(){
    var convert1=Number(decimal[0].value)
    decimal[0].value=parseInt(decimal[0].value,10) || 0
    binary[0].value= Number(convert1.toString(2))||0
    oct[0].value= Number(convert1.toString(8))||0
    hex[0].value= convert1.toString(16)
}

function result2() { 
  


    decimal[0].value=parseInt(binary[0].value,2)||0
    oct[0].value=Number(parseInt(binary[0].value,2).toString(8))||0
    hex[0].value=parseInt(binary[0].value,2).toString(16)
}

function result3() {
    decimal[0].value=parseInt(oct[0].value,8)||0
    binary[0].value=Number(parseInt(oct[0].value,8).toString(2))||0
    hex[0].value=parseInt(oct[0].value,8).toString(16)
}

function result4() {
    var num=hex[0].value
    var hex2Dec=Number('0x'+ num)
    decimal[0].value=hex2Dec||0
    binary[0].value=Number(hex2Dec.toString(2))||0
    oct[0].value=Number(hex2Dec.toString(8)) ||0
    

    
}
function result7() {
    decimal[0].value=''
    binary[0].value=''
    oct[0].value=''
    hex[0].value=''
    
}




