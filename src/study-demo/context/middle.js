import React, { Component } from 'react'

import { ThemeContext,themes } from './middle/theme-context'
import ThemeButton from './middle//themed-button'

function Toolbar(props) {
    return (
        <ThemeButton onClick={props.changeTheme}>
            Change Theme
        </ThemeButton>
    )
}

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            theme: themes.light
        }

        this.toggleTheme = () =>{
            this.setState(state => ({
                theme:
                    state.theme === themes.dark
                    ? themes.light : themes.dark
            }))
        }
    }

    render() {
        return (
            <section>
                <ThemeContext.Provider value={this.state.theme}>
                    <Toolbar changeTheme={this.toggleTheme}/>
                </ThemeContext.Provider>
                <section>
                    <ThemeButton />
                </section>
            </section>
        )
    }
}

export default App;