// много комментов в основном не поделу, буквально описывал каждую строку

let words = ["слово", "магия", "школа", "число", "ворон", "эволюция","экзамен","мастерство"];  // массив слов которые нужно отгадывать
let alfabet = ["а","б","в","г","д","е","ё","ж","з","и","й","к","л","м","н","о","п","р","с","т","у","ф","х","ц","ч","ш","щ","ъ","ы","ь","э","ю","я"] // массив с алфавитом
let score = document.getElementsByClassName("score");                // переменная содержащая класс score
let puzzle = document.getElementsByClassName("puzzle");              // переменная содержащая класс puzzle
let letters = document.getElementsByClassName("letters");            // переменная содержащая класс letters
let button = document.querySelector("button");              // переменная для кнопки Start game
button.id = "button";                                  // присваиваем id для кнопки
puzzle[0].style = "display: none;";                   // меняем стиль элемента puzzle чтобы убрать его из зоны видимости  
score[0].style = "display: none;";                    // меняем стиль элемента score чтобы убрать его из зоны видимости
let vin = document.createElement("p");                // создаем элемент vin который включает в себя элемент html <p>
vin.textContent = "Угадал верно: ";                   // добавляем текст в элемент vin 
score[0].appendChild(vin);                            // добавляем в элемент score дочерний элемент vin

let lose = document.createElement("p");               // создаем элемент lose который включает в себя элемент html <p>
lose.textContent = "Ошибок: ";                        // добавляем текст в элемент lose
score[0].appendChild(lose);                           // добавляем в элемент score дочерний элемент lose

let eachOfword = [];                                  // создаем пустой массив eachOfword
x = Math.floor(Math.random(words.length)*words.length);          // создаем переменную х и присваиваем её значение рандома от 0 до 4

let word = words[x];                                  // создаем переменную word и присваиваем её значение случайного элемента массива words
for (let i = 0; i < word.length; i++) {               // запускаем цикл который перебирает длину элемента word по символам
    eachOfword.push(word[i]);                         // наполняем массив eachOfword символами элементов word
    };

let tr1 = document.createElement("tr");                      // создаем дочерний элемент tr1 
    for (let i = 0; i < eachOfword.length; i++){                 // циклом набиваем созданный tr1 элементами td1 которые каждый содержат элемент массива eachOfword
        let td1 = document.createElement("td");                  // создаем элемент td1 
        td1.textContent = eachOfword[i];          // наполняем контент элемента td1 значениями элементов из массива eachOfword
        td1.classList.add("boxE");                // добавляем элементу td1 css класс boxE
        td1.style = "color: white;";             // добавляем элементу td1 css стиль color: white чтобы текст сливался с фоном страницы
        td1.id = "td1-" + (i+1);                 // добавляем элементу td1 id 
        tr1.appendChild(td1);                    // добавляем элемент td1 как дочерний элемент tr1
    };

let tr2 = document.createElement("tr");            // создаем дочерний элемент tr2
    for (let i = 0; i < alfabet.length; i++) {     // циклом набиваем созданный tr2 элементами td2 которые каждый содержат элемент массива alfabet
        let td2 = document.createElement("td");   // создаем элемент td2
        td2.textContent = alfabet[i];             // наполняем контент элемента td2 значениями элементов из массива alfabet
        td2.classList.add("box");                 // добавляем элементу td2 css класс box
        td2.style = "background-color: white;"   //  добавляем элементу td2 css стиль background-color: white 
        td2.id = "td2-" + (i+1);                   // добавляем элементу td2 id
        tr2.appendChild(td2);                     // добавляем элемент td2 как дочерний элемент tr2
        };

    puzzle[0].appendChild(tr1);              // наполняем элемент puzzle[0] дочерними элементами tr1
    puzzle[0].appendChild(tr2);              // наполняем элемент puzzle[0] дочерними элементами tr2

