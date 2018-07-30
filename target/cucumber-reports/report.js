$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/Resources/Features/Login.feature");
formatter.feature({
  "line": 2,
  "name": "User is able to use the login functionality",
  "description": "",
  "id": "user-is-able-to-use-the-login-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 19331309424,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User is able to login successfully with valid credentials",
  "description": "",
  "id": "user-is-able-to-use-the-login-functionality;user-is-able-to-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@test"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "The user on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters username",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters password",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "The user should be able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.the_user_on_the_homepage()"
});
formatter.result({
  "duration": 1074803789,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_enters_username()"
});
formatter.result({
  "duration": 669433155,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_enters_password()"
});
formatter.result({
  "duration": 220924476,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 5842056756,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.the_user_should_be_able_to_login()"
});
formatter.result({
  "duration": 260137323,
  "status": "passed"
});
formatter.after({
  "duration": 1200619011,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "User is unable to login with invalid credentials",
  "description": "",
  "id": "user-is-able-to-use-the-login-functionality;user-is-unable-to-login-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "The user on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "User enters invalid username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User enters invalid password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "The user should be able to the error message \"\u003cerror_message\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "user-is-able-to-use-the-login-functionality;user-is-unable-to-login-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "error_message"
      ],
      "line": 20,
      "id": "user-is-able-to-use-the-login-functionality;user-is-unable-to-login-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "Admin",
        "123",
        "Invalid credentials"
      ],
      "line": 21,
      "id": "user-is-able-to-use-the-login-functionality;user-is-unable-to-login-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "Admin",
        "",
        "Password cannot be empty"
      ],
      "line": 22,
      "id": "user-is-able-to-use-the-login-functionality;user-is-unable-to-login-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "Abc",
        "",
        "Password cannot be empty"
      ],
      "line": 23,
      "id": "user-is-able-to-use-the-login-functionality;user-is-unable-to-login-with-invalid-credentials;;4"
    },
    {
      "cells": [
        "",
        "admin123",
        "Username cannot be empty"
      ],
      "line": 24,
      "id": "user-is-able-to-use-the-login-functionality;user-is-unable-to-login-with-invalid-credentials;;5"
    },
    {
      "cells": [
        "",
        "123",
        "Username cannot be empty"
      ],
      "line": 25,
      "id": "user-is-able-to-use-the-login-functionality;user-is-unable-to-login-with-invalid-credentials;;6"
    },
    {
      "cells": [
        "",
        "",
        "Username cannot be empty"
      ],
      "line": 26,
      "id": "user-is-able-to-use-the-login-functionality;user-is-unable-to-login-with-invalid-credentials;;7"
    },
    {
      "cells": [
        "Abc",
        "123",
        "Invalid credentials"
      ],
      "line": 27,
      "id": "user-is-able-to-use-the-login-functionality;user-is-unable-to-login-with-invalid-credentials;;8"
    },
    {
      "cells": [
        "Abc",
        "admin123",
        "Invalid credentials"
      ],
      "line": 28,
      "id": "user-is-able-to-use-the-login-functionality;user-is-unable-to-login-with-invalid-credentials;;9"
    }
  ],
  "keyword": "Examples"
});
