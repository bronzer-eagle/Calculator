setTimeout(function () {
    document.getElementById("container").classList.add("circle-scale");
}, 100);
setTimeout(function () {
    document.getElementById("second-container").style.display = "block";
}, 550);

var ind;

function getData() {
    var height = +document.getElementById("height").value;
    var weight = +document.getElementById("weight").value;

    var index = (weight / Math.pow(height / 100, 2)).toFixed(2);

    if (weight == 0 || height == 0) {
        alert("Ви не заповнили поле!");
    }
    else {
        doAnimation();
    }

    function doAnimation() {

        document.getElementById("height").classList.add("opac");
        document.getElementById("weight").classList.add("opac");

        document.getElementsByTagName("LABEL")[0].classList.add("opac");
        document.getElementsByTagName("LABEL")[1].classList.add("opac");

        var button = document.getElementById("ok-button");

        button.classList.add("transition-scale");
        button.style.backgroundColor = '#ffffff';

        setTimeout(function () {
            button.innerHTML = "";
        }, 500);

        setTimeout(function () {
            button.classList.add("transition-translate");
        }, 500);

        var per = 0;
        setTimeout(function () {
            document.getElementById("for-button").classList.add("transition-rotate");
            document.getElementById("percent").classList.remove("display-none");

            var timer = setInterval(function () {
                document.getElementById("percent").innerHTML = per + "%";
                per++;
                showResult(index, height, weight);
                if (per == 101) {
                    clearInterval(timer);
                    setTimeout(function () {
                        button.style.display = "none";
                        document.getElementById("percent").innerHTML = "";
                        document.getElementById("percent").style.borderRadius = 0;
                        document.getElementById("percent").style.background = "none";
                        document.getElementById("percent").style.width = 300 + "px";
                        document.getElementById("percent").style.marginLeft = -150 + "px";
                        document.getElementById("percent").style.fontSize = 12 + "px";
                        /*document.getElementById("percent").style.lineHeight = 6;*/
                        setTimeout(function () {
                            document.getElementById("percent").innerHTML = "Натисніть, щоб отримати більше інформації";
                            document.getElementById("results").classList.add("pulse");
                            ind = index;
                            document.getElementById("results").onclick = openTable
                        }, 500);
                    }, 1000);
                }
            }, 20);
        }, 1500);
    }


}

function showResult(index, height, weight) {
    var resultDiv = document.getElementById("results");
    resultDiv.classList.add("opac2");
    resultDiv.innerHTML = "Ваша вага: " + weight + "<br>" + "Ваш зріст: " + height + "<br>" + "Ваш ІМТ: " + index;
}

function openTable() {
    var myDiv = document.getElementById("container");
    myDiv.innerHTML = "";
    myDiv.classList.add("table");
    var t = document.createElement('table');
    t.id = "tb";

    var tbody = document.createElement('tbody');

    for (var i = 0; i < 7; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < 2; j++) {
            var td = document.createElement('td');

            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    t.appendChild(tbody);

    setTimeout(function () {
        document.getElementById("container").appendChild(t);
    }, 1000);

    t.rows[0].cells[0].innerHTML = "Індекс маси тіла";
    t.rows[0].cells[1].innerHTML = "Класифікація";
    t.rows[1].cells[0].innerHTML = "Менше 18,5";
    t.rows[1].cells[1].innerHTML = "Недостатня маса";
    t.rows[2].cells[0].innerHTML = "18,5—24,9";
    t.rows[2].cells[1].innerHTML = "Норма";
    t.rows[3].cells[0].innerHTML = "25,0—29,9";
    t.rows[3].cells[1].innerHTML = "Передожиріння (гладкість)";
    t.rows[4].cells[0].innerHTML = "30,0—34,9";
    t.rows[4].cells[1].innerHTML = "Ожиріння I ступеня";
    t.rows[5].cells[0].innerHTML = "35,0—39,9";
    t.rows[5].cells[1].innerHTML = "Ожиріння II ступеня";
    t.rows[6].cells[0].innerHTML = "Більше 40,0";
    t.rows[6].cells[1].innerHTML = "Ожиріння III ступеня";

    t.rows[0].style.background = "#AE32FF";

    console.log(ind);

    switch (true) {
        case ind < 18.5:
            t.rows[1].style.background = "#ff1400";
            setTimeout(function () {
                document.body.style.background = "#ff1400";
                document.getElementById("container").style.boxShadow = "1px 1px 4px 1px  #B21001"
            }, 1000);
            break;
        case (ind > 18.5) && (ind < 24.9):
            t.rows[2].style.background = "#009b23";
            setTimeout(function () {
                document.body.style.background = "#009b23";
                document.getElementById("container").style.boxShadow = "1px 1px 4px 1px #016217"
            }, 1000);
            break;
        case (ind > 25) && (ind < 29.9):
            t.rows[3].style.background = "#3043A4";
            setTimeout(function () {
                document.body.style.background = "#3043A4";
                document.getElementById("container").style.boxShadow = "1px 1px 4px 1px  #26357F"
            }, 1000);
            break;
        case (ind > 30) && (ind < 34.9):
            t.rows[4].style.background = "#EB0BEC";
            setTimeout(function () {
                document.body.style.background = "#EB0BEC";
                document.getElementById("container").style.boxShadow = "1px 1px 4px 1px  #B010B0"
            }, 1000);
            break;
        case (ind > 35) && (ind < 39.9):
            t.rows[5].style.background = "#EC9700";
            setTimeout(function () {
                document.body.style.background = "#EC9700";
                document.getElementById("container").style.boxShadow = "1px 1px 4px 1px  #AE6E00"
            }, 1000);
            break;
        case (ind > 40):
            t.rows[6].style.background = "#ECEC00";
            setTimeout(function () {
                document.body.style.background = "#ECEC00";
                document.getElementById("container").style.boxShadow = "1px 1px 4px 1px  #C1C100"
            }, 1000);
            break;


    }


}
