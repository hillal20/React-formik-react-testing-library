import { render, screen } from "@testing-library/react";
import MainPage from "./components/componentForTesting/mainPage/mainPage";
import Mybutton from "./components/componentForTesting/button";
import { BrowserRouter } from "react-router-dom";

it("renders learn react link:  toBeInTheDocument() ===>", () => {
  render(
    <BrowserRouter>
      <MainPage />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

it(" testing the component:  getByText ===> ", () => {
  render(
    <BrowserRouter>
      <Mybutton
        name="testing button"
        doSomething={() => {
          console.log("testing ");
        }}
        age={20}
      />
    </BrowserRouter>
  );
  const testButton = screen.getByText(/testing button/i).textContent;
  expect(testButton).toEqual("testing button");
});

it(" testing the component by role: getByRole()  ===> ", () => {
  render(
    <BrowserRouter>
      <Mybutton
        name="testing button"
        doSomething={() => {
          console.log("testing ");
        }}
        age={20}
      />
    </BrowserRouter>
  );
  const testButton = screen.getByRole("button", { name: "testing button" });
  expect(testButton).toBeInTheDocument();
});

it(" testing the component byAll  role:  getAllByRole() ===> ", () => {
  render(
    <BrowserRouter>
      <Mybutton
        name="testing button button"
        doSomething={() => {
          console.log("testing ");
        }}
        age={20}
      />
    </BrowserRouter>
  );
  const testButton = screen.getAllByRole("button");
  expect(testButton.length).toBe(3);
});

it(" testing the component by title :  getAllByRole() ===> ", () => {
  render(
    <BrowserRouter>
      <Mybutton
        name="testing button button"
        doSomething={() => {
          console.log("testing ");
        }}
        age={20}
      />
    </BrowserRouter>
  );
  const span = screen.getByTitle("spanIsHere");
  expect(span).toBeInTheDocument();
});

it(" testing the component by title :  getByTestId() ===> ", () => {
  render(
    <BrowserRouter>
      <Mybutton
        name="testing button button"
        doSomething={() => {
          console.log("testing ");
        }}
        age={20}
      />
    </BrowserRouter>
  );
  const testID = screen.getByTestId("dataTestElement");
  expect(testID).toBeInTheDocument();
});

it(" testing the component by findBy:  findByTestId() ===> ", async () => {
  render(
    <BrowserRouter>
      <Mybutton
        name="testing button button"
        doSomething={() => {
          console.log("testing ");
        }}
        age={20}
      />
    </BrowserRouter>
  );
  const testID = await screen.findByTestId("dataTestElement");
  expect(testID).toBeInTheDocument();
});

it(" testing the component by findBy:  queryByTestId() ===> ", () => {
  render(
    <BrowserRouter>
      <Mybutton
        name="testing button button"
        doSomething={() => {
          console.log("testing ");
        }}
        age={20}
      />
    </BrowserRouter>
  );
  const testID = screen.queryByTestId("dataTestElementTow");
  expect(testID).not.toBeInTheDocument();
});
it(" testing the component by findBy:  containHtml() ===> ", () => {
  render(
    <BrowserRouter>
      <Mybutton
        name="testing button button"
        doSomething={() => {
          console.log("testing ");
        }}
        age={20}
      />
    </BrowserRouter>
  );
  const testID = screen.queryByTestId("dataTestElement");
  expect(testID).toContainHTML("h1");
});

it(" testing the component by findBy:  containHtml() ===> ", () => {
  render(
    <BrowserRouter>
      <Mybutton
        name="testing button button"
        doSomething={() => {
          console.log("testing ");
        }}
        age={20}
      />
    </BrowserRouter>
  );
  const testID = screen.queryByTestId("dataTestElement");
  expect(testID.textContent).toBe('data test element')
});
