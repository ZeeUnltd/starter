let list = []
// const tableBody = document.querySelector("tableBody")


const startApp = async () => {
  const result = await fetchList()
  if (result) {
     list = result
    populateTable()
  }
}

const fetchList = async (page = 1) => {
  const list = await fetch(
    "https://randomapi.com/api/8csrgnjw?key=LEIX-GF3O-AG7I-6J84" +
      `&page=${page}`
  ).then((result) => result.json())
  return list
}

function populateTable() {
  const table = document.getElementById("tableBody")
    const male = list.results[0][2]
    const female = list.results[0][2]

  console.log( {list, male, female} )
//   list.results[0][0].forEach((item, index) => {
//     // tr = document.createElement("tr")
//     // td = document.createElement("td")

//     // tr.append(td)
//     // tableBody.append(tr)


//     // Create an empty <tr> element and add it to the 1st position of the table:
//     const row = table.insertRow(-1)

//     // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
//     const cell1 = row.insertCell(0)
//     const cell2 = row.insertCell(1)
//     const cell3 = row.insertCell(1)

//     // Add some text to the new cells:
//     cell1.innerHTML = `${index+1}`
//     cell2.innerHTML = `${item}`
//     cell3.innerHTML = `${item}`
//   })
}
function laodNext(data) {
  console.log("isLoading")
  return "done "
}
document.addEventListener("DOMContentLoaded", startApp)
