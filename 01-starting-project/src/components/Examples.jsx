import { useState } from "react";

import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";
import Tabs from "./Tabs.jsx"
import ExamplesSection from "./ExamplesSection.jsx";

export default function Examples() { 
    const [tabContent, setTabContent] = useState();

    function handleSelect(selectedButton) {
        // component based on selection
        setTabContent(selectedButton);
    }

    // handleSelect must run before value updates
    // if logged inside of handleSelect, the previous state is returned
    console.log(tabContent);

    let visibleContent = <p>Please select a topic.</p>;

    if(tabContent){ 
        visibleContent = (
        <div id="tab-content">
            <h3>{EXAMPLES[tabContent].title}</h3>
            <p>{EXAMPLES[tabContent].description}</p>
            <code>{EXAMPLES[tabContent].code}</code>
        </div>
        );
    }

    return (
        <ExamplesSection title="Examples" id="examples">
            <Tabs 
                // buttonContainer="menu" - menu is set as default in the Tabs component
                buttons = { 
                    <>
                        <TabButton 
                        isSelected={tabContent === "components"}
                        onSelect={() => handleSelect("components")}
                        >
                            Components
                        </TabButton>
                        <TabButton 
                            isSelected={tabContent === "jsx"}
                            onSelect={() => handleSelect("jsx")}
                        >
                            JSX
                        </TabButton>
                        <TabButton 
                            isSelected={tabContent === "props"}
                            onSelect={() => handleSelect("props")}
                        >
                            Props
                        </TabButton>
                        <TabButton 
                            isSelected={tabContent === "state"}
                            onSelect={() => handleSelect("state")}
                        >
                            State
                        </TabButton>
                    </>
                }
                
            >
                {visibleContent}
            </Tabs>
        </ExamplesSection>
    );
}