class Button {
  constructor(text = "Incepe") {
    this.width = 50;
    this.height = 20;

    this.btn = document.createElement("button");
    this.btn.class = "btn";
    this.btn.innerText = "Incepe";
    this.btn.style.width = `${this.width}px`;
    this.btn.style.height = `${this.height}px`;
    this.btn.style.position = "fixed";


  }

  draw(ctx) {

    this.btn.style.left = `${window.innerWidth / 2 - this.width / 2}px`;
    this.btn.style.top = `${window.innerHeight * 0.6 - this.height / 2}px`;
    document.body.appendChild(this.btn);

  }

  update(deltaTime) {

    this.btn.style.left = `${window.innerWidth / 2}px`;
    this.btn.style.top = `${window.innerHeight * 0.6}px`;
    document.body.appendChild(this.btn);

  }
}
