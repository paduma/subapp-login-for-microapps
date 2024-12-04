# Subapp-Login  

Subapp-Login is a microapp focused on user registration and login functionality. It integrates seamlessly with the [main-app](https://github.com/paduma/main-app-for-microapps) to provide a comprehensive user identity management experience.  

## Tech Stack  

- **Frontend Framework**: Vue.js  
- **Component Library**: Vuetify  

## Core Features  

### Version 1 Features  
- **User Registration**: Users can create a new account.  
- **User Login**: Registered users can log into the system.  

### Version 2 Planned Features  
- **Password Reset**: Users can reset their passwords via email.  
- **Email Uniqueness Check**: Ensures the email address is unique upon registration.  

## Installation and Usage  

### Prerequisites  
- Node.js (Recommended version 18.20.3)  
- Vue CLI (optional)  

### Installation Steps  
1. Clone the repository:  
   ```bash  
   git clone <repository-url>  
   cd subapp-login  
2. Install denpencies:
    ```bash
    npm i
3. Start the application:
  To ensure the application runs on the correct port, use the following command to start the application:
    ```bash
    npm run serve -- --port 9001  
4. Open the application in your browser:
  Visit http://localhost:9001 to view the app.

### Contributing
If you wish to contribute to this project, please follow these steps:

1. Fork this repository.
Create a new feature branch (git checkout -b feature-branch-name).
2. Commit your changes (git commit -am 'Add new feature').
3. Push to the branch (git push origin feature-branch-name).
4. Submit a Pull Request.
### License
This project is licensed under the MIT License - see the LICENSE file for details.

### Acknowledgments
Thanks to the Vue.js and Vuetify communities for their tools and resources.
Special thanks to the Qiankun team for their contributions to microfrontend frameworks.