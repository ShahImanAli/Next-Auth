# Next.js Authentication Starter

A complete, professional authentication system built with **Next.js**, **MongoDB**, and **TypeScript**. This project serves as a robust foundation for building full-stack applications with secure user authentication, identity management, and protected routes.

---

## 🚀 Features

- **User Authentication:** Secure Sign Up, Login, and Logout functionality.
- **Stateless Sessions:** JWT (JSON Web Tokens) with HTTP-only cookies for secure session management.
- **Email Verification:** Sends automated emails to verify new user registrations.
- **Password Management:** Complete flow for "Forgot Password" and "Reset Password" securely.
- **Database Integration:** MongoDB connection managed elegantly with Mongoose.
- **Security First:** Password hashing with `bcryptjs` and secure tokens for resets/verification.
- **Responsive UI:** Built with React 19 and Tailwind CSS styling ready.
- **API Routes:** Comprehensive Next.js backend API routes to handle authentication tasks.
- **Notifications:** Beautiful toast notifications using `react-hot-toast`.

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, Server Actions, API Routes)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Database:** [MongoDB](https://www.mongodb.com/) & [Mongoose](https://mongoosejs.com/)
- **Authentication:** [JSON Web Tokens (JWT)](https://jwt.io/) & [Bcryptjs](https://www.npmjs.com/package/bcryptjs)
- **Email Delivery:** [Nodemailer](https://nodemailer.com/) & [Mailtrap](https://mailtrap.io/)
- **Styling:** CSS & [Tailwind CSS](https://tailwindcss.com/)

## 📂 Project Structure

```text
├── app/
│   ├── api/                   # Backend API routes (login, signup, verify email, etc.)
│   ├── login/                 # Login page
│   ├── signup/                # Signup page
│   ├── profile/               # Protected user profile pages
│   ├── verifyemail/           # Email verification handling page
│   ├── resetpassword/         # Password reset page
│   └── forgotpassword/        # Trigger password reset page
├── dbConfig/                  # MongoDB connection setup
├── helper/                    # Utility functions (Mailer, Token extraction)
├── models/                    # Mongoose database models (User schema)
└── middleware.ts              # Next.js Middleware for protecting routes
```

## ⚙️ Getting Started

### Prerequisites

Make sure you have Node.js and MongoDB installed on your system.

### 1. Clone the repository

```bash
git clone <repository-url>
cd next-auth
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file in the root of your project and configure the following variables:

```env
MONGO_URI=your_mongodb_connection_string
TOKEN_SECRET=your_jwt_secret_key
DOMAIN=http://localhost:3000

# Mailtrap Credentials (for testing emails)
MAILTRAP_USER=your_mailtrap_user
MAILTRAP_PASS=your_mailtrap_password
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🔒 Security Practices Implemented

- **HTTP-Only Cookies:** JWTs are stored in secure HTTP-only cookies to prevent XSS attacks.
- **Password Hashing:** Passwords are never stored in plaintext. They are salted and hashed using `bcryptjs`.
- **Token Expiration:** Verification and reset tokens have strict expiration times (1 hour).
- **URL Encoding:** Sensitive tokens passed in URLs are properly URI encoded.
- **Route Protection:** Next.js Middleware ensures that unauthenticated users cannot access protected pages like `/profile`, and authenticated users cannot access `/login` or `/signup`.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page if you want to contribute.
