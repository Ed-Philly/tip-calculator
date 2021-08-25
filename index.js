let billInput, tipTotal, numPeopleInput, billTotal;

billInput = document.getElementById("bill-input");
billTotal = document.getElementById("bill-split");
numPeopleInput = document.getElementById("num-people-input");
tipTotal = document.getElementById("tip-split");

let buttonSelectors = document.querySelectorAll(".selectors");

buttonSelectors.forEach((btn) => {
  btn.addEventListener("click", calcultateBill);
});

function calcultateBill(event) {
  let tipPercent = event.target.dataset.val;

  if (tipPercent == 0) {
    let input = document.createElement("input");
    input.setAttribute("type", "number");
    input.setAttribute("id", "custom-input");

    event.target.replaceWith(input);

    document.getElementById("custom-input").onchange = function (event) {
      evaluate(event.target.value);
    };

    return;
  }

  evaluate(tipPercent);
}

function evaluate(tipPercent) {
  bill = billInput.value;

  numPeople = numPeopleInput.value;

  if (numPeople <= 0) {
    document.getElementById("no-value").style.display = "block";
    document.getElementById("num-people-input").style.border =
      "2px solid orange";
    return;
  }

  if (numPeople > 0) {
    document.getElementById("no-value").style.display = "none";
    document.getElementById("num-people-input").style.border = "none";
  }

  let totalTip = (tipPercent / 100) * bill;
  let totalBill = (+bill + totalTip) / numPeople;

  tipTotal.textContent = "$" + totalTip.toFixed(2);
  billTotal.textContent = "$" + totalBill.toFixed(2);
}

let resetBtn = document.querySelector(".btn-reset");

resetBtn.addEventListener("click", function () {
  billInput.value = "";
  numPeopleInput.value = "";
  billTotal.textContent = "$0.00";
  tipTotal.textContent = "$0.00";

  let btnReplace = document.createElement("button");
  btnReplace.setAttribute("class", "selectors btn-custom");
  btnReplace.setAttribute("data-val", "0");
  btnReplace.textContent = "Custom";
  let currentElem = document.getElementById("custom-input");

  currentElem.replaceWith(btnReplace);
});
