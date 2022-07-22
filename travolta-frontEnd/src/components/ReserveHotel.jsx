import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import validationSchema from '../helpers/validationSchema';
import { fetchDestination } from '../features/destination/destinationSlice';
const initialValues = {
  Destination: '',
  StartDate: '',
  EndDate: '',
  GuestsNumber: 1,
};
const ReserveHotel = () => {
  const [destinationsState, setDestinationsState] = useState({
    loading: true,
    detinations: [],
    error: '',
  });
  //dispatch is used to get hotels of specific destinations
  const dispatch = useDispatch();
  // to fetch all destinations registered in the backend
  useEffect(() => {
    axios
      .get('http://localhost:5000/detinations')
      .then((res) => {
        setDestinationsState({
          ...destinationsState,
          loading: false,
          detinations: res.data,
        });
      })
      .catch((error) => {
        setDestinationsState({ ...destinationsState, error });
      });
  }, []);
  const onSubmit = (values, { resetForm }) => {
    dispatch(fetchDestination(values));
  };
  return (
    <>
      <div>
        {destinationsState?.error ? (
          <h1 className="header-title error">
            Something wrong happened please visit us later
          </h1>
        ) : (
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            <Form>
              <div className="form mt-5">
                <div className="mb-3 ">
                  <label htmlFor="Destination">Destination</label>
                  <Field
                    name="Destination"
                    component="select"
                    className="form-control"
                  >
                    <option name="Destination">Select Destination</option>
                    {destinationsState.loading ? (
                      <option name="Destination">Loading...</option>
                    ) : (
                      destinationsState.detinations.map((dest, index) => (
                        <option
                          name="Destination"
                          key={dest.id}
                          value={dest.id}
                        >
                          {dest.destination}
                        </option>
                      ))
                    )}
                  </Field>
                  <ErrorMessage name="Destination">
                    {(error) => <div className="error">{error}</div>}
                  </ErrorMessage>
                </div>
                <div className="mb-3">
                  <label htmlFor="StartDate">StartDate</label>
                  <Field
                    type="date"
                    id="StartDate"
                    name="StartDate"
                    className="form-control"
                  />
                  <ErrorMessage name="StartDate">
                    {(error) => <div className="error">{error}</div>}
                  </ErrorMessage>
                </div>
                <div className="mb-3">
                  <label htmlFor="EndDate">EndDate</label>
                  <Field
                    type="date"
                    id="EndDate"
                    name="EndDate"
                    className="form-control"
                  />
                  <ErrorMessage name="EndDate">
                    {(error) => <div className="error">{error}</div>}
                  </ErrorMessage>
                </div>
                <div className="mb-3">
                  <label htmlFor="GuestsNumber">GuestsNumber</label>
                  <Field
                    type="text"
                    id="GuestsNumber"
                    name="GuestsNumber"
                    className="form-control"
                  />
                  <ErrorMessage name="GuestsNumber">
                    {(error) => <div className="error">{error}</div>}
                  </ErrorMessage>
                </div>
                <div className="mt-3">
                  <button type="submit" className="btn btn-primary search-btn">
                    search
                  </button>
                </div>
              </div>
            </Form>
          </Formik>
        )}
      </div>
    </>
  );
};

export default ReserveHotel;
