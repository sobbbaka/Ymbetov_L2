function first_quest() {
    document.getElementById("first_buttom").
        onclick = function () {
            let a = prompt("Введите первый катет.");
            let int_a = Number(a);                                                              // Переводим строку в число
            if (isNaN(int_a) == true || (a == null)) return;                                    // Отмена при вводе не числа или при отмене ввода
            var b = prompt("Введите второй катет.");
            let int_b = Number(b);                                                              // Переводим строку в число
            if (isNaN(int_b) == true || b == null) return;                                     // Отмена при вводе не числа или при отмене ввода                           
            let gip = Math.sqrt(Math.pow(int_a, 2) + Math.pow(int_b, 2))                        // Вычисляем корень из квадратов введеных катетов
            let P = gip + int_a + int_b                                                         // Сумма всех катетов
            alert("Гипотенуза = " + gip + ";" + " Периметр = " + P)                             // Вывод
        }
}

function two_quest() {
    document.getElementById("two_quest").
        onclick = function () {
            let number = prompt("Введите число, которое будем разворачивать.");
            if (number == null || isNaN(number) == true || (number > 999) || (number < -999)) return;        // Проверка на правильность ввода данных
            alert((number.split('').reverse().join('')));                                                    // Разбитие числа на массив символов, разворот и обратный сбор
        }
}

function one_task() {
    document.getElementById("one_task").
        onclick = function () {
            let A = document.getElementById("input_one_task_A");
            let B = document.getElementById("input_one_task_B");
            let C = document.getElementById("input_one_task_C");
            if (Number(A.value) > 0 && Number(B.value) > 0 && Number(C.value) > 0) {
                document.getElementById("one_task_result").textContent = "TRUE";
            } else {
                if (Number(A.value) < 0 || Number(B.value) < 0 || Number(C.value) < 0) {
                    document.getElementById("one_task_result").textContent = "FALSE";
                } else {
                    if (isNaN(Number(A.value)) == true || isNaN(Number(B.value)) == true || isNaN(Number(C.value) == true)) {
                        document.getElementById("one_task_result").textContent = "NOT NUMBER";
                    } else {
                        if (A.value != null || B.value != null || C.value != null) {
                            document.getElementById("one_task_result").textContent = "EMPTY VALUES";
                        }
                    }
                }
            }
        }
}

function two_task() {
    document.getElementById("two_task").
        onclick = function () {
            let first = document.getElementById("input_two_task_first");
            let second = document.getElementById("input_two_task_second");
            let tree = document.getElementById("input_two_task_tree");
            if (first.value != null && second.value != null && tree.value != null && isNaN(first.value) != true && isNaN(second.value) != true && isNaN(tree.value) != true) {
                if (Number(first.value) <= Number(second.value) && Number(first.value) <= Number(tree.value)) {
                    document.getElementById("two_task_result").textContent = "Ответ: " + first.value;
                } else {
                    if (Number(second.value) <= Number(first.value) && Number(second.value) <= Number(tree.value)) {
                        document.getElementById("two_task_result").textContent = "Ответ: " + second.value;
                    } else {
                        document.getElementById("two_task_result").textContent = "Ответ: " + tree.value;
                    }
                }
            }
        }
}

function tree_task() {
    document.getElementById("tree_task").
        onclick = function () {
            let X = document.getElementById("input_tree_task_X");
            if (Number(X.value) > -2 && Number(X.value) <= 0) {
                let result_one = 1 / (1 + (2.1 * Math.abs(Number(X.value))));
                document.getElementById("tree_task_result").textContent = "Ответ: " + result_one;
            } else {
                if (Number(X.value) <= -2) {
                    let result_two = Math.cos(0.7 * (Number(X.value) * Number(X.value))) + (0.5 * Number(X.value));
                    document.getElementById("tree_task_result").textContent = "Ответ: " + result_two;
                } else {
                    if (Number(X.value) > 0) {
                        let result_tree = Math.sqrt(1 + Math.E ** (2.1 * X.value));
                        document.getElementById("tree_task_result").textContent = "Ответ: " + result_tree;
                    }
                }
            }
        }
}

