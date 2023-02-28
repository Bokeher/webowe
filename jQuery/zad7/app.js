"use strict";
const message = `
    <table>
        <tr>
            <th>Polecenie</th>
            <th>Co się wykona</th>
        </tr>
        <tr>
            <td>node -v</td>
            <td>Wypisuje wersje node'a</td>
        </tr>
        <tr>
            <td>npm install typescript</td>
            <td>Instaluje typescript</td>
        </tr>
        <tr>
            <td>npx tsc -init</td>
            <td>Tworzy plik config typescript'a</td>
        </tr>
        <tr>
            <td>npx tsc --watch</td>
            <td>Sprawia ze po zapisaniu pliku automatycznie kompiluje typescript na javascript</td>
        </tr>
        <tr>
            <td>npm init -y</td>
            <td>Tworzy nowey projekt z domyślnymi ustawieniami</td>
        </tr>
        <tr>
            <th>Co to jest TypeScript i kto go używa</th>
            <th>Język programowania będący nadzbiorem JavaScriptu. Korzysta z niego np. Google</th>
        </tr>
    </table>
`;
const heading = document.createElement('div');
heading.innerHTML = message;
document.body.appendChild(heading);
console.log(2);
