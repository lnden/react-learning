import React, { useState,useEffect } from 'react'

function useFriendStatus(friendID) {
    const [isOnline, setIsOnline] = useState(null);

    useEffect(() => {
        function handleStatusChange(status) {
            setIsOnline(status);
        }

        handleStatusChange(friendID)
        return () => {
            handleStatusChange(friendID)
        };
    });

    return isOnline;
}


function FriendStatus(props) {
    const isOnline = useFriendStatus(props.id);
    if (isOnline === null) {
        return 'Loading...';
    }
    
    return isOnline ? 'Online' : 'Offline';
}



function FriendListItem(props) {
    const isOnline = useFriendStatus(props.id);
    return (
        <li style={{ color: isOnline===1 ? 'green' : 'red' }}>
            我是通过父亲组件传递过来的信息：{props.id}
        </li>
    );
}
class App  extends React.Component {
    render() {
        return(
            <section>
                <FriendListItem id={2}/>
                <FriendStatus id={null}/>
            </section>
        )
    }
}


export default App