import userInput from "../hooks/user-input";

const BasicForm = (props) => {
  const isNotEmpty = (value) => {
    return value.trim() !== "";
  };
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: enteredNameHasError,
    inputChangeHandler: inputNameChangeHandler,
    blurChangeHandler: inputNameBlurHandler,
    reset: resetNameHandler,
  } = userInput(isNotEmpty);

  const nameInputClasses = enteredNameHasError
    ? "form-control invalid"
    : "form-control";

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: enteredLastNameHasError,
    inputChangeHandler: inputLastNameChangeHandler,
    blurChangeHandler: inputLastNameBlurHandler,
    reset: resetLastNameHandler,
  } = userInput(isNotEmpty);

  const lastNameInputClasses = enteredLastNameHasError
    ? "form-control invalid"
    : "form-control";

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: enteredEmailHasError,
    inputChangeHandler: inputEmailChangeHandler,
    blurChangeHandler: inputEmailBlurHandler,
    reset: resetEmailHandler,
  } = userInput((value) => value.includes("@"));

  const emailInputClasses = enteredNameHasError
    ? "form-control invalid"
    : "form-control";

  let formIsValid = false;

  if ((enteredNameIsValid, enteredLastNameIsValid, enteredEmailIsValid)) {
    formIsValid = true;
  }
  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(enteredName, enteredLastName, enteredEmail);
    resetNameHandler();
    resetLastNameHandler();
    resetEmailHandler();
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={inputNameChangeHandler}
            onBlur={inputNameBlurHandler}
            value={enteredName}
          />
          {enteredNameHasError && (
            <p className="error-text">Name must not be empty!</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={inputLastNameChangeHandler}
            onBlur={inputLastNameBlurHandler}
            value={enteredLastName}
          />
          {enteredLastNameHasError && (
            <p className="error-text">Last Name must not be empty!</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={inputEmailChangeHandler}
          onBlur={inputEmailBlurHandler}
          value={enteredEmail}
        />
        {enteredEmailHasError && (
          <p className="error-text">Email must have '@'!</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
