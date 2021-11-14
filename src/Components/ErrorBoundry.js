import React from 'react';

class ErrorBoundry extends React.Component {
    constructor() {
        super();
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) { //This lifecycle method works if there's an error and it takes two parameters
        this.setState({ hasError: true})
    }

    render() {
        if (this.state.hasError) {
            return <h1>Oooops. An error occured!</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundry;