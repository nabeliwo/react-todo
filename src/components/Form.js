import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
  }

  render() {
    const { input } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <button type="submit">追加</button>
      </form>
    );
  }

  handleChange = e => {
    this.setState({ input: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ input: "" });
    this.props.onSubmit(this.state.input);
  };
}

export default Form;
