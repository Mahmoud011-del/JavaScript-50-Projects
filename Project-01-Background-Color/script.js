const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((e) => {
      // المسؤول عن إرجاع كل زر الي لونه الأصلي
      e.style.backgroundColor = "";
    });
    const color = button.classList[0].replace("color-", "");
    document.body.style.backgroundColor = color;
    if (color === "red") {
      button.style.backgroundColor = "#8B0000";
    }
    if (color === "blue") {
      button.style.backgroundColor = "#00008B";
    }
    if (color === "orange") {
      button.style.backgroundColor = "#CC5500";
    }
    if (color === "green") {
      button.style.backgroundColor = "#006400";
    }
  });
});
