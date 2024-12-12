

export default function ExamplesSection({title, children, ...props}) { 
    return (
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}