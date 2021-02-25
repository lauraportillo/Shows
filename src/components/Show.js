import React from 'react';

function Show(props) {
  // const Schedulix = props.show.schedule.map((time, index) => {
  //   return <li key={index}>{time}</li>;
  // });

  const renderImageSrc = () => {
    if (props.show.show.image) {
      return props.show.show.image.medium;
    } else {
      return 'https://via.placeholder.com/210x295/ffffff/666666/?text=' + props.show.show.name;
    }
    // esto también se puede hacer con un ternario con el siguiente código
    return props.show.show.image
      ? props.show.show.image.medium
      : 'https://via.placeholder.com/210x295/ffffff/666666/?text=' + props.show.show.name;
  };

  return (
    <div>
      <article>
        <h2>Nombre de la serie: {props.show.show.name} </h2>
        <img src={renderImageSrc()} alt={props.show.show.name} />
        <h3>Idioma:{props.show.show.language}</h3>
        <h3>Género:{props.show.show.genres[0]}</h3>
        <h3>Horario de emisión:</h3>
        {/* <ul>{Schedulix}</ul> */}
      </article>
    </div>
  );
}

export default Show;
