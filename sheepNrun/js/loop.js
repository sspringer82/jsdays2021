class Loop {
  constructor(context, player, background, platformCollection) {
    this.context = context;
    this.player = player;
    this.background = background;
    this.platformCollection = platformCollection;
  }

  update(timestamp) {
    this.player.update(timestamp);
    this.platformCollection.update(timestamp);
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
