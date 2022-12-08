modules.exports = () => {
  var transaction = [
    { status: "success", amount: 12.0 },
    { stawhtus: "success", amount: 33.5 },
    { status: "failed", amount: 100.64 },
    { status: "success", amount: 843.17 },
    { status: "failed", amount: 12.78 },
  ];

  function highestVal(transtaction) {
    let initAmount = 0;
    transtaction.forEach((element) => {
      if (element.status === "success" && element.amount > initAmount) {
        initAmount += element.amount;
      }
      if (element.status === "failed") {
        initAmount += element.amount;
      }
    });

    return initAmount;
  }
  console.log(highestVal(transaction));
  const transactions = [
    { status: "success", amount: 12.0 },
    { status: "success", amount: 33.5 },
    { status: "failed", amount: 100.64 },
    { status: "success", amount: 843.17 },
    { status: "failed", amount: 12.78 },
  ];

  function highestValues(transtaction) {
    let successAmount = 0;
    let failedAmount = 0;

    transtaction.forEach((element) => {
      if (element.status === "success") {
        successAmount += element.amount;
      }
      if (element.status === "failed") {
        failedAmount += element.amount;
      }
    });

    return {
      success: successAmount,
      failed: failedAmount,
    };
  }
  console.log(highestValues(transactions));
};
