document.addEventListener("ph-loaded", function () {
   const racePicker = document.getElementById("currentRacePicker");

   function updateTheme() {
      const selectedRace = racePicker.value;
      const tiles = document.querySelectorAll("x-unit-tile");

      tiles.forEach((tile) => {
         tile.classList.remove("infernals-hover", "vanguard-hover");

         tile.classList.add(`${selectedRace}-hover`);
      });
   }

   updateTheme();

   racePicker.addEventListener("change", updateTheme);
});
