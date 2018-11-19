/**
 * @author Lindong Ding
 * @date 2018/11/19
 * @desc 文件描述
 * @param {Object} [title]  - 参数说明
 * @example 调用示例
 */

import React, { Component } from 'react'


// example 1
class NameForm extends Component {
    constructor(props){
        super(props);
        this.state = {value:''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            value:event.target.value
        })
    }

    handleSubmit(event){
        alert('A name was submit:'+this.state.value);
        event.preventDefault()
    }


    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}


// example 2
class EssayForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: 'Please write an essay about your favorite DOM element'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            value:event.target.value
        })
    }
    handleSubmit(event){
        alert('An essay was submitted: '+this.state.value);
        event.preventDefault();
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Essay:
                    <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

// example 3
class FlavorForm extends Component {
    constructor(props){
        super(props);
        this.state = {value:'coconut'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            value:event.target.value
        })
    }

    handleSubmit(event){
        alert('Your favorite flavor is:'+this.state.value)
        event.preventDefault();
    }



    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick your favorite flavor:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="line">Line</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}


// example 4
class Reservation extends Component {
    constructor(props){
        super(props);

        this.state = {
            isGoing:true,
            numberOfGuests:2
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render(){
        return (
            <form>
                <label>
                    Is going:
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange} />
                </label>
                <br/>
                <label>
                    Number of guests:
                    <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange}
                    />

                </label>
            </form>
        )
    }
}

// export default NameForm;
// export default EssayForm;
// export default FlavorForm;
export default Reservation