const config = {
  "info": {
    "id": "stormgate",
    "title": "Stormgate Build Calculator",
    "description": "A simple calculator to determine a production mix given a certain level of resource mining in Stormgate.",
    "patchInfo": "Stormgate Early Access Patch 0.5.0 7/3/2025",
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
          "luminite": 60,
          "therium": 35
        },
        "maxActive": 100
      },
      "units": {
        "bob": {
          "luminite": 50,
          "therium": 0,
          "supply": 1,
          "time": 25
        },
        "lancer": {
          "luminite": 100,
          "therium": 0,
          "supply": 2,
          "time": 24
        },
        "scout": {
          "luminite": 50,
          "therium": 0,
          "supply": 1,
          "time": 18
        },
        "exo": {
          "luminite": 75,
          "therium": 25,
          "supply": 2,
          "time": 28
        },
        "medtech": {
          "luminite": 100,
          "therium": 50,
          "supply": 3,
          "time": 30
        },
        "graven": {
          "luminite": 125,
          "therium": 75,
          "supply": 4,
          "time": 38
        },
        "hedgehog": {
          "luminite": 150,
          "therium": 25,
          "supply": 3,
          "time": 30
        },
        "vulcan": {
          "luminite": 200,
          "therium": 100,
          "supply": 5,
          "time": 45
        },
        "atlas": {
          "luminite": 250,
          "therium": 125,
          "supply": 6,
          "time": 48
        },
        "hornet": {
          "luminite": 150,
          "therium": 75,
          "supply": 4,
          "time": 34
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
          "time": 40
        },
        "helicarrier": {
          "luminite": 375,
          "therium": 325,
          "supply": 8,
          "time": 70
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
          "time": 10,
          "defaultSupply": true
        },
        "barracks": {
          "luminite": 150,
          "therium": 0,
          "supply": 0,
          "time": 30,
          "produces": [
            "scout",
            "lancer",
            "exo",
            "medtech",
            "graven"
          ]
        },
        "mechbay": {
          "luminite": 150,
          "therium": 50,
          "supply": 0,
          "time": 30,
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
          "time": 15
        },
        "hangarbay": {
          "luminite": 150,
          "therium": 75,
          "supply": 0,
          "time": 30,
          "produces": [
            "hornet",
            "evac",
            "sentinel",
            "helicarrier"
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
          "luminite": 60,
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
          "supply": 2,
          "time": 35.5
        },
        "magmadon": {
          "luminite": 275,
          "therium": 125,
          "supply": 6,
          "time": 35.5
        },
        "hellborne": {
          "luminite": 275,
          "therium": 75,
          "supply": 6,
          "time": 35.5
        },
        "gaunt": {
          "luminite": 100,
          "therium": 25,
          "supply": 2,
          "time": 35.5
        },
        "hexen": {
          "luminite": 75,
          "therium": 100,
          "supply": 2,
          "time": 35.5
        },
        "weaver": {
          "luminite": 125,
          "therium": 175,
          "supply": 5,
          "time": 35.5
        },
        "shadowflyer": {
          "luminite": 50,
          "therium": 75,
          "supply": 2,
          "time": 35.5
        },
        "harbinger": {
          "luminite": 100,
          "therium": 100,
          "supply": 4,
          "time": 35.5

        },
        "spriggan": {
          "luminite": 50,
          "therium": 25,
          "supply": 1,
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
          "luminite": 300,
          "therium": 0,
          "supply": -15,
          "time": 75,
          "produces": ["imp"]
        },
        "meat_farm": {
          "luminite": 50,
          "therium": 0,
          "supply": -15,
          "time": 7.5,
          "defaultSupply": true
        },
        "iron_vault": {
          "luminite": 100,
          "therium": 10,
          "supply": 0,
          "time": 40,
          "produces": ["brute", "magmadon", "hellborne"]
        },
        "conclave": {
          "luminite": 100,
          "therium": 0,
          "supply": 0,
          "time": 40,
          "produces": ["gaunt", "hexen", "weaver"]
        },
        "twilight_spire": {
          "luminite": 100,
          "therium": 50,
          "supply": 0,
          "time": 40,
          "produces": ["shadowflyer", "harbinger", "spriggan"]
        },
        "shadowcleft": {
          "luminite": 150,
          "therium": 100,
          "supply": 0,
          "time": 35,
          "upgrades": ["soulforge_ascendance", "demonhoof_tremors"]
        },
        "ritual_chamber": {
          "luminite": 100,
          "therium": 150,
          "supply": 0,
          "time": 35,
          "upgrades": ["flame_on", "sanguine_surge", "reapers_rush"]
        },
        "shroudstone": {
          "luminite": 25,
          "therium": 100,
          "supply": 0,
          "time": 30
        }        
      }
    },
    "celestials": {
      "name": "celestials",
      "workers": {
        "name": "prism",
        "rpm": {
          "luminite": 150,
          "therium": 100
        },
        "maxActive": 100
      },
      "units": {
        "prism": {
          "luminite": 150,
          "therium": 0,
          "supply": 3,
          "time": 60
        },
        "argent": {
          "luminite": 100,
          "therium": 0,
          "supply": 2,
          "time": 24
        },
        "scanner": {
          "luminite": 25,
          "therium": 25,
          "supply": 1,
          "time": 20
        },
        "kri": {
          "luminite": 75,
          "therium": 25,
          "supply": 2,
          "time": 24
        },
        "cabal": {
          "luminite": 125,
          "therium": 100,
          "supply": 3,
          "time": 32
        },
        "vector": {
          "luminite": 150,
          "therium": 50,
          "supply": 3,
          "time": 32
        },
        "scythe": {
          "luminite": 200,
          "therium": 75,
          "supply": 4,
          "time": 38
        },
        "sabre": {
          "luminite": 225,
          "therium": 125,
          "supply": 6,
          "time": 45
        },
        "seraphim": {
          "luminite": 100,
          "therium": 75,
          "supply": 3,
          "time": 30
        },
        "animancer": {
          "luminite": 100,
          "therium": 150,
          "supply": 4,
          "time": 40
        },
        "archangel": {
          "luminite": 350,
          "therium": 300,
          "supply": 12,
          "time": 65
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
          "luminite": 0,
          "therium": 0,
          "supply": -300,
          "time": 60,
          "defaultSupply": true,
          "produces": ["prism"]
        },
        "power_bank": {
          "luminite": 100,
          "therium": 0,
          "supply": 0,
          "time": 10,
        },
        "creation_chamber": {
          "luminite": 150,
          "therium": 0,
          "supply": 0,
          "time": 30, 
          "produces": ["argent", "kri", "scanner", "cabal"]
        },
        "starforge": {
          "luminite": 150,
          "therium": 50,
          "supply": 0,
          "time": 30, 
          "produces": ["vector", "scythe", "saber"]
        },
        "legion_hall": {
          "luminite": 150,
          "therium": 75,
          "supply": 0,
          "time": 30, 
          "produces": ["seraphim", "animancer", "archangel"]
        },
        "link_node": {
          "luminite": 50,
          "therium": 0,
          "supply": 0,
          "time": 5, 
        }
      }
    }
  }
}