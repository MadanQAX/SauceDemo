$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SauceDemo.feature");
formatter.feature({
  "line": 1,
  "name": "Sauce Demo Application Testing Feature",
  "description": "",
  "id": "sauce-demo-application-testing-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "###Test Scenario 1"
    }
  ],
  "line": 5,
  "name": "Swag Labs Login with Valid User",
  "description": "",
  "id": "sauce-demo-application-testing-feature;swag-labs-login-with-valid-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and clicks on login button",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user is on home page and check for prodcuts",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "sauce-demo-application-testing-feature;swag-labs-login-with-valid-user;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 11,
      "id": "sauce-demo-application-testing-feature;swag-labs-login-with-valid-user;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 12,
      "id": "sauce-demo-application-testing-feature;swag-labs-login-with-valid-user;;2"
    },
    {
      "cells": [
        "problem_user",
        "secret_sauce"
      ],
      "line": 13,
      "id": "sauce-demo-application-testing-feature;swag-labs-login-with-valid-user;;3"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ],
      "line": 14,
      "id": "sauce-demo-application-testing-feature;swag-labs-login-with-valid-user;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 258100,
  "status": "passed"
});
formatter.before({
  "duration": 7327824600,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Swag Labs Login with Valid User",
  "description": "",
  "id": "sauce-demo-application-testing-feature;swag-labs-login-with-valid-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user enters \"standard_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
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
  "duration": 579162800,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_home_page_and_check_for_products()"
});
formatter.result({
  "duration": 50337100,
  "status": "passed"
});
formatter.after({
  "duration": 541665300,
  "status": "passed"
});
formatter.after({
  "duration": 52000,
  "status": "passed"
});
formatter.before({
  "duration": 459200,
  "status": "passed"
});
formatter.before({
  "duration": 2844327300,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Swag Labs Login with Valid User",
  "description": "",
  "id": "sauce-demo-application-testing-feature;swag-labs-login-with-valid-user;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user enters \"problem_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
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
  "duration": 775440700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_home_page_and_check_for_products()"
});
formatter.result({
  "duration": 37019500,
  "status": "passed"
});
formatter.after({
  "duration": 539393700,
  "status": "passed"
});
formatter.after({
  "duration": 149600,
  "status": "passed"
});
formatter.before({
  "duration": 50300,
  "status": "passed"
});
formatter.before({
  "duration": 2840261000,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Swag Labs Login with Valid User",
  "description": "",
  "id": "sauce-demo-application-testing-feature;swag-labs-login-with-valid-user;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user enters \"performance_glitch_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
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
  "duration": 5484233600,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_home_page_and_check_for_products()"
});
formatter.result({
  "duration": 53657300,
  "status": "passed"
});
formatter.after({
  "duration": 543561100,
  "status": "passed"
});
formatter.after({
  "duration": 45200,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 16,
      "value": "####Test Scenario 2"
    }
  ],
  "line": 18,
  "name": "Swag Labs Login with Invalid User",
  "description": "",
  "id": "sauce-demo-application-testing-feature;swag-labs-login-with-invalid-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@login"
    },
    {
      "line": 17,
      "name": "@negativescenario"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and clicks on login button",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "verify error message \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
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
      "line": 24,
      "id": "sauce-demo-application-testing-feature;swag-labs-login-with-invalid-user;;1"
    },
    {
      "cells": [
        "standarduser",
        "secret_sauce",
        "Epic sadface: Username and password do not match any user in this service"
      ],
      "line": 25,
      "id": "sauce-demo-application-testing-feature;swag-labs-login-with-invalid-user;;2"
    },
    {
      "cells": [
        "standard_user",
        "secretsauce",
        "Epic sadface: Username and password do not match any user in this service"
      ],
      "line": 26,
      "id": "sauce-demo-application-testing-feature;swag-labs-login-with-invalid-user;;3"
    },
    {
      "cells": [
        "locked_out_user",
        "secret_sauce",
        "Epic sadface: Sorry, this user has been locked out."
      ],
      "line": 27,
      "id": "sauce-demo-application-testing-feature;swag-labs-login-with-invalid-user;;4"
    },
    {
      "cells": [
        "test_user",
        "secret_sauce",
        "Epic sadface: Username and password do not match any user in this service"
      ],
      "line": 28,
      "id": "sauce-demo-application-testing-feature;swag-labs-login-with-invalid-user;;5"
    },
    {
      "cells": [
        "",
        "secret_sauce",
        "Epic sadface: Username is required"
      ],
      "line": 29,
      "id": "sauce-demo-application-testing-feature;swag-labs-login-with-invalid-user;;6"
    },
    {
      "cells": [
        "standard_user",
        "",
        "Epic sadface: Password is required"
      ],
      "line": 30,
      "id": "sauce-demo-application-testing-feature;swag-labs-login-with-invalid-user;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 38100,
  "status": "passed"
});
formatter.before({
  "duration": 2884819700,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Swag Labs Login with Invalid User",
  "description": "",
  "id": "sauce-demo-application-testing-feature;swag-labs-login-with-invalid-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@login"
    },
    {
      "line": 17,
      "name": "@negativescenario"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "user enters \"standarduser\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 21,
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
  "duration": 283469100,
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
  "duration": 48298000,
  "status": "passed"
});
formatter.after({
  "duration": 537832500,
  "status": "passed"
});
formatter.after({
  "duration": 85200,
  "status": "passed"
});
formatter.before({
  "duration": 35800,
  "status": "passed"
});
formatter.before({
  "duration": 2904596200,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Swag Labs Login with Invalid User",
  "description": "",
  "id": "sauce-demo-application-testing-feature;swag-labs-login-with-invalid-user;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@login"
    },
    {
      "line": 17,
      "name": "@negativescenario"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "user enters \"standard_user\" and \"secretsauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 21,
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
  "duration": 293449000,
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
  "duration": 52668400,
  "status": "passed"
});
formatter.after({
  "duration": 557823900,
  "status": "passed"
});
formatter.after({
  "duration": 44200,
  "status": "passed"
});
formatter.before({
  "duration": 46800,
  "status": "passed"
});
formatter.before({
  "duration": 2914788500,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Swag Labs Login with Invalid User",
  "description": "",
  "id": "sauce-demo-application-testing-feature;swag-labs-login-with-invalid-user;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@login"
    },
    {
      "line": 17,
      "name": "@negativescenario"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "user enters \"locked_out_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 21,
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
  "duration": 321223300,
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
  "duration": 49297900,
  "status": "passed"
});
formatter.after({
  "duration": 535654900,
  "status": "passed"
});
formatter.after({
  "duration": 46000,
  "status": "passed"
});
formatter.before({
  "duration": 74400,
  "status": "passed"
});
formatter.before({
  "duration": 2919012700,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Swag Labs Login with Invalid User",
  "description": "",
  "id": "sauce-demo-application-testing-feature;swag-labs-login-with-invalid-user;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@login"
    },
    {
      "line": 17,
      "name": "@negativescenario"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "user enters \"test_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 21,
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
  "duration": 281836100,
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
  "duration": 48000800,
  "status": "passed"
});
formatter.after({
  "duration": 536407800,
  "status": "passed"
});
formatter.after({
  "duration": 44500,
  "status": "passed"
});
formatter.before({
  "duration": 45500,
  "status": "passed"
});
formatter.before({
  "duration": 2917032000,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Swag Labs Login with Invalid User",
  "description": "",
  "id": "sauce-demo-application-testing-feature;swag-labs-login-with-invalid-user;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@login"
    },
    {
      "line": 17,
      "name": "@negativescenario"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "user enters \"\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 21,
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
  "duration": 242337400,
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
  "duration": 50791100,
  "status": "passed"
});
formatter.after({
  "duration": 536403500,
  "status": "passed"
});
formatter.after({
  "duration": 40200,
  "status": "passed"
});
formatter.before({
  "duration": 41700,
  "status": "passed"
});
formatter.before({
  "duration": 2906324800,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Swag Labs Login with Invalid User",
  "description": "",
  "id": "sauce-demo-application-testing-feature;swag-labs-login-with-invalid-user;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@login"
    },
    {
      "line": 17,
      "name": "@negativescenario"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "user enters \"standard_user\" and \"\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 21,
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
  "duration": 246057200,
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
  "duration": 47480900,
  "status": "passed"
});
formatter.after({
  "duration": 535774100,
  "status": "passed"
});
formatter.after({
  "duration": 40100,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 33,
      "value": "###Test Scenario 3"
    }
  ],
  "line": 35,
  "name": "Verify Products on Home Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;verify-products-on-home-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 34,
      "name": "@homepage"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and clicks on login button",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "verify products on home page",
  "keyword": "Then "
});
formatter.examples({
  "line": 41,
  "name": "",
  "description": "",
  "id": "sauce-demo-application-testing-feature;verify-products-on-home-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 42,
      "id": "sauce-demo-application-testing-feature;verify-products-on-home-page;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 43,
      "id": "sauce-demo-application-testing-feature;verify-products-on-home-page;;2"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ],
      "line": 44,
      "id": "sauce-demo-application-testing-feature;verify-products-on-home-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 44800,
  "status": "passed"
});
formatter.before({
  "duration": 2847027900,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Verify Products on Home Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;verify-products-on-home-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 34,
      "name": "@homepage"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "user enters \"standard_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 39,
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
  "duration": 458499600,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 45701900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_products_on_home_page()"
});
formatter.result({
  "duration": 565914400,
  "status": "passed"
});
formatter.after({
  "duration": 548888300,
  "status": "passed"
});
formatter.after({
  "duration": 43400,
  "status": "passed"
});
formatter.before({
  "duration": 45100,
  "status": "passed"
});
formatter.before({
  "duration": 2924039500,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Verify Products on Home Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;verify-products-on-home-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 34,
      "name": "@homepage"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "user enters \"performance_glitch_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 39,
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
  "duration": 5494814900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 43040800,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_products_on_home_page()"
});
formatter.result({
  "duration": 510728100,
  "status": "passed"
});
formatter.after({
  "duration": 598984200,
  "status": "passed"
});
formatter.after({
  "duration": 42700,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 47,
      "value": "###Test Scenario 4"
    }
  ],
  "line": 49,
  "name": "Sort Products on Home Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;sort-products-on-home-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 48,
      "name": "@homepage"
    },
    {
      "line": 48,
      "name": "@sort"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and clicks on login button",
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "verify user can sort products",
  "rows": [
    {
      "cells": [
        "value",
        "message",
        "firstproduct"
      ],
      "line": 54
    },
    {
      "cells": [
        "za",
        "1st product displayed after sort of Z to A:",
        "Test.allTheThings() T-Shirt (Red)"
      ],
      "line": 55
    },
    {
      "cells": [
        "lohi",
        "1st product displayed after sort of Low to High:",
        "Sauce Labs Onesie"
      ],
      "line": 56
    },
    {
      "cells": [
        "hilo",
        "1st product displayed after sort of High to Low:",
        "Sauce Labs Fleece Jacket"
      ],
      "line": 57
    },
    {
      "cells": [
        "az",
        "1st product displayed after sort of A to Z:",
        "Sauce Labs Backpack"
      ],
      "line": 58
    }
  ],
  "keyword": "Then "
});
formatter.examples({
  "line": 60,
  "name": "",
  "description": "",
  "id": "sauce-demo-application-testing-feature;sort-products-on-home-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 61,
      "id": "sauce-demo-application-testing-feature;sort-products-on-home-page;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 62,
      "id": "sauce-demo-application-testing-feature;sort-products-on-home-page;;2"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ],
      "line": 63,
      "id": "sauce-demo-application-testing-feature;sort-products-on-home-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 37900,
  "status": "passed"
});
formatter.before({
  "duration": 2986953800,
  "status": "passed"
});
formatter.scenario({
  "line": 62,
  "name": "Sort Products on Home Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;sort-products-on-home-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 48,
      "name": "@homepage"
    },
    {
      "line": 48,
      "name": "@sort"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "user enters \"standard_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "verify user can sort products",
  "rows": [
    {
      "cells": [
        "value",
        "message",
        "firstproduct"
      ],
      "line": 54
    },
    {
      "cells": [
        "za",
        "1st product displayed after sort of Z to A:",
        "Test.allTheThings() T-Shirt (Red)"
      ],
      "line": 55
    },
    {
      "cells": [
        "lohi",
        "1st product displayed after sort of Low to High:",
        "Sauce Labs Onesie"
      ],
      "line": 56
    },
    {
      "cells": [
        "hilo",
        "1st product displayed after sort of High to Low:",
        "Sauce Labs Fleece Jacket"
      ],
      "line": 57
    },
    {
      "cells": [
        "az",
        "1st product displayed after sort of A to Z:",
        "Sauce Labs Backpack"
      ],
      "line": 58
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
  "duration": 461047200,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 40528000,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_can_sort_products(DataTable)"
});
formatter.result({
  "duration": 896103000,
  "status": "passed"
});
formatter.after({
  "duration": 578563900,
  "status": "passed"
});
formatter.after({
  "duration": 47700,
  "status": "passed"
});
formatter.before({
  "duration": 46100,
  "status": "passed"
});
formatter.before({
  "duration": 1525673800,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "Sort Products on Home Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;sort-products-on-home-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 48,
      "name": "@homepage"
    },
    {
      "line": 48,
      "name": "@sort"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "user enters \"performance_glitch_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "verify user can sort products",
  "rows": [
    {
      "cells": [
        "value",
        "message",
        "firstproduct"
      ],
      "line": 54
    },
    {
      "cells": [
        "za",
        "1st product displayed after sort of Z to A:",
        "Test.allTheThings() T-Shirt (Red)"
      ],
      "line": 55
    },
    {
      "cells": [
        "lohi",
        "1st product displayed after sort of Low to High:",
        "Sauce Labs Onesie"
      ],
      "line": 56
    },
    {
      "cells": [
        "hilo",
        "1st product displayed after sort of High to Low:",
        "Sauce Labs Fleece Jacket"
      ],
      "line": 57
    },
    {
      "cells": [
        "az",
        "1st product displayed after sort of A to Z:",
        "Sauce Labs Backpack"
      ],
      "line": 58
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
  "duration": 5530673900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 39459400,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_can_sort_products(DataTable)"
});
formatter.result({
  "duration": 522813700,
  "status": "passed"
});
formatter.after({
  "duration": 562687200,
  "status": "passed"
});
formatter.after({
  "duration": 44300,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 65,
      "value": "###Test Scenario 5"
    }
  ],
  "line": 67,
  "name": "All Items option of hamburger",
  "description": "",
  "id": "sauce-demo-application-testing-feature;all-items-option-of-hamburger",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 66,
      "name": "@homepage"
    },
    {
      "line": 66,
      "name": "@hamburger"
    }
  ]
});
formatter.step({
  "line": 69,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and clicks on login button",
  "keyword": "Given "
});
formatter.step({
  "line": 70,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "user clicks on all items",
  "keyword": "Then "
});
formatter.examples({
  "line": 73,
  "name": "",
  "description": "",
  "id": "sauce-demo-application-testing-feature;all-items-option-of-hamburger;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 74,
      "id": "sauce-demo-application-testing-feature;all-items-option-of-hamburger;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 75,
      "id": "sauce-demo-application-testing-feature;all-items-option-of-hamburger;;2"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ],
      "line": 76,
      "id": "sauce-demo-application-testing-feature;all-items-option-of-hamburger;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 39100,
  "status": "passed"
});
formatter.before({
  "duration": 2832144200,
  "status": "passed"
});
formatter.scenario({
  "line": 75,
  "name": "All Items option of hamburger",
  "description": "",
  "id": "sauce-demo-application-testing-feature;all-items-option-of-hamburger;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 66,
      "name": "@homepage"
    },
    {
      "line": 66,
      "name": "@hamburger"
    }
  ]
});
formatter.step({
  "line": 69,
  "name": "user enters \"standard_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 70,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "user clicks on all items",
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
  "duration": 559158700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 99932100,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_clicks_on_all_items()"
});
formatter.result({
  "duration": 328820300,
  "status": "passed"
});
formatter.after({
  "duration": 555578100,
  "status": "passed"
});
formatter.after({
  "duration": 41400,
  "status": "passed"
});
formatter.before({
  "duration": 45700,
  "status": "passed"
});
formatter.before({
  "duration": 2832977000,
  "status": "passed"
});
formatter.scenario({
  "line": 76,
  "name": "All Items option of hamburger",
  "description": "",
  "id": "sauce-demo-application-testing-feature;all-items-option-of-hamburger;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 66,
      "name": "@homepage"
    },
    {
      "line": 66,
      "name": "@hamburger"
    }
  ]
});
formatter.step({
  "line": 69,
  "name": "user enters \"performance_glitch_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 70,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "user clicks on all items",
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
  "duration": 5432990900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 50158900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_clicks_on_all_items()"
});
formatter.result({
  "duration": 5466358200,
  "status": "passed"
});
formatter.after({
  "duration": 547365800,
  "status": "passed"
});
formatter.after({
  "duration": 39400,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 78,
      "value": "###Test Scenario 6"
    }
  ],
  "line": 80,
  "name": "About option of hamburger",
  "description": "",
  "id": "sauce-demo-application-testing-feature;about-option-of-hamburger",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 79,
      "name": "@homepage"
    },
    {
      "line": 79,
      "name": "@hamburger"
    }
  ]
});
formatter.step({
  "line": 82,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and clicks on login button",
  "keyword": "Given "
});
formatter.step({
  "line": 83,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 84,
  "name": "user clicks on about",
  "keyword": "Then "
});
formatter.examples({
  "line": 86,
  "name": "",
  "description": "",
  "id": "sauce-demo-application-testing-feature;about-option-of-hamburger;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 87,
      "id": "sauce-demo-application-testing-feature;about-option-of-hamburger;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 88,
      "id": "sauce-demo-application-testing-feature;about-option-of-hamburger;;2"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ],
      "line": 89,
      "id": "sauce-demo-application-testing-feature;about-option-of-hamburger;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 527900,
  "status": "passed"
});
formatter.before({
  "duration": 2827892000,
  "status": "passed"
});
formatter.scenario({
  "line": 88,
  "name": "About option of hamburger",
  "description": "",
  "id": "sauce-demo-application-testing-feature;about-option-of-hamburger;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 79,
      "name": "@homepage"
    },
    {
      "line": 79,
      "name": "@hamburger"
    }
  ]
});
formatter.step({
  "line": 82,
  "name": "user enters \"standard_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 83,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 84,
  "name": "user clicks on about",
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
  "duration": 420658100,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 38891700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_clicks_on_about()"
});
formatter.result({
  "duration": 2473945500,
  "status": "passed"
});
formatter.after({
  "duration": 561049400,
  "status": "passed"
});
formatter.after({
  "duration": 450100,
  "status": "passed"
});
formatter.before({
  "duration": 53900,
  "status": "passed"
});
formatter.before({
  "duration": 2951610900,
  "status": "passed"
});
formatter.scenario({
  "line": 89,
  "name": "About option of hamburger",
  "description": "",
  "id": "sauce-demo-application-testing-feature;about-option-of-hamburger;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 79,
      "name": "@homepage"
    },
    {
      "line": 79,
      "name": "@hamburger"
    }
  ]
});
formatter.step({
  "line": 82,
  "name": "user enters \"performance_glitch_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 83,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 84,
  "name": "user clicks on about",
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
  "duration": 5488561400,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 43537600,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_clicks_on_about()"
});
formatter.result({
  "duration": 7205335500,
  "status": "passed"
});
formatter.after({
  "duration": 564291900,
  "status": "passed"
});
formatter.after({
  "duration": 54400,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 91,
      "value": "###Test Scenario 7"
    }
  ],
  "line": 93,
  "name": "Reset App State option of hamburger",
  "description": "",
  "id": "sauce-demo-application-testing-feature;reset-app-state-option-of-hamburger",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 92,
      "name": "@homepage"
    },
    {
      "line": 92,
      "name": "@hamburger"
    }
  ]
});
formatter.step({
  "line": 95,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and clicks on login button",
  "keyword": "Given "
});
formatter.step({
  "line": 96,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 97,
  "name": "user clicks on Reset App State",
  "keyword": "Then "
});
formatter.examples({
  "line": 99,
  "name": "",
  "description": "",
  "id": "sauce-demo-application-testing-feature;reset-app-state-option-of-hamburger;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 100,
      "id": "sauce-demo-application-testing-feature;reset-app-state-option-of-hamburger;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 101,
      "id": "sauce-demo-application-testing-feature;reset-app-state-option-of-hamburger;;2"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ],
      "line": 102,
      "id": "sauce-demo-application-testing-feature;reset-app-state-option-of-hamburger;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 39600,
  "status": "passed"
});
formatter.before({
  "duration": 2878039800,
  "status": "passed"
});
formatter.scenario({
  "line": 101,
  "name": "Reset App State option of hamburger",
  "description": "",
  "id": "sauce-demo-application-testing-feature;reset-app-state-option-of-hamburger;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 92,
      "name": "@homepage"
    },
    {
      "line": 92,
      "name": "@hamburger"
    }
  ]
});
formatter.step({
  "line": 95,
  "name": "user enters \"standard_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 96,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 97,
  "name": "user clicks on Reset App State",
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
  "duration": 418572300,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 41853100,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_clicks_on__Reset_App_State()"
});
formatter.result({
  "duration": 566477200,
  "status": "passed"
});
formatter.after({
  "duration": 541982200,
  "status": "passed"
});
formatter.after({
  "duration": 110800,
  "status": "passed"
});
formatter.before({
  "duration": 42500,
  "status": "passed"
});
formatter.before({
  "duration": 2906325700,
  "status": "passed"
});
formatter.scenario({
  "line": 102,
  "name": "Reset App State option of hamburger",
  "description": "",
  "id": "sauce-demo-application-testing-feature;reset-app-state-option-of-hamburger;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 92,
      "name": "@homepage"
    },
    {
      "line": 92,
      "name": "@hamburger"
    }
  ]
});
formatter.step({
  "line": 95,
  "name": "user enters \"performance_glitch_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 96,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 97,
  "name": "user clicks on Reset App State",
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
  "duration": 5456927000,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 39941300,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_clicks_on__Reset_App_State()"
});
formatter.result({
  "duration": 419745400,
  "status": "passed"
});
formatter.after({
  "duration": 559730100,
  "status": "passed"
});
formatter.after({
  "duration": 38900,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 104,
      "value": "###Test Scenario 8"
    }
  ],
  "line": 106,
  "name": "Logout option of hamburger",
  "description": "",
  "id": "sauce-demo-application-testing-feature;logout-option-of-hamburger",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 105,
      "name": "@homepage"
    },
    {
      "line": 105,
      "name": "@hamburger"
    }
  ]
});
formatter.step({
  "line": 108,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and clicks on login button",
  "keyword": "Given "
});
formatter.step({
  "line": 109,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 110,
  "name": "user clicks on logout",
  "keyword": "Then "
});
formatter.examples({
  "line": 112,
  "name": "",
  "description": "",
  "id": "sauce-demo-application-testing-feature;logout-option-of-hamburger;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 113,
      "id": "sauce-demo-application-testing-feature;logout-option-of-hamburger;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 114,
      "id": "sauce-demo-application-testing-feature;logout-option-of-hamburger;;2"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ],
      "line": 115,
      "id": "sauce-demo-application-testing-feature;logout-option-of-hamburger;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 38900,
  "status": "passed"
});
formatter.before({
  "duration": 2922532400,
  "status": "passed"
});
formatter.scenario({
  "line": 114,
  "name": "Logout option of hamburger",
  "description": "",
  "id": "sauce-demo-application-testing-feature;logout-option-of-hamburger;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 105,
      "name": "@homepage"
    },
    {
      "line": 105,
      "name": "@hamburger"
    }
  ]
});
formatter.step({
  "line": 108,
  "name": "user enters \"standard_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 109,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 110,
  "name": "user clicks on logout",
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
  "duration": 456230600,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 41816200,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_clicks_on_logout()"
});
formatter.result({
  "duration": 427710300,
  "status": "passed"
});
formatter.after({
  "duration": 548946700,
  "status": "passed"
});
formatter.after({
  "duration": 40300,
  "status": "passed"
});
formatter.before({
  "duration": 46500,
  "status": "passed"
});
formatter.before({
  "duration": 2824099400,
  "status": "passed"
});
formatter.scenario({
  "line": 115,
  "name": "Logout option of hamburger",
  "description": "",
  "id": "sauce-demo-application-testing-feature;logout-option-of-hamburger;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 105,
      "name": "@homepage"
    },
    {
      "line": 105,
      "name": "@hamburger"
    }
  ]
});
formatter.step({
  "line": 108,
  "name": "user enters \"performance_glitch_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 109,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 110,
  "name": "user clicks on logout",
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
  "duration": 5591081300,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 38752800,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_clicks_on_logout()"
});
formatter.result({
  "duration": 467445300,
  "status": "passed"
});
formatter.after({
  "duration": 539210600,
  "status": "passed"
});
formatter.after({
  "duration": 56800,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 117,
      "value": "###Test Scenario 9"
    }
  ],
  "line": 119,
  "name": "Adding products from Home Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;adding-products-from-home-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 118,
      "name": "@homepage"
    },
    {
      "line": 118,
      "name": "@addproduct"
    }
  ]
});
formatter.step({
  "line": 121,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and clicks on login button",
  "keyword": "Given "
});
formatter.step({
  "line": 122,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 123,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 124
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 125
    },
    {
      "cells": [
        "Sauce Labs Bike Light"
      ],
      "line": 126
    },
    {
      "cells": [
        "Sauce Labs Bolt T-Shirt"
      ],
      "line": 127
    }
  ],
  "keyword": "Then "
});
formatter.examples({
  "line": 129,
  "name": "",
  "description": "",
  "id": "sauce-demo-application-testing-feature;adding-products-from-home-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 130,
      "id": "sauce-demo-application-testing-feature;adding-products-from-home-page;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 131,
      "id": "sauce-demo-application-testing-feature;adding-products-from-home-page;;2"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ],
      "line": 132,
      "id": "sauce-demo-application-testing-feature;adding-products-from-home-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 77700,
  "status": "passed"
});
formatter.before({
  "duration": 2852739600,
  "status": "passed"
});
formatter.scenario({
  "line": 131,
  "name": "Adding products from Home Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;adding-products-from-home-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 118,
      "name": "@addproduct"
    },
    {
      "line": 118,
      "name": "@homepage"
    }
  ]
});
formatter.step({
  "line": 121,
  "name": "user enters \"standard_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 122,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 123,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 124
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 125
    },
    {
      "cells": [
        "Sauce Labs Bike Light"
      ],
      "line": 126
    },
    {
      "cells": [
        "Sauce Labs Bolt T-Shirt"
      ],
      "line": 127
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
  "duration": 410182400,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 37623000,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 776253900,
  "status": "passed"
});
formatter.after({
  "duration": 552712600,
  "status": "passed"
});
formatter.after({
  "duration": 39300,
  "status": "passed"
});
formatter.before({
  "duration": 40300,
  "status": "passed"
});
formatter.before({
  "duration": 2860745200,
  "status": "passed"
});
formatter.scenario({
  "line": 132,
  "name": "Adding products from Home Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;adding-products-from-home-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 118,
      "name": "@addproduct"
    },
    {
      "line": 118,
      "name": "@homepage"
    }
  ]
});
formatter.step({
  "line": 121,
  "name": "user enters \"performance_glitch_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 122,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 123,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 124
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 125
    },
    {
      "cells": [
        "Sauce Labs Bike Light"
      ],
      "line": 126
    },
    {
      "cells": [
        "Sauce Labs Bolt T-Shirt"
      ],
      "line": 127
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
  "duration": 5457153400,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 40471700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 5735734700,
  "status": "passed"
});
formatter.after({
  "duration": 558754600,
  "status": "passed"
});
formatter.after({
  "duration": 40500,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 134,
      "value": "###Test Scenario 10"
    }
  ],
  "line": 136,
  "name": "Remove products on home Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;remove-products-on-home-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 135,
      "name": "@homepage"
    },
    {
      "line": 135,
      "name": "@removeproduct"
    }
  ]
});
formatter.step({
  "line": 138,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and clicks on login button",
  "keyword": "Given "
});
formatter.step({
  "line": 139,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 140,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 141
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 142
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 143,
  "name": "user removes product on home page",
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
formatter.examples({
  "line": 147,
  "name": "",
  "description": "",
  "id": "sauce-demo-application-testing-feature;remove-products-on-home-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 148,
      "id": "sauce-demo-application-testing-feature;remove-products-on-home-page;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 149,
      "id": "sauce-demo-application-testing-feature;remove-products-on-home-page;;2"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ],
      "line": 150,
      "id": "sauce-demo-application-testing-feature;remove-products-on-home-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 41400,
  "status": "passed"
});
formatter.before({
  "duration": 2811095200,
  "status": "passed"
});
formatter.scenario({
  "line": 149,
  "name": "Remove products on home Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;remove-products-on-home-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 135,
      "name": "@removeproduct"
    },
    {
      "line": 135,
      "name": "@homepage"
    }
  ]
});
formatter.step({
  "line": 138,
  "name": "user enters \"standard_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 139,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 140,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 141
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 142
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 143,
  "name": "user removes product on home page",
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
  "duration": 405598800,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 76121500,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 546613300,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_removes_product_on_home_page(DataTable)"
});
formatter.result({
  "duration": 198873600,
  "status": "passed"
});
formatter.after({
  "duration": 542194300,
  "status": "passed"
});
formatter.after({
  "duration": 111300,
  "status": "passed"
});
formatter.before({
  "duration": 65000,
  "status": "passed"
});
formatter.before({
  "duration": 2820042100,
  "status": "passed"
});
formatter.scenario({
  "line": 150,
  "name": "Remove products on home Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;remove-products-on-home-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 135,
      "name": "@removeproduct"
    },
    {
      "line": 135,
      "name": "@homepage"
    }
  ]
});
formatter.step({
  "line": 138,
  "name": "user enters \"performance_glitch_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 139,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 140,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 141
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 142
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 143,
  "name": "user removes product on home page",
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
  "duration": 5507367000,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 53219300,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 5476068700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_removes_product_on_home_page(DataTable)"
});
formatter.result({
  "duration": 258109700,
  "status": "passed"
});
formatter.after({
  "duration": 540916600,
  "status": "passed"
});
formatter.after({
  "duration": 43800,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 152,
      "value": "###Test Scenario 11"
    }
  ],
  "line": 154,
  "name": "Adding product from Product Details Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;adding-product-from-product-details-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 153,
      "name": "@addproduct"
    },
    {
      "line": 153,
      "name": "@test"
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
  "name": "user adds product from product details page",
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
    },
    {
      "cells": [
        "Sauce Labs Bike Light"
      ],
      "line": 161
    },
    {
      "cells": [
        "Sauce Labs Bolt T-Shirt"
      ],
      "line": 162
    },
    {
      "cells": [
        "Sauce Labs Fleece Jacket"
      ],
      "line": 163
    },
    {
      "cells": [
        "Sauce Labs Onesie"
      ],
      "line": 164
    },
    {
      "cells": [
        "Test.allTheThings() T-Shirt (Red)"
      ],
      "line": 165
    }
  ],
  "keyword": "Then "
});
formatter.examples({
  "line": 167,
  "name": "",
  "description": "",
  "id": "sauce-demo-application-testing-feature;adding-product-from-product-details-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 168,
      "id": "sauce-demo-application-testing-feature;adding-product-from-product-details-page;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 169,
      "id": "sauce-demo-application-testing-feature;adding-product-from-product-details-page;;2"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ],
      "line": 170,
      "id": "sauce-demo-application-testing-feature;adding-product-from-product-details-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 72200,
  "status": "passed"
});
formatter.before({
  "duration": 2824413500,
  "status": "passed"
});
formatter.scenario({
  "line": 169,
  "name": "Adding product from Product Details Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;adding-product-from-product-details-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 153,
      "name": "@addproduct"
    },
    {
      "line": 153,
      "name": "@test"
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
  "name": "user adds product from product details page",
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
    },
    {
      "cells": [
        "Sauce Labs Bike Light"
      ],
      "line": 161
    },
    {
      "cells": [
        "Sauce Labs Bolt T-Shirt"
      ],
      "line": 162
    },
    {
      "cells": [
        "Sauce Labs Fleece Jacket"
      ],
      "line": 163
    },
    {
      "cells": [
        "Sauce Labs Onesie"
      ],
      "line": 164
    },
    {
      "cells": [
        "Test.allTheThings() T-Shirt (Red)"
      ],
      "line": 165
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
  "duration": 418911800,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 41986500,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_adds_product_from_product_details_page(DataTable)"
});
formatter.result({
  "duration": 2334228200,
  "status": "passed"
});
formatter.after({
  "duration": 548109800,
  "status": "passed"
});
formatter.after({
  "duration": 43700,
  "status": "passed"
});
formatter.before({
  "duration": 45700,
  "status": "passed"
});
formatter.before({
  "duration": 2878791600,
  "status": "passed"
});
formatter.scenario({
  "line": 170,
  "name": "Adding product from Product Details Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;adding-product-from-product-details-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 153,
      "name": "@addproduct"
    },
    {
      "line": 153,
      "name": "@test"
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
  "name": "user adds product from product details page",
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
    },
    {
      "cells": [
        "Sauce Labs Bike Light"
      ],
      "line": 161
    },
    {
      "cells": [
        "Sauce Labs Bolt T-Shirt"
      ],
      "line": 162
    },
    {
      "cells": [
        "Sauce Labs Fleece Jacket"
      ],
      "line": 163
    },
    {
      "cells": [
        "Sauce Labs Onesie"
      ],
      "line": 164
    },
    {
      "cells": [
        "Test.allTheThings() T-Shirt (Red)"
      ],
      "line": 165
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
  "duration": 5464028500,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 40732900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_adds_product_from_product_details_page(DataTable)"
});
formatter.result({
  "duration": 33038831300,
  "status": "passed"
});
formatter.after({
  "duration": 539541800,
  "status": "passed"
});
formatter.after({
  "duration": 49600,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 172,
      "value": "###Test Scenario 12"
    }
  ],
  "line": 174,
  "name": "Remove product from Product Details Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;remove-product-from-product-details-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 173,
      "name": "@addproduct"
    },
    {
      "line": 173,
      "name": "@removeproduct"
    }
  ]
});
formatter.step({
  "line": 176,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and clicks on login button",
  "keyword": "Given "
});
formatter.step({
  "line": 177,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 178,
  "name": "user adds product from product details page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 179
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 180
    },
    {
      "cells": [
        "Sauce Labs Bike Light"
      ],
      "line": 181
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 182,
  "name": "user removes products from product details page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 183
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 184
    },
    {
      "cells": [
        "Sauce Labs Bike Light"
      ],
      "line": 185
    }
  ],
  "keyword": "Then "
});
formatter.examples({
  "line": 187,
  "name": "",
  "description": "",
  "id": "sauce-demo-application-testing-feature;remove-product-from-product-details-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 188,
      "id": "sauce-demo-application-testing-feature;remove-product-from-product-details-page;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 189,
      "id": "sauce-demo-application-testing-feature;remove-product-from-product-details-page;;2"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ],
      "line": 190,
      "id": "sauce-demo-application-testing-feature;remove-product-from-product-details-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 53700,
  "status": "passed"
});
formatter.before({
  "duration": 2826789900,
  "status": "passed"
});
formatter.scenario({
  "line": 189,
  "name": "Remove product from Product Details Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;remove-product-from-product-details-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 173,
      "name": "@addproduct"
    },
    {
      "line": 173,
      "name": "@removeproduct"
    }
  ]
});
formatter.step({
  "line": 176,
  "name": "user enters \"standard_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 177,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 178,
  "name": "user adds product from product details page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 179
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 180
    },
    {
      "cells": [
        "Sauce Labs Bike Light"
      ],
      "line": 181
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 182,
  "name": "user removes products from product details page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 183
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 184
    },
    {
      "cells": [
        "Sauce Labs Bike Light"
      ],
      "line": 185
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
  "duration": 519189700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 133428000,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_adds_product_from_product_details_page(DataTable)"
});
formatter.result({
  "duration": 744357100,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_removes_products_from_product_details_page(DataTable)"
});
formatter.result({
  "duration": 721310000,
  "status": "passed"
});
formatter.after({
  "duration": 554667500,
  "status": "passed"
});
formatter.after({
  "duration": 44300,
  "status": "passed"
});
formatter.before({
  "duration": 46800,
  "status": "passed"
});
formatter.before({
  "duration": 3066924700,
  "status": "passed"
});
formatter.scenario({
  "line": 190,
  "name": "Remove product from Product Details Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;remove-product-from-product-details-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 173,
      "name": "@addproduct"
    },
    {
      "line": 173,
      "name": "@removeproduct"
    }
  ]
});
formatter.step({
  "line": 176,
  "name": "user enters \"performance_glitch_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 177,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 178,
  "name": "user adds product from product details page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 179
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 180
    },
    {
      "cells": [
        "Sauce Labs Bike Light"
      ],
      "line": 181
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 182,
  "name": "user removes products from product details page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 183
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 184
    },
    {
      "cells": [
        "Sauce Labs Bike Light"
      ],
      "line": 185
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
  "duration": 5517086300,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 49406800,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_adds_product_from_product_details_page(DataTable)"
});
formatter.result({
  "duration": 10966854300,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_removes_products_from_product_details_page(DataTable)"
});
formatter.result({
  "duration": 10795118900,
  "status": "passed"
});
formatter.after({
  "duration": 540749100,
  "status": "passed"
});
formatter.after({
  "duration": 39700,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 192,
      "value": "###Test Scenario 13"
    }
  ],
  "line": 194,
  "name": "Remove products on Cart page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;remove-products-on-cart-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 193,
      "name": "@cartpage"
    },
    {
      "line": 193,
      "name": "@removeproduct"
    }
  ]
});
formatter.step({
  "line": 196,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and clicks on login button",
  "keyword": "Given "
});
formatter.step({
  "line": 197,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 198,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 199
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 200
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 201,
  "name": "user removes products from cart",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 202
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 203
    }
  ],
  "keyword": "Then "
});
formatter.examples({
  "line": 205,
  "name": "",
  "description": "",
  "id": "sauce-demo-application-testing-feature;remove-products-on-cart-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 206,
      "id": "sauce-demo-application-testing-feature;remove-products-on-cart-page;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 207,
      "id": "sauce-demo-application-testing-feature;remove-products-on-cart-page;;2"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ],
      "line": 208,
      "id": "sauce-demo-application-testing-feature;remove-products-on-cart-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 48000,
  "status": "passed"
});
formatter.before({
  "duration": 2827335500,
  "status": "passed"
});
formatter.scenario({
  "line": 207,
  "name": "Remove products on Cart page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;remove-products-on-cart-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 193,
      "name": "@removeproduct"
    },
    {
      "line": 193,
      "name": "@cartpage"
    }
  ]
});
formatter.step({
  "line": 196,
  "name": "user enters \"standard_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 197,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 198,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 199
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 200
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 201,
  "name": "user removes products from cart",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 202
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 203
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
  "duration": 411805100,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 37428400,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 601261500,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_removes_products_from_cart(DataTable)"
});
formatter.result({
  "duration": 282326100,
  "status": "passed"
});
formatter.after({
  "duration": 534839700,
  "status": "passed"
});
formatter.after({
  "duration": 124600,
  "status": "passed"
});
formatter.before({
  "duration": 69200,
  "status": "passed"
});
formatter.before({
  "duration": 2845481300,
  "status": "passed"
});
formatter.scenario({
  "line": 208,
  "name": "Remove products on Cart page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;remove-products-on-cart-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 193,
      "name": "@removeproduct"
    },
    {
      "line": 193,
      "name": "@cartpage"
    }
  ]
});
formatter.step({
  "line": 196,
  "name": "user enters \"performance_glitch_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 197,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 198,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 199
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 200
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 201,
  "name": "user removes products from cart",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 202
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 203
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
  "duration": 5457677500,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 72230100,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 5529278500,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_removes_products_from_cart(DataTable)"
});
formatter.result({
  "duration": 321120600,
  "status": "passed"
});
formatter.after({
  "duration": 549699900,
  "status": "passed"
});
formatter.after({
  "duration": 41900,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 210,
      "value": "###Test Scenario 14"
    }
  ],
  "line": 212,
  "name": "Continue Shopping on Cart Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;continue-shopping-on-cart-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 211,
      "name": "@cartpage"
    }
  ]
});
formatter.step({
  "line": 214,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and clicks on login button",
  "keyword": "Given "
});
formatter.step({
  "line": 215,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 216,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 217
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 218
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 219,
  "name": "user continue shopping from cart",
  "keyword": "Then "
});
formatter.examples({
  "line": 221,
  "name": "",
  "description": "",
  "id": "sauce-demo-application-testing-feature;continue-shopping-on-cart-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 222,
      "id": "sauce-demo-application-testing-feature;continue-shopping-on-cart-page;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 223,
      "id": "sauce-demo-application-testing-feature;continue-shopping-on-cart-page;;2"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ],
      "line": 224,
      "id": "sauce-demo-application-testing-feature;continue-shopping-on-cart-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 46000,
  "status": "passed"
});
formatter.before({
  "duration": 2840498200,
  "status": "passed"
});
formatter.scenario({
  "line": 223,
  "name": "Continue Shopping on Cart Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;continue-shopping-on-cart-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 211,
      "name": "@cartpage"
    }
  ]
});
formatter.step({
  "line": 214,
  "name": "user enters \"standard_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 215,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 216,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 217
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 218
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 219,
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
  "duration": 419752700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 42038100,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 525528200,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_continue_shopping_from_cart()"
});
formatter.result({
  "duration": 317479800,
  "status": "passed"
});
formatter.after({
  "duration": 538036000,
  "status": "passed"
});
formatter.after({
  "duration": 40700,
  "status": "passed"
});
formatter.before({
  "duration": 37500,
  "status": "passed"
});
formatter.before({
  "duration": 2827692700,
  "status": "passed"
});
formatter.scenario({
  "line": 224,
  "name": "Continue Shopping on Cart Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;continue-shopping-on-cart-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 211,
      "name": "@cartpage"
    }
  ]
});
formatter.step({
  "line": 214,
  "name": "user enters \"performance_glitch_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 215,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 216,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 217
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 218
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 219,
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
  "duration": 5461086900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 36336800,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 5416657500,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_continue_shopping_from_cart()"
});
