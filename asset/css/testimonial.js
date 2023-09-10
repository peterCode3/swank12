// burger menu
$(document).ready(function() {
  $('.burger_menu').click(function() {
    $('.nav_menu').toggleClass('open');
  });
  // DropDown Menu
  $('#drp-down').hover(function() {
    $('.dropdown-custom').toggleClass('open');
  });

  // Loder Js
  $('#ptr-start-site button').click(function(){
    var loader = $('.ptr-loader');
    loader.hide();
    var body = $('body');
    body.addClass('body-opacity');
});
  setTimeout(function() {
    $('#ptr-start-site').removeClass('ptr-start-site');
  }, 4500);

});


// image Scroll

const parallaxImage = document.querySelector('.image_mobile');

window.addEventListener('scroll', () => {
  const scrollOffset = window.pageYOffset;
  parallaxImage.style.transform = `translate3d(0, -${scrollOffset * 0.6}px, 0)`; // Adjust the factor for desired parallax effect
});

        



// Testimonial
document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.testimonial-slider .slide');
  const dotsContainer = document.querySelector('.dots-container');
  // let currentSlide = 0;

  // function showSlide(n) {
  //   slides[currentSlide].classList.remove('active');
  //   dots[currentSlide].classList.remove('active');
  //   currentSlide = (n + slides.length - 1) % slides.length;
  //   slides[currentSlide].classList.add('active');
  //   dots[currentSlide].classList.add('active');
  // }

  // function nextSlide() {
  //   showSlide(currentSlide + 1);
  // }

  // function prevSlide() {
  //   showSlide(currentSlide - 1);
  // }

  // setInterval(nextSlide, 5000); // Auto slide every 5 seconds

  // Create dots based on the number of slides
  const dots = Array.from({ length: slides.length }, (_, i) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.addEventListener('click', () => showSlide(i));
    dotsContainer.appendChild(dot);
    return dot;
  });

  // showSlide(currentSlide);
});
  


  jQuery(document).ready(function($) {
            "use strict";
            //  TESTIMONIALS CAROUSEL HOOK
            $('#customers-testimonials').owlCarousel({
                loop: true,
                center: true,
                items: 3,
                margin: 0,
                autoplay: true,
                dots:true,
                autoplayTimeout: 8500,
                smartSpeed: 450,
                responsive: {
                  0: {
                    items: 1
                  },
                  768: {
                    items: 2
                  },
                  1170: {
                    items: 3
                  }
                }
            });
          });


// Chatbot
// Find the parent element with class "chatbot"
const chatbotParent = document.querySelector('.chatbot');
{/* <form id="user-form">
  <input type="text" name="name" placeholder="Full Name">
  <input type="email" name="email" placeholder="Add Email here">
  <button type="button" id="key-button">Key</button>
</form> */}
// Define the HTML structure
const htmlContent = ` 
<div class="chat-header">
  Chat with our Bot
  <span class="close" id="close-icon">&times;</span>
</div>
<div class="chatbox" id="chatbox">


</div>
<form class="chat-form" id="chat-form">
  <input type="text" id="chat-input" placeholder="Type your message...">
  <button type="submit"><i class="fas fa-paper-plane"></i></button>
</form>
`;
// document.addEventListener('DOMContentLoaded', function() {
//   const keyButton = document.getElementById('key-button');
//   const nameInput = document.querySelector('input[name="name"]');
//   const emailInput = document.querySelector('input[name="email"]');

//   keyButton.addEventListener('click', async function() {
//     const name = nameInput.value;
//     const email = emailInput.value;

//     try {
//       const response = await fetch('https://api.swank12.com/data', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ name, email })
//       });
    
//       if (!response.ok) {
//         throw new Error(`Network response was not ok: ${response.status}`);
//       }
//       const result = await response.json();

//       sessionStorage.setItem('token', result.token);

//       alert(result.message);
//     } catch (error) {
//       console.error('An error occurred:', error);
//       alert('An error occurred while processing your request.');
//     }
//   });
// });




