class FormValidation{
  constructor(formValidationConfig, formElement){
    this._formElement = formElement;

    this._formSelector = formValidationConfig.formSelector;
    this._inputSelector = formValidationConfig.inputSelector;
    this._submitButtonSelector = formValidationConfig.submitButtonSelector;
    this._inactiveButtonClass = formValidationConfig.inactiveButtonClass;
    this._inputErrorClass = formValidationConfig.inputErrorClass;
    this._errorClass = formValidationConfig.errorClass;

    this._inputList = Array.from(formElement.querySelectorAll(this._inputSelector))
    this._buttonSubmitElement = formElement.querySelector(this._submitButtonSelector)
  }

  // функция для прослушивания введенных символов в полях
  _setEventListener = () => {
    this._buttonSubmit = this._formElement.querySelector(this._submitButtonSelector);
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  _hasInvalidInput = () => {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  // функция переключения состояния кнопки
  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonSubmitElement.classList.add(this._inactiveButtonClass);
      this._buttonSubmitElement.disabled = true;
    } else {
      this._buttonSubmitElement.classList.remove(this._inactiveButtonClass);
      this._buttonSubmitElement.disabled = false;
    }
  }

    // функция для реализации валидации
  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    };
  }

  // функция для добавления сообщщения об ошибки
  _showInputError = (inputElement, errorMessage) => {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  // функция для удаления ошибки при валидности полей
  _hideInputError = (inputElement) => {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  }

  // функция перебора форм
  enableValidation() {
    this._setEventListener();
  }
}

export {FormValidation}


