const apiKey = 'LzZFtKUnC6OC_bESryEYCRlu8KJ8-TfF-W349fZmmXGHp32Zca8ehE2rvx1PyeG6Oqr0Ud_ReEse8yZ_99VMzumloAqHRCynmHKB1rxhxON5Eb3eSqjoiUNf61RcXXYx';

export const Yelp = {
  search: (term, location, sortBy) => {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }).catch((error) => {
        console.error(error);
      })
      .then(res => res.json())
      .then(resJSON => {
        if (resJSON.businesses) {
          console.log(resJSON)
          let businessJSON = resJSON.businesses.map((business) => {
            return ({
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: `${business.location.address1} ${business.location.address2} ${business.location.address3}`.trim(),
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zipCode,
              category: business.categories.map((categories) => {
                return categories.title
              }).join(),
              rating: business.rating,
              reviewCount: business.review_count,
              link: business.url
            });
          });
          console.log("Before return from yelp js", businessJSON);
          return businessJSON;
        } else {
          return []
        }
      }
      );
  }
};
