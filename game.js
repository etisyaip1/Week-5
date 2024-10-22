
// const things = []
// const entitites = []

const spriteList = [] //things that can move on screen

function Position(px, py) {
    return { x: px, y: py };
}

function Sprite(nameParameter, kindParameter, posParameter) {
    return {
        health: 100,
        name: nameParameter,
        kind: kindParameter,
        position: posParameter,
    };
}

spriteList.push(Sprite("Capt.Lee", "wizard", Position(10, 5)));
spriteList.push(Sprite("Capt.Jenny", "wizard", Position(10, 5)));
spriteList.push(Sprite("Venom", "parasite", Position(20, 10)));
spriteList.push(Sprite("Venom2", "parasite", Position(15, 10)));
spriteList.push(Sprite("Venom3", "parasite", Position(20, 15)));

function printList(list){
    for (let i = 0; i < list.length; i++){
        console.log(i, list[i])
    }
}

function getHeroList(){}
    const list = []; // array
    for(let i = 0; i < spriteList.length; i++) {
        if(spriteList[i].kind === "wizard"){
            outputList.push(spriteList[i]); //add to array list
    }
}
return outputList; //send array back

function getParasites(){
    for (let i = 0; i < spriteList.length; i++) {
        if(spriteList[i].kind == "parasite"){
            console.log(i, spriteList[i]. kind);
        }
    }
}
printParasites()