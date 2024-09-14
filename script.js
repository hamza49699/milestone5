document.addEventListener('DOMContentLoaded', function () {
    var _a;
    // Handle form submission
    (_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
        var _a;
        event.preventDefault();
        // Type assertions
        var nameElement = document.getElementById('name');
        var emailElement = document.getElementById('email');
        var phoneElement = document.getElementById('phone');
        var educationElement = document.getElementById('education');
        var experienceElement = document.getElementById('experience');
        var skillsElement = document.getElementById('skills');
        var profilePictureElement = document.getElementById('profilePicture');
        var usernameElement = document.getElementById("username");
        // Resume output
        if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement && usernameElement) {
            var name_1 = nameElement.value;
            var email = emailElement.value;
            var phone = phoneElement.value;
            var education = educationElement.value;
            var experience = experienceElement.value;
            var skills = skillsElement.value;
            var username = usernameElement.value;
            var uniquePath = "resumes/".concat(username.replace(/\s+/g, '_'), "cv.html");
            var profilePictureUrl = ((_a = profilePictureElement.files) === null || _a === void 0 ? void 0 : _a[0]) ? URL.createObjectURL(profilePictureElement.files[0]) : '';
            var resumeOutput = "\n                <h2>Resume</h2>\n                ".concat(profilePictureUrl ? "<img src=\"".concat(profilePictureUrl, "\" alt=\"Profile Picture\" style=\"width: 150px; height: 150px; border-radius: 50%;\"/>") : '', "\n                <p class=\"editable\" id=\"editableName\"><strong>Name:</strong> ").concat(name_1, "</p>\n                <p class=\"editable\" id=\"editableEmail\"><strong>Email:</strong> ").concat(email, "</p>\n                <p class=\"editable\" id=\"editablePhone\"><strong>Phone Number:</strong> ").concat(phone, "</p>\n                <p class=\"editable\" id=\"editableEducation\"><strong>Education:</strong> ").concat(education, "</p>\n                <p class=\"editable\" id=\"editableExperience\"><strong>Experience:</strong> ").concat(experience, "</p>\n                <p class=\"editable\" id=\"editableSkills\"><strong>Skills:</strong> ").concat(skills, "</p>\n            ");
            var resumeOutputElement = document.getElementById('resumeOutput');
            if (resumeOutputElement) {
                resumeOutputElement.innerHTML = "<h1>YOUR RESUME</h1>".concat(resumeOutput);
                // Create and append download link
                var buttonContainer = document.createElement("div");
                buttonContainer.id = "buttonContainer";
                resumeOutputElement.appendChild(buttonContainer);
                var downloadLink = document.createElement('a');
                downloadLink.href = 'data:text/html;charset=UTF-8,' + encodeURIComponent(resumeOutput);
                downloadLink.download = uniquePath;
                downloadLink.textContent = 'Download Your Resume';
                buttonContainer.appendChild(downloadLink);
                // Add click event listeners for editable sections
                document.querySelectorAll('.editable').forEach(function (element) {
                    element.addEventListener('click', function () {
                        var currentContent = element.innerHTML;
                        var newContent = prompt('Edit content:', currentContent.replace(/<[^>]+>/g, '').trim());
                        if (newContent !== null) {
                            element.innerHTML = newContent;
                        }
                    });
                });
                resumeOutputElement.style.display = "block";
            }
            else {
                console.error("The resume output element is missing.");
            }
        }
        else {
            console.log("One or more form elements are missing.");
        }
    });
});
