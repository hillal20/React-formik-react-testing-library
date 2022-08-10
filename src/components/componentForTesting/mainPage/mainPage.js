import React from "react";
import "../../../App.css";
import YoutubeForm from '../../Youtubeform';
import FormikFormReactContext from "../../fomikFomReactContext";
import Mybutton from "../../componentForTesting/button";
const MainPage = () => {
  return (
    <div className="App">
      <h1>learn react</h1>
      <YoutubeForm />
      <FormikFormReactContext />
      <Mybutton
        name="test button"
        doSomething={() => {
          console.log("click");
        }}
        age={13}
      />
    </div>
  );
};
export default MainPage;