import React from 'react'
import './teamselection.css'
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Headline, SliderTeam, Container, Plan, Recordings, Button} from "../../components";
import { Formik, Form, Field, FieldArray } from 'formik';


function Teamselection() {
  const cart = useContext(CartContext);
  const [membnumber, setMembnumber] = useState(cart.cart.teammembers);

  const plan = (priceId, planName, members) => {
    console.log(`This is ${planName}`)
    cart.setCart({
      teammembers: members,
      plan: priceId,
      gifts: 0
    })
    console.log(cart.cart);
    //cart.createOrder(priceId);
  }

  let sviclanovi = [];
  for (let index = 0; index < membnumber; index++) {
    sviclanovi[index] = "";
  }
  return (
    <Container>
      <div>package:{cart.cart.plan} members:{cart.cart.teammembers}</div>

      <Headline title="Let's Add Your Team Members" pretitle="Team Assignment & Checkout" sendStyle={{ maxWidth: "450px", margin: "0 auto" }} />

      <div className="membersNumber">
        {(membnumber > 1) ?
          <> <TeamIcon /> <span style={{ fontSize: "32px", position: "relative", bottom: "-3px" }}>
            {membnumber}
          </span>  <span style={{ fontSize: "22px", position: "relative", bottom: "0px", fontWeight: "700" }}>
              Members
            </span>  </> : <> <IndividualIcon /> <span style={{ fontSize: "22px", position: "relative", bottom: "0px", fontWeight: "700" }}>
              <span style={{ fontSize: "32px", position: "relative", bottom: "-3px" }}>
                {membnumber}
              </span> Member
            </span> </>}
      </div>


     <div className="formfields">
     <Formik
        initialValues={{ listmembers: sviclanovi }}
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
                  {values.listmembers && values.listmembers.length  > 0 ? (
                    values.listmembers.map((friend, index) => (
                      <div key={index} className="formGroup">
                         <IndividualIcon />
                        <div className="fullname">
                        <label htmlFor="name">Full Name</label>
                        <Field name={`listmembers.${index}`} />
                        </div>

                        <div className="emailaddress">
                          <label htmlFor="email">Email Address</label>
                          <Field type="email" name={`emails.${index}`} required/>
                        </div>



                        <button
                          type="button" className='removeSeatButton'
                          onClick={() => {
                            setMembnumber(membnumber - 1);
                            return arrayHelpers.remove(index);
                          }} // remove a seat from the list
                        >remove
                        </button>
                      </div>
                    ))
                  ) : ""}

                  <div className='formGroup'>

           <button type="button" className='addTeammate' onClick={() => {
                    arrayHelpers.push(''
                    );
                    setMembnumber(membnumber + 1)
                  }
                  }>
                    Add a teammate
                  </button>
                  </div>


                  <div className='formGroup'>
                    <button type="submit">Submit</button>
                  </div>
                </div>
              )}
            />
          </Form>
        )}
      />
     </div>

    </Container>
  )
}

export default Teamselection



