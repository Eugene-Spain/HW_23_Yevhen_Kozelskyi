function whatTime(requestMinutes) {
    let hours = Math.trunc(requestMinutes / 60)
    let minutes = requestMinutes % 60
    if (isNaN(requestMinutes)) {
        alert(`Sorry but ${requestMinutes} is not a number`)
    } else if (requestMinutes >= 6000) {
        alert(`${requestMinutes} minutes is more then 100 hours. Please insert less minutes quantity.`)
    } else {
        return alert(`${hours} hours ${minutes} minutes`)
    }
}
requestMinutes = prompt('Please type how many minutes you would like to transform into time')
whatTime(requestMinutes)
