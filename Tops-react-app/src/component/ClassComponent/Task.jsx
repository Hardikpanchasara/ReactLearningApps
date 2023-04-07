import React, { Component } from 'react';

class SearchFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
      items: [
        { id: 1, name: 'hardik' },
        { id: 2, name: 'meet' },
        { id: 3, name: 'bhavya' },
        { id: 4, name: 'manish' },
        { id: 5, name: 'harnish' },
        { id: 6, name: 'komal' },
        { id: 7, name: 'savan' },
      ],
      filteredItems: [],
    };
  }

  handleSearchInputChange = (event) => {
    const { value } = event.target;
    this.setState({ searchInput: value }, () => {
      this.filterItems();
    });
  };

  filterItems = () => {
    const { searchInput, items } = this.state;
    const filteredItems = items.filter((item) =>
      item.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    this.setState({ filteredItems });
  };

  render() {
    const { searchInput, filteredItems } = this.state;
    return (
      <div>
        <input
          type="text"
          value={searchInput}
          onChange={this.handleSearchInputChange}
          placeholder="Search items..."
        />
        <ul>
          {filteredItems.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SearchFilter;

