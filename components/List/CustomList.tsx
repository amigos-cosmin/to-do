import next from "next";

export default function CustomList(props) {
    ///First attempt using persons in return statement.
//   console.log(props);
//   const persons = props.props.map((person) => {
//     return (
//       <ul>
//         <li>
//           {person.name} is from {person.city}
//         </li>
//       </ul>
//     );
//   });

///Second attempt is cleaner also can be used orders list, first attemp could not use it.
  return (
    <div>
      <ol>
        {props.props.map(person => <li>{person.name} lives in {person.city}</li>)}
      </ol>
    </div>
  );
}
