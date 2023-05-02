import React from 'react';
import ModalWindow from "../ModalWindow";
import {useState} from "react";

const ContactItems = ({el, deleteData, idx, handleChange, updateData}) => {
    const [modal, setModal] = useState(true)

    return (
        <div className="flex justify-between items-center bg-gray-500 m-3 px-4 rounded-lg text-white">
            <div className="flex">
                <div
                    className="mx-2 text-2xl font-bold flex justify-center items-center w-14 h-14 bg-amber-400 rounded-[50%]">{el.name[0].toUpperCase() + el.surname[0].toUpperCase()}</div>
                <div>
                    <h2 className="text-2xl font-bold">{el.name}</h2>
                    <h3 className="text-xl">{el.surname}</h3>
                </div>
            </div>
            <p>{el.phone}</p>
            <div className="flex">
                <ModalWindow el={el}
                             modal={modal}
                             setModal={setModal}
                             updateData={updateData}
                             handleChange={handleChange}
                             idx={idx}
                />
                <button type="button"
                        onClick={() => deleteData(idx)}
                        className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                    delete
                </button>


            </div>
        </div>
    );
};

export default ContactItems;