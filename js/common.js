function updatePhoneNumber(isIncrease) {
  const phoneNumberField = document.getElementById("phone-number-field");
  const phoneNumberString = phoneNumberField.value;
  const previousPhoneNumber = parseInt(phoneNumberString);
  let newPhoneNumber;
  if (isIncrease) {
    newPhoneNumber = previousPhoneNumber + 1;
  } else {
    newPhoneNumber = previousPhoneNumber - 1;
  }
  phoneNumberField.value = newPhoneNumber;
  return newPhoneNumber;
}

function getTextElemnetValueById(elementId) {
  const phoneTotalElement = document.getElementById(elementId);
  const CurrentPhonetotalString = phoneTotalElement.innerText;
  const CurrentPhonetotal = parseInt(CurrentPhonetotalString);
  return CurrentPhonetotal;
}
function setTextElementValueById(elementId, value) {
  const subTotalElement = document.getElementById(elementId);
  subTotalElement.innerText = value;
}
function calculateSubTotal() {
  //calculate total
  const CurrentPhoneTotal = getTextElemnetValueById("phone-total");
  const currentCaseTotal = getTextElemnetValueById("case-total");

  const currentSubTotal = CurrentPhoneTotal + currentCaseTotal;
  setTextElementValueById("sub-total", currentSubTotal);

  //calculate tax
  const taxAmountstring = (currentSubTotal * 0.1).toFixed(2);
  const taxAmount = parseFloat(taxAmountstring);
  setTextElementValueById("tax-amount", taxAmount);
  const finalAmount = currentSubTotal + taxAmount;
  setTextElementValueById("final-total", finalAmount);
}

document.getElementById("check-out-btn").addEventListener("click", function () {
  alert("Is You Are a Brolux");
});
