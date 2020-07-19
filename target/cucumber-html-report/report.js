$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SauceDemo.feature");
formatter.feature({
  "line": 1,
  "name": "Sauce Demo Application Testing Feature",
  "description": "",
  "id": "sauce-demo-application-testing-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Swag Labs Login with Valid User",
  "description": "",
  "id": "sauce-demo-application-testing-feature;swag-labs-login-with-valid-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@validcredentials"
    },
    {
      "line": 3,
      "name": "@e2e"
    },
    {
      "line": 3,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and clicks on login button",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user is on home page and check for prodcuts",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "sauce-demo-application-testing-feature;swag-labs-login-with-valid-user;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 10,
      "id": "sauce-demo-application-testing-feature;swag-labs-login-with-valid-user;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 11,
      "id": "sauce-demo-application-testing-feature;swag-labs-login-with-valid-user;;2"
    },
    {
      "cells": [
        "problem_user",
        "secret_sauce"
      ],
      "line": 12,
      "id": "sauce-demo-application-testing-feature;swag-labs-login-with-valid-user;;3"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ],
      "line": 13,
      "id": "sauce-demo-application-testing-feature;swag-labs-login-with-valid-user;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 194500,
  "status": "passed"
});
formatter.before({
  "duration": 5692982600,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Swag Labs Login with Valid User",
  "description": "",
  "id": "sauce-demo-application-testing-feature;swag-labs-login-with-valid-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@validcredentials"
    },
    {
      "line": 3,
      "name": "@login"
    },
    {
      "line": 3,
      "name": "@e2e"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user enters \"standard_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user is on home page and check for prodcuts",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 13
    },
    {
      "val": "secret_sauce",
      "offset": 33
    }
  ],
  "location": "SauceDemoStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 621856000,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_home_page_and_check_for_products()"
});
formatter.result({
  "duration": 35033300,
  "status": "passed"
});
formatter.after({
  "duration": 879040700,
  "status": "passed"
});
formatter.after({
  "duration": 50200,
  "status": "passed"
});
formatter.before({
  "duration": 40000,
  "status": "passed"
});
formatter.before({
  "duration": 3532397300,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Swag Labs Login with Valid User",
  "description": "",
  "id": "sauce-demo-application-testing-feature;swag-labs-login-with-valid-user;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@validcredentials"
    },
    {
      "line": 3,
      "name": "@login"
    },
    {
      "line": 3,
      "name": "@e2e"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user enters \"problem_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user is on home page and check for prodcuts",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "problem_user",
      "offset": 13
    },
    {
      "val": "secret_sauce",
      "offset": 32
    }
  ],
  "location": "SauceDemoStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 260947900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_home_page_and_check_for_products()"
});
formatter.result({
  "duration": 6193200,
  "status": "passed"
});
formatter.after({
  "duration": 666147700,
  "status": "passed"
});
formatter.after({
  "duration": 48700,
  "status": "passed"
});
formatter.before({
  "duration": 86600,
  "status": "passed"
});
formatter.before({
  "duration": 3589746800,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Swag Labs Login with Valid User",
  "description": "",
  "id": "sauce-demo-application-testing-feature;swag-labs-login-with-valid-user;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@validcredentials"
    },
    {
      "line": 3,
      "name": "@login"
    },
    {
      "line": 3,
      "name": "@e2e"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user enters \"performance_glitch_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user is on home page and check for prodcuts",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "performance_glitch_user",
      "offset": 13
    },
    {
      "val": "secret_sauce",
      "offset": 43
    }
  ],
  "location": "SauceDemoStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 5366700100,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_home_page_and_check_for_products()"
});
formatter.result({
  "duration": 43522700,
  "status": "passed"
});
formatter.after({
  "duration": 852976100,
  "status": "passed"
});
formatter.after({
  "duration": 45600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "Swag Labs Login with Invalid User",
  "description": "",
  "id": "sauce-demo-application-testing-feature;swag-labs-login-with-invalid-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@negativecase"
    },
    {
      "line": 15,
      "name": "@invalidcredentials"
    },
    {
      "line": 15,
      "name": "@e2e"
    },
    {
      "line": 15,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and clicks on login button",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "verify error message \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "sauce-demo-application-testing-feature;swag-labs-login-with-invalid-user;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "message"
      ],
      "line": 22,
      "id": "sauce-demo-application-testing-feature;swag-labs-login-with-invalid-user;;1"
    },
    {
      "cells": [
        "standarduser",
        "secret_sauce",
        "Epic sadface: Username and password do not match any user in this service"
      ],
      "line": 23,
      "id": "sauce-demo-application-testing-feature;swag-labs-login-with-invalid-user;;2"
    },
    {
      "cells": [
        "standard_user",
        "secretsauce",
        "Epic sadface: Username and password do not match any user in this service"
      ],
      "line": 24,
      "id": "sauce-demo-application-testing-feature;swag-labs-login-with-invalid-user;;3"
    },
    {
      "cells": [
        "locked_out_user",
        "secret_sauce",
        "Epic sadface: Sorry, this user has been locked out."
      ],
      "line": 25,
      "id": "sauce-demo-application-testing-feature;swag-labs-login-with-invalid-user;;4"
    },
    {
      "cells": [
        "test_user",
        "secret_sauce",
        "Epic sadface: Username and password do not match any user in this service"
      ],
      "line": 26,
      "id": "sauce-demo-application-testing-feature;swag-labs-login-with-invalid-user;;5"
    },
    {
      "cells": [
        "",
        "secret_sauce",
        "Epic sadface: Username is required"
      ],
      "line": 27,
      "id": "sauce-demo-application-testing-feature;swag-labs-login-with-invalid-user;;6"
    },
    {
      "cells": [
        "standard_user",
        "",
        "Epic sadface: Password is required"
      ],
      "line": 28,
      "id": "sauce-demo-application-testing-feature;swag-labs-login-with-invalid-user;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 32500,
  "status": "passed"
});
formatter.before({
  "duration": 3585784000,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Swag Labs Login with Invalid User",
  "description": "",
  "id": "sauce-demo-application-testing-feature;swag-labs-login-with-invalid-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@invalidcredentials"
    },
    {
      "line": 15,
      "name": "@login"
    },
    {
      "line": 15,
      "name": "@e2e"
    },
    {
      "line": 15,
      "name": "@negativecase"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user enters \"standarduser\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "verify error message \"Epic sadface: Username and password do not match any user in this service\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "standarduser",
      "offset": 13
    },
    {
      "val": "secret_sauce",
      "offset": 32
    }
  ],
  "location": "SauceDemoStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 326601100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Username and password do not match any user in this service",
      "offset": 22
    }
  ],
  "location": "SauceDemoStepDefinition.verify_error_message(String)"
});
formatter.result({
  "duration": 25770500,
  "status": "passed"
});
formatter.after({
  "duration": 848693300,
  "status": "passed"
});
formatter.after({
  "duration": 136900,
  "status": "passed"
});
formatter.before({
  "duration": 31700,
  "status": "passed"
});
formatter.before({
  "duration": 3493971900,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Swag Labs Login with Invalid User",
  "description": "",
  "id": "sauce-demo-application-testing-feature;swag-labs-login-with-invalid-user;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@invalidcredentials"
    },
    {
      "line": 15,
      "name": "@login"
    },
    {
      "line": 15,
      "name": "@e2e"
    },
    {
      "line": 15,
      "name": "@negativecase"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user enters \"standard_user\" and \"secretsauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "verify error message \"Epic sadface: Username and password do not match any user in this service\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 13
    },
    {
      "val": "secretsauce",
      "offset": 33
    }
  ],
  "location": "SauceDemoStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 333092500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Username and password do not match any user in this service",
      "offset": 22
    }
  ],
  "location": "SauceDemoStepDefinition.verify_error_message(String)"
});
formatter.result({
  "duration": 23412400,
  "status": "passed"
});
formatter.after({
  "duration": 749123000,
  "status": "passed"
});
formatter.after({
  "duration": 110700,
  "status": "passed"
});
formatter.before({
  "duration": 69700,
  "status": "passed"
});
formatter.before({
  "duration": 3562621700,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Swag Labs Login with Invalid User",
  "description": "",
  "id": "sauce-demo-application-testing-feature;swag-labs-login-with-invalid-user;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@invalidcredentials"
    },
    {
      "line": 15,
      "name": "@login"
    },
    {
      "line": 15,
      "name": "@e2e"
    },
    {
      "line": 15,
      "name": "@negativecase"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user enters \"locked_out_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "verify error message \"Epic sadface: Sorry, this user has been locked out.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "locked_out_user",
      "offset": 13
    },
    {
      "val": "secret_sauce",
      "offset": 35
    }
  ],
  "location": "SauceDemoStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 321032100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Sorry, this user has been locked out.",
      "offset": 22
    }
  ],
  "location": "SauceDemoStepDefinition.verify_error_message(String)"
});
formatter.result({
  "duration": 24283700,
  "status": "passed"
});
formatter.after({
  "duration": 756403100,
  "status": "passed"
});
formatter.after({
  "duration": 42900,
  "status": "passed"
});
formatter.before({
  "duration": 46400,
  "status": "passed"
});
formatter.before({
  "duration": 3557499000,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Swag Labs Login with Invalid User",
  "description": "",
  "id": "sauce-demo-application-testing-feature;swag-labs-login-with-invalid-user;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@invalidcredentials"
    },
    {
      "line": 15,
      "name": "@login"
    },
    {
      "line": 15,
      "name": "@e2e"
    },
    {
      "line": 15,
      "name": "@negativecase"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user enters \"test_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "verify error message \"Epic sadface: Username and password do not match any user in this service\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "test_user",
      "offset": 13
    },
    {
      "val": "secret_sauce",
      "offset": 29
    }
  ],
  "location": "SauceDemoStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 323504300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Username and password do not match any user in this service",
      "offset": 22
    }
  ],
  "location": "SauceDemoStepDefinition.verify_error_message(String)"
});
formatter.result({
  "duration": 25503700,
  "status": "passed"
});
formatter.after({
  "duration": 841205500,
  "status": "passed"
});
formatter.after({
  "duration": 40000,
  "status": "passed"
});
formatter.before({
  "duration": 44000,
  "status": "passed"
});
formatter.before({
  "duration": 3487720300,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Swag Labs Login with Invalid User",
  "description": "",
  "id": "sauce-demo-application-testing-feature;swag-labs-login-with-invalid-user;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@invalidcredentials"
    },
    {
      "line": 15,
      "name": "@login"
    },
    {
      "line": 15,
      "name": "@e2e"
    },
    {
      "line": 15,
      "name": "@negativecase"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user enters \"\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "verify error message \"Epic sadface: Username is required\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 13
    },
    {
      "val": "secret_sauce",
      "offset": 20
    }
  ],
  "location": "SauceDemoStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 332879400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Username is required",
      "offset": 22
    }
  ],
  "location": "SauceDemoStepDefinition.verify_error_message(String)"
});
formatter.result({
  "duration": 24977100,
  "status": "passed"
});
formatter.after({
  "duration": 973824400,
  "status": "passed"
});
formatter.after({
  "duration": 40800,
  "status": "passed"
});
formatter.before({
  "duration": 45900,
  "status": "passed"
});
formatter.before({
  "duration": 3487733800,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Swag Labs Login with Invalid User",
  "description": "",
  "id": "sauce-demo-application-testing-feature;swag-labs-login-with-invalid-user;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@invalidcredentials"
    },
    {
      "line": 15,
      "name": "@login"
    },
    {
      "line": 15,
      "name": "@e2e"
    },
    {
      "line": 15,
      "name": "@negativecase"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user enters \"standard_user\" and \"\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "verify error message \"Epic sadface: Password is required\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 13
    },
    {
      "val": "",
      "offset": 33
    }
  ],
  "location": "SauceDemoStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 315333300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Password is required",
      "offset": 22
    }
  ],
  "location": "SauceDemoStepDefinition.verify_error_message(String)"
});
formatter.result({
  "duration": 25684400,
  "status": "passed"
});
formatter.after({
  "duration": 835118300,
  "status": "passed"
});
formatter.after({
  "duration": 43500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 32,
  "name": "Verify Products on Home Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;verify-products-on-home-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 31,
      "name": "@homepage"
    },
    {
      "line": 31,
      "name": "@2e2"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and clicks on login button",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "verify products on home page",
  "keyword": "Then "
});
formatter.examples({
  "line": 38,
  "name": "",
  "description": "",
  "id": "sauce-demo-application-testing-feature;verify-products-on-home-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 39,
      "id": "sauce-demo-application-testing-feature;verify-products-on-home-page;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 40,
      "id": "sauce-demo-application-testing-feature;verify-products-on-home-page;;2"
    },
    {
      "cells": [
        "problem_user",
        "secret_sauce"
      ],
      "line": 41,
      "id": "sauce-demo-application-testing-feature;verify-products-on-home-page;;3"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ],
      "line": 42,
      "id": "sauce-demo-application-testing-feature;verify-products-on-home-page;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 34100,
  "status": "passed"
});
formatter.before({
  "duration": 3527659700,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Verify Products on Home Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;verify-products-on-home-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 31,
      "name": "@2e2"
    },
    {
      "line": 31,
      "name": "@homepage"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "user enters \"standard_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "verify products on home page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 13
    },
    {
      "val": "secret_sauce",
      "offset": 33
    }
  ],
  "location": "SauceDemoStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 390783200,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 6537500,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_products_on_home_page()"
});
formatter.result({
  "duration": 335144600,
  "status": "passed"
});
formatter.after({
  "duration": 871393500,
  "status": "passed"
});
formatter.after({
  "duration": 46400,
  "status": "passed"
});
formatter.before({
  "duration": 43800,
  "status": "passed"
});
formatter.before({
  "duration": 3574644600,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Verify Products on Home Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;verify-products-on-home-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 31,
      "name": "@2e2"
    },
    {
      "line": 31,
      "name": "@homepage"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "user enters \"problem_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "verify products on home page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "problem_user",
      "offset": 13
    },
    {
      "val": "secret_sauce",
      "offset": 32
    }
  ],
  "location": "SauceDemoStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 253954200,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 10176300,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_products_on_home_page()"
});
formatter.result({
  "duration": 315790600,
  "status": "passed"
});
formatter.after({
  "duration": 951601700,
  "status": "passed"
});
formatter.after({
  "duration": 44900,
  "status": "passed"
});
formatter.before({
  "duration": 44700,
  "status": "passed"
});
formatter.before({
  "duration": 3521648100,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Verify Products on Home Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;verify-products-on-home-page;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 31,
      "name": "@2e2"
    },
    {
      "line": 31,
      "name": "@homepage"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "user enters \"performance_glitch_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "verify products on home page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "performance_glitch_user",
      "offset": 13
    },
    {
      "val": "secret_sauce",
      "offset": 43
    }
  ],
  "location": "SauceDemoStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 5408474300,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 19265500,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_products_on_home_page()"
});
formatter.result({
  "duration": 313910500,
  "status": "passed"
});
formatter.after({
  "duration": 744848700,
  "status": "passed"
});
formatter.after({
  "duration": 44500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 45,
  "name": "Sort Products on Home Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;sort-products-on-home-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 44,
      "name": "@homepage"
    },
    {
      "line": 44,
      "name": "@e2e"
    },
    {
      "line": 44,
      "name": "@sort"
    }
  ]
});
formatter.step({
  "line": 47,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and clicks on login button",
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "verify user can sort products",
  "rows": [
    {
      "cells": [
        "value",
        "message",
        "firstproduct"
      ],
      "line": 50
    },
    {
      "cells": [
        "za",
        "1st product displayed after sort of Z to A:",
        "Test.allTheThings() T-Shirt (Red)"
      ],
      "line": 51
    },
    {
      "cells": [
        "lohi",
        "1st product displayed after sort of Low to High:",
        "Sauce Labs Onesie"
      ],
      "line": 52
    },
    {
      "cells": [
        "hilo",
        "1st product displayed after sort of High to Low:",
        "Sauce Labs Fleece Jacket"
      ],
      "line": 53
    },
    {
      "cells": [
        "az",
        "1st product displayed after sort of A to Z:",
        "Sauce Labs Backpack"
      ],
      "line": 54
    }
  ],
  "keyword": "Then "
});
formatter.examples({
  "line": 56,
  "name": "",
  "description": "",
  "id": "sauce-demo-application-testing-feature;sort-products-on-home-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 57,
      "id": "sauce-demo-application-testing-feature;sort-products-on-home-page;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 58,
      "id": "sauce-demo-application-testing-feature;sort-products-on-home-page;;2"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ],
      "line": 59,
      "id": "sauce-demo-application-testing-feature;sort-products-on-home-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 30900,
  "status": "passed"
});
formatter.before({
  "duration": 3546883800,
  "status": "passed"
});
formatter.scenario({
  "line": 58,
  "name": "Sort Products on Home Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;sort-products-on-home-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 44,
      "name": "@homepage"
    },
    {
      "line": 44,
      "name": "@sort"
    },
    {
      "line": 44,
      "name": "@e2e"
    }
  ]
});
formatter.step({
  "line": 47,
  "name": "user enters \"standard_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "verify user can sort products",
  "rows": [
    {
      "cells": [
        "value",
        "message",
        "firstproduct"
      ],
      "line": 50
    },
    {
      "cells": [
        "za",
        "1st product displayed after sort of Z to A:",
        "Test.allTheThings() T-Shirt (Red)"
      ],
      "line": 51
    },
    {
      "cells": [
        "lohi",
        "1st product displayed after sort of Low to High:",
        "Sauce Labs Onesie"
      ],
      "line": 52
    },
    {
      "cells": [
        "hilo",
        "1st product displayed after sort of High to Low:",
        "Sauce Labs Fleece Jacket"
      ],
      "line": 53
    },
    {
      "cells": [
        "az",
        "1st product displayed after sort of A to Z:",
        "Sauce Labs Backpack"
      ],
      "line": 54
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 13
    },
    {
      "val": "secret_sauce",
      "offset": 33
    }
  ],
  "location": "SauceDemoStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 378333100,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 39952400,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_can_sort_products(DataTable)"
});
formatter.result({
  "duration": 1042885900,
  "status": "passed"
});
formatter.after({
  "duration": 859828000,
  "status": "passed"
});
formatter.after({
  "duration": 45700,
  "status": "passed"
});
formatter.before({
  "duration": 46300,
  "status": "passed"
});
formatter.before({
  "duration": 3517313900,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "Sort Products on Home Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;sort-products-on-home-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 44,
      "name": "@homepage"
    },
    {
      "line": 44,
      "name": "@sort"
    },
    {
      "line": 44,
      "name": "@e2e"
    }
  ]
});
formatter.step({
  "line": 47,
  "name": "user enters \"performance_glitch_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "verify user can sort products",
  "rows": [
    {
      "cells": [
        "value",
        "message",
        "firstproduct"
      ],
      "line": 50
    },
    {
      "cells": [
        "za",
        "1st product displayed after sort of Z to A:",
        "Test.allTheThings() T-Shirt (Red)"
      ],
      "line": 51
    },
    {
      "cells": [
        "lohi",
        "1st product displayed after sort of Low to High:",
        "Sauce Labs Onesie"
      ],
      "line": 52
    },
    {
      "cells": [
        "hilo",
        "1st product displayed after sort of High to Low:",
        "Sauce Labs Fleece Jacket"
      ],
      "line": 53
    },
    {
      "cells": [
        "az",
        "1st product displayed after sort of A to Z:",
        "Sauce Labs Backpack"
      ],
      "line": 54
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "performance_glitch_user",
      "offset": 13
    },
    {
      "val": "secret_sauce",
      "offset": 43
    }
  ],
  "location": "SauceDemoStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 5401917500,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 58165600,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_can_sort_products(DataTable)"
});
formatter.result({
  "duration": 1048295800,
  "status": "passed"
});
formatter.after({
  "duration": 849670600,
  "status": "passed"
});
formatter.after({
  "duration": 47200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 62,
  "name": "HamBurger options",
  "description": "",
  "id": "sauce-demo-application-testing-feature;hamburger-options",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 61,
      "name": "@e2e"
    },
    {
      "line": 61,
      "name": "@hamburger"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and clicks on login button",
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "verify hamburger options",
  "keyword": "Then "
});
formatter.examples({
  "line": 68,
  "name": "",
  "description": "",
  "id": "sauce-demo-application-testing-feature;hamburger-options;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 69,
      "id": "sauce-demo-application-testing-feature;hamburger-options;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 70,
      "id": "sauce-demo-application-testing-feature;hamburger-options;;2"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ],
      "line": 71,
      "id": "sauce-demo-application-testing-feature;hamburger-options;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 39800,
  "status": "passed"
});
formatter.before({
  "duration": 3512149200,
  "status": "passed"
});
formatter.scenario({
  "line": 70,
  "name": "HamBurger options",
  "description": "",
  "id": "sauce-demo-application-testing-feature;hamburger-options;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 61,
      "name": "@e2e"
    },
    {
      "line": 61,
      "name": "@hamburger"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "user enters \"standard_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "verify hamburger options",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 13
    },
    {
      "val": "secret_sauce",
      "offset": 33
    }
  ],
  "location": "SauceDemoStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 389864600,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 16679600,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_hamburger_options()"
});
formatter.result({
  "duration": 4477025700,
  "status": "passed"
});
formatter.after({
  "duration": 982943400,
  "status": "passed"
});
formatter.after({
  "duration": 44900,
  "status": "passed"
});
formatter.before({
  "duration": 555200,
  "status": "passed"
});
formatter.before({
  "duration": 3495231000,
  "status": "passed"
});
formatter.scenario({
  "line": 71,
  "name": "HamBurger options",
  "description": "",
  "id": "sauce-demo-application-testing-feature;hamburger-options;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 61,
      "name": "@e2e"
    },
    {
      "line": 61,
      "name": "@hamburger"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "user enters \"performance_glitch_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "verify hamburger options",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "performance_glitch_user",
      "offset": 13
    },
    {
      "val": "secret_sauce",
      "offset": 43
    }
  ],
  "location": "SauceDemoStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 5392748200,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 21117500,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_hamburger_options()"
});
formatter.result({
  "duration": 14077049600,
  "status": "passed"
});
formatter.after({
  "duration": 1181969700,
  "status": "passed"
});
formatter.after({
  "duration": 365400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 74,
  "name": "Adding product from Home Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;adding-product-from-home-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 73,
      "name": "@e2e"
    },
    {
      "line": 73,
      "name": "@addproduct"
    }
  ]
});
formatter.step({
  "line": 76,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and clicks on login button",
  "keyword": "Given "
});
formatter.step({
  "line": 77,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 79
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 80
    },
    {
      "cells": [
        "Sauce Labs Bike Light"
      ],
      "line": 81
    },
    {
      "cells": [
        "Sauce Labs Bolt T-Shirt"
      ],
      "line": 82
    }
  ],
  "keyword": "Then "
});
formatter.examples({
  "line": 84,
  "name": "",
  "description": "",
  "id": "sauce-demo-application-testing-feature;adding-product-from-home-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 85,
      "id": "sauce-demo-application-testing-feature;adding-product-from-home-page;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 86,
      "id": "sauce-demo-application-testing-feature;adding-product-from-home-page;;2"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ],
      "line": 87,
      "id": "sauce-demo-application-testing-feature;adding-product-from-home-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 54500,
  "status": "passed"
});
formatter.before({
  "duration": 3502397000,
  "status": "passed"
});
formatter.scenario({
  "line": 86,
  "name": "Adding product from Home Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;adding-product-from-home-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 73,
      "name": "@addproduct"
    },
    {
      "line": 73,
      "name": "@e2e"
    }
  ]
});
formatter.step({
  "line": 76,
  "name": "user enters \"standard_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 77,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 79
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 80
    },
    {
      "cells": [
        "Sauce Labs Bike Light"
      ],
      "line": 81
    },
    {
      "cells": [
        "Sauce Labs Bolt T-Shirt"
      ],
      "line": 82
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 13
    },
    {
      "val": "secret_sauce",
      "offset": 33
    }
  ],
  "location": "SauceDemoStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 385433300,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 16537600,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 989147900,
  "status": "passed"
});
formatter.after({
  "duration": 788073500,
  "status": "passed"
});
formatter.after({
  "duration": 57500,
  "status": "passed"
});
formatter.before({
  "duration": 40000,
  "status": "passed"
});
formatter.before({
  "duration": 3521949700,
  "status": "passed"
});
formatter.scenario({
  "line": 87,
  "name": "Adding product from Home Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;adding-product-from-home-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 73,
      "name": "@addproduct"
    },
    {
      "line": 73,
      "name": "@e2e"
    }
  ]
});
formatter.step({
  "line": 76,
  "name": "user enters \"performance_glitch_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 77,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 79
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 80
    },
    {
      "cells": [
        "Sauce Labs Bike Light"
      ],
      "line": 81
    },
    {
      "cells": [
        "Sauce Labs Bolt T-Shirt"
      ],
      "line": 82
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "performance_glitch_user",
      "offset": 13
    },
    {
      "val": "secret_sauce",
      "offset": 43
    }
  ],
  "location": "SauceDemoStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 5424359600,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 14631200,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 1004579100,
  "status": "passed"
});
formatter.after({
  "duration": 655178600,
  "status": "passed"
});
formatter.after({
  "duration": 38600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 90,
  "name": "Adding product from Product Details Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;adding-product-from-product-details-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 89,
      "name": "@e2e"
    },
    {
      "line": 89,
      "name": "@addproduct"
    }
  ]
});
formatter.step({
  "line": 92,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and clicks on login button",
  "keyword": "Given "
});
formatter.step({
  "line": 93,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 94,
  "name": "verify user adds product from product details page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 95
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 96
    },
    {
      "cells": [
        "Sauce Labs Bike Light"
      ],
      "line": 97
    },
    {
      "cells": [
        "Sauce Labs Bolt T-Shirt"
      ],
      "line": 98
    },
    {
      "cells": [
        "Sauce Labs Fleece Jacket"
      ],
      "line": 99
    },
    {
      "cells": [
        "Sauce Labs Onesie"
      ],
      "line": 100
    },
    {
      "cells": [
        "Test.allTheThings() T-Shirt (Red)"
      ],
      "line": 101
    }
  ],
  "keyword": "Then "
});
formatter.examples({
  "line": 103,
  "name": "",
  "description": "",
  "id": "sauce-demo-application-testing-feature;adding-product-from-product-details-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 104,
      "id": "sauce-demo-application-testing-feature;adding-product-from-product-details-page;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 105,
      "id": "sauce-demo-application-testing-feature;adding-product-from-product-details-page;;2"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ],
      "line": 106,
      "id": "sauce-demo-application-testing-feature;adding-product-from-product-details-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 31400,
  "status": "passed"
});
formatter.before({
  "duration": 3518606800,
  "status": "passed"
});
formatter.scenario({
  "line": 105,
  "name": "Adding product from Product Details Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;adding-product-from-product-details-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 89,
      "name": "@addproduct"
    },
    {
      "line": 89,
      "name": "@e2e"
    }
  ]
});
formatter.step({
  "line": 92,
  "name": "user enters \"standard_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 93,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 94,
  "name": "verify user adds product from product details page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 95
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 96
    },
    {
      "cells": [
        "Sauce Labs Bike Light"
      ],
      "line": 97
    },
    {
      "cells": [
        "Sauce Labs Bolt T-Shirt"
      ],
      "line": 98
    },
    {
      "cells": [
        "Sauce Labs Fleece Jacket"
      ],
      "line": 99
    },
    {
      "cells": [
        "Sauce Labs Onesie"
      ],
      "line": 100
    },
    {
      "cells": [
        "Test.allTheThings() T-Shirt (Red)"
      ],
      "line": 101
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 13
    },
    {
      "val": "secret_sauce",
      "offset": 33
    }
  ],
  "location": "SauceDemoStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 389848000,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 12061800,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_product_details_page(DataTable)"
});
formatter.result({
  "duration": 3148347100,
  "status": "passed"
});
formatter.after({
  "duration": 753113600,
  "status": "passed"
});
formatter.after({
  "duration": 40700,
  "status": "passed"
});
formatter.before({
  "duration": 34100,
  "status": "passed"
});
formatter.before({
  "duration": 3497784400,
  "status": "passed"
});
formatter.scenario({
  "line": 106,
  "name": "Adding product from Product Details Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;adding-product-from-product-details-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 89,
      "name": "@addproduct"
    },
    {
      "line": 89,
      "name": "@e2e"
    }
  ]
});
formatter.step({
  "line": 92,
  "name": "user enters \"performance_glitch_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 93,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 94,
  "name": "verify user adds product from product details page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 95
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 96
    },
    {
      "cells": [
        "Sauce Labs Bike Light"
      ],
      "line": 97
    },
    {
      "cells": [
        "Sauce Labs Bolt T-Shirt"
      ],
      "line": 98
    },
    {
      "cells": [
        "Sauce Labs Fleece Jacket"
      ],
      "line": 99
    },
    {
      "cells": [
        "Sauce Labs Onesie"
      ],
      "line": 100
    },
    {
      "cells": [
        "Test.allTheThings() T-Shirt (Red)"
      ],
      "line": 101
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "performance_glitch_user",
      "offset": 13
    },
    {
      "val": "secret_sauce",
      "offset": 43
    }
  ],
  "location": "SauceDemoStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 5404047400,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 25481200,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_product_details_page(DataTable)"
});
formatter.result({
  "duration": 33439273600,
  "status": "passed"
});
formatter.after({
  "duration": 689363200,
  "status": "passed"
});
formatter.after({
  "duration": 36200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 109,
  "name": "Continue Shopping on Cart Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;continue-shopping-on-cart-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 108,
      "name": "@e2e"
    },
    {
      "line": 108,
      "name": "@cartpage"
    }
  ]
});
formatter.step({
  "line": 111,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and clicks on login button",
  "keyword": "Given "
});
formatter.step({
  "line": 112,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 113,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 114
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 115
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 116,
  "name": "user continue shopping from cart",
  "keyword": "Then "
});
formatter.examples({
  "line": 118,
  "name": "",
  "description": "",
  "id": "sauce-demo-application-testing-feature;continue-shopping-on-cart-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 119,
      "id": "sauce-demo-application-testing-feature;continue-shopping-on-cart-page;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 120,
      "id": "sauce-demo-application-testing-feature;continue-shopping-on-cart-page;;2"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ],
      "line": 121,
      "id": "sauce-demo-application-testing-feature;continue-shopping-on-cart-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 31200,
  "status": "passed"
});
formatter.before({
  "duration": 3545246000,
  "status": "passed"
});
formatter.scenario({
  "line": 120,
  "name": "Continue Shopping on Cart Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;continue-shopping-on-cart-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 108,
      "name": "@cartpage"
    },
    {
      "line": 108,
      "name": "@e2e"
    }
  ]
});
formatter.step({
  "line": 111,
  "name": "user enters \"standard_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 112,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 113,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 114
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 115
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 116,
  "name": "user continue shopping from cart",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 13
    },
    {
      "val": "secret_sauce",
      "offset": 33
    }
  ],
  "location": "SauceDemoStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 356626500,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 21710300,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 424496000,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_continue_shopping_from_cart()"
});
formatter.result({
  "duration": 314688100,
  "status": "passed"
});
formatter.after({
  "duration": 934150700,
  "status": "passed"
});
formatter.after({
  "duration": 37700,
  "status": "passed"
});
formatter.before({
  "duration": 34900,
  "status": "passed"
});
formatter.before({
  "duration": 3499257100,
  "status": "passed"
});
formatter.scenario({
  "line": 121,
  "name": "Continue Shopping on Cart Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;continue-shopping-on-cart-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 108,
      "name": "@cartpage"
    },
    {
      "line": 108,
      "name": "@e2e"
    }
  ]
});
formatter.step({
  "line": 111,
  "name": "user enters \"performance_glitch_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 112,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 113,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 114
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 115
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 116,
  "name": "user continue shopping from cart",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "performance_glitch_user",
      "offset": 13
    },
    {
      "val": "secret_sauce",
      "offset": 43
    }
  ],
  "location": "SauceDemoStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 5391262300,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 7518200,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 456688800,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_continue_shopping_from_cart()"
});
formatter.result({
  "duration": 5313033500,
  "status": "passed"
});
formatter.after({
  "duration": 861332400,
  "status": "passed"
});
formatter.after({
  "duration": 39000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 124,
  "name": "Remove product on Cart Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;remove-product-on-cart-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 123,
      "name": "@e2e"
    },
    {
      "line": 123,
      "name": "@cartpage"
    }
  ]
});
formatter.step({
  "line": 126,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and clicks on login button",
  "keyword": "Given "
});
formatter.step({
  "line": 127,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 128,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 129
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 130
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 131,
  "name": "user removes product from cart",
  "keyword": "Then "
});
formatter.examples({
  "line": 133,
  "name": "",
  "description": "",
  "id": "sauce-demo-application-testing-feature;remove-product-on-cart-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 134,
      "id": "sauce-demo-application-testing-feature;remove-product-on-cart-page;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 135,
      "id": "sauce-demo-application-testing-feature;remove-product-on-cart-page;;2"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ],
      "line": 136,
      "id": "sauce-demo-application-testing-feature;remove-product-on-cart-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 38000,
  "status": "passed"
});
formatter.before({
  "duration": 3440409000,
  "status": "passed"
});
formatter.scenario({
  "line": 135,
  "name": "Remove product on Cart Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;remove-product-on-cart-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 123,
      "name": "@cartpage"
    },
    {
      "line": 123,
      "name": "@e2e"
    }
  ]
});
formatter.step({
  "line": 126,
  "name": "user enters \"standard_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 127,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 128,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 129
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 130
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 131,
  "name": "user removes product from cart",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 13
    },
    {
      "val": "secret_sauce",
      "offset": 33
    }
  ],
  "location": "SauceDemoStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 494150400,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 10901300,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 423496700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_removes_product_from_cart()"
});
formatter.result({
  "duration": 524845800,
  "status": "passed"
});
formatter.after({
  "duration": 757681900,
  "status": "passed"
});
formatter.after({
  "duration": 38200,
  "status": "passed"
});
formatter.before({
  "duration": 35500,
  "status": "passed"
});
formatter.before({
  "duration": 3611340200,
  "status": "passed"
});
formatter.scenario({
  "line": 136,
  "name": "Remove product on Cart Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;remove-product-on-cart-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 123,
      "name": "@cartpage"
    },
    {
      "line": 123,
      "name": "@e2e"
    }
  ]
});
formatter.step({
  "line": 126,
  "name": "user enters \"performance_glitch_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 127,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 128,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 129
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 130
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 131,
  "name": "user removes product from cart",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "performance_glitch_user",
      "offset": 13
    },
    {
      "val": "secret_sauce",
      "offset": 43
    }
  ],
  "location": "SauceDemoStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 5397602500,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 18169700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 476610700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_removes_product_from_cart()"
});
formatter.result({
  "duration": 5608919500,
  "status": "passed"
});
formatter.after({
  "duration": 748628200,
  "status": "passed"
});
formatter.after({
  "duration": 123700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 139,
  "name": "checkout on Cart Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;checkout-on-cart-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 138,
      "name": "@e2e"
    },
    {
      "line": 138,
      "name": "@checkout"
    }
  ]
});
formatter.step({
  "line": 141,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and clicks on login button",
  "keyword": "Given "
});
formatter.step({
  "line": 142,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 143,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 144
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 145
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 146,
  "name": "user checkout product from cart",
  "keyword": "Then "
});
formatter.examples({
  "line": 148,
  "name": "",
  "description": "",
  "id": "sauce-demo-application-testing-feature;checkout-on-cart-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 149,
      "id": "sauce-demo-application-testing-feature;checkout-on-cart-page;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 150,
      "id": "sauce-demo-application-testing-feature;checkout-on-cart-page;;2"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ],
      "line": 151,
      "id": "sauce-demo-application-testing-feature;checkout-on-cart-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 39700,
  "status": "passed"
});
formatter.before({
  "duration": 3615663800,
  "status": "passed"
});
formatter.scenario({
  "line": 150,
  "name": "checkout on Cart Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;checkout-on-cart-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 138,
      "name": "@checkout"
    },
    {
      "line": 138,
      "name": "@e2e"
    }
  ]
});
formatter.step({
  "line": 141,
  "name": "user enters \"standard_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 142,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 143,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 144
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 145
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 146,
  "name": "user checkout product from cart",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 13
    },
    {
      "val": "secret_sauce",
      "offset": 33
    }
  ],
  "location": "SauceDemoStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 411595700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 16365900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 429379900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_checkout_product_from_cart()"
});
formatter.result({
  "duration": 225399000,
  "status": "passed"
});
formatter.after({
  "duration": 747723300,
  "status": "passed"
});
formatter.after({
  "duration": 37200,
  "status": "passed"
});
formatter.before({
  "duration": 35300,
  "status": "passed"
});
formatter.before({
  "duration": 3619856800,
  "status": "passed"
});
formatter.scenario({
  "line": 151,
  "name": "checkout on Cart Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;checkout-on-cart-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 138,
      "name": "@checkout"
    },
    {
      "line": 138,
      "name": "@e2e"
    }
  ]
});
formatter.step({
  "line": 141,
  "name": "user enters \"performance_glitch_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 142,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 143,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 144
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 145
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 146,
  "name": "user checkout product from cart",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "performance_glitch_user",
      "offset": 13
    },
    {
      "val": "secret_sauce",
      "offset": 43
    }
  ],
  "location": "SauceDemoStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 5421059300,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 13779500,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 428957300,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_checkout_product_from_cart()"
});
formatter.result({
  "duration": 256794600,
  "status": "passed"
});
formatter.after({
  "duration": 802386200,
  "status": "passed"
});
formatter.after({
  "duration": 40300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 154,
  "name": "Checkout without buyer data on Cart Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;checkout-without-buyer-data-on-cart-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 153,
      "name": "@negativecase"
    },
    {
      "line": 153,
      "name": "@e2e"
    },
    {
      "line": 153,
      "name": "@checkout"
    }
  ]
});
formatter.step({
  "line": 156,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and clicks on login button",
  "keyword": "Given "
});
formatter.step({
  "line": 157,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 158,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 159
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 160
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 161,
  "name": "user checkout product from cart",
  "keyword": "Then "
});
formatter.step({
  "line": 162,
  "name": "user tries to checkout product from cart without buyer data",
  "keyword": "Then "
});
formatter.examples({
  "line": 164,
  "name": "",
  "description": "",
  "id": "sauce-demo-application-testing-feature;checkout-without-buyer-data-on-cart-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 165,
      "id": "sauce-demo-application-testing-feature;checkout-without-buyer-data-on-cart-page;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 166,
      "id": "sauce-demo-application-testing-feature;checkout-without-buyer-data-on-cart-page;;2"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ],
      "line": 167,
      "id": "sauce-demo-application-testing-feature;checkout-without-buyer-data-on-cart-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 39500,
  "status": "passed"
});
formatter.before({
  "duration": 3505879600,
  "status": "passed"
});
formatter.scenario({
  "line": 166,
  "name": "Checkout without buyer data on Cart Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;checkout-without-buyer-data-on-cart-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 153,
      "name": "@checkout"
    },
    {
      "line": 153,
      "name": "@e2e"
    },
    {
      "line": 153,
      "name": "@negativecase"
    }
  ]
});
formatter.step({
  "line": 156,
  "name": "user enters \"standard_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 157,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 158,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 159
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 160
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 161,
  "name": "user checkout product from cart",
  "keyword": "Then "
});
formatter.step({
  "line": 162,
  "name": "user tries to checkout product from cart without buyer data",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 13
    },
    {
      "val": "secret_sauce",
      "offset": 33
    }
  ],
  "location": "SauceDemoStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 477160000,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 19428200,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 421424900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_checkout_product_from_cart()"
});
formatter.result({
  "duration": 227188200,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_tries_to_checkout_product_from_cart_without_buyer_data()"
});
formatter.result({
  "duration": 772140500,
  "status": "passed"
});
formatter.after({
  "duration": 639012800,
  "status": "passed"
});
formatter.after({
  "duration": 44800,
  "status": "passed"
});
formatter.before({
  "duration": 42400,
  "status": "passed"
});
formatter.before({
  "duration": 3479804600,
  "status": "passed"
});
formatter.scenario({
  "line": 167,
  "name": "Checkout without buyer data on Cart Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;checkout-without-buyer-data-on-cart-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 153,
      "name": "@checkout"
    },
    {
      "line": 153,
      "name": "@e2e"
    },
    {
      "line": 153,
      "name": "@negativecase"
    }
  ]
});
formatter.step({
  "line": 156,
  "name": "user enters \"performance_glitch_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 157,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 158,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 159
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 160
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 161,
  "name": "user checkout product from cart",
  "keyword": "Then "
});
formatter.step({
  "line": 162,
  "name": "user tries to checkout product from cart without buyer data",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "performance_glitch_user",
      "offset": 13
    },
    {
      "val": "secret_sauce",
      "offset": 43
    }
  ],
  "location": "SauceDemoStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 5388105600,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 35405800,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 436918800,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_checkout_product_from_cart()"
});
formatter.result({
  "duration": 221383000,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_tries_to_checkout_product_from_cart_without_buyer_data()"
});
formatter.result({
  "duration": 803914100,
  "status": "passed"
});
formatter.after({
  "duration": 764171300,
  "status": "passed"
});
formatter.after({
  "duration": 166900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 170,
  "name": "Cancel Checkout process on Your Information Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;cancel-checkout-process-on-your-information-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 169,
      "name": "@e2e"
    },
    {
      "line": 169,
      "name": "@checkout"
    }
  ]
});
formatter.step({
  "line": 172,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and clicks on login button",
  "keyword": "Given "
});
formatter.step({
  "line": 173,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 174,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 175
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 176
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 177,
  "name": "user checkout product from cart",
  "keyword": "Then "
});
formatter.step({
  "line": 178,
  "name": "user cancels checkout process",
  "keyword": "Then "
});
formatter.examples({
  "line": 180,
  "name": "",
  "description": "",
  "id": "sauce-demo-application-testing-feature;cancel-checkout-process-on-your-information-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 181,
      "id": "sauce-demo-application-testing-feature;cancel-checkout-process-on-your-information-page;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 182,
      "id": "sauce-demo-application-testing-feature;cancel-checkout-process-on-your-information-page;;2"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ],
      "line": 183,
      "id": "sauce-demo-application-testing-feature;cancel-checkout-process-on-your-information-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 45100,
  "status": "passed"
});
formatter.before({
  "duration": 3539108500,
  "status": "passed"
});
formatter.scenario({
  "line": 182,
  "name": "Cancel Checkout process on Your Information Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;cancel-checkout-process-on-your-information-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 169,
      "name": "@checkout"
    },
    {
      "line": 169,
      "name": "@e2e"
    }
  ]
});
formatter.step({
  "line": 172,
  "name": "user enters \"standard_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 173,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 174,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 175
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 176
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 177,
  "name": "user checkout product from cart",
  "keyword": "Then "
});
formatter.step({
  "line": 178,
  "name": "user cancels checkout process",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 13
    },
    {
      "val": "secret_sauce",
      "offset": 33
    }
  ],
  "location": "SauceDemoStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 381506400,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 42473400,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 446929900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_checkout_product_from_cart()"
});
formatter.result({
  "duration": 216411600,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_cancels_checkout_process()"
});
formatter.result({
  "duration": 105963800,
  "status": "passed"
});
formatter.after({
  "duration": 772869500,
  "status": "passed"
});
formatter.after({
  "duration": 122800,
  "status": "passed"
});
formatter.before({
  "duration": 66100,
  "status": "passed"
});
formatter.before({
  "duration": 3473723000,
  "status": "passed"
});
formatter.scenario({
  "line": 183,
  "name": "Cancel Checkout process on Your Information Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;cancel-checkout-process-on-your-information-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 169,
      "name": "@checkout"
    },
    {
      "line": 169,
      "name": "@e2e"
    }
  ]
});
formatter.step({
  "line": 172,
  "name": "user enters \"performance_glitch_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 173,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 174,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 175
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 176
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 177,
  "name": "user checkout product from cart",
  "keyword": "Then "
});
formatter.step({
  "line": 178,
  "name": "user cancels checkout process",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "performance_glitch_user",
      "offset": 13
    },
    {
      "val": "secret_sauce",
      "offset": 43
    }
  ],
  "location": "SauceDemoStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 5388340700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 18869700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 422011300,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_checkout_product_from_cart()"
});
formatter.result({
  "duration": 228207700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_cancels_checkout_process()"
});
formatter.result({
  "duration": 96778500,
  "status": "passed"
});
formatter.after({
  "duration": 752705200,
  "status": "passed"
});
formatter.after({
  "duration": 42600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 186,
  "name": "Checkout with buyer data on Cart Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;checkout-with-buyer-data-on-cart-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 185,
      "name": "@e2e"
    },
    {
      "line": 185,
      "name": "@checkout"
    }
  ]
});
formatter.step({
  "line": 188,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and clicks on login button",
  "keyword": "Given "
});
formatter.step({
  "line": 189,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 190,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 191
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 192
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 193,
  "name": "user checkout product from cart",
  "keyword": "Then "
});
formatter.step({
  "line": 194,
  "name": "user continue checkout with buyer data",
  "keyword": "Then "
});
formatter.examples({
  "line": 196,
  "name": "",
  "description": "",
  "id": "sauce-demo-application-testing-feature;checkout-with-buyer-data-on-cart-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 197,
      "id": "sauce-demo-application-testing-feature;checkout-with-buyer-data-on-cart-page;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 198,
      "id": "sauce-demo-application-testing-feature;checkout-with-buyer-data-on-cart-page;;2"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ],
      "line": 199,
      "id": "sauce-demo-application-testing-feature;checkout-with-buyer-data-on-cart-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 39800,
  "status": "passed"
});
formatter.before({
  "duration": 3481307200,
  "status": "passed"
});
formatter.scenario({
  "line": 198,
  "name": "Checkout with buyer data on Cart Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;checkout-with-buyer-data-on-cart-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 185,
      "name": "@checkout"
    },
    {
      "line": 185,
      "name": "@e2e"
    }
  ]
});
formatter.step({
  "line": 188,
  "name": "user enters \"standard_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 189,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 190,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 191
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 192
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 193,
  "name": "user checkout product from cart",
  "keyword": "Then "
});
formatter.step({
  "line": 194,
  "name": "user continue checkout with buyer data",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 13
    },
    {
      "val": "secret_sauce",
      "offset": 33
    }
  ],
  "location": "SauceDemoStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 377415200,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 14526200,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 426734000,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_checkout_product_from_cart()"
});
formatter.result({
  "duration": 237023800,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_continue_checkout_with_buyer_data()"
});
formatter.result({
  "duration": 218049500,
  "status": "passed"
});
formatter.after({
  "duration": 652619000,
  "status": "passed"
});
formatter.after({
  "duration": 45500,
  "status": "passed"
});
formatter.before({
  "duration": 43900,
  "status": "passed"
});
formatter.before({
  "duration": 3476031700,
  "status": "passed"
});
formatter.scenario({
  "line": 199,
  "name": "Checkout with buyer data on Cart Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;checkout-with-buyer-data-on-cart-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 185,
      "name": "@checkout"
    },
    {
      "line": 185,
      "name": "@e2e"
    }
  ]
});
formatter.step({
  "line": 188,
  "name": "user enters \"performance_glitch_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 189,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 190,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 191
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 192
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 193,
  "name": "user checkout product from cart",
  "keyword": "Then "
});
formatter.step({
  "line": 194,
  "name": "user continue checkout with buyer data",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "performance_glitch_user",
      "offset": 13
    },
    {
      "val": "secret_sauce",
      "offset": 43
    }
  ],
  "location": "SauceDemoStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 5473719500,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 138641200,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 508873200,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_checkout_product_from_cart()"
});
formatter.result({
  "duration": 258991900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_continue_checkout_with_buyer_data()"
});
formatter.result({
  "duration": 209035100,
  "status": "passed"
});
formatter.after({
  "duration": 759724900,
  "status": "passed"
});
formatter.after({
  "duration": 65400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 202,
  "name": "Cancel Checkout process on Overview Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;cancel-checkout-process-on-overview-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 201,
      "name": "@e2e"
    },
    {
      "line": 201,
      "name": "@checkout"
    }
  ]
});
formatter.step({
  "line": 204,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and clicks on login button",
  "keyword": "Given "
});
formatter.step({
  "line": 205,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 206,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 207
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 208
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 209,
  "name": "user checkout product from cart",
  "keyword": "Then "
});
formatter.step({
  "line": 210,
  "name": "user continue checkout with buyer data",
  "keyword": "Then "
});
formatter.step({
  "line": 211,
  "name": "user cancels checkout process",
  "keyword": "Then "
});
formatter.examples({
  "line": 213,
  "name": "",
  "description": "",
  "id": "sauce-demo-application-testing-feature;cancel-checkout-process-on-overview-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 214,
      "id": "sauce-demo-application-testing-feature;cancel-checkout-process-on-overview-page;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 215,
      "id": "sauce-demo-application-testing-feature;cancel-checkout-process-on-overview-page;;2"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ],
      "line": 216,
      "id": "sauce-demo-application-testing-feature;cancel-checkout-process-on-overview-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 33100,
  "status": "passed"
});
formatter.before({
  "duration": 3538515100,
  "status": "passed"
});
formatter.scenario({
  "line": 215,
  "name": "Cancel Checkout process on Overview Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;cancel-checkout-process-on-overview-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 201,
      "name": "@checkout"
    },
    {
      "line": 201,
      "name": "@e2e"
    }
  ]
});
formatter.step({
  "line": 204,
  "name": "user enters \"standard_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 205,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 206,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 207
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 208
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 209,
  "name": "user checkout product from cart",
  "keyword": "Then "
});
formatter.step({
  "line": 210,
  "name": "user continue checkout with buyer data",
  "keyword": "Then "
});
formatter.step({
  "line": 211,
  "name": "user cancels checkout process",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 13
    },
    {
      "val": "secret_sauce",
      "offset": 33
    }
  ],
  "location": "SauceDemoStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 421812200,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 9263800,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 451560500,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_checkout_product_from_cart()"
});
formatter.result({
  "duration": 239423300,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_continue_checkout_with_buyer_data()"
});
formatter.result({
  "duration": 194257400,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_cancels_checkout_process()"
});
formatter.result({
  "duration": 201733500,
  "status": "passed"
});
formatter.after({
  "duration": 774361500,
  "status": "passed"
});
formatter.after({
  "duration": 471100,
  "status": "passed"
});
formatter.before({
  "duration": 64100,
  "status": "passed"
});
formatter.before({
  "duration": 4274095200,
  "status": "passed"
});
formatter.scenario({
  "line": 216,
  "name": "Cancel Checkout process on Overview Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;cancel-checkout-process-on-overview-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 201,
      "name": "@checkout"
    },
    {
      "line": 201,
      "name": "@e2e"
    }
  ]
});
formatter.step({
  "line": 204,
  "name": "user enters \"performance_glitch_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 205,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 206,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 207
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 208
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 209,
  "name": "user checkout product from cart",
  "keyword": "Then "
});
formatter.step({
  "line": 210,
  "name": "user continue checkout with buyer data",
  "keyword": "Then "
});
formatter.step({
  "line": 211,
  "name": "user cancels checkout process",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "performance_glitch_user",
      "offset": 13
    },
    {
      "val": "secret_sauce",
      "offset": 43
    }
  ],
  "location": "SauceDemoStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 5403788600,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 21152500,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 446174200,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_checkout_product_from_cart()"
});
formatter.result({
  "duration": 213778600,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_continue_checkout_with_buyer_data()"
});
formatter.result({
  "duration": 199459900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_cancels_checkout_process()"
});
formatter.result({
  "duration": 5192303900,
  "status": "passed"
});
formatter.after({
  "duration": 683084000,
  "status": "passed"
});
formatter.after({
  "duration": 41600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 219,
  "name": "Finish Checkout process without product",
  "description": "",
  "id": "sauce-demo-application-testing-feature;finish-checkout-process-without-product",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 218,
      "name": "@e2e"
    },
    {
      "line": 218,
      "name": "@checkoutwoproduct"
    }
  ]
});
formatter.step({
  "line": 221,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and clicks on login button",
  "keyword": "Given "
});
formatter.step({
  "line": 222,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 223,
  "name": "verify user adds product from product details page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 224
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 225,
  "name": "user checkout product from cart",
  "keyword": "Then "
});
formatter.step({
  "line": 226,
  "name": "user continue checkout with buyer data",
  "keyword": "Then "
});
formatter.step({
  "line": 227,
  "name": "user finish checkout process",
  "keyword": "Then "
});
formatter.examples({
  "line": 229,
  "name": "",
  "description": "",
  "id": "sauce-demo-application-testing-feature;finish-checkout-process-without-product;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 230,
      "id": "sauce-demo-application-testing-feature;finish-checkout-process-without-product;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 231,
      "id": "sauce-demo-application-testing-feature;finish-checkout-process-without-product;;2"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ],
      "line": 232,
      "id": "sauce-demo-application-testing-feature;finish-checkout-process-without-product;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 34100,
  "status": "passed"
});
formatter.before({
  "duration": 3854593300,
  "status": "passed"
});
formatter.scenario({
  "line": 231,
  "name": "Finish Checkout process without product",
  "description": "",
  "id": "sauce-demo-application-testing-feature;finish-checkout-process-without-product;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 218,
      "name": "@e2e"
    },
    {
      "line": 218,
      "name": "@checkoutwoproduct"
    }
  ]
});
formatter.step({
  "line": 221,
  "name": "user enters \"standard_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 222,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 223,
  "name": "verify user adds product from product details page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 224
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 225,
  "name": "user checkout product from cart",
  "keyword": "Then "
});
formatter.step({
  "line": 226,
  "name": "user continue checkout with buyer data",
  "keyword": "Then "
});
formatter.step({
  "line": 227,
  "name": "user finish checkout process",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 13
    },
    {
      "val": "secret_sauce",
      "offset": 33
    }
  ],
  "location": "SauceDemoStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 471546800,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 8725900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_product_details_page(DataTable)"
});
formatter.result({
  "duration": 70200,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_checkout_product_from_cart()"
});
formatter.result({
  "duration": 267555600,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_continue_checkout_with_buyer_data()"
});
formatter.result({
  "duration": 206181500,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_finish_checkout_process()"
});
formatter.result({
  "duration": 126390000,
  "status": "passed"
});
formatter.after({
  "duration": 843819400,
  "status": "passed"
});
formatter.after({
  "duration": 115000,
  "status": "passed"
});
formatter.before({
  "duration": 39400,
  "status": "passed"
});
formatter.before({
  "duration": 3539123600,
  "status": "passed"
});
formatter.scenario({
  "line": 232,
  "name": "Finish Checkout process without product",
  "description": "",
  "id": "sauce-demo-application-testing-feature;finish-checkout-process-without-product;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 218,
      "name": "@e2e"
    },
    {
      "line": 218,
      "name": "@checkoutwoproduct"
    }
  ]
});
formatter.step({
  "line": 221,
  "name": "user enters \"performance_glitch_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 222,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 223,
  "name": "verify user adds product from product details page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 224
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 225,
  "name": "user checkout product from cart",
  "keyword": "Then "
});
formatter.step({
  "line": 226,
  "name": "user continue checkout with buyer data",
  "keyword": "Then "
});
formatter.step({
  "line": 227,
  "name": "user finish checkout process",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "performance_glitch_user",
      "offset": 13
    },
    {
      "val": "secret_sauce",
      "offset": 43
    }
  ],
  "location": "SauceDemoStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 5387853400,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 21917400,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_product_details_page(DataTable)"
});
formatter.result({
  "duration": 73000,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_checkout_product_from_cart()"
});
formatter.result({
  "duration": 260808100,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_continue_checkout_with_buyer_data()"
});
formatter.result({
  "duration": 224246100,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_finish_checkout_process()"
});
formatter.result({
  "duration": 129062500,
  "status": "passed"
});
formatter.after({
  "duration": 748157500,
  "status": "passed"
});
formatter.after({
  "duration": 116200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 235,
  "name": "Finish Checkout process on Overview Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;finish-checkout-process-on-overview-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 234,
      "name": "@e2e"
    },
    {
      "line": 234,
      "name": "@checkout"
    }
  ]
});
formatter.step({
  "line": 237,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and clicks on login button",
  "keyword": "Given "
});
formatter.step({
  "line": 238,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 239,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 240
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 241
    },
    {
      "cells": [
        "Sauce Labs Bike Light"
      ],
      "line": 242
    },
    {
      "cells": [
        "Sauce Labs Bolt T-Shirt"
      ],
      "line": 243
    },
    {
      "cells": [
        "Sauce Labs Fleece Jacket"
      ],
      "line": 244
    },
    {
      "cells": [
        "Sauce Labs Onesie"
      ],
      "line": 245
    },
    {
      "cells": [
        "Test.allTheThings() T-Shirt (Red)"
      ],
      "line": 246
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 247,
  "name": "user checkout product from cart",
  "keyword": "Then "
});
formatter.step({
  "line": 248,
  "name": "user continue checkout with buyer data",
  "keyword": "Then "
});
formatter.step({
  "line": 249,
  "name": "user finish checkout process",
  "keyword": "Then "
});
formatter.examples({
  "line": 251,
  "name": "",
  "description": "",
  "id": "sauce-demo-application-testing-feature;finish-checkout-process-on-overview-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 252,
      "id": "sauce-demo-application-testing-feature;finish-checkout-process-on-overview-page;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 253,
      "id": "sauce-demo-application-testing-feature;finish-checkout-process-on-overview-page;;2"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ],
      "line": 254,
      "id": "sauce-demo-application-testing-feature;finish-checkout-process-on-overview-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 45900,
  "status": "passed"
});
formatter.before({
  "duration": 3830566300,
  "status": "passed"
});
formatter.scenario({
  "line": 253,
  "name": "Finish Checkout process on Overview Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;finish-checkout-process-on-overview-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 234,
      "name": "@checkout"
    },
    {
      "line": 234,
      "name": "@e2e"
    }
  ]
});
formatter.step({
  "line": 237,
  "name": "user enters \"standard_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 238,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 239,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 240
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 241
    },
    {
      "cells": [
        "Sauce Labs Bike Light"
      ],
      "line": 242
    },
    {
      "cells": [
        "Sauce Labs Bolt T-Shirt"
      ],
      "line": 243
    },
    {
      "cells": [
        "Sauce Labs Fleece Jacket"
      ],
      "line": 244
    },
    {
      "cells": [
        "Sauce Labs Onesie"
      ],
      "line": 245
    },
    {
      "cells": [
        "Test.allTheThings() T-Shirt (Red)"
      ],
      "line": 246
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 247,
  "name": "user checkout product from cart",
  "keyword": "Then "
});
formatter.step({
  "line": 248,
  "name": "user continue checkout with buyer data",
  "keyword": "Then "
});
formatter.step({
  "line": 249,
  "name": "user finish checkout process",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 13
    },
    {
      "val": "secret_sauce",
      "offset": 33
    }
  ],
  "location": "SauceDemoStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 378639700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 8104800,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 1770330600,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_checkout_product_from_cart()"
});
formatter.result({
  "duration": 220251200,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_continue_checkout_with_buyer_data()"
});
formatter.result({
  "duration": 196807700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_finish_checkout_process()"
});
formatter.result({
  "duration": 132530800,
  "status": "passed"
});
formatter.after({
  "duration": 890438500,
  "status": "passed"
});
formatter.after({
  "duration": 40100,
  "status": "passed"
});
formatter.before({
  "duration": 41500,
  "status": "passed"
});
formatter.before({
  "duration": 4256858800,
  "status": "passed"
});
formatter.scenario({
  "line": 254,
  "name": "Finish Checkout process on Overview Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;finish-checkout-process-on-overview-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 234,
      "name": "@checkout"
    },
    {
      "line": 234,
      "name": "@e2e"
    }
  ]
});
formatter.step({
  "line": 237,
  "name": "user enters \"performance_glitch_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 238,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 239,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 240
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 241
    },
    {
      "cells": [
        "Sauce Labs Bike Light"
      ],
      "line": 242
    },
    {
      "cells": [
        "Sauce Labs Bolt T-Shirt"
      ],
      "line": 243
    },
    {
      "cells": [
        "Sauce Labs Fleece Jacket"
      ],
      "line": 244
    },
    {
      "cells": [
        "Sauce Labs Onesie"
      ],
      "line": 245
    },
    {
      "cells": [
        "Test.allTheThings() T-Shirt (Red)"
      ],
      "line": 246
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 247,
  "name": "user checkout product from cart",
  "keyword": "Then "
});
formatter.step({
  "line": 248,
  "name": "user continue checkout with buyer data",
  "keyword": "Then "
});
formatter.step({
  "line": 249,
  "name": "user finish checkout process",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "performance_glitch_user",
      "offset": 13
    },
    {
      "val": "secret_sauce",
      "offset": 43
    }
  ],
  "location": "SauceDemoStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 5476401500,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 36917100,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 1746218200,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_checkout_product_from_cart()"
});
formatter.result({
  "duration": 223598400,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_continue_checkout_with_buyer_data()"
});
formatter.result({
  "duration": 235864300,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_finish_checkout_process()"
});
formatter.result({
  "duration": 155149300,
  "status": "passed"
});
formatter.after({
  "duration": 774635100,
  "status": "passed"
});
formatter.after({
  "duration": 133500,
  "status": "passed"
});
});