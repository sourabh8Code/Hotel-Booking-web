// The data is stored in the Json format like in the format = id, HotelName, City, Rating, Price is stored in this list.
const hotel = [
    {
        "id": 1,
        "HotelName": "Ra Hotel",
        "City": "Surat",
        "Rating": "4.3",
        "Price": "1850"
    },
    {
        "id": 2,
        "HotelName": "Raj2 Hotel",
        "City": "Vapi",
        "Rating": "4.3",
        "Price": "1850"
    },
    {
        "id": 3,
        "HotelName": "Raj3 Hotel",
        "City": "Rajkot",
        "Rating": "4.3",
        "Price": "1850"
    },
    {
        "id": 4,
        "HotelName": "Raj4 Hotel",
        "City": "Mumbai",
        "Rating": "4.3",
        "Price": "1850"
    },
    {
        "id": 5,
        "HotelName": "Raj5 Hotel",
        "City": "Vadodara",
        "Rating": "4.3",
        "Price": "1850"
    },
    {
        "id": 6,
        "HotelName": "Raj6 Hotel",
        "City": "Daman",
        "Rating": "4.3",
        "Price": "1850"
    },
    {
        "id": 7,
        "HotelName": "Raj7 Hotel",
        "City": "Diu",
        "Rating": "4.3",
        "Price": "1850"
    },
    {
        "id": 8,
        "HotelName": "Raj8 Hotel",
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
const DataBox = document.getElementById("Data");

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
    let result = SearchResult(hotel)
    if (result.length == 0) {                              //If the match word is not found then it will print "No hotel" in the output box
        OutputBox.innerHTML = "<p>No Hotel</p>";
    }

    //If the match word is found then it will print the result in the output box with all the details.
    else {
        result.forEach(h => {
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
    //document.getElementById("ConfirmBtn").addEventListener("click", booking);


    //testing the localstorage is working or not
    //localstorage we have to make to store the data in the table form of booked or cancelled hotel from the booking function.
    function storeData() {
        let response = booking();
        localStorage.setItem("Hotel", result[0].HotelName);
        localStorage.setItem("City", result[0].City);
        localStorage.setItem("Status", add.textContent);
        DataBox.innerHTML = `<Table border="1">
        <tr>
            <th>Hotel Name</th>
            <th>City</th>
            <th>Status</th>
        </tr>
        <tr>
            <td>${localStorage.getItem("Hotel")}</td>
            <td>${localStorage.getItem("City")}</td>
            <td>${localStorage.getItem("Status")}</td>
        </tr>
        </Table>`;
        localStorage.setItem("Data", JSON.stringify(DataBox.innerHTML));
        localStorage.getItem("Data"), JSON.parse(localStorage.getItem("Data"));
        console.log(localStorage.getItem("Data"));
    }
    document.getElementById("ConfirmBtn").addEventListener("click", storeData);
}
