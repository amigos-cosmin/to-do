import axios from "axios";

export default function apiExample(){
    return(
        <div>
            {data.data}
        </div>
    );
}

export const getServerSideProps = async () => {
  const data = await axios.get("api/hello");
};
