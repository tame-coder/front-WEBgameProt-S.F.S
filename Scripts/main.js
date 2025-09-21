const mainNavUp = document.getElementById("main-nav-up");
const mainNavRigth = document.getElementById("main-nav-right");
const mainNavLeft = document.getElementById("main-nav-left");

function showActionByTriger(){
    mainNavLeft.innerHTML = `
        <h1>Название</h1>
        <h2>Цель и текс</h2>
    `
}

function showDevLogs()
{
    mainNavRigth.innerHTML = `
        <h1>Dave Logs</h1>
        <h2>Player x:${(player.x).toFixed(2)} y:${(player.y.toFixed(2))} s:${player.speed}</h2> 
        <h2>Player IsDead:${player.isDead}</h2>
        <h2>Player blood:${player.blood}</h2>
        <h2>Player Fortune:${player.fortune}</h2>
        <h2>Player Hp:${player.health} F:${player.food} S:${player.sleep}</h2>
        <h2>Player Cash: ${player.cash} </h2>
        <h2>DaveMode: ${IsDaveMode} </h2>
    `
}
//Основное меню
function mainStart() {
    mainNavUp.innerHTML = `
        <h1>Меню</h1>
        <button id="nav-btn-invent">Инвентарь</button>
        <button id="nav-btn-shop">Магазин</button>

        <div class="main-nav-up-burger" > 
            <button id="nav-btn-signals">Сигналы</button>
            
            <button id="nav-btn-restart">заново</button>
        </div>
        
        <button id="nav-btn-dave">Режим Резработчика</button>
    `;

    mainNavLeft.innerHTML = `
        <h1>Меню</h1>
        <h2>Кнопочки</h2>
    `

    document.getElementById("nav-btn-invent").onclick = showInventory;
    document.getElementById("nav-btn-shop").onclick = showShop;
    document.getElementById("nav-btn-signals").onclick = showSignals;
    document.getElementById("nav-btn-restart").onclick = gameRestart;
    document.getElementById("nav-btn-dave").onclick = setIsDaveMode;
}

function showInventory() {
    mainNavUp.innerHTML = `
        <h1>Инвентарь</h1>
        <button id="nav-btn-exit">Назад</button>
    `;

    mainNavLeft.innerHTML = `
        <h1>Инвентарь</h1>
        <h2>Кнопочки</h2>
    `

    document.getElementById("nav-btn-exit").onclick = mainStart;
}

function showShop() {
    mainNavUp.innerHTML = `
        <h1>магазин</h1>
        <button id="nav-btn-exit">Назад</button>
    `;

    mainNavLeft.innerHTML = `
        <h1>Магазин</h1>
        <h2>Кнопочки</h2>
    `

    document.getElementById("nav-btn-exit").onclick = mainStart;
}

function showSignals() {
    mainNavUp.innerHTML = `
        <h1>Сигналы</h1>
        <button id="nav-btn-exit">Назад</button>
    `;

    mainNavLeft.innerHTML = `
        <h1>Сигналы</h1>
        <h2>Кнопочки</h2>
    `

    document.getElementById("nav-btn-exit").onclick = mainStart;
}

function setIsDaveMode(){
    (IsDaveMode) ? (IsDaveMode = false) : (IsDaveMode = true);
    console.log(IsDaveMode)
}

function showCasino(){
    mainNavUp.innerHTML = `
        <h1>Казино</h1>
        <button id="nav-btn-casino-roll">Дэп</button>
    `;

    mainNavLeft.innerHTML = `
        <h1>Казино</h1>
        <div class="main-nav-up-burger" > 
            <input type="number" id="casino-stak" value="1" title="Ставка">
            <input type="number" id="casino-mulp" value="2" title="Умножитель">
        </div> 
        <h2 id="casino-result">Результат</h2>
    `

    document.getElementById("nav-btn-casino-roll").onclick = casinoRoll;
}

function casinoRoll(){
    console.log("rooll");

    let stak = document.getElementById("casino-stak").value;
    let mulp = document.getElementById("casino-mulp").value;
    const casinoResult = document.getElementById("casino-result");

    if(player.cash < (stak * mulp)){casinoResult.innerText = "Нехватает денег"; return;}

    let rollNumb, rollNumbWin;
    rollNumb = getRandomIntInclusive(1, mulp);
    rollNumbWin = getRandomIntInclusive(1, mulp);
    
    if(rollNumb == rollNumbWin)
    {
        casinoResult.innerText = `Победа:${stak*mulp}`;
        player.cash += stak*mulp;
    } else {
        casinoResult.innerText = `Проигрыш:-${stak*mulp}`;
        player.cash -= stak*mulp;
    }
}

function gameRestart(){
    window.location.href = "/main.html";
}

mainStart();
