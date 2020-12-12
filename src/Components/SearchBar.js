import React from 'react'

class SearchBar extends React.Component {
    state = { category: '' }

    onInputChange = (event) => {
        this.setState({ category: event.target.value })
    }

    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.onFormSubmit(this.state.category)
        // TODO: call callback from parent component
        this.clearForm()
    }

    clearForm = () => {
        this.setState({ category: '' })
    }
    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>What type of food do you want to eat?</label>
                        <input 
                        type="text" 
                        placeholder="Vietnamese, Indonesian, Pizza, etc..."
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