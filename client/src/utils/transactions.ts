const generateRandomTransactions = () => {
  const transactionTypes = ["Cash", "Electronic", "Credit Card"];
  const categories = [
    "Food",
    "Shopping",
    "Transportation",
    "Entertainment",
    "Bills",
  ];
  const descriptions = [
    "Golden Sun Bakery",
    "Supermart",
    "XYZ Restaurant",
    "Online Store",
    "Coffee Shop",
  ];
  const notes = [
    "",
    "Meeting with friends",
    "Special discount applied",
    "Gift card redeemed",
  ];

  const randomTransactions = [];
  const itemCount = Math.floor(Math.random() * 7) + 4; // Random number between 4 and 10

  for (let i = 0; i < itemCount; i++) {
    const date = getRandomDate();
    const description = getRandomItemFromArray(descriptions);
    const amount = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
    const balance = Math.floor(Math.random() * 1000) + 100; // Random number between 100 and 1100
    const transactionType = getRandomItemFromArray(transactionTypes);
    const category = getRandomItemFromArray(categories);
    const generatedNotes = getRandomItemFromArray(notes);

    const like = {
      date: formatDate(date),
      description,
      amount,
      balance,
      transactionType,
      category,
      notes: generatedNotes,
    };

    randomTransactions.push(like);
  }

  return randomTransactions;
};

// Helper function to generate a random date
const getRandomDate = () => {
  const startDate = new Date(2022, 5, 1); // June 1st, 2022
  const endDate = new Date(); // Current date
  const randomDate = new Date(
    startDate.getTime() +
      Math.random() * (endDate.getTime() - startDate.getTime())
  );
  return randomDate;
};

// Helper function to format the date as "Month Day Year"
const formatDate = (date) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
};

// Helper function to get a random item from an array
const getRandomItemFromArray = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

export default generateRandomTransactions;
