import { Component } from 'react';
import './TaskEditor.css';

export class TaskEditor extends Component {

    state = {
        text: '',
    }

    onChange = e => {
        this.setState({ text: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();

        this.props.addTaskOnClick(this.state.text);
        this.setState({ text: '' });
    }

    render() {
        return (
            <form className="TaskEditor" onSubmit={this.onSubmit}>
                <label className="TaskEditor-label">
                    Text
                    <input
                        className="TaskEditor-input"
                        type="text"
                        value={this.state.text}
                        onChange={this.onChange} />
                </label>

                <button className="TaskEditor-button">Add</button>
            </form>
        )
    }
}