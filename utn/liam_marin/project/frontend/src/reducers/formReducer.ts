interface FormAction {
  field: string;
  value: string;
}

interface FormField {
  value: string;
  error: boolean;
  touched: boolean;
}

type RegisterFormState = Record<string, FormField>;

function formReducer(validators: Record<string, (value: string) => boolean>) {
  return function formReducer(
    state: RegisterFormState,
    action: FormAction
  ): RegisterFormState {
    return {
      ...state,
      [action.field]: {
        value: action.value,
        error: !validators[action.field](action.value),
        touched: true,
      },
    };
  };
}

export default formReducer;
