# Yoga Studio - Community Yoga Tracker

## Overview

Yoga Studio is a community-driven web application built with **React** and **Vite**, utilizing **JavaScript** and **Firebase** for backend services. The application allows users to log and share the number of **Yogasanas** (yoga poses) they perform, as well as rate the difficulty of each asana. This app promotes a sense of community, where users can motivate each other by sharing progress and providing feedback on various asanas.

## Features

- **User Authentication**: Login and register using Firebase Authentication
- **Asana Tracking**: Track and log the number of asanas completed by users
- **Difficulty Rating**: Rate the difficulty of each asana from easy to hard
- **Community Sharing**: Users can share their yoga progress with others
- **Responsive Design**: The app is fully responsive and works on both desktop and mobile devices

## Deployed Link
[Live Demo](link here)

## Tech Stack

- **Frontend**: React, Vite, JavaScript, CSS
- **Backend**: Firebase (Firestore for database, Firebase Authentication for user login)
- **State Management**: React's built-in state management

## Getting Started

### Prerequisites

To run this project locally, you need to have the following tools installed:

- [Node.js](https://nodejs.org/) (with npm)
- [Vite](https://vitejs.dev/) (for fast development environment)
- [Firebase CLI](https://firebase.google.com/docs/cli) (for Firebase integration and deployment)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/yoga-studio.git
   cd yoga-studio
   ```

2. Install dependencies:
   ```bash
   npm install
   npm install react-router-dom axios firebase
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory
   - Add your Firebase configuration:
     ```
     VITE_FIREBASE_API_KEY=your-api-key
     VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
     VITE_FIREBASE_PROJECT_ID=your-project-id
     VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
     VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
     VITE_FIREBASE_APP_ID=your-app-id
     ```

4. Run the app:
   ```bash
   npm run dev
   ```

## Project Structure

```
/yoga-studio
│
├── /public                # Static files (index.html, favicon, etc.)
├── /src                   # Source files
│   ├── /assets            # Asset files
│   │   └── react.svg
│   ├── /Authentication    # Authentication components
│   │   ├── Login.jsx      # User login functionality
│   │   └── Register.jsx   # User registration form
│   ├── /components        # React components
│   │   ├── /addYoga
│   │   │   └── AddYoga.jsx # Component for adding new yoga poses
│   │   └── /common
│   │       ├── Navbar.css  # Navigation bar styling
│   │       └── Navbar.jsx  # Navigation component
│   ├── /context           # React context providers
│   │   └── ThemeContext.jsx # Theme management for the app
│   ├── /Firebase          # Firebase configuration and utility functions
│   │   ├── firebaseConfig.js # Firebase initialization
│   │   └── /FirebaseCrud
│   │       └── firebase.js  # Firebase CRUD operations
│   ├── /pages             # React pages for different views
│   │   ├── AboutPage.jsx   # About page component
│   │   ├── ContactForm.jsx # Contact form component
│   │   ├── ErrorPage.jsx   # Error page component
│   │   ├── Footer.jsx      # Footer component
│   │   └── Home.jsx        # Home page component
│   ├── /styles            # CSS styles
│   │   ├── AboutPage.css   # About page styling
│   │   ├── ContactForm.css # Contact form styling
│   │   ├── Footer.css      # Footer styling
│   │   ├── Login.css       # Login page styling
│   │   ├── Register.css    # Registration page styling
│   │   ├── App.css         # Main app styling
│   │   └── index.css       # Global CSS styles
│   ├── App.jsx            # Main React App component
│   └── main.jsx           # Entry point file
│
├── .gitignore             # Git ignore file
├── .eslint.config.js      # ESLint configuration
├── index.html             # HTML entry point
├── package-lock.json      # Dependency lock file
├── package.json           # Project dependencies and scripts
├── README.md              # Project documentation
└── vite.config.js         # Vite configuration
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## Acknowledgments

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Vite Documentation](https://vitejs.dev/guide/)
