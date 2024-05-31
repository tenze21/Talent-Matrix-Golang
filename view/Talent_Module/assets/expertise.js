(function() {
    // Your existing expertise.js code here
    const dropdown1 = document.getElementById('custom-dropdown');
        const selectedOptionsDiv = document.getElementById('selected-options');
        const optionsDiv = document.getElementById('options');
        const searchInput = document.getElementById('search-input');
        const MAX_SELECTION = 10;

        // Mock options, replace with your own
        const options = ['Animation', 'App Development', 'Ajax', 'Artificial Intelligence', 'Bootstrap', 'Branding', 'Business', 'Development', 'Content Writing', 'Copy Writing', 'Creative Writing', 'CSS 3', 'C# nxnmdjx', 'Data Analysis', 'Digital Marketing', 'Django', 'Event Planning', 'Express js', 'Figma', 'Graphic Design', 'GraphQL', 'HTML 5',
                     'Illustration', 'Javascript', 'Marketing Strategy', 'Mobile Development', 'MongoDB', 'Music', 'Production', 'Node js', 'Photography', 'PHP', 'Posgre', 'SQL', 'Project Management', 'Python 3', 'React', 'Responsive Development', 'Ruby', 'Search Engine Optimization (SEO)', 'Software Development', 'Translation', 'User Experience (UX) Design', 'User Interface (UI) Design', 'Videography', 'Web Design', 'Wordpress'];

        // Function to create option elements
        function createOption(optionText) {
            const option = document.createElement('div');
            option.textContent = optionText;
            option.classList.add('option');
            option.addEventListener('click', function() {
                toggleSelection(optionText);
            });
            return option;
        }

        // Function to toggle selection of an option
        function toggleSelection(optionText) {
        	const optionTextWithoutCross = optionText.replace(/&times;/g, '');  // Remove close icon character,
            console.log(optionTextWithoutCross);
    const selectedOptionIndex = Array.from(selectedOptionsDiv.children).findIndex(option => {
        // Use strict equality instead of includes
        const optionTextTrimmed = option.textContent.slice(0, -1).trim().toLowerCase();
        // console.log("Option text trimmed:", optionTextTrimmed);
        // console.log("Option text without cross:", optionTextWithoutCross);
        return optionTextTrimmed === optionTextWithoutCross.trim().toLowerCase();
    }); // Use includes() instead of strict equality
            if (selectedOptionIndex !== -1) {
                // If already selected, deselect
                selectedOptionsDiv.children[selectedOptionIndex].remove();
            } else {
                if (selectedOptionsDiv.children.length >= MAX_SELECTION) {
                    alert('You can only select up to ' + MAX_SELECTION + ' options.');
                    return;
                }

                const selectedOption = document.createElement('div');
                selectedOption.textContent = optionText;
                selectedOption.classList.add('selected-option');
                selectedOption.addEventListener('click', function() {
                    selectedOption.remove();
                });
                const closeIcon = document.createElement('span');
                closeIcon.innerHTML = '&times;';
                closeIcon.classList.add('close');
                closeIcon.addEventListener('click', function(event) {
                    
                    selectedOption.remove();
                    
                });
                selectedOption.appendChild(closeIcon);

                selectedOptionsDiv.appendChild(selectedOption);
            }
        }

        // Populate dropdown with options
        options.forEach(optionText => {
            const option = createOption(optionText);
            optionsDiv.appendChild(option);
        });

        // Search functionality
        searchInput.addEventListener('input', function() {
            const searchText = searchInput.value.trim().toLowerCase();
            const optionElements = optionsDiv.getElementsByClassName('option');
            Array.from(optionElements).forEach(option => {
                const optionText = option.textContent.toLowerCase();
                if (optionText.includes(searchText)) {
                    option.style.display = 'block';
                } else {
                    option.style.display = 'none';
                }
            });
        });

        // Toggle options display on arrow click
        dropdown1.querySelector('.arrow').addEventListener('click', function() {
            optionsDiv.classList.toggle('show');
        });

        // Hide options when clicking outside the dropdown
        window.addEventListener('click', function(event) {
            if (!dropdown1.contains(event.target)) {
                optionsDiv.classList.remove('show');
            }
        });
})();


const form =document.querySelector('form');
form.addEventListener('submit', function(event){
    event.preventDefault();
    window.open="Talent_profile.html";
});
