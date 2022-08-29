const prevBtn = document.getElementById("prevBtn")
const nextBtn = document.getElementById("nextBtn")
const pageView = document.getElementById("pageView")

let list = null;
let currentPage;
let paging;
let isLoading;

const startApp = async () => {
    const result = await fetchList();
    if (result) {
        list = result;
        return  populateTable();
    }
};

 async function fetchList(page = 1) {
    const response = await fetch(
        "https://randomapi.com/api/8csrgnjw?key=LEIX-GF3O-AG7I-6J84" +
        `&page=${page}`
    ).then((result) => result.json());
    currentPage = response.info.page
    paging = response.results[0].paging
    
    pageView.innerText = `Showing Page ${currentPage}`
    list = response
    populateTable(currentPage)
};

async function populateTable(n = 1) {
    let wholeTable = document.getElementById("mainTable");
    let newTableBody = document.createElement('tbody')
    let pageData = list.results[0][`${n}`]

    await pageData.forEach((item, index) => {

        const row = newTableBody.insertRow(-1)
        row.setAttribute('data-entryid', item.id)

        // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
        const cell1 = row.insertCell(0)
        const cell2 = row.insertCell(1)
        const cell3 = row.insertCell(1)

        // Add some text to the new <td></td>elements:
        cell1.innerHTML = `${index + 1}`
        cell2.innerHTML = `${item.gender}`
        cell3.innerHTML = `${item.age}`
        return  wholeTable.lastElementChild.replaceWith(newTableBody)
        
    })
}

prevBtn.addEventListener('click', () => {
    debugger
    const N = parseInt(currentPage) -1 
    console.log({N}, ':1o:');
    return !paging?.previous ? '' : fetchList(N)
})
nextBtn.addEventListener('click', () => {
    const N = parseInt(currentPage) + 1
    console.log({N}, ':o1:');
    return !paging?.next ? '' : fetchList(N)
})

document.addEventListener("DOMContentLoaded", startApp);
