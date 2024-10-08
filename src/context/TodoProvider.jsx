import React, { createContext, useState } from 'react'
import Swal from 'sweetalert2';


export const TodoContext=createContext()


const TodoProvider = ({children}) => {

  const [change, setChange] = useState(true);

  const [info, setInfo] = useState([]);
  const [filteredInfo, setFilteredInfo] = useState([]);


    

  const handleAddList = (newInfo) => {
    setInfo([...info, newInfo]);
    setFilteredInfo([...info, newInfo]); // her filterda silinmemesi için yedekli çalıstım
  };
  const handleDelete = (id) => {
    Swal.fire({
      title: "Görevi silmek istediğinizden emin misin?",
      text: "Geri dönüş yok!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Hayır, kalsın",
      confirmButtonText: "Evet, Sil!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Silindi!",
          text: "Görev silindi.",
          icon: "success",
        });
        const updatedInfo = info.filter((item) => item.id !== id);
        setInfo(updatedInfo);
        setFilteredInfo(updatedInfo);
      }
    });
  };
  const handleChecked = () => {
    setFilteredInfo(info.filter((item) => item.isChecked));
    setChange(false);
  };
  const handleNotChecked = () => {
    setFilteredInfo(info.filter((item) => !item.isChecked));
    setChange(false);
  };
  const handleImportant = () => {
    setFilteredInfo(info.filter((item) => item.isImportant));
    setChange(false);
  };
  const handleShowAll = () => {
    setFilteredInfo([...info]);
    setChange(true);
  };
  const handleDate = () => {
   
    setFilteredInfo(info.filter((item) => item.isDate));
    setChange(false);

  };

  return (
    <TodoContext.Provider value={{info, setInfo, filteredInfo, setFilteredInfo, handleAddList, change, handleDelete, handleChecked, handleNotChecked, handleImportant, handleShowAll, handleDate }}>
    {children}  
    </TodoContext.Provider>
  )
}

export default TodoProvider