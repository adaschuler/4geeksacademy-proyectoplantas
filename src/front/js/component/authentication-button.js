import React from "react";

import LoginButton from "./login-button";
import LogoutButton from "./logout-button";

import { useAuth0 } from "@auth0/auth0-react";
import PropTypes from "prop-types";
import { propTypes } from "react-bootstrap/esm/Image";

const AuthenticationButton = () => {
	const { isAuthenticated } = useAuth0();

	return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

export default AuthenticationButton;
