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

      <p>Time and Space Complexity</p>
      <code>
        Space: O(n)
        <ul>
          <li>We are creating a new array</li>
        </ul>
        <br />
        Time: O(n)
        <ul>
          <li>
            It takes n time to create a new set from an array and n time to
            convert it back to an array. So O(2n) simplifies to O(n)
          </li>
        </ul>
      </code>
    </section>
  );
}

export default RemoveDuplicates;
