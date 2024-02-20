const config = {
  "info": {
    "id": "stormgate",
    "title": "Stormgate Build Calculator",
    "description": "A simple calculator to determine a production mix given a certain level of resource mining in Stormgate.",
    "patchInfo": "Stormgate Elephant Beta Balance Patch 2/13/2024",
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
          "brute": {
              "name": "Brute",
              "supply": 3,
              "luminite": 150,
              "therium": 0,
              "animus": null,
              "buildtime": 0.5,
              "rechargeTime": 30,
              "armor": 10,
              "passive": [
                  "Fiendish Rebirth",
                  "Soulforge Ascendance"
              ],
              "attributes": [
                  "Biological",
                  "Heavy"
              ],
              "speed": 3.8,
              "attacks": {
                  "fleshrender": {
                      "attackname": "Fleshrender",
                      "groundAttack": 30,
                      "airAttack": null,
                      "bonus": null,
                      "groundDPS": 16.67,
                      "airDPS": null,
                      "bonusDPS": null,
                      "cooldown": 1.8,
                      "range": 0.5,
                      "effect": 0
                  }
              },
              "health": {
                  "shroudhp": 45,
                  "hitpoints": 190
              }
          },
          "doombringer": {
              "name": "Doombringer",
              "supply": 4,
              "luminite": 100,
              "therium": 150,
              "animus": null,
              "buildtime": 0.5,
              "rechargeTime": 30,
              "armor": 10,
              "passive": [
                  "Shroud Generator"
              ],
              "attributes": [
                  "Biological",
                  "Heavy"
              ],
              "speed": 5,
              "attacks": {},
              "health": {
                  "shroudhp": 65,
                  "hitpoints": 260
              }
          },
          "enflamedImp": {
              "name": "Enflamed Imp",
              "supply": 1,
              "luminite": null,
              "therium": 25,
              "animus": null,
              "buildtime": 1,
              "rechargeTime": null,
              "armor": 0,
              "passive": 0,
              "attributes": [
                  "Biological",
                  "Light"
              ],
              "speed": 5.5,
              "attacks": {},
              "health": {
                  "shroudhp": 20,
                  "hitpoints": 80
              }
          },
          "felhog": {
              "name": "Felhog",
              "supply": null,
              "luminite": null,
              "therium": null,
              "animus": null,
              "buildtime": null,
              "rechargeTime": null,
              "armor": 0,
              "passive": [
                  "Fel-Bacon Provisions"
              ],
              "attributes": [
                  "Biological",
                  "Light"
              ],
              "speed": 4,
              "attacks": {
                  "goringTusks": {
                      "attackname": "Goring Tusks",
                      "groundAttack": 6,
                      "airAttack": null,
                      "bonus": null,
                      "groundDPS": 10,
                      "airDPS": null,
                      "bonusDPS": null,
                      "cooldown": 0.6,
                      "range": 0.1,
                      "effect": 0
                  }
              },
              "health": {
                  "shroudhp": 15,
                  "hitpoints": 60
              }
          },
          "fiend": {
              "name": "Fiend",
              "supply": 1,
              "luminite": null,
              "therium": null,
              "animus": null,
              "buildtime": null,
              "rechargeTime": null,
              "armor": 0,
              "passive": [
                  "Pathogen Nullification",
                  "Unstable Mass"
              ],
              "attributes": [
                  "Biological",
                  "Light"
              ],
              "speed": 7,
              "attacks": {
                  "ravenousMaw": {
                      "attackname": "Ravenous Maw",
                      "groundAttack": 8,
                      "airAttack": null,
                      "bonus": null,
                      "groundDPS": 16,
                      "airDPS": null,
                      "bonusDPS": null,
                      "cooldown": 0.5,
                      "range": 0.1,
                      "effect": 0
                  }
              },
              "health": {
                  "shroudhp": 15,
                  "hitpoints": 60
              }
          },
          "flayedDragon": {
              "name": "Flayed Dragon",
              "supply": null,
              "luminite": 500,
              "therium": 500,
              "animus": 300,
              "buildtime": null,
              "rechargeTime": 300,
              "armor": 20,
              "passive": [
                  "Parasitic Soul",
                  "Plague Breath"
              ],
              "attributes": [
                  "Biological",
                  "Heavy"
              ],
              "speed": 6,
              "attacks": {
                  "infectiousIchor": {
                      "attackname": "Infectious Ichor",
                      "groundAttack": 90,
                      "airAttack": 90,
                      "bonus": null,
                      "groundDPS": 40.91,
                      "airDPS": 40.91,
                      "bonusDPS": null,
                      "cooldown": 2.2,
                      "range": 6,
                      "effect": [
                          "Infest"
                      ]
                  }
              },
              "health": {
                  "shroudhp": 150,
                  "hitpoints": 600
              }
          },
          "gaunt": {
              "name": "Gaunt",
              "supply": 1,
              "luminite": 50,
              "therium": 15,
              "animus": null,
              "buildtime": 0.5,
              "rechargeTime": 30,
              "armor": 0,
              "passive": [
                  "Bouncing Bone Axes",
                  "Plague Axe"
              ],
              "attributes": [
                  "Biological",
                  "Light"
              ],
              "speed": 4,
              "attacks": {
                  "boneAxes": {
                      "attackname": "Bone Axes",
                      "groundAttack": 6,
                      "airAttack": 6,
                      "bonus": null,
                      "groundDPS": 6,
                      "airDPS": 6,
                      "bonusDPS": null,
                      "cooldown": 1,
                      "range": 5.5,
                      "effect": [
                          "Infest"
                      ]
                  }
              },
              "health": {
                  "shroudhp": 20,
                  "hitpoints": 80
              }
          },
          "hellborne": {
              "name": "Hellborne",
              "supply": 8,
              "luminite": 250,
              "therium": 225,
              "animus": null,
              "buildtime": 0.5,
              "rechargeTime": 30,
              "armor": 10,
              "passive": [
                  "Shatter"
              ],
              "attributes": [
                  "Biological",
                  "Heavy"
              ],
              "speed": 3.5,
              "attacks": {
                  "focusedHatred": {
                      "attackname": "Focused Hatred",
                      "groundAttack": 50,
                      "airAttack": null,
                      "bonus": {
                          "damage": 50,
                          "against": [
                              "Structure"
                          ]
                      },
                      "groundDPS": 12.5,
                      "airDPS": null,
                      "bonusDPS": 25,
                      "cooldown": 4,
                      "range": 14,
                      "effect": 0
                  }
              },
              "health": {
                  "shroudhp": 65,
                  "hitpoints": 260
              }
          },
          "imp": {
              "name": "Imp",
              "supply": 1,
              "luminite": 50,
              "therium": 0,
              "animus": null,
              "buildtime": 0.5,
              "rechargeTime": 30,
              "armor": 0,
              "passive": 0,
              "attributes": [
                  "Biological",
                  "Light"
              ],
              "speed": 3.5,
              "attacks": {
                  "claw": {
                      "attackname": "Claw",
                      "groundAttack": 8,
                      "airAttack": null,
                      "bonus": null,
                      "groundDPS": 5.33,
                      "airDPS": null,
                      "bonusDPS": null,
                      "cooldown": 1.5,
                      "range": 0.1,
                      "effect": 0
                  }
              },
              "health": {
                  "shroudhp": 20,
                  "hitpoints": 80
              }
          },
          "magmadon": {
              "name": "Magmadon",
              "supply": 6,
              "luminite": 250,
              "therium": 150,
              "animus": null,
              "buildtime": 0.5,
              "rechargeTime": 30,
              "armor": 20,
              "passive": [
                  "Demonhoof Tremors"
              ],
              "attributes": [
                  "Biological",
                  "Heavy"
              ],
              "speed": 3.5,
              "attacks": {
                  "surgeSmack": {
                      "attackname": "Surge Smack",
                      "groundAttack": 30,
                      "airAttack": null,
                      "bonus": null,
                      "groundDPS": 14.29,
                      "airDPS": null,
                      "bonusDPS": null,
                      "cooldown": 2.1,
                      "range": 0.5,
                      "effect": 0
                  }
              },
              "health": {
                  "shroudhp": 120,
                  "hitpoints": 480
              }
          },
          "shadowflyer": {
              "name": "Shadowflyer",
              "supply": 1,
              "luminite": 25,
              "therium": 50,
              "animus": null,
              "buildtime": 0.5,
              "rechargeTime": 30,
              "armor": 0,
              "passive": 0,
              "attributes": [
                  "Biological",
                  "Light"
              ],
              "speed": 6,
              "attacks": {},
              "health": {
                  "shroudhp": 15,
                  "hitpoints": 60
              }
          },
          "spriggan": {
              "name": "Spriggan",
              "supply": 3,
              "luminite": 75,
              "therium": 75,
              "animus": null,
              "buildtime": 0.5,
              "rechargeTime": 30,
              "armor": 0,
              "passive": [
                  "Binding Saliva (ability)",
                  "Undying Flames"
              ],
              "attributes": [
                  "Biological",
                  "Light"
              ],
              "speed": 6,
              "attacks": {
                  "undyingFlames": {
                      "attackname": "Undying Flames",
                      "groundAttack": 5,
                      "airAttack": 5,
                      "bonus": null,
                      "groundDPS": 3.57,
                      "airDPS": 3.57,
                      "bonusDPS": null,
                      "cooldown": 1.4,
                      "range": 4,
                      "effect": [
                          "Binding Saliva (effect)"
                      ]
                  }
              },
              "health": {
                  "shroudhp": 50,
                  "hitpoints": 200
              }
          },
          "weaver": {
              "name": "Weaver",
              "supply": 4,
              "luminite": 100,
              "therium": 150,
              "animus": null,
              "buildtime": 0.5,
              "rechargeTime": 30,
              "armor": 0,
              "passive": [
                  "Detector",
                  "High Sight",
                  "Soul Ripper"
              ],
              "attributes": [
                  "Biological",
                  "Light"
              ],
              "speed": 2,
              "attacks": {
                  "serratedSoulKnuckles": {
                      "attackname": "Serrated Soul Knuckles",
                      "groundAttack": null,
                      "airAttack": null,
                      "bonus": null,
                      "groundDPS": null,
                      "airDPS": null,
                      "bonusDPS": null,
                      "cooldown": 2,
                      "range": 2,
                      "effect": 0
                  }
              },
              "health": {
                  "shroudhp": 180,
                  "hitpoints": 720
              }
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
        "atlas": {
            "name": "Atlas",
            "supply": 6,
            "luminite": 250,
            "therium": 125,
            "buildtime": 48,
            "armor": 10,
            "passive": [
                "Purification Ordnance",
                "Plasma Arc Infusion"
            ],
            "attributes": [
                "Heavy",
                "Mechanical"
            ],
            "speed": 3,
            "attacks": {
                "bfg": {
                    "attackname": "BFG",
                    "groundAttack": 80,
                    "airAttack": null,
                    "bonus": {
                        "damage": 35,
                        "against": [
                            "Heavy",
                            "Structure"
                        ]
                    },
                    "groundDPS": 17.78,
                    "airDPS": null,
                    "bonusDPS": 25.56,
                    "cooldown": 4.5,
                    "range": 16,
                    "effect": 0
                },
                "lightGuns": {
                    "attackname": "LIGHT Guns",
                    "groundAttack": 15,
                    "airAttack": null,
                    "bonus": null,
                    "groundDPS": 30,
                    "airDPS": null,
                    "bonusDPS": null,
                    "cooldown": 0.5,
                    "range": 4,
                    "effect": 0
                }
            },
            "health": {
                "hitpoints": 300
            }
        },
        "bob": {
            "name": "B.O.B.",
            "supply": 1,
            "luminite": 50,
            "therium": 0,
            "buildtime": 20,
            "armor": 0,
            "passive": 0,
            "attributes": [
                "Light",
                "Mechanical"
            ],
            "speed": 3.5,
            "attacks": {
                "servofists": {
                    "attackname": "Servo-Fists",
                    "groundAttack": 8,
                    "airAttack": null,
                    "bonus": null,
                    "groundDPS": 5.33,
                    "airDPS": null,
                    "bonusDPS": null,
                    "cooldown": 1.5,
                    "range": 0.1,
                    "effect": 0
                }
            },
            "health": {
                "hitpoints": 130
            }
        },
        "evac": {
            "name": "Evac",
            "supply": 3,
            "luminite": 100,
            "therium": 50,
            "buildtime": 32,
            "armor": 10,
            "passive": [
                "Skysprint Retrofit"
            ],
            "attributes": [
                "Heavy",
                "Mechanical"
            ],
            "speed": 5,
            "attacks": {},
            "health": {
                "hitpoints": 200
            }
        },
        "exo": {
            "name": "Exo",
            "supply": 2,
            "luminite": 125,
            "therium": 25,
            "buildtime": 28,
            "armor": 0,
            "passive": [
                "Quickdraw Hustle"
            ],
            "attributes": [
                "Biological",
                "Light"
            ],
            "speed": 4,
            "attacks": {
                "br15Rifle": {
                    "attackname": "BR-15 Rifle",
                    "groundAttack": 19,
                    "airAttack": 19,
                    "bonus": null,
                    "groundDPS": 14.62,
                    "airDPS": 14.62,
                    "bonusDPS": null,
                    "cooldown": 1.3,
                    "range": 7,
                    "effect": 0
                }
            },
            "health": {
                "hitpoints": 150
            }
        },
        "hedgehog": {
            "name": "Hedgehog",
            "supply": 3,
            "luminite": 150,
            "therium": 25,
            "buildtime": 30,
            "armor": 5,
            "passive": [
                "Transonic Boosters",
                "Rocket Ammo"
            ],
            "attributes": [
                "Light",
                "Mechanical"
            ],
            "speed": 6.8,
            "attacks": {
                "uam22QuillRockets": {
                    "attackname": "UAM-22 Quill Rockets",
                    "groundAttack": null,
                    "airAttack": 10,
                    "bonus": null,
                    "groundDPS": null,
                    "airDPS": 50,
                    "bonusDPS": null,
                    "cooldown": 0.2,
                    "range": 10,
                    "effect": 0
                }
            },
            "health": {
                "hitpoints": 230
            }
        },
        "hornet": {
            "name": "Hornet",
            "supply": 3,
            "luminite": 150,
            "therium": 75,
            "buildtime": 34,
            "armor": 5,
            "passive": [
                "Predator State"
            ],
            "attributes": [
                "Light",
                "Mechanical"
            ],
            "speed": 6.9,
            "attacks": {
                "reclaimerStingers": {
                    "attackname": "Reclaimer Stingers",
                    "groundAttack": 8,
                    "airAttack": null,
                    "bonus": null,
                    "groundDPS": 20,
                    "airDPS": null,
                    "bonusDPS": null,
                    "cooldown": 0.4,
                    "range": 4,
                    "effect": 0
                },
                "yellowjacketStringers": {
                    "attackname": "Yellowjacket Stringers",
                    "groundAttack": null,
                    "airAttack": 18,
                    "bonus": {
                        "damage": 9,
                        "against": [
                            "Light"
                        ]
                    },
                    "groundDPS": null,
                    "airDPS": 45,
                    "bonusDPS": 67.5,
                    "cooldown": 0.4,
                    "range": 6,
                    "effect": 0
                }
            },
            "health": {
                "hitpoints": 180
            }
        },
        "lancer": {
            "name": "Lancer",
            "supply": 2,
            "luminite": 100,
            "therium": 0,
            "buildtime": 24,
            "armor": 5,
            "passive": [
                "Attenuation Armor",
                "Extended Gleaming Lance",
                "Kinetic Redirection"
            ],
            "attributes": [
                "Biological",
                "Heavy"
            ],
            "speed": 4.5,
            "attacks": {
                "foeSplitterBlade": {
                    "attackname": "Foe Splitter Blade",
                    "groundAttack": 10,
                    "airAttack": null,
                    "bonus": {
                        "damage": 5,
                        "against": [
                            "Structure"
                        ]
                    },
                    "groundDPS": 6.67,
                    "airDPS": null,
                    "bonusDPS": 10,
                    "cooldown": 1.5,
                    "range": 2,
                    "effect": 0
                }
            },
            "health": {
                "hitpoints": 240
            }
        },
        "medtech": {
            "name": "MedTech",
            "supply": 3,
            "luminite": 100,
            "therium": 50,
            "buildtime": 30,
            "armor": 5,
            "passive": 0,
            "attributes": [
                "Biological",
                "Heavy",
                "Mechanical"
            ],
            "speed": 4,
            "attacks": {
                "pulseGauntlets": {
                    "attackname": "Pulse Gauntlets",
                    "groundAttack": 5,
                    "airAttack": 5,
                    "bonus": null,
                    "groundDPS": 2.5,
                    "airDPS": 2.5,
                    "bonusDPS": null,
                    "cooldown": 2,
                    "range": 8.5,
                    "effect": 0
                }
            },
            "health": {
                "hitpoints": 200
            }
        },
        "scout": {
            "name": "S.C.O.U.T.",
            "supply": 1,
            "luminite": 50,
            "therium": 0,
            "buildtime": 13,
            "armor": 0,
            "passive": [
                "Pupper Sense",
                "Vorillium Claws",
                "Gear Grind"
            ],
            "attributes": [
                "Biological",
                "Light",
                "Mechanical"
            ],
            "speed": 7,
            "attacks": {
                "metallicCruncher": {
                    "attackname": "Metallic Cruncher",
                    "groundAttack": 8,
                    "airAttack": null,
                    "bonus": null,
                    "groundDPS": 5.71,
                    "airDPS": null,
                    "bonusDPS": null,
                    "cooldown": 1.4,
                    "range": 0.1,
                    "effect": 0
                }
            },
            "health": {
                "hitpoints": 120
            }
        },
        "sensorDrone": {
            "name": "Sensor Drone",
            "supply": null,
            "luminite": null,
            "therium": null,
            "buildtime": 0,
            "armor": 0,
            "passive": 0,
            "attributes": [
                "Light",
                "Mechanical"
            ],
            "speed": 0,
            "attacks": {},
            "health": {
                "hitpoints": 50
            }
        },
        "sentinel": {
            "name": "Sentinel",
            "supply": 4,
            "luminite": 75,
            "therium": 125,
            "buildtime": 40,
            "armor": 5,
            "passive": [
                "Hastebot Dispersal Aura",
                "Photonic Tracker"
            ],
            "attributes": [
                "Light",
                "Mechanical"
            ],
            "speed": 5,
            "attacks": {
                "phaseDisruptor": {
                    "attackname": "Phase Disruptor",
                    "groundAttack": 10,
                    "airAttack": 10,
                    "bonus": null,
                    "groundDPS": 5,
                    "airDPS": 5,
                    "bonusDPS": null,
                    "cooldown": 2,
                    "range": 7,
                    "effect": 0
                }
            },
            "health": {
                "hitpoints": 200
            }
        },
        "skymine": {
            "name": "Skymine",
            "supply": null,
            "luminite": 15,
            "therium": null,
            "buildtime": 0,
            "armor": 0,
            "passive": [
                "Detonation Sequence"
            ],
            "attributes": [
                "Light",
                "Mechanical"
            ],
            "speed": 0,
            "attacks": {
                "thunderburstDetonator": {
                    "attackname": "Thunderburst Detonator",
                    "groundAttack": null,
                    "airAttack": 50,
                    "bonus": null,
                    "groundDPS": null,
                    "airDPS": 50,
                    "bonusDPS": null,
                    "cooldown": 1,
                    "range": 4,
                    "effect": 0
                }
            },
            "health": {
                "hitpoints": 25
            }
        },
        "vulcan": {
            "name": "Vulcan",
            "supply": 5,
            "luminite": 200,
            "therium": 125,
            "buildtime": 45,
            "armor": 10,
            "passive": [
                "Vulcan Barrage",
                "Devastation Unleashed"
            ],
            "attributes": [
                "Heavy",
                "Mechanical"
            ],
            "speed": 3.5,
            "attacks": {
                "x134Minigun": {
                    "attackname": "X134 Minigun",
                    "groundAttack": 4,
                    "airAttack": null,
                    "bonus": {
                        "damage": 2,
                        "against": [
                            "Light"
                        ]
                    },
                    "groundDPS": 20,
                    "airDPS": null,
                    "bonusDPS": 30,
                    "cooldown": 0.2,
                    "range": 8,
                    "effect": 0
                }
            },
            "health": {
                "hitpoints": 400
            }
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