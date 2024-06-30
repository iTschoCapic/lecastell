function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 42.70647430419922, lng: 3.007551670074463},
      zoom: 14
    });

    function getReviews() {
      var placeId = 'x';
      var service = new google.maps.places.PlacesService(map);

      service.getDetails({
        placeId: placeId
      }, function(place, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          var reviewsContainer = document.getElementById('reviews-container');
          reviewsContainer.innerHTML = '';

          place.reviews.forEach(function (review) {
            var reviewHTML =
              `<div class="review">
                 <div class="reviewer-name">${review.author_name}</div>
                 <div class="rating">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</div>
                 <div class="review-text">${review.text}</div>
               </div>`;

            reviewsContainer.innerHTML += reviewHTML;
          });
        }
      });
    }

    getReviews();
  }