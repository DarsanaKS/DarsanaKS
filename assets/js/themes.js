// Code to create version drop-down
$(document).ready(function() {
    // Add dropdown menu to the sidebar
    var dropdown = '<div class="dropdown">' +
                       '<button class="dropbtn">Select Version</button>' +
                       '<div class="dropdown-content">' +
                           '<a href="#user-manual-version-1">Ver 1</a>' +
                           '<a href="#user-manual-version-2">Ver 2</a>' +
                       '</div>' +
                   '</div>';

    // Insert the dropdown menu to the sidebar
    $(".wy-side-scroll").prepend(dropdown);

    // Handle dropdown item clicks
    $(".dropdown-content a").on("click", function(event) {
        event.preventDefault();
        var targetId = $(this).attr("href").substring(1); // Remove the leading hash
        location.hash = targetId;
    });
});
