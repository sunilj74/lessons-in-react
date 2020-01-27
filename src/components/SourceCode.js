import * as React from 'react';
import { connect } from "react-redux";
import Editor from "@monaco-editor/react";
import { selectSourceCode } from "../store/reduxstore";

class SourceCode extends React.Component {
    constructor(props){
        super(props);
        this.handleEditorDidMount = this.handleEditorDidMount.bind(this);
    }

    handleEditorDidMount() {
    }

    render(){
        return (
          <div style={{width: "100%", height: "100%"}}>
            <div>{this.props.url}</div>
            <Editor height="95%" width="100%" language="javascript" value={this.props.code} editorDidMount={this.handleEditorDidMount} />
          </div>
        );
    }
}

const mapStateToProps = (state) => {
  const props = selectSourceCode(state);
  return props;
};

export default connect(mapStateToProps)(SourceCode);

