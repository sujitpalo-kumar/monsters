import './search.style.css'
const Search = ({changing}) => {

    return (
        <>
            <input
                className="search-box" 
                type="text" 
                placeholder="Search people"
                onChange={changing}
            />
        </>
    )
}

export default Search