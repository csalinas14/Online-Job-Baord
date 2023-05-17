import React from 'react';
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";

const Search_Bar = props => {
    return(
        <div class="flex justify-center py-3 border-none">
            <form action="" class="w-full max-w-md ">
                <div class="relative flex items-center text-gray-400 focus-within:text-gray-600">
                    <MagnifyingGlassIcon class="w-5 h-5 absolute ml-3 pointer-events-none"/>
                    <input type="text"
                        name="search"
                        placeholder="Search Jobs"
                        autocomplete="off"
                        aria-label="Search Jobs"
                        class="w-full pr-3 pl-10 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl border-none focus:outline-none"
                    ></input>
                </div>
            </form>
        </div>
    )
}


export default Search_Bar;
