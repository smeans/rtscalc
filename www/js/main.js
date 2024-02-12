let currentRace = null;
let imageBase = null;

function cloneTemplate(t) {
    const div = document.createElement('div');
    div.innerHTML = t.content.children[0].outerHTML;

    return div.firstElementChild;
}

function getUnitImgSrc(unit) {
    return `/images/${config.info.id}/${unit}.png`;
}

function getRaceImgBase() {
    return `/images/${config.info.id}`;
}

function getFrameImageBase(name) {
    return `/images/${config.info.id}/frames/${name}`;
}

let keymap;
let resources;

function patchNames(d) {
    for (const k in d) {
        if (!d[k].name) {
            d[k].name = k;
        }
    }
}

function syncRace() {
    currentRace = config.races[currentRacePicker.value];
    imageBase = getRaceImgBase();

    patchNames(currentRace.units);
    patchNames(currentRace.upgrades);
    patchNames(currentRace.buildings);

    workerImage.unit = currentRace.workers.name;

    workersFrame.base = getFrameImageBase(`${currentRace.name}_worker`);
    cupFrame.base = getFrameImageBase(`${currentRace.name}_uppm`);
    unitFrame.base = getFrameImageBase(`${currentRace.name}_unit`);

    activeWorkers.innerText = '';

    const dss = Object.values(currentRace.buildings).filter((b) => b.defaultSupply).pop();

    if (dss) {
        ssPerMinuteTile.unit = dss.name;
        ssPerMinuteTile.unitInfo = dss;
        ssPerMinuteTile.unit = dss.name;
        ssPerMinuteTile.imageBase = getRaceImgBase();  
        ssPerMinuteTile.count = 0;
        
        ssPerMinuteTile.style.display = 'inline';
    } else {
        ssPerMinuteTile.style.display = 'none';
    }

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

        el.unit = name;
        el.unitInfo = currentRace.units[name];

        el.id = `unit${name}`;

        units.appendChild(el);

        if (currentRace.units[name].hotkey) {
            keymap[currentRace.units[name].hotkey] = name;
        }

    }

    recalcStats();
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
    const ui = currentRace.units[el.unit];

    const rpm = {};
    const upm = el.count * (60/ui.time);

    resources.forEach((rn) => {
        if (rn in ui) {
            rpm[rn] = Math.round(ui[rn] * upm);
        }
    });

    rpm.supply = Math.round((ui.supply > 0 ? ui.supply : 0) * upm);
    rpm.netSupply = Math.round(ui.supply * upm);

    console.log(el.unit, rpm);
    return rpm;
}

function getTotalRequiredRPM() {
    const rr = {};

    resources.forEach((rn) => {
        rr[rn] = 0;
    });
    rr.supply =
    rr.netSupply = 0;

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
        ube.unit = el.unit;
        ube.unitInfo = el.unitInfo;
        ube.classList.add(el.id);

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
        si.value = rw;
        re.querySelector('.rpm').innerText = re.querySelector('x-slinput').value * re.rpm;
    });
}

function getProdBuilding(unit) {
    for (let bn in currentRace.buildings) {
        const bi = currentRace.buildings[bn];

        if (bi.produces && bi.produces.indexOf(unit) >= 0) {
            return bn;
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

        rpb[pb] = (rpb[pb] || 0.0) + el.count;
    });

    productionBuildings.innerText = '';

    for (let un in rpb) {
        const pbe = document.createElement('x-unit-tile');
        pbe.unit = un;
        pbe.unitInfo = currentRace.buildings[un];
        pbe.count = rpb[un];

        productionBuildings.appendChild(pbe);
    }
}

function recalcStats() {
    const rr = getTotalRequiredRPM();

    const ss = currentRace.buildings[ssPerMinuteTile.unit];

    ssPerMinuteTile.count = Math.ceil(Math.max(0, rr.netSupply) / ((60.0/ss.time)*Math.abs(ss.supply)));
    ssPerMinuteTile.style.display = includeSupplyCost.checked && ssPerMinuteTile.count ? 'inline' : 'none';

    if (includeSupplyCost.checked) {
        const sr = getRequiredRPM(ssPerMinuteTile);
        addObjects(rr, sr);
    }

    supplyPerMinute.innerText = rr.supply || '0';
    netSupplyPerMinute.innerText = rr.netSupply || '0';

    if (autoBalanceWorkers.checked) {
        remaxWorkers(rr);
    }

    resources.forEach((rn) => {
        const re = document.querySelector(`#resource${rn}`);
        const db = re.querySelector('x-delta-bar');
        const rpm = +re.querySelector('.rpm').innerText;

        db.value = rpm - rr[rn];
    });

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

    autoBalanceWorkers.addEventListener('input', (e) => {
        recalcStats();
    });

    includeSupplyCost.addEventListener('input', (e) => {
        recalcStats();
    });
});