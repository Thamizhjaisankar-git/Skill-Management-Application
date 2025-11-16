# 🚀 Skill Management System – CRUD Application

A full-stack **Skill Management System** that allows users to Create, Read, Update, and Delete (CRUD) skill records.  


## Technology stack

- **React.js** – Frontend  
- **Tailwind CSS, CSS** – UI Styling  
- **Spring Boot** – Backend REST API  
- **MySQL** – Database  


## 📌 Features

### ⭐ Frontend (React + Tailwind CSS)
- Responsive UI with TailwindCSS  
- Add, update, delete skills  
- View skill list in a table  
- Form validation  
- API integration with Axios  
- Component-based structure  

### ⭐ Backend (Spring Boot)
- RESTful API for all CRUD operations  
- JPA/Hibernate for database interaction  
- Service and Repository layers  
- Exception handling  
- CORS enabled for React  

### ⭐ Database (MySQL)
- Skills table  
- Auto-increment ID  
- JPA schema management  


## ⚙️ Installation & Setup

1. Clone the Repository

   ```bash
   git clone https://github.com/USERNAME/Skill-Management-Application.git
   cd Skill-Management-Application

2. 🌐 Frontend Setup (React + Tailwind)
   ```bash
    cd frontend
    npm install
    npm start
   
3. 🔧 Backend Setup (Spring Boot)
Update application.properties:
   ```bash
    spring.datasource.url=jdbc:mysql://localhost:3306/skilldb
    spring.datasource.username=root
    spring.datasource.password=yourpassword
    
    spring.jpa.hibernate.ddl-auto=update
    spring.jpa.show-sql=true

   
## 🚀 Future Enhancements

- User authentication (Login/Register)
- Admin dashboard
- Search & Pagination
- Export to PDF / Excel
- Dark Mode

  

   



