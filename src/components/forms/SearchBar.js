import React from 'react';

export default function SearchBar(props) {
    return (
        <form>
            <div className="form-group row">
                <label htmlFor="searchBar" className="col-sm-1 col-form-label text-right"><i className="material-icons text-center">search</i></label>
                <div className="col-sm-10">
                    <input type="email" className="form-control" id="searchBar" placeholder="Search based on recipe tags" />
                </div>
            </div>
        </form>
    );
}