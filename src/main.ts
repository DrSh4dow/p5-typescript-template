import "./styles.css";
import P5 from "p5";

function sketch(p5: P5) {
  p5.setup = () => {
    const canvas = p5.createCanvas(640, 640);
    canvas.parent("app");
    p5.background("white");
  };

  p5.draw = () => {
    if (p5.mouseIsPressed) {
      p5.fill(0);
    } else {
      p5.fill(255);
    }

    p5.ellipse(p5.mouseX, p5.mouseY, 40, 40);
  };
}

new P5(sketch);