// Set the innerHTML of the chatbot parent element
chatbotParent.innerHTML = htmlContent;

// Submit Action
$(document).ready(function () {
  $('#chat-form').on('submit', function (event) {
    event.preventDefault();
    sendMessage();
  });

  

  function sendMessage() {
  var usermessage = $('#chat-input').val().trim();
  var customResponse;
  if (usermessage !== '') {
    setTimeout(function(){
          addMessage('user', usermessage);
    },800);

    
    setTimeout(function () {
      $.ajax({
        type: 'POST',
        url: 'https://api.swank12.com/chat', 
        contentType: 'application/json',
        data: JSON.stringify({
          "message": usermessage
        }),
        timeout: 2000, 
        beforeSend: function () {
          // Display loading indicator
          addMessage('bot', 'Typing...');
        },
        success: function (data) {
          console.log(data);
          console.log(response2);
          
          // Remove loading indicator and add actual bot response
          setTimeout(function () {
            $('.message.bot:last-child').remove(); 

            var botContent = '';
            if (typeof data.response === 'string') {
              botContent = data.response;
            } else if (typeof data.response2 === 'string') {
              botContent = data.response2;
            } else if (typeof data.response === 'object' && 'content' in data.response) {
              botContent = data.response.content;
            } else {
              botContent = 'Sorry, I didn\'t understand. Could you please clarify?';
            }
            // var botContent = '';
            // console.log("Jani ",data.response2)
            // if (typeof data.response === 'string') {
            //   botContent = data.response;
            // } else if (typeof data.response === 'object' && 'content' in data.response) {
            //   botContent = data.response.content;
            // } else {
            //   botContent = 'Sorry, I didn\'t understand. Could you please clarify?';
            // }

            addMessage('bot', botContent);
          }, 1000); 
        },
        error: function (xhr, status, error) {
          // Remove loading indicator and display error
          $('.message.bot:last-child').remove();
          addMessage('bot', 'An error occurred while processing your message.', status, error);
        },
        timeout: function () {
          // Remove loading indicator and display timeout message
          $('.message.bot:last-child').remove();
          addMessage('bot', 'No response received from the server. Please try again later.');
        }
      });
    }, 2000); 
  }
  $('#chat-input').val('');
}



function addMessage(role, content) {
  var chatbox = $('#chatbox');
  var messageContainer = $('<li>').addClass('message ' + role);

  if (role === 'user') {
    var userIcon = $('<i>').addClass('fa-solid fa-user');
    var userMessage = $('<span>').addClass('message-content').text(content);
    messageContainer.append(userIcon, userMessage);
  } else if (role === 'bot') {
    // var botIcon = $('<i>').addClass('fa-brands fa-rocketchat');
    var botMessage = $('<span>').addClass('message-content').text(content);

    // Create a "typing" indicator
    var typingIndicator = $('<span>').addClass('typing-indicator').text('Typing...');
    messageContainer.append(typingIndicator);

    // Add the actual content after a short delay (simulating "loading")
    setTimeout(function () {
      messageContainer.empty(); 
      messageContainer.addClass('botflex'); 
      messageContainer.append(botMessage);
    }, 1000); 
  }

  chatbox.append(messageContainer);
  chatbox.scrollTop(chatbox.prop('scrollHeight'));
}



// Popup open
const chatIcon = document.getElementById('chat-icon');
  const chatPopup = document.getElementById('chat-popup');
  const chatbox = document.getElementById('chatbox');


  chatIcon.addEventListener('click', function () {
      chatPopup.classList.toggle('active');
      chatbox.scrollTop = chatbox.scrollHeight;
  });


  // Popup close
const closeIcon = document.getElementById('close-icon');
const messagebox = document.getElementById('chatbox');
// Event listener for the close icon
closeIcon.addEventListener('click', function () {
    chatPopup.classList.remove('active');
});


});

  





