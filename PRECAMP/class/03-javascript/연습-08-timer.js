// let time = 10
// // undefined
// setInterval(function(){
//     if(time >= 0){
//         console.log(time)
//         time=time-1
//     }
// },1000)
// 2
// // VM3231:3 10
// // VM3231:3 9
// // VM3231:3 8
// // VM3231:3 7
// // VM3231:3 6
// // VM3231:3 5
// // VM3231:3 4
// // VM3231:3 3
// // VM3231:3 2
// // VM3231:3 1
// // VM3231:3 0


let time = 180
// undefined
setInterval(function(){

    if(time>=0){
    
        let min = Math.floor(time/60)
        let sec = String(time%60).padStart(2,"0")
        console.log(min + ":" + sec)
        time = time-1
        
    }
        
    },1000)