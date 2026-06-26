import { useState } from "react";
import "./App.css";
import hariImage from "./hari.jpg";
import kariImage from "./kari.webp";

function App() {
  const [users, setUsers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");
const [sortOrder, setSortOrder] = useState("asc");

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [department, setDepartment] = useState("");
  const [semester, setSemester] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = () => {
    const user = { id, name, age, email, phone, department, semester };

    if (editIndex !== null) {
      const updatedUsers = [...users];
      updatedUsers[editIndex] = user;
      setUsers(updatedUsers);
    } else {
      setUsers([...users, user]);
    }

    setName("");
    setAge("");
    setEmail("");
    setPhone("");
    setDepartment("");
    setSemester("");
    setEditIndex(null);
    setShowForm(false);
  };

  const handleEdit = (index) => {
    setName(users[index].name);
    setAge(users[index].age);
    setId(users[index].id || "");
    setEmail(users[index].email || "");
    setPhone(users[index].phone || "");
    setDepartment(users[index].department || "");
    setSemester(users[index].semester || "");
    setEditIndex(index);
    setShowForm(true);
  };
  const filteredUsers = [...users]
  .filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  )
  .sort((a, b) => {
    if (sortOrder === "asc") {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });
  return (
    <div className="container"
      style ={{
    backgroundImage: `url(${hariImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
  }}
  >

      <div className="header">
        <h2>Student User Management</h2>

        <button
          className="new-user-btn"
          onClick={() => {
            setShowForm(true);
            setName("");
            setAge("");
            setId("");
            setEmail("");
            setPhone("");
            setDepartment("");
            setSemester("");
            setEditIndex(null);
          }}
        >+ New User</button>
      </div>

<img
  src={kariImage}
  alt="Student"
  style={{
    width: "350px",
    borderRadius: "10px",
  }}
/>

      {showForm && (
        <div className="form-card">
          <h3>
            {editIndex !== null ? "Edit User" : "Add User"}
          </h3>
          
          <input
          type="text"
          placeholder="Student ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          />

          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="number"
            placeholder="Enter Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />

          <input
           type="email"
           placeholder="Email ID"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <input
            type="text"
            placeholder="Department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >
             <option value="">Select Department</option>
             <option value="CSE">CSE</option>
             <option value="IT">IT</option>
             <option value="ECE">ECE</option>
             <option value="EEE">EEE</option>
             <option value="MECH">MECH</option>
             <option value="CIVIL">CIVIL</option>
          </select>
          <select
           value={semester}
          onChange={(e) => setSemester(e.target.value)}
          >
            <option value="">Select Semester</option>
  <option value="1">Semester 1</option>
  <option value="2">Semester 2</option>
  <option value="3">Semester 3</option>
  <option value="4">Semester 4</option>
  <option value="5">Semester 5</option>
  <option value="6">Semester 6</option>
  <option value="7">Semester 7</option>
  <option value="8">Semester 8</option>
</select>


          <div className="button-group">
            <button onClick={handleSubmit}>
              {editIndex !== null ? "Update" : "Save"}
            </button>

            <button
              onClick={() => setShowForm(false)}
              className="cancel-btn"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      <div className="table-controls">

  <input
    type="text"
    placeholder="Search User..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />

  <select
    value={sortOrder}
    onChange={(e) => setSortOrder(e.target.value)}
  >
    <option value="asc">A - Z</option>
    <option value="desc">Z - A</option>
  </select>
<div
  style={{
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "500px",
    width: "100%",

  }}
  
></div>
</div>
<div className="table-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Phone</th>
            <th>Department</th>
            <th>Semester</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredUsers.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.department}</td>
              <td>{user.semester}</td>
              <td>
                <button
                  className="edit-btn"
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
</div>
  );
}

export default App;
