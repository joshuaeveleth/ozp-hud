'use strict';

var React = require('react');
var { RouteHandler } = require('react-router');
var Header = require('./header/index.jsx');
var Settings = require('./settings/index.jsx');

var GridLayout = require('./GridLayout.jsx');

var App = React.createClass({

    componentDidMount: function() {
        $(document).on('show.bs.modal', '.modal', function () {
            $('.classBanner').last().css({
                position : 'fixed',
                bottom : '0%'
            });
        });
    },

    render: function () {
        return (
            <div>
                <Header />
                <GridLayout />
                <Settings />
                <RouteHandler params={ this.props.params } />
            </div>
        );
    }
});

module.exports = App;
