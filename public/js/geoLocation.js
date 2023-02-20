function initMap() {
    const geocoder = new google.maps.Geocoder();
    const input = document.getElementById("search")

    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.addListener('place_changed', function () {
        const place = autocomplete.getPlace();
        console.log(place.geometry.location.lat())
        document.getElementById('location').value = place.formatted_address;
        document.getElementById('lat').value = place.geometry.location.lat();
        document.getElementById('lng').value = place.geometry.location.lng();
    });

    // document.addEventListener("input", event => {
    //     const address = event.target.value
    //     console.log(address)
    //     geocoder
    //         .geocode({ address })
    //         .then((response) => {
    //             if (response.results[0]) {
    //                 console.log(response)
    //             } else {
    //                 console.error("No results found");
    //             }
    //         })
    //         .catch((e) => console.error("Geocoder failed due to: " + e));
    // })
}
