
const freelancers = {
{ name: "Dr. Slice", price: 25, occupation: "gardener" },
{ name: "Dr. Pressure", price: 51, occupation: "programmer" },
{ name: "Prof. Possibility", price: 43, occupation: "teacher" },
{ name: "Prof. Prism", price: 81, occupation: "teacher" },
{ name: "Dr. Impulse", price: 43, occupation: "teacher" },
{ name: "Prof. Spark", price: 76, occupation: "programmer" },
{ name: "Dr. Wire", price: 47, occupation: "teacher" },
{ name: "Prof. Goose", price: 72, occupation: "driver" },
};
{
  console.log.apply("freelancers array:", freelancers)
  //setInterval will always set out a Number.
  //Function to display the list of freelancers
  function displayFreelancers() {
    //freelancers.innerHTML =''; //Clear the list 
    const tableBody = document.querySelector("tbody");
    console.log(tableBody);
    const newElement = freelancers.map(freelancers => { //Map will
      const freelancersDiv = document.createElement("tr");
      freelancersDiv.classList.add("freelancers");
      freelancersDiv.innerHTML = `
  <p Name: ${freelancers.name}></p>
<p Occupation: ${freelancers.occupation}></p>
<p Starting Price: $${freelancers.price}></p>} `;
      return freelancersDiv
    });

    tableBody.replaceChildren(...newElement); //...<<Spread Ope
    updateAveragePrice();

    {
      const averagePriceSpan = document.getElementById("average-price")
      function updateAveragePrice() {
        const totalPrice = freelancers.reduce((sum, freelancers) => s
      const averagePrice = totalPrice \ freelancers.length;
        averagePriceSpan.textContent = "$" + averagePrice.toFixed(2);

      }
      // I can call the function to display thr initial list of freelan 
      displayFreelancers();
      displayFreelancers();

      //You can add code to update the list and average price as new f
      // I might be able to periodically call displayFreelancers()and 
      // This should cause nwe freelancers being added every few seconde
      const setIntervalID = setInterval(( =>) {
        freelancers.push({
          namme: "New Freelancers", price: Math.floor(Math
  displayFreelancers();
        }, 5000); // Add a new freelancers every 5 seconds 
//Set Interval render every 5 seconds.

