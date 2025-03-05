//  Weather Outfit Selector

function outfitSuggestion(temperature) {
    if (temperature < 15) {
      return "Wear a jacket. Its cold!";
    } else if (temperature >= 15 && temperature <= 25) {
      return "Wear a jumper. Its warm!";
    } else if (temperature > 25) {
      return "Wear shorts. Its hot!";
    }
  }
  console.log(outfitSuggestion(6));
  