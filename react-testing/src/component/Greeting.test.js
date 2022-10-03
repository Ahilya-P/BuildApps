import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';
import userEvent from '@testing-library/user-event';

describe("Greeting Component", () => {
    test('renders hello world as text', () => {
        //Arrangre 
        render(<Greeting />)

        //Act
        //...nothing

        //Assert
        const helloWorldElement = screen.getByText("Hello World", { exact: false })
        expect(helloWorldElement).toBeInTheDocument()
    })
    test('renders good to see you if the button was not clicked', () => {
        //Arrage
        render(<Greeting />)
        //Act
        //...noaction
        const buttonNotClicked = screen.getByText('good to see you', { exact: false });
        expect(buttonNotClicked).toBeInTheDocument()

    })
    test('renders Good to see you', () => {
        //Arranbe
        render(<Greeting />)
        //Act
        //button clicked userEvent
        const buttonClickElement = screen.getByRole('button');
        userEvent.click(buttonClickElement)

        const buttonClickedoutput = screen.getByText("good to see you", { exact: false })
        expect(buttonClickedoutput).toBeInTheDocument()

    })
    test("does not render good to see you , if the button was clicked", () => {
        render(<Greeting />)
        //Act
        const butClickEle = screen.getByRole('button')
        userEvent.click(butClickEle)
        //Assert
        const opElem = screen.queryByText("Good to see you", { exact: false })
        expect(opElem).toBeNull()
    })
})
