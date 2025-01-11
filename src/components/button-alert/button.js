import React from 'react';
import "./button.css"

class ButtonAlert extends React.Component {
    cliked = () => {
        alert(`A label desse botão é ${this.props.label}`)
    }



    render() {
        return (
            <div className="button-container">
            <button className="button-alert" onClick={this.cliked}>
              {this.props.label}
            </button>
          </div>
        )
    }
}

export default ButtonAlert;