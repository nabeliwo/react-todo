import React from "react";

class Todo extends React.Component {
  render() {
    const { text, completed } = this.props;

    return (
      <div>
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={this.handleChangeCompleted}
          />
          <span>{text}</span>
        </label>
        <button onClick={this.handleClickEdit}>編集</button>
        <button onClick={this.handleClickDelete}>削除</button>
      </div>
    );
  }

  handleChangeCompleted = () => {
    const { onChange, id, completed } = this.props;
    onChange(id, "completed", !completed);
  };

  handleClickEdit = () => {
    const { onChange, id, editing } = this.props;
    onChange(id, "editing", !editing);
  };

  handleClickDelete = () => {
    const { onDelete, id } = this.props;
    onDelete(id);
  };
}

export default Todo;
