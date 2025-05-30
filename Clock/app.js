let hour = document.querySelector(".hour")
let minute = document.querySelector(".minute")
let second = document.querySelector(".second")

setInterval(() => {
    set_date()
}, 10);

function set_date() {
    let date = new Date
    let set_hour = date.getHours()
    let set_minute = date.getMinutes()
    let set_second = date.getSeconds()
    let set_milisecond = date.getMilliseconds()

    set_hour = (set_hour * 30) + (set_minute * 0.5) + (set_second * 0.008)
    set_minute = (set_minute * 6) + (set_second * 0.1)
    set_second = (set_second * 6) + (set_milisecond * 0.006)

    second.style.transform = `rotate(${set_second}deg)`
    minute.style.transform = `rotate(${set_minute}deg)`
    hour.style.transform = `rotate(${set_hour}deg)`
}

