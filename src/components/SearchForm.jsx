import { useState } from "react"

export const SearchForm = ({onSubmit}) => {
    const [searchTerm, setSearchTerm] = useState('')

    const handleSubmit = () => {
        onSubmit(searchTerm)
    }

    return <form action="" onSubmit={(e) => e.preventDefault()}>
        <input readOnly={false} type="text" placeholder="Search image..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
        <button type="submit" onClick={handleSubmit}>Search</button>
    </form>
}