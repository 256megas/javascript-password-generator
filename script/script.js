window.addEventListener("load", function () {
  var generateButton = document.getElementById("generateButton");
  var passwordInput = document.getElementById("passwordInput");
  var passwordRange = document.getElementById("passwordRange");
  var rangeValue = document.getElementById("rangeValue");

  passwordRange.addEventListener("input", function () {
    rangeValue.innerHTML = passwordRange.value;
  });

  generateButton.addEventListener("click", function () {
    let solution = [];
    let chars = "23456789abcdefghjklmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ";

    for (let index = 0; index < passwordRange.value; index++) {
      random = Math.floor(Math.random() * (chars.length - 0));
      solution.push(chars[random]);
    }

    //console.log(solution.join(""));
    passwordInput.value = solution.join("");
  });
});
