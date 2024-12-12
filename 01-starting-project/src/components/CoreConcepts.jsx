import { CORE_CONCEPTS } from "../data.js"
import CoreConceptTiles from "./CoreConceptTiles.jsx"

export default function CoreConcepts() { 
    return (
        <section id="core-concepts">
            <h2>Time to get started with Core Concepts!</h2>
            <ul>
            {/* <CoreConceptTiles 
                title={CORE_CONCEPTS[0].title} 
                description={CORE_CONCEPTS[0].description}
                image={CORE_CONCEPTS[0].image}
            />
                
                // using the ... (spread operator) is a shortcut for the
                //code that generate the first CoreConcepts component
            <CoreConceptTiles {...CORE_CONCEPTS[1]} />
            <CoreConceptTiles {...CORE_CONCEPTS[2]} />
            <CoreConceptTiles {...CORE_CONCEPTS[3]} />
            <CoreConceptTiles {...CORE_CONCEPTS[4]} /> 

            // .map() below replaces all of these statements and
            // dynamically retrieves the elements for the concepts on the UI page
            // key prop is added to remove a warnning on the console
            */}

            {CORE_CONCEPTS.map((conceptItem) => (
                <CoreConceptTiles key={conceptItem.title} {...conceptItem}/>
            ))}
            </ul>
        </section>
    );
}