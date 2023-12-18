import React from "react";
import { ImageApi } from "./api";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            images: [],
            loading: false,
            page: 1,
            zoomedInImage: {},
            showImage: false
        };
    }
    async componentDidMount() {
        this.setState({
            loading: true
        });
        try {
            const result = await ImageApi.fetchImages(this.state.page);

            this.setState((prevState) => {
                return {
                    images: result,
                    loading: false
                };
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export default App;
