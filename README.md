# 📦 Product Inventory Management System

A backend-focused **Product Inventory Management System** built using **Node.js, Express.js, and MongoDB**.  
This project provides secure authentication and complete **CRUD operations** for managing product inventory using **RESTful APIs**.

---

## 🚀 Features

🔐 **JWT Authentication**
- User Registration
- Secure Login
- Token-based authentication

📦 **Product Management**
- Add new products
- View all products
- Update product details (price, quantity, etc.)
- Delete products

🛡 **Protected Routes**
- Only authenticated users can access inventory operations

⚡ **RESTful API Architecture**
- Clean and scalable backend structure

---

## 🛠 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB**
- **JWT (JSON Web Token)**
- **Mongoose**
- **REST API**

---

## 📂 Project Structure

```
product-inventory-management
│
├── controllers
│   ├── authController.js
│   └── productController.js
│
├── models
│   ├── User.js
│   └── Product.js
│
├── routes
│   ├── authRoutes.js
│   └── productRoutes.js
│
├── middleware
│   └── authMiddleware.js
│
├── config
│   └── db.js
│
├── server.js
└── package.json
```

---

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/affu0124/product-inventory-management.git
```

Go to the project folder

```bash
cd product-inventory-management
```

Install dependencies

```bash
npm install
```

---

## ▶️ Running the Server

Start the development server

```bash
npm start
```

or

```bash
node server.js
```

Server will run on:

```
http://localhost:5000
```

---

## 🔑 API Endpoints

### Authentication

| Method | Endpoint | Description |
|------|------|------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login user |

---

### Products

| Method | Endpoint | Description |
|------|------|------|
| GET | `/api/products` | Get all products |
| POST | `/api/products` | Add new product |
| PUT | `/api/products/:id` | Update product |
| DELETE | `/api/products/:id` | Delete product |

⚠️ Product routes require **JWT authentication**.

---

## 🧪 Testing APIs

You can test the APIs using:

- **Postman**
- **Thunder Client (VS Code)**
- **Insomnia**

---

## 📌 Future Improvements

✨ Product search & filtering  
✨ Pagination for large inventories  
✨ Role-based access control (Admin/User)  
✨ Frontend integration (React or Angular)

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a Pull Request

---

## 👨‍💻 Author

**Affrin**

If you like this project, consider giving it a ⭐ on GitHub!
