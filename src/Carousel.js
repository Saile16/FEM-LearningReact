import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handlerIndexClick = (event) => {
    this.setState({
      //esto viene de <img/> mas abajo data-index
      active: +event.target.dataset.index,
    });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;
    console.log(this.state);
    console.log(this.props);
    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            //eslint-disable-next-line
            <img
              key={photo}
              src={photo}
              data-index={index}
              onClick={this.handlerIndexClick}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
