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
    "infernals": {
      "workers": {
        "name": "bob",
        "rpm": {
          "luminite": 50,
          "therium": 50
        },
        "maxActive": 100
      },
      "units": {
        "bob": {
          "luminite": 50,
          "therium": 0,
          "supply": 1,
          "time": 20
        },
        "imp": {
          "minerals": 50,
          "gas": 0,
          "supply": 1,
          "time": 12
        },
        "brute": {
          "minerals": 150,
          "gas": 0,
          "supply": 3,
          "time": 35
        },
        "gaunt": {
          "minerals": 50,
          "gas": 15,
          "supply": 1,
          "time": 35
        },
        "magmadon": {
          "minerals": 250,
          "gas": 150,
          "supply": 6,
          "time": 35
        },
        "hellborne": {
          "minerals": 150,
          "gas": 150,
          "supply": 5,
          "time": 35
        },
        "doombringer": {
          "minerals": 100,
          "gas": 150,
          "supply": 4,
          "time": 35
        },
        "weaver": {
          "minerals": 100,
          "gas": 150,
          "supply": 4,
          "time": 35
        },
        "shadowflyer": {
          "minerals": 25,
          "gas": 50,
          "supply": 1,
          "time": 35
        },
        "spriggan": {
          "minerals": 75,
          "gas": 75,
          "supply": 3,
          "time": 35
        },
        "flame_on": {
          "minerals": 100,
          "gas": 100,
          "supply": 0,
          "time": 60
        },
        "sanguine_surge": {
          "minerals": 100,
          "gas": 100,
          "supply": 0,
          "time": 60
        },
        "reapers_rush": {
          "minerals": 100,
          "gas": 100,
          "supply": 0,
          "time": 60
        },
        "soulforge_ascendance": {
          "minerals": 100,
          "gas": 100,
          "supply": 0,
          "time": 60
        },
        "demonhoof_tremors": {
          "minerals": 100,
          "gas": 100,
          "supply": 0,
          "time": 60
        },
        "shrine": {
          "minerals": 350,
          "gas": 0,
          "supply": 0,
          "time": 80
        },
        "meat_farm": {
          "minerals": 50,
          "gas": 0,
          "supply": 0,
          "time": 20
        },
        "iron_vault": {
          "minerals": 100,
          "gas": 10,
          "supply": 0,
          "time": 60
        },
        "conclave": {
          "minerals": 100,
          "gas": 0,
          "supply": 0,
          "time": 60
        },
        "twilight_spire": {
          "minerals": 100,
          "gas": 50,
          "supply": 0,
          "time": 60
        },
        "shadowcleft": {
          "minerals": 150,
          "gas": 100,
          "supply": 0,
          "time": 70
        },
        "ritual_chamber": {
          "minerals": 100,
          "gas": 150,
          "supply": 0,
          "time": 60
        },
        "shroudstone": {
          "minerals": 25,
          "gas": 100,
          "supply": 0,
          "time": 40
        }
      }
    },
    "vanguard": {
      "workers": {
        "name": "bob",
        "rpm": {
          "luminite": 50,
          "therium": 50
        },
        "maxActive": 100
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
        "commandpost": {
          "luminite": 400,
          "therium": 0,
          "supply": -15,
          "time": 90,
          "produces": [
            "bob"
          ]
        },
        "habitat": {
          "luminite": 100,
          "therium": 0,
          "supply": -15,
          "time": 20
        }
      },
      "upgrades": {
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
        }
      },
      "buildings": {
        "commandpost": {
          "luminite": 400,
          "therium": 0,
          "supply": -15,
          "time": 90,
          "produces": [
            "bob"
          ]
        },
        "habitat": {
          "luminite": 100,
          "therium": 0,
          "supply": -15,
          "time": 20
        },
        "barracks": {
          "luminite": 150,
          "therium": 0,
          "supply": 0,
          "time": 40,
          "produces": [
            "scout",
            "lancer",
            "exo",
            "medtech"
          ]
        },
        "mechbay": {
          "luminite": 150,
          "therium": 50,
          "supply": 0,
          "time": 45,
          "produces": [
            "atlas",
            "vulcan",
            "hedgehog"
          ]
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
          "time": 45,
          "produces": [
            "hornet",
            "evac",
            "sentinel"
          ]
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