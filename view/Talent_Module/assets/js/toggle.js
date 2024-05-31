const toggle1 = document.getElementById('toggle');
      const toggle2 = document.getElementById('toggle-1');
      
      // Function to synchronize toggle states
      function synchronizeToggleStates() {
          if (window.innerWidth <= 550) {
              // Mobile size
              if (toggle1.checked) {
                  // If toggle1 is checked, set toggle2 to checked and vice versa
                  toggle2.checked = true;
              } else {
                  // If toggle1 is not checked, set toggle2 to unchecked
                  toggle2.checked = false;
              }
          } else{
              // Default size
              if (toggle2.checked) {
                  // If toggle2 is checked, set toggle1 to checked and vice versa
                  toggle1.checked = false;
              } else {
                  // If toggle2 is not checked, set toggle1 to unchecked
                  toggle1.checked = true
              }
          }
      }
      
      // Call the function initially and whenever the window is resized
      synchronizeToggleStates();
      window.addEventListener('resize', synchronizeToggleStates);