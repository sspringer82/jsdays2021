export default class Player {
  static idle = 'idle';
  static run = 'run';
  static jump = 'jump';
  static die = 'die';

  constructor(context) {
    this.context = context;
    this.images = {
      [Player.idle]: { image: new Image(), steps: 4 },
      [Player.run]: { image: new Image(), steps: 6 },
      [Player.jump]: { image: new Image(), steps: 8 },
    };

    this.audios = {
      [Player.jump]: new Audio(),
      [Player.die]: new Audio(),
    };

    this.currentState = Player.idle;
    this.currentAnimationStep = 0;
    this.isMoving = false;

    this.x = 0;
    this.y = 0;
    this.sourceHeight = 464;
    this.sourceWidth = 325;
    this.height = this.sourceHeight / 3;
    this.width = this.sourceWidth / 3;

    this.lastUpdate = 0;
    this.updateEvery = 200;
    this.isDead = false;
  }

  die() {
    this.audios[Player.die].currentTime = 0;
    this.audios[Player.die].play();
    this.isDead = true;
    this.updateEvery = 30;
  }

  init() {
    const images = Object.entries(this.images);

    this.images[Player.idle].image.src = 'assets/Black_Sheep_Idle.png';
    this.images[Player.run].image.src = 'assets/Black_Sheep_Run.png';
    this.images[Player.jump].image.src = 'assets/Black_Sheep_Jump.png';
    this.audios[Player.jump].src = 'audio/jump3.wav';
    this.audios[Player.die].src = 'audio/drop.wav';

    return Promise.all([
      new Promise((resolve) =>
        this.images[Player.idle].image.addEventListener('load', () =>
          resolve(),
        ),
      ),
      new Promise((resolve) =>
        this.images[Player.run].image.addEventListener('load', () => resolve()),
      ),
      new Promise((resolve) =>
        this.images[Player.jump].image.addEventListener('load', () =>
          resolve(),
        ),
      ),
      new Promise((resolve) =>
        this.audios[Player.jump].addEventListener('canplaythrough', () =>
          resolve(),
        ),
      ),
      new Promise((resolve) =>
        this.audios[Player.die].addEventListener('canplaythrough', () =>
          resolve(),
        ),
      ),
    ]);
  }

  jump() {
    if (this.currentState === Player.run) {
      this.audios[Player.jump].currentTime = 0;
      this.audios[Player.jump].play();
      this.currentState = Player.jump;
      this.updateEvery = 100;
      this.y = this.y - 55;
      this.currentAnimationStep = 0;
    }
  }

  setIsMoving(isMoving) {
    this.currentAnimationStep = 0;
    if (isMoving) {
      this.currentState = Player.run;
      this.updateEvery = 100;
    } else {
      this.currentState = Player.idle;
      this.updateEvery = 200;
    }
  }

  advanceAnimationStep() {
    const maxStep = this.images[this.currentState].steps;
    this.currentAnimationStep =
      this.currentAnimationStep + 1 < maxStep
        ? this.currentAnimationStep + 1
        : 0;
  }

  shouldUpdate(timestamp) {
    return timestamp - this.lastUpdate >= this.updateEvery;
  }

  update(timestamp) {
    if (this.shouldUpdate(timestamp)) {
      this.advanceAnimationStep();
      if (
        this.currentState === Player.jump &&
        this.currentAnimationStep === 0
      ) {
        this.currentState = Player.run;
        this.y = this.y + 55;
      }
      if (this.isDead) {
        this.y = this.y * 1.0981;
        this.x = this.x + 3;
      }
      this.lastUpdate = timestamp;
    }
  }

  render() {
    const image = this.images[this.currentState];
    const sourceStartX = this.currentAnimationStep * this.sourceWidth;
    this.context.drawImage(
      image.image,
      sourceStartX,
      0,
      this.sourceWidth,
      this.sourceHeight,
      this.x,
      this.y,
      this.width,
      this.height,
    );
  }
}
