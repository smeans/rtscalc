const config = {
    "info": {
      "id": "stormgate",
      "title": "Stormgate Build Calculator",
      "description": "A simple calculator to determine a production mix given a certain level of resource mining in Stormgate.",
      "resources": {
        "luminite": {
            "color": "#deac26"
        },
        "therium": {
            "color": "0d1e2a"
        }
      }
    },
    "races": {
      "vanguard": {
        "workers": {
          "name": "bob",
          "rpm": {
            "luminite": 50,
            "therium": 50
          },
          "maxActive": 200
        },
        "units": {
          "bob": {
            "luminite": 50,
            "therium": 0,
            "supply": 1,
            "time": 20
          },
          "lancer": {
            "luminite": 100,
            "therium": 0,
            "supply": 2,
            "time": 26
          },
          "scout": {
            "luminite": 50,
            "therium": 0,
            "supply": 1,
            "time": 15
          },
          "exo": {
            "luminite": 100,
            "therium": 25,
            "supply": 2,
            "time": 28
          },
          "medtech": {
            "luminite": 100,
            "therium": 50,
            "supply": 3,
            "time": 27
          },
          "hedgehog": {
            "luminite": 150,
            "therium": 25,
            "supply": 3,
            "time": 35
          },
          "vulcan": {
            "luminite": 200,
            "therium": 125,
            "supply": 6,
            "time": 50
          },
          "atlas": {
            "luminite": 250,
            "therium": 125,
            "supply": 6,
            "time": 55
          },
          "hornet": {
            "luminite": 125,
            "therium": 75,
            "supply": 3,
            "time": 38
          },
          "evac": {
            "luminite": 100,
            "therium": 50,
            "supply": 3,
            "time": 32
          },
          "sentinel": {
            "luminite": 75,
            "therium": 125,
            "supply": 4,
            "time": 50
          },
          "kineticredirection": {
            "luminite": 100,
            "therium": 100,
            "supply": 0,
            "time": 60
          },
          "vorilliumclaws": {
            "luminite": 25,
            "therium": 25,
            "supply": 0,
            "time": 30
          },
          "quickdrawhustle": {
            "luminite": 100,
            "therium": 100,
            "supply": 0,
            "time": 60
          },
          "adepttraining": {
            "luminite": 100,
            "therium": 100,
            "supply": 0,
            "time": 30
          },
          "transonicrockets": {
            "luminite": 100,
            "therium": 100,
            "supply": 0,
            "time": 60
          },
          "jumpjets": {
            "luminite": 100,
            "therium": 100,
            "supply": 0,
            "time": 60
          },
          "plasmaarcinfusion": {
            "luminite": 100,
            "therium": 100,
            "supply": 0,
            "time": 90
          },
          "skysprintretrofit": {
            "luminite": 100,
            "therium": 100,
            "supply": 0,
            "time": 60
          },
          "sentineladeptaugmentation": {
            "luminite": 150,
            "therium": 150,
            "supply": 0,
            "time": 30
          },
          "commandpost": {
            "luminite": 400,
            "therium": 0,
            "supply": 0,
            "time": 90
          },
          "habitat": {
            "luminite": 100,
            "therium": 0,
            "supply": 0,
            "time": 20
          },
          "barracks": {
            "luminite": 150,
            "therium": 0,
            "supply": 0,
            "time": 40
          },
          "mechbay": {
            "luminite": 150,
            "therium": 50,
            "supply": 0,
            "time": 45
          },
          "scrapyard": {
            "luminite": 100,
            "therium": 0,
            "supply": 0,
            "time": 35
          },
          "hangarbay": {
            "luminite": 150,
            "therium": 75,
            "supply": 0,
            "time": 45
          },
          "biokineticslab": {
            "luminite": 100,
            "therium": 0,
            "supply": 0,
            "time": 50
          },
          "machinelab": {
            "luminite": 150,
            "therium": 100,
            "supply": 0,
            "time": 50
          },
          "sentrypost": {
            "luminite": 100,
            "therium": 0,
            "supply": 0,
            "time": 55
          }
        }
      }
    }
  }