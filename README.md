# Auth System (Node.js + PostgreSQL)

This project is a **full-stack authentication system** built using **Node.js, Express, and PostgreSQL (Aiven Cloud)**.

---

##  Features

* User Signup
* User Login
* Secure Password Hashing (bcrypt)
* JWT Authentication
* Protected Routes
* PostgreSQL Database (Aiven)

---

##  Tech Stack

* **Backend:** Node.js, Express
* **Database:** PostgreSQL (Aiven Cloud)
* **Authentication:** JWT (JSON Web Token)
* **Security:** bcrypt
* **Frontend (optional):** React

---

##  Setup Instructions

###  Clone the repository

```bash
git clone https://github.com/yusufbigweb/auth_02.git
cd auth_02
```

---

###  Install dependencies

```bash
npm install
```

---

###  Create `.env` file

```env
PORT=5000
DATABASE_URL=your_aiven_postgresql_url
JWT_SECRET=your_secret_key
```

 **Important:** Never push `.env` file to GitHub

---

###  Run the server

```bash
npm start
```

---

##  Authentication Flow

1. User registers (Signup)
2. Password is hashed using bcrypt
3. User logs in (Login)
4. JWT token is generated
5. Token is used to access protected routes

---

##  API Endpoints

### Signup

```
POST /api/auth/signup
```

### Login

```
POST /api/auth/login
```

### Protected Route

```
GET /api/protected
```

---

## Database (Aiven PostgreSQL)

This project uses **Aiven Cloud PostgreSQL** for scalable and managed database services.

---

##  Security Notes

* Do not expose your database credentials
* Always use environment variables
* Rotate secrets if leaked

---

⭐ If you like this project, give it a star on GitHub!
