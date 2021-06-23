function requestAll() {

    fetch('/g', {
        method: 'GET',
    }).then((jsonFilms) => {
        // console.log(jsonFilms.json())
        return jsonFilms.json()
    }).then((data) => {
        showList(data)
    }).catch((err) => console.log("ERROR", err))
}

function requestWithValaue(requestKey, requestValue) {
    console.log(`REQ KEY ${requestKey}`)
    fetch('/g', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            action: requestKey,
            requestValue: requestValue
        })
    }).then((jsonFilms) => {
        // console.log(jsonFilms.json())
        return jsonFilms.json()
    }).then((data) => {
        if (requestKey == 'name') {
            showTasses(data)
        } else {
            showList(data)
        }
    }).catch((err) => console.log("ERROR"))

}