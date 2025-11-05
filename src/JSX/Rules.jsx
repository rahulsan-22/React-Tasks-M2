const Rules = () => {
  return <div>
    <h2>Rules of JSX</h2>
    <ol>
      <li>Adjacent JSX Elements must be wrapped in a single parent</li>
      <li>Unpaired Tags must be closed properly</li>
      <li>Attributes like class and for should be replaced with className and htmlFor</li>
      <li>JSX Elements must be written in lowercase</li>
    </ol>
    <p>Note:Fragments - allows us to render multiple jsx elements without creating a extra node</p>
    <p>Syntax: &lt; &gt; &lt;/&gt; or &lt;React.Fragment&gt; &lt;/React.Fragment&gt;</p>
  </div>
}

export default Rules