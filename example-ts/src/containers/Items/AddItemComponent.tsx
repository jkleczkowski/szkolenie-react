import * as React from 'react';

const AddItemFormComponent = (props: any) => {
    return (
        <form id="add-item-form" onSubmit={props.sendForm}>
            <div className="form-group">
                <input className="form-control"
                    type="text"
                    autoFocus
                    required
                    placeholder="title"
                    name="title" />
            </div>
            <div className="form-group">
                <input className="form-control"
                    type="number"
                    required
                    placeholder="price"
                    name="price" />
            </div>
            <div className="form-group">
                <select name="category"
                    defaultValue={''}
                    required
                    className="form-control">
                    <option value="" disabled>category</option>
                    <option value="food">food</option>
                    <option value="clothes">clothes</option>
                </select>
            </div>
            <hr />
            <button className="btn btn-secondary">
                send item
            </button>
        </form>
    );
};

export default AddItemFormComponent;