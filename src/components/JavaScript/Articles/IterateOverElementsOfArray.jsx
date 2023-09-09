function IterateOverElementsOfArray() {
  return (
    <section className="article-container">
      <h1>Iterate Over All Elements of an Array</h1>

      <h2>Goal</h2>

      <p>How to iterate over all elements in an Array</p>

      <h2>Solution</h2>

      <p>1. Use for of loop</p>

      <code>
        <div className="mb-1">const arr = [1,2,3,4];</div>
        for (const number of arr) &#123; <br />
        <span className="indent">console.log(number);</span> <br /> &#125;
      </code>
    </section>
  );
}

export default IterateOverElementsOfArray;
