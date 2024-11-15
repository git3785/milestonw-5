// // document.getElementById('resumeform')?.addEventListener('submit', (event) => {
// //     event.preventDefault(); // Prevent form submission

// //     // Get form input elements
// //     const nameElement = document.getElementById('name') as HTMLInputElement;
// //     const emailElement = document.getElementById('email') as HTMLInputElement;
// //     const phoneElement = document.getElementById('phone') as HTMLInputElement;
// //     const educationElement = document.getElementById('education') as HTMLTextAreaElement;
// //     const experienceElement = document.getElementById('Experience') as HTMLTextAreaElement;
// //     const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;

// //     // Resume link
// //     const usernameElement = document.getElementById("username") as HTMLInputElement;

// //     // Ensure all elements are present
// //     if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement && usernameElement) {
// //         // Extract values from elements
// //         const name = nameElement.value;
// //         const email = emailElement.value;
// //         const phone = phoneElement.value;
// //         const education = educationElement.value;
// //         const experience = experienceElement.value;
// //         const skills = skillsElement.value;
// //         const username = usernameElement.value;

// //         const uniquePath = `resumes/${username.replace(/\$+/g, ' ')}cv.html`;

// //         // Create a resume preview section
// //         const resumeResult = `
// //             <h2>Resume Preview</h2>
// //             <p><strong>Name:</strong> <span id="edit-name" class="editable">${name}</span></p>
// //             <p><strong>Email:</strong><span id="edit-email" class="editable">${email}</span></p>
// //             <p><strong>Phone:</strong><span id="edit-phone" class="editable">${phone}</span></p>

// //             <h3>Education</h3>
// //             <p><span id="edit-education" class="editable">${education}</span></p>

// //             <h3>Experience</h3>
// //             <p><span id="edit-experience" class="editable">${experience}</span></p>

// //             <h3>Skills</h3>
// //             <p><span id="edit-skills" class="editable">${skills}</span></p>
// //         `;

// //         // Create the download link
// //         const downloadLink = document.createElement('a');
// //         downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeResult);
// //         downloadLink.download = uniquePath;
// //         downloadLink.textContent = 'Download your New Resume';

// //         // Get the resume result element and display the preview
// //         const resumeOutputElement = document.getElementById('resumeOutput');
// //         if (resumeOutputElement) {
// //             resumeOutputElement.innerHTML = resumeResult;
// //             makeEditable();

// //             resumeOutputElement.appendChild(downloadLink);
// //         } else {
// //             console.error('Some form fields are missing');
// //         }

// //         function makeEditable() {
// //             const editableElements = document.querySelectorAll('.editable');
// //             editableElements.forEach(element => {
// //                 element.addEventListener('click', function () {
// //                     const currentElement = element as HTMLElement;
// //                     const currentValue = currentElement.textContent || '';

// //                     // Replace content with an input field
// //                     if (currentElement.tagName === 'P' || currentElement.tagName === 'SPAN') {
// //                         const input = document.createElement('input'); // Corrected method to create input
// //                         input.type = 'text';
// //                         input.value = currentValue;
// //                         input.classList.add('editing-input'); // Corrected class name
// //                         currentElement.style.display = 'none'; // Hide the current element
// //                         currentElement.parentElement?.insertBefore(input, currentElement); // Insert input before current element
// //                         input.focus(); // Focus the input field

// //                         // When input loses focus, update the text content
// //                         input.addEventListener('blur', function () {
// //                             currentElement.textContent = input.value;
// //                             input.remove(); // Remove the input field
// //                             currentElement.style.display = 'inline'; // Make the current element visible again
// //                         });
// //                     }
// //                 });
// //             });
// //         }
// //     }
// // });

// // Select the form and attach a submit event listener
// document.getElementById('resumeform')?.addEventListener('submit', (event) => {
//     event.preventDefault(); // Prevent form submission

//     // Get form input elements
//     const nameElement = document.getElementById('name') as HTMLInputElement;
//     const emailElement = document.getElementById('email') as HTMLInputElement;
//     const phoneElement = document.getElementById('phone') as HTMLInputElement;
//     const educationElement = document.getElementById('education') as HTMLTextAreaElement;
//     const experienceElement = document.getElementById('Experience') as HTMLTextAreaElement;
//     const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;

//     // Resume link
//     const usernameElement = document.getElementById("username") as HTMLInputElement;

//     // Ensure all elements are present
//     if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement && usernameElement) {
//         // Extract values from elements
//         const name = nameElement.value;
//         const email = emailElement.value;
//         const phone = phoneElement.value;
//         const education = educationElement.value;
//         const experience = experienceElement.value;
//         const skills = skillsElement.value;
//         const username = usernameElement.value;

//         const uniquePath = `resumes/${username.replace(/\$+/g, ' ')}cv.html`;

//         // Create a resume preview section
//         const resumeResult = `
//             <h2>Resume Preview</h2>
//             <p><strong>Name:</strong> <span id="edit-name" class="editable">${name}</span></p>
//             <p><strong>Email:</strong><span id="edit-email" class="editable">${email}</span></p>
//             <p><strong>Phone:</strong><span id="edit-phone" class="editable">${phone}</span></p>

//             <h3>Education</h3>
//             <p><span id="edit-education" class="editable">${education}</span></p>

//             <h3>Experience</h3>
//             <p><span id="edit-experience" class="editable">${experience}</span></p>

//             <h3>Skills</h3>
//             <p><span id="edit-skills" class="editable">${skills}</span></p>
//         `;

//         // Create the download link
//         const downloadLink = document.createElement('a');
//         downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeResult);
//         downloadLink.download = uniquePath;
//         downloadLink.textContent = 'Download your New Resume';

       

//         // Get the resume result element and display the preview
//         const resumeOutputElement = document.getElementById('resumeOutput');
//         if (resumeOutputElement) {
//             resumeOutputElement.innerHTML = resumeResult;
//             makeEditable();

//             // Append download link and shareable link to the output
//             resumeOutputElement.appendChild(downloadLink);
//         } else {
//             console.error('Some form fields are missing');
//         }

//         function makeEditable() {
//             const editableElements = document.querySelectorAll('.editable');
//             editableElements.forEach(element => {
//                 element.addEventListener('click', function () {
//                     const currentElement = element as HTMLElement;
//                     const currentValue = currentElement.textContent || '';

//                     // Replace content with an input field
//                     if (currentElement.tagName === 'P' || currentElement.tagName === 'SPAN') {
//                         const input = document.createElement('input'); // Corrected method to create input
//                         input.type = 'text';
//                         input.value = currentValue;
//                         input.classList.add('editing-input'); // Corrected class name
//                         currentElement.style.display = 'none'; // Hide the current element
//                         currentElement.parentElement?.insertBefore(input, currentElement); // Insert input before current element
//                         input.focus(); // Focus the input field

//                         // When input loses focus, update the text content
//                         input.addEventListener('blur', function () {
//                             currentElement.textContent = input.value;
//                             input.remove(); // Remove the input field
//                             currentElement.style.display = 'inline'; // Make the current element visible again
//                         });
//                     }
//                 });
//             });
//         }
//     }
// });

document.getElementById('resumeform')?.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    // Get form input elements
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLTextAreaElement;
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;

    // Resume link
    const usernameElement = document.getElementById("username") as HTMLInputElement;

    // Ensure all elements are present
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement && usernameElement) {
        // Extract values from elements
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;
        const username = usernameElement.value;

        // Use a valid path
        const uniquePath = `resumes/${username.replace(/\s+/g, '_')}_cv.html`;

        // Create a resume preview section as a string
        const resumeResult = `
            <h2>Resume Preview</h2>
            <p><strong>Name:</strong> <span id="edit-name" class="editable">${name}</span></p>
            <p><strong>Email:</strong> <span id="edit-email" class="editable">${email}</span></p>
            <p><strong>Phone:</strong> <span id="edit-phone" class="editable">${phone}</span></p>

            <h3>Education</h3>
            <p><span id="edit-education" class="editable">${education}</span></p>

            <h3>Experience</h3>
            <p><span id="edit-experience" class="editable">${experience}</span></p>

            <h3>Skills</h3>
            <p><span id="edit-skills" class="editable">${skills}</span></p>
        `;

        // Create the download link
        const downloadLink = document.createElement('a');
        downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeResult);
        downloadLink.download = uniquePath;
        downloadLink.textContent = 'Download your New Resume';

        // Create shareable link
        const shareableLink = document.createElement('a');
        shareableLink.href = window.location.href + uniquePath;
        shareableLink.textContent = 'Shareable Resume Link';
        shareableLink.target = '_blank';

        // Get the resume result element and display the preview
        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeResult;
            makeEditable();

            // Append download link and shareable link to the output
            resumeOutputElement.appendChild(downloadLink);
            resumeOutputElement.appendChild(document.createElement('br')); // Line break for better layout
            resumeOutputElement.appendChild(shareableLink);
        } else {
            console.error('Some form fields are missing');
        }

        function makeEditable() {
            const editableElements = document.querySelectorAll('.editable');
            editableElements.forEach(element => {
                element.addEventListener('click', function () {
                    const currentElement = element as HTMLElement;
                    const currentValue = currentElement.textContent || '';

                    // Replace content with an input field
                    if (currentElement.tagName === 'P' || currentElement.tagName === 'SPAN') {
                        const input = document.createElement('input');
                        input.type = 'text';
                        input.value = currentValue;
                        input.classList.add('editing-input');
                        currentElement.style.display = 'none';
                        currentElement.parentElement?.insertBefore(input, currentElement);
                        input.focus();

                        // When input loses focus, update the text content
                        input.addEventListener('blur', function () {
                            currentElement.textContent = input.value;
                            input.remove();
                            currentElement.style.display = 'inline';
                        });
                    }
                });
            });
        }
    } else {
        console.error('Form elements are missing.');
    }
});
