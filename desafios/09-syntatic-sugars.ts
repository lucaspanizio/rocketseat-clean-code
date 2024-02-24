// Syntatic Sugars
// https://efficient-sloth-d85.notion.site/Desafio-Syntatic-Sugars-7400d576da8e4d98968e1523ad7efcef

function getFirstFiveRatings(ratings) {
  return ratings.length >= 5 && ratings.slice(0, 5)
}

function sumFirstFiveRatings(ratings) {
  const ratingsBool = Boolean(ratings)

  if (ratingsBool) {
    const firstFiveRatings = getFirstFiveRatings(ratings)

    const firstFiveRatingsNotFound = !firstFiveRatings;
    if (firstFiveRatingsNotFound) return { error: 'there must be at least 5 ratings' }

    let ratingsSum = 0;

    for (const rating of firstFiveRatings) {
      ratingsSum += Number(rating)
    }

    const todayDateTimestamp = Number(new Date())

    return { ratingsSum, created_at: todayDateTimestamp}
  }

  return { error: 'ratings is required' }
}

const appRatings = ['5', '3', '4', '4', '5', '1', '5', '4', '4', '3']
sumFirstFiveRatings(appRatings)