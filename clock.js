
    const hourHand=document.getElementById("hour-hand")
    const minuteHand=document.getElementById("minute-hand")
    const secondsHand=document.getElementById("seconds-hand")

    function clock(){
        const date= new Date();
        const seconds = date.getSeconds()/60
        const minutes=(seconds + date.getMinutes())/60
        const hours=(minutes + date.getHours())/12

        rotateClockHand(secondsHand,seconds)
        rotateClockHand(minuteHand,minutes)
        rotateClockHand(hourHand,hours)
    }

    function rotateClockHand(element,rotation){
        element.style.setProperty('--rotate',rotation * 360)
    }
    setInterval(clock,1000)
