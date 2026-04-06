# Next.js Full Stack Authentication System

A complete, production-ready authentication system built with Next.js (App Router), MongoDB, and JSON Web Tokens (JWT). The application features secure user registration, login/logout, protected routes, email verification, and password reset functionalities.

## 🚀 Features

- **User Authentication**: Secure Login and Signup flow.
- **Email Verification**: Sends verification emails with tokens using Nodemailer and Mailtrap.
- **Password Reset**: Secure forgot/reset password flow via email.
- **JWT Authentication**: Stateless authentication utilizing HttpOnly cookies for enhanced security.
- **Protected Routes**: Next.js Middleware to protect private pages (e.g., Profile).
- **Database**: MongoDB integration using Mongoose models.
- **Password Hashing**: Passwords stored safely using cryptjs.
- **UI Notifications**: Interactive toast alerts using eact-hot-toast.
- **Modern Styling**: Styled with Tailwind CSS.

## 💻 Tech Stack

- **Framework:** Next.js 16+ (App Router)
- **Language:** TypeScript
- **Database:** MongoDB & Mongoose
- **Authentication:** JSON Web Tokens (JWT) & bcryptjs
- **Email Delivery:** Nodemailer & Mailtrap
- **Styling:** Tailwind CSS

## 🛠️ Getting Started

### Prerequisites
Make sure you have Node.js installed on your machine and a MongoDB cluster (like MongoDB Atlas) ready to use.

### 1. Clone & Install
git clone <your-github-repo-url>
cd next-auth

# Install dependencies (use legacy-peer-deps if you encounter mailtrap peer issues)
npm install --legacy-peer-deps

### 2. Environment Variables
Create a .env file in the root of your project and add the following variables:

MONGO_URI=your_mongodb_connection_string
TOKEN_SECRET=your_super_secret_jwt_key
DOMAIN=http://localhost:3000

# Mailtrap Credentials (for testing emails)
MAILTRAP_USER=your_mailtrap_user
MAILTRAP_PASS=your_mailtrap_password

### 3. Run the Development Server
npm run dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure Highlights

- pp/api/...: Next.js Route Handlers (Backend API) for login, signup, logout, erifyemail, esetpassword, etc.
- pp/login, pp/signup...: Frontend pages for authentication flows.
- middleware.ts: Next.js middleware to manage route protection and cookie verification.
- models/userModel.js: Mongoose schema for the User document.
- dbConfig/dbConfig.ts: Database connection utility.
- helper/: Utility functions for extracting tokens and sending emails.

## 📝 License
This project is open-source and available under the MIT License.
