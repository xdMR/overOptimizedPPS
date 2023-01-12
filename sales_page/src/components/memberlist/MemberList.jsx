import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';

// Here is an example of a form with an editable list.
// Next to each input are buttons for insert and remove.
// If the list is empty, there is a button to add an item.


export const MemberList = () => (
  <div>

    <h1>Member List</h1>
    <Formik
      initialValues={{ listmembers: ['one', 'two', 'three'] }}
      onSubmit={values =>
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
        }, 500)
      }
      render={({ values }) => (
        <Form>
          <FieldArray
            name="listmembers"
            render={arrayHelpers => (
              <div>
                {values.listmembers && values.listmembers.length > 0 ? (
                  values.listmembers.map((friend, index) => (
                    <div key={index} className="formGroup">
                      <Field name={`listmembers.${index}`} />
                      <Field type="email" name={`friends.${index}`} required/>

                      <button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)} // remove a seat from the list
                      >
                        Remove seat
                      </button>
                    </div>
                  ))
                ) : ""}

<button type="button" onClick={() => arrayHelpers.push('')}>
                    {/* show this when user has removed all friends from the list */}
                    Add a teammate
                  </button>
                <div>
                  <button type="submit">Submit</button>
                </div>
              </div>
            )}
          />
        </Form>
      )}
    />
  </div>
);

export default MemberList