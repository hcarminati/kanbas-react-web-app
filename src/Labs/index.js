import Styles from "./a3/Styles";
import Classes from "./a3/Classes";
import PathParameters from "./a3/PathParameters";
import JavaScript from "./a3/JavaScript";
import ConditionalOutput from "./a3/ConditionalOutput";
import TodoItem from "./a3/todo/TodoItem";
import TodoList from "./a3/todo/TodoList";
import Nav from "../Nav";

function Assignment3() {
    return (
        <div>
            <Nav/>
            <h1>Assignment 3</h1>
            <TodoItem/>
            <TodoList/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
            <PathParameters/>
            <JavaScript/>
        </div>
    )
}

export default Assignment3;