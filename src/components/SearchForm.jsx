import { useState } from "react"

export const SearchForm = ({searchText}) => {
    const [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        searchText(text)
    }

    return <form action="" onSubmit={onSubmit}>
        <input readOnly={false} type="text" placeholder="Search image..." value={text} onChange={(e) => setText(e.target.value)}/>
        <button type="submit">Search</button>
    </form>
}