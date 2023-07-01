const pertanyaan = document.getElementById("pertanyaan");
const jawaban = document.getElementById("jawaban");

let init = 0;

const botSay = (data) => {
    return [
        "Hallo, perkenalkan nama saya isbot.. siapa nama kamu?",
        `Hallo ${data?.nama}, berapa usia kamu??`,
        `Ohhhh ${data?.usia}, btw apa hobi kamu??`,
        `Sama dong akuk juga hobi ${data?.hobi}, btw punya pacar gak?? hehe `,
        `ohh ${data?.pacar} ya, yaudah kalau gitu. makasih ya dan maaf kepo hehe`
    ]
}

pertanyaan.innerHTML = botSay()[0];
let usersData = [];

function botStart() {
    init++;
    if (init === 1) {
        botDelay({nama : jawaban.value});
    } else if (init === 2) {
        botDelay({usia : jawaban.value});
    } else if (init === 3) {
        botDelay({hobi : jawaban.value});
    } else if (init === 4) {
        botDelay({pacar : jawaban.value});
        jawaban.value = "oke gapapa kok";
    } else if (init === 5) {
        finishing();
    } else {
        botEnd();
    }
}

function botDelay(jawabanUser) {
    console.log({usersData : usersData})
    setTimeout(() => {
        pertanyaan.innerHTML = botSay(jawabanUser)[init];
    }, [400]);
    usersData.push(jawaban.value)
    jawaban.value = "";
}

function finishing() {
    pertanyaan.innerHTML = `Thank u ya ${usersData[0]} udah main ke isbot 😊😊, kapan kapan kita ${usersData[2]} bareng, see you, have a nice day`
    jawaban.value = "siap,, thanks juga";
}

function botEnd() {
    window.location.reload();
}