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
                const af = Object.fromEntries(afs.map((fn, i) => {
                    return [fn, tva[i]];
                }));

                cu.attacks[nameToID(af.attackname)] = af;

                return;
            }

            const bf = Object.fromEntries(bfs.map((fn, i) => {
                return [fn, tva[i]];
            }));

            units[nameToID(bf.name)] = bf;

            const af = Object.fromEntries(afs.map((fn, i) => {
                return [fn, tva[afi + i]];
            }));
            if (af.attackname) {
                bf.attacks = {
                    [nameToID(af.attackname)]: af
                };
            }

            cu = bf;
        });

        return units;
    }

    function extractUnitJSON(ps) {
        const ife = document.createElement('iframe');
        document.body.appendChild(ife);
        ife.onload = () => {
            const body = ife.contentDocument.body;

            const table = body.querySelector('table');

            const cfna = columnToFieldNames(table.querySelector('tr:has(th)'));

            const unitData = processUnitRows(cfna, table.querySelectorAll('tr:not(:has(th))'));

            unitDataJSON.innerText = JSON.stringify(unitData);
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