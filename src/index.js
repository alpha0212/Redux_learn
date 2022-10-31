import { createStore } from "redux";
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";

/**
 * ADD 와 MINUS를 함수화 해주는 이유는 handle이나 modify할 때
 * string형식에서 오타가 나면 오류를 잡지 못하는데
 * 함수화하면 함수명에 오타가 생겼을 시에 undefined가 뜨기 때문에
 * 오류를 잡을수 있다.
 */
const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};
const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);

//Next learn to do list redux
