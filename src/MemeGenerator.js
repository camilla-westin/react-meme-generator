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

    this.updateMemeText = this.updateMemeText.bind(this);
    this.generateRandomImg = this.generateRandomImg.bind(this);
  }

  updateMemeText(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  generateRandomImg(event) {
    event.preventdefault();
  }

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
        <form onSubmit={this.generateRandomImg}>
          <input
            type="text"
            value={this.state.topText}
            name="topText"
            placeholder="Top text"
            onChange={this.updateMemeText}
          />
          <input
            type="text"
            value={this.state.bottomText}
            name="bottomText"
            placeholder="Bottom text"
            onChange={this.updateMemeText}
          />
          <button type="button">
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