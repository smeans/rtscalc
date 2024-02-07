let currentRace = null;

function cloneTemplate(t) {
    const div = document.createElement('div');
    div.innerHTML = t.content.children[0].outerHTML;

    return div.firstElementChild;
}

function getUnitImgSrc(unit) {
    return `/images/${config.info.id}/${unit}.png`;
}

function getFrameImageBase(name) {
    return `/images/${config.info.id}/frames/${name}`;
}

let keymap;
let resources;

function syncRace() {
    currentRace = config.races[currentRacePicker.value];

    workerImage.src = getUnitImgSrc(currentRace.workers.name)

    workersFrame.base = getFrameImageBase('worker');
    pbFrame.base = getFrameImageBase('pb');
    uppmFrame.base = getFrameImageBase('uppm');
    unitFrame.base = getFrameImageBase('unit');

    activeWorkers.innerText = '';
    supplyPerMinute.innerText = '0';

    resources = Object.keys(currentRace.workers.rpm);
    for (let r in currentRace.workers.rpm) {
        const el = cloneTemplate(activeWorkerTemplate);

        el.id = `resource${r}`;

        el.querySelector('label').innerText = r;

        const rng = el.querySelector('x-slinput');
        rng.min = 0;
        rng.max = currentRace.workers.maxActive;
        rng.value = 0;

        el.resource = r;
        el.rpm = currentRace.workers.rpm[r];

        el.querySelector('x-delta-bar').range = currentRace.workers.maxActive * el.rpm;

        activeWorkers.appendChild(el);
    }

    unitsBuilding.innerText = '';
    productionBuildings.innerText = '';

    keymap = {};

    units.innerText = '';
    for (let name in currentRace.units) {
        const el = cloneTemplate(unitTemplate);

        el.src = getUnitImgSrc(name);
        el.title = name;
        el.supply = currentRace.units[name].supply;

        el.id = `unit${name}`;

        units.appendChild(el);

        if (currentRace.units[name].hotkey) {
            keymap[currentRace.units[name].hotkey] = name;
        }

        el.unit = name;
    }
}

function addObjects(a, b) {
    for (let k in a) {
        a[k] += b[k] || 0;
    }

    for (let k in b) {
        if (!(k in a)) {
            a[k] = b[k];
        }
    }

    return a;
}

function getRequiredRPM(el) {
    const rpm = {};
    const upm = el.count;

    const ui = currentRace.units[el.unit];
    resources.forEach((rn) => {
        if (rn in ui) {
            rpm[rn] = ui[rn] * upm;
        }
    });

    rpm.supply = (ui.supply > 0 ? ui.supply : 0) * upm;
    rpm.netSupply = ui.supply * upm;

    console.log(el.unit, rpm);
    return rpm;
}

function getTotalRequiredRPM() {
    const rr = {};

    document.querySelectorAll('#unitsBuilding x-unit-tile').forEach((el) => {
        const urr = getRequiredRPM(el);
        addObjects(rr, urr);
    });

    return rr;
}

function addUnit(el) {
    let ube = unitsBuilding.querySelector(`.${el.id}`);

    if (!ube) {
        ube = document.createElement('x-unit-tile');
        ube.title = el.unit;
        ube.unit = el.unit;
        ube.classList.add(el.id);
        ube.src = el.src;

        unitsBuilding.appendChild(ube);
    }

    ube.count += 1;

    recalcStats();
}

function removeUnit(el) {
    el.count--;

    if (!el.count) {
        el.remove();
    }

    recalcStats();
}

function refreshWorker(el) {
    el.querySelector('.rpm').innerText = el.querySelector('x-slinput').value * el.rpm;

    recalcStats();
}

function remaxWorkers(rr) {
    resources.forEach((rn) => {
        const re = document.querySelector(`#resource${rn}`);
        const si = re.querySelector('x-slinput');
        const rw = Math.ceil(rr[rn]/currentRace.workers.rpm[rn]);
        si.value = Math.max(si.value, rw);
        refreshWorker(re);
    });
}

function getProdBuilding(unit) {
    for (let un in currentRace.units) {
        const ui = currentRace.units[un];

        if (ui.produces && ui.produces.indexOf(unit) >= 0) {
            return un;
        }
    }

    return null;
}

function recalcProdBuildings() {
    const rpb = {};

    document.querySelectorAll('#unitsBuilding x-unit-tile').forEach((el) => {
        const ui = currentRace.units[el.unit];
        const pb = getProdBuilding(el.unit);
        if (!pb) {
            return;
        }

        rpb[pb] = (rpb[pb] || 0.0) + ui.time * el.count;
    });

    productionBuildings.innerText = '';

    for (let un in rpb) {
        const pbe = document.createElement('x-unit-tile');
        pbe.title = un;
        pbe.unit = un;
        pbe.src = getUnitImgSrc(un);
        pbe.count = Math.round((rpb[un]/60.0)*10.0)/10.0;

        productionBuildings.appendChild(pbe);
    }

    console.log(rpb);
}

function recalcStats() {
    const rr = getTotalRequiredRPM();

    resources.forEach((rn) => {
        const re = document.querySelector(`#resource${rn}`);
        const db = re.querySelector('x-delta-bar');
        const rpm = +re.querySelector('.rpm').innerText;

        db.value = rpm - rr[rn];
    });

    supplyPerMinute.innerText = rr.supply || '0';
    netSupplyPerMinute.innerText = rr.netSupply || '0';

    recalcProdBuildings(rr);
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

    document.addEventListener('click', (e) => {
        if (e.target.tagName == 'X-UNIT-TILE') {
            const ue = e.target.closest('#units');

            ue && addUnit(e.target);

            const ube = e.target.closest('#unitsBuilding');

            ube && removeUnit(e.target);
        }
    });

    document.addEventListener('keydown', (e) => {
        const un = keymap[e.key.toUpperCase()];

        if (un) {
            const el = document.querySelector(`#unit${un}`);

            el && addUnit(el);
        }
    });

    document.addEventListener('input', (e) => {
        const we = e.target.closest('.worker');
        we && refreshWorker(we);

        const ue = e.target.closest('.unit');
        ue && refreshUnit(ue);
    });

    currentRacePicker.addEventListener('input', () => {
        syncRace();
    });

    resetButton.addEventListener('click', (e) => {
       syncRace();
    });
});