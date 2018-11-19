import React from 'react';

export class BrowsePage extends React.Component {

    render() {
        const { user, users } = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Hi Devarajeshwaran! You are on the browse page!</h1>
            </div>
        );
    }
}