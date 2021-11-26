class UI{
    addBook(book){
        // create <tr> element
        const tr = document.createElement('tr');
        for(let key in book){
            // create <td> element
            let td = document.createElement('td');
            // create text element
            let text = document.createTextNode(book[key]);
            // add text to <td>
            td.appendChild(text);
            // add td to tr
            tr.appendChild(td);// add td to tr
            tr.appendChild(td);
        }
        // X link
        // create <td> element
        let td = document.createElement('td');
        // create <a> element
        const link = document.createElement('a');
        // set href atribute to <a>
        link.setAttribute('href', '#');
        // add text content to <a>
        link.appendChild(document.createTextNode('X'));
        // add <a> to <li>
        td.appendChild(link);
        // add td to tr
        tr.appendChild(td);
        // add tr to tbody
        const booksList = document.querySelector('#book-list');
        booksList.appendChild(tr);
    }
}