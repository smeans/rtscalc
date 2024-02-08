document.addEventListener("ph-loaded", function () {
   const racePicker = document.getElementById("currentRacePicker");

   function updateTheme() {
      const selectedRace = racePicker.value;
      const tiles = document.querySelectorAll("x-unit-tile");
      const race = document.getElementById("currentRacePicker");
      const reset = document.getElementById("resetButton");

      race.classList.remove("infernals-pick", "vanguard-pick");
      race.classList.add(`${selectedRace}-pick`);

      reset.classList.remove("infernals-reset", "vanguard-reset");
      reset.classList.add(`${selectedRace}-reset`);

      tiles.forEach((tile) => {
         tile.classList.remove("infernals-hover", "vanguard-hover");

         tile.classList.add(`${selectedRace}-hover`);
      });
   }

   updateTheme();

   racePicker.addEventListener("change", updateTheme);
});