document.getElementById("button").addEventListener("click", startGame);  // добавляем кнопке прослушиватель событий через клик и функцию startGame
function startGame () {          // создаем функцию startGame

    puzzle[0].style = "display: inline-block;";   // меняем css стиль элемента puzzle чтобы он отобразился на экране
    score[0].style = "display: block;";           // меняем css стиль элемента score чтобы он отобразился на экране
    button.style = "display: none;";              // меняем css стиль элемента button чтобы скрыть его
    letters[0].style = "display: none;";          // меняем css стиль элемента letters[0] чтобы скрыть его

    x = Math.floor(Math.random(words.length)*5);            // переменная которая содержит в себе рандомайзер от 0 до 4

    let timer1 = 0;       // обнуляем переменную которая будет считать правильные ответы
    let timer2 = 0;       // обнуляем переменную которая будет считать неправильные попытки
    };              
    let timer1 = 0;       // создаем переменную которая будет считать правильные ответы
    let timer2 = 0;       // создаем переменную которая будет считать неправильные попытки


    for (let i = 0; i < alfabet.length; i++) {     // перебераем фиклом массив alfabet
        document.getElementById("td2-" + (i+1)).addEventListener("click", proverka);  // добавляем прослушиватель событий и функцию элементам алфавита на экране
        function proverka () {     // создаем функцию proverka
            let notFound = true;   // создаем элемент notFound 
            let timer3 = 0;        // создаем новый таймер для корректировки
            let timer4 = 0;        // и еще один )
            while (notFound && eachOfword.length > 0) {   // запускаем цикл while который ищет значения 
                for (j = 0; j < eachOfword.length; j++) {       // запускаем цикл который перебирает значения массива eachOfword
                    if (alfabet[i] === eachOfword[j]) {               // условие которое сравнивает значения alfabet[i] и eachOfword[j]
                        puzzle[0].childNodes[0].childNodes[j].style = "color: black";   // изменяем стиль css если условие верно
                        for (let z = 0; z < eachOfword.length; z++){                    // дополнительный цикл для повторной проверки если элементов несколько
                            if (puzzle[0].childNodes[0].childNodes[j].textContent === puzzle[0].childNodes[0].childNodes[z].textContent){   // условие
                                puzzle[0].childNodes[0].childNodes[z].style = "color: black";    // изменяем стиль css если условие верно
                                timer4++;             // изменяем промежуточный таймер
                                }; 
                        };
                        puzzle[0].childNodes[1].childNodes[i].style = "background-color: green;";  // изменяем стиль css если условие верно
                        timer1++;                      // изменяем промежуточный таймер
                        if (timer4 > 1){               // проходим условие изменения промежуточного таймера
                            timer1++;                  // изменяем таймер правильных ответов
                            };
                        vin.textContent = "Угадал верно: " + timer1;        // изменяем контент элементу vin на значение timer1
                        document.getElementById("td2-" + (i+1)).removeEventListener("click", proverka);  // отключаем функцию от элемента прошедшего проверку 
                        if (timer1 === eachOfword.length){    // проходим условие на колличество правильных ответов 
                            puzzle[0].style = "display: none;";   // изменяем стиль css если условие верно
                            letters[0].style = "display: block";  // изменяем стиль css если условие верно
                            let win = document.createElement("h1");  // создаем элемент для победного сообщения 
                            win.textContent = "ПОБЕДА!";             // наполняем его 
                            win.style = "color: red;";               // меняем css стиль 
                            letters[0].appendChild(win);             // добавляем сообщение о победе в элемент страницы letters[0]
                            };
                        notFound = false;                            // меняем notFound чтобы закончить цикл while
                        break;                                       // прерываем цикл 
                        } else if (alfabet[i] !== eachOfword[j]){    // проверка неправильной попытки
                            puzzle[0].childNodes[1].childNodes[i].style = "background-color: red;";  // изменяем стиль css 
                            timer3 = timer3 + eachOfword.length;                                     // наполняем промежуточный таймер
                            if (timer3 === (eachOfword.length*eachOfword.length)){                   // проверка подсчитывающая значение промежуточного таймера
                                timer2++;                                  // наполняем timer2
                                lose.textContent = "Ошибок: " + timer2;    // изменяем контент элементу lose на значение timer2
                                };                       
                            if (timer2 === 10){                            // проходим условие на колличество неправильных ответов
                                puzzle[0].style = "display: none;";        // изменяем стиль css если условие верно
                                letters[0].style = "display: block";       // изменяем стиль css если условие верно
                                let noWin = document.createElement("h1");  // создаем элемент для сообщения о поражении
                                noWin.textContent = "ПОРАЖЕНИЕ!";          // наполняем его
                                noWin.style = "color: red;";               // меняем css стиль
                                letters[0].appendChild(noWin);             // добавляем сообщение о поражении в элемент страницы letters[0]
                                };
                            document.getElementById("td2-" + (i+1)).removeEventListener("click", proverka); // отключаем функцию от элемента прошедшего проверку
                            notFound = false;              // меняем notFound чтобы закончить цикл while
                            };
                    };
                };
            };
        }