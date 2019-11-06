import React from 'react';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: ''
    }

    this.receiveValue = this.receiveValue.bind(this);
    this.onInputClick = this.onInputClick.bind(this);

  }

  receiveValue(event) {
    
    let value = event.target.value;
    console.log(value);

    this.setState({
      name: value
    })

  }

  onInputClick(event) {

    console.log(event);
    console.log('Input was clicked');
  }

  render() {

    let name = this.state.name;
    

    return (
      <div>
        <label>Name </label>
        <input type="text" className="input" 
        onClick={this.onInputClick}
        onChange={this.receiveValue}/>
        <div>
          {name}
        </div>
        
      </div>
    )
  }
}

export default SearchBar;