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
```bash
.
├── backend
│   ├── index.js
│   ├── middleware
│   │   └── auth.js
│   ├── model
│   │   ├── HoldingsModel.js
│   │   ├── OrdersModel.js
│   │   ├── PositionsModel.js
│   │   └── User.js
│   ├── package-lock.json
│   ├── package.json
│   ├── routes
│   │   └── auth.js
│   └── schemas
│       ├── HoldingsSchema.js
│       ├── OrdersSchema.js
│       └── PositionsSchema.js
├── dashboard
│   ├── README.md
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   │   ├── index.html
│   │   ├── logo.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   └── src
│       ├── components
│       │   ├── Apps.js
│       │   ├── BuyActionWindow.css
│       │   ├── BuyActionWindow.js
│       │   ├── Dashboard.js
│       │   ├── DoughnoutChart.js
│       │   ├── Funds.js
│       │   ├── GeneralContext.js
│       │   ├── Holdings.js
│       │   ├── Home.js
│       │   ├── Menu.js
│       │   ├── Orders.css
│       │   ├── Orders.js
│       │   ├── Positions.js
│       │   ├── SellActionWindow.js
│       │   ├── Summary.js
│       │   ├── TopBar.js
│       │   ├── VerticalGraph.js
│       │   └── WatchList.js
│       ├── data
│       │   └── data.js
│       ├── index.css
│       └── index.js
└── frontend
    ├── package-lock.json
    ├── package.json
    ├── public
    │   ├── index.html
    │   ├── manifest.json
    │   ├── media
    │   │   └── images
    │   │       ├── appstoreBadge.svg
    │   │       ├── coin.png
    │   │       ├── console.png
    │   │       ├── dittoLogo.png
    │   │       ├── ecosystem.png
    │   │       ├── education.svg
    │   │       ├── goldenpiLogo.png
    │   │       ├── googlePlayBadge.svg
    │   │       ├── homeHero.png
    │   │       ├── intradayTrades.svg
    │   │       ├── kite.png
    │   │       ├── kiteconnect.png
    │   │       ├── largestBroker.svg
    │   │       ├── logo.svg
    │   │       ├── nithinKamath.jpg
    │   │       ├── pressLogos.png
    │   │       ├── pricing0.svg
    │   │       ├── pricingEquity.svg
    │   │       ├── pricingMF.svg
    │   │       ├── sensibullLogo.svg
    │   │       ├── signup.png
    │   │       ├── smallcaseLogo.png
    │   │       ├── streakLogo.png
    │   │       ├── tijoriLogo.svg
    │   │       ├── varsity.png
    │   │       └── zerodhaFundhouse.png
    │   └── robots.txt
    └── src
        ├── RequireAuth.js
        ├── api
        │   └── api.js
        ├── components
        │   └── Login.js
        ├── index.css
        ├── index.js
        └── landing_page
            ├── Footer.js
            ├── Navbar.js
            ├── NotFound.js
            ├── OpenAccount.js
            ├── about
            │   ├── AboutPage.js
            │   ├── Hero.js
            │   └── Team.js
            ├── home
            │   ├── Awards.js
            │   ├── Education.js
            │   ├── Hero.js
            │   ├── HomePage.js
            │   ├── Pricing.js
            │   └── Stats.js
            ├── pricing
            │   ├── Brokerage.js
            │   ├── Hero.js
            │   └── PricingPage.js
            ├── products
            │   ├── Hero.js
            │   ├── LeftSection.js
            │   ├── ProductsPage.js
            │   ├── RightSection.js
            │   └── Universe.js
            ├── signup
            │   └── Signup.js
            ├── support
            │   ├── CreateTicket.js
            │   ├── Hero.js
            │   └── SupportPage.js
            └── test
                └── Hero.test.js
```

---

## 🔧 Getting Started

### 1. Clone the repository
``` bash
git clone https://github.com/rajarohan/Zerodha-Clone.git
cd Zerodha-Clone
```
### 2. Setup Backend
``` bash
cd backend
npm install
touch .env
```
Start server:
``` bash
npm run dev
```
### 4. Setup Dashboard
``` bash
cd ../dashboard
npm install
npm start
```
## 🔐 Authentication Flow

 - Users register and login through the frontend
 - JWT is issued and stored in the client (localStorage or session)
 - Access to the dashboard is protected by RequireAuth.js
 - Backend verifies tokens through middleware

## 📌 Note

 - This project is a clone for educational purposes only
 - Inspired by Zerodha. No commercial use intended.

## 👨‍💻 Author

 - Raja Rohan
GitHub: ![@rajarohan]((https://github.com/rajarohan))

## ⭐️ Show Your Support

If you found this helpful, give it a ⭐️ on GitHub!

