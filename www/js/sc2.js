const config = {
    "info": {
        "id": "sc2",
        "title": "SC2 Build Calculator",
        "description": "A simple calculator to determine a production mix given a certain level of resource mining in StarCraft 2."
    },
    "races": {
        "zerg": {
            "workers": {
                "name": "Drone",
                "rpm": {
                    "mineral": 60,
                    "gas": 53.3
                },
                "maxActive": 200
            },
            "units": {
                "Baneling": {
                    "mineral": 75.0,
                    "gas": 25.0                    
                },
                "Drone": {
                    "mineral": 50.0
                },
                "Roach": {
                    "mineral": 75.0,
                    "gas": 25.0
                },
                "Zergling": {
                    "mineral": 50.0
                }
            }
        }
    }
};