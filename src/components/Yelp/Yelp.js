import { log } from "util";

const clientId = "wwbYNly0bGAaxj7xcrlLTg";
const apiKey =
  "a8QnayN_7Wor163CCuG1w3VZsqsPr5YW-vnKjHY76jaMjTczjft1234rPJfH7AdrCYWqgF_4lXLvJNqW7L3RBrUyJLfqaJNVUP0TyvscGSl37ztIq9iMn4f6diDuXXYx";

const Yelp = {
  search(term, location, sortBy) {
      console.log('seraching yelp');
    return (fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}sort_by=${sortBy}`,
      {
        headers: {
            Authorization: `Bearer ${apiKey}`,
        }
    }).then((response) => {
      return response.json();
    }).then((jsonResponse) => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map((business) => {
            console.log(business);
            return {
                id: business.id,
                imageSrc: business.image_url,
                name: business.name,
                address1: business.location.address1,
                city: business.location.city,
                state: business.location.state,
                zipCode: business.location.zipCode,
                category: business.categories[0].title,
                rating: business.rating,
                reviewCount: business.reviewCount
            }
          });
        }
    }));
  }
}


export default Yelp;
