class Previewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      textMessage: 
      '<h1>Welcome to my React HTML Editor!</h1>                                                                 <h3>You can make headers</h3>                                                                                      <p>And paragraphs</p>                                                                                                           <ul>                                                                                                                                   <li>And</li>                                                                                                                        <li>Even</li>                                                                                                                                  <li>Lists!</li>                                                                                                                              </ul>                                                                                                                                        <h1>Have fun!</h1>',                                                                         
      text: '<h1>Welcome to my React HTML Editor!</h1><h3>You can make headers</h3><p>And paragraphs</p><ul><li>And</li><li>Even</li><li>Lists!</li></ul><h1>Have fun!</h1>',
    
  
    };
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
        <textarea id="editor" onChange={() => this.update(event)}>{this.state.textMessage}
        </textarea>
        <h6 id="preview-title"><img src="https://png.pngtree.com/svg/20161103/c7d9cef58b.png" id="fire-img"/> Previewer</h6>
        <div dangerouslySetInnerHTML={{__html: marked(this.state.text)}} id="preview"></div>       
      </div>
      );
  }
}

ReactDOM.render(<Previewer />, document.getElementById('app')); 
