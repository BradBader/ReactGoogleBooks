import React, { Component } from "react";

class BookCard extends Component {
    render() {
        return (
            <div>
                <div class="row">
                    <div class="col s12 m7">
                        <div class="card">
                            <div class="card-image">
                                <img src="images/sample-1.jpg" />
                                <span class="card-title">Card Title</span>
                            </div>
                            <div class="card-content">
                                <p>.</p>
                            </div>
                            <div class="card-action">
                                <a href="#">This is a link</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default BookCard;