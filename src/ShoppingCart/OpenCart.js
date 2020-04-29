import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import { Grid, Box } from "@material-ui/core";
import "./ShoppingCart.css";
import CartItem from "./CartItem/CartItem";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import $ from "jquery";
import { Redirect } from "react-router-dom";

//see how to use useStyle in material ui

const getStripePublicKey = async () => {
  let key = await axios.get("http://localhost:5000/stripePublicKey");
  console.log("key :>> ", key.data.stripePublicKey);
};

let quantityStyle = {
  bottom: "5px",
  right: "45%",
  color: "#0c0b10",
  position: "absolute",
  backgroundColor: "#eabf00",
  borderRadius: "50%",
  textAlign: "center",
  fontWeight: "700",
  fontSize: ".8em",
  lineHeight: "18px",
  width: "18px",
  height: "18px",
  top: "64px"
};

const getDrawerContent = (
  productCount,
  products,
  setState,
  setSuccess,
  setFailure
) => {
  async function onToken(token) {
    try {
      console.log("token :>> ", token);
      let response = await axios.post("http://localhost:5000/purchase", {
        stripeTokenId: token.id,
        total:
          Object.values(products)
            .reduce((a, c) => a + c.price * c.count, 0)
            .toFixed(2) * 100
      });

      console.log("response :>> ", response);
      setSuccess(true);
    } catch (err) {
      setFailure(true);
      console.log(err);
    }
  }

  function onOpened() {}
  function onClosed() {}

  function handlePayment(e) {
    e.preventDefault();
    console.log(e.target.value);
    $(".StripeCheckout")[0].click();
  }

  return (
    <Grid container>
      <div style={{ display: "none" }}>
        <StripeCheckout
          name="Three Comma Co." // the pop-in header title
          description="Big Data Stuff" // the pop-in header subtitle
          image="https://stripe.com/img/documentation/checkout/marketplace.png" // the pop-in header image (default none)
          ComponentClass="div"
          label="Buy the Thing" // text inside the Stripe button
          panelLabel="Give Money" // prepended to the amount in the bottom pay button
          amount={
            Object.values(products)
              .reduce((a, c) => a + c.price * c.count, 0)
              .toFixed(2) * 100
          } // cents
          currency="INR"
          stripeKey="pk_test_jM9rO2SuMT9aqJWc10pG8Ein00LjgswRTY"
          locale="in"
          email="info@vidhub.co"
          // // Note: Enabling either address option will give the user the ability to
          // // fill out both. Addresses are sent as a second parameter in the token callback.
          // shippingAddress
          // billingAddress={false}
          // // Note: enabling both zipCode checks and billing or shipping address will
          // // cause zipCheck to be pulled from billing address (set to shipping if none provided).
          zipCode={false}
          // alipay // accept Alipay (default false)
          // bitcoin // accept Bitcoins (default false)
          // allowRememberMe // "Remember Me" option (default true)
          token={onToken} // submit callback
          opened={onOpened} // called when the checkout popin is opened (no IE6/7)
          closed={onClosed} // called when the checkout popin is closed (no IE6/7)
          // Note: `reconfigureOnUpdate` should be set to true IFF, for some reason
          // you are using multiple stripe keys
          reconfigureOnUpdate={false}
          // Note: you can change the event to `onTouchTap`, `onClick`, `onTouchStart`
          // useful if you're using React-Tap-Event-Plugin
          triggerEvent="onClick"
        />
      </div>
      <Grid item xs={12} className="shopping-cart">
        <Grid
          container
          id="cart"
          style={{ overflowY: "scroll", height: window.outerHeight }}
        >
          <Grid item className="close-button" onClick={() => setState(false)}>
            X
          </Grid>
          <Grid
            item
            xs={12}
            style={{ textAlign: "center", position: "relative" }}
          >
            <Box pt={5} mb={3}>
              <img
                src={require("../static/bag-icon.png")}
                width="40"
                height="40"
                alt=""
              />
              <Grid style={quantityStyle}>{productCount}</Grid>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              height: `${Math.max(
                window.outerHeight,
                (products.length + 2) * 132
              )}px`
            }}
          >
            {products.length ? (
              products.map(product => (
                <Grid key={product.id} container>
                  <Grid item xs={12}>
                    <CartItem product={product} />
                  </Grid>
                </Grid>
              ))
            ) : (
              <div className="empty-cart">
                Add some product in the cart <br /> :)
              </div>
            )}
          </Grid>
          <Grid
            style={{
              color: "white",
              position: "absolute",
              bottom: "0px",
              height: "200px",
              backgroundColor: "#1b1a20",
              width: "100%",
              zIndex: 2
            }}
            item
            xs={12}
          >
            <Box p={4}>
              <Grid container>
                <Grid
                  item
                  xs={6}
                  style={{ color: "#5b5a5e", lineHeight: "1.5" }}
                >
                  SUBTOTAL
                </Grid>
                <Grid
                  item
                  xs={6}
                  style={{
                    textAlign: "right",
                    fontSize: "22px",
                    color: "#eabf00"
                  }}
                >
                  ${" "}
                  {Object.values(products)
                    .reduce((a, c) => a + c.price * c.count, 0)
                    .toFixed(2)}
                </Grid>
                <Grid item xs={12}>
                  <button
                    className="checkout-button"
                    onClick={e => handlePayment(e)}
                    style={{ textAlign: "center" }}
                  >
                    checkout
                  </button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const OpenCart = ({ state, setState, productCount, products }) => {
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  if (success) {
    return <Redirect to="/success" />;
  }

  if (failure) {
    return <Redirect to="/failure" />;
  }
  return (
    <Drawer
      anchor="right"
      variant={"persistent"}
      open={state}
      onClose={() => setState(false)}
      PaperProps={{
        style: {
          overflow: "visible",
          backgroundColor: "#1b1a20"
        }
      }}
    >
      {getDrawerContent(
        productCount,
        Object.values(products).sort((a, b) =>
          a.insertionId > b.insertionId ? 1 : -1
        ),
        setState,
        setSuccess,
        setFailure
      )}
    </Drawer>
  );
};

export default OpenCart;
