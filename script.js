window.addEventListener("DOMContentLoaded", () => {
  // color picker
  window.addEventListener("mouseup", e => {
    if (!e.target.classList.contains("js-field-color-mark")) return;
    const colorPicker = e.target.closest(".field").querySelector(".js-field-color-picker");
    const colorInput = e.target.closest(".field").querySelector(".field__input")
    colorPicker.click();

    colorPicker.addEventListener("input", (e) => {
      const color = e.target.value;
      colorInput.value = color.substring(1);
    });
  });

  // clear input
  window.addEventListener("mouseup", e => {
    if (!e.target.closest(".js-input-clear")) return;
    const input = e.target.closest(".field").querySelector(".field__input");
    input.value = "";
  });
});