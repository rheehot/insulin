// import React from 'react';
// import { Select } from 'antd';
// // import jsonp from 'fetch-jsonp';
// // import querystring from 'querystring';

// const { Option } = Select;

// let timeout;
// let currentValue;

// class SearchInput extends React.Component {
//   state = {
//     data: [],
//     value: undefined,
//   };

//   handleSearch = value => {
//     fetch(value, data => this.setState({ data }));
//   };

//   handleChange = value => {
//     this.setState({ value });
//   };

//   render() {
//     const options = this.state.data.map(d => <Option key={d.value}>{d.text}</Option>);
//     return (
//       <Select
//         showSearch
//         value={this.state.value}
//         placeholder={this.props.placeholder}
//         style={this.props.style}
//         defaultActiveFirstOption={false}
//         showArrow={false}
//         filterOption={false}
//         onSearch={this.handleSearch}
//         onChange={this.handleChange}
//         notFoundContent={null}
//       >
//         {options}
//       </Select>
//     );
//   }
// }
// export default SearchInput;
