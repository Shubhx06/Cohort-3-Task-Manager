# 📝 DOM Explorer — Task Manager

A fully interactive Task Manager web application built using **HTML, CSS, and Vanilla JavaScript**.  
This project is designed to master **DOM manipulation, event handling, and core browser concepts**.

---

## 🚀 Features

- ➕ Add new tasks dynamically
- ✏️ Edit existing tasks
- ❌ Delete tasks
- ✅ Mark tasks as completed / undo
- 🔍 Search tasks in real-time
- 🎯 Filter tasks by category (Work / Study / Personal)
- 📊 Live counters (Total & Completed tasks)
- 🌙 Dark / Light mode toggle
- 💾 LocalStorage support (data persists after refresh)

---

## 🧠 Concepts Covered

### DOM Manipulation
- createElement()
- append()
- innerHTML
- querySelector()

### Event Handling
- addEventListener()
- form submit handling
- click events

### Event Delegation
- Single parent listener handles multiple buttons (Edit / Delete / Complete)

### Dataset / Attributes
- data-id
- data-status
- data-category

### Browser Concepts
- HTML Parsing
- DOM Tree
- CSSOM Tree
- Render Tree

### Event Propagation
- Bubbling
- Capturing

---

## 📁 Project Structure
Task-Manager/
│
├── index.html
├── style.css
├── script.js
└── README.md


---

## ▶️ How to Run

1. Clone the repository:
```bash
git clone https://github.com/your-username/task-manager.git



🌙 Dark Mode
Click the theme toggle button
Uses .dark-mode class
Theme state can be saved using localStorage



💾 Local Storage

Tasks are stored in browser storage:

localStorage.setItem("Obj", JSON.stringify(tasks))

So data remains even after refresh.



🎯 Learning Outcome

After building this project, you will understand:

How DOM works internally
Real-time UI updates using JavaScript
Event delegation vs multiple listeners
How real web apps manage state
Browser rendering pipeline basics


👨‍💻 Author

Built by Shubham Mahato
Focused on mastering DOM and frontend fundamentals 🚀