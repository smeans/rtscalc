let currentRace = null;

function cloneTemplate(t) {
    const div = document.createElement('div');
    div.innerHTML = t.content.children[0].outerHTML;

    return div.firstElementChild;
}

function getUnitImgSrc(unit) {
    return `/images/${config.info.id}/${unit}.png`;
}

function syncRace() {
    currentRace = config.races[currentRacePicker.value];

    workerImage.src = getUnitImgSrc(currentRace.workers.name)

    activeWorkers.innerText = '';
    for (let r in currentRace.workers.rpm) {
        const el = cloneTemplate(activeWorkerTemplate);

        el.querySelector('label').innerText = r;

        const rng = el.querySelector('x-slinput');
        rng.min = 0;
        rng.max = currentRace.workers.maxActive;
        rng.value = 0;

        activeWorkers.appendChild(el);
    }

    units.innerText = '';
    for (let name in currentRace.units) {
        const el = cloneTemplate(unitTemplate);

        el.querySelector('img').src = getUnitImgSrc(name);

        units.appendChild(el);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    phInit();
});

document.addEventListener('ph-loaded', () => {
    document.title = config.info.title;
    mainTitle.innerText = config.info.title;
    mainDescription.innerText = config.info.description;

    for (let race in config.races) {
        const opt = document.createElement('option');
        opt.innerText = race;

        currentRacePicker.appendChild(opt);
    }

    syncRace();
});