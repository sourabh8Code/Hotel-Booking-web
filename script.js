// The data is stored in the Json format like in the format = id, HotelName, City, Rating, Price is stored in this list.
const hotel = [
    {
        "id": 1,
        "HotelName": "Raj Hotel",
        "City": "Surat",
        "Rating": "4.3",
        "Price": "1850"
    },
    {
        "id": 2,
        "HotelName": "Raj Hotel",
        "City": "Vapi",
        "Rating": "4.3",
        "Price": "1850"
    },
    {
        "id": 3,
        "HotelName": "Raj Hotel",
        "City": "Rajkot",
        "Rating": "4.3",
        "Price": "1850"
    },
    {
        "id": 4,
        "HotelName": "Raj Hotel",
        "City": "Mumbai",
        "Rating": "4.3",
        "Price": "1850"
    },
    {
        "id": 5,
        "HotelName": "Raj Hotel",
        "City": "Vadodara",
        "Rating": "4.3",
        "Price": "1850"
    },
    {
        "id": 6,
        "HotelName": "Raj Hotel",
        "City": "Daman",
        "Rating": "4.3",
        "Price": "1850"
    },
    {
        "id": 7,
        "HotelName": "Raj Hotel",
        "City": "Diu",
        "Rating": "4.3",
        "Price": "1850"
    },
    {
        "id": 8,
        "HotelName": "Raj Hotel",
        "City": "Valsad",
        "Rating": "4.3",
        "Price": "1850"
    }
]

//Declare the html id and use in the 
const SearchBox = document.getElementById("Searchspace");
const ButtonBox = document.getElementById("userBtn");
const OutputBox = document.getElementById("hotelList");
const ConfirmBox = document.getElementById("add");

ButtonBox.onclick = function() {
    OutputBox.innerHTML = "";
    ConfirmBox.textContent = "";

    let typeword = SearchBox.value.trim().toLowerCase();
    function SearchResult(hotel) {
        let matchhotel = [];
        hotel.forEach(obj => {
            if (obj.HotelName.toLowerCase() === typeword || obj.City.toLowerCase() === typeword)
                matchhotel.push(obj);
        });
        return matchhotel;
    }

    let res = SearchResult(hotel) 
    if (res.length == 0) {
        OutputBox.innerHTML = "<p>No Hotel</p>";
    } 
    else {
        res.forEach(h => {
        OutputBox.innerHTML += `
        <div>
            <h2>${h.HotelName}</h2>
            <p>City: ${h.City}</p>
            <p>Rating: ${h.Rating}, Price: ${h.Price}</p>
        </div>
        `
        });
    }
}

    // let ConfirmBox = confirm("Press Ok to book the hotel");
    // if (ConfirmBox === true) {
    //     document.getElementById("add").textContent = "Booked";
    //     console.log("Booked done");
    // } else {
    //     document.getElementById("add").textContent = "Cancelled";
    //     console.log("Not Booked");
    // }
//  let searchresult = hotel.filter(obj => obj.hotel_name === typeword || obj.city === typeword);




