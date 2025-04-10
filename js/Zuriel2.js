document.addEventListener("DOMContentLoaded", function () {
	this.addEventListener("click", e => {
		let tar = e.target;
		if (tar.hasAttribute("data-dl")) {
			let dlClass = "dl-working";
			if (!tar.classList.contains(dlClass)) {
				let lastSpan = tar.querySelector("span:last-child"),
					lastSpanText = lastSpan.textContent,
					timeout = getMSFromProperty("--dur", ":root");

				tar.classList.add(dlClass);
				lastSpan.textContent = "Downloading...";
				tar.disabled = true;

				setTimeout(() => {
					lastSpan.textContent = "Completed!";
				}, timeout * 0.9);

				setTimeout(() => {
					tar.classList.remove(dlClass);
					lastSpan.textContent = lastSpanText;
					tar.disabled = false;
				}, timeout + 1e3);

			}
		}
	});
});
function getMSFromProperty(property, selector) {
	let cs = window.getComputedStyle(document.querySelector(selector)),
		transDur = cs.getPropertyValue(property),
		msLabelPos = transDur.indexOf("ms"),
		sLabelPos = transDur.indexOf("s");

	if (msLabelPos > -1)
		return transDur.substr(0, msLabelPos);
	else if (sLabelPos > -1)
		return transDur.substr(0, sLabelPos) * 1e3;
}


// Get a reference to the button element
var downloadButton = document.getElementById('downloadButton');

// Add a click event listener to the button
downloadButton.addEventListener('click', function () {
    // Delay for 3 seconds (3000 milliseconds) before initiating the download
    setTimeout(function () {
        // Create a new XMLHttpRequest
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'blob'; // Set the response type to blob

        // Define the URL of the PDF file
        var url = 'https://e0a86f67-763c-4aa0-8b55-a4eb00df97fa.usrfiles.com/ugd/e0a86f_d71caf95c68841b28d6e247377ce7b4a.pdf';

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // Create a blob from the response
                var blob = new Blob([xhr.response], { type: 'application/pdf' });

                // Create a temporary anchor element
                var anchor = document.createElement('a');
                anchor.href = URL.createObjectURL(blob);
                anchor.download = 'Zuriel Shanley Resume.pdf';

                // Trigger a click on the anchor to initiate the download
                anchor.click();

                // Clean up the anchor element and URL object
                anchor.remove();
                URL.revokeObjectURL(anchor.href);
            }
        };

        // Open and send the XMLHttpRequest
        xhr.open('GET', url);
        xhr.send();
    }, 3000); // 3 seconds delay
});
