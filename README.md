# Zerodha Clone 🪙

A full-stack **Zerodha Clone** built using the **MERN stack (MongoDB, Express.js, React, Node.js)**. This project replicates the front-end UI and demonstrates user authentication and dashboard routing, inspired by the official [Zerodha](https://zerodha.com) platform.


## 🚀 Features

- 🧑‍💼 User Authentication (JWT-based)
- 🏦 Dashboard accessible after login
- 🔒 Secure routes using middleware
- ⚛️ Responsive React frontend
- 🌐 RESTful API built with Express.js
- 📦 MongoDB for database storage

---

## 🛠️ Tech Stack

**Frontend**: React, Axios, React Router  
**Backend**: Node.js, Express.js  
**Database**: MongoDB  
**Authentication**: JWT (JSON Web Tokens)

---

## 📁 Folder Structure
Zerodha-Clone/
│
├── backend/                   # Express backend with MongoDB
│   ├── index.js               # Entry point for server
│   ├── middleware/auth.js     # JWT authentication middleware
│   ├── model/                 # Mongoose models
│   │   ├── HoldingsModel.js
│   │   ├── OrdersModel.js
│   │   ├── PositionsModel.js
│   │   └── User.js
│   ├── routes/auth.js         # Auth routes
│   └── schemas/               # Schema definitions
│       ├── HoldingsSchema.js
│       ├── OrdersSchema.js
│       └── PositionsSchema.js
│
├── frontend/                  # React frontend (Login & Landing)
│   ├── src/
│   │   ├── RequireAuth.js     # Protected route component
│   │   ├── api/               # API handling
│   │   ├── components/        # UI Components
│   │   └── landing_page/      # Landing page components
│
├── dashboard/                 # Separate dashboard app
│   ├── src/
│   │   ├── components/        # Dashboard components
│   │   ├── data/              # Static/sample data
│   │   └── index.js           # Entry point
│
└── README.md


---

## 🔧 Getting Started

### 1. Clone the repository

git clone https://github.com/rajarohan/Zerodha-Clone.git
cd Zerodha-Clone

### 2. Setup Backend

cd backend
npm install
touch .env

Start server:
npm run dev

### 4. Setup Dashboard

cd ../dashboard
npm install
npm start
