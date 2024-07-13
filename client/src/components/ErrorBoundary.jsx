/* eslint-disable no-unused-vars */
import { Component } from "react";

export default class ErrorBoundary extends Component {
    constructor() {
        super()

        this.state = { 
            hasError: false
        }
    }
    static getDerivedStateFromError(eer) {
        console.log('getDerivedStateFromError');
        return {
            hasError: true,
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log('componentDidCatch');
        //TODO: Logging
    }

    render() {
        if (this.state.hasError) {
            return <h1 style={{color: 'green'}}>404</h1>
        }
        return this.props.children;
    }
}