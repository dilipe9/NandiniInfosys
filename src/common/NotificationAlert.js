import React from "react";
import NotificationSystem from 'react-notification-system';
import { NOTIFICATION_SYSTEM_STYLE } from 'utils/constants';
// Documentation : https://www.npmjs.com/package/react-notification-system

class NotificationAlert extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {

        }
    }

    showNotification = () => {
        const { show, alertTitle, alertMessage, type, displayPosition, aliveTime, closeType } = this.props;
        if (show) {
            this.notificationSystem.addNotification({
                title: alertTitle ? alertTitle : '',
                message: alertMessage,
                level: type ? type : 'info', // info, error, success, warning 
                position: displayPosition ? displayPosition : 'tr', // tr (top right), tl (top left), tc (top center), br (bottom right), bl (bottom left), bc (bottom center)
                autoDismiss: aliveTime ? aliveTime : 5, // 0 to disable auto dismiss/disappear
                dismissible: closeType ? closeType : 'both', // both (The disable button is visible and the user can click anywhere on the notification to dismiss), click (The disable button is NOT visible and the user can click anywhere on the notification to dismiss), button (The user can click on the disable button to dismiss the notifiction)
                //onAdd: function (notification) { console.log(notification.title + 'was added'); resetNotificationAlert() }
            });
        }
    }

    componentDidUpdate() {
        this.showNotification();
    }

    render() {
        return (
            <NotificationSystem
                dismissible={false}
                ref={notificationSystem =>
                    (this.notificationSystem = notificationSystem)}
            //style={NOTIFICATION_SYSTEM_STYLE}
            />
        )
    }
}

export default NotificationAlert;
