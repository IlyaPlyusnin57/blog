function RemoveDuplicates() {
  return (
    <section className="article-container">
      <h1>Remove Duplicates From An Array</h1>

      <h2>Goal</h2>

      <p>Remove duplicate values from an array</p>

      <h2>Solution</h2>

      <p>
        The best way to remove duplicates from an array is to use a Set. It is
        the fastest way. First, use Set() contructor to create a Set object from
        the array. Then use the Array.from() method to create an Array from the
        Set object
      </p>

      <code>
        const arrayWithDuplicateValues = [1,1,2,2,3,3,4,4]; <br />
        const setWithUniqueNumbers = new Set(arrayWithDuplicateValues); <br />
        const arrayWithoutDuplicateValues = Array.from(setWithUniqueNumbers);{" "}
        <br />
      </code>

      <p>Or</p>

      <code>
        const arrayWithDuplicateValues = [1,1,2,2,3,3,4,4]; <br />
        const arrayWithoutDuplicateValues = [...new
        Set(arrayWithDuplicateValues)];
      </code>
    </section>
  );
}

export default RemoveDuplicates;
