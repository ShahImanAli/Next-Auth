<div align=""center"">
  <h1>?? Next.js Full-Stack Authentication</h1>
  <p>A robust, production-ready authentication boilerplate built with the Next.js App Router, MongoDB, and JSON Web Tokens (JWT).</p>

  <p>
    <img src=""https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"" alt=""Next.js"" />
    <img src=""https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"" alt=""TypeScript"" />
    <img src=""https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"" alt=""MongoDB"" />
    <img src=""https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"" alt=""Tailwind CSS"" />
  </p>
</div>

<br />

## ?? Overview

Developing a secure authentication flow from scratch can be complex. This project provides a complete, well-structured, and secure authentication system out of the box. It leverages stateless JWT authentication stored in HTTP-only cookies, protecting your application against common vulnerabilities like XSS.

## ? Key Features

- **End-to-End Authentication:** Fully functional Signup, Login, and Logout flows.
- **Email Verification:** Seamless integration with Nodemailer & Mailtrap to verify user accounts.
- **Secure Password Management:** Advanced forgotten and reset password flows.
- **Stateless JWT Security:** Employs HttpOnly cookies for token storage, enhancing security.
- **Route Protection:** Next.js Middleware implemented to restrict access to protected routes (e.g., /profile).
- **Database Integration:** Seamless MongoDB integration using Mongoose ORM.
- **Modern UI/UX:** Responsive, clean interfaces styled with Tailwind CSS, featuring active toast notifications via eact-hot-toast.

## ?? Tech Stack

| Technology | Description |
| --- | --- |
| [Next.js (App Router)](https://nextjs.org/) | React framework for server-side rendering and static generation. |
| [TypeScript](https://www.typescriptlang.org/) | Strongly typed programming language. |
| [MongoDB](https://www.mongodb.com/) & [Mongoose](https://mongoosejs.com/) | NoSQL Database and object modeling tool. |
| [JSON Web Tokens (JWT)](https://jwt.io/) | Standard for secure data transmission as JSON objects. |
| [Bcryptjs](https://www.npmjs.com/package/bcryptjs) | Library to correctly hash user passwords. |
| [Nodemailer](https://nodemailer.com/) | Module for Next.js Node applications to allow easy email sending. |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS framework for rapid UI development. |

<br />

## ?? Getting Started

### 1. Prerequisites
Ensure you have the following installed on your local development environment:
- Node.js (v18+ recommended)
- A MongoDB instance or MongoDB Atlas URI.
- A [Mailtrap](https://mailtrap.io/) account for capturing test emails.

### 2. Installation
Clone the repository and install the dependencies:

`ash
git clone https://github.com/ShahImanAli/Next-Auth.git
cd next-auth

# Install packages (legacy-peer-deps recommended for mailtrap compatibility)
npm install --legacy-peer-deps
`

### 3. Environment Configuration
Create a .env file in the root of your project and populate it with the following keys:

`env
# Database configuration
MONGO_URI=your_mongodb_connection_string

# JWT Secret
TOKEN_SECRET=your_super_secret_random_string

# App Domain
DOMAIN=http://localhost:3000

# Mailtrap Credentials for Email Delivery
MAILTRAP_USER=your_mailtrap_username
MAILTRAP_PASS=your_mailtrap_password
`

### 4. Running the Application
Fire up the Next.js development server:

`ash
npm run dev
`
Navigate to [http://localhost:3000](http://localhost:3000) to explore the application.

<br />

## ?? Project Architecture

`	ext
? app/
  ??? (auth)/                # Next.js Route Groups for UI pages
      ??? login/page.tsx
      ??? signup/page.tsx
      ??? verifyemail/page.tsx
      ??? forgotpassword/page.tsx
      ??? resetpassword/page.tsx
  ??? api/
      ??? users/             # Backend Route Handlers
          ??? login/route.ts
          ??? signup/route.ts
          ??? verifyemail/route.ts
          ??? ...
  ??? profile/               # Protected UI route
? dbConfig/
  ??? dbConfig.ts            # Mongoose connection logic
? helper/
  ??? getdatafromtoken.ts    # JWT extraction utility
  ??? mailer.ts              # Nodemailer email configuration
? models/
  ??? userModel.js           # Database schema
? middleware.ts              # Edge middleware for route protection
`

<br />

## ?? API Endpoints

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| POST | /api/users/signup | Registers a new user and sends verification email. |
| POST | /api/users/login | Authenticates user and sets HTTP-only JWT cookie. |
| GET  | /api/users/logout | Clears the authentication token cookie. |
| GET  | /api/users/me     | Retrieves data for the currently authenticated user. |
| POST | /api/users/verifyemail| Verifies a user's email using a token. |
| POST | /api/users/forgotpassword | Initiates the password reset email flow. |
| POST | /api/users/resetpassword | Sets the new user password securely. |

<br />

## ?? License
This project is licensed under the [MIT License](LICENSE). Feel free to use it for your own projects!

---
*Created by [ShahImanAli](https://github.com/ShahImanAli).*
