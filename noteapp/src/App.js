import { useState } from "react";
import Createnote from "./component/Createnote";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Note from "./component/Note";

function App() {
  const [addItem,setaddItem] = useState([]);
  const addNote = (note) => {
    //  alert("clicked")
    setaddItem((prev) => {
      return [...prev , note];
    });
  };
  const onDelete = (id) => {
    setaddItem((oldData) =>
      oldData.filter((curdata,ind) => {
        return ind !== id;
      })
    )
  };
  return (
    <div>
      <Header />
      <Footer />
      <Createnote passNote={addNote} />
      {addItem.map((val,index) => {
        return <Note 
          key={index}
          id={index}
          title={val.title}
          content={val.content}
          deleteItem={onDelete}
        />
      } )}
    </div>
  );
}

export default App;
