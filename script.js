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
    let typeword = SearchBox.value.trim().toUpperCase();

    //
    function SearchResult(hotel) {
        let matchhotel = [];
        // "forEach" method is use to excuate the every element of the array 
        hotel.forEach(obj => {
            //Here calling the oject name and making them lowercase then to the user type word 
            if (obj.HotelName.toUpperCase() === typeword || obj.City.toUpperCase() === typeword)
                matchhotel.push(obj);      //if we found the match word we push that name 
        });
        return matchhotel; // then the return the value to the function 
    }
    
    //Here we call the function
    let res = SearchResult(hotel)
    if (res.length == 0) {                              //If the match word is not found then it will print "No hotel" in the output box
        OutputBox.innerHTML = "<p>No Hotel</p>";
    }

    //If the match word is found then it will print the result in the output box with all the details.
    else {
        res.forEach(h => {
            OutputBox.innerHTML += `
            <div>
                <h2>${h.HotelName}</h2>
                <p>City: ${h.City}</p>
                <p>Rating: ${h.Rating}, Price: ${h.Price}</p>
                <button id="ConfirmBtn"> Confirm </button>
            </div>
        `
        });
    }


// Confirm box is working properly 
    function booking() {
        let result = confirm("Press Ok to book the hotel");
        
        if (result) {
            add.textContent = "Booked";
            console.log("Booked done");
        } else {
            add.textContent = "Cancelled";
            console.log("Not Booked");
        }
    }
    // Here we are adding the action to the button which call the booking function 
    document.getElementById("ConfirmBtn").addEventListener("click", booking);
}







