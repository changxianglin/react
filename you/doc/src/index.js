// import React from 'react'
// import ReactDOM from 'react-dom'

// class NameFrom extends React.Component{
//     constructor(props) {
//         super(props)
//         this.state = { value: '' }

//         this.handleChange = this.handleChange.bind(this)
//         this.handleSubmit = this.handleSubmit.bind(this)
//     }

//     handleChange(event) {
//         this.setState({
//             value: event.target.value
//         })
//     }

//     handleSubmit(event) {
//         alert('A name was submitted: ' + this.state.value)
//         event.preventDefault()
//     }

//     render() {
//         return (
//             <form onSubmit = {this.handleSubmit}>
//                 <label>
//                     Name:
//                     <input type = 'text' value = {this.state.value} onChange = {this.handleChange} />
//                 </label>
//                 <input type = 'submit' value = 'Submit' />
//             </form>
//         )
//     }
// }

// ReactDOM.render(
//     <NameFrom />,
//     document.getElementById('root')
// )

// import React from 'react'
// import ReactDOM from 'react-dom'

// class EassyForm extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             value: 'Please wirte an essay about your favorite DOM element.'
//         }

//         this.handleChange = this.handleChange.bind(this)
//         this.handleSubmit = this.handleSubmit.bind(this)
//     }

//     handleChange(event) {
//         this.setState({
//             value: event.target.value
//         })
//     }

//     handleSubmit(event) {
//         alert('An essay was submitted: ' + this.state.value)
//         event.preventDefault()
//     }

//     render() {
//         return (
//             <form onSubmit = {this.handleSubmit}>
//                 <label>
//                     Name:
//                     <textarea value = {this.state.value} onChange = { this.handleChange } />
//                 </label>
//                 <input type = 'submit' value = 'submit'/>
//             </form>
//         )
//     }
// }

// ReactDOM.render(
//     <EassyForm />,
//     document.getElementById('root')
// )


// import React from 'react'
// import ReactDOM from 'react-dom'

// class FlavorForm extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {value: 'coconut'};
  
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     handleChange(event) {
//       this.setState({value: event.target.value});
//     }
  
//     handleSubmit(event) {
//       alert('Your favorite flavor is: ' + this.state.value);
//       event.preventDefault();
//     }
  
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Pick your favorite La Croix flavor:
//             <select value={this.state.value} onChange={this.handleChange}>
//               <option value="grapefruit">Grapefruit</option>
//               <option value="lime">Lime</option>
//               <option value="coconut">Coconut</option>
//               <option value="mango">Mango</option>
//             </select>
//           </label>
//           <input type="submit" value="Submit" />
//         </form>
//       );
//     }
//   }


// ReactDOM.render(
//     <FlavorForm />,
//     document.getElementById('root')
// )

import React from 'react'
import ReactDOM from 'react-dom'

class Reservation extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isGoing: true,
        numberOfGuests: 2
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }
  
    render() {
      return (
        <form>
          <label>
            Is going:
            <input
              name="isGoing"
              type="checkbox"
              checked={this.state.isGoing}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Number of guests:
            <input
              name="numberOfGuests"
              type="number"
              value={this.state.numberOfGuests}
              onChange={this.handleInputChange} />
          </label>
        </form>
      );
    }
  }

  ReactDOM.render(
      <Reservation />,
      document.getElementById('root')
  )