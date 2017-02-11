"use strict";

const robot = require("robotjs");

class Ro {
  constructor() {
    this.skill = [];
    this.teamate = null;
    this.interval = 20;
    this.count = 1;
  }

  init() {
    console.log("Move your mouse at the position of your teamate and wait...");
    setTimeout(
      () => {
        this.teamate = robot.getMousePos();
        console.log("Move your mouse at shen wei qi fu and wait...");
      },
      5000
    );
    setTimeout(
      () => {
        this.skill.push(robot.getMousePos());
        console.log("Move your mouse at sa shui and wait...");
      },
      10000
    );
    setTimeout(
      () => {
        this.skill.push(robot.getMousePos());
        console.log("Init Done.");
        this.run();
      },
      15000
    );
  }

  runSingle() {
    console.log("==========  start  " + this.count + "  ==========");
    setTimeout(
      () => {
        robot.moveMouse(this.teamate.x, this.teamate.y);
        robot.mouseClick();
      },
      1000
    );
    setTimeout(
      () => {
        robot.moveMouse(this.skill[0].x, this.skill[0].y);
        robot.mouseClick();
        console.log("shen wei qi fu");
      },
      2000
    );
    setTimeout(
      () => {
        robot.moveMouse(this.teamate.x, this.teamate.y);
        robot.mouseClick();
      },
      7000
    );
    setTimeout(
      () => {
        robot.moveMouse(this.skill[1].x, this.skill[1].y);
        robot.mouseClick();
        console.log("sa shui");
        console.log("==========  end    " + this.count++ + "  ==========");
      },
      8000
    );
  }

  run() {
    if (this.count === 1) {
      this.runSingle();
    }
    setTimeout(
      () => {
        this.runSingle();
        this.run();
      },
      this.interval * 1000
    );
  }
}

let app = new Ro();
app.init();