function TeamIcon() {
  return (
    <div style={{ display: "inline-block", position: "relative", bottom: "-5px", paddingRight: "5px" }}><svg width="22" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 8C15.0609 8 16.0783 7.57857 16.8284 6.82843C17.5786 6.07828 18 5.06087 18 4C18 2.93913 17.5786 1.92172 16.8284 1.17157C16.0783 0.421427 15.0609 0 14 0C12.9391 0 11.9217 0.421427 11.1716 1.17157C10.4214 1.92172 10 2.93913 10 4C10 5.06087 10.4214 6.07828 11.1716 6.82843C11.9217 7.57857 12.9391 8 14 8ZM8 4.5C8 4.95963 7.90947 5.41475 7.73358 5.83939C7.55769 6.26403 7.29988 6.64987 6.97487 6.97487C6.64987 7.29988 6.26403 7.55769 5.83939 7.73358C5.41475 7.90947 4.95963 8 4.5 8C4.04037 8 3.58525 7.90947 3.16061 7.73358C2.73597 7.55769 2.35013 7.29988 2.02513 6.97487C1.70012 6.64987 1.44231 6.26403 1.26642 5.83939C1.09053 5.41475 1 4.95963 1 4.5C1 3.57174 1.36875 2.6815 2.02513 2.02513C2.6815 1.36875 3.57174 1 4.5 1C5.42826 1 6.3185 1.36875 6.97487 2.02513C7.63125 2.6815 8 3.57174 8 4.5ZM27 4.5C27 4.95963 26.9095 5.41475 26.7336 5.83939C26.5577 6.26403 26.2999 6.64987 25.9749 6.97487C25.6499 7.29988 25.264 7.55769 24.8394 7.73358C24.4148 7.90947 23.9596 8 23.5 8C23.0404 8 22.5852 7.90947 22.1606 7.73358C21.736 7.55769 21.3501 7.29988 21.0251 6.97487C20.7001 6.64987 20.4423 6.26403 20.2664 5.83939C20.0905 5.41475 20 4.95963 20 4.5C20 3.57174 20.3687 2.6815 21.0251 2.02513C21.6815 1.36875 22.5717 1 23.5 1C24.4283 1 25.3185 1.36875 25.9749 2.02513C26.6313 2.6815 27 3.57174 27 4.5ZM7.377 10C6.80796 10.7088 6.4985 11.591 6.5 12.5V20C6.5 21.235 6.798 22.4 7.327 23.427C6.56487 23.8277 5.71216 24.0249 4.85148 23.9993C3.99079 23.9737 3.15129 23.7263 2.41431 23.281C1.67732 22.8357 1.06782 22.2076 0.644838 21.4576C0.22186 20.7076 -0.000257712 19.8611 2.24393e-07 19V12.5C2.24393e-07 11.837 0.263392 11.2011 0.732233 10.7322C1.20107 10.2634 1.83696 10 2.5 10H7.377ZM20.673 23.427C21.2182 22.367 21.5018 21.192 21.5 20V12.5C21.5 11.554 21.172 10.685 20.623 10H25.5C26.163 10 26.7989 10.2634 27.2678 10.7322C27.7366 11.2011 28 11.837 28 12.5V19C28.0003 19.8611 27.7781 20.7076 27.3552 21.4576C26.9322 22.2076 26.3227 22.8357 25.5857 23.281C24.8487 23.7263 24.0092 23.9737 23.1485 23.9993C22.2878 24.0249 21.4351 23.8277 20.673 23.427ZM10.5 10C9.83696 10 9.20107 10.2634 8.73223 10.7322C8.26339 11.2011 8 11.837 8 12.5V20C8 21.5913 8.63214 23.1174 9.75736 24.2426C10.8826 25.3679 12.4087 26 14 26C15.5913 26 17.1174 25.3679 18.2426 24.2426C19.3679 23.1174 20 21.5913 20 20V12.5C20 11.837 19.7366 11.2011 19.2678 10.7322C18.7989 10.2634 18.163 10 17.5 10H10.5Z" fill="#2C2C2C" />
    </svg>
    </div>
  )
}

function IndividualIcon() {
  return (
    <div style={{ display: "inline-block", position: "relative", bottom: "-5px", paddingRight: "5px" }}>
      <svg width="15" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.5 0C8.24022 0 7.03204 0.484642 6.14124 1.34731C5.25044 2.20998 4.75 3.38 4.75 4.6C4.75 5.82 5.25044 6.99002 6.14124 7.85269C7.03204 8.71536 8.24022 9.2 9.5 9.2C10.7598 9.2 11.968 8.71536 12.8588 7.85269C13.7496 6.99002 14.25 5.82 14.25 4.6C14.25 3.38 13.7496 2.20998 12.8588 1.34731C11.968 0.484642 10.7598 0 9.5 0ZM15.4375 11.5H3.5625C2.61767 11.5 1.71153 11.8635 1.04343 12.5105C0.375334 13.1575 0 14.035 0 14.95C0 17.5168 1.09012 19.573 2.8785 20.9645C4.63837 22.333 6.99913 23 9.5 23C12.0009 23 14.3616 22.333 16.1215 20.9645C17.9075 19.573 19 17.5168 19 14.95C19 14.035 18.6247 13.1575 17.9566 12.5105C17.2885 11.8635 16.3823 11.5 15.4375 11.5Z" fill="#2C2C2C" />
      </svg>

    </div>
  )
}