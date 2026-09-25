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

//Declare the html element with id and used to store the variable in the javascript
const SearchBox = document.getElementById("Searchspace");
const ButtonBox = document.getElementById("userBtn");
const OutputBox = document.getElementById("hotelList");
const ConfirmBox = document.getElementById("add");

//Create the button function which is declare above 
ButtonBox.onclick = function () {
    OutputBox.innerHTML = "";            //Remove the html content in the output box 
    ConfirmBox.textContent = "";

    //We storing the user input and remove the whitespace and making lowercase.
    let typeword = SearchBox.value.trim().toLowerCase();

    // Create a function for the searching the hotel list 
    function SearchResult(hotel) {
        let matchhotel = [];              //Declare the variable 
        // "forEach" method is use to excuate the every element of the array 
        hotel.forEach(obj => {
            //Here calling the oject name and making them lowercase then to the user type word 
            if (obj.HotelName.toLowerCase() === typeword || obj.City.toLowerCase() === typeword)
                matchhotel.push(obj);      //if we found the match word we push that name 
        });
        return matchhotel; // then the return the value to the function 
    }

    //We are storing the array result 
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
            <button onclick ="Booking()">Booked</button>
        </div>
        `
        });
    }



    function Booking(hotel) {
        let result = confirm("Press Ok to book the hotel");
        if (result === true) {
            ConfirmBox.textContent = "Booked";
            console.log("Booked done");
        } else {
            ConfirmBox.textContent = "Cancelled";
            console.log("Not Booked");
        }
    }
}












