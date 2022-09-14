var sec = 00
var min = 00
var hor = 00
var interval

function twoNumbers(digit){
    if(digit<10){
        return('0' + digit)
    }else{
        return(digit)
    }
}
function start(){
    go()
   interval = setInterval(go,1000)
}

function stop(){
    clearInterval(interval)
    sec = 0
    min = 0
    document.getElementById('timer').innerText = '00:00:00'
}

function pause(){
    clearInterval(interval)
}

function go(){
    sec++
    if(sec == 60){
        min ++
        sec = 0
        if(min==60){
            min = 0
        }
    }
    document.getElementById('timer').innerText=twoNumbers(hor)+':'+twoNumbers(min)+':'+twoNumbers(sec)
}
