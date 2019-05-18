import React from "react";

class EditTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text
    };
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
          autoFocus
        />
        <button onClick={this.handleClickCancel}>キャンセル</button>
        <button onClick={this.handleSubmit}>更新</button>
      </div>
    );
  }

  handleChange = e => {
    this.setState({ text: e.currentTarget.value });
  };

  handleClickCancel = () => {
    const { onCancel, id } = this.props;
    onCancel(id, "editing", false);
  };

  handleSubmit = () => {
    const { onSubmit, id } = this.props;
    if (!this.state.text) return;
    onSubmit(id, this.state.text);
  };
}

export default EditTodo;
