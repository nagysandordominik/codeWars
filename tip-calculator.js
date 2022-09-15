function calculateTip(amount, rating) {
    if (rating.toLowerCase() == "terrible") {
      return 0;
    } else if (rating.toLowerCase() == "poor") {
      return Math.ceil((amount / 100) * 5);
    } else if (rating.toLowerCase() == "good") {
      return Math.ceil((amount / 100) * 10);
    } else if (rating.toLowerCase() == "great") {
      return Math.ceil((amount / 100) * 15);
    } else if (rating.toLowerCase() == "excellent") {
      return Math.ceil((amount / 100) * 20);
    } else {
      return "Rating not recognised";
    }
  }