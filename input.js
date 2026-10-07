const Input = {
  buttons: {},

  init() {
    document
      .querySelectorAll("[data-action]")
      .forEach(button => {

        const action = button.dataset.action;

        button.addEventListener("touchstart", e => {
          e.preventDefault();
          this.buttons[action] = true;
        }, { passive: false });

        button.addEventListener("touchend", e => {
          e.preventDefault();
          this.buttons[action] = false;
        }, { passive: false });

        button.addEventListener("touchcancel", () => {
          this.buttons[action] = false;
        });
      });
  },

  pressed(action) {
    return this.buttons[action] === true;
  }
};

function showPage(id) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");
}

Input.init();