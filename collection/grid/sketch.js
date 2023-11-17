import React, { useRef, useEffect } from "react";
import Sketch from "react-p5";
import styles from "./space.module.scss";

const size = 70;
const grid = [];
const bullets = [];
let cols, rows;
let player;
let isSpaceKeyPressed = false;

function Node(i, j, p5) {
  this.x = i * size;
  this.y = j * size;
  this.show = () => {
    p5.noFill();
    p5.stroke(255, 255, 255, 10);
    p5.rect(this.x, this.y, size, size);
  };
}

function Bullet(x, y, p5) {
  this.x = x;
  this.y = y;
  this.speed = 5; // Speed of the bullet

  this.update = () => {
    // Move the bullet upwards
    this.y -= this.speed;

    // Check if the bullet is out of the canvas, and remove it
    if (this.y < 0) {
      const index = bullets.indexOf(this);
      if (index !== -1) {
        bullets.splice(index, 1);
      }
    }
  };

  this.show = () => {
    // Draw the bullet as a small white circle
    p5.fill(255);
    p5.noStroke();
    p5.ellipse(this.x + size / 2, this.y + size / 2, 10, 10); // Change the bullet's appearance as desired
  };
}

function Player(x, y, p5) {
  this.x = x;
  this.y = y;
  this.speed = 10; // Speed when arrow key is pressed
  this.acceleration = 0.1; // Acceleration factor
  this.velocity = 0; // Initial velocity is zero

  this.update = () => {
    // Apply acceleration only when an arrow key is pressed
    if (this.velocity !== 0) {
      this.velocity += this.acceleration;
      // Apply velocity to position
      this.x += this.velocity;
      // Constrain the player's position within the canvas boundaries
      this.x = p5.constrain(this.x, 65, p5.width - size);
      // Reduce acceleration when movement is applied
      this.acceleration *= 0.1;
    }
  };

  this.show = () => {
    // Draw the player square
    p5.fill(255);
    p5.noStroke();
    p5.rect(this.x, this.y, size, size);
  };

  this.moveLeft = () => {
    // Apply negative velocity (move left) when arrow key is pressed
    this.velocity = -this.speed;
  };

  this.moveRight = () => {
    // Apply positive velocity (move right) when arrow key is pressed
    this.velocity = this.speed;
  };

  this.stop = () => {
    // Stop the player by setting velocity to zero when arrow key is released
    this.velocity = 0;
  };
}

const SpaceInvaders = () => {
  const canvasRef = useRef();
  const p5Instance = useRef();
  const loop = useRef(true);

  const setupGrid = () => {
    let playerX, playerY;
    cols = p5Instance.current.width / size;
    rows = p5Instance.current.height / size;
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        grid.push(new Node(i, j, p5Instance.current));
      }
    }
    playerX = Math.floor(cols / 2) * size;
    playerY = (rows - 1) * size;
    player = new Player(playerX, playerY, p5Instance.current);
  };

  const setup = (p5, parentRef) => {
    p5Instance.current = p5;
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(parentRef);
    setupGrid();
  };

  const draw = () => {
    p5Instance.current.background(38, 38, 38);
    for (let i = 0; i < grid.length; i++) {
      grid[i].show();
    }

    for (let i = 0; i < bullets.length; i++) {
      bullets[i].update();
      bullets[i].show();
    }

    player.show();
    player.update();
  };

  const handleKeyPress = (event) => {
    if (event.key === "ArrowLeft") {
      // Move left
      player.moveLeft();
    } else if (event.key === "ArrowRight") {
      // Move right
      player.moveRight();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === " ") {
      // Set the flag to true when the spacebar is pressed
      if (!isSpaceKeyPressed) {
        isSpaceKeyPressed = true;

        // Create a new bullet at the player's position when the spacebar is clicked
        const bulletX = player.x + size / 2; // Adjust the position as needed
        const bulletY = player.y;
        bullets.push(new Bullet(bulletX, bulletY, p5Instance.current));
      }
    }
  };

  const handleKeyUp = (event) => {
    if (event.key === " ") {
      // Set the flag to false when the spacebar is released
      isSpaceKeyPressed = false;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (p5Instance.current) {
        grid.length = 0;
        p5Instance.current.resizeCanvas(
          p5Instance.current.windowWidth,
          p5Instance.current.windowHeight
        );
        setupGrid();
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <div ref={canvasRef} className={styles.processing}>
      <Sketch setup={setup} draw={draw} />
    </div>
  );
};

export default SpaceInvaders;
