import * as Yup from 'yup';
//validation schema used to validate all fields in the form
const validationSchema = Yup.object({
  Destination: Yup.string().not(['Select Destination'], 'Required*'),
  StartDate: Yup.date()
    .required('Required*')
    .min(new Date(), 'Please choose future date'),
  EndDate: Yup.date()
    .required('Required*')
    .when(
      'StartDate',
      (StartDate, schema) => StartDate && schema.min(StartDate)
    ), //validating end date never before start date
  GuestsNumber: Yup.number('needs to be a number')
    .required('Required*')
    .min(1, 'minimum number of guests is 1.')
    .max(15, 'maximum number of guests is 15'),
});
export default validationSchema;