function four_task() {
    document.getElementById("four_task").
        onclick = function () {
            let X = document.getElementById("input_four_task_X");
            switch (Number(X.value)) {
                case 0:
                    let result_one = 1 / (1 + (2.1 * Math.abs(Number(X.value))));
                    document.getElementById("four_task_result").textContent = "Ответ: " + result_one;
                    break;
                case -2:
                    let result_two = Math.cos(0.7 * (Number(X.value) * Number(X.value))) + (0.5 * Number(X.value));
                    document.getElementById("four_task_result").textContent = "Ответ: " + result_two;
                    break;
                case 1:
                    let result_tree = Math.sqrt(1 + Math.E ** (2.1 * X.value));
                    document.getElementById("four_task_result").textContent = "Ответ: " + result_tree;
                    break;
                default:
                    break;
            }
        }
}

function four_lab_first_quest() {
    document.getElementById("four_lab_first_buttom").
        onclick = function () {
            let number = prompt("Введите число:");
            let result = 0;
            console.log(number);
            while (Number(number) != 0) {
                if (Number(number) == 0 || isNaN(Number(number)) == true) {
                    return
                } else {
                    if (Number(number) < 0) {
                        result += 0;
                        number = prompt("Введите число:");
                        console.log(number);
                    } else {
                        result += Number(number);
                        number = prompt("Введите число:");
                        console.log(number);
                    }
                }

            }
            document.getElementById("four_lab_first_quest_result").textContent = "Сумма всех положительных чисел: " + result;
            console.log(result);
        }
}

function four_lab_two_quest() {
    document.getElementById("four_lab_two_buttom").
        onclick = function () {
            let N = document.getElementById("input_two_task_N");
            let result = 1.0;
            let multiplier = 0;
            for (let i = 1; i < Number(N.value) + 1; i++) {
                multiplier = 1 + i * 0.1;
                result *= multiplier
                document.getElementById("four_lab_two_quest_result").textContent = "Произведение : " + result;
            }
            return
        }
}

function Menu() {
    let menu = document.getElementById('menu');
    menu.classList.toggle('active');
}


let stepNow = "";

let ArrayQuest = {
    1: {
        name: "",
        text: "Увесистые ворота входа в подземелье стояли перед моим взором. Два факела по бокам навеивали на мысль, что я не первый кто сунулся сюда.",
        img: ['img/vxod.jpeg'],
        next: ['2', 'Далее'],
    },

    2: {
        name: "",
        text: "Но выбора у меня нет, если что договорюсь с местными обитателями, может пропустят меня с миром.",
        img: ['img/vxod.jpeg'],
        next: ['3', 'Открыть ворота'],
    },

    3: {
        name: "",
        text: "Уже собравшись толкнуть ворота, что то внутри меня ёкнуло и я глупо замер в паре метров от входа.",
        img: ['img/vxod.jpeg'],
        next: ['4', 'Аккуратно приоткрыть дверь', "3.1", "Проигнорировать чувство"],
    },

    3.1: {
        name: "Смерть",
        text: "Наплевав на чувство, я толкаю дверь и уверенно шагаю внутрь, попадая в поставленный аккурат возле двери капкан. Адская боль тут же заставила меня закричать, привлекая внимание стоящего за дверью бандита. Он избавил меня от страданий.",
        img: ['img/trap.jpg'],
        next: ['1', 'Нет, так точно ничего не выйдет'],
    },

    4: {
        name: "",
        text: "Доверившись чувству я аккуратно приоткрываю дверь и замечаю разложенный капкан. Интересно, кто его сюда поставил?",
        img: ['img/trap.jpg'],
        next: ['5', 'Обойти капкан'],
    },

    5: {
        name: "",
        text: "А вот и владелец капкана. Бандит, стоявший за дверью, повернулся в мою сторону и вытащил свой меч",
        img: ['img/bandit.png'],
        next: ['6', 'Стоять на месте'],
    },

    6: {
        name: "Бандит",
        text: '"Ты ошибся дверью дружок пирожок, готовься к смерти!"',
        img: ['img/bandit.png'],
        next: ['7', 'Ответить что то крутое в ответ'],
    },

    7: {
        name: "Я",
        text: '"Ещё посмотрим кто кого!"',
        img: ['img/bandit.png'],
        next: ['8', 'Приготовиться к бою'],
    },

    8: {
        name: "",
        text: 'Против меча с кулаками не лучшая затея, но и я ведь не пальцем деланный!',
        img: ['img/fight.png'],
        next: ['9', 'Атака (Возможна ответная атака противника)', '9.1', 'Защита (Есть шанс восстановить здоровье)'],
    },

    9: {
        name: "Я",
        text: 'Получай!',
        img: ['img/ydar.png', 'img/ydar2.png'],
        next: ['8', 'На позицию'],
    },

    9.1: {
        name: "Бандит",
        text: 'Подохни уже!',
        img: ['img/block.png'],
        next: ['8', 'Терпеть'],
    },

    10: {
        name: "Смерть",
        text: 'Клинок протыкает моё тело и кровь забрызгивает весь мой обзор. В последнии минуты жизни я вижу лишь ухмылку бандита, который замахивается для последнего удара.',
        img: ['img/lose.png'],
        next: ['1', 'Нет, так точно ничего не выйдет'],
    },

    11: {
        name: "",
        text: 'НОКАУТ! Бандит лежит в отключке.',
        img: ['img/win.png'],
        next: ['12', 'Взять меч'],
    },

    12: {
        name: "",
        text: 'Бандитский мечь пригодится, всяко лучше чем разбивать костяшки об лица.',
        img: ['img/meq.png'],
        next: ['13', 'Продолжить путь'],
    },

};

