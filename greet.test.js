import { render ,screen} from "@testing-library/react";
import Greet from "./greet";

describe("alltest", () => {
    test("expense list page", () => {
        render(<Greet></Greet>)

        const money = screen.getByText("hello world")
        expect(money).toBeInTheDocument()      
    })
})
        
        


   