const config = {
  "info": {
    "id": "stormgate",
    "title": "Stormgate Build Calculator",
    "description": "A simple calculator to determine a production mix given a certain level of resource mining in Stormgate.",
    "patchInfo": "Stormgate Hunter Early Access Patch 0.1.0 9/19/2024",
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
      "name": "vanguard",
      "workers": {
        "name": "bob",
        "rpm": {
          "luminite": 50,
          "therium": 35
        },
        "maxActive": 100
      },
      "units": {
        "bob": {
          "luminite": 50,
          "therium": 0,
          "supply": 1,
          "time": 17
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
          "time": 18
        },
        "exo": {
          "luminite": 125,
          "therium": 25,
          "supply": 2,
          "time": 28
        },
        "graven": {
          "luminite": 125,
          "therium": 75,
          "supply": 4,
          "time": 38
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
        "helicarrier": {
          "luminite": 300,
          "therium": 250,
          "supply": 8,
          "time": 55
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
          "luminite": 50,
          "therium": 50,
          "supply": 0,
          "time": 60
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
          "time": 20,
          "defaultSupply": true
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
          "therium": 50,
          "supply": 0,
          "time": 50
        },
        "sentrypost": {
          "luminite": 100,
          "therium": 0,
          "supply": 0,
          "time": 45
        }
      }
    },
    "infernals": {
      "name": "infernals",
      "workers": {
        "name": "imp",
        "rpm": {
          "luminite": 50,
          "therium": 35
        },
        "maxActive": 100
      },
      "units": {
        "imp": {
          "luminite": 50,
          "therium": 0,
          "supply": 1,
          "time": 17.5
        },
        "brute": {
          "luminite": 150,
          "therium": 0,
          "supply": 3,
          "time": 35.5
        },
        "gaunt": {
          "luminite": 50,
          "therium": 15,
          "supply": 1,
          "time": 35.5
        },
        "magmadon": {
          "luminite": 250,
          "therium": 150,
          "supply": 6,
          "time": 35.5
        },
        "hellborne": {
          "luminite": 250,
          "therium": 225,
          "supply": 8,
          "time": 35.5
        },
        "doombringer": {
          "luminite": 100,
          "therium": 150,
          "supply": 4,
          "time": 35.5
        },
        "weaver": {
          "luminite": 100,
          "therium": 150,
          "supply": 4,
          "time": 35.5
        },
        "shadowflyer": {
          "luminite": 25,
          "therium": 50,
          "supply": 1,
          "time": 35.5
        },
        "spriggan": {
          "luminite": 100,
          "therium": 50,
          "supply": 3,
          "time": 35.5
        }
      },
      "upgrades": {
        "flame_on": {
          "luminite": 100,
          "therium": 100,
          "supply": 0,
          "time": 60
        },
        "sanguine_surge": {
          "luminite": 100,
          "therium": 100,
          "supply": 0,
          "time": 60
        },
        "reapers_rush": {
          "luminite": 100,
          "therium": 100,
          "supply": 0,
          "time": 60
        },
        "soulforge_ascendance": {
          "luminite": 100,
          "therium": 100,
          "supply": 0,
          "time": 60
        },
        "demonhoof_tremors": {
          "luminite": 100,
          "therium": 100,
          "supply": 0,
          "time": 60
        } 
      },
      "buildings": {
        "shrine": {
          "luminite": 350,
          "therium": 0,
          "supply": -15,
          "time": 80,
          "produces": ["imp"]
        },
        "meat_farm": {
          "luminite": 50,
          "therium": 0,
          "supply": -15,
          "time": 20,
          "defaultSupply": true
        },
        "iron_vault": {
          "luminite": 100,
          "therium": 10,
          "supply": 0,
          "time": 60,
          "produces": ["brute", "magmadon", "hellborne"]
        },
        "conclave": {
          "luminite": 100,
          "therium": 0,
          "supply": 0,
          "time": 60,
          "produces": ["gaunt", "doombringer", "weaver"]
        },
        "twilight_spire": {
          "luminite": 100,
          "therium": 50,
          "supply": 0,
          "time": 60,
          "produces": ["shadowflyer", "spriggan"]
        },
        "shadowcleft": {
          "luminite": 150,
          "therium": 100,
          "supply": 0,
          "time": 70,
          "upgrades": ["soulforge_ascendance", "demonhoof_tremors"]
        },
        "ritual_chamber": {
          "luminite": 100,
          "therium": 150,
          "supply": 0,
          "time": 60,
          "upgrades": ["flame_on", "sanguine_surge", "reapers_rush"]
        },
        "shroudstone": {
          "luminite": 25,
          "therium": 100,
          "supply": 0,
          "time": 40
        }        
      }
    },
    "celestials": {
      "name": "celestials",
      "workers": {
        "name": "prism",
        "rpm": {
          "luminite": 75,
          "therium": 150
        },
        "maxActive": 100
      },
      "units": {
        "prism": {
          "luminite": 125,
          "therium": 0,
          "supply": 3,
          "time": 30
        },
        "argent": {
          "luminite": 100,
          "therium": 0,
          "supply": 2,
          "time": 26
        },
        "kri": {
          "luminite": 100,
          "therium": 25,
          "supply": 2,
          "time": 28
        }
      },
      "upgrades": {
        "photocapaciters": {
          "luminite": 100,
          "therium": 100,
          "supply": 0,
          "time": 60
        },
        "longshotmodule": {
          "luminite": 100,
          "therium": 100,
          "supply": 0,
          "time": 60
        }
      },
      "buildings": {
        "arcship": {
          "luminite": 250,
          "therium": 0,
          "supply": 0,
          "time": 60
          "produces": [
            "prism"
      ]
        }
        "creation_chamber": {
          "luminite": 150,
          "therium": 0,
          "supply": 0,
          "time": 40, 
          "produces": [
                "argent"
                "kri"
          ]
        }
      }
    }
  }
}