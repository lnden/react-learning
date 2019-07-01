import React, { Component } from 'react'
import PublicHeader from '../../components/header/index.jsx';
import './index.less'

class Home extends Component {
    render() {
        return (
            <main className="home-container">
                <PublicHeader title='首页' record />
            </main>
        )
    }
}

export default Home