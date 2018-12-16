/**
 * @author Lnden
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
class RadioForm extends Component {
    constructor(){
        super();
        this.state = {
            sex:'2'
        };
        this.handleSex = this.handleSex.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSex(event){
        this.setState({
            sex:event.target.value
        })
    }
    handleSubmit(event){
        console.log(this.state.sex)
        event.preventDefault();
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="radio" value="1" checked={this.state.sex==='1'} onChange={this.handleSex}/>男
                <input type="radio" value="2" checked={this.state.sex==='2'} onChange={this.handleSex}/>女
                <input type="submit" defaultValue="提交"></input>
            </form>
        )
    }
}

// example 3
class SelectForm extends Component {
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
class CheckboxForm extends Component{
    constructor(){
        super();
        this.state = {
            hobby:[
                {
                    title:'运动',
                    checked:true,
                    id:1
                },
                {
                    title:'篮球',
                    checked:false,
                    id:2
                },
                {
                    title:'睡觉',
                    checked:true,
                    id:3
                }
            ]
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(index){
        let hobby = this.state.hobby;
        hobby[index].checked = !hobby[index].checked;
        this.setState({
            hobby
        })
    }

    handleSubmit(e){
        console.log(this.state.hobby)
        e.preventDefault()
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                爱好：
                {
                    this.state.hobby.map((value,index)=>{
                        return (
                            <span key={value.id}>
                                {value.title}<input type="checkbox" checked={value.checked} onChange={this.handleChange.bind(this,index)}/>
                            </span>
                        )
                    })
                }
                <input type="submit" defaultValue="提交"/>
            </form>
        )
    }
}
// example 5
class TextareaForm extends Component {
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

// example 6
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
// export default RadioForm;
// export default SelectForm;
// export default CheckboxForm;
// export default TextareaForm;
export default Reservation

