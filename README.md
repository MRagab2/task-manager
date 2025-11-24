# 📅 Task Manager App

A cross-platform mobile application built with Expo/React Native and TypeScript, designed to help users efficiently organize and track their daily tasks and to-do lists.

## ✨ Features Overview

This application provides a robust set of features to handle personal and professional task management:

  * **Task Creation (CRUD):** Easily create new tasks with titles, descriptions, and optional due dates. Tasks can be edited, marked as complete, and permanently deleted.
  * **Status Tracking:** Quickly change a task's status (e.g., To Do, In Progress, Complete).
  * **Filtering and Sorting:** Sort tasks by creation date, due date, or status. Filter the task list to show only incomplete, overdue, or completed items.
  * **Intuitive UI:** A clean, mobile-first interface designed for effortless use on iOS and Android devices.

### Special Instructions for Use

  * **Offline Mode (Inferred):** Depending on the final implementation, the app is expected to store tasks locally (potentially using AsyncStorage or similar storage) allowing for use even without an active internet connection.
  * **Touch Interactions:** All main interactions (marking complete, editing, deleting) use common mobile gestures like taps and swipes.

## 🛠️ Setup and Running Instructions

This project requires [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your system. It is designed to be run using the Expo ecosystem.

### Prerequisites

Ensure you have the latest version of the **Expo Go** app installed on your mobile device (iOS or Android) for easy testing, or have an emulator set up.

### 1. Installation

Clone the repository and install the necessary dependencies:

```bash
# Clone the repository
git clone [https://github.com/MRagab2/task-manager.git](https://github.com/MRagab2/task-manager.git)

# Navigate into the project directory
cd task-manager

# Install dependencies
npm install
```

### 2. Running the App

Start the Expo development server:
```bash

npx expo start
```

This will launch the Metro Bundler in your browser and display a QR code in your console.

* **On Mobile:** Open the **Expo** Go app on your device and scan the QR code to load the app.

* **In Emulator/Simulator:** Use the options in the Metro Bundler terminal (e.g., press a for Android or i for iOS) to launch the app in an associated emulator or simulator.

# 📦 Third-Party Libraries

The application is built upon a modern stack of technologies that enable cross-platform development and efficient styling.

| Library/Technology | Purpose |
| :--- | :---|


| **Expo** | The core framework for developing, building, and deploying universal React applications. Simplifies setup and tooling. |
| **React Native** | The foundational framework for building native mobile applications using JavaScript/TypeScript. |
| **TypeScript** | Provides static type-checking to enhance code quality, catch errors early, and improve developer experience. |
| **NativeWind** | A utility-first CSS framework (based on Tailwind CSS) that allows for fast and consistent styling across React Native components. |
| **Expo Router** | Used for file-based navigation, allowing for easy creation and management of screens and routes within the mobile app. |
| **ESLint/Prettier** | Development tools used for linting and code formatting to maintain code consistency and quality. |