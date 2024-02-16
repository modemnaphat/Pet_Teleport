// NotificationComponent.js
import React from 'react';
import 
class NotificationComponent extends React.Component {
  constructor(props) {
    super(props);
    this.notificationService = new NotificationService();
  }

  handleButtonClick = () => {
    this.notificationService.showNotification("Hello", { body: "This is a notification." });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleButtonClick}>Show Notification</button>
      </div>
    );
  }
}

export default NotificationComponent;
