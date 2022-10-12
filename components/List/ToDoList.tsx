import styles from "../../styles/ToDoList.module.css";
import { useEffect, useState } from "react";
export default function ToDoList(props) {
  const setDataList = props.setDataList;
  const [state, setState] = useState([{}]);
  useEffect(() => {
    setState(props.props);
  });
  function removeItem(item) {
    const filteredData = state.filter((prop) => prop.id != item.item.id);
    setDataList(filteredData);
  }

  return (
    <div>
      <ol className={styles.customDiv}>
        {state.slice(1).map((item) => (
          <li>
            {item.text}
            <input
              type="checkbox"
              name="switch"
              className={styles.check}
              key={item}
            ></input>
            <button
              onClick={() => removeItem({ item })}
              className={styles.customButton}
            >
              Delete
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
