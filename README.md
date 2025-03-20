
---

# ✅ React To-Do List

A simple, interactive **To-Do List** built with **React**, allowing users to manage daily tasks by adding, deleting, and reordering them. It offers an intuitive interface with smooth styling and functional task management features.

---

## 🚀 Features

- ➕ Add tasks via an input field.
- 🗑️ Delete tasks from the list.
- ⬆️ Move tasks **up** or ⬇️ **down** to prioritize.
- 📃 Real-time updates using React’s **state management**.
- 🎨 Responsive and aesthetic UI with hover effects and shadows.

---

## 🧰 Technologies Used

- **React** (Hooks: `useState`)
- **CSS** for styling and layout
- **JavaScript** (functional programming)

---

## 📂 Project Structure

```
ToDoList/
├── ToDoList.js              // React Component
├── ToDoList.module.css      // Scoped CSS styling
├── assets/                  // (Optional) Images or icons
```

---

## 🛠️ Installation & Usage

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/react-todo-list.git
   cd react-todo-list
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the App**
   ```bash
   npm start
   ```

4. **Usage**
   - Enter a task in the input field.
   - Click **Add** to include it in your list.
   - Use **👆 Up / 👇 Down** to reorder tasks.
   - Click **Delete** to remove a task.

---

## 🎨 UI & Styling

- **Container**: Centered, with a subtle box shadow.
- **Buttons**: Color-coded (Green = Add, Red = Delete, Olive = Move).
- **Hover Effects**: Darken color for button interactions.
- **Fonts**: Classic serif (`Times New Roman`) with large, readable text.

### Sample CSS Snippet:
```css
.AddButton {
    background-color: hsl(120, 73%, 45%);
    cursor: pointer;
}
.AddButton:hover {
    background-color: hsl(120, 73%, 15%);
}
```

---

## ⚡ Future Enhancements

- ✍️ **Edit Task** functionality.
- 📅 Add **due dates** or **priorities**.
- 📲 **Mobile responsive** layout.
- 🗃️ Persist tasks using **localStorage** or a **backend**.
- 🌓 Add **dark mode** toggle.

---

## 🙌 Acknowledgements

Inspired by daily productivity needs and built as a learning project in **React**.

---
