document.addEventListener('DOMContentLoaded', () => {
    function nameToID(name) {
        const na = name.split(/\s+/);
        let id = na[0].toLowerCase() + na.slice(1).join('');

        id = id.replaceAll('.', '');
        id = id.replaceAll('-', '');

        return id;
    }

    function columnToFieldNames(tr) {
        const cfna = [];

        tr.querySelectorAll('th').forEach(th => {
            let fn = th.innerText.trim();
            let img = th.querySelector('img');

            if (!fn && img) {
                fn = img.src.split('Icon_')[1].split('.')[0];
            }

            fn = fn.replace('A.', 'Air');
            fn = fn.replace('G.', 'Ground');

            cfna.push(nameToID(fn));
        });

        return cfna;
    }

    function parseCells(tda) {
        return tda.map(td => {
            const tt = td.innerText.trim();
            if (+tt == tt) {
                return +tt;
            }

            if (tt === '-') {
                return null;
            }

            if (td.querySelector('br')) {
                return Array.from(td.querySelectorAll('a')).map(a => a.innerText);
            }

            return tt;
        });
    }
    function processAttack(afs, tva) {
        return Object.fromEntries(afs.map((fn, i) => {
            switch (fn) {
                case 'bonus': {
                    if (!tva[i]) {
                        return [fn, null];
                    }

                    const bva = tva[i].split(' vs. ');
                    return [fn, {
                        damage: +bva[0],
                        against: bva[1].split(',').map(v => v.trim())
                    }];
                } break;

                default: {
                    return [fn, tva[i]];
                } break;
            }
        }));
    }

    const INFERNALS_HEALTH = /(?<hitpoints>\d+)\s+\((?<shroudhp>\+?\d+)\)/;

    function fixupHealth(unit) {
        const ho = {};

        if (INFERNALS_HEALTH.test(unit.hitpoints)) {
            const groups = unit.hitpoints.match(INFERNALS_HEALTH).groups;

            ho.shroudhp = +groups.shroudhp;
            ho.hitpoints = +groups.hitpoints;
        } else {
            ho.hitpoints = unit.hitpoints;
        }

        delete unit.hitpoints;

        unit.health = ho;
    }

    function processUnitRows(cfna, tra) {
        const afi = cfna.indexOf('attackname');
        const bfs = cfna.slice(0, afi);
        const afs = cfna.slice(afi);

        const units = {};
        let cu = null;

        tra.forEach(tr => {
            const tda = Array.from(tr.querySelectorAll('td'));

            const tva = parseCells(tda);

            if (tda.length < cfna.length) {
                const af = processAttack(afs, tva);

                cu.attacks[nameToID(af.attackname)] = af;

                return;
            }

            const bf = Object.fromEntries(bfs.map((fn, i) => {
                return [fn, tva[i]];
            }));

            units[nameToID(bf.name)] = bf;

            const af = processAttack(afs, tva.slice(afi));

            if (af.attackname) {
                bf.attacks = {
                    [nameToID(af.attackname)]: af
                };
            } else {
                bf.attacks = {};
            }

            fixupHealth(bf);

            cu = bf;
        });

        return units;
    }

    function extractUnitJSON(ps) {
        unitDataJSON.innerText = '';

        const ife = document.createElement('iframe');
        document.body.appendChild(ife);
        ife.onload = () => {
            const body = ife.contentDocument.body;

            const table = body.querySelector('table');

            const cfna = columnToFieldNames(table.querySelector('tr:has(th)'));

            const unitData = processUnitRows(cfna, table.querySelectorAll('tr:not(:has(th))'));

            unitDataJSON.innerText = JSON.stringify(unitData, null, 4);
        }
        ife.contentWindow.document.open();
        ife.contentWindow.document.write(ps);
        ife.contentWindow.document.close();
    }
    
    unitPageSource.addEventListener('change', (e) => {
        extractUnitJSON(e.target.value);
    });

    parseUPS.addEventListener('click', () =>{
        extractUnitJSON(unitPageSource.value);
    });
});