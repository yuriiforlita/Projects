import React, { Component } from "react";
import "./add.css";

class List extends Component {
  render() {
    const filteredContacts = this.props.values.value.filter(
      contact =>
        contact.name.includes(this.props.values.search) ||
        contact.surname.includes(this.props.values.search) ||
        contact.phone.includes(this.props.values.search)
    );

    return (
      <div>
        <div className="dspFlex">
          <p>Name Surname</p>
          <p>Number</p>
        </div>
        <ul className="listDis">
          {filteredContacts
            .sort((a, b) => {
              const aCharCode = a.name.charCodeAt(0);
              const bCharCode = b.name.charCodeAt(0);
              return this.props.values.active
                ? aCharCode - bCharCode
                : bCharCode - aCharCode;
            })
            .map(el => (
              <li key={el.id} id={el.id}>
                {el.name}
                {el.surname}
                {el.phone}
                <button
                  type="submit"
                  className="delBut"
                  onClick={this.props.deleteIt.bind(this, el.id)}
                >
                  X
                </button>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default List;
