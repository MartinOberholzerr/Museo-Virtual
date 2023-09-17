import React, { Component } from "react";
import TutorialDataService from "./TutorialDataService";

export default class AddTutorial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            published: false,
            submitted: false,
        };
    }

    onChangeTitle = (e) => {
        this.setState({
            title: e.target.value,
        });
    }

    onChangeDescription = (e) => {
        this.setState({
            description: e.target.value,
        });
    }

    saveTutorial = () => {
        const data = {
            title: this.state.title,
            description: this.state.description,
            published: false,
        };

        TutorialDataService.create(data)
            .then(() => {
                console.log("created new item successfully");
                this.setState({
                    submitted: true,
                });
            })
            .catch((e) => {
                console.log(e);
            });
    }

    newTutorial = () => {
        this.setState({
            title: "",
            description: "",
            published: false,
            submitted: false,
        });
    }

    render() {
        return (
            <div className="submit-form">
                {this.state.submitted ? (
                    <div>
                        <h4>You submitted successfully!</h4>
                        <button className="btn btn-success" onClick={this.newTutorial}>
                            New tutorial
                        </button>
                    </div>
                ) : (
                    <div>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                required
                                value={this.state.title}
                                onChange={this.onChangeTitle}
                                name="title"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea
                                className="form-control"
                                id="description"
                                required
                                value={this.state.description}
                                onChange={this.onChangeDescription}
                                name="description"
                            />
                        </div>

                        <button onClick={this.saveTutorial} className="btn btn-success">
                            Submit
                        </button>
                    </div>
                )}
            </div>
        );
    }
}