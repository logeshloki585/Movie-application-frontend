import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { END_POINT } from '../../Assests/Container';

function AllMovies() {
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [uniqueDirectors, setUniqueDirectors] = useState([]);
    const [uniqueActors, setUniqueActors] = useState([]);
    const [uniqueReleaseYear, setUniqueReleaseYear] = useState([]);
    const [uniqueLanguages, setUniqueLanguages] = useState([]);
    const [filterOption, setFilteredOption] = useState({ actor: '', director: '', year: null, language: '' });
    const [isFilter, setIsFilter] = useState(false);

    const handleSelectChange = (event) => {
        let { name, value } = event.target;
        if (name ==='year'){
            value = parseInt(value)
        }
        setFilteredOption({ ...filterOption, [name]:  value});
        console.log(filterOption)
    };

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const specificEndpoint = '/movie/getMovie';
                const fullUrl = `${END_POINT}${specificEndpoint}`;
               
                const response = await axios.get(fullUrl);
                setMovies(response.data.movies);

                const directors = [...new Set(response.data.movies.map(movie => movie.director))];
                const actors = response.data.movies.reduce((acc, movie) => {
                    movie.actors.forEach(actor => acc.add(actor.name));
                    return acc;
                }, new Set());
                const releaseYear = [...new Set(response.data.movies.map(movie => movie.releaseYear))];
                const languages = [...new Set(response.data.movies.map(movie => movie.language))];

                setUniqueDirectors(directors);
                setUniqueActors(Array.from(actors));
                setUniqueReleaseYear(releaseYear);
                setUniqueLanguages(languages);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchMovies();
    }, []);

    const filterMovies = (selection) => {
        if (!selection.director && !selection.actor && !selection.year && !selection.language) {
            setFilteredMovies(movies);
            setIsFilter(false);
            return;
        }

        let filtered = movies;

        if (selection.director) {
            filtered = filtered.filter(movie => movie.director === selection.director);
        }

        if (selection.actor) {
            filtered = filtered.filter(movie => movie.actors.some(actor => actor.name === selection.actor));
        }

        if (selection.year) {
            filtered = filtered.filter(movie => movie.releaseYear === selection.year);
        }

        if (selection.language) {
            filtered = filtered.filter(movie => movie.language === selection.language);
        }
        console.log(filtered)
        setFilteredMovies(filtered);
        setIsFilter(true);
    };

    useEffect(() => {
        filterMovies(filterOption);
    }, [filterOption]);


    return (
        <div className=' h-auto lg:px-16 md:flex'>
            <div className='min-w-[400px] px-4'>
                <div className="space-y-2 ">
                        <h1 className='text-[28px] text-[#e63e3e]'>FILTER</h1>
                        
                        <details
                            className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
                        >
                            <summary
                            className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition"
                            >
                            <span className="text-sm font-medium"> ACTOR </span>

                            <span className="transition group-open:-rotate-180">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-4 w-4"
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                                </svg>
                            </span>
                            </summary>

                            <div className="border-t border-gray-200 bg-white">
                            <header className="flex items-center justify-between p-4">
                                <span className="text-sm text-gray-700"> Filter movie based on Actor</span>
                            </header>

                            <ul className="space-y-1 border-t border-gray-200 p-4">
                            <select name='actor'  className='w-full border border-gray-300 p-2 rounded-[10px] '
                            value={filterOption.actor} onChange={handleSelectChange}
                            >   
                                <option  value=''>All Actors</option>
                                {uniqueActors.map((e)=>(
                                <option   value={e}>{e}</option>
                                ))}
                                
                            </select>
                            </ul>
                            </div>
                        </details>

                        <details
                            className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
                        >
                            <summary
                            className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition"
                            >
                            <span className="text-sm font-medium"> DIRECTOR </span>

                            <span className="transition group-open:-rotate-180">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-4 w-4"
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                                </svg>
                            </span>
                            </summary>

                            <div className="border-t border-gray-200 bg-white">
                            <header className="flex items-center justify-between p-4">
                                <span className="text-sm text-gray-700"> Filter movie based on Director</span>
                            </header>

                            <ul className="space-y-1 border-t border-gray-200 p-4">
                            <select name='director' className='w-full border border-gray-300 p-2 rounded-[10px] '
                            value={filterOption.director} onChange={handleSelectChange}
                            >   
                                <option  value=''>All Director</option>
                                {uniqueDirectors.map((e)=>(
                                <option   value={e}>{e}</option>
                                ))}
                                
                            </select>
                            </ul>
                            </div>
                        </details>

                        <details
                            className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
                        >
                            <summary
                            className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition"
                            >
                            <span className="text-sm font-medium"> Year </span>

                            <span className="transition group-open:-rotate-180">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-4 w-4"
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                                </svg>
                            </span>
                            </summary>

                            <div className="border-t border-gray-200 bg-white">
                            <header className="flex items-center justify-between p-4">
                                <span className="text-sm text-gray-700"> Filter movies based on Release Year</span>
                            </header>

                            <ul className="space-y-1 border-t border-gray-200 p-4">
                            <select name='year' className='w-full border border-gray-300 p-2 rounded-[10px] '
                            value={filterOption.year} onChange={handleSelectChange}
                            >   
                                <option  value={null}>All Years</option>
                                {uniqueReleaseYear.map((e)=>(
                                <option   value={e}>{e}</option>
                                ))}
                            </select>
                            </ul>
                            </div>
                        </details>

                        <details
                            className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
                        >
                            <summary
                            className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition"
                            >
                            <span className="text-sm font-medium"> LANGUAGE </span>

                            <span className="transition group-open:-rotate-180">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-4 w-4"
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                                </svg>
                            </span>
                            </summary>

                            <div className="border-t border-gray-200 bg-white">
                            <header className="flex items-center justify-between p-4">
                                <span className="text-sm text-gray-700"> Filter movies based on language</span>
                            </header>

                            <ul className="space-y-1 border-t border-gray-200 p-4">
                            <select name='language' className='w-full border border-gray-300 p-2 rounded-[10px] '
                            value={filterOption.language} onChange={handleSelectChange}
                            >   
                                <option  value=''>All Language</option>
                                {uniqueLanguages.map((e)=>(
                                <option   value={e}>{e}</option>
                                ))}
                            </select>
                            </ul>
                            </div>
                        </details>
                </div>
            </div>
            <div>
                    <h1 className='text-[28px] ml-4 text-[#e63e3e]'>MOVIES</h1>
                    <div className='flex flex-wrap'>
                    {isFilter ? (
                        filteredMovies.map((e) => (
                            <div className='h-[320px] w-[210px] m-4 mb-8 relative'>
                                <img className='h-full' src={e.posterURL} alt={e.title} />
                                <div className="absolute  bottom-0 w-full bg-black bg-opacity-70 text-white px-1 py-0.5">
                                     Rating ⭐ 4.5/5
                                </div>
                                <div className='text-[14px] uppercase'>{e.title}</div>
                                <div className='text-[14px] '>{e.language}</div>
                                <div className="absolute text-sm font-bold text-[#e00f0f] top-0 right-0 px-2 bg-white m-2 rounded-[50px] bg-opacity-70 text-white px-1 py-0.5">
                                     {e.releaseYear}
                                </div>
                            </div>
                           ))
                           ) :(
                            movies.map((e) => (
                                <div className='h-[320px] w-[210px] m-4 mb-8 relative'>
                                <img className='h-full' src={e.posterURL} alt={e.title} />
                                <div className="absolute  bottom-0 w-full bg-black bg-opacity-70 text-white px-1 py-0.5">
                                     Rating ⭐ 4.5/5
                                </div>
                                <div className='text-[14px] uppercase'>{e.title}</div>
                                <div className='text-[14px] '>{e.language}</div>
                                <div className="absolute text-sm font-bold text-[#e00f0f] top-0 right-0 px-2 bg-white m-2 rounded-[50px] bg-opacity-70 text-white px-1 py-0.5">
                                     {e.releaseYear}
                                </div>
                            </div> ))
                    )
                    }
                    
                    </div>
                    
                </div>
        </div>
    );
}

export default AllMovies;
