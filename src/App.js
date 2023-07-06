import logo from './logo.svg';
import './App.css';
// import SimpleCalculator from "./components/SimpleCalculator";
import ListStudents from "./components/ListStudents";
import {Container} from "@mui/material";

function App() {
  return (
      <>
        {/*<SimpleCalculator title={"Exercise 1: Simple Calculator"}/>*/}
        <Container>
                <ListStudents props={"Exercise 2: List Students"}/>
        </Container>
      </>
  );
}

export default App;
