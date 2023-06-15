marked.setOptions({
    breaks : true
})
const renderer = new marked.Renderer();

function App(){
    const [ text , setText ]= React.useState("");
    return ( 
        <div className="text-center px-4">
            <h1 className="p-4 font-header">Markdown Previewer</h1>
            <textarea name="text" id="text" rows="10" value={text} className="textarea" onChange={(e)=> setText(e.target.value)}></textarea>
            <h3 className="mt-3 font-header">Output</h3>
            <div className="container">
            <Preview markdown={text}/>
            </div>
            <footer className="font-header">Made by @HSM</footer>
        </div>
    );
}

function Preview({markdown}) {
    return ( 
    <div dangerouslySetInnerHTML = {{
            __html : marked(markdown, {renderer : renderer}),
        }}
        id="preview">
    </div>
    );
}
const root = document.querySelector('.app');
const app = (
    <React.StrictMode>
      <App />
    </React.StrictMode>
);


ReactDOM.createRoot(root).render(app);