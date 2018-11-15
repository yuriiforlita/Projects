import React, { Component } from "react";
import "./add.css";
class List extends Component {
  render() {
    let filteredContacts = this.props.values.value.filter(contact => {
      return (
        contact.name.includes(this.props.values.search) ||
        contact.surname.includes(this.props.values.search) ||
        contact.phone.includes(this.props.values.search)
      );
    });

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
            .map((el, id) => {
              return (
                <li key={id} id={el.id}>
                  {el.name} {el.surname} {el.phone}
                  <button
                    className="delBut"
                    onClick={this.props.deleteIt.bind(this, el.id)}
                  >
                    X
                  </button>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

export default List;
