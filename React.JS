class Previewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: ''};
    this.update = this.update.bind(this);
  }
  
  update(event) {
    this.setState({
      text: event.target.value
    });
  }
  
  render() {
    return (
      <div>
      <h6 id="editor-title"><img src="https://png.pngtree.com/svg/20161103/c7d9cef58b.png" id="fire-img"/> Editor</h6>
        <textarea id="editor" onChange={() => this.update(event)}>
        </textarea>
        <h6 id="preview-title"><img src="https://png.pngtree.com/svg/20161103/c7d9cef58b.png" id="fire-img"/> Previewer</h6>
        <div dangerouslySetInnerHTML={{__html: marked(this.state.text)}} id="preview"></div>       
      </div>
      );
  }
}

ReactDOM.render(<Previewer />, document.getElementById('app')); 
