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
            .sort((a, b) =>
              a.name.charCodeAt(0) > b.name.charCodeAt(0)
                ? this.props.values.statusF
                : this.props.values.statusS
            )
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
