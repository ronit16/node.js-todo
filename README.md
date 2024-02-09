# Todo List App

A simple Todo List application built with Node.js and MongoDB.

## Description

This project is a basic Todo List application implemented using Node.js as the server-side framework and MongoDB as the database. It allows users to manage their tasks, mark them as completed, and perform basic CRUD operations on the tasks.

## Features

- Create, Read, Update, and Delete tasks
- Mark tasks as completed
- MongoDB database for persistent storage
- RESTful API for task management

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/todo-list-app.git
```
   
2. Change into the project directory:

```bash
cd todo-list-app
```

3. Install dependencies:

```bash
npm install
```

### Configuration
Create a `.env` file in the root directory of the project.

Add the MongoDB connection string:
``` bash
MONGO_URI=mongodb://localhost:27017/todo-list
```
Replace the connection string with your MongoDB server details.

### Usage
Start the MongoDB server:

```bash
mongod
```
Start the Node.js application:

```bash
npm start
```
The application will be accessible at http://localhost:3000.
