const APIUrl = "https://api.adviceslip.com/advice";
const getAdviceButton = document.querySelector(".advice-button");

const getNewAdvice = async () => {
  const response = await fetch(APIUrl);
  const JSON = await response.json();
  return JSON.slip;
};

const updateAdviceText = (adviceNumber, adviceText) => {
  document.querySelector(".advice-number").innerText = adviceNumber;
  document.querySelector(".advice-text").innerText = adviceText;
};

const newAdviceProcess = async () => {
  const { advice, id } = await getNewAdvice();
  updateAdviceText(id, `"${advice}"`);
};

const setButtonDisabled = (button) => {
  button.classList.add("disabled", "heartbeat");
  button.disabled = true;
  setTimeout(() => {
    button.disabled = false;
    button.classList.remove("disabled", "heartbeat");
  }, 1500);
};

const handleClick = (evt) => {
  newAdviceProcess();
  setButtonDisabled(evt.currentTarget);
};

getAdviceButton.addEventListener("click", handleClick);
