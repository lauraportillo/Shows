import React from 'react';
import Show from './Show';

class ShowList extends React.Component {
  constructor(props) {
    super(props);
  }
  // DUDA DE PONERLO CON ID
  render() {
    // console.log(this.props.shows);
    const result = this.props.shows.map((show, index) => {
      return (
        <li key={index}>
          <Show show={show} />
        </li>
      );
    });

    return (
      <div>
        <h2>Soy un componente con una Lista</h2>
        <ul>{result}</ul>
      </div>
    );
  }
}

export default ShowList;

// COMPONENTE FUNCIONAL

// import React from 'react';
// import Show from './Show';

// function ShowList() {
//   const result = shows.map((show) => {
//     return (
//       <li key={show.id}>
//         <Show show={show} />
//       </li>
//     );
//   });

//   return (
//     <div>
//       <h2>Soy un componente con una Lista</h2>
//       <ul>{result}</ul>
//     </div>
//   );
// }

// export default ShowList;
