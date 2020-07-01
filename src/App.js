import React from "react";
import logo from "./logo.png";
import "./App.css";
import "./assets/css/main.css";
import firebase from "./utils/firebase";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }
  componentDidMount() {
    this.loadUsers();
  }
  loadUsers() {
    const db = firebase.firestore();
    db.collection(`users`)
      .get()
      .then((response) => {
        let users = response.docs.map((doc) => {
          return { ...{ id: doc.id }, ...doc.data() };
        });
        this.setState({ users });
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  }

  render() {
    return (
      <div className="flex justify-center h-full">
        <div className="mt-8 p-8 border border-gray-300 bg-white shadow-xl rounded justify-center">
          <div className="flex justify-center mb-8">
            <img className="w-24" src={logo} />
          </div>
          <div>
            <table className="table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Lastname</th>
                  <th className="px-4 py-2">Age</th>
                </tr>
              </thead>
              <tbody>
                {this.state.users.map((user, idx) => (
                  <tr key={idx}>
                    <td className="border px-4 py-2">{user.name}</td>
                    <td className="border px-4 py-2">{user.lastname}</td>
                    <td className="border px-4 py-2">{user.age}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
