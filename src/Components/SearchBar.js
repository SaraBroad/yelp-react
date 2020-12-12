import React from 'react'

class SearchBar extends React.Component {
    state = { category: '' }

    onInputChange = (event) => {
        this.setState({ category: event.target.value })
    }

    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.onFormSubmit(this.state.term)
        // TODO: call callback from parent component
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>What type of food do you want to eat?</label>
                        <input 
                        type="text" 
                        value={this.state.category}
                        onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar