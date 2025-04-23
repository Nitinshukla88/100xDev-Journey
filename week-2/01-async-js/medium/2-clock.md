Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)

// 1st task 

const dateFetcher = () => {
    const currentDate = new Date();

    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    console.log(`${hours}:${minutes}:${seconds}`)
}

setInterval(()=>{
    dateFetcher()
}, 1000)


// 2nd task

const dateFetcher = () => {
    const Date = new Date();
    const currentDate = Date.now()

    const hours = currentDate.getHours() + 5;
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    const AmPm = hours > 12 ? PM : AM
    console.log(`${hours}:${minutes}:${seconds} AmPm`)
}

setInterval(()=>{
    dateFetcher()
}, 1000)