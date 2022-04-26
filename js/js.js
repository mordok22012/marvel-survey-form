let mvSelect = document.querySelector("#the-best-movie");
let wvSelect = document.querySelector("#the-worst-movie");

// Select all checkboxes with the name 'movies-seen' using querySelectorAll.
var checkboxes = document.querySelectorAll(
  "input[type=checkbox][name=movies-seen]"
);
let enabledSettings = [];

// Use Array.forEach to add an event listener to each checkbox.
checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {
    if (checkbox.checked == true) {
      const option = document.createElement("option");
      const value = checkbox.value;
      option.value = value;
      option.text = value;

      const option2 = document.createElement("option");
      option2.value = value;
      option2.text = value;
      mvSelect.appendChild(option);
      wvSelect.appendChild(option2);
    }
  });
});
