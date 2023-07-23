    // FormValidator class to handle form validation
    class FormValidator {
      constructor() {
        this.emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        this.phoneRegex = /^(?:(?:\+?\d{2})?01)?\d{9}$/;
        this.postCodeRegex = /^\d{4}$/;
        this.passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*\W)[A-Za-z\d\W]{8,}$/;
      }

      validateEmail(email) {
        return this.emailRegex.test(email);
      }

      validatePhoneNumber(phoneNumber) {
        return this.phoneRegex.test(phoneNumber);
      }

      validatePostCode(postCode) {
        return this.postCodeRegex.test(postCode);
      }

      validatePassword(password) {
        return this.passwordRegex.test(password);
      }
    }

    function updatePlaceholder() {
      const option = document.getElementById("option").value;
      

      switch (option) {
        case "1":
          placeholderText = "example@email.com";
          break;
        case "2":
          placeholderText = "(+88)01600000000";
          break;
        case "3":
          placeholderText = "1204";
          break;
        case "4":
          placeholderText = "Abc@12345";
          break;
        default:
          break;
      }

      document.getElementById("userInput").setAttribute("placeholder", placeholderText);
    }

    function validateInput() {
      const option = document.getElementById("option").value;
      const userInput = document.getElementById("userInput").value;
      const formValidator = new FormValidator();

      let isValid = false;
      switch (option) {
        case "1":
          isValid = formValidator.validateEmail(userInput);
          break;
        case "2":
          isValid = formValidator.validatePhoneNumber(userInput);
          break;
        case "3":
          isValid = formValidator.validatePostCode(userInput);
          break;
        case "4":
          isValid = formValidator.validatePassword(userInput);
          break;
        default:
          isValid = false;
          break;
      }

      const resultElement = document.getElementById("result");
      resultElement.textContent = isValid
        ? "Input is valid!"
        : "Input is not valid.";
    }