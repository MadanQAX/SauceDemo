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
  "duration": 275000,
  "status": "passed"
});
formatter.before({
  "duration": 2955578500,
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
  "duration": 794612300,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_home_page_and_check_for_products()"
});
formatter.result({
  "duration": 58175600,
  "status": "passed"
});
formatter.after({
  "duration": 1107816400,
  "status": "passed"
});
formatter.after({
  "duration": 54000,
  "status": "passed"
});
formatter.before({
  "duration": 51600,
  "status": "passed"
});
formatter.before({
  "duration": 1967373200,
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
  "duration": 428878700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_home_page_and_check_for_products()"
});
formatter.result({
  "duration": 30341000,
  "status": "passed"
});
formatter.after({
  "duration": 597267400,
  "status": "passed"
});
formatter.after({
  "duration": 244100,
  "status": "passed"
});
formatter.before({
  "duration": 77300,
  "status": "passed"
});
formatter.before({
  "duration": 2020662900,
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
  "duration": 5528338800,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_home_page_and_check_for_products()"
});
formatter.result({
  "duration": 37969500,
  "status": "passed"
});
formatter.after({
  "duration": 602076100,
  "status": "passed"
});
formatter.after({
  "duration": 49000,
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
  "duration": 44100,
  "status": "passed"
});
formatter.before({
  "duration": 2095128400,
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
  "duration": 294870600,
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
  "duration": 36802900,
  "status": "passed"
});
formatter.after({
  "duration": 579787000,
  "status": "passed"
});
formatter.after({
  "duration": 47900,
  "status": "passed"
});
formatter.before({
  "duration": 36400,
  "status": "passed"
});
formatter.before({
  "duration": 1912843100,
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
  "duration": 355179100,
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
  "duration": 33416400,
  "status": "passed"
});
formatter.after({
  "duration": 574653600,
  "status": "passed"
});
formatter.after({
  "duration": 190900,
  "status": "passed"
});
formatter.before({
  "duration": 64000,
  "status": "passed"
});
formatter.before({
  "duration": 3848786000,
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
  "duration": 325968500,
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
  "duration": 33894600,
  "status": "passed"
});
formatter.after({
  "duration": 570422600,
  "status": "passed"
});
formatter.after({
  "duration": 43000,
  "status": "passed"
});
formatter.before({
  "duration": 39800,
  "status": "passed"
});
formatter.before({
  "duration": 1938142500,
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
  "duration": 301709000,
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
  "duration": 32871100,
  "status": "passed"
});
formatter.after({
  "duration": 573428800,
  "status": "passed"
});
formatter.after({
  "duration": 176500,
  "status": "passed"
});
formatter.before({
  "duration": 70500,
  "status": "passed"
});
formatter.before({
  "duration": 1964690500,
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
  "duration": 245722300,
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
  "duration": 30695800,
  "status": "passed"
});
formatter.after({
  "duration": 572752500,
  "status": "passed"
});
formatter.after({
  "duration": 45000,
  "status": "passed"
});
formatter.before({
  "duration": 39100,
  "status": "passed"
});
formatter.before({
  "duration": 2003840100,
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
  "duration": 344563100,
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
  "duration": 32699600,
  "status": "passed"
});
formatter.after({
  "duration": 584400700,
  "status": "passed"
});
formatter.after({
  "duration": 42700,
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
  "duration": 44000,
  "status": "passed"
});
formatter.before({
  "duration": 3895219600,
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
  "duration": 449910700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 30672000,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_products_on_home_page()"
});
formatter.result({
  "duration": 735734000,
  "status": "passed"
});
formatter.after({
  "duration": 593552400,
  "status": "passed"
});
formatter.after({
  "duration": 42600,
  "status": "passed"
});
formatter.before({
  "duration": 45200,
  "status": "passed"
});
formatter.before({
  "duration": 1977037300,
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
  "duration": 476331700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 21625000,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_products_on_home_page()"
});
formatter.result({
  "duration": 432753600,
  "status": "passed"
});
formatter.after({
  "duration": 565039200,
  "status": "passed"
});
formatter.after({
  "duration": 192500,
  "status": "passed"
});
formatter.before({
  "duration": 112400,
  "status": "passed"
});
formatter.before({
  "duration": 2032613900,
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
  "duration": 5558257000,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 22595700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_products_on_home_page()"
});
formatter.result({
  "duration": 549977400,
  "status": "passed"
});
formatter.after({
  "duration": 583465300,
  "status": "passed"
});
formatter.after({
  "duration": 101200,
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
  "duration": 42600,
  "status": "passed"
});
formatter.before({
  "duration": 3896195400,
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
  "duration": 714495900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 202205800,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_can_sort_products(DataTable)"
});
formatter.result({
  "duration": 507569800,
  "status": "passed"
});
formatter.after({
  "duration": 677091800,
  "status": "passed"
});
formatter.after({
  "duration": 42900,
  "status": "passed"
});
formatter.before({
  "duration": 103000,
  "status": "passed"
});
formatter.before({
  "duration": 2025178300,
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
  "duration": 5563402200,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 20060500,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_can_sort_products(DataTable)"
});
formatter.result({
  "duration": 573960000,
  "status": "passed"
});
formatter.after({
  "duration": 598188700,
  "status": "passed"
});
formatter.after({
  "duration": 42900,
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
  "duration": 48800,
  "status": "passed"
});
formatter.before({
  "duration": 2012079200,
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
  "duration": 565213800,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 32224900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_hamburger_options()"
});
formatter.result({
  "duration": 4071345900,
  "status": "passed"
});
formatter.after({
  "duration": 596348300,
  "status": "passed"
});
formatter.after({
  "duration": 43900,
  "status": "passed"
});
formatter.before({
  "duration": 2730800,
  "status": "passed"
});
formatter.before({
  "duration": 1995211500,
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
  "duration": 5525514200,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 25757500,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_hamburger_options()"
});
formatter.result({
  "duration": 13690701900,
  "status": "passed"
});
formatter.after({
  "duration": 602392100,
  "status": "passed"
});
formatter.after({
  "duration": 472100,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 73,
      "value": "#@e2e @addproductfromhome"
    },
    {
      "line": 74,
      "value": "#Scenario Outline: Adding product from Home Page"
    },
    {
      "line": 75,
      "value": "#"
    },
    {
      "line": 76,
      "value": "#Given user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and clicks on login button"
    },
    {
      "line": 77,
      "value": "#When user is on swag labs home page"
    },
    {
      "line": 78,
      "value": "#Then user adds product from home page"
    },
    {
      "line": 79,
      "value": "#|productname|"
    },
    {
      "line": 80,
      "value": "#|Sauce Labs Backpack|"
    },
    {
      "line": 81,
      "value": "#|Sauce Labs Bike Light|"
    },
    {
      "line": 82,
      "value": "#|Sauce Labs Bolt T-Shirt|"
    },
    {
      "line": 83,
      "value": "#"
    },
    {
      "line": 84,
      "value": "#Examples:"
    },
    {
      "line": 85,
      "value": "#|username|password|"
    },
    {
      "line": 86,
      "value": "#|standard_user|secret_sauce|"
    },
    {
      "line": 87,
      "value": "#|performance_glitch_user|secret_sauce|"
    }
  ],
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
  "duration": 81700,
  "status": "passed"
});
formatter.before({
  "duration": 2014009900,
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
  "duration": 538515300,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 19592000,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_product_details_page(DataTable)"
});
formatter.result({
  "duration": 2907958900,
  "status": "passed"
});
formatter.after({
  "duration": 632981800,
  "status": "passed"
});
formatter.after({
  "duration": 50900,
  "status": "passed"
});
formatter.before({
  "duration": 77500,
  "status": "passed"
});
formatter.before({
  "duration": 3845346600,
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
  "duration": 5538671100,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 18997000,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_product_details_page(DataTable)"
});
formatter.result({
  "duration": 33113933100,
  "status": "passed"
});
formatter.after({
  "duration": 580766300,
  "status": "passed"
});
formatter.after({
  "duration": 34300,
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
  "duration": 31300,
  "status": "passed"
});
formatter.before({
  "duration": 2036377000,
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
  "duration": 470469100,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 56811000,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 420880000,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_continue_shopping_from_cart()"
});
formatter.result({
  "duration": 192993500,
  "status": "passed"
});
formatter.after({
  "duration": 593201400,
  "status": "passed"
});
formatter.after({
  "duration": 34100,
  "status": "passed"
});
formatter.before({
  "duration": 42400,
  "status": "passed"
});
formatter.before({
  "duration": 1970171700,
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
  "duration": 5548472700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 26537000,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 403079100,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_continue_shopping_from_cart()"
});
formatter.result({
  "duration": 5206327200,
  "status": "passed"
});
formatter.after({
  "duration": 582573400,
  "status": "passed"
});
formatter.after({
  "duration": 32600,
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
  "duration": 71000,
  "status": "passed"
});
formatter.before({
  "duration": 1940330400,
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
  "duration": 500716100,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 19737100,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 487193500,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_removes_product_from_cart()"
});
formatter.result({
  "duration": 301484100,
  "status": "passed"
});
formatter.after({
  "duration": 599658600,
  "status": "passed"
});
formatter.after({
  "duration": 33100,
  "status": "passed"
});
formatter.before({
  "duration": 77700,
  "status": "passed"
});
formatter.before({
  "duration": 1975348400,
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
  "duration": 5527165500,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 17829800,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 444092600,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_removes_product_from_cart()"
});
formatter.result({
  "duration": 5286937800,
  "status": "passed"
});
formatter.after({
  "duration": 592678500,
  "status": "passed"
});
formatter.after({
  "duration": 34500,
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
  "duration": 55000,
  "status": "passed"
});
formatter.before({
  "duration": 3907393000,
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
  "duration": 595937900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 159191300,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 380688500,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_checkout_product_from_cart()"
});
formatter.result({
  "duration": 219400600,
  "status": "passed"
});
formatter.after({
  "duration": 598116700,
  "status": "passed"
});
formatter.after({
  "duration": 127600,
  "status": "passed"
});
formatter.before({
  "duration": 91700,
  "status": "passed"
});
formatter.before({
  "duration": 1967574800,
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
  "duration": 5559811800,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 26922100,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 443488400,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_checkout_product_from_cart()"
});
formatter.result({
  "duration": 236636100,
  "status": "passed"
});
formatter.after({
  "duration": 612448500,
  "status": "passed"
});
formatter.after({
  "duration": 35300,
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
  "duration": 34800,
  "status": "passed"
});
formatter.before({
  "duration": 3872960100,
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
  "duration": 492846200,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 25656400,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 398439800,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_checkout_product_from_cart()"
});
formatter.result({
  "duration": 218839700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_tries_to_checkout_product_from_cart_without_buyer_data()"
});
formatter.result({
  "duration": 442065800,
  "status": "passed"
});
formatter.after({
  "duration": 593305600,
  "status": "passed"
});
formatter.after({
  "duration": 27900,
  "status": "passed"
});
formatter.before({
  "duration": 30100,
  "status": "passed"
});
formatter.before({
  "duration": 1951000500,
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
  "duration": 5545842800,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 24522500,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 431837800,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_checkout_product_from_cart()"
});
formatter.result({
  "duration": 220191500,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_tries_to_checkout_product_from_cart_without_buyer_data()"
});
formatter.result({
  "duration": 454598000,
  "status": "passed"
});
formatter.after({
  "duration": 592053300,
  "status": "passed"
});
formatter.after({
  "duration": 32000,
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
  "duration": 35000,
  "status": "passed"
});
formatter.before({
  "duration": 2055082800,
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
  "duration": 466531500,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 22794900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 494137200,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_checkout_product_from_cart()"
});
formatter.result({
  "duration": 217577400,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_cancels_checkout_process()"
});
formatter.result({
  "duration": 114435300,
  "status": "passed"
});
formatter.after({
  "duration": 583579000,
  "status": "passed"
});
formatter.after({
  "duration": 35800,
  "status": "passed"
});
formatter.before({
  "duration": 198700,
  "status": "passed"
});
formatter.before({
  "duration": 2093770400,
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
  "duration": 5514993200,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 20289400,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 432775600,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_checkout_product_from_cart()"
});
formatter.result({
  "duration": 242339400,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_cancels_checkout_process()"
});
formatter.result({
  "duration": 135231400,
  "status": "passed"
});
formatter.after({
  "duration": 583900500,
  "status": "passed"
});
formatter.after({
  "duration": 33600,
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
  "duration": 72100,
  "status": "passed"
});
formatter.before({
  "duration": 1956034900,
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
  "duration": 439370400,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 19158200,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 531884500,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_checkout_product_from_cart()"
});
formatter.result({
  "duration": 278520400,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_continue_checkout_with_buyer_data()"
});
formatter.result({
  "duration": 446454000,
  "status": "passed"
});
formatter.after({
  "duration": 616856400,
  "status": "passed"
});
formatter.after({
  "duration": 32400,
  "status": "passed"
});
formatter.before({
  "duration": 88800,
  "status": "passed"
});
formatter.before({
  "duration": 2026342500,
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
  "duration": 5513879800,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 19211600,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 414105700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_checkout_product_from_cart()"
});
formatter.result({
  "duration": 223505600,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_continue_checkout_with_buyer_data()"
});
formatter.result({
  "duration": 435762300,
  "status": "passed"
});
formatter.after({
  "duration": 585465800,
  "status": "passed"
});
formatter.after({
  "duration": 33300,
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
  "duration": 29100,
  "status": "passed"
});
formatter.before({
  "duration": 1963022300,
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
  "duration": 503351000,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 25335800,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 375963500,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_checkout_product_from_cart()"
});
formatter.result({
  "duration": 190013600,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_continue_checkout_with_buyer_data()"
});
formatter.result({
  "duration": 430946700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_cancels_checkout_process()"
});
formatter.result({
  "duration": 131580100,
  "status": "passed"
});
formatter.after({
  "duration": 590086700,
  "status": "passed"
});
formatter.after({
  "duration": 143500,
  "status": "passed"
});
formatter.before({
  "duration": 71500,
  "status": "passed"
});
formatter.before({
  "duration": 1992014700,
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
  "duration": 5574527100,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 24635400,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 452317500,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_checkout_product_from_cart()"
});
formatter.result({
  "duration": 226560200,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_continue_checkout_with_buyer_data()"
});
formatter.result({
  "duration": 445607800,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_cancels_checkout_process()"
});
formatter.result({
  "duration": 5175682400,
  "status": "passed"
});
formatter.after({
  "duration": 628209900,
  "status": "passed"
});
formatter.after({
  "duration": 37100,
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
  "duration": 29200,
  "status": "passed"
});
formatter.before({
  "duration": 2104785400,
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
  "duration": 430915300,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 67441600,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_product_details_page(DataTable)"
});
formatter.result({
  "duration": 70300,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_checkout_product_from_cart()"
});
formatter.result({
  "duration": 390791100,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_continue_checkout_with_buyer_data()"
});
formatter.result({
  "duration": 435129000,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_finish_checkout_process()"
});
formatter.result({
  "duration": 190419900,
  "status": "passed"
});
formatter.after({
  "duration": 606555100,
  "status": "passed"
});
formatter.after({
  "duration": 34100,
  "status": "passed"
});
formatter.before({
  "duration": 30500,
  "status": "passed"
});
formatter.before({
  "duration": 2023604300,
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
  "duration": 5536572800,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 30197800,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_product_details_page(DataTable)"
});
formatter.result({
  "duration": 68600,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_checkout_product_from_cart()"
});
formatter.result({
  "duration": 433891800,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_continue_checkout_with_buyer_data()"
});
formatter.result({
  "duration": 408651200,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_finish_checkout_process()"
});
formatter.result({
  "duration": 189876700,
  "status": "passed"
});
formatter.after({
  "duration": 592771700,
  "status": "passed"
});
formatter.after({
  "duration": 1526400,
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
  "duration": 37400,
  "status": "passed"
});
formatter.before({
  "duration": 1932681100,
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
  "duration": 495102000,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 26016400,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 1099309700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_checkout_product_from_cart()"
});
formatter.result({
  "duration": 223348600,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_continue_checkout_with_buyer_data()"
});
formatter.result({
  "duration": 428193000,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_finish_checkout_process()"
});
formatter.result({
  "duration": 222550600,
  "status": "passed"
});
formatter.after({
  "duration": 599033000,
  "status": "passed"
});
formatter.after({
  "duration": 34400,
  "status": "passed"
});
formatter.before({
  "duration": 75400,
  "status": "passed"
});
formatter.before({
  "duration": 2030805600,
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
  "duration": 5565716800,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 35989500,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 1021922600,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_checkout_product_from_cart()"
});
formatter.result({
  "duration": 216045300,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_continue_checkout_with_buyer_data()"
});
formatter.result({
  "duration": 412441300,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_finish_checkout_process()"
});
formatter.result({
  "duration": 189071100,
  "status": "passed"
});
formatter.after({
  "duration": 613451200,
  "status": "passed"
});
formatter.after({
  "duration": 33100,
  "status": "passed"
});
});