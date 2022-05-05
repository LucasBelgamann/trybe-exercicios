const verificaValor = (value1, value2) => {
    if (value1 === "" || value2 === "") {
      throw new Error("Um campo não foi preenchido!");
    }
    if (isNaN(value1) || isNaN(value2)) {
      throw new Error("Os valores tem que ser numero!");
    }
  };

  function sum() {
    try {
      const value1 = document.getElementById("value1").value;
      const value2 = document.getElementById("value2").value;
      verificaValor(value1, value2);
      const result = parseInt(value1) + parseInt(value2);
      document.getElementById("result").innerHTML = `Resultado: ${result}`;
    } catch (error) {
      document.getElementById(
        "result"
      ).innerHTML = `Resultado: ${error.message}`;
    } finally {
      document.getElementById("value1").value = "";
      document.getElementById("value2").value = "";
    }
  }
  window.onload = () => {
    const button = document.getElementById("button");
    button.addEventListener("click", sum);
  };