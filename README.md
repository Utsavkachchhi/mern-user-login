
# User Registration and Email Verification System

## Overview

This project implements a user registration system with distinct roles for customers and administrators. It includes email verification to ensure the authenticity of users. The application is divided into two main parts:

1. **Server**: Handles backend operations, including user registration, role assignment, and email verification.
2. **Client**: Contains all frontend code for user interaction.

## Features

- **User Registration**: Separate registration pages for customers and administrators.
- **Role Assignment**: Automatic assignment of roles based on the registration page used.
- **Email Verification**: Sends a verification email upon registration to confirm the user's email address.

## Prerequisites

- **Node.js**: Ensure you have the latest LTS version installed.
- **MySQL**: Set up a MySQL database for user data storage.

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Utsavkachchhi/mern-user-login.git
cd mern-user-login
```

### 2. Server Configuration

Navigate to the `server` directory:

```bash
cd server
```

#### a. Install Dependencies

```bash
npm install -f
```

#### b. Environment Variables

A sample environment file (`sample.env`) is provided. Duplicate this file and rename it to `.env`. Update the variables with your specific configurations:

```
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASS=your_database_password
DB_HOST=localhost
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
```

**Note**: The `EMAIL_USER` and `EMAIL_PASS` variables are used to send verification emails. Ensure these credentials are valid.

#### c. Start the Server

```bash
npm run dev
```

The server will run on `http://localhost:8000`.

### 3. Client Configuration

Navigate to the `client` directory:

```bash
cd ../client
```

#### a. Install Dependencies

```bash
npm install --f
```

#### b. Start the Client

```bash
npm start
```

The client will run on `http://localhost:3000`.

## Usage

- **Customer Registration**: Access the customer registration page at `http://localhost:3000/register/customer`.
- **Admin Registration**: Access the admin registration page at `http://localhost:3000/register/admin`.

After registration, a verification email will be sent to the provided email address. Follow the link in the email to verify your account.

- **Admin Login**: Access the admin login page at `http://localhost:3000/`.

## Folder Structure

```
[repository_name]/
├── client/       # Frontend code
├── server/       # Backend code
└── README.md     # Project documentation
```

## Dependencies

### Server

- **Express**: Web framework for Node.js.
- **Sequelize**: ORM for MySQL database interactions.
- **Nodemailer**: For sending emails.
- **jsonwebtoken**: For handling JWTs.
- **bcryptjs**: For hashing passwords.

### Client

- **React**: Frontend library for building user interfaces.
- **Axios**: For making HTTP requests.
---

By following this guide, you should be able to set up and run the user registration and email verification system on your local machine. If you encounter any issues or have questions, feel free to open an issue in the repository. 