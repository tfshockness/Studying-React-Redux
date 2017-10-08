import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemList from './ItemList';

class TaskList extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <div className="col-md-6">
                <ul className="list-group">
                {this.props.tasks.map((task) => <ItemList key={task.id} {...task} />) }
                </ul>
            </div>
        )
    }
}


const mapStateToProps = (state) =>
{
    return {
        tasks: state
    }
}

export default connect(mapStateToProps)(TaskList);