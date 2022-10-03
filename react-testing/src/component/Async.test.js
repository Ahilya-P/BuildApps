import { render, screen } from '@testing-library/react'
import Async from './Async';

describe("Async Component", () => {
    test("renders posts if request succeeds", async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{
                id: "p1",
                title: "first post"
            }]
        })
        render(<Async />)
        //Act does not require cause useEffect render fetch function no need to write for that

        //Assertion
        const listItemElm = await screen.findAllByRole('listitem')
        expect(listItemElm).not.toHaveLength(0)
    })
})