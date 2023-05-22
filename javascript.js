let result = document.getElementById("hasil");
const display = (a) => {
  if (a == "clear") {
    result.value = "";
  } else if (a == "del") {
    result.value = result.value.slice(0, -1);
  } else if (a == "action") {
    try {
      result.value = eval(result.value);
    } catch (error) {
      result.value = "Error";
    }
  } else {
    result.value += a;
  }
};
