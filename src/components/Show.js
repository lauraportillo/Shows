import React from 'react';

function Show(props) {
  // const Schedulix = props.show.schedule.map((time, index) => {
  //   return <li key={index}>{time}</li>;
  // });

  return (
    <div>
      <article>
        <h2>Nombre de la serie: {props.show.show.name} </h2>
        {/* <img src={props.show.show.url} alt={props.show.show.name}> */}
        <h3>Idioma:{props.show.show.language}</h3>
        <h3>Género:{props.show.show.genres[0]}</h3>
        <h3>Horario de emisión:</h3>
        {/* <ul>{Schedulix}</ul> */}
      </article>
    </div>
  );
}

export default Show;
