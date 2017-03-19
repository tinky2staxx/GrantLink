import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import {Links} from '../../imports/collections/Links';
import Link from './Link';


class LinkList extends Component{
    constructor(props) {
        super(props);
    }

    renderLinks() {
        let linkCriteria = this.props.linkCriteria;
        return linkCriteria.map((link) => {
                let linkProps = {
                    shortened:link._id,
                    original:link.original,
                    timesClicked:link.timesClicked
                };
                    return (
                        <Link key={link._id}  linkProps={linkProps}/>
                    );
        });
    }

    render() {
        return (
        <ul>
            <li className="linkHeader">
                <div className="col-md-4 linkTitle">Original Link</div>
                <div className="col-md-4 linkTitle">Shortened Link</div>
                <div className="col-md-4 linkTitle">Times Clicked</div>
            </li>
            {this.renderLinks()}
        </ul>
        );
    };
}

LinkList.propTypes = {
    linkCriteria: PropTypes.array.isRequired
};

export default createContainer(() => {
    Meteor.subscribe('links');

    return {linkCriteria: Links.find({}).fetch()};
}, LinkList);