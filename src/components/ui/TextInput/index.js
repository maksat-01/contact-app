import React from 'react';

const Index = ({handleChange,name, pl,value}) => {
    return (
        <input onChange={handleChange} type="search" id="default-search"
               className="block my-3 w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-500 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               name={pl}
               placeholder={name}
               defaultValue={value}
               required/>
    );
};

export default Index;