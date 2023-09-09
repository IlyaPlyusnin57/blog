function IsArray() {
  return (
    <section className="article-container">
      <h1>Check if an Object is an Array</h1>

      <h2>Goal</h2>

      <p>How to check if passed value is an Array</p>

      <h2>Solution</h2>

      <p>
        Use the Array.isArray() static method. This method returns a boolean
      </p>

      <code>
        <div className="mb-1">const arr = [1,2,3];</div>
        if(Array.isArray(arr)) &#123; <br />
        <span className="indent">&#47;&#47; code goes here</span>
        <br />
        &#125;
      </code>
    </section>
  );
}

export default IsArray;
