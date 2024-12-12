
// Example of how props are passed into resusable components
// This same function can be used with destrcuturing 
// function CoreConcepts(myProps) { 
//   return (
//     <li>
//       <img src={myProps.image} alt={myProps.title} />
//       <h3>{myProps.title}</h3>
//       <p>{myProps.description}</p>
//     </li>
//   );
// }

// The destructured function must list the exact variables names
// as listed in data.js and <CoreConcepts/>
function CoreConceptTiles({image, title, description}) { 
    return (
      <li>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    );
}

export default CoreConceptTiles;