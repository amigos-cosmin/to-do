import type { NextPage } from "next";
import Head from "next/head";
import CC from "../components/CustomComponent";
import { useState } from "react";
import next from "next";
import ToDoList from "../components/List/ToDoList";
import styles from "../styles/IndexCustom.css";

const Home: NextPage = () => {
  const [sentence, setSentence] = useState("");
  const [watcher, setWatcher] = useState(0);
  const [dataList, setDataList] = useState([
    { text: "", status: false, id: "" },
  ]);

  const item = {
    text: "",
    status: false,
    id: "",
  };
  function addItem() {
    // alert({sentence}.sentence)
    item.text = { sentence }.sentence;
    item.id = Math.random().toString();
    setDataList(dataList.concat(item));
    document.getElementById("inp").value=""
  }
  return (
    <div>
      <Head>
        <title>To Do List</title>
        <meta name="description" content="A Simple To Do List" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CC></CC>

      <p>Clicked {watcher} times</p>
      <input
        type="text"
        onChange={() => setSentence(event.target.value)}
        placeholder="Write something..."
        id="inp"
      ></input><br></br><br></br>
      <button
        onClick={() => {
          setWatcher(watcher + 1), addItem();
        }}
      >
        Click me to add a task
      </button>
      <p>Input from box is {sentence}</p>
      <ToDoList props={dataList} setDataList={setDataList}></ToDoList>
    </div>
  );
};

export default Home;
