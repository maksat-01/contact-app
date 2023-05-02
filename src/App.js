import './App.scss';
import {useState} from "react";
import ContactItems from "./components/ContactItems";
import TextInput from "./components/ui/TextInput";

function App() {
    const [inputError, setInputError] = useState({
        name: false,
        surname: false,
        phone: false
    })
    const [data, setData] = useState([])
    const [error, setError] = useState("")
    const [values, setValues] = useState({
        name: "",
        surname: "",
        phone: ""
    })

    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }
    const handleClick = () => {

        if (values.name === "" || values.surname === "" || values.phone === "") {
            Object.keys(inputError).reduce((acc, el) => {
                if (values[el] === "") {
                    setInputError({...inputError, [el]: true})
                }
                setTimeout(() => {
                    setInputError({
                        name: false,
                        surname: false,
                        phone: false
                    })
                }, 3000)
            }, {})
        }

        const foundContact = data.some(el => {
            return el.name === values.name && el.surname === values.surname && el.phone === values.phone
        })

        if (foundContact) {
            setError("бул контакт бар!!")
            // setData({
            //     name: "",
            //     surname: "",
            //     phone: ""
            // })
        } else {
            if (values.name !== "" && values.surname !== "" && values.phone !== "") {
                setData([...data, values])
                // setData({
                //     name: "",
                //     surname: "",
                //     phone: ""
                // })
            } else {
                setError("заполните пустые строки!")
            }
        }
    }

    const deleteData = (index) => {
        setData(data.filter((el, idx) => idx !== index))
    }

    const updateDate = (index, newValue) => {
        setData(data.map((el, idx) => idx === index ? {...el, ...newValue} : el))
    }
    return (
        <div className="App">
            <p className="text-center text-red-600 font-bold">{error}</p>
            <div className="container">
                <div className="w-[50%] mx-auto bg-amber-400 py-5 px-8 rounded-lg mt-9 pt-10">

                    <TextInput name="name" pl="name" inputError={inputError} value={values.name}
                               handleChange={handleChange}/>
                    <TextInput name="surname" pl="surname" inputError={inputError} value={values.surname}
                               handleChange={handleChange}/>
                    <TextInput name="phone" pl="phone" inputError={inputError} value={values.phone}
                               handleChange={handleChange}/>

                    <button
                        onClick={handleClick}
                        className="relative inline-flex m-3 items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                    <span
                        className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                         add
                     </span>
                    </button>

                </div>
                <div className="bg-amber-400 mx-auto w-[60%] my-10 py-2 px-2 rounded-lg">
                    {
                        data.map((el, idx) => <ContactItems
                            idx={idx}
                            key={idx}
                            deleteData={deleteData}
                            el={el}
                            updateData={updateDate}
                            handleChange={handleChange}
                        />)
                    }
                </div>

            </div>
        </div>
    );
}

export default App;
