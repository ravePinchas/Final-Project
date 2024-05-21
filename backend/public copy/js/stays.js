async function onGetCars() {
    const elPre = document.querySelector('pre')

    const res = await fetch('api/stays')
    const stays = await res.json()

    console.log(stays);

    elPre.innerText = JSON.stringify(stays, null, 2)
}