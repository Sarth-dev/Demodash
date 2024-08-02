// JavaScript to handle modal opening/closing
document.getElementById('open-modal').onclick = function () {
    document.getElementById('notification-modal').style.display = 'block';
};
document.getElementById('close-modal').onclick = function () {
    document.getElementById('notification-modal').style.display = 'none';
};
document.getElementById('mark-all-read').onclick = function () {
    document.querySelectorAll('.notification').forEach(notification => {
        notification.querySelector('.read-status').textContent = 'Read';
        notification.classList.add('read');
    });
};
document.getElementById('view-more').onclick = function () {
    document.querySelectorAll('.notification.hidden').forEach(notification => {
        notification.classList.remove('hidden');
    });
    this.style.display = 'none'; // Hide the "View All" button after expanding
};


// customer script

document.addEventListener('DOMContentLoaded', (event) => {
    const tableData = [
        ["1", "Kavin Doe", "18/04/2023", "Active", "₹500"],
        ["2", "Kavin", "18/04/2023", "Active", "₹500"],
        ["3", "Kavin", "18/04/2023", "Active", "₹500"],
        ["4", "Kavin", "18/04/2023", "Active", "₹500"],
        ["5", "Kavin", "18/04/2023", "Active", "₹500"],
        ["6", "Kavin", "18/04/2023", "Active", "₹500"],
        ["7", "Kavin", "18/04/2023", "Active", "₹500"],
        ["8", "Kavin", "18/04/2023", "Active", "₹500"],
        ["9", "Kavin", "18/04/2023", "Active", "₹500"],
        ["10", "Kavin", "18/04/2023", "Active", "₹500"],
        ["11", "Kavin", "18/04/2023", "Active", "₹500"],
        ["12", "Kavin", "18/04/2023", "Active", "₹500"],
        ["13", "Kavin", "18/04/2023", "Active", "₹500"],
        ["14", "Kavin", "18/04/2023", "Active", "₹500"],
        ["15", "Kavin", "18/04/2023", "Active", "₹500"],
        ["16", "Kavin", "18/04/2023", "Active", "₹500"],
        ["17", "Kavin", "18/04/2023", "Active", "₹500"],
        ["18", "Kavin", "18/04/2023", "Active", "₹500"],
        ["19", "Kavin", "18/04/2023", "Active", "₹500"],
        ["20", "Kavin", "18/04/2023", "Active", "₹500"],
        ["21", "Kavin", "18/04/2023", "Active", "₹500"],
        ["22", "Kavin", "18/04/2023", "Active", "₹500"],
        ["23", "Kavin", "18/04/2023", "Active", "₹500"],
        ["24", "Kavin", "18/04/2023", "Active", "₹500"],
        ["25", "Kavin", "18/04/2023", "Active", "₹500"],
        ["26", "Kavin", "18/04/2023", "Active", "₹500"],
        ["27", "Kavin", "18/04/2023", "Active", "₹500"]
    ];

    const rowsPerPage = 10;
    let currentPage = 1;
    const tableBody = document.getElementById('tableBody');
    const pageInfo = document.getElementById('pageInfo');

    function displayTable(page) {
        tableBody.innerHTML = '';
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        const paginatedItems = tableData.slice(start, end);

        paginatedItems.forEach(row => {
            const tr = document.createElement('tr');
            row.forEach(cell => {
                const td = document.createElement('td');
                td.textContent = cell;
                tr.appendChild(td);
            });
            tableBody.appendChild(tr);
        });

        pageInfo.textContent = `Page ${currentPage} of ${Math.ceil(tableData.length / rowsPerPage)}`;
        document.getElementById('prevPage').disabled = currentPage === 1;
        document.getElementById('nextPage').disabled = currentPage === Math.ceil(tableData.length / rowsPerPage);
    }

    window.prevPage = function() {
        if (currentPage > 1) {
            currentPage--;
            displayTable(currentPage);
        }
    }

    window.nextPage = function() {
        if (currentPage < Math.ceil(tableData.length / rowsPerPage)) {
            currentPage++;
            displayTable(currentPage);
        }
    }

    displayTable(currentPage);
});


// promotion image

// Predefined images array
const predefinedImages = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg"
];

// Variable to keep track of the current image source
let currentImageIndex = 0;

// Function to change the image when a predefined button is clicked
function changePredefinedImage(index) {
    currentImageIndex = index;
    const displayedImage = document.getElementById('displayedImage');
    displayedImage.src = predefinedImages[index];

    // Update active button styling
    const buttons = document.querySelectorAll('.button-container button');
    buttons.forEach((button, idx) => {
        button.classList.toggle('active', idx === index);
    });
}

// Function to handle image input change
document.getElementById('imageInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const displayedImage = document.getElementById('displayedImage');
            displayedImage.src = e.target.result;

            // Remove active class from all predefined buttons
            const buttons = document.querySelectorAll('.button-container button');
            buttons.forEach(button => button.classList.remove('active'));
        };
        reader.readAsDataURL(file);
    }
});

// Function to reset the image to the initial predefined image
function resetImage() {
    const displayedImage = document.getElementById('displayedImage');
    displayedImage.src = predefinedImages[currentImageIndex];

    // Restore the active class to the current image button
    const buttons = document.querySelectorAll('.button-container button');
    buttons.forEach((button, idx) => {
        button.classList.toggle('active', idx === currentImageIndex);
    });
}

// Set the initial active button on page load
document.addEventListener('DOMContentLoaded', () => {
    changePredefinedImage(currentImageIndex);
});



// carrousel promotion

let currentImageId = null;

function uploadImage(imageId) {
    currentImageId = imageId;
    document.getElementById('file-input').click();
}

function previewImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById(`carousel-image-${currentImageId}`).src = e.target.result;
            document.getElementById(`carousel-image-${currentImageId}`).style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
}


// Product Table




