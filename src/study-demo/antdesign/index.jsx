import React, { Component } from 'react'
import { DatePicker, message, Alert,Button } from 'antd';

class App extends Component {
    state = {
        date: null,
    }

    handleChange = (date) =>{
        message.info(date.format('YYYY-MM-DD'))
        this.setState({ date });
    }

    render() {
        const { date } = this.state;
        return (
            <section>
                <h3>Ant Design!</h3>
                <DatePicker onChange={this.handleChange}/>
                <Button style={{color:'#fff'}} type="primary">测试按钮</Button>
                <Alert message={`当前日期：${date ? date.format('YYYY-MM-DD') : '未选择'}`} type="success" />
            </section>
        )
    }
}

export default App