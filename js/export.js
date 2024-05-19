// Function to convert JSON to HTML table
function generateTable(data) {
    const table = document.getElementById('jsonTable');
    const keys = Object.keys(data[0]);
  
    // Create the table headers
    const thead = table.createTHead();
    const headerRow = thead.insertRow();
    keys.forEach(key => {
        const th = document.createElement('th');
        th.innerText = key;
        headerRow.appendChild(th);
    });
  
    // Create the table body
    const tbody = table.createTBody();
    data.forEach(item => {
        const row = tbody.insertRow();
        keys.forEach(key => {
            const cell = row.insertCell();
            cell.innerText = item[key];
        });
    });
}

// Function to copy the table to clipboard
function copyTable() {
const table = document.getElementById('jsonTable');
const range = document.createRange();
range.selectNode(table);
window.getSelection().removeAllRanges();  // clear current selection
window.getSelection().addRange(range);    // to select text
document.execCommand('copy');
window.getSelection().removeAllRanges();  // to deselect
alert('Table copied to clipboard!');
}

// Generate the table on page load
var jsonData = JSON.parse(localStorage.getItem('currentRoles'));

// Function to filter JSON object
function filterJsonData(data, keys) {
    return data.map(item => {
        let filteredItem = {};
        keys.forEach(key => {
            if (item.hasOwnProperty(key)) {
                if (key === "role") {
                    filteredItem[key] = item[key].name;
                } else {
                        filteredItem[key] = item[key];
                }
            }
        });
        // Handle the array key separately
        return filteredItem;
    });
}

// Specify the keys to keep
const keysToKeep = ["name", "role"];

// Filter the JSON data
const filteredJsonData = filterJsonData(jsonData, keysToKeep);

generateTable(filteredJsonData);

const copyButton = document.getElementById('copyTableButton');
copyButton.addEventListener('click', copyTable);