function getButton(event) {
    body_novel(event.target.id);
}

var hp_hero = 3;
var hp_enemy = 3;
function Novel_buttom(step) {
    document.getElementById("Text_box").innerHTML = ArrayQuest[step]["text"];
    document.getElementById("Text_box_hp").innerHTML = "Здоровье: " + hp_hero;
    if (ArrayQuest[step]["next"][0] == "1") {
        document.getElementById("Text_box_hp").style.display = "none";
    } else {
        document.getElementById("Text_box_hp").style.display = "block";
    }
    if (ArrayQuest[step]["next"][1] != "На позицию" && hp_enemy > 0) {
        document.getElementById("img_novel").src = ArrayQuest[step]["img"][0];
    } else {
        let flag = Math.floor(Math.random() * 2);
        if (flag == 1) {
            document.getElementById("img_novel").src = ArrayQuest[step]["img"][1];
        } else {
            document.getElementById("img_novel").src = ArrayQuest[step]["img"][0];
        }
        console.log(hp_hero)
        console.log(hp_enemy)
        if (hp_hero <= 0 && ArrayQuest[step]["next"][0] == "8") {
            ArrayQuest[step]["next"][0] = "10";
            hp_hero = 3;
            console.log("1")
        } else if (hp_enemy <= 0) {
            ArrayQuest[step]["next"][0] = "11";

        }
        if (ArrayQuest[step]["next"][1] == "На позицию" && hp_enemy > 0) {
            dmg_in_hero = (Math.floor(Math.random() * 3))
            reverse_damage_chance = (Math.floor(Math.random() * 3))
            dmg = (Math.floor(Math.random() * 2) + 1)
            hp_enemy = hp_enemy - dmg;
            if (reverse_damage_chance == 1) {
                hp_hero = hp_hero - dmg_in_hero;
            }
        } else if (ArrayQuest[step]["next"][0] == "8") {
            ArrayQuest[step]["next"][0] = "11";
            console.log(step)
        };
        document.getElementById("img_novel").src = ArrayQuest[step]["img"][0];
    }

    if (ArrayQuest[step]["next"][1] != "Терпеть" && hp_enemy > 0) {
        document.getElementById("img_novel").src = ArrayQuest[step]["img"][0];
    } else {
        enemy_dmg = Math.floor(Math.random() * 2);
        reverse_damage_chance = (Math.floor(Math.random() * 5));
        if (reverse_damage_chance == 4 && ArrayQuest[step]["next"][1] != "На позицию") {
            hp_hero = hp_hero - enemy_dmg;
            console.log(ArrayQuest[step]["next"][1])
        } else if (hp_hero < 3) {
            hp_hero = hp_hero + (Math.floor(Math.random() * 2));
        }
    }


    if (ArrayQuest[step]["name"].length > 0) {
        document.getElementById("Text_box_name").style.display = "block";
        document.getElementById("Text_box_name").innerHTML = ArrayQuest[step]["name"];
    } else {
        document.getElementById("Text_box_name").style.display = "none";
    }
    if (ArrayQuest[step]["name"][0] == "Я") {
        document.getElementById("Text_box_name").style.color = "#19ff00";
    } else {
        document.getElementById("Text_box_name").style.color = "#ff0000";
    }


    if (ArrayQuest[step]["next"].length == 2) {
        document.getElementById("Novel_buttom_2").style.display = "none";

        document.getElementById("Novel_buttom_1").textContent =
            ArrayQuest[step]["next"][1];
    } else {
        if (ArrayQuest[step]["next"].length == 4) {
            document.getElementById("Novel_buttom_2").style.display = "block";

            document.getElementById("Novel_buttom_1").textContent =
                ArrayQuest[step]["next"][1];
            document.getElementById("Novel_buttom_2").textContent =
                ArrayQuest[step]["next"][3];
        }
    }
}

