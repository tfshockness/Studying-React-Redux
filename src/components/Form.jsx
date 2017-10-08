import React, { Component } from 'react';

export default class Form extends Component
{
    render()
    {
        return(
            <form className="col-md-6">
                <div className="form-group">
                    
                    <div className="form-group">
                        <label>Category</label>
                        <select className="form-control">
                        <option>Personal</option>
                        <option>Work</option>
                        <option>School</option>
                        <option>Goal</option>
                        <option>Others</option>
                        </select>
                    </div>
                    <input type="text" className="form-control" placeholder="Description of your task" />
                    <small className="form-text text-muted">Press enter or button to add.</small>
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        )
    }
}