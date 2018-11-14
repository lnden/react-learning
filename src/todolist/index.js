/**
 * @author Lindong Ding
 * @date 2018/11/14
 * @desc 文件描述
 * @param {Object} [title]  - 参数说明
 * @example 调用示例
 */

import React, { Component } from 'react'
import Table from './Table';
import Form from './Form'

class App extends Component {
    state = {
        characters: [
            // {
            //     'name': 'Charlie',
            //     'job': 'Janitor'
            // },
            // {
            //     'name': 'Mac',
            //     'job': 'Bouncer'
            // },
            // {
            //     'name': 'Dee',
            //     'job': 'Aspring actress'
            // },
            // {
            //     'name': 'Dennis',
            //     'job': 'Bartender'
            // }
        ]
    };

    removeCharacter = index => {
        const { characters } = this.state;
        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index;
            })
        });
    };

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
    }

    render() {
        return (
            <div className="container">
                <Table
                    characterData={this.state.characters}
                    removeCharacter={this.removeCharacter}
                />
                <Form handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default App;