import React, { Component } from "react";
import { graphql } from "react-apollo";
import Query from "./graphql/query";
import Options from "./graphql/options";

class ProjectDetail extends Component {
    render() {
        return(<div>{this.props.titulo}</div>)
    }
}

export default graphql(Query, Options)(ProjectDetail);
