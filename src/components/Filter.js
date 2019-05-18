import React from "react";

class Filter extends React.Component {
  render() {
    const { filter } = this.props;

    return (
      <select value={filter} onChange={this.handleChange}>
        <option value="all">全て</option>
        <option value="uncompleted">未完了</option>
        <option value="completed">完了済み</option>
      </select>
    );
  }

  handleChange = e => {
    this.props.onChange(e.currentTarget.value);
  };
}

export default Filter;
