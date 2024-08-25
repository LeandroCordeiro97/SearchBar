const searchInput = document.getElementById('search')
const dropdown = document.getElementById('dropdown')

//sample dara for search results
const data = [
    'Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape',
    'Honeydew', 'Indian Fig', 'Jackfruit', 'Kiwi', 'Lemon', 'Mango',
    'Nectarine', 'Orange', 'Papaya', 'Quince', 'Raspberry', 'Strawberry',
    'Tangerine', 'Ugli Fruit', 'Vanilla Bean', 'Watermelon', 'Xigua',
    'Yellow Passion Fruit', 'Zucchini'
];
let currentFocus = -1

searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase()
    dropdown.innerHTML = ''
    if(query){
        const filteredData = data.filter(item => item.toLowerCase().includes(query))
        filteredData.forEach(item=>{
            const div = document.createElement('div')
            div.classList.add('dropdown-item')
            div.textContent = item
            div.addEventListener('click', () => {
                searchInput.value = item
                dropdown.innerHTML = ''
                dropdown.classList.remove('active')
            })
            dropdown.appendChild(div)
        })

        dropdown.classList.add('active')
    } else {
        dropdown.classList.remove('active')
    }
}) 

searchInput.addEventListener('keydown', function (e) {
    let items = dropdown.getElementsByClassName('dropdown-item')
    if(e.key === "ArrowDown") {
        currentFocus++
        addActive(items)
    }else
    if(e.key === "ArrowUp") {
        currentFocus--
        addActive(items)
    } else if (e.key === "Enter"){
        e.preventDefault()
        if(currentFocus > 1 && items [currentFocus]){
            items[currentFocus].click()
        }
    }
})

function addActive(items){
    removeActive(items)
    if(currentFocus >= items.length) currentFocus = 0
    if(currentFocus < 0 ) currentFocus = items.length -1
    items[currentFocus].classList.add('selected')
}

function removeActive(items) {
    for( let i = 0; i<items.length; i++){
        items[i].classList.remove('selected')
    }
}
