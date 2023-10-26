document.addEventListener("onload", myfunction())
function myfunction() {
    fetch('json-filter.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const showData = document.getElementById('data-for-male');

            const table = document.createElement('table');
            table.className = 'data-table';

            const tableHeader = table.createTHead();
            const headerRow = tableHeader.insertRow(0);
            const headers = ['First Name', 'Last Name', 'Email', 'IP Address'];
            headers.forEach(headerText => {
                const header = document.createElement('th');
                header.textContent = headerText;
                headerRow.appendChild(header);
            });

            const tableBody = table.createTBody();
            data.forEach(person => {
                const row = tableBody.insertRow();
                const cell1 = row.insertCell(0);
                cell1.textContent = person.first_name;
                const cell2 = row.insertCell(1);
                cell2.textContent = person.last_name;
                const cell3 = row.insertCell(2);
                cell3.textContent = person.email;
                const cell4 = row.insertCell(3);
                cell4.textContent = person.ip_address;
            });

            showData.innerHTML = '';
            showData.appendChild(table);
        });
}

function myfunctionmale() {
    fetch('json-filter.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const maleData = data.filter(person => person.gender.toLowerCase() === "male");
            const showData = document.getElementById('data-for-male');

            const table = document.createElement('table');
            table.className = 'data-table';


            const tableHeader = table.createTHead();
            const headerRow = tableHeader.insertRow(0);
            const headers = ['First Name', 'Last Name', 'Email', 'IP Address'];
            headers.forEach(headerText => {
                const header = document.createElement('th');
                header.textContent = headerText;
                headerRow.appendChild(header);
            });

            const tableBody = table.createTBody();
            maleData.forEach(person => {
                const row = tableBody.insertRow();
                const cell1 = row.insertCell(0);
                cell1.textContent = person.first_name;
                const cell2 = row.insertCell(1);
                cell2.textContent = person.last_name;
                const cell3 = row.insertCell(2);
                cell3.textContent = person.email;
                const cell4 = row.insertCell(3);
                cell4.textContent = person.ip_address;
            });

            showData.innerHTML = '';
            showData.appendChild(table);
        });
}

function myfunctionfemale() {
    fetch('json-filter.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);

            const maleData = data.filter(person => person.gender.toLowerCase() === "female");
            const showData = document.getElementById('data-for-male');

            const table = document.createElement('table');
            table.className = 'data-table';


            const tableHeader = table.createTHead();
            const headerRow = tableHeader.insertRow(0);
            const headers = ['First Name', 'Last Name', 'Email', 'IP Address'];
            headers.forEach(headerText => {
                const header = document.createElement('th');
                header.textContent = headerText;
                headerRow.appendChild(header);
            });

            const tableBody = table.createTBody();
            maleData.forEach(person => {
                const row = tableBody.insertRow();
                const cell1 = row.insertCell(0);
                cell1.textContent = person.first_name;
                const cell2 = row.insertCell(1);
                cell2.textContent = person.last_name;
                const cell3 = row.insertCell(2);
                cell3.textContent = person.email;
                const cell4 = row.insertCell(3);
                cell4.textContent = person.ip_address;
            });

            showData.innerHTML = '';
            showData.appendChild(table);
        });
}