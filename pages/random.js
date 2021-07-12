/* eslint-disable no-unused-vars, jsx-a11y/anchor-is-valid, jsx-a11y/anchor-has-content */
import React, { useEffect } from "react";

/**
 * redirect archived page
 *
 * @returns {*} JSX
 */
const Redirect = () => {
  useEffect(() => {
    window.location = window.location.href.replace("/random", "");
    // console.log(window.location);
  }, []);

  return "redirecting";
};

export default Redirect;