function body_novel(idButton) {
    if (idButton == "Novel_buttom_1") {
        if (stepNow == "") {
            stepNow = "1";
        } else {
            stepNow = ArrayQuest[stepNow]["next"][0];
        }
    } else {
        if (idButton == "Novel_buttom_2") {
            stepNow = ArrayQuest[stepNow]["next"][2];
        }
    }
    Novel_buttom(stepNow);
}


fetch('https://dummyjson.com/products?limit=30&skip=164')
    .then(res => res.json())
    .then(json => {
        let card = document.getElementById('product');
        let search_bar = document.getElementById('search_bar');
        let search_button = document.getElementById('search_button');
        let drop_button = document.getElementById('drop_button');
        let products = json.products;
        function display_products(products_display) {
            card.innerHTML = '';
            products_display.forEach(product => {
                let productElement = document.createElement('div');
                productElement.innerHTML = `
          <p class="text_card">${product.title}</p>
          <p class="text_card">${product.description}</p>
          <p class="text_card">Price: $${product.price}</p>
          <img src="${product.thumbnail}">
        `;
                card.append(productElement);
            });
        }

        display_products(products);

        if (document.getElementById('drop_button').style.display == "none") {
            document.getElementById('search_button').style.display = "block";
        }
        fetch('https://dummyjson.com/products?limit=0')
            .then(res => res.json())
            .then(json_all => {
                let all_products = json_all.products;
                search_button.addEventListener('click', () => {
                    let text = search_bar.value.toLowerCase();
                    if (text.length != 0) {
                        document.getElementById('search_button').style.display = "none";
                        document.getElementById('drop_button').style.display = "block";
                        document.getElementById('sum').style.display = "block";
                        let filter = all_products.filter(product =>
                            product.title.toLowerCase().includes(text) || product.description.toLowerCase().includes(text)
                        );
                        let filter_main = products.filter(product =>
                            product.title.toLowerCase().includes(text) || product.description.toLowerCase().includes(text)
                        );

                        document.getElementById("sum").textContent = "Всего совпадений найдено: " + filter.length + " | " + "Совпадений из диапазона: " + filter_main.length;
                        display_products(filter);
                    }
                });
                drop_button.addEventListener('click', () => {
                    document.getElementById('search_bar').value = "";
                    document.getElementById('search_button').style.display = "block";
                    document.getElementById('drop_button').style.display = "none";
                    document.getElementById('sum').style.display = "none";
                    display_products(products);
                });
            })
    })