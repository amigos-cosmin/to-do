import axios from "axios";
import CustomList from "../components/List/CustomList";
const ToDo = ({ toDoList }) => {
  console.log(toDoList);
  return (
    <div>
      <CustomList props={toDoList}></CustomList>
    </div>
  );
};

export const getStaticProps = async () => {
  const data = await axios.get(
    "https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8"
  );

  return {
    props: {
      toDoList: data.data,
    },
  };
};

export default ToDo;
