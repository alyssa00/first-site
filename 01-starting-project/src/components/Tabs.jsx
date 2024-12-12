export default function Tabs({ children, buttons, ButtonsContainer='menu' }) { 
    // uppercase B is important to signify component if the prop is not uppercase
    // const ButtonsContainer = buttonsContainer; 
    return <>
        <ButtonsContainer>{buttons}</ButtonsContainer>
        {children}
    </>
}