(function() {
    const editBtn = document.getElementById('edit-btn');
    const selectedOptionsContainer = document.getElementById('selected-options-container');
    const selectedOptionsBox = document.getElementById('selected-options-box');
    const editPopup = document.getElementById('edit-popup');
    const editSearchInput = document.getElementById('edit-search-input');
    const editOptionsDiv = document.getElementById('edit-options');
    const cancelBtn = document.getElementById('cancel-btn');
    const saveBtn = document.getElementById('save-btn');
    const MAX_SELECTION = 10;
    const skill1 = document.getElementById('skill1');
    const skill2 = document.getElementById('skill2');
    const skill3 = document.getElementById('skill3');
    const skill4 = document.getElementById('skill4');
    const skill5 = document.getElementById('skill5');
    const skill6 = document.getElementById('skill6');
    const skill7 = document.getElementById('skill7');
    const skill8 = document.getElementById('skill8');
    const skill9 = document.getElementById('skill9');
    const skill10 = document.getElementById('skill10');
    const expertiseModal=document.getElementById("expertiseModal")

    
    // Mock options, replace with your own
    const options = ['Animation', 'App Development', 'Ajax', 'Artificial Intelligence', 'Bootstrap', 'Branding', 'Business', 'Development', 'Content Writing', 'Copy Writing', 'Creative Writing', 'CSS 3', 'C# nxnmdjx', 'Data Analysis', 'Digital Marketing', 'Django', 'Event Planning', 'Express js', 'Figma', 'Graphic Design', 'GraphQL', 'HTML 5',
                 'Illustration', 'Javascript', 'Marketing Strategy', 'Mobile Development', 'MongoDB', 'Music', 'Production', 'Node js', 'Photography', 'PHP', 'Posgre', 'SQL', 'Project Management', 'Python 3', 'React', 'Responsive Development', 'Ruby', 'Search Engine Optimization (SEO)', 'Software Development', 'Translation', 'User Experience (UX) Design', 'User Interface (UI) Design', 'Videography', 'Web Design', 'Wordpress'];

    let skills = [skill1, skill2, skill3, skill4, skill5, skill6,skill7, skill8, skill9, skill10]; 
    for(let i=0;i<skills.length;i++){
        if(!skills[i].textContent){
            skills[i].style.display="none";
        }
        else{
            skills[i].style.display="block"
        }
    }
    let originalSelectedOptions = [skill1.textContent, skill2.textContent, skill3.textContent, skill4.textContent, skill5.textContent, skill6.textContent,skill7.textContent, skill8.textContent, skill9.textContent, skill10.textContent]; // Original selected options
    let selectedOptions = originalSelectedOptions.slice(); // Updated selected options
    // Function to display selected options
    // function displaySelectedOptions() {
    //     selectedOptionsContainer.innerHTML = selectedOptions.join(', ');
    // }

    // Function to display selected options with remove option in edit popup
    // function displaySelectedOptionsInBox() {
    //     selectedOptionsBox.innerHTML = '';
    //     selectedOptions.forEach(optionText => {
    //         const selectedOption = document.createElement('div');
    //         selectedOption.classList.add('selected-option');
    //         selectedOption.textContent = optionText;
    //         const closeIcon = document.createElement('span');
    //         closeIcon.innerHTML = '&times;';
    //         closeIcon.classList.add('close');
    //         closeIcon.addEventListener('click', function() {
    //             removeSelectedOption(optionText);
    //         });
    //         selectedOption.appendChild(closeIcon);
    //         selectedOptionsBox.appendChild(selectedOption);
    //     });
    // }
    function displaySelectedOptionsInBox() {
        selectedOptionsBox.innerHTML = '';
        selectedOptions.forEach(optionText => {
          if (optionText) { // Check if optionText has a value before creating the element
            const selectedOption = document.createElement('div');
            selectedOption.classList.add('selected-option');
            selectedOption.textContent = optionText;
            const closeIcon = document.createElement('span');
            closeIcon.innerHTML = '&times;';
            closeIcon.classList.add('close');
            closeIcon.addEventListener('click', function() {
              removeSelectedOption(optionText);
            });
            selectedOption.appendChild(closeIcon);
            selectedOptionsBox.appendChild(selectedOption);
          }
        });
      }
    // Function to remove a selected option
    function removeSelectedOption(optionText) {
        selectedOptions = selectedOptions.filter(option => option !== optionText);
        displaySelectedOptionsInBox();
    }

    // Function to create option elements
    function createEditOption(optionText) {
        const option = document.createElement('div');
        option.textContent = optionText;
        option.classList.add('edit-option');
        option.addEventListener('click', function() {
            toggleEditSelection(optionText);
        });
        return option;
    }

    // Function to toggle selection of an option in edit mode
    function toggleEditSelection(optionText) {
        const index = selectedOptions.indexOf(optionText);
        if (index === -1) {
            if (selectedOptions.length >= MAX_SELECTION) {
                alert('You can only select up to 10 options.');
                return;
            }
            selectedOptions.push(optionText);
        } else {
            selectedOptions.splice(index, 1);
        }
        // Update display of selected options in the popup
        displaySelectedOptionsInBox();
    }

    // Function to populate edit options
    function populateEditOptions() {
        editOptionsDiv.innerHTML = '';
        options.forEach(optionText => {
            const option = createEditOption(optionText);
            editOptionsDiv.appendChild(option);
        });
    }

    // Event listener for edit button
    editBtn.addEventListener('click', function() {
        populateEditOptions();
        displaySelectedOptionsInBox();
        editPopup.style.display = 'block';
        expertiseModal.style.display="block";
    });

    // Event listener for cancel button
    cancelBtn.addEventListener('click', function() {
        // Reset selected options in the popup to match the original selected options
        selectedOptions = originalSelectedOptions.slice();
        displaySelectedOptionsInBox();
        editPopup.style.display = 'none';
        expertiseModal.style.display="none";
    });

    // Event listener for save button
    // saveBtn.addEventListener('click', function() {
    //     // Update the original selected options with the changes made in the popup
    //     originalSelectedOptions = selectedOptions.slice();
    //     displaySelectedOptions();
    //     editPopup.style.display = 'none';
    // });
    saveBtn.addEventListener('click', function() {
        // Update the original selected options with the changes made in the popup
        originalSelectedOptions = selectedOptions.slice();
      
        // Update the content of the li elements with the new selected options
        const skillElements = document.querySelectorAll('ul.skills li.skill');
        skillElements.forEach((skillElement, index) => {
          skillElement.textContent = selectedOptions[index] || "";  // Set empty string if no option at index
        });
        for(let i=0;i<skills.length;i++){
            if(!skills[i].textContent){
                skills[i].style.display="none";
            }
            else{
                skills[i].style.display="block"
            }
        }
        // displaySelectedOptions();
        editPopup.style.display = 'none';
        expertiseModal.style.display="none";
    });

    // Search functionality in edit mode
    editSearchInput.addEventListener('input', function() {
        const searchText = editSearchInput.value.trim().toLowerCase();
        const editOptionElements = editOptionsDiv.getElementsByClassName('edit-option');
        Array.from(editOptionElements).forEach(option => {
            const optionText = option.textContent.toLowerCase();
            if (optionText.includes(searchText)) {
                option.style.display = 'block';
            } else {
                option.style.display = 'none';
            }
        });
    });

    // Display initial selected options
    // displaySelectedOptions();
})();
