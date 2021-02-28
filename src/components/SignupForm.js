import { Component } from 'react';

const Sub = {
    FREE: 'free',
    PRO: 'pro',
    PREMIUM: 'premium',
}

export class SignupForm extends Component {
    state = {
        email: '',
        password: '',
        agreed: false,
        age: '',
        sub: ''
    }

    onChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    onChangeSubPick = e => {
        const { value } = e.target;
        this.setState({ sub: value })
    }

    onChangeAgePick = e => {
        const { value } = e.target;
        this.setState({ age: value })
    }

    onAgreedChange = e => {
        const { checked } = e.target;
        this.setState({ agreed: checked })

        console.log(checked);
    }

    onSubmit = e => {
        e.preventDefault();

        console.log('submit!');
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <label>Email
                    <input
                        type="email"
                        value={this.state.email}
                        onChange={this.onChange}
                        name="email"
                    />
                </label>
                <br />
                <label>Password
                    <input
                        type="password"
                        value={this.state.password}
                        onChange={this.onChange}
                        name="password"
                    />
                </label>
                <br />
                <div role="group">
                    <label>
                        <input
                            type="radio"
                            value={Sub.FREE}
                            checked={Sub.FREE === this.state.sub}
                            onChange={this.onChangeSubPick} />
                        Free
                    </label>
                    <label>
                        <input
                            type="radio"
                            value={Sub.PRO}
                            checked={Sub.PRO === this.state.sub}
                            onChange={this.onChangeSubPick} />
                        Pro
                    </label>
                    <label>
                        <input
                            type="radio"
                            value={Sub.PREMIUM}
                            checked={Sub.PREMIUM === this.state.sub}
                            onChange={this.onChangeSubPick} />
                        Premium
                    </label>
                </div>
                <br />
                <label>Соглашаюсь со всем!
                    <input
                        type="checkbox"
                        checked={this.state.agreed}
                        onChange={this.onAgreedChange}
                        name="password"
                    />
                </label>
                <br />
                <label>
                    Choose your age
                    <select
                        name="age"
                        value={this.state.age}
                        onChange={this.onChangeAgePick}>
                            <option value="" disabled>...</option>
                            <option value="18-25">18-25</option>
                            <option value="26-35">26-35</option>
                            <option value="36+">36+</option>
                        </select>
                </label>
                <br />
                <button
                    disabled={!this.state.agreed}
                    type="submit"
                >Зарегистрироваться как {this.state.email}</button>
            </form>
        );
    }
}