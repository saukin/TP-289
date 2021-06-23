const invisibleItems = document.querySelectorAll('.inv')
const submitButton = document.querySelector('#submitButton')
const cardsDiv = document.querySelector('#cards')
let requestKey;

submitButton.addEventListener('click', () => {
    const requestValue = input.value
    cardsDiv.innerHTML = ""
    console.log(requestValue, requestKey)
    requestWithValaue(requestKey, requestValue)
})

function showInput(itemValue) {
    for (let i of invisibleItems) {
        i.classList.toggle('invisible')
    }
    requestKey = itemValue;
    let requestValue;

    let input = document.querySelector('#input');
    input.value = "";
    switch (itemValue) {
        case 'name':
            input.setAttribute('placeholder', 'Nom du programmeur')
            break;
        case 'day':
            input.setAttribute('placeholder', 'Jour')
            break;
    }
}

function makeInputInvisible(itemValue) {
    const invItems = document.querySelectorAll('.inv')
    cardsDiv.innerHTML = ""
    
    for (let i of invItems) {
        if (!i.classList.contains('invisible')) {
            i.classList.toggle('invisible');
        }
    }
    if (itemValue == 'list') {
        requestAll();
    } else {
        showInput(itemValue);
    }

}

function showList(data) {
    for (let item of data) {
        const card = `
        <div class="col-sm-3" >
            <div class="card">
                <ul>
                    ${item.programmeur}
                    <li>Note # : ${item.id}</li>
                    <li>Jour : ${item.jour}</li>
                    <li>Tasses : ${item.tasses}</li>
                </ul>
            </div>
        </div>`
        cardsDiv.innerHTML += card;
    }
}

function showTasses(data) {
    for (let item in data[0]) {
        var name = item
        var tasses = data[0][item]    
    }
    cardsDiv.innerHTML += `
        <div class="card">
            ${name} à consommé ${tasses} tasses du café
        </div>
    `
}