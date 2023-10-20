// function to load my external JSON file
function loadJSON(callback) {
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open('GET', 'data.json', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(JSON.parse(xhr.responseText));
        }
    };
    xhr.send(null);
}

// function to filter by id
function filterById() {
    var idInput = document.getElementById("idInput").value;
    var resultDiv = document.getElementById("result");
    resultDiv.style.display = "block"; // show the result

    loadJSON(function (data) {
        var found = false;
        for (var i = 0; i < data.length; i++) {
            if (data[i].id == idInput) {
                resultDiv.innerHTML = "<p><i class='fas fa-user'></i> Name: " + data[i].name + "</p>" +
                                     "<p><i class='fas fa-envelope'></i> Email: " + data[i].email + "</p>" +
                                     "<p><i class='fas fa-briefcase'></i> Position: " + data[i].position + "</p>" +
                                     "<p><i class='fas fa-building'></i> Department: " + data[i].department + "</p>" +
                                     "<p><i class='fas fa-phone'></i> Phone: " + data[i].phone + "</p>" +
                                     "<p><i class='fas fa-check'></i> Status: " + data[i].status + "</p>";
                found = true;
                break;
            }
        }

        if (!found) {
            resultDiv.innerHTML = "<p class='error'><i class='fas fa-exclamation-circle'></i> ID not found.</p>";
        }
    });
}

// Event Listener on Click Buttom
document.querySelector("#searchbuttom").addEventListener('click', filterById);