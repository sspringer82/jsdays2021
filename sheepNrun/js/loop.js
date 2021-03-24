class Loop {
  constructor(context, player, background, platformCollection) {
    this.context = context;
    this.player = player;
    this.background = background;
    this.platformCollection = platformCollection;
    this.isMoving = false;
  }

  toggleMoving() {
    if (
      (this.isMoving && this.player.currentState === Player.jump) ||
      this.player.isDead
    ) {
      return;
    }
    this.isMoving = !this.isMoving;
    this.player.setIsMoving(this.isMoving);
  }

  update(timestamp) {
    this.player.update(timestamp);
    if (this.isMoving) {
      this.platformCollection.update(timestamp);
    }
    if (!this.player.isDead && this.isPlayerDead()) {
      this.toggleMoving();
      this.player.die();
    }
  }

  isPlayerDead() {
    const isPlayerInGap = this.platformCollection.platforms
      .filter((platform) => platform instanceof Gap)
      .some(
        (gap) =>
          gap.x <= this.player.x &&
          gap.x + gap.width >= this.player.x + this.player.width,
      );
    return isPlayerInGap && this.player.currentState !== Player.jump;
  }

  render() {
    this.background.render(
      this.context.canvas.width,
      this.context.canvas.height,
    );
    this.platformCollection.render();
    this.player.render();
  }

  step(timestamp) {
    this.update(timestamp);
    this.render();
    requestAnimationFrame(this.step.bind(this));
  }
}
