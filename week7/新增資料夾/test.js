class myHead extends React.Component {
  render() {
    return (
      <div
        className={"head-" + this.props.level}
        style={{ color: this.state.color }}
        onClick={this.clickHandler.bind(this)}
        onMouseOver={this.mouseOverHandler.bind(this)}
        onMouseOut={this.mouseOutHandler.bind(this)}
      >
        Hello Compont
      </div>
    );
  }
  clickHandler(e) {
    console.log("觸發點擊事件");
    console.log(this.props);
  }
  mouseOverHandle(e) {
    this.setState({ color: "blue" });
  }
  mouseOutHandle(e) {
    this.setState({ color: "red" });
  }
}
