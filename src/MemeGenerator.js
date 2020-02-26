import React from "react";
import "./styles.css";

class MemeGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImage: "https://i.imgflip.com/1bij.jpg",
      allMemeImgs: []
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  generateRandomImg() {}

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const memes = response.data;
        this.setState({
          allMemeImgs: memes
        });
      });
  }

  render() {
    return (
      <section>
        <form>
          <input
            type="text"
            value={this.state.topText}
            name="topText"
            placeholder="Top text"
            onChange={this.handleChange}
          />
          <input
            type="text"
            value={this.state.bottomText}
            name="bottomText"
            placeholder="Bottom text"
            onChange={this.handleChange}
          />
          <button type="button" onChange="this.generateRandomImg">
            Generate Meme
          </button>
        </form>
        <div className="meme">
          <img src={this.state.randomImage} alt="" />
          <h2 className="toptext">{this.state.topText}</h2>
          <h2 className="bottomtext">{this.state.bottomText}</h2>
        </div>
      </section>
    );
  }
}

export default MemeGenerator;